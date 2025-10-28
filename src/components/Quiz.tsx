import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";
import { quizData } from "@/data/quizData";

type AnswerState = "correct" | "incorrect" | null;

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const incorrectAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio elements with placeholder sounds
    const basePath = import.meta.env.BASE_URL;
    correctAudioRef.current = new Audio(`${basePath}audio/correct.mp3`);
    incorrectAudioRef.current = new Audio(`${basePath}audio/incorrect.mp3`);
    
    // Set volume
    if (correctAudioRef.current) correctAudioRef.current.volume = 0.5;
    if (incorrectAudioRef.current) incorrectAudioRef.current.volume = 0.5;
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections

    setSelectedAnswer(answer);
    const isCorrect = answer === quizData[currentQuestion].correctAnswer;
    setAnswerState(isCorrect ? "correct" : "incorrect");
    setShowExplanation(true);

    if (isCorrect) {
      setScore(score + 1);
      correctAudioRef.current?.play().catch(e => console.log("Audio play failed:", e));
    } else {
      incorrectAudioRef.current?.play().catch(e => console.log("Audio play failed:", e));
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setAnswerState(null);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAnswerState(null);
    setQuizComplete(false);
  };

  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  const question = quizData[currentQuestion];

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl p-8 shadow-hover animate-scale-in">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <Trophy className="w-24 h-24 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Hoàn thành!
            </h2>
            
            <div className="space-y-2">
              <p className="text-6xl font-bold text-foreground">
                {score}/{quizData.length}
              </p>
              <p className="text-xl text-muted-foreground">
                Bạn đã trả lời đúng {score} trên {quizData.length} câu hỏi
              </p>
              <p className="text-lg font-semibold text-primary">
                Tỷ lệ: {Math.round((score / quizData.length) * 100)}%
              </p>
            </div>

            <Button 
              onClick={handleRestart}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Làm lại
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Quiz Triết học Mác - Lênin
            </h1>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Điểm số</p>
              <p className="text-2xl font-bold text-primary">{score}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Câu {currentQuestion + 1} / {quizData.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-card hover:shadow-hover transition-shadow animate-scale-in">
          <h2 className="text-2xl font-semibold mb-6 leading-relaxed">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option.key;
              const isCorrect = option.key === question.correctAnswer;
              let buttonClass = "w-full justify-start text-left h-auto py-4 px-6 text-lg transition-all";
              
              if (!selectedAnswer) {
                buttonClass += " hover:bg-primary/10 hover:border-primary hover:scale-[1.02]";
              } else if (isSelected && answerState === "correct") {
                buttonClass += " bg-gradient-success border-success text-success-foreground";
              } else if (isSelected && answerState === "incorrect") {
                buttonClass += " bg-gradient-error border-destructive text-destructive-foreground";
              } else if (isCorrect && showExplanation) {
                buttonClass += " bg-gradient-success border-success text-success-foreground";
              } else {
                buttonClass += " opacity-50";
              }

              return (
                <Button
                  key={option.key}
                  variant="outline"
                  className={buttonClass}
                  onClick={() => handleAnswerClick(option.key)}
                  disabled={!!selectedAnswer}
                >
                  <span className="font-semibold mr-3">{option.key}.</span>
                  <span className="flex-1">{option.text}</span>
                  {isSelected && answerState === "correct" && (
                    <CheckCircle2 className="w-6 h-6 ml-2 animate-scale-in" />
                  )}
                  {isSelected && answerState === "incorrect" && (
                    <XCircle className="w-6 h-6 ml-2 animate-scale-in" />
                  )}
                  {!isSelected && isCorrect && showExplanation && (
                    <CheckCircle2 className="w-6 h-6 ml-2 animate-scale-in" />
                  )}
                </Button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="mt-6 p-6 bg-muted rounded-lg animate-fade-in space-y-3">
              <div className="flex items-start gap-3">
                {answerState === "correct" ? (
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                ) : (
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                )}
                <div className="space-y-2 flex-1">
                  <p className="font-semibold text-lg">
                    {answerState === "correct" ? "Chính xác!" : "Không chính xác!"}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Đáp án đúng: </span>
                    <span className="text-success font-semibold">{question.correctAnswer}</span>
                  </p>
                  <p className="text-sm leading-relaxed">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next Button */}
          {showExplanation && (
            <div className="mt-6 flex justify-end animate-fade-in">
              <Button 
                onClick={handleNext}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {currentQuestion < quizData.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
