# 嚼 Nhai Kanji - Xóa Mù Kanji Qua Chiết Tự & Ngữ Pháp JLPT (N5 - N1)

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Nền tảng học tiếng Nhật theo phương pháp **"Chiết tự tư duy - Hiểu sâu bản chất"** giúp người học từ N5 đến N1 tiếp cận Hán tự tự nhiên, không nhồi nhét, kết hợp với bộ công cụ Phân tích câu (文の分析) và hệ thống Flashcard SRS.

---

## ✨ Tính Năng Nổi Bật

### 🈸 1. Tra Cứu Hán Tự & Sơ Đồ Chiết Tự Tư Duy
- **Tra cứu đa năng**: Tìm theo âm Hán Việt (`NHẬT`, `THỦY`, `NGUYỆT`), Romaji, Hiragana, Katakana hoặc Kanji.
- **Bảng vẽ nhận diện nét tay (Canvas Pad)**: Vẽ chữ Kanji trực tiếp bằng chuột hoặc cảm ứng trên màn hình để nhận diện.
- **Sơ đồ nhánh Chiết tự (Breakdown Mindmap)**: Bóc tách từng bộ thủ cấu thành chữ và giải thích ý nghĩa từng bộ phận.
- **Câu chuyện gợi nhớ hình tượng (Mnemonic Story)**: Câu chuyện ngắn ghi nhớ sâu sắc bản chất chữ Hán.
- **Từ ghép thông dụng & Phát âm âm thanh**: Hàng ngàn từ vựng thực tế kèm Furigana, dịch nghĩa tiếng Việt và giọng phát âm bản xứ (Web Speech API).

### 🧠 2. Phân Tích Cấu Trúc Câu (文の分析 - AI Beta) & Ngữ Pháp
- Nhập câu tiếng Nhật bất kỳ $\rightarrow$ Hệ thống tự động bóc tách từ loại (Danh từ, Động từ, Tính từ, Trợ từ は, が, を, に, で...).
- Hiển thị Furigana trên từng từ vựng và tra cứu âm Hán Việt nhanh chóng.
- Hệ thống Sơ đồ tư duy ngữ pháp đầy đủ từ **N5 đến N1** kèm công thức và ví dụ minh họa.

### 🎴 3. Luyện Tập Flashcard SRS (Spaced Repetition System)
- Hiệu ứng lật thẻ 3D mượt mà (Kanji $\leftrightarrow$ Chiết tự & Nghĩa).
- 3 mức độ đánh giá nhớ: *Chưa nhớ (Học lại ngay)*, *Đang nhớ (3 ngày)*, *Thuộc làu (7 ngày)*.
- Tự động theo dõi tiến độ học tập và chuỗi ngày học liên tiếp (Streak).

### 🎨 4. Kho Tàng 214 Bộ Thủ Khang Hy
- Danh mục 214 bộ thủ với số nét, tên Hán Việt, ý nghĩa chi tiết và các biến thể thông dụng.
- Bộ lọc nhanh theo số nét viết từ 1 đến 17 nét.

### 👑 5. Trang Nâng Cấp Bản Quyền (`/nang-cap`) & Thanh Toán QR
- Tái hiện đầy đủ giao diện gói dịch vụ:
  - **Gói Web (1 Năm)**: `499.000đ/năm` (Tiết kiệm 10%), tặng 5.000 AI Credits.
  - **Gói Trọn Đời (Lifetime Master)**: `1.699.000đ` vĩnh viễn, tặng 20.000 AI Credits.
- **Interactive Checkout Modal**: Tự động sinh mã VietQR theo số tiền và mã đơn hàng, tích hợp sao chép cú pháp chuyển khoản và cơ chế kích hoạt tài khoản Pro tức thì.
- Dark Mode & Light Mode sang trọng, giao diện tương thích hoàn hảo trên cả Máy tính (Desktop) và Điện thoại (Mobile).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu môi trường:
- Node.js >= 18.0.0
- npm hoặc yarn/pnpm

### Các bước khởi chạy:
```bash
# 1. Clone repository
git clone https://github.com/manhhb237/nhaikanji-web.git
cd nhaikanji-web

# 2. Cài đặt các thư viện phụ thuộc
npm install

# 3. Chạy môi trường phát triển (Dev Server)
npm run dev

# 4. Build sản phẩm hoàn chỉnh (Production)
npm run build
```

Mở trình duyệt tại địa chỉ: `http://localhost:5173/`

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)

| Thành phần | Công nghệ |
| :--- | :--- |
| **Frontend Framework** | React 19 + TypeScript + Vite |
| **Styling** | Tailwind CSS v4 + Glassmorphism Effects |
| **Icons** | Lucide React |
| **Animations & FX** | Canvas Confetti, CSS 3D Transforms |
| **Speech Audio** | Web Speech Synthesis API (`ja-JP`) |
| **Payment Integration** | VietQR Quick API & MoMo Simulation |

---

## 📄 License
Phát hành theo giấy phép [MIT License](LICENSE).
