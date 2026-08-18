import type { GrammarPoint } from '../types/grammar';

export const GRAMMAR_DATA: GrammarPoint[] = [
  // ================= N5 =================
  {
    id: 'g-n5-01',
    pattern: '~は ~です / ~ではありません',
    romaji: '~wa ~desu / ~dewa arimasen',
    vietnameseMeaning: 'A là B / A không phải là B',
    level: 'N5',
    category: 'Cấu trúc câu cơ bản',
    formation: 'N1 + は + N2 + です',
    explanation: 'Trợ từ は (đọc là wa) đánh dấu chủ ngữ hoặc chủ đề của câu. です là trợ động từ khẳng định lịch sự.',
    examples: [
      {
        japanese: '私はベトナム人です。',
        furigana: 'わたしはベトナムじんです。',
        vietnamese: 'Tôi là người Việt Nam.'
      },
      {
        japanese: '彼は学生ではありません。',
        furigana: 'かれはがくせいではありません。',
        vietnamese: 'Anh ấy không phải là học sinh.'
      }
    ]
  },
  {
    id: 'g-n5-02',
    pattern: 'V-てください',
    romaji: 'V-te kudasai',
    vietnameseMeaning: 'Xin hãy / Vui lòng làm V...',
    level: 'N5',
    category: 'Yêu cầu & Sai khiến',
    formation: 'Động từ thể て (V-te) + ください',
    explanation: 'Dùng để nhờ vả, yêu cầu ai đó làm gì một cách lịch sự, thân thiện.',
    examples: [
      {
        japanese: 'ここに名前を書いてください。',
        furigana: 'ここになまえをかいてください。',
        vietnamese: 'Xin vui lòng viết tên của bạn vào đây.'
      },
      {
        japanese: '日本語で話してください。',
        furigana: 'にほんごではなしてください。',
        vietnamese: 'Xin hãy nói bằng tiếng Nhật.'
      }
    ]
  },
  {
    id: 'g-n5-03',
    pattern: 'V-てもいいです',
    romaji: 'V-te mo ii desu',
    vietnameseMeaning: 'Làm V có được không? / Được phép làm V',
    level: 'N5',
    category: 'Xin phép & Cho phép',
    formation: 'Động từ thể て (V-te) + もいいです',
    explanation: 'Dùng để xin phép được làm một hành động nào đó hoặc cấp phép cho người khác.',
    examples: [
      {
        japanese: '写真を撮ってもいいですか。',
        furigana: 'しゃしんをとってもいいですか。',
        vietnamese: 'Tôi có thể chụp ảnh ở đây được không?'
      }
    ]
  },

  // ================= N4 =================
  {
    id: 'g-n4-01',
    pattern: 'V-たことがあります',
    romaji: 'V-ta koto ga arimasu',
    vietnameseMeaning: 'Đã từng làm V trong quá khứ',
    level: 'N4',
    category: 'Kinh nghiệm trải nghiệm',
    formation: 'Động từ thể た (V-ta) + ことがあります',
    explanation: 'Dùng để diễn tả một trải nghiệm hoặc kinh nghiệm đã từng trải qua trong quá khứ.',
    examples: [
      {
        japanese: '日本へ行ったことがあります。',
        furigana: 'にほんへいったことがあります。',
        vietnamese: 'Tôi đã từng đi Nhật Bản rồi.'
      },
      {
        japanese: '納豆を食べたことがありますか。',
        furigana: 'なっとうをたべたことがありますか。',
        vietnamese: 'Bạn đã từng ăn món Natto chưa?'
      }
    ]
  },
  {
    id: 'g-n4-02',
    pattern: '~すぎる (V-stem / A-stem + sugiru)',
    romaji: '~sugiru',
    vietnameseMeaning: 'Quá mức / Làm gì đó quá nhiều',
    level: 'N4',
    category: 'Mức độ',
    formation: 'V-masu bỏ masu + すぎる / A-i bỏ i + すぎる / A-na bỏ na + すぎる',
    explanation: 'Biểu thị hành động hoặc trạng thái vượt quá giới hạn bình thường, thường mang sắc thái tiêu cực hoặc bất tiện.',
    examples: [
      {
        japanese: '昨日お酒を飲みすぎました。',
        furigana: 'きのうおさけをのみすぎました。',
        vietnamese: 'Hôm qua tôi đã uống quá nhiều rượu.'
      },
      {
        japanese: 'この問題は難しすぎます。',
        furigana: 'このもんだいはむずかしすぎます。',
        vietnamese: 'Bài toán này quá khó đối với tôi.'
      }
    ]
  },

  // ================= N3 =================
  {
    id: 'g-n3-01',
    pattern: '~わけがない / ~わけはない',
    romaji: '~wake ga nai',
    vietnameseMeaning: 'Tuyệt đối không thể nào / Làm sao mà... được',
    level: 'N3',
    category: 'Phán đoán khẳng định',
    formation: 'V/A/N thể thông thường (Phổ thông) + わけがない (Na giữ な, N có な/である)',
    explanation: 'Khẳng định mạnh mẽ dựa trên lý lẽ hoặc thực tế rằng điều đó tuyệt đối không thể xảy ra.',
    examples: [
      {
        japanese: 'あんなに一生懸命勉強したんだから、不合格のわけがない。',
        furigana: 'あんなにいっしょうけんめいべんきょうしたんだから、ふごうかくのわけがない。',
        vietnamese: 'Đã học hành chăm chỉ đến thế thì làm sao mà trượt được chứ!'
      }
    ]
  },
  {
    id: 'g-n3-02',
    pattern: '~おかげで / ~せいで',
    romaji: '~okage de / ~sei de',
    vietnameseMeaning: 'Nhờ có... (tích cực) / Tại vì, do... (tiêu cực)',
    level: 'N3',
    category: 'Nguyên nhân & Hệ quả',
    formation: 'Thể thông thường + おかげで / せいで (Na + な, N + の)',
    explanation: 'おかげで dùng khi kết quả tốt đẹp nhờ vào ai/cái gì. せいで dùng khi kết quả xấu đổ lỗi do ai/cái gì.',
    examples: [
      {
        japanese: '先生のおかげでJLPT N3に合格できました。',
        furigana: 'せんせいのおかげでJLPT N3にごうかくできました。',
        vietnamese: 'Nhờ có thầy giáo mà em đã thi đỗ chứng chỉ JLPT N3.'
      },
      {
        japanese: '大雨のせいで電車が遅れました。',
        furigana: 'おおあめのせいででんしゃがおくれました。',
        vietnamese: 'Tại vì mưa to mà chuyến tàu điện bị trễ giờ.'
      }
    ]
  },

  // ================= N2 =================
  {
    id: 'g-n2-01',
    pattern: '~にほかならない',
    romaji: '~ni hokanaranai',
    vietnameseMeaning: 'Chính là... / Không gì khác ngoài...',
    level: 'N2',
    category: 'Nhấn mạnh nguyên nhân',
    formation: 'N + にほかならない / Từ thể thường + からにほかならない',
    explanation: 'Dùng trong văn viết hoặc phát biểu trang trọng để khẳng định lý do duy nhất và cốt lõi.',
    examples: [
      {
        japanese: '今回の成功はチーム全員の努力の結果にほかならない。',
        furigana: 'こんかいのせいこうはチームぜんいんのどりょくのけっかにほかならない。',
        vietnamese: 'Thành công lần này chính là kết quả từ sự nỗ lực của toàn thể đội ngũ.'
      }
    ]
  },

  // ================= N1 =================
  {
    id: 'g-n1-01',
    pattern: '~を皮切りにして / ~を皮切りとして',
    romaji: '~wo kawakiri ni shite',
    vietnameseMeaning: 'Khởi đầu với... / Mở màn bằng...',
    level: 'N1',
    category: 'Khởi đầu chuỗi sự kiện',
    formation: 'N + を皮切りにして',
    explanation: 'Biểu thị một sự kiện mở đầu, sau đó liên tiếp có các sự kiện tương tự diễn ra với quy mô ngày càng lớn.',
    examples: [
      {
        japanese: '東京公演を皮切りにして、全国ツアーがスタートした。',
        furigana: 'とうきょうこうえんをかわきりにして、ぜんこくツアーがスタートした。',
        vietnamese: 'Khởi đầu với đêm diễn tại Tokyo, chuyến lưu diễn toàn quốc đã chính thức mở màn.'
      }
    ]
  }
];
