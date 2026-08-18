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
  // ================= MINNA NO NIHONGO (N5 - BÀI 1) =================
  {
    id: 'v-minna-01-01',
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
    id: 'v-minna-01-02',
    word: 'あなた',
    reading: 'あなた',
    romaji: 'anata',
    meaning: 'Bạn, anh, chị (ngôi thứ 2)',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: 'あなたは学生ですか。',
      furigana: 'あなたはがくせいですか。',
      vietnamese: 'Bạn có phải là học sinh không?'
    }
  },
  {
    id: 'v-minna-01-03',
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
    id: 'v-minna-01-04',
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
    id: 'v-minna-01-05',
    word: '会社員',
    reading: 'かいしゃいん',
    hanViet: 'HỘI XÃ VIÊN',
    romaji: 'kaishain',
    meaning: 'Nhân viên công ty',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: '父は日本の会社員です。',
      furigana: 'ちはにほんのかいしゃいんです。',
      vietnamese: 'Bố tôi là nhân viên công ty Nhật Bản.'
    }
  },
  {
    id: 'v-minna-01-06',
    word: '医者',
    reading: 'いしゃ',
    hanViet: 'Y GIẢ',
    romaji: 'isha',
    meaning: 'Bác sĩ',
    level: 'N5',
    curriculum: 'minna',
    lesson: 1,
    lessonName: 'Bài 1: Giới thiệu bản thân & Quốc tịch',
    exampleSentence: {
      japanese: '母は病院の医者です。',
      furigana: 'はははびょういんのいしゃです。',
      vietnamese: 'Mẹ tôi là bác sĩ ở bệnh viện.'
    }
  },

  // ================= MINNA NO NIHONGO (N5 - BÀI 2) =================
  {
    id: 'v-minna-02-01',
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
    id: 'v-minna-02-02',
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
    id: 'v-minna-02-03',
    word: '雑誌',
    reading: 'ざっし',
    hanViet: 'TẠP CHÍ',
    romaji: 'zasshi',
    meaning: 'Tạp chí, báo san',
    level: 'N5',
    curriculum: 'minna',
    lesson: 2,
    lessonName: 'Bài 2: Đồ vật xung quanh (Cái này / Cái kia)',
    exampleSentence: {
      japanese: 'ファッションの雑誌を読みます。',
      furigana: 'ファッションのざっしをよみます。',
      vietnamese: 'Tôi đọc tạp chí thời trang.'
    }
  },
  {
    id: 'v-minna-02-04',
    word: '新聞',
    reading: 'しんぶん',
    hanViet: 'TÂN VĂN',
    romaji: 'shinbun',
    meaning: 'Tờ báo, báo chí hàng ngày',
    level: 'N5',
    curriculum: 'minna',
    lesson: 2,
    lessonName: 'Bài 2: Đồ vật xung quanh (Cái này / Cái kia)',
    exampleSentence: {
      japanese: '毎朝新聞を読みます。',
      furigana: 'まいあさしんぶんをよみます。',
      vietnamese: 'Mỗi buổi sáng tôi đều đọc báo.'
    }
  },
  {
    id: 'v-minna-02-05',
    word: '手帳',
    reading: 'てちょう',
    hanViet: 'THỦ TRƯỚNG',
    romaji: 'techou',
    meaning: 'Sổ tay bỏ túi',
    level: 'N5',
    curriculum: 'minna',
    lesson: 2,
    lessonName: 'Bài 2: Đồ vật xung quanh (Cái này / Cái kia)',
    exampleSentence: {
      japanese: '手帳に予定を書きます。',
      furigana: 'てちょうによていをかきます。',
      vietnamese: 'Tôi viết lịch trình vào sổ tay.'
    }
  },

  // ================= MINNA NO NIHONGO (N5 - BÀI 3) =================
  {
    id: 'v-minna-03-01',
    word: '教室',
    reading: 'きょうしつ',
    hanViet: 'GIÁO THẤT',
    romaji: 'kyoushitsu',
    meaning: 'Phòng học, lớp học',
    level: 'N5',
    curriculum: 'minna',
    lesson: 3,
    lessonName: 'Bài 3: Địa điểm, vị trí (Ở đây / Ở đó)',
    exampleSentence: {
      japanese: 'ここは日本語の教室です。',
      furigana: 'ここはにほんごのきょうしつです。',
      vietnamese: 'Đây là phòng học tiếng Nhật.'
    }
  },
  {
    id: 'v-minna-03-02',
    word: '食堂',
    reading: 'しょくどう',
    hanViet: 'THỰC ĐƯỜNG',
    romaji: 'shokudou',
    meaning: 'Nhà ăn, căng tin',
    level: 'N5',
    curriculum: 'minna',
    lesson: 3,
    lessonName: 'Bài 3: Địa điểm, vị trí (Ở đây / Ở đó)',
    exampleSentence: {
      japanese: '食堂でお昼ご飯を食べます。',
      furigana: 'しょくどうでおひるごはんをたべます。',
      vietnamese: 'Tôi ăn cơm trưa ở nhà ăn căng tin.'
    }
  },
  {
    id: 'v-minna-03-03',
    word: '事務所',
    reading: 'じむしょ',
    hanViet: 'SỰ VỤ SỞ',
    romaji: 'jimusho',
    meaning: 'Văn phòng làm việc',
    level: 'N5',
    curriculum: 'minna',
    lesson: 3,
    lessonName: 'Bài 3: Địa điểm, vị trí (Ở đây / Ở đó)',
    exampleSentence: {
      japanese: '事務所は２階にあります。',
      furigana: 'じむしょはにかいにあります。',
      vietnamese: 'Văn phòng nằm ở tầng 2.'
    }
  },

  // ================= MINNA NO NIHONGO (N4 - BÀI 26) =================
  {
    id: 'v-minna-26-01',
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
    id: 'v-minna-26-02',
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
    id: 'v-minna-26-03',
    word: '連絡します',
    reading: 'れんらくします',
    hanViet: 'LIÊN LẠC',
    romaji: 'renraku shimasu',
    meaning: 'Liên lạc, thông báo',
    level: 'N4',
    curriculum: 'minna',
    lesson: 26,
    lessonName: 'Bài 26: Thể thông thường + んです',
    exampleSentence: {
      japanese: '後で電話で連絡します。',
      furigana: 'あとででんわでれんらくします。',
      vietnamese: 'Lát nữa tôi sẽ liên lạc lại bằng điện thoại.'
    }
  },

  // ================= MINNA NO NIHONGO (N4 - BÀI 35) =================
  {
    id: 'v-minna-35-01',
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
  {
    id: 'v-minna-35-02',
    word: '変わります',
    reading: 'かわります',
    hanViet: 'BIẾN',
    romaji: 'kawarimasu',
    meaning: 'Thay đổi, biến đổi',
    level: 'N4',
    curriculum: 'minna',
    lesson: 35,
    lessonName: 'Bài 35: Thể điều kiện (ば)',
    exampleSentence: {
      japanese: '天気が変わりました。',
      furigana: 'てんきがかわりました。',
      vietnamese: 'Thời tiết đã thay đổi rồi.'
    }
  },

  // ================= MIMIKARA OBOERU (N3 - CHƯƠNG 1) =================
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
    id: 'v-mimi-01-03',
    word: '指導',
    reading: 'しどう',
    hanViet: 'CHỈ ĐẠO',
    romaji: 'shidou',
    meaning: 'Hướng dẫn, chỉ bảo tận tình',
    level: 'N3',
    curriculum: 'mimikara',
    lesson: 1,
    lessonName: 'Chương 1: Học tập & Thi cử (N3)',
    exampleSentence: {
      japanese: '先生のご指導に感謝します。',
      furigana: 'せんせいのごしどうにかんしゃします。',
      vietnamese: 'Em xin chân thành cảm ơn sự hướng dẫn chỉ bảo của thầy cô.'
    }
  },
  {
    id: 'v-mimi-01-04',
    word: '集中',
    reading: 'しゅうちゅう',
    hanViet: 'TẬP TRUNG',
    romaji: 'shuuchuu',
    meaning: 'Tập trung cao độ',
    level: 'N3',
    curriculum: 'mimikara',
    lesson: 1,
    lessonName: 'Chương 1: Học tập & Thi cử (N3)',
    exampleSentence: {
      japanese: '勉強に集中してください。',
      furigana: 'べんきょうにしゅうちゅうしてください。',
      vietnamese: 'Xin hãy tập trung vào việc học.'
    }
  },

  // ================= MIMIKARA OBOERU (N2 - CHƯƠNG 2) =================
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
  {
    id: 'v-mimi-02-03',
    word: '需要',
    reading: 'じゅよう',
    hanViet: 'NHU YẾU',
    romaji: 'juyou',
    meaning: 'Nhu cầu thị trường, cầu',
    level: 'N2',
    curriculum: 'mimikara',
    lesson: 2,
    lessonName: 'Chương 2: Kinh tế & Xã hội (N2)',
    exampleSentence: {
      japanese: '新商品の需要が急速に高まっている。',
      furigana: 'しんしょうひんのじゅようがきゅうそくにたかまっている。',
      vietnamese: 'Nhu cầu đối với dòng sản phẩm mới đang tăng lên nhanh chóng.'
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
    id: 'v-tango-01-02',
    word: '経験',
    reading: 'けいけん',
    hanViet: 'KINH NGHIỆM',
    romaji: 'keiken',
    meaning: 'Kinh nghiệm, trải nghiệm thực tế',
    level: 'N4',
    curriculum: 'tango',
    lesson: 1,
    lessonName: 'Chủ đề: Sinh hoạt & Kế hoạch (N4)',
    exampleSentence: {
      japanese: '日本でいろいろな経験をしました。',
      furigana: 'にほんでいろいろなけいけんをしました。',
      vietnamese: 'Tôi đã có rất nhiều trải nghiệm quý báu tại Nhật Bản.'
    }
  },
  {
    id: 'v-tango-02-01',
    word: '影響',
    reading: 'えいきょう',
    hanViet: 'ẢNH HƯỞNG',
    romaji: 'eikyou',
    meaning: 'Ảnh hưởng, tác động sâu rộng',
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
    id: 'v-tango-02-02',
    word: '環境',
    reading: 'かんきょう',
    hanViet: 'HOÀN CẢNH',
    romaji: 'kankyou',
    meaning: 'Môi trường sống, môi trường tự nhiên',
    level: 'N3',
    curriculum: 'tango',
    lesson: 2,
    lessonName: 'Chủ đề: Mối quan hệ & Xã hội (N3)',
    exampleSentence: {
      japanese: '地球の環境を守ることが大切です。',
      furigana: 'ちきゅうのかんきょうをまもることがたいせつです。',
      vietnamese: 'Việc bảo vệ môi trường Trái Đất là điều vô cùng quan trọng.'
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
  {
    id: 'v-tango-03-02',
    word: '達成',
    reading: 'たっせい',
    hanViet: 'ĐẠT THÀNH',
    romaji: 'tassei',
    meaning: 'Đạt được mục tiêu, hoàn thành kế hoạch',
    level: 'N2',
    curriculum: 'tango',
    lesson: 3,
    lessonName: 'Chủ đề: Công việc & Kỹ năng (N2)',
    exampleSentence: {
      japanese: '今年の売上目標を無事に達成した。',
      furigana: 'ことしのうりあげもくひょうをぶじにたっせいした。',
      vietnamese: 'Chúng tôi đã xuất sắc hoàn thành mục tiêu doanh số của năm nay.'
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
    id: 'v-shin-01-02',
    word: '傾向',
    reading: 'けいこう',
    hanViet: 'KHUYNH HƯỚNG',
    romaji: 'keikou',
    meaning: 'Xu hướng, khuynh hướng phát triển',
    level: 'N2',
    curriculum: 'shinkanzen',
    lesson: 1,
    lessonName: 'Chuyên đề: Từ vựng đọc hiểu học thuật (N2)',
    exampleSentence: {
      japanese: '若者の読書離れの傾向が見られる。',
      furigana: 'わかもののどくしょばなれのけいこうがみられる。',
      vietnamese: 'Có thể nhận thấy xu hướng giới trẻ ngày càng ít đọc sách hơn.'
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
  },
  {
    id: 'v-shin-02-02',
    word: '懸念',
    reading: 'けねん',
    hanViet: 'HUYỀN NIỆM',
    romaji: 'kenen',
    meaning: 'Mối lo ngại, quan ngại sâu sắc',
    level: 'N1',
    curriculum: 'shinkanzen',
    lesson: 2,
    lessonName: 'Chuyên đề: Đàm phán & Thương thuyết (N1)',
    exampleSentence: {
      japanese: '将来の経済への悪影響が懸念されている。',
      furigana: 'しょうらいのけいざいへのあくえいきょうがけねんされている。',
      vietnamese: 'Người ta đang hết sức quan ngại về những tác động tiêu cực đối với nền kinh tế tương lai.'
    }
  }
];
