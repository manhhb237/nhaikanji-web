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
    "id": "mimi-n3-01-001",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 1,
    "word": "男性",
    "reading": "だんせい",
    "hanViet": "NAM TÍNH",
    "meaning": "Nam giới, đàn ông",
    "exampleSentence": {
      "japanese": "理想の男性と結婚する",
      "furigana": "りそう の だんせい と けっこん する",
      "vietnamese": "Kết hôn với người đàn ông lý tưởng"
    }
  },
  {
    "id": "mimi-n3-01-002",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 2,
    "word": "女性",
    "reading": "じょせい",
    "hanViet": "NỮ TÍNH",
    "meaning": "Nữ giới, phụ nữ",
    "exampleSentence": {
      "japanese": "あの女性はだれですか",
      "furigana": "あの じょせい は だれ ですか",
      "vietnamese": "Người phụ nữ kia là ai vậy?"
    }
  },
  {
    "id": "mimi-n3-01-003",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 3,
    "word": "高齢",
    "reading": "こうれい",
    "hanViet": "CAO LINH",
    "meaning": "Tuổi cao, cao tuổi",
    "exampleSentence": {
      "japanese": "祖母は高齢だが、まだとても元気だ",
      "furigana": "そぼ は こうれい だが、まだ とても げんき だ",
      "vietnamese": "Bà tôi đã cao tuổi nhưng vẫn rất khỏe mạnh"
    }
  },
  {
    "id": "mimi-n3-01-004",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 4,
    "word": "年上",
    "reading": "としうえ",
    "hanViet": "NIÊN THƯỢNG",
    "meaning": "Lớn tuổi hơn, người hơn tuổi",
    "exampleSentence": {
      "japanese": "年上の友達と旅行に行く",
      "furigana": "としうえ の ともだち と りょこう に いく",
      "vietnamese": "Đi du lịch cùng người bạn lớn tuổi hơn"
    }
  },
  {
    "id": "mimi-n3-01-005",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 5,
    "word": "目上",
    "reading": "めうえ",
    "hanViet": "MỤC THƯỢNG",
    "meaning": "Cấp trên, người bề trên",
    "exampleSentence": {
      "japanese": "目上の人には敬語を使うべきだ",
      "furigana": "めうえ の ひと には けいご を つかう べき だ",
      "vietnamese": "Nên dùng kính ngữ đối với người bề trên"
    }
  },
  {
    "id": "mimi-n3-01-006",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 6,
    "word": "先輩",
    "reading": "せんぱい",
    "hanViet": "TIÊN BỐI",
    "meaning": "Tiền bối, người đi trước",
    "exampleSentence": {
      "japanese": "先輩から仕事を教わる",
      "furigana": "せんぱい から しごと を おそわる",
      "vietnamese": "Học hỏi công việc từ tiền bối"
    }
  },
  {
    "id": "mimi-n3-01-007",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 7,
    "word": "後輩",
    "reading": "こうはい",
    "hanViet": "HẬU BỐI",
    "meaning": "Hậu bối, người đi sau",
    "exampleSentence": {
      "japanese": "後輩にアドバイスをする",
      "furigana": "こうはい に アドバイス を する",
      "vietnamese": "Đưa ra lời khuyên cho hậu bối"
    }
  },
  {
    "id": "mimi-n3-01-008",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 8,
    "word": "相手",
    "reading": "あいて",
    "hanViet": "TƯƠNG THỦ",
    "meaning": "Đối phương, đối tác, bạn đời",
    "exampleSentence": {
      "japanese": "相手の話をよく聞く",
      "furigana": "あいて の はなし を よく きく",
      "vietnamese": "Lắng nghe kỹ câu chuyện của đối phương"
    }
  },
  {
    "id": "mimi-n3-01-009",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 9,
    "word": "知り合い",
    "reading": "しりあい",
    "hanViet": "TRI HỢP",
    "meaning": "Người quen biết",
    "exampleSentence": {
      "japanese": "知り合いに仕事を紹介してもらう",
      "furigana": "しりあい に しごと を しょうかい して もらう",
      "vietnamese": "Được người quen giới thiệu công việc"
    }
  },
  {
    "id": "mimi-n3-01-010",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 10,
    "word": "仲",
    "reading": "なか",
    "hanViet": "TRỌNG",
    "meaning": "Mối quan hệ, tình cảm",
    "exampleSentence": {
      "japanese": "私たちはとても仲が良い",
      "furigana": "わたしたち は とても なか が よい",
      "vietnamese": "Mối quan hệ giữa chúng tôi rất tốt đẹp"
    }
  },
  {
    "id": "mimi-n3-01-011",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 11,
    "word": "生年月日",
    "reading": "せいねんがっぴ",
    "hanViet": "SINH NIÊN NGUYỆT NHẬT",
    "meaning": "Ngày tháng năm sinh",
    "exampleSentence": {
      "japanese": "書類に生年月日を記入する",
      "furigana": "しょるい に せいねんがっぴ を きにゅう する",
      "vietnamese": "Điền ngày tháng năm sinh vào hồ sơ giấy tờ"
    }
  },
  {
    "id": "mimi-n3-01-012",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 12,
    "word": "誕生",
    "reading": "たんじょう",
    "hanViet": "ĐẢN SINH",
    "meaning": "Sự ra đời, sinh đẻ",
    "exampleSentence": {
      "japanese": "新しい命が誕生した",
      "furigana": "あたらしい いのち が たんじょう した",
      "vietnamese": "Một sinh mệnh mới đã chào đời"
    }
  },
  {
    "id": "mimi-n3-01-013",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 13,
    "word": "年",
    "reading": "とし",
    "hanViet": "NIÊN",
    "meaning": "Năm, tuổi tác",
    "exampleSentence": {
      "japanese": "年の初めに目標を立てる",
      "furigana": "とし の はじめ に もくひょう を たてる",
      "vietnamese": "Đặt ra mục tiêu vào đầu năm mới"
    }
  },
  {
    "id": "mimi-n3-01-014",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 14,
    "word": "出身",
    "reading": "しゅっしん",
    "hanViet": "XUẤT THÂN",
    "meaning": "Xuất thân, quê quán",
    "exampleSentence": {
      "japanese": "ご出身はどちらですか",
      "furigana": "ごしゅっしん は どちら ですか",
      "vietnamese": "Quê hương của bạn ở đâu vậy?"
    }
  },
  {
    "id": "mimi-n3-01-015",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 15,
    "word": "故郷",
    "reading": "こきょう",
    "hanViet": "CỐ HƯƠNG",
    "meaning": "Cố hương, quê nhà",
    "exampleSentence": {
      "japanese": "久しぶりに故郷へ帰る",
      "furigana": "ひさしぶり に こきょう へ かえる",
      "vietnamese": "Lâu lắm rồi mới trở về quê nhà"
    }
  },
  {
    "id": "mimi-n3-01-016",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 16,
    "word": "成長",
    "reading": "せいちょう",
    "hanViet": "THÀNH TRƯỞNG",
    "meaning": "Trưởng thành, tăng trưởng",
    "exampleSentence": {
      "japanese": "子どもの成長はとても早い",
      "furigana": "こども の せいちょう は とても はやい",
      "vietnamese": "Sự trưởng thành của con trẻ rất nhanh chóng"
    }
  },
  {
    "id": "mimi-n3-01-017",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 17,
    "word": "成人",
    "reading": "せいじん",
    "hanViet": "THÀNH NHÂN",
    "meaning": "Người trưởng thành",
    "exampleSentence": {
      "japanese": "日本では２０歳で成人になる",
      "furigana": "にほん では はたち で せいじん に なる",
      "vietnamese": "Tại Nhật Bản, 20 tuổi trở thành người trưởng thành"
    }
  },
  {
    "id": "mimi-n3-01-018",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 18,
    "word": "合格",
    "reading": "ごうかく",
    "hanViet": "HỢP CÁCH",
    "meaning": "Thi đỗ, trúng tuyển",
    "exampleSentence": {
      "japanese": "大学の入試に見事合格した",
      "furigana": "だいがく の にゅうし に みごと ごうかく した",
      "vietnamese": "Đã xuất sắc đỗ kỳ thi tuyển sinh đại học"
    }
  },
  {
    "id": "mimi-n3-01-019",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 19,
    "word": "進学",
    "reading": "しんがく",
    "hanViet": "TIẾN HỌC",
    "meaning": "Học lên cao",
    "exampleSentence": {
      "japanese": "大学院への進学を希望する",
      "furigana": "だいがくいん への しんがく を きぼう する",
      "vietnamese": "Nguyện vọng học lên cao học"
    }
  },
  {
    "id": "mimi-n3-01-020",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 20,
    "word": "退学",
    "reading": "たいがく",
    "hanViet": "THOÁI HỌC",
    "meaning": "Bỏ học, thôi học",
    "exampleSentence": {
      "japanese": "家庭の事情で大学を退学する",
      "furigana": "かてい の じじょう で だいがく を たいがく する",
      "vietnamese": "Vì hoàn cảnh gia đình nên thôi học đại học"
    }
  },
  {
    "id": "mimi-n3-01-021",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 21,
    "word": "就職",
    "reading": "しゅうしょく",
    "hanViet": "TỰU CHỨC",
    "meaning": "Tìm được việc làm",
    "exampleSentence": {
      "japanese": "有名企業に就職が決まった",
      "furigana": "ゆうめい きぎょう に しゅうしょく が きまった",
      "vietnamese": "Đã quyết định xin vào làm việc tại công ty danh tiếng"
    }
  },
  {
    "id": "mimi-n3-01-022",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 22,
    "word": "退職",
    "reading": "たいしょく",
    "hanViet": "THOÁI CHỨC",
    "meaning": "Nghỉ việc, từ chức",
    "exampleSentence": {
      "japanese": "定年で退職する",
      "furigana": "ていねん で たいしょく する",
      "vietnamese": "Nghỉ hưu khi đến tuổi"
    }
  },
  {
    "id": "mimi-n3-01-023",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 23,
    "word": "失業",
    "reading": "しつぎょう",
    "hanViet": "THẤT NGHIỆP",
    "meaning": "Thất nghiệp",
    "exampleSentence": {
      "japanese": "不況で失業者が増える",
      "furigana": "ふきょう で しつぎょうしゃ が ふえる",
      "vietnamese": "Tình trạng thất nghiệp gia tăng do suy thoái"
    }
  },
  {
    "id": "mimi-n3-01-024",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 24,
    "word": "通勤",
    "reading": "つうきん",
    "hanViet": "THÔNG CẦN",
    "meaning": "Đi làm, di chuyển tới chỗ làm",
    "exampleSentence": {
      "japanese": "電車で通勤しています",
      "furigana": "でんしゃ で つうきん しています",
      "vietnamese": "Tôi đi làm bằng tàu điện"
    }
  },
  {
    "id": "mimi-n3-01-025",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 25,
    "word": "学歴",
    "reading": "がくれき",
    "hanViet": "HỌC LỊCH",
    "meaning": "Học vấn, bằng cấp",
    "exampleSentence": {
      "japanese": "履歴書に学歴を書く",
      "furigana": "りれきしょ に がくれき を かく",
      "vietnamese": "Viết quá trình học vấn vào sơ yếu lý lịch"
    }
  },
  {
    "id": "mimi-n3-01-026",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 26,
    "word": "給料",
    "reading": "きゅうりょう",
    "hanViet": "CẤP LIỆU",
    "meaning": "Tiền lương",
    "exampleSentence": {
      "japanese": "毎月２５日は給料日だ",
      "furigana": "まいつき にじゅうごにち は きゅうりょうび だ",
      "vietnamese": "Ngày 25 hàng tháng là ngày nhận lương"
    }
  },
  {
    "id": "mimi-n3-01-027",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 27,
    "word": "面接",
    "reading": "めんせつ",
    "hanViet": "DIỆN TIẾP",
    "meaning": "Phỏng vấn",
    "exampleSentence": {
      "japanese": "明日は採用面接がある",
      "furigana": "あした は さいよう めんせつ が ある",
      "vietnamese": "Ngày mai có buổi phỏng vấn tuyển dụng"
    }
  },
  {
    "id": "mimi-n3-01-028",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 28,
    "word": "休憩",
    "reading": "きゅうけい",
    "hanViet": "HƯU KHẾ",
    "meaning": "Nghỉ giải lao",
    "exampleSentence": {
      "japanese": "１０分間休憩しましょう",
      "furigana": "じゅっぷんかん きゅうけい しましょう",
      "vietnamese": "Chúng ta hãy nghỉ giải lao 10 phút nhé"
    }
  },
  {
    "id": "mimi-n3-01-029",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 29,
    "word": "観光",
    "reading": "かんこう",
    "hanViet": "QUAN QUANG",
    "meaning": "Tham quan du lịch",
    "exampleSentence": {
      "japanese": "京都を観光する",
      "furigana": "きょうと を かんこう する",
      "vietnamese": "Tham quan thắng cảnh cố đô Kyoto"
    }
  },
  {
    "id": "mimi-n3-01-030",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 30,
    "word": "帰国",
    "reading": "きこく",
    "hanViet": "QUY QUỐC",
    "meaning": "Về nước",
    "exampleSentence": {
      "japanese": "来月国へ帰国します",
      "furigana": "らいげつ くに へ きこく します",
      "vietnamese": "Tháng sau tôi sẽ về nước"
    }
  },
  {
    "id": "mimi-n3-01-031",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 31,
    "word": "帰省",
    "reading": "きせい",
    "hanViet": "QUY TỈNH",
    "meaning": "Về quê thăm nhà",
    "exampleSentence": {
      "japanese": "お盆に実家へ帰省する",
      "furigana": "おぼん に じっか へ きせい する",
      "vietnamese": "Về quê thăm nhà vào dịp lễ Obon"
    }
  },
  {
    "id": "mimi-n3-01-032",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 32,
    "word": "帰宅",
    "reading": "きたく",
    "hanViet": "QUY TRẠCH",
    "meaning": "Về nhà",
    "exampleSentence": {
      "japanese": "毎晩遅くに帰宅する",
      "furigana": "まいばん おそく に きたく する",
      "vietnamese": "Mỗi tối đều về nhà rất muộn"
    }
  },
  {
    "id": "mimi-n3-01-033",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 33,
    "word": "参加",
    "reading": "さんか",
    "hanViet": "THAM GIA",
    "meaning": "Tham gia vào",
    "exampleSentence": {
      "japanese": "ボランティア活動に参加する",
      "furigana": "ボランティア かつどう に さんか する",
      "vietnamese": "Tham gia hoạt động tình nguyện"
    }
  },
  {
    "id": "mimi-n3-01-034",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 34,
    "word": "出席",
    "reading": "しゅっせき",
    "hanViet": "XUẤT TỊCH",
    "meaning": "Có mặt, tham dự",
    "exampleSentence": {
      "japanese": "会議に出席する",
      "furigana": "かいぎ に しゅっせき する",
      "vietnamese": "Tham dự buổi họp"
    }
  },
  {
    "id": "mimi-n3-01-035",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 35,
    "word": "欠席",
    "reading": "けっせき",
    "hanViet": "KHIẾM TỊCH",
    "meaning": "Vắng mặt",
    "exampleSentence": {
      "japanese": "授業を欠席する",
      "furigana": "じゅぎょう を けっせき する",
      "vietnamese": "Vắng mặt buổi học"
    }
  },
  {
    "id": "mimi-n3-01-036",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 36,
    "word": "遅刻",
    "reading": "ちこく",
    "hanViet": "TRÌ KHẮC",
    "meaning": "Đến muộn",
    "exampleSentence": {
      "japanese": "電車が遅れて遅刻した",
      "furigana": "でんしゃ が おくれて ちこく した",
      "vietnamese": "Tàu điện trễ nên tôi đã đến muộn"
    }
  },
  {
    "id": "mimi-n3-01-037",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 37,
    "word": "化粧",
    "reading": "けしょう",
    "hanViet": "HÓA TRANG",
    "meaning": "Trang điểm",
    "exampleSentence": {
      "japanese": "出かける前にお化粧をする",
      "furigana": "でかける まえ に おけしょう を する",
      "vietnamese": "Trang điểm trước khi ra ngoài"
    }
  },
  {
    "id": "mimi-n3-01-038",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 38,
    "word": "計算",
    "reading": "けいさん",
    "hanViet": "KẾ TOÁN",
    "meaning": "Tính toán",
    "exampleSentence": {
      "japanese": "旅費を計算する",
      "furigana": "りょひ を けいさん する",
      "vietnamese": "Tính toán chi phí chuyến đi"
    }
  },
  {
    "id": "mimi-n3-01-039",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 39,
    "word": "計画",
    "reading": "けいかく",
    "hanViet": "KẾ HOẠCH",
    "meaning": "Kế hoạch",
    "exampleSentence": {
      "japanese": "来年の計画を立てる",
      "furigana": "らいねん の けいかく を たてる",
      "vietnamese": "Lập kế hoạch cho năm tới"
    }
  },
  {
    "id": "mimi-n3-01-040",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 40,
    "word": "成功",
    "reading": "せいこう",
    "hanViet": "THÀNH CÔNG",
    "meaning": "Thành công",
    "exampleSentence": {
      "japanese": "プロジェクトが大成功した",
      "furigana": "プロジェクト が だいせいこう した",
      "vietnamese": "Dự án đã thành công rực rỡ"
    }
  },
  {
    "id": "mimi-n3-01-041",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 41,
    "word": "失敗",
    "reading": "しっぱい",
    "hanViet": "THẤT BẠI",
    "meaning": "Thất bại",
    "exampleSentence": {
      "japanese": "実験が失敗に終わる",
      "furigana": "じっけん が しっぱい に おわる",
      "vietnamese": "Thí nghiệm kết thúc trong thất bại"
    }
  },
  {
    "id": "mimi-n3-01-042",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 42,
    "word": "準備",
    "reading": "じゅんび",
    "hanViet": "CHUẨN BỊ",
    "meaning": "Chuẩn bị",
    "exampleSentence": {
      "japanese": "会議の準備を進める",
      "furigana": "かいぎ の じゅんび を すすめる",
      "vietnamese": "Tiến hành chuẩn bị cho cuộc họp"
    }
  },
  {
    "id": "mimi-n3-01-043",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 43,
    "word": "整理",
    "reading": "せいり",
    "hanViet": "CHỈNH LÝ",
    "meaning": "Thu dọn, sắp xếp",
    "exampleSentence": {
      "japanese": "机の上を整理する",
      "furigana": "つくえ の うえ を せいり する",
      "vietnamese": "Sắp xếp dọn dẹp mặt bàn"
    }
  },
  {
    "id": "mimi-n3-01-044",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 44,
    "word": "注文",
    "reading": "ちゅうもん",
    "hanViet": "CHÚ VĂN",
    "meaning": "Đặt món, đặt hàng",
    "exampleSentence": {
      "japanese": "レストランで料理を注文する",
      "furigana": "レストラン で りょうり を ちゅうもん する",
      "vietnamese": "Gọi món ở nhà hàng"
    }
  },
  {
    "id": "mimi-n3-01-045",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 45,
    "word": "貯金",
    "reading": "ちょきん",
    "hanViet": "TRỮ KIM",
    "meaning": "Tiết kiệm tiền",
    "exampleSentence": {
      "japanese": "将来のために貯金する",
      "furigana": "しょうらい の ため に ちょきん する",
      "vietnamese": "Tiết kiệm tiền cho tương lai"
    }
  },
  {
    "id": "mimi-n3-01-046",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 46,
    "word": "徹夜",
    "reading": "てつや",
    "hanViet": "TRIỆT DẠ",
    "meaning": "Thức trắng đêm",
    "exampleSentence": {
      "japanese": "試験前日に徹夜で勉強する",
      "furigana": "しけん ぜんじつ に てつや で べんきょう する",
      "vietnamese": "Thức trắng đêm học bài trước ngày thi"
    }
  },
  {
    "id": "mimi-n3-01-047",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 47,
    "word": "引っ越し",
    "reading": "ひっこし",
    "hanViet": "DẪN VIỆT",
    "meaning": "Chuyển nhà",
    "exampleSentence": {
      "japanese": "来週新しいアパートへ引っ越す",
      "furigana": "らいしゅう あたらしい アパート へ ひっこす",
      "vietnamese": "Tuần sau chuyển sang căn hộ mới"
    }
  },
  {
    "id": "mimi-n3-01-048",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 48,
    "word": "身長",
    "reading": "しんちょう",
    "hanViet": "THÂN TRƯỜNG",
    "meaning": "Chiều cao cơ thể",
    "exampleSentence": {
      "japanese": "身長が１７５センチある",
      "furigana": "しんちょう が ひゃくななじゅうご センチ ある",
      "vietnamese": "Chiều cao 175 centimet"
    }
  },
  {
    "id": "mimi-n3-01-049",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 49,
    "word": "体重",
    "reading": "たいじゅう",
    "hanViet": "THỂ TRỌNG",
    "meaning": "Cân nặng",
    "exampleSentence": {
      "japanese": "体重を測る",
      "furigana": "たいじゅう を はかる",
      "vietnamese": "Đo cân nặng"
    }
  },
  {
    "id": "mimi-n3-01-050",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 50,
    "word": "怪我",
    "reading": "けが",
    "hanViet": "QUÁI NGÃ",
    "meaning": "Vết thương, chấn thương",
    "exampleSentence": {
      "japanese": "転んで足に怪我をした",
      "furigana": "ころんで あし に けが を した",
      "vietnamese": "Bị ngã chấn thương ở chân"
    }
  },
  {
    "id": "mimi-n3-01-051",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 51,
    "word": "語彙_51",
    "reading": "ごい51",
    "hanViet": "HÁN TỰ 51",
    "meaning": "Từ vựng Mimikara N3 số 51",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第51番の語彙です。",
      "furigana": "Unit 1の めいし だい51ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 51 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-052",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 52,
    "word": "語彙_52",
    "reading": "ごい52",
    "hanViet": "HÁN TỰ 52",
    "meaning": "Từ vựng Mimikara N3 số 52",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第52番の語彙です。",
      "furigana": "Unit 1の めいし だい52ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 52 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-053",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 53,
    "word": "語彙_53",
    "reading": "ごい53",
    "hanViet": "HÁN TỰ 53",
    "meaning": "Từ vựng Mimikara N3 số 53",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第53番の語彙です。",
      "furigana": "Unit 1の めいし だい53ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 53 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-054",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 54,
    "word": "語彙_54",
    "reading": "ごい54",
    "hanViet": "HÁN TỰ 54",
    "meaning": "Từ vựng Mimikara N3 số 54",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第54番の語彙です。",
      "furigana": "Unit 1の めいし だい54ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 54 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-055",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 55,
    "word": "語彙_55",
    "reading": "ごい55",
    "hanViet": "HÁN TỰ 55",
    "meaning": "Từ vựng Mimikara N3 số 55",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第55番の語彙です。",
      "furigana": "Unit 1の めいし だい55ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 55 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-056",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 56,
    "word": "語彙_56",
    "reading": "ごい56",
    "hanViet": "HÁN TỰ 56",
    "meaning": "Từ vựng Mimikara N3 số 56",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第56番の語彙です。",
      "furigana": "Unit 1の めいし だい56ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 56 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-057",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 57,
    "word": "語彙_57",
    "reading": "ごい57",
    "hanViet": "HÁN TỰ 57",
    "meaning": "Từ vựng Mimikara N3 số 57",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第57番の語彙です。",
      "furigana": "Unit 1の めいし だい57ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 57 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-058",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 58,
    "word": "語彙_58",
    "reading": "ごい58",
    "hanViet": "HÁN TỰ 58",
    "meaning": "Từ vựng Mimikara N3 số 58",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第58番の語彙です。",
      "furigana": "Unit 1の めいし だい58ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 58 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-059",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 59,
    "word": "語彙_59",
    "reading": "ごい59",
    "hanViet": "HÁN TỰ 59",
    "meaning": "Từ vựng Mimikara N3 số 59",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第59番の語彙です。",
      "furigana": "Unit 1の めいし だい59ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 59 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-060",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 60,
    "word": "語彙_60",
    "reading": "ごい60",
    "hanViet": "HÁN TỰ 60",
    "meaning": "Từ vựng Mimikara N3 số 60",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第60番の語彙です。",
      "furigana": "Unit 1の めいし だい60ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 60 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-061",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 61,
    "word": "語彙_61",
    "reading": "ごい61",
    "hanViet": "HÁN TỰ 61",
    "meaning": "Từ vựng Mimikara N3 số 61",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第61番の語彙です。",
      "furigana": "Unit 1の めいし だい61ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 61 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-062",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 62,
    "word": "語彙_62",
    "reading": "ごい62",
    "hanViet": "HÁN TỰ 62",
    "meaning": "Từ vựng Mimikara N3 số 62",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第62番の語彙です。",
      "furigana": "Unit 1の めいし だい62ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 62 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-063",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 63,
    "word": "語彙_63",
    "reading": "ごい63",
    "hanViet": "HÁN TỰ 63",
    "meaning": "Từ vựng Mimikara N3 số 63",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第63番の語彙です。",
      "furigana": "Unit 1の めいし だい63ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 63 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-064",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 64,
    "word": "語彙_64",
    "reading": "ごい64",
    "hanViet": "HÁN TỰ 64",
    "meaning": "Từ vựng Mimikara N3 số 64",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第64番の語彙です。",
      "furigana": "Unit 1の めいし だい64ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 64 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-065",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 65,
    "word": "語彙_65",
    "reading": "ごい65",
    "hanViet": "HÁN TỰ 65",
    "meaning": "Từ vựng Mimikara N3 số 65",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第65番の語彙です。",
      "furigana": "Unit 1の めいし だい65ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 65 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-066",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 66,
    "word": "語彙_66",
    "reading": "ごい66",
    "hanViet": "HÁN TỰ 66",
    "meaning": "Từ vựng Mimikara N3 số 66",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第66番の語彙です。",
      "furigana": "Unit 1の めいし だい66ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 66 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-067",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 67,
    "word": "語彙_67",
    "reading": "ごい67",
    "hanViet": "HÁN TỰ 67",
    "meaning": "Từ vựng Mimikara N3 số 67",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第67番の語彙です。",
      "furigana": "Unit 1の めいし だい67ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 67 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-068",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 68,
    "word": "語彙_68",
    "reading": "ごい68",
    "hanViet": "HÁN TỰ 68",
    "meaning": "Từ vựng Mimikara N3 số 68",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第68番の語彙です。",
      "furigana": "Unit 1の めいし だい68ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 68 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-069",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 69,
    "word": "語彙_69",
    "reading": "ごい69",
    "hanViet": "HÁN TỰ 69",
    "meaning": "Từ vựng Mimikara N3 số 69",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第69番の語彙です。",
      "furigana": "Unit 1の めいし だい69ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 69 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-070",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 70,
    "word": "語彙_70",
    "reading": "ごい70",
    "hanViet": "HÁN TỰ 70",
    "meaning": "Từ vựng Mimikara N3 số 70",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第70番の語彙です。",
      "furigana": "Unit 1の めいし だい70ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 70 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-071",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 71,
    "word": "語彙_71",
    "reading": "ごい71",
    "hanViet": "HÁN TỰ 71",
    "meaning": "Từ vựng Mimikara N3 số 71",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第71番の語彙です。",
      "furigana": "Unit 1の めいし だい71ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 71 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-072",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 72,
    "word": "語彙_72",
    "reading": "ごい72",
    "hanViet": "HÁN TỰ 72",
    "meaning": "Từ vựng Mimikara N3 số 72",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第72番の語彙です。",
      "furigana": "Unit 1の めいし だい72ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 72 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-073",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 73,
    "word": "語彙_73",
    "reading": "ごい73",
    "hanViet": "HÁN TỰ 73",
    "meaning": "Từ vựng Mimikara N3 số 73",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第73番の語彙です。",
      "furigana": "Unit 1の めいし だい73ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 73 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-074",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 74,
    "word": "語彙_74",
    "reading": "ごい74",
    "hanViet": "HÁN TỰ 74",
    "meaning": "Từ vựng Mimikara N3 số 74",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第74番の語彙です。",
      "furigana": "Unit 1の めいし だい74ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 74 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-075",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 75,
    "word": "語彙_75",
    "reading": "ごい75",
    "hanViet": "HÁN TỰ 75",
    "meaning": "Từ vựng Mimikara N3 số 75",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第75番の語彙です。",
      "furigana": "Unit 1の めいし だい75ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 75 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-076",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 76,
    "word": "語彙_76",
    "reading": "ごい76",
    "hanViet": "HÁN TỰ 76",
    "meaning": "Từ vựng Mimikara N3 số 76",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第76番の語彙です。",
      "furigana": "Unit 1の めいし だい76ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 76 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-077",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 77,
    "word": "語彙_77",
    "reading": "ごい77",
    "hanViet": "HÁN TỰ 77",
    "meaning": "Từ vựng Mimikara N3 số 77",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第77番の語彙です。",
      "furigana": "Unit 1の めいし だい77ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 77 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-078",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 78,
    "word": "語彙_78",
    "reading": "ごい78",
    "hanViet": "HÁN TỰ 78",
    "meaning": "Từ vựng Mimikara N3 số 78",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第78番の語彙です。",
      "furigana": "Unit 1の めいし だい78ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 78 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-079",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 79,
    "word": "語彙_79",
    "reading": "ごい79",
    "hanViet": "HÁN TỰ 79",
    "meaning": "Từ vựng Mimikara N3 số 79",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第79番の語彙です。",
      "furigana": "Unit 1の めいし だい79ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 79 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-080",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 80,
    "word": "語彙_80",
    "reading": "ごい80",
    "hanViet": "HÁN TỰ 80",
    "meaning": "Từ vựng Mimikara N3 số 80",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第80番の語彙です。",
      "furigana": "Unit 1の めいし だい80ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 80 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-081",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 81,
    "word": "語彙_81",
    "reading": "ごい81",
    "hanViet": "HÁN TỰ 81",
    "meaning": "Từ vựng Mimikara N3 số 81",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第81番の語彙です。",
      "furigana": "Unit 1の めいし だい81ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 81 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-082",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 82,
    "word": "語彙_82",
    "reading": "ごい82",
    "hanViet": "HÁN TỰ 82",
    "meaning": "Từ vựng Mimikara N3 số 82",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第82番の語彙です。",
      "furigana": "Unit 1の めいし だい82ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 82 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-083",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 83,
    "word": "語彙_83",
    "reading": "ごい83",
    "hanViet": "HÁN TỰ 83",
    "meaning": "Từ vựng Mimikara N3 số 83",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第83番の語彙です。",
      "furigana": "Unit 1の めいし だい83ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 83 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-084",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 84,
    "word": "語彙_84",
    "reading": "ごい84",
    "hanViet": "HÁN TỰ 84",
    "meaning": "Từ vựng Mimikara N3 số 84",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第84番の語彙です。",
      "furigana": "Unit 1の めいし だい84ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 84 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-085",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 85,
    "word": "語彙_85",
    "reading": "ごい85",
    "hanViet": "HÁN TỰ 85",
    "meaning": "Từ vựng Mimikara N3 số 85",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第85番の語彙です。",
      "furigana": "Unit 1の めいし だい85ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 85 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-086",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 86,
    "word": "語彙_86",
    "reading": "ごい86",
    "hanViet": "HÁN TỰ 86",
    "meaning": "Từ vựng Mimikara N3 số 86",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第86番の語彙です。",
      "furigana": "Unit 1の めいし だい86ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 86 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-087",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 87,
    "word": "語彙_87",
    "reading": "ごい87",
    "hanViet": "HÁN TỰ 87",
    "meaning": "Từ vựng Mimikara N3 số 87",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第87番の語彙です。",
      "furigana": "Unit 1の めいし だい87ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 87 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-088",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 88,
    "word": "語彙_88",
    "reading": "ごい88",
    "hanViet": "HÁN TỰ 88",
    "meaning": "Từ vựng Mimikara N3 số 88",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第88番の語彙です。",
      "furigana": "Unit 1の めいし だい88ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 88 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-089",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 89,
    "word": "語彙_89",
    "reading": "ごい89",
    "hanViet": "HÁN TỰ 89",
    "meaning": "Từ vựng Mimikara N3 số 89",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第89番の語彙です。",
      "furigana": "Unit 1の めいし だい89ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 89 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-090",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 90,
    "word": "語彙_90",
    "reading": "ごい90",
    "hanViet": "HÁN TỰ 90",
    "meaning": "Từ vựng Mimikara N3 số 90",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第90番の語彙です。",
      "furigana": "Unit 1の めいし だい90ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 90 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-091",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 91,
    "word": "語彙_91",
    "reading": "ごい91",
    "hanViet": "HÁN TỰ 91",
    "meaning": "Từ vựng Mimikara N3 số 91",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第91番の語彙です。",
      "furigana": "Unit 1の めいし だい91ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 91 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-092",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 92,
    "word": "語彙_92",
    "reading": "ごい92",
    "hanViet": "HÁN TỰ 92",
    "meaning": "Từ vựng Mimikara N3 số 92",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第92番の語彙です。",
      "furigana": "Unit 1の めいし だい92ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 92 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-093",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 93,
    "word": "語彙_93",
    "reading": "ごい93",
    "hanViet": "HÁN TỰ 93",
    "meaning": "Từ vựng Mimikara N3 số 93",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第93番の語彙です。",
      "furigana": "Unit 1の めいし だい93ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 93 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-094",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 94,
    "word": "語彙_94",
    "reading": "ごい94",
    "hanViet": "HÁN TỰ 94",
    "meaning": "Từ vựng Mimikara N3 số 94",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第94番の語彙です。",
      "furigana": "Unit 1の めいし だい94ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 94 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-095",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 95,
    "word": "語彙_95",
    "reading": "ごい95",
    "hanViet": "HÁN TỰ 95",
    "meaning": "Từ vựng Mimikara N3 số 95",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第95番の語彙です。",
      "furigana": "Unit 1の めいし だい95ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 95 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-096",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 96,
    "word": "語彙_96",
    "reading": "ごい96",
    "hanViet": "HÁN TỰ 96",
    "meaning": "Từ vựng Mimikara N3 số 96",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第96番の語彙です。",
      "furigana": "Unit 1の めいし だい96ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 96 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-097",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 97,
    "word": "語彙_97",
    "reading": "ごい97",
    "hanViet": "HÁN TỰ 97",
    "meaning": "Từ vựng Mimikara N3 số 97",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第97番の語彙です。",
      "furigana": "Unit 1の めいし だい97ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 97 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-098",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 98,
    "word": "語彙_98",
    "reading": "ごい98",
    "hanViet": "HÁN TỰ 98",
    "meaning": "Từ vựng Mimikara N3 số 98",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第98番の語彙です。",
      "furigana": "Unit 1の めいし だい98ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 98 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-099",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 99,
    "word": "語彙_99",
    "reading": "ごい99",
    "hanViet": "HÁN TỰ 99",
    "meaning": "Từ vựng Mimikara N3 số 99",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第99番の語彙です。",
      "furigana": "Unit 1の めいし だい99ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 99 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-100",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 100,
    "word": "語彙_100",
    "reading": "ごい100",
    "hanViet": "HÁN TỰ 100",
    "meaning": "Từ vựng Mimikara N3 số 100",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第100番の語彙です。",
      "furigana": "Unit 1の めいし だい100ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 100 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-101",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 101,
    "word": "語彙_101",
    "reading": "ごい101",
    "hanViet": "HÁN TỰ 101",
    "meaning": "Từ vựng Mimikara N3 số 101",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第101番の語彙です。",
      "furigana": "Unit 1の めいし だい101ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 101 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-102",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 102,
    "word": "語彙_102",
    "reading": "ごい102",
    "hanViet": "HÁN TỰ 102",
    "meaning": "Từ vựng Mimikara N3 số 102",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第102番の語彙です。",
      "furigana": "Unit 1の めいし だい102ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 102 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-103",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 103,
    "word": "語彙_103",
    "reading": "ごい103",
    "hanViet": "HÁN TỰ 103",
    "meaning": "Từ vựng Mimikara N3 số 103",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第103番の語彙です。",
      "furigana": "Unit 1の めいし だい103ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 103 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-104",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 104,
    "word": "語彙_104",
    "reading": "ごい104",
    "hanViet": "HÁN TỰ 104",
    "meaning": "Từ vựng Mimikara N3 số 104",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第104番の語彙です。",
      "furigana": "Unit 1の めいし だい104ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 104 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-105",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 105,
    "word": "語彙_105",
    "reading": "ごい105",
    "hanViet": "HÁN TỰ 105",
    "meaning": "Từ vựng Mimikara N3 số 105",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第105番の語彙です。",
      "furigana": "Unit 1の めいし だい105ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 105 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-106",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 106,
    "word": "語彙_106",
    "reading": "ごい106",
    "hanViet": "HÁN TỰ 106",
    "meaning": "Từ vựng Mimikara N3 số 106",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第106番の語彙です。",
      "furigana": "Unit 1の めいし だい106ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 106 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-107",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 107,
    "word": "語彙_107",
    "reading": "ごい107",
    "hanViet": "HÁN TỰ 107",
    "meaning": "Từ vựng Mimikara N3 số 107",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第107番の語彙です。",
      "furigana": "Unit 1の めいし だい107ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 107 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-108",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 108,
    "word": "語彙_108",
    "reading": "ごい108",
    "hanViet": "HÁN TỰ 108",
    "meaning": "Từ vựng Mimikara N3 số 108",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第108番の語彙です。",
      "furigana": "Unit 1の めいし だい108ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 108 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-109",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 109,
    "word": "語彙_109",
    "reading": "ごい109",
    "hanViet": "HÁN TỰ 109",
    "meaning": "Từ vựng Mimikara N3 số 109",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第109番の語彙です。",
      "furigana": "Unit 1の めいし だい109ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 109 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-110",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 110,
    "word": "語彙_110",
    "reading": "ごい110",
    "hanViet": "HÁN TỰ 110",
    "meaning": "Từ vựng Mimikara N3 số 110",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第110番の語彙です。",
      "furigana": "Unit 1の めいし だい110ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 110 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-111",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 111,
    "word": "語彙_111",
    "reading": "ごい111",
    "hanViet": "HÁN TỰ 111",
    "meaning": "Từ vựng Mimikara N3 số 111",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第111番の語彙です。",
      "furigana": "Unit 1の めいし だい111ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 111 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-112",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 112,
    "word": "語彙_112",
    "reading": "ごい112",
    "hanViet": "HÁN TỰ 112",
    "meaning": "Từ vựng Mimikara N3 số 112",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第112番の語彙です。",
      "furigana": "Unit 1の めいし だい112ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 112 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-113",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 113,
    "word": "語彙_113",
    "reading": "ごい113",
    "hanViet": "HÁN TỰ 113",
    "meaning": "Từ vựng Mimikara N3 số 113",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第113番の語彙です。",
      "furigana": "Unit 1の めいし だい113ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 113 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-114",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 114,
    "word": "語彙_114",
    "reading": "ごい114",
    "hanViet": "HÁN TỰ 114",
    "meaning": "Từ vựng Mimikara N3 số 114",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第114番の語彙です。",
      "furigana": "Unit 1の めいし だい114ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 114 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-115",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 115,
    "word": "語彙_115",
    "reading": "ごい115",
    "hanViet": "HÁN TỰ 115",
    "meaning": "Từ vựng Mimikara N3 số 115",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第115番の語彙です。",
      "furigana": "Unit 1の めいし だい115ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 115 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-116",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 116,
    "word": "語彙_116",
    "reading": "ごい116",
    "hanViet": "HÁN TỰ 116",
    "meaning": "Từ vựng Mimikara N3 số 116",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第116番の語彙です。",
      "furigana": "Unit 1の めいし だい116ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 116 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-117",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 117,
    "word": "語彙_117",
    "reading": "ごい117",
    "hanViet": "HÁN TỰ 117",
    "meaning": "Từ vựng Mimikara N3 số 117",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第117番の語彙です。",
      "furigana": "Unit 1の めいし だい117ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 117 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-118",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 118,
    "word": "語彙_118",
    "reading": "ごい118",
    "hanViet": "HÁN TỰ 118",
    "meaning": "Từ vựng Mimikara N3 số 118",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第118番の語彙です。",
      "furigana": "Unit 1の めいし だい118ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 118 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-119",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 119,
    "word": "語彙_119",
    "reading": "ごい119",
    "hanViet": "HÁN TỰ 119",
    "meaning": "Từ vựng Mimikara N3 số 119",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第119番の語彙です。",
      "furigana": "Unit 1の めいし だい119ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 119 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-120",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 120,
    "word": "語彙_120",
    "reading": "ごい120",
    "hanViet": "HÁN TỰ 120",
    "meaning": "Từ vựng Mimikara N3 số 120",
    "exampleSentence": {
      "japanese": "Unit 1の名詞第120番の語彙です。",
      "furigana": "Unit 1の めいし だい120ばん の ごい です。",
      "vietnamese": "Từ vựng danh từ số 120 của Unit 1 Mimikara N3."
    }
  }
];
