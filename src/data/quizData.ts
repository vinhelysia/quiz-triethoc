export interface QuizQuestion {
  question: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  {
    question: "Câu 1: Theo triết học Mác – Lênin, con người là:",
    options: [
      { key: "A", text: "Một sinh vật thuần túy tự nhiên." },
      { key: "B", text: "Một thực thể xã hội hoàn toàn." },
      { key: "C", text: "Thống nhất giữa mặt sinh học và mặt xã hội." }
    ],
    correctAnswer: "C",
    explanation: "Con người vừa mang yếu tố sinh học (cơ thể, bản năng), vừa mang yếu tố xã hội (ý thức, lao động, quan hệ xã hội)."
  },
  {
    question: "Câu 2: Yếu tố nào làm con người khác với loài vật?",
    options: [
      { key: "A", text: "Có tư duy trừu tượng." },
      { key: "B", text: "Biết lao động sản xuất." },
      { key: "C", text: "Có cảm xúc và bản năng." }
    ],
    correctAnswer: "B",
    explanation: "Động vật chỉ biết thích nghi, còn con người biết lao động (cải biến tự nhiên, tạo ra công cụ, của cải và xã hội)."
  },
  {
    question: "Câu 3: Yếu tố quyết định bản chất xã hội của con người là gì?",
    options: [
      { key: "A", text: "Ngôn ngữ." },
      { key: "B", text: "Lao động." },
      { key: "C", text: "Tình cảm." }
    ],
    correctAnswer: "B",
    explanation: "Theo Mác, \"Chính lao động đã sáng tạo ra con người\", vì nhờ lao động con người hình thành ý thức, xã hội và văn hóa."
  },
  {
    question: "Câu 4: Theo Mác – Lênin, ai là chủ thể sáng tạo ra lịch sử xã hội?",
    options: [
      { key: "A", text: "Giai cấp cầm quyền." },
      { key: "B", text: "Con người hiện thực, trong hoạt động thực tiễn." },
      { key: "C", text: "Tự nhiên." }
    ],
    correctAnswer: "B",
    explanation: "Con người bằng lao động và ý thức của mình đã tự làm nên lịch sử thông qua hoạt động thực tiễn."
  },
  {
    question: "Câu 5: Ý nghĩa thực tiễn của quan điểm Mác – Lênin về con người là gì?",
    options: [
      { key: "A", text: "Xem con người như mục tiêu và động lực phát triển xã hội." },
      { key: "B", text: "Coi con người là yếu tố phụ thuộc vào tự nhiên." },
      { key: "C", text: "Đề cao vật chất, hạ thấp con người." }
    ],
    correctAnswer: "A",
    explanation: "Quan điểm này giúp ta lấy con người làm trung tâm, từ đó xây dựng xã hội công bằng, dân chủ, nhân văn."
  },
  {
    question: "Câu 6: Quan hệ giữa cá nhân và xã hội được hiểu như thế nào theo triết học Mác – Lênin?",
    options: [
      { key: "A", text: "Cá nhân tồn tại độc lập, không phụ thuộc vào xã hội." },
      { key: "B", text: "Cá nhân là sản phẩm của xã hội, đồng thời là chủ thể sáng tạo ra xã hội." },
      { key: "C", text: "Xã hội tồn tại nhờ sự hy sinh của cá nhân." }
    ],
    correctAnswer: "B",
    explanation: "Triết học Mác – Lênin khẳng định cá nhân hình thành trong xã hội, chịu ảnh hưởng của xã hội, nhưng cũng chính cá nhân lại là chủ thể sáng tạo, cải biến xã hội thông qua lao động và hoạt động thực tiễn."
  },
  {
    question: "Câu 7: Mối quan hệ giữa quần chúng nhân dân và lãnh tụ là gì?",
    options: [
      { key: "A", text: "Lãnh tụ quyết định tất cả, quần chúng chỉ làm theo." },
      { key: "B", text: "Quần chúng nhân dân là lực lượng quyết định, lãnh tụ có vai trò định hướng và tổ chức phong trào." },
      { key: "C", text: "Lãnh tụ và quần chúng nhân dân tồn tại tách biệt, không liên quan." }
    ],
    correctAnswer: "B",
    explanation: "Trong mối quan hệ biện chứng, quần chúng nhân dân là người làm nên lịch sử, còn lãnh tụ là người định hướng, tổ chức, dẫn dắt, và phải gắn bó chặt chẽ với quần chúng, tránh sùng bái cá nhân."
  },
  {
    question: "Hiện tượng tha hóa con người theo Mác là gì?",
    options: [
      { key: "A", text: "Con người trở nên xa lạ với chính mình và lao động của mình" },
      { key: "B", text: "Con người phát triển toàn diện" },
      { key: "C", text: "Lao động được giải phóng hoàn toàn" },
      { key: "D", text: "Xã hội đạt đến tự do tuyệt đối" }
    ],
    correctAnswer: "A",
    explanation: "Tha hóa là hiện tượng con người trở nên xa lạ với sản phẩm lao động, với bản thân và với người khác trong xã hội tư bản."
  },
  {
    question: "Theo Mác, nguyên nhân sâu xa của hiện tượng tha hóa con người là gì?",
    options: [
      { key: "A", text: "Khoa học kỹ thuật phát triển" },
      { key: "B", text: "Sự phân công lao động xã hội" },
      { key: "C", text: "Chế độ tư hữu về tư liệu sản xuất" },
      { key: "D", text: "Do ý thức con người yếu kém" }
    ],
    correctAnswer: "C",
    explanation: "Chế độ tư hữu về tư liệu sản xuất là nguyên nhân gốc rễ tạo nên sự tha hóa, khiến người lao động bị tách rời khỏi sản phẩm lao động."
  },
  {
    question: "Lao động bị tha hóa nghĩa là gì?",
    options: [
      { key: "A", text: "Lao động giúp con người tự do sáng tạo" },
      { key: "B", text: "Lao động bị biến thành hàng hóa, con người không làm chủ sản phẩm của mình" },
      { key: "C", text: "Lao động mang lại niềm vui và hạnh phúc" },
      { key: "D", text: "Lao động chỉ nhằm mục đích học tập" }
    ],
    correctAnswer: "B",
    explanation: "Trong xã hội tư bản, lao động trở thành hàng hóa, người công nhân không sở hữu sản phẩm mà mình tạo ra."
  },
  {
    question: "Giải phóng con người theo triết học Mác – Lênin là gì?",
    options: [
      { key: "A", text: "Giải phóng con người khỏi lao động" },
      { key: "B", text: "Giải phóng con người khỏi mọi hình thức áp bức, bóc lột" },
      { key: "C", text: "Giải phóng con người khỏi xã hội" },
      { key: "D", text: "Giải phóng con người khỏi tự nhiên" }
    ],
    correctAnswer: "B",
    explanation: "Giải phóng con người là giải phóng khỏi mọi hình thức áp bức, bóc lột, để con người được phát triển tự do và toàn diện."
  },
  {
    question: "Ai là người đầu tiên nêu ra tư tưởng \"giải phóng con người\" một cách triệt để trong triết học Mác – Lênin?",
    options: [
      { key: "A", text: "C. Mác" },
      { key: "B", text: "Ph. Ăngghen" },
      { key: "C", text: "V.I. Lênin" },
      { key: "D", text: "Hêghen" }
    ],
    correctAnswer: "A",
    explanation: "Karl Marx là người đầu tiên phát triển tư tưởng giải phóng con người một cách toàn diện trong học thuyết của mình."
  },
  {
    question: "\"Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người\" được nêu trong tác phẩm nào?",
    options: [
      { key: "A", text: "Hệ tư tưởng Đức" },
      { key: "B", text: "Tuyên ngôn của Đảng Cộng sản" },
      { key: "C", text: "Bộ Tư bản" },
      { key: "D", text: "Gia đình thần thánh" }
    ],
    correctAnswer: "B",
    explanation: "Câu nói nổi tiếng này xuất hiện trong \"Tuyên ngôn của Đảng Cộng sản\" do Mác và Ăngghen viết năm 1848."
  },
  {
    question: "Theo Mác, muốn con người được giải phóng thì trước hết phải làm gì?",
    options: [
      { key: "A", text: "Phát triển công nghiệp" },
      { key: "B", text: "Thủ tiêu chế độ tư hữu tư bản chủ nghĩa" },
      { key: "C", text: "Phát triển giáo dục" },
      { key: "D", text: "Nâng cao ý thức cá nhân" }
    ],
    correctAnswer: "B",
    explanation: "Điều kiện cơ bản để giải phóng con người là thủ tiêu chế độ tư hữu về tư liệu sản xuất - nguồn gốc của mọi áp bức và bóc lột."
  },
  {
    question: "Lao động trong xã hội cộng sản chủ nghĩa có đặc điểm gì?",
    options: [
      { key: "A", text: "Bị ép buộc" },
      { key: "B", text: "Tha hóa nghiêm trọng hơn" },
      { key: "C", text: "Trở thành nhu cầu tự nhiên, tự do và sáng tạo" },
      { key: "D", text: "Không còn tồn tại" }
    ],
    correctAnswer: "C",
    explanation: "Trong xã hội cộng sản chủ nghĩa, lao động không còn bị ép buộc mà trở thành nhu cầu thiết yếu, là phương tiện tự thể hiện và sáng tạo của con người."
  },
  {
    question: "Giải phóng con người gắn liền với mục tiêu gì của chủ nghĩa xã hội?",
    options: [
      { key: "A", text: "Tự do cho một giai cấp" },
      { key: "B", text: "Tự do, bình đẳng và phát triển toàn diện cho mọi người" },
      { key: "C", text: "Tăng năng suất lao động" },
      { key: "D", text: "Tích lũy tư bản" }
    ],
    correctAnswer: "B",
    explanation: "Mục tiêu cao nhất của chủ nghĩa xã hội là tạo điều kiện cho mọi người được tự do, bình đẳng và phát triển toàn diện về mọi mặt."
  },
  {
    question: "Hiện tượng \"tha hóa con người\" là kết quả của mâu thuẫn nào trong xã hội tư bản?",
    options: [
      { key: "A", text: "Mâu thuẫn giữa nhà nước và dân chúng" },
      { key: "B", text: "Mâu thuẫn giữa lao động và tư bản" },
      { key: "C", text: "Mâu thuẫn giữa cá nhân và tập thể" },
      { key: "D", text: "Mâu thuẫn giữa chủ và thợ" }
    ],
    correctAnswer: "B",
    explanation: "Mâu thuẫn giữa lao động và tư bản là mâu thuẫn cơ bản của chủ nghĩa tư bản, dẫn đến hiện tượng tha hóa con người."
  }
];
