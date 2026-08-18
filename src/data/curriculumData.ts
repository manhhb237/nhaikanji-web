import type { VocabItem, CurriculumInfo } from '../types/vocabulary';

export const CURRICULA: CurriculumInfo[] = [
  {
    id: 'minna',
    name: 'Minna no Nihongo',
    japaneseName: 'みんなの日本語',
    description: 'Bộ giáo trình chuẩn quốc dân 50 bài cho trình độ Sơ cấp N5 - N4',
    levelRange: 'N5 - N4',
    totalLessons: 50,
    totalWords: 2150,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'mimikara',
    name: 'Mimikara Oboeru',
    japaneseName: '耳から覚える日本語',
    description: 'Học từ vựng qua phản xạ âm thanh và câu ví dụ thực tế cho N3 - N2',
    levelRange: 'N3 - N2',
    totalLessons: 12,
    totalWords: 1800,
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
  },
  {
    id: 'tango',
    name: 'Tango 2000 / 2500',
    japaneseName: '日本語単語スピードマスター',
    description: 'Từ vựng trọng tâm thi JLPT theo chủ đề chuyên sâu N4 - N3 - N2',
    levelRange: 'N4 - N2',
    totalLessons: 20,
    totalWords: 2500,
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
  },
  {
    id: 'shinkanzen',
    name: 'Shinkanzen Master',
    japaneseName: '新完全マスター',
    description: 'Luyện thi cấp tốc bám sát đề thi thật JLPT từ N3 đến N1',
    levelRange: 'N3 - N1',
    totalLessons: 15,
    totalWords: 2200,
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
  }
];

export const VOCABULARY_DATA: VocabItem[] = [
  // ================= MINNA NO NIHONGO (N5 - N4) =================
  {
    id: 'v-m-01-01',
    word: '私',
    reading: 'わたし',
    hanViet: 'TƯ',
    romaji: 'watashi',
    meaning: 'Tôi, bản thân tôi',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: '私はベトナム人です。',
      furigana: 'わたしはベトナムじんです。',
      vietnamese: 'Tôi là người Việt Nam.'
    }
  },
  {
    id: 'v-m-01-02',
    word: '先生',
    reading: 'せんせい',
    hanViet: 'TIÊN SINH',
    romaji: 'sensei',
    meaning: 'Thầy giáo, cô giáo, bác sĩ',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: '田中先生は日本語の先生です。',
      furigana: 'たなかせんせいはにほんごのせんせいです。',
      vietnamese: 'Thầy Tanaka là giáo viên dạy tiếng Nhật.'
    }
  },
  {
    id: 'v-m-01-03',
    word: '学生',
    reading: 'がくせい',
    hanViet: 'HỌC SINH',
    romaji: 'gakusei',
    meaning: 'Học sinh, sinh viên',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: 'ナムさんはハノイ大学の学生です。',
      furigana: 'ナムさんはハノイだいがくのがくせいです。',
      vietnamese: 'Nam là sinh viên trường Đại học Hà Nội.'
    }
  },
  {
    id: 'v-m-02-01',
    word: '本',
    reading: 'ほん',
    hanViet: 'BẢN',
    romaji: 'hon',
    meaning: 'Quyển sách',
    level: 'N5',
    curriculum: 'minna',
    lesson: 2,
    lessonName: 'Bài 2: Đồ vật xung quanh (Cái này / Cái kia)',
    exampleSentence: {
      japanese: 'これは日本語の本です。',
      furigana: 'これはにほんごのほんです。',
      vietnamese: 'Đây là quyển sách tiếng Nhật.'
    }
  },
  {
    id: 'v-m-02-02',
    word: '辞書',
    reading: 'じしょ',
    hanViet: 'TỪ THƯ',
    romaji: 'jisho',
    meaning: 'Từ điển tra cứu',
    level: 'N5',
    curriculum: 'minna',
    lesson: 2,
    lessonName: 'Bài 2: Đồ vật xung quanh (Cái này / Cái kia)',
    exampleSentence: {
      japanese: '電子辞書を使っています。',
      furigana: 'でんしじしょをつかっています。',
      vietnamese: 'Tôi đang sử dụng từ điển điện tử.'
    }
  },
  {
    id: 'v-m-26-01',
    word: '片づけます',
    reading: 'かたづけます',
    hanViet: 'PHIẾN',
    romaji: 'katadzukemasu',
    meaning: 'Dọn dẹp, sắp xếp ngăn nắp',
    level: 'N4',
    curriculum: 'minna',
    lesson: 26,
    lessonName: 'Bài 26: Thể thông thường + んです',
    exampleSentence: {
      japanese: '部屋をきれいに片づけました。',
      furigana: 'へやをきれいにかたづけました。',
      vietnamese: 'Tôi đã dọn dẹp phòng ốc sạch sẽ.'
    }
  },
  {
    id: 'v-m-26-02',
    word: '燃えるごみ',
    reading: 'もえるごみ',
    hanViet: 'NHIÊN',
    romaji: 'moeru gomi',
    meaning: 'Rác cháy được',
    level: 'N4',
    curriculum: 'minna',
    lesson: 26,
    lessonName: 'Bài 26: Thể thông thường + んです',
    exampleSentence: {
      japanese: '月曜日は燃えるごみの日です。',
      furigana: 'げつようびはもえるごみのひです。',
      vietnamese: 'Thứ hai là ngày thu gom rác cháy được.'
    }
  },
  {
    id: 'v-m-35-01',
    word: '咲きます',
    reading: 'さきます',
    hanViet: 'TIẾU',
    romaji: 'sakimasu',
    meaning: 'Hoa nở',
    level: 'N4',
    curriculum: 'minna',
    lesson: 35,
    lessonName: 'Bài 35: Thể điều kiện (ば)',
    exampleSentence: {
      japanese: '春になれば、桜が咲きます。',
      furigana: 'はるになれば、さくらがさきます。',
      vietnamese: 'Hễ đến mùa xuân thì hoa anh đào sẽ nở rộ.'
    }
  },

  // ================= MIMIKARA OBOERU (N3 - N2) =================
  {
    id: 'v-mimi-01-01',
    word: '合格',
    reading: 'ごうかく',
    hanViet: 'HỢP CÁCH',
    romaji: 'goukaku',
    meaning: 'Thi đỗ, trúng tuyển',
    level: 'N3',
    curriculum: 'mimikara',
    lesson: 1,
    lessonName: 'Chương 1: Học tập & Thi cử (N3)',
    exampleSentence: {
      japanese: '大学の入試に合格しました。',
      furigana: 'だいがくのにゅうしにごうかくしました。',
      vietnamese: 'Tôi đã đỗ kỳ thi tuyển sinh đại học.'
    }
  },
  {
    id: 'v-mimi-01-02',
    word: '専攻',
    reading: 'せんこう',
    hanViet: 'CHUYÊN CÔNG',
    romaji: 'senkou',
    meaning: 'Chuyên ngành học tập',
    level: 'N3',
    curriculum: 'mimikara',
    lesson: 1,
    lessonName: 'Chương 1: Học tập & Thi cử (N3)',
    exampleSentence: {
      japanese: '大学での専攻は情報工学です。',
      furigana: 'だいがくでのせんこうはじょうほうこうがくです。',
      vietnamese: 'Chuyên ngành của tôi ở đại học là Công nghệ thông tin.'
    }
  },
  {
    id: 'v-mimi-02-01',
    word: '景気',
    reading: 'けいき',
    hanViet: 'CẢNH KHÍ',
    romaji: 'keiki',
    meaning: 'Tình hình kinh tế, thị trường',
    level: 'N2',
    curriculum: 'mimikara',
    lesson: 2,
    lessonName: 'Chương 2: Kinh tế & Xã hội (N2)',
    exampleSentence: {
      japanese: '景気が回復する兆しが見えてきた。',
      furigana: 'けいきがかいふくするきざしがみえてきた。',
      vietnamese: 'Đã xuất hiện những dấu hiệu cho thấy nền kinh tế đang phục hồi.'
    }
  },
  {
    id: 'v-mimi-02-02',
    word: '消費税',
    reading: 'しょうひぜい',
    hanViet: 'TIÊU PHÍ THUẾ',
    romaji: 'shouhizei',
    meaning: 'Thuế tiêu thụ (VAT)',
    level: 'N2',
    curriculum: 'mimikara',
    lesson: 2,
    lessonName: 'Chương 2: Kinh tế & Xã hội (N2)',
    exampleSentence: {
      japanese: '消費税が10パーセントに引き上げられた。',
      furigana: 'しょうひぜいがじゅっパーセントにひきあげられた。',
      vietnamese: 'Thuế tiêu thụ đã được điều chỉnh tăng lên mức 10%.'
    }
  },

  // ================= TANGO 2000 / 2500 (N4 - N3 - N2) =================
  {
    id: 'v-tango-01-01',
    word: '準備',
    reading: 'じゅんび',
    hanViet: 'CHUẨN BỊ',
    romaji: 'junbi',
    meaning: 'Chuẩn bị, sắp xếp trước',
    level: 'N4',
    curriculum: 'tango',
    lesson: 1,
    lessonName: 'Chủ đề: Sinh hoạt & Kế hoạch (N4)',
    exampleSentence: {
      japanese: '旅行の準備を始めましょう。',
      furigana: 'りょこうのじゅんびをはじめましょう。',
      vietnamese: 'Chúng ta hãy bắt đầu chuẩn bị cho chuyến du lịch thôi.'
    }
  },
  {
    id: 'v-tango-02-01',
    word: '影響',
    reading: 'えいきょう',
    hanViet: 'ẢNH HƯỞNG',
    romaji: 'eikyou',
    meaning: 'Ảnh hưởng, tác động',
    level: 'N3',
    curriculum: 'tango',
    lesson: 2,
    lessonName: 'Chủ đề: Mối quan hệ & Xã hội (N3)',
    exampleSentence: {
      japanese: '両親の考え方に大きな影響を受けた。',
      furigana: 'りょうしんのかんがえかたにおおきなえいきょうをうけた。',
      vietnamese: 'Tôi đã chịu ảnh hưởng rất lớn từ cách suy nghĩ của cha mẹ.'
    }
  },
  {
    id: 'v-tango-03-01',
    word: '効率',
    reading: 'こうりつ',
    hanViet: 'HIỆU SUẤT',
    romaji: 'kouritsu',
    meaning: 'Hiệu suất, năng suất làm việc',
    level: 'N2',
    curriculum: 'tango',
    lesson: 3,
    lessonName: 'Chủ đề: Công việc & Kỹ năng (N2)',
    exampleSentence: {
      japanese: '作業の効率を上げるためにツールを導入した。',
      furigana: 'さぎょうのこうりつをあげるためにツールをどうにゅうした。',
      vietnamese: 'Chúng tôi đã áp dụng các công cụ mới nhằm nâng cao hiệu suất công việc.'
    }
  },

  // ================= SHINKANZEN MASTER (N3 - N2 - N1) =================
  {
    id: 'v-shin-01-01',
    word: '把握',
    reading: 'はあく',
    hanViet: 'BÁ ÁC',
    romaji: 'haaku',
    meaning: 'Nắm bắt rõ, hiểu thấu đáo vấn đề',
    level: 'N2',
    curriculum: 'shinkanzen',
    lesson: 1,
    lessonName: 'Chuyên đề: Từ vựng đọc hiểu học thuật (N2)',
    exampleSentence: {
      japanese: '現状を正確に把握することが重要だ。',
      furigana: 'げんじょうをせいかくにはあくすることがじゅうようだ。',
      vietnamese: 'Việc nắm bắt chính xác hiện trạng là vô cùng quan trọng.'
    }
  },
  {
    id: 'v-shin-02-01',
    word: '妥協',
    reading: 'だきょう',
    hanViet: 'THỎA HIỆP',
    romaji: 'dakyou',
    meaning: 'Thỏa hiệp, nhượng bộ lẫn nhau',
    level: 'N1',
    curriculum: 'shinkanzen',
    lesson: 2,
    lessonName: 'Chuyên đề: Đàm phán & Thương thuyết (N1)',
    exampleSentence: {
      japanese: '双方が妥協点を見出すまで交渉を続けた。',
      furigana: 'そうほうのだきょうてんをみいだすまでこうしょうをつづけた。',
      vietnamese: 'Hai bên tiếp tục đàm phán cho đến khi tìm được điểm thỏa hiệp chung.'
    }
  }
];
