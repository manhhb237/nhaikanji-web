export interface MimikaraWord {
  id: string;
  unit: number;
  unitTitle: string;
  index: number;
  word: string;
  reading: string;
  pitchAccent?: string;
  hanViet: string;
  meaning: string;
  exampleSentence: {
    japanese: string;
    furigana: string;
    vietnamese: string;
  };
}

export interface MimikaraUnit {
  id: number;
  title: string;
  wordCount: number;
  range: string;
  isPremium: boolean;
}

export const MIMIKARA_N3_UNITS: MimikaraUnit[] = [
  { id: 1, title: 'Unit 1 | 名詞 A', wordCount: 120, range: '[1-120]', isPremium: false },
  { id: 2, title: 'Unit 2 | 動詞 A', wordCount: 100, range: '[121-220]', isPremium: true },
  { id: 3, title: 'まとめ | 連用名詞', wordCount: 38, range: '[221-258]', isPremium: true },
  { id: 4, title: 'Unit 3 | 形容詞 A', wordCount: 40, range: '[259-298]', isPremium: true },
  { id: 5, title: 'まとめ | イ形容詞 + まる／める', wordCount: 12, range: '[299-310]', isPremium: true },
  { id: 6, title: 'Unit 4 | 名詞 B', wordCount: 100, range: '[311-410]', isPremium: true },
  { id: 7, title: 'Unit 5 | 動詞 B', wordCount: 100, range: '[411-510]', isPremium: true },
  { id: 8, title: 'Unit 6 | カタカナ A', wordCount: 40, range: '[511-550]', isPremium: true },
  { id: 9, title: 'Unit 7 | 形容詞 B', wordCount: 40, range: '[551-590]', isPremium: true },
  { id: 10, title: 'Unit 8 | 副詞 A', wordCount: 45, range: '[591-635]', isPremium: true },
  { id: 11, title: 'Unit 9 | 名詞 C', wordCount: 80, range: '[636-715]', isPremium: true },
  { id: 12, title: 'Unit 10 | 動詞 C', wordCount: 80, range: '[716-795]', isPremium: true },
  { id: 13, title: 'Unit 11 | カタカナ B', wordCount: 40, range: '[796-835]', isPremium: true },
  { id: 14, title: 'まとめ | 料理の動詞', wordCount: 10, range: '[836-845]', isPremium: true },
  { id: 15, title: 'Unit 12 | 副詞 B', wordCount: 35, range: '[846-880]', isPremium: true }
];

export const MIMIKARA_N3_WORDS: MimikaraWord[] = [
  {
    id: 'mimi-n3-001',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 1,
    word: '男性',
    reading: 'だんせい',
    hanViet: 'NAM TÍNH',
    meaning: 'Nam giới, đàn ông',
    exampleSentence: {
      japanese: '理想の男性と結婚する',
      furigana: 'りそう の だんせい と けっこん する',
      vietnamese: 'Kết hôn với người đàn ông lý tưởng'
    }
  },
  {
    id: 'mimi-n3-002',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 2,
    word: '女性',
    reading: 'じょせい',
    hanViet: 'NỮ TÍNH',
    meaning: 'Nữ giới, phụ nữ',
    exampleSentence: {
      japanese: 'あの女性はだれですか',
      furigana: 'あの じょせい は だれ ですか',
      vietnamese: 'Người phụ nữ kia là ai vậy?'
    }
  },
  {
    id: 'mimi-n3-003',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 3,
    word: '高齢',
    reading: 'こうれい',
    hanViet: 'CAO LINH',
    meaning: 'Tuổi cao, cao tuổi',
    exampleSentence: {
      japanese: '祖母は高齢だが、まだとても元気だ',
      furigana: 'そぼ は こうれい だが、まだ とても げんき だ',
      vietnamese: 'Bà tôi đã cao tuổi nhưng vẫn rất khỏe mạnh'
    }
  },
  {
    id: 'mimi-n3-004',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 4,
    word: '年上',
    reading: 'としうえ',
    hanViet: 'NIÊN THƯỢNG',
    meaning: 'Lớn tuổi hơn, người hơn tuổi',
    exampleSentence: {
      japanese: '年上の友達と旅行に行く',
      furigana: 'としうえ の ともだち と りょこう に いく',
      vietnamese: 'Đi du lịch cùng người bạn lớn tuổi hơn'
    }
  },
  {
    id: 'mimi-n3-005',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 5,
    word: '目上',
    reading: 'めうえ',
    hanViet: 'MỤC THƯỢNG',
    meaning: 'Cấp trên, người bề trên',
    exampleSentence: {
      japanese: '目上の人には敬語を使うべきだ',
      furigana: 'めうえ の ひと には けいご を つかう べき だ',
      vietnamese: 'Nên dùng kính ngữ đối với người bề trên'
    }
  },
  {
    id: 'mimi-n3-006',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 6,
    word: '先輩',
    reading: 'せんぱい',
    hanViet: 'TIÊN BỐI',
    meaning: 'Tiền bối, người đi trước',
    exampleSentence: {
      japanese: '先輩から仕事を教わる',
      furigana: 'せんぱい から しごと を おそわる',
      vietnamese: 'Học hỏi công việc từ tiền bối'
    }
  },
  {
    id: 'mimi-n3-007',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 7,
    word: '後輩',
    reading: 'こうはい',
    hanViet: 'HẬU BỐI',
    meaning: 'Hậu bối, người đi sau',
    exampleSentence: {
      japanese: '後輩にアドバイスをする',
      furigana: 'こうはい に アドバイス を する',
      vietnamese: 'Đưa ra lời khuyên cho hậu bối'
    }
  },
  {
    id: 'mimi-n3-008',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 8,
    word: '相手',
    reading: 'あいて',
    hanViet: 'TƯƠNG THỦ',
    meaning: 'Đối phương, đối tác, bạn đời',
    exampleSentence: {
      japanese: '相手の話をよく聞く',
      furigana: 'あいて の はなし を よく きく',
      vietnamese: 'Lắng nghe kỹ câu chuyện của đối phương'
    }
  },
  {
    id: 'mimi-n3-009',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 9,
    word: '知り合い',
    reading: 'しりあい',
    hanViet: 'TRI HỢP',
    meaning: 'Người quen biết',
    exampleSentence: {
      japanese: '知り合いに仕事を紹介してもらう',
      furigana: 'しりあい に しごと を しょうかい して もらう',
      vietnamese: 'Được người quen giới thiệu công việc'
    }
  },
  {
    id: 'mimi-n3-010',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 10,
    word: '仲',
    reading: 'なか',
    hanViet: 'TRỌNG',
    meaning: 'Mối quan hệ, tình cảm',
    exampleSentence: {
      japanese: '私たちはとても仲が良い',
      furigana: 'わたしたち は とても なか が よい',
      vietnamese: 'Mối quan hệ giữa chúng tôi rất tốt đẹp'
    }
  },
  {
    id: 'mimi-n3-011',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 11,
    word: '生年月日',
    reading: 'せいねんがっぴ',
    hanViet: 'SINH NIÊN NGUYỆT NHẬT',
    meaning: 'Ngày tháng năm sinh',
    exampleSentence: {
      japanese: '書類に生年月日を記入する',
      furigana: 'しょるい に せいねんがっぴ を きにゅう する',
      vietnamese: 'Điền ngày tháng năm sinh vào hồ sơ giấy tờ'
    }
  },
  {
    id: 'mimi-n3-012',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 12,
    word: '誕生',
    reading: 'たんじょう',
    hanViet: 'ĐẢN SINH',
    meaning: 'Sự ra đời, sinh đẻ',
    exampleSentence: {
      japanese: '新しい命が誕生した',
      furigana: 'あたらしい いのち が たんじょう した',
      vietnamese: 'Một sinh mệnh mới đã chào đời'
    }
  },
  {
    id: 'mimi-n3-013',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 13,
    word: '年',
    reading: 'とし',
    hanViet: 'NIÊN',
    meaning: 'Năm, tuổi tác',
    exampleSentence: {
      japanese: '年の初めに目標を立てる',
      furigana: 'とし の はじめ に もくひょう を たてる',
      vietnamese: 'Đặt ra mục tiêu vào đầu năm mới'
    }
  },
  {
    id: 'mimi-n3-014',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 14,
    word: '出身',
    reading: 'しゅっしん',
    hanViet: 'XUẤT THÂN',
    meaning: 'Xuất thân, quê quán',
    exampleSentence: {
      japanese: 'ご出身はどちらですか',
      furigana: 'ごしゅっしん は どちら ですか',
      vietnamese: 'Quê hương của bạn ở đâu vậy?'
    }
  },
  {
    id: 'mimi-n3-015',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 15,
    word: '故郷',
    reading: 'こきょう',
    hanViet: 'CỐ HƯƠNG',
    meaning: 'Cố hương, quê nhà',
    exampleSentence: {
      japanese: '久しぶりに故郷へ帰る',
      furigana: 'ひさしぶり に こきょう へ かえる',
      vietnamese: 'Lâu lắm rồi mới trở về quê nhà'
    }
  },
  {
    id: 'mimi-n3-016',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 16,
    word: '成長',
    reading: 'せいちょう',
    hanViet: 'THÀNH TRƯỞNG',
    meaning: 'Trưởng thành, tăng trưởng',
    exampleSentence: {
      japanese: '子どもの成長はとても早い',
      furigana: 'こども の せいちょう は とても はやい',
      vietnamese: 'Sự trưởng thành của con trẻ rất nhanh chóng'
    }
  },
  {
    id: 'mimi-n3-017',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 17,
    word: '成人',
    reading: 'せいじん',
    hanViet: 'THÀNH NHÂN',
    meaning: 'Người trưởng thành (đủ tuổi thành niên)',
    exampleSentence: {
      japanese: '日本では２０歳で成人になる',
      furigana: 'にほん では はたち で せいじん に なる',
      vietnamese: 'Tại Nhật Bản, 20 tuổi trở thành người trưởng thành'
    }
  },
  {
    id: 'mimi-n3-018',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 18,
    word: '合格',
    reading: 'ごうかく',
    hanViet: 'HỢP CÁCH',
    meaning: 'Thi đỗ, trúng tuyển',
    exampleSentence: {
      japanese: '大学の入試に見事合格した',
      furigana: 'だいがく の にゅうし に みごと ごうかく した',
      vietnamese: 'Đã xuất sắc đỗ kỳ thi tuyển sinh đại học'
    }
  },
  {
    id: 'mimi-n3-019',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 19,
    word: '進学',
    reading: 'しんがく',
    hanViet: 'TIẾN HỌC',
    meaning: 'Học lên cao (đại học, cao học)',
    exampleSentence: {
      japanese: '大学院への進学を希望する',
      furigana: 'だいがくいん への しんがく を きぼう する',
      vietnamese: 'Nguyện vọng học lên cao học'
    }
  },
  {
    id: 'mimi-n3-020',
    unit: 1,
    unitTitle: 'Unit 1 | 名詞 A _ [1-120]',
    index: 20,
    word: '退学',
    reading: 'たいがく',
    hanViet: 'THOÁI HỌC',
    meaning: 'Bỏ học, thôi học',
    exampleSentence: {
      japanese: '家庭の事情で大学を退学する',
      furigana: 'かてい の じじょう で だいがく を たいがく する',
      vietnamese: 'Vì hoàn cảnh gia đình nên thôi học đại học'
    }
  }
];

// Generate words for remaining units
for (let u = 2; u <= 15; u++) {
  const unitInfo = MIMIKARA_N3_UNITS.find(item => item.id === u);
  const sampleItems = [
    { w: `表現_${u}_1`, r: `ひょうげん${u}`, hv: 'BIỂU HIỆN', m: `Từ vựng trọng tâm ${unitInfo?.title} (#1)`, j: `${unitInfo?.title}の必須語彙を身につける。`, f: `${unitInfo?.title}の ひっすごい を みにつける。`, v: `Trau dồi từ vựng bắt buộc của ${unitInfo?.title}.` },
    { w: `文脈_${u}_2`, r: `ぶんみゃく${u}`, hv: 'VĂN MẠCH', m: `Cụm từ theo ngữ cảnh ${unitInfo?.title} (#2)`, j: `例文を通じて正しい使い方を覚える。`, f: `れいぶん を つうじて ただしい つかいかた を おぼえる。`, v: `Ghi nhớ cách dùng chuẩn xác thông qua câu ví dụ.` },
    { w: `活用_${u}_3`, r: `かつよう${u}`, hv: 'HOẠT DỤNG', m: `Từ vựng ứng dụng giao tiếp ${unitInfo?.title} (#3)`, j: `実際の会話や聴解試験で頻出する。`, f: `じっさい の かいわ や ちょうかい しけん で ひんしゅつ する。`, v: `Xuất hiện thường xuyên trong đàm thoại và bài thi nghe.` }
  ];

  sampleItems.forEach((si, sIdx) => {
    MIMIKARA_N3_WORDS.push({
      id: `mimi-n3-${u.toString().padStart(2, '0')}-${(sIdx + 1).toString().padStart(2, '0')}`,
      unit: u,
      unitTitle: unitInfo?.title || `Unit ${u}`,
      index: sIdx + 1,
      word: si.w,
      reading: si.r,
      hanViet: si.hv,
      meaning: si.m,
      exampleSentence: {
        japanese: si.j,
        furigana: si.f,
        vietnamese: si.v
      }
    });
  });
}
