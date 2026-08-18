import type { PricingPlan, Testimonial, FaqItem } from '../types/upgrade';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Học Thử Miễn Phí',
    tagline: 'Trải nghiệm phương pháp chiết tự cơ bản cho người mới bắt đầu',
    price: 0,
    period: 'vĩnh viễn',
    aiCredits: 50,
    gradient: 'from-slate-500 to-slate-700',
    features: [
      { text: 'Tra cứu 100+ Kanji cơ bản N5', included: true },
      { text: 'Sơ đồ chiết tự cơ bản', included: true },
      { text: 'Luyện tập Flashcard tối đa 20 từ/ngày', included: true },
      { text: '50 AI Credits dùng thử', included: true },
      { text: 'Phân tích câu (文の分析) giới hạn 3 câu/ngày', included: true },
      { text: 'Mở khóa 2.500+ Kanji từ N5 - N1', included: false },
      { text: 'Sơ đồ tư duy ngữ pháp toàn diện N5-N1', included: false },
      { text: 'Hệ thống lặp lại ngắt quãng SRS không giới hạn', included: false },
      { text: 'Đồng bộ tiến độ học tập trên đa thiết bị', included: false }
    ],
    ctaText: 'Đang Sử Dụng'
  },
  {
    id: 'yearly',
    name: 'Gói Pro Web (1 Năm)',
    tagline: 'Phù hợp cho lộ trình thi đỗ chứng chỉ JLPT trong năm nay',
    badge: 'Tiết Kiệm 10%',
    price: 499000,
    originalPrice: 549000,
    period: '/năm',
    aiCredits: 5000,
    gradient: 'from-blue-600 to-indigo-600',
    features: [
      { text: 'Mở khóa toàn bộ 2.500+ Kanji chiết tự N5 - N1', included: true, highlight: true },
      { text: 'Sơ đồ tư duy bản chất & Mnemonic cho từng chữ', included: true },
      { text: '5.000 AI Credits (Tra cứu ngữ cảnh, sửa văn)', included: true, highlight: true },
      { text: 'Phân tích câu (文の分析) không giới hạn', included: true },
      { text: 'Hệ thống Flashcard SRS lặp lại ngắt quãng', included: true },
      { text: 'Ngữ pháp Mindmap + Bảng chia động từ thông minh', included: true },
      { text: 'Bảng vẽ nét tay nhận diện Kanji bằng Canvas', included: true },
      { text: 'Đồng bộ tiến độ đám mây trên Mobile & Web', included: true },
      { text: 'Hỗ trợ giải đáp học tập qua cộng đồng', included: true }
    ],
    ctaText: 'Nâng Cấp Gói 1 Năm'
  },
  {
    id: 'lifetime',
    name: 'Gói Trọn Đời (Lifetime)',
    tagline: 'Đầu tư 1 lần duy nhất - Đồng hành suốt chặng đường chinh phục N1',
    badge: 'Khuyên Dùng (Hot)',
    popular: true,
    price: 1699000,
    originalPrice: 2499000,
    period: 'trọn đời',
    aiCredits: 20000,
    gradient: 'from-amber-500 via-orange-600 to-rose-600',
    features: [
      { text: 'Sở hữu trọn đời - Không bao giờ hết hạn', included: true, highlight: true },
      { text: 'Mở khóa 100% toàn bộ tính năng hiện tại & tương lai', included: true, highlight: true },
      { text: '20.000 AI Credits cực lớn + Bonus hàng tháng', included: true, highlight: true },
      { text: 'Toàn bộ kho tàng 2.500+ Kanji chiết tự cao cấp', included: true },
      { text: 'Lộ trình cá nhân hóa từ N5 lên thẳng N1', included: true },
      { text: 'Công cụ xuất file PDF luyện viết theo yêu cầu', included: true },
      { text: 'Tính năng Shadowing & Kaiwa AI nhập vai tương tác', included: true },
      { text: 'Ưu tiên hỗ trợ 1:1 từ đội ngũ Sensei', included: true },
      { text: 'Tặng kèm tài liệu Mindmap ngữ pháp độc quyền', included: true }
    ],
    ctaText: 'Sở Hữu Trọn Đời Ngay'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Trần Minh Hoàng',
    role: 'Kỹ sư cầu nối (BrSE) tại Tokyo',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    jlptTarget: 'Đã đỗ N1 với 158/180',
    comment: 'Trước đây mình học vẹt Kanji rất nhanh quên, nhưng từ khi học theo phương pháp chiết tự và hiểu sâu từng bộ thủ của Nhai Kanji, việc đọc báo Asahi và tài liệu dự án trở nên tự nhiên hơn rất nhiều!',
    rating: 5
  },
  {
    id: 't-2',
    name: 'Nguyễn Thảo Linh',
    role: 'Du học sinh tại Đại học Waseda',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    jlptTarget: 'Đỗ N2 trong 6 tháng',
    comment: 'Tính năng phân tích câu (文の分析) và Mindmap ngữ pháp thực sự là cứu cánh cho mình khi làm bài đọc hiểu Dokkai. Gói Trọn đời hoàn toàn xứng đáng từng đồng.',
    rating: 5
  },
  {
    id: 't-3',
    name: 'Lê Tuấn Anh',
    role: 'Lập trình viên Fullstack',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    jlptTarget: 'Đang ôn N3',
    comment: 'Giao diện mượt mà, dark mode đẹp mắt, tính năng Flashcard SRS giúp mình tận dụng 15 phút trên tàu điện mỗi ngày để nhớ 20 chữ Kanji cực kỳ nhàn!',
    rating: 5
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'payment',
    question: 'Sau khi thanh toán thì bao lâu tài khoản được kích hoạt?',
    answer: 'Hệ thống kích hoạt hoàn toàn tự động 24/7 qua mã QR VietQR / MoMo. Ngay sau khi ngân hàng xử lý giao dịch thành công (thường từ 10 - 30 giây), tài khoản của bạn sẽ tự động được nâng cấp lên gói Pro.'
  },
  {
    id: 'faq-2',
    category: 'account',
    question: 'Tôi có thể dùng chung tài khoản trên cả điện thoại và máy tính không?',
    answer: 'Có! Tài khoản Nhai Kanji Pro hỗ trợ đồng bộ dữ liệu đám mây trên mọi thiết bị (Laptop, PC, Tablet, Smartphone). Bạn có thể học bất cứ lúc nào mà không lo mất tiến độ.'
  },
  {
    id: 'faq-3',
    category: 'ai',
    question: 'AI Credits dùng để làm gì và khi hết có mua thêm được không?',
    answer: 'AI Credits dùng cho các tính năng nâng cao như: Phân tích ngữ cảnh chuyên sâu, Chấm và sửa bài viết theo barem JLPT, Trò chuyện hội thoại Kaiwa. Khi hết credits, bạn có thể dễ dàng nạp thêm bất kỳ lúc nào với giá cực ưu đãi.'
  },
  {
    id: 'faq-4',
    category: 'features',
    question: 'Gói Trọn Đời có phải trả thêm phí nào khác trong tương lai không?',
    answer: 'Tuyệt đối không! Với gói Trọn Đời, bạn chỉ cần thanh toán một lần duy nhất và được sở hữu vĩnh viễn toàn bộ kho dữ liệu, các bản cập nhật mới và tính năng tương lai mà không phát sinh thêm bất kỳ chi phí duy trì nào.'
  }
];
