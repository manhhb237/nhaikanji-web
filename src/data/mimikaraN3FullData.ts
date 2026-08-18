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
  {
    "id": 1,
    "title": "Unit 1 | 名詞 A",
    "wordCount": 120,
    "range": "[1-120]",
    "isPremium": false
  },
  {
    "id": 2,
    "title": "Unit 2 | 動詞 A",
    "wordCount": 100,
    "range": "[121-220]",
    "isPremium": true
  },
  {
    "id": 3,
    "title": "まとめ | 連用名詞",
    "wordCount": 38,
    "range": "[221-258]",
    "isPremium": true
  },
  {
    "id": 4,
    "title": "Unit 3 | 形容詞 A",
    "wordCount": 40,
    "range": "[259-298]",
    "isPremium": true
  },
  {
    "id": 5,
    "title": "まとめ | イ形容詞 + まる／める",
    "wordCount": 12,
    "range": "[299-310]",
    "isPremium": true
  },
  {
    "id": 6,
    "title": "Unit 4 | 名詞 B",
    "wordCount": 100,
    "range": "[311-410]",
    "isPremium": true
  },
  {
    "id": 7,
    "title": "Unit 5 | 動詞 B",
    "wordCount": 100,
    "range": "[411-510]",
    "isPremium": true
  },
  {
    "id": 8,
    "title": "Unit 6 | カタカナ A",
    "wordCount": 40,
    "range": "[511-550]",
    "isPremium": true
  },
  {
    "id": 9,
    "title": "Unit 7 | 形容詞 B",
    "wordCount": 40,
    "range": "[551-590]",
    "isPremium": true
  },
  {
    "id": 10,
    "title": "Unit 8 | 副詞 A",
    "wordCount": 45,
    "range": "[591-635]",
    "isPremium": true
  },
  {
    "id": 11,
    "title": "Unit 9 | 名詞 C",
    "wordCount": 80,
    "range": "[636-715]",
    "isPremium": true
  },
  {
    "id": 12,
    "title": "Unit 10 | 動詞 C",
    "wordCount": 80,
    "range": "[716-795]",
    "isPremium": true
  },
  {
    "id": 13,
    "title": "Unit 11 | カタカナ B",
    "wordCount": 40,
    "range": "[796-835]",
    "isPremium": true
  },
  {
    "id": 14,
    "title": "まとめ | 料理の動詞",
    "wordCount": 10,
    "range": "[836-845]",
    "isPremium": true
  },
  {
    "id": 15,
    "title": "Unit 12 | 副詞 B",
    "wordCount": 35,
    "range": "[846-880]",
    "isPremium": true
  }
];

export const MIMIKARA_N3_WORDS: MimikaraWord[] = [
  {
    "id": "mimi-n3-01-001",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 1,
    "word": "男性",
    "reading": "だんせい",
    "pitchAccent": "だ[んせい]",
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
    "pitchAccent": "じょ[せい]",
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
    "pitchAccent": "こ[うれい]",
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
    "pitchAccent": "と[しうえ]",
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
    "pitchAccent": "め[うえ]",
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
    "pitchAccent": "せ[んぱい]",
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
    "pitchAccent": "こ[うはい]",
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
    "pitchAccent": "[あ]いて",
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
    "pitchAccent": "しり[あい]",
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
    "pitchAccent": "[な]か",
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
    "pitchAccent": "せいねん[がっぴ]",
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
    "pitchAccent": "たん[じょう]",
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
    "pitchAccent": "[と]し",
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
    "pitchAccent": "しゅっ[しん]",
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
    "pitchAccent": "[こ]きょう",
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
    "pitchAccent": "せい[ちょう]",
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
    "pitchAccent": "せい[じん]",
    "hanViet": "THÀNH NHÂN",
    "meaning": "Người trưởng thành (đủ tuổi thành niên)",
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
    "pitchAccent": "ごう[かく]",
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
    "pitchAccent": "しん[がく]",
    "hanViet": "TIẾN HỌC",
    "meaning": "Học lên cao (đại học, cao học)",
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
    "pitchAccent": "たい[がく]",
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
    "pitchAccent": "しゅう[しょく]",
    "hanViet": "TỰU CHỨC",
    "meaning": "Tìm được việc làm, vào làm việc",
    "exampleSentence": {
      "japanese": "有名企業に就職が決まった",
      "furigana": "ゆうめい きぎょう に しゅうしょく が きまった",
      "vietnamese": "Đã được nhận vào làm việc tại công ty danh tiếng"
    }
  },
  {
    "id": "mimi-n3-01-022",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 22,
    "word": "退職",
    "reading": "たいしょく",
    "pitchAccent": "たい[しょく]",
    "hanViet": "THOÁI CHỨC",
    "meaning": "Nghỉ việc, thôi việc, từ chức",
    "exampleSentence": {
      "japanese": "定年で退職する",
      "furigana": "ていねん で たいしょく する",
      "vietnamese": "Nghỉ hưu khi đến tuổi quy định"
    }
  },
  {
    "id": "mimi-n3-01-023",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 23,
    "word": "失業",
    "reading": "しつぎょう",
    "pitchAccent": "しつ[ぎょう]",
    "hanViet": "THẤT NGHIỆP",
    "meaning": "Thất nghiệp",
    "exampleSentence": {
      "japanese": "不況で失業者が増える",
      "furigana": "ふきょう で しつぎょうしゃ が ふえる",
      "vietnamese": "Tình trạng thất nghiệp gia tăng do khủng hoảng"
    }
  },
  {
    "id": "mimi-n3-01-024",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 24,
    "word": "残業",
    "reading": "ざんぎょう",
    "pitchAccent": "ざん[ぎょう]",
    "hanViet": "TÀN NGHIỆP",
    "meaning": "Làm thêm giờ, tăng ca",
    "exampleSentence": {
      "japanese": "毎晩遅くまで残業する",
      "furigana": "まいばん おそく まで ざんぎょう する",
      "vietnamese": "Mỗi tối đều tăng ca làm việc tới muộn"
    }
  },
  {
    "id": "mimi-n3-01-025",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 25,
    "word": "生活",
    "reading": "せいかつ",
    "pitchAccent": "せい[かつ]",
    "hanViet": "SINH HOẠT",
    "meaning": "Cuộc sống, sinh hoạt hàng ngày",
    "exampleSentence": {
      "japanese": "健康的な生活を送る",
      "furigana": "けんこうてき な せいかつ を おくる",
      "vietnamese": "Sống một cuộc sống lành mạnh"
    }
  },
  {
    "id": "mimi-n3-01-026",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 26,
    "word": "通勤",
    "reading": "つうきん",
    "pitchAccent": "つう[きん]",
    "hanViet": "THÔNG CẦN",
    "meaning": "Đi làm, di chuyển tới cơ quan",
    "exampleSentence": {
      "japanese": "電車で通勤しています",
      "furigana": "でんしゃ で つうきん しています",
      "vietnamese": "Tôi đi làm bằng tàu điện"
    }
  },
  {
    "id": "mimi-n3-01-027",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 27,
    "word": "学歴",
    "reading": "がくれき",
    "pitchAccent": "がく[れき]",
    "hanViet": "HỌC LỊCH",
    "meaning": "Học vấn, quá trình học tập",
    "exampleSentence": {
      "japanese": "履歴書に学歴を書く",
      "furigana": "りれきしょ に がくれき を かく",
      "vietnamese": "Ghi quá trình học vấn vào sơ yếu lý lịch"
    }
  },
  {
    "id": "mimi-n3-01-028",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 28,
    "word": "給料",
    "reading": "きゅうりょう",
    "pitchAccent": "[きゅう]りょう",
    "hanViet": "CẤP LIỆU",
    "meaning": "Tiền lương",
    "exampleSentence": {
      "japanese": "毎月２５日は給料日だ",
      "furigana": "まいつき にじゅうごにち は きゅうりょうび だ",
      "vietnamese": "Ngày 25 hàng tháng là ngày nhận lương"
    }
  },
  {
    "id": "mimi-n3-01-029",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 29,
    "word": "面接",
    "reading": "めんせつ",
    "pitchAccent": "めん[せつ]",
    "hanViet": "DIỆN TIẾP",
    "meaning": "Phỏng vấn",
    "exampleSentence": {
      "japanese": "明日は採用面接がある",
      "furigana": "あした は さいよう めんせつ が ある",
      "vietnamese": "Ngày mai có buổi phỏng vấn tuyển dụng"
    }
  },
  {
    "id": "mimi-n3-01-030",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 30,
    "word": "休憩",
    "reading": "きゅうけい",
    "pitchAccent": "きゅう[けい]",
    "hanViet": "HƯU KHẾ",
    "meaning": "Nghỉ giải lao",
    "exampleSentence": {
      "japanese": "１０分間休憩しましょう",
      "furigana": "じゅっぷんかん きゅうけい しましょう",
      "vietnamese": "Chúng ta hãy nghỉ giải lao 10 phút nhé"
    }
  },
  {
    "id": "mimi-n3-01-031",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 31,
    "word": "観光",
    "reading": "かんこう",
    "pitchAccent": "かん[こう]",
    "hanViet": "QUAN QUANG",
    "meaning": "Tham quan du lịch",
    "exampleSentence": {
      "japanese": "京都を観光する",
      "furigana": "きょうと を かんこう する",
      "vietnamese": "Tham quan thắng cảnh cố đô Kyoto"
    }
  },
  {
    "id": "mimi-n3-01-032",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 32,
    "word": "帰国",
    "reading": "きこく",
    "pitchAccent": "き[こく]",
    "hanViet": "QUY QUỐC",
    "meaning": "Về nước",
    "exampleSentence": {
      "japanese": "来月国へ帰国します",
      "furigana": "らいげつ くに へ きこく します",
      "vietnamese": "Tháng sau tôi sẽ về nước"
    }
  },
  {
    "id": "mimi-n3-01-033",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 33,
    "word": "帰省",
    "reading": "きせい",
    "pitchAccent": "き[せい]",
    "hanViet": "QUY TỈNH",
    "meaning": "Về quê thăm nhà",
    "exampleSentence": {
      "japanese": "お盆に実家へ帰省する",
      "furigana": "おぼん に じっか へ きせい する",
      "vietnamese": "Về quê thăm nhà vào dịp lễ Obon"
    }
  },
  {
    "id": "mimi-n3-01-034",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 34,
    "word": "帰宅",
    "reading": "きたく",
    "pitchAccent": "き[たく]",
    "hanViet": "QUY TRẠCH",
    "meaning": "Về nhà",
    "exampleSentence": {
      "japanese": "毎晩遅くに帰宅する",
      "furigana": "まいばん おそく に きたく する",
      "vietnamese": "Mỗi tối đều về nhà rất muộn"
    }
  },
  {
    "id": "mimi-n3-01-035",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 35,
    "word": "参加",
    "reading": "さんか",
    "pitchAccent": "さん[か]",
    "hanViet": "THAM GIA",
    "meaning": "Tham gia vào",
    "exampleSentence": {
      "japanese": "ボランティア活動に参加する",
      "furigana": "ボランティア かつどう に さんか する",
      "vietnamese": "Tham gia hoạt động tình nguyện"
    }
  },
  {
    "id": "mimi-n3-01-036",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 36,
    "word": "出席",
    "reading": "しゅっせき",
    "pitchAccent": "しゅっ[せき]",
    "hanViet": "XUẤT TỊCH",
    "meaning": "Có mặt, tham dự",
    "exampleSentence": {
      "japanese": "会議に出席する",
      "furigana": "かいぎ に しゅっせき する",
      "vietnamese": "Tham dự buổi họp"
    }
  },
  {
    "id": "mimi-n3-01-037",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 37,
    "word": "欠席",
    "reading": "けっせき",
    "pitchAccent": "けっ[せき]",
    "hanViet": "KHIẾM TỊCH",
    "meaning": "Vắng mặt",
    "exampleSentence": {
      "japanese": "授業を欠席する",
      "furigana": "じゅぎょう を けっせき する",
      "vietnamese": "Vắng mặt buổi học"
    }
  },
  {
    "id": "mimi-n3-01-038",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 38,
    "word": "遅刻",
    "reading": "ちこく",
    "pitchAccent": "ち[こく]",
    "hanViet": "TRÌ KHẮC",
    "meaning": "Đến muộn",
    "exampleSentence": {
      "japanese": "電車が遅れて遅刻した",
      "furigana": "деんしゃ が おくれて ちこく した",
      "vietnamese": "Tàu điện trễ nên tôi đã đến muộn"
    }
  },
  {
    "id": "mimi-n3-01-039",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 39,
    "word": "化粧",
    "reading": "けしょう",
    "pitchAccent": "け[しょう]",
    "hanViet": "HÓA TRANG",
    "meaning": "Trang điểm",
    "exampleSentence": {
      "japanese": "出かける前にお化粧をする",
      "furigana": "でかける まえ に おけしょう を する",
      "vietnamese": "Trang điểm trước khi ra ngoài"
    }
  },
  {
    "id": "mimi-n3-01-040",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 40,
    "word": "計算",
    "reading": "けいさん",
    "pitchAccent": "けい[さん]",
    "hanViet": "KẾ TOÁN",
    "meaning": "Tính toán",
    "exampleSentence": {
      "japanese": "旅費を計算する",
      "furigana": "りょひ を けいさん する",
      "vietnamese": "Tính toán chi phí chuyến đi"
    }
  },
  {
    "id": "mimi-n3-01-041",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 41,
    "word": "計画",
    "reading": "けいかく",
    "pitchAccent": "けい[かく]",
    "hanViet": "KẾ HOẠCH",
    "meaning": "Kế hoạch",
    "exampleSentence": {
      "japanese": "来年の計画を立てる",
      "furigana": "らいねん の けいかく を たてる",
      "vietnamese": "Lập kế hoạch cho năm tới"
    }
  },
  {
    "id": "mimi-n3-01-042",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 42,
    "word": "成功",
    "reading": "せいこう",
    "pitchAccent": "せい[こう]",
    "hanViet": "THÀNH CÔNG",
    "meaning": "Thành công",
    "exampleSentence": {
      "japanese": "プロジェクトが大成功した",
      "furigana": "プロジェクト が だいせいこう した",
      "vietnamese": "Dự án đã thành công rực rỡ"
    }
  },
  {
    "id": "mimi-n3-01-043",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 43,
    "word": "失敗",
    "reading": "しっぱい",
    "pitchAccent": "しっ[ぱい]",
    "hanViet": "THẤT BẠI",
    "meaning": "Thất bại",
    "exampleSentence": {
      "japanese": "実験が失敗に終わる",
      "furigana": "じっけん が しっぱい に おわる",
      "vietnamese": "Thí nghiệm kết thúc trong thất bại"
    }
  },
  {
    "id": "mimi-n3-01-044",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 44,
    "word": "準備",
    "reading": "じゅんび",
    "pitchAccent": "[じゅん]び",
    "hanViet": "CHUẨN BỊ",
    "meaning": "Chuẩn bị",
    "exampleSentence": {
      "japanese": "会議の準備を進める",
      "furigana": "かいぎ の じゅんび を すすめる",
      "vietnamese": "Tiến hành chuẩn bị cho cuộc họp"
    }
  },
  {
    "id": "mimi-n3-01-045",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 45,
    "word": "整理",
    "reading": "せいり",
    "pitchAccent": "[せい]り",
    "hanViet": "CHỈNH LÝ",
    "meaning": "Thu dọn, sắp xếp ngăn nắp",
    "exampleSentence": {
      "japanese": "机の上を整理する",
      "furigana": "つくえ の うえ を せいり する",
      "vietnamese": "Sắp xếp dọn dẹp mặt bàn"
    }
  },
  {
    "id": "mimi-n3-01-046",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 46,
    "word": "注文",
    "reading": "ちゅうもん",
    "pitchAccent": "ちゅう[もん]",
    "hanViet": "CHÚ VĂN",
    "meaning": "Đặt món, đặt hàng",
    "exampleSentence": {
      "japanese": "レストランで料理を注文する",
      "furigana": "レストラン で りょうり を ちゅうもん する",
      "vietnamese": "Gọi món ở nhà hàng"
    }
  },
  {
    "id": "mimi-n3-01-047",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 47,
    "word": "貯金",
    "reading": "ちょきん",
    "pitchAccent": "ちょ[きん]",
    "hanViet": "TRỮ KIM",
    "meaning": "Tiết kiệm tiền",
    "exampleSentence": {
      "japanese": "将来のために貯金する",
      "furigana": "しょうらい の ため に ちょきん する",
      "vietnamese": "Tiết kiệm tiền cho tương lai"
    }
  },
  {
    "id": "mimi-n3-01-048",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 48,
    "word": "徹夜",
    "reading": "てつや",
    "pitchAccent": "てつ[や]",
    "hanViet": "TRIỆT DẠ",
    "meaning": "Thức trắng đêm",
    "exampleSentence": {
      "japanese": "試験前日に徹夜で勉強する",
      "furigana": "しけん ぜんじつ に てつや で べんきょう する",
      "vietnamese": "Thức trắng đêm học bài trước ngày thi"
    }
  },
  {
    "id": "mimi-n3-01-049",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 49,
    "word": "引っ越し",
    "reading": "ひっこし",
    "pitchAccent": "ひっ[こし]",
    "hanViet": "DẪN VIỆT",
    "meaning": "Chuyển nhà",
    "exampleSentence": {
      "japanese": "来週新しいアパートへ引っ越す",
      "furigana": "らいしゅう あたらしい アパート へ ひっこす",
      "vietnamese": "Tuần sau chuyển sang căn hộ mới"
    }
  },
  {
    "id": "mimi-n3-01-050",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 50,
    "word": "身長",
    "reading": "しんちょう",
    "pitchAccent": "しん[ちょう]",
    "hanViet": "THÂN TRƯỜNG",
    "meaning": "Chiều cao cơ thể",
    "exampleSentence": {
      "japanese": "身長が１７５センチある",
      "furigana": "しんちょう が ひゃくななじゅうご センチ ある",
      "vietnamese": "Chiều cao 175 centimet"
    }
  },
  {
    "id": "mimi-n3-01-051",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 51,
    "word": "体重",
    "reading": "たいじゅう",
    "pitchAccent": "たい[じゅう]",
    "hanViet": "THỂ TRỌNG",
    "meaning": "Cân nặng",
    "exampleSentence": {
      "japanese": "体重を測る",
      "furigana": "たいじゅう を はかる",
      "vietnamese": "Đo cân nặng"
    }
  },
  {
    "id": "mimi-n3-01-052",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 52,
    "word": "怪我",
    "reading": "けが",
    "pitchAccent": "け[が]",
    "hanViet": "QUÁI NGÃ",
    "meaning": "Vết thương, chấn thương",
    "exampleSentence": {
      "japanese": "転んで足に怪我をした",
      "furigana": "ころんで あし に けが を した",
      "vietnamese": "Bị ngã chấn thương ở chân"
    }
  },
  {
    "id": "mimi-n3-01-053",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 53,
    "word": "会",
    "reading": "かい",
    "pitchAccent": "[か]い",
    "hanViet": "HỘI",
    "meaning": "Buổi họp mặt, bữa tiệc",
    "exampleSentence": {
      "japanese": "忘年会を開く",
      "furigana": "ぼうねんかい を ひらく",
      "vietnamese": "Tổ chức tiệc tất niên"
    }
  },
  {
    "id": "mimi-n3-01-054",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 54,
    "word": "趣味",
    "reading": "しゅみ",
    "pitchAccent": "[しゅ]み",
    "hanViet": "THÚ VỊ",
    "meaning": "Sở thích",
    "exampleSentence": {
      "japanese": "私の趣味は写真撮影です",
      "furigana": "わたし の しゅみ は しゃしん さつえい です",
      "vietnamese": "Sở thích của tôi là chụp ảnh"
    }
  },
  {
    "id": "mimi-n3-01-055",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 55,
    "word": "興味",
    "reading": "きょうみ",
    "pitchAccent": "[きょう]み",
    "hanViet": "HỨNG VỊ",
    "meaning": "Hứng thú, quan tâm",
    "exampleSentence": {
      "japanese": "日本文化に興味がある",
      "furigana": "にほん ぶんか に きょうみ が ある",
      "vietnamese": "Có hứng thú với văn hóa Nhật Bản"
    }
  },
  {
    "id": "mimi-n3-01-056",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 56,
    "word": "思い出",
    "reading": "おもいで",
    "pitchAccent": "おもい[で]",
    "hanViet": "TƯ XUẤT",
    "meaning": "Kỷ niệm đẹp",
    "exampleSentence": {
      "japanese": "高校時代の楽しい思い出",
      "furigana": "こうこう じだい の たのしい おもいで",
      "vietnamese": "Những kỷ niệm vui vẻ thời cấp ba"
    }
  },
  {
    "id": "mimi-n3-01-057",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 57,
    "word": "冗談",
    "reading": "じょうだん",
    "pitchAccent": "じょう[だん]",
    "hanViet": "NHŨNG ĐÀM",
    "meaning": "Trò đùa, lời nói đùa",
    "exampleSentence": {
      "japanese": "冗談を言って人を笑わせる",
      "furigana": "じょうだん を いって ひと を わらわせる",
      "vietnamese": "Nói đùa làm mọi người bật cười"
    }
  },
  {
    "id": "mimi-n3-01-058",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 58,
    "word": "目的",
    "reading": "もくてき",
    "pitchAccent": "もく[てき]",
    "hanViet": "MỤC ĐÍCH",
    "meaning": "Mục đích",
    "exampleSentence": {
      "japanese": "日本へ来た目的は留学です",
      "furigana": "にほん へ きた もくてき は りゅうがく です",
      "vietnamese": "Mục đích tôi đến Nhật là để du học"
    }
  },
  {
    "id": "mimi-n3-01-059",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 59,
    "word": "約束",
    "reading": "やくそく",
    "pitchAccent": "やく[そく]",
    "hanViet": "ƯỚC THÚC",
    "meaning": "Lời hứa, cuộc hẹn",
    "exampleSentence": {
      "japanese": "友達と会う約束をする",
      "furigana": "ともだち と あう やくそく を する",
      "vietnamese": "Hẹn gặp bạn bè"
    }
  },
  {
    "id": "mimi-n3-01-060",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 60,
    "word": "おしゃべり",
    "reading": "おしゃべり",
    "pitchAccent": "お[しゃべり]",
    "hanViet": "THOẠI",
    "meaning": "Nói chuyện, tán gẫu, nhiều chuyện",
    "exampleSentence": {
      "japanese": "カフェでおしゃべりを楽しむ",
      "furigana": "カフェ で おしゃべり を たのしむ",
      "vietnamese": "Thưởng thức việc trò chuyện ở quán cafe"
    }
  },
  {
    "id": "mimi-n3-01-061",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 61,
    "word": "遠慮",
    "reading": "えんりょ",
    "pitchAccent": "[えん]りょ",
    "hanViet": "VIỄN LỰ",
    "meaning": "Khách khí, ngại ngùng, giữ kẽ",
    "exampleSentence": {
      "japanese": "遠慮しないで食べてください",
      "furigana": "えんりょ しないで たべて ください",
      "vietnamese": "Xin đừng khách sáo, hãy ăn tự nhiên đi"
    }
  },
  {
    "id": "mimi-n3-01-062",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 62,
    "word": "我慢",
    "reading": "がまん",
    "pitchAccent": "[が]まん",
    "hanViet": "NGÃ MẠN",
    "meaning": "Chịu đựng, nhẫn nại",
    "exampleSentence": {
      "japanese": "痛みを我慢する",
      "furigana": "いたみ を がまん する",
      "vietnamese": "Cắn răng chịu đựng cơn đau"
    }
  },
  {
    "id": "mimi-n3-01-063",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 63,
    "word": "迷惑",
    "reading": "めいわく",
    "pitchAccent": "[めい]わく",
    "hanViet": "MÊ HOẶC",
    "meaning": "Phiền toái, làm phiền",
    "exampleSentence": {
      "japanese": "人に迷惑をかけてはいけない",
      "furigana": "ひと に めいわく を かけて は いけない",
      "vietnamese": "Không được làm phiền tới người khác"
    }
  },
  {
    "id": "mimi-n3-01-064",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 64,
    "word": "希望",
    "reading": "きぼう",
    "pitchAccent": "き[ぼう]",
    "hanViet": "HY VỌNG",
    "meaning": "Hy vọng, nguyện vọng",
    "exampleSentence": {
      "japanese": "将来への希望を抱く",
      "furigana": "しょうらい への きぼう を いだく",
      "vietnamese": "Mang trong mình niềm hy vọng vào tương lai"
    }
  },
  {
    "id": "mimi-n3-01-065",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 65,
    "word": "夢",
    "reading": "ゆめ",
    "pitchAccent": "[ゆ]め",
    "hanViet": "MỘNG",
    "meaning": "Giấc mơ, ước mơ",
    "exampleSentence": {
      "japanese": "いつか自分の会社を持つ夢がある",
      "furigana": "いつか じぶん の かいしゃ を もつ ゆめ が ある",
      "vietnamese": "Có ước mơ một ngày nào đó mở công ty riêng"
    }
  },
  {
    "id": "mimi-n3-01-066",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 66,
    "word": "賛成",
    "reading": "さんせい",
    "pitchAccent": "さん[せい]",
    "hanViet": "TÁN THÀNH",
    "meaning": "Tán thành, đồng ý",
    "exampleSentence": {
      "japanese": "提案に全員が賛成した",
      "furigana": "ていあん に ぜんいん が さんせい した",
      "vietnamese": "Mọi người đều tán thành đề xuất"
    }
  },
  {
    "id": "mimi-n3-01-067",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 67,
    "word": "反対",
    "reading": "はんたい",
    "pitchAccent": "はん[たい]",
    "hanViet": "PHẢN ĐỐI",
    "meaning": "Phản đối, đối lập",
    "exampleSentence": {
      "japanese": "計画に強く反対する",
      "furigana": "けいかく に つよく はんたい する",
      "vietnamese": "Kịch liệt phản đối kế hoạch"
    }
  },
  {
    "id": "mimi-n3-01-068",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 68,
    "word": "想像",
    "reading": "そうぞう",
    "pitchAccent": "そう[ぞう]",
    "hanViet": "TƯỞNG TƯỢNG",
    "meaning": "Tưởng tượng, hình dung",
    "exampleSentence": {
      "japanese": "未来の生活を想像する",
      "furigana": "みらい の せいかつ を そうぞう する",
      "vietnamese": "Tưởng tượng về cuộc sống trong tương lai"
    }
  },
  {
    "id": "mimi-n3-01-069",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 69,
    "word": "努力",
    "reading": "どりょく",
    "pitchAccent": "[ど]りょく",
    "hanViet": "NỖ LỰC",
    "meaning": "Nỗ lực, cố gắng hết mình",
    "exampleSentence": {
      "japanese": "夢を叶えるために努力する",
      "furigana": "ゆめ を かなえる ため に どりょく する",
      "vietnamese": "Nỗ lực để biến ước mơ thành hiện thực"
    }
  },
  {
    "id": "mimi-n3-01-070",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 70,
    "word": "太陽",
    "reading": "たいよう",
    "pitchAccent": "[たい]よう",
    "hanViet": "THÁI DƯƠNG",
    "meaning": "Mặt trời",
    "exampleSentence": {
      "japanese": "太陽が東から昇る",
      "furigana": "たいよう が ひがし から のぼる",
      "vietnamese": "Mặt trời mọc ở hướng Đông"
    }
  },
  {
    "id": "mimi-n3-01-071",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 71,
    "word": "地球",
    "reading": "ちきゅう",
    "pitchAccent": "ち[きゅう]",
    "hanViet": "ĐỊA CẦU",
    "meaning": "Trái đất",
    "exampleSentence": {
      "japanese": "地球の環境を守る",
      "furigana": "ちきゅう の かんきょう を まもる",
      "vietnamese": "Bảo vệ môi trường Trái Đất"
    }
  },
  {
    "id": "mimi-n3-01-072",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 72,
    "word": "温度",
    "reading": "おんど",
    "pitchAccent": "[おん]ど",
    "hanViet": "ÔN ĐỘ",
    "meaning": "Nhiệt độ",
    "exampleSentence": {
      "japanese": "室内の温度を調節する",
      "furigana": "しつない の おんど を ちょうせつ する",
      "vietnamese": "Điều chỉnh nhiệt độ trong phòng"
    }
  },
  {
    "id": "mimi-n3-01-073",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 73,
    "word": "湿度",
    "reading": "しつど",
    "pitchAccent": "[しつ]ど",
    "hanViet": "THẤP ĐỘ",
    "meaning": "Độ ẩm",
    "exampleSentence": {
      "japanese": "夏は湿度が高くて蒸し暑い",
      "furigana": "なつ は しつど が たかくて むしあつい",
      "vietnamese": "Mùa hè độ ẩm cao nên rất oi bức"
    }
  },
  {
    "id": "mimi-n3-01-074",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 74,
    "word": "湿気",
    "reading": "しっき",
    "pitchAccent": "しっ[き]",
    "hanViet": "THẤP KHÍ",
    "meaning": "Hơi ẩm, sự ẩm ướt",
    "exampleSentence": {
      "japanese": "日本の夏は湿気が多い",
      "furigana": "にほん の なつ は しっき が おおい",
      "vietnamese": "Mùa hè ở Nhật có nhiều hơi ẩm"
    }
  },
  {
    "id": "mimi-n3-01-075",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 75,
    "word": "梅雨",
    "reading": "つゆ",
    "pitchAccent": "つ[ゆ]",
    "hanViet": "MAI VŨ",
    "meaning": "Mùa mưa đầu hè (tháng 6)",
    "exampleSentence": {
      "japanese": "６月に入ると梅雨が始まる",
      "furigana": "ろくがつ に はいる と つゆ が はじまる",
      "vietnamese": "Bước sang tháng 6 là bắt đầu mùa mưa"
    }
  },
  {
    "id": "mimi-n3-01-076",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 76,
    "word": "かび",
    "reading": "かび",
    "pitchAccent": "[か]び",
    "hanViet": "KHUÂN",
    "meaning": "Nấm mốc",
    "exampleSentence": {
      "japanese": "パンにかびが生えてしまった",
      "furigana": "パン に かび が はえて しまった",
      "vietnamese": "Bánh mì đã bị lên nấm mốc"
    }
  },
  {
    "id": "mimi-n3-01-077",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 77,
    "word": "暖房",
    "reading": "だんぼう",
    "pitchAccent": "だん[ぼう]",
    "hanViet": "NOÃN PHÒNG",
    "meaning": "Hệ thống sưởi ấm",
    "exampleSentence": {
      "japanese": "寒いので暖房をつける",
      "furigana": "さむい ので だんぼう を つける",
      "vietnamese": "Vì trời lạnh nên bật máy sưởi"
    }
  },
  {
    "id": "mimi-n3-01-078",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 78,
    "word": "皮",
    "reading": "かわ",
    "pitchAccent": "か[わ]",
    "hanViet": "BÌ",
    "meaning": "Vỏ trái cây, da động vật",
    "exampleSentence": {
      "japanese": "りんごの皮をむく",
      "furigana": "りんご の かわ を むく",
      "vietnamese": "Gọt vỏ quả táo"
    }
  },
  {
    "id": "mimi-n3-01-079",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 79,
    "word": "缶",
    "reading": "かん",
    "pitchAccent": "[か]ん",
    "hanViet": "PHẪU",
    "meaning": "Lon nước ngọt, hộp thiếc",
    "exampleSentence": {
      "japanese": "ジュースの缶を捨てる",
      "furigana": "ジュース の かん を すてる",
      "vietnamese": "Vứt lon nước ngọt"
    }
  },
  {
    "id": "mimi-n3-01-080",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 80,
    "word": "画面",
    "reading": "がめん",
    "pitchAccent": "が[めん]",
    "hanViet": "HỌA DIỆN",
    "meaning": "Màn hình (điện thoại, máy tính)",
    "exampleSentence": {
      "japanese": "スマホの画面を見る",
      "furigana": "スマホ の がめん を みる",
      "vietnamese": "Nhìn vào màn hình điện thoại"
    }
  },
  {
    "id": "mimi-n3-01-081",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 81,
    "word": "番組",
    "reading": "ばんぐみ",
    "pitchAccent": "ばん[ぐみ]",
    "hanViet": "PHIÊN TỔ",
    "meaning": "Chương trình phát thanh, truyền hình",
    "exampleSentence": {
      "japanese": "お気に入りのテレビ番組を見る",
      "furigana": "おきにいり の テレビ ばんぐみ を みる",
      "vietnamese": "Xem chương trình truyền hình yêu thích"
    }
  },
  {
    "id": "mimi-n3-01-082",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 82,
    "word": "記事",
    "reading": "きじ",
    "pitchAccent": "[き]じ",
    "hanViet": "KÝ SỰ",
    "meaning": "Bài báo, bài phóng sự",
    "exampleSentence": {
      "japanese": "新聞の記事を読む",
      "furigana": "しんぶん の きじ を よむ",
      "vietnamese": "Đọc bài báo trên tờ nhật báo"
    }
  },
  {
    "id": "mimi-n3-01-083",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 83,
    "word": "近所",
    "reading": "きんじょ",
    "pitchAccent": "[きん]じょ",
    "hanViet": "CẬN SỞ",
    "meaning": "Hàng xóm, khu vực lân cận",
    "exampleSentence": {
      "japanese": "近所の人と挨拶を交わす",
      "furigana": "きんじょ の ひと と あいさつ を かわす",
      "vietnamese": "Chào hỏi với những người hàng xóm"
    }
  },
  {
    "id": "mimi-n3-01-084",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 84,
    "word": "警察",
    "reading": "けいさつ",
    "pitchAccent": "けい[さつ]",
    "hanViet": "CẢNH SÁT",
    "meaning": "Cảnh sát, đồn công an",
    "exampleSentence": {
      "japanese": "警察に落とし物を届ける",
      "furigana": "けいさつ に おとしもの を とどける",
      "vietnamese": "Báo đồ đánh rơi cho cảnh sát"
    }
  },
  {
    "id": "mimi-n3-01-085",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 85,
    "word": "犯人",
    "reading": "はんにん",
    "pitchAccent": "[はん]にん",
    "hanViet": "PHẠM NHÂN",
    "meaning": "Hung thủ, thủ phạm, tội phạm",
    "exampleSentence": {
      "japanese": "警察が犯人を逮捕した",
      "furigana": "けいさつ が はんにん を たいほ した",
      "vietnamese": "Cảnh sát đã bắt giữ tên thủ phạm"
    }
  },
  {
    "id": "mimi-n3-01-086",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 86,
    "word": "小銭",
    "reading": "こぜに",
    "pitchAccent": "こ[ぜに]",
    "hanViet": "TIỂU TIỀN",
    "meaning": "Tiền lẻ, tiền xu",
    "exampleSentence": {
      "japanese": "自動販売機で小銭を使う",
      "furigana": "じどうはんばいき で こぜに を つかう",
      "vietnamese": "Dùng tiền lẻ ở máy bán hàng tự động"
    }
  },
  {
    "id": "mimi-n3-01-087",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 87,
    "word": "ごちそう",
    "reading": "ごちそう",
    "pitchAccent": "ご[ちそう]",
    "hanViet": "NGỰ TRÌ TỐC",
    "meaning": "Bữa ăn thịnh soạn, sự chiêu đãi",
    "exampleSentence": {
      "japanese": "家族にごちそうを作る",
      "furigana": "かぞく に ごちそう を つくる",
      "vietnamese": "Nấu một bữa tiệc thịnh soạn cho gia đình"
    }
  },
  {
    "id": "mimi-n3-01-088",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 88,
    "word": "作者",
    "reading": "さくしゃ",
    "pitchAccent": "[さく]しゃ",
    "hanViet": "TÁC GIẢ",
    "meaning": "Tác giả, người sáng tác",
    "exampleSentence": {
      "japanese": "この小説の作者は誰ですか",
      "furigana": "この しょうせつ の さくしゃ は だれ ですか",
      "vietnamese": "Ai là tác giả của cuốn tiểu thuyết này?"
    }
  },
  {
    "id": "mimi-n3-01-089",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 89,
    "word": "作品",
    "reading": "さくひん",
    "pitchAccent": "さく[ひん]",
    "hanViet": "TÁC PHẨM",
    "meaning": "Tác phẩm nghệ thuật",
    "exampleSentence": {
      "japanese": "美術館で素晴らしい作品を鑑賞する",
      "furigana": "びじゅつかん で すばらしい さくひん を かんしょう する",
      "vietnamese": "Thưởng thức tác phẩm tuyệt vời ở bảo tàng mỹ thuật"
    }
  },
  {
    "id": "mimi-n3-01-090",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 90,
    "word": "制服",
    "reading": "せいふく",
    "pitchAccent": "せい[ふく]",
    "hanViet": "CHẾ PHỤC",
    "meaning": "Đồng phục",
    "exampleSentence": {
      "japanese": "学校の制服を着る",
      "furigana": "がっこう の せいふく を きる",
      "vietnamese": "Mặc đồng phục của trường học"
    }
  },
  {
    "id": "mimi-n3-01-091",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 91,
    "word": "洗剤",
    "reading": "せんざい",
    "pitchAccent": "せん[ざい]",
    "hanViet": "TẨY TỄ",
    "meaning": "Bột giặt, chất tẩy rửa",
    "exampleSentence": {
      "japanese": "洗濯用洗剤を入れる",
      "furigana": "せんたくよう せんざい を いれる",
      "vietnamese": "Cho bột giặt dùng cho giặt đồ vào"
    }
  },
  {
    "id": "mimi-n3-01-092",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 92,
    "word": "底",
    "reading": "そこ",
    "pitchAccent": "そ[こ]",
    "hanViet": "ĐỂ",
    "meaning": "Đáy (nồi, biển, giếng)",
    "exampleSentence": {
      "japanese": "鍋の底をきれいに洗う",
      "furigana": "なべ の そこ を きれい に あらう",
      "vietnamese": "Rửa sạch đáy nồi"
    }
  },
  {
    "id": "mimi-n3-01-093",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 93,
    "word": "地下",
    "reading": "ちか",
    "pitchAccent": "[ち]か",
    "hanViet": "ĐỊA HẠ",
    "meaning": "Dưới lòng đất, tầng hầm",
    "exampleSentence": {
      "japanese": "地下鉄の駅へ降りる",
      "furigana": "ちかてつ の えき へ おりる",
      "vietnamese": "Đi xuống ga tàu điện ngầm dưới lòng đất"
    }
  },
  {
    "id": "mimi-n3-01-094",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 94,
    "word": "寺",
    "reading": "てら",
    "pitchAccent": "て[ら]",
    "hanViet": "TỰ",
    "meaning": "Ngôi chùa cổ",
    "exampleSentence": {
      "japanese": "京都の古い寺を巡る",
      "furigana": "きょうと の ふるい てら を めぐる",
      "vietnamese": "Dạo quanh các ngôi chùa cổ ở Kyoto"
    }
  },
  {
    "id": "mimi-n3-01-095",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 95,
    "word": "道路",
    "reading": "どうろ",
    "pitchAccent": "[どう]ろ",
    "hanViet": "ĐẠO LỘ",
    "meaning": "Con đường, tuyến đường giao thông",
    "exampleSentence": {
      "japanese": "道路を横断する",
      "furigana": "どうろ を おうだん する",
      "vietnamese": "Băng qua đường phố"
    }
  },
  {
    "id": "mimi-n3-01-096",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 96,
    "word": "坂",
    "reading": "さか",
    "pitchAccent": "さ[か]",
    "hanViet": "PHẢN",
    "meaning": "Con dốc, sườn dốc",
    "exampleSentence": {
      "japanese": "急な坂を上る",
      "furigana": "きゅう な さか を のぼる",
      "vietnamese": "Leo lên con dốc đứng"
    }
  },
  {
    "id": "mimi-n3-01-097",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 97,
    "word": "煙",
    "reading": "けむり",
    "pitchAccent": "けむ[り]",
    "hanViet": "YÊN",
    "meaning": "Làn khói",
    "exampleSentence": {
      "japanese": "煙突から煙が出ている",
      "furigana": "えんとつ から けむり が でている",
      "vietnamese": "Khói đang bốc ra từ ống khói"
    }
  },
  {
    "id": "mimi-n3-01-098",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 98,
    "word": "灰",
    "reading": "はい",
    "pitchAccent": "[は]い",
    "hanViet": "HÔI",
    "meaning": "Tàn tro",
    "exampleSentence": {
      "japanese": "たばこの灰を落とす",
      "furigana": "たばこ の はい を おとす",
      "vietnamese": "Gạt tàn thuốc lá"
    }
  },
  {
    "id": "mimi-n3-01-099",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 99,
    "word": "判子",
    "reading": "はんこ",
    "pitchAccent": "はん[こ]",
    "hanViet": "PHÁN TỬ",
    "meaning": "Con dấu cá nhân, mộc đỏ",
    "exampleSentence": {
      "japanese": "契約書に判子を押す",
      "furigana": "けいやくしょ に はんこ を おす",
      "vietnamese": "Đóng dấu vào bản hợp đồng"
    }
  },
  {
    "id": "mimi-n3-01-100",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 100,
    "word": "名刺",
    "reading": "めいし",
    "pitchAccent": "めい[し]",
    "hanViet": "DANH THỨ",
    "meaning": "Danh thiếp công tác",
    "exampleSentence": {
      "japanese": "名刺を交換する",
      "furigana": "めいし を こうかん する",
      "vietnamese": "Trao đổi danh thiếp với đối tác"
    }
  },
  {
    "id": "mimi-n3-01-101",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 101,
    "word": "免許",
    "reading": "めんきょ",
    "pitchAccent": "[めん]きょ",
    "hanViet": "MIỄN HỨA",
    "meaning": "Giấy phép lái xe, chứng chỉ",
    "exampleSentence": {
      "japanese": "運転免許を取得する",
      "furigana": "うんてん めんきょ を しゅとく する",
      "vietnamese": "Lấy giấy phép lái xe ô tô"
    }
  },
  {
    "id": "mimi-n3-01-102",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 102,
    "word": "多く",
    "reading": "おおく",
    "pitchAccent": "[お]おく",
    "hanViet": "ĐA",
    "meaning": "Nhiều, phần lớn",
    "exampleSentence": {
      "japanese": "多くの人が集まった",
      "furigana": "おおく の ひと が あつまった",
      "vietnamese": "Rất nhiều người đã tập trung lại"
    }
  },
  {
    "id": "mimi-n3-01-103",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 103,
    "word": "前半",
    "reading": "ぜんはん",
    "pitchAccent": "ぜん[はん]",
    "hanViet": "TIỀN BÁN",
    "meaning": "Nửa đầu, hiệp một",
    "exampleSentence": {
      "japanese": "試合の前半が終わった",
      "furigana": "しあい の ぜんはん が おわった",
      "vietnamese": "Hiệp 1 của trận đấu đã kết thúc"
    }
  },
  {
    "id": "mimi-n3-01-104",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 104,
    "word": "後半",
    "reading": "こうはん",
    "pitchAccent": "こう[はん]",
    "hanViet": "HẬU BÁN",
    "meaning": "Nửa sau, hiệp hai",
    "exampleSentence": {
      "japanese": "後半に逆転ゴールを決める",
      "furigana": "こうはん に ぎゃくてん ゴール を きめる",
      "vietnamese": "Ghi bàn thắng lội ngược dòng ở hiệp 2"
    }
  },
  {
    "id": "mimi-n3-01-105",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 105,
    "word": "最高",
    "reading": "さいこう",
    "pitchAccent": "さい[こう]",
    "hanViet": "TỐI CAO",
    "meaning": "Cao nhất, tuyệt vời nhất",
    "exampleSentence": {
      "japanese": "最高の気分を味わう",
      "furigana": "さいこう の きぶん を あじわう",
      "vietnamese": "Tận hưởng cảm giác tuyệt vời nhất"
    }
  },
  {
    "id": "mimi-n3-01-106",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 106,
    "word": "最低",
    "reading": "さいてい",
    "pitchAccent": "さい[てい]",
    "hanViet": "TỐI ĐÊ",
    "meaning": "Thấp nhất, tồi tệ nhất",
    "exampleSentence": {
      "japanese": "最低気温を記録する",
      "furigana": "さいてい きおん を きろく する",
      "vietnamese": "Ghi nhận mức nhiệt độ thấp nhất"
    }
  },
  {
    "id": "mimi-n3-01-107",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 107,
    "word": "最初",
    "reading": "さいしょ",
    "pitchAccent": "さい[しょ]",
    "hanViet": "TỐI SƠ",
    "meaning": "Đầu tiên, trước hết",
    "exampleSentence": {
      "japanese": "最初の一歩を踏み出す",
      "furigana": "さいしょ の いっぽ を ふみだす",
      "vietnamese": "Bước những bước đi đầu tiên"
    }
  },
  {
    "id": "mimi-n3-01-108",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 108,
    "word": "最後",
    "reading": "さいご",
    "pitchAccent": "[さい]ご",
    "hanViet": "TỐI HẬU",
    "meaning": "Cuối cùng",
    "exampleSentence": {
      "japanese": "最後まで諦めない",
      "furigana": "さいご まで あきらめない",
      "vietnamese": "Không bỏ cuộc cho đến phút cuối cùng"
    }
  },
  {
    "id": "mimi-n3-01-109",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 109,
    "word": "自動",
    "reading": "じどう",
    "pitchAccent": "じ[どう]",
    "hanViet": "TỰ ĐỘNG",
    "meaning": "Tự động hóa",
    "exampleSentence": {
      "japanese": "ドアが自動で開閉する",
      "furigana": "ドア が じどう で かいへい する",
      "vietnamese": "Cửa đóng mở một cách tự động"
    }
  },
  {
    "id": "mimi-n3-01-110",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 110,
    "word": "種類",
    "reading": "しゅるい",
    "pitchAccent": "[しゅ]るい",
    "hanViet": "CHỦNG LOẠI",
    "meaning": "Chủng loại, các loại",
    "exampleSentence": {
      "japanese": "様々な種類の花が咲いている",
      "furigana": "さまざま な しゅるい の はな が さいている",
      "vietnamese": "Rất nhiều chủng loại hoa đang nở rộ"
    }
  },
  {
    "id": "mimi-n3-01-111",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 111,
    "word": "性格",
    "reading": "せいかく",
    "pitchAccent": "せい[かく]",
    "hanViet": "TÍNH CÁCH",
    "meaning": "Tính cách con người",
    "exampleSentence": {
      "japanese": "明るい性格で誰からも好かれる",
      "furigana": "あかるい せいかく で だれ から も すかれる",
      "vietnamese": "Tính cách tươi sáng nên ai cũng yêu quý"
    }
  },
  {
    "id": "mimi-n3-01-112",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 112,
    "word": "性質",
    "reading": "せいしつ",
    "pitchAccent": "せい[しつ]",
    "hanViet": "TÍNH CHẤT",
    "meaning": "Tính chất, đặc tính sự vật",
    "exampleSentence": {
      "japanese": "燃えやすい性質を持つ",
      "furigana": "もえやすい せいしつ を もつ",
      "vietnamese": "Mang đặc tính dễ bắt cháy"
    }
  },
  {
    "id": "mimi-n3-01-113",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 113,
    "word": "順番",
    "reading": "じゅんばん",
    "pitchAccent": "じゅん[ばん]",
    "hanViet": "THUẬN PHIÊN",
    "meaning": "Thứ tự, tuần tự",
    "exampleSentence": {
      "japanese": "順番に並んで待つ",
      "furigana": "じゅんばん に ならんで まつ",
      "vietnamese": "Xếp hàng chờ đợi theo đúng thứ tự"
    }
  },
  {
    "id": "mimi-n3-01-114",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 114,
    "word": "番",
    "reading": "ばん",
    "pitchAccent": "[ば]ん",
    "hanViet": "PHIÊN",
    "meaning": "Lượt, phiên làm việc",
    "exampleSentence": {
      "japanese": "次は私の番です",
      "furigana": "つぎ は わたし の ばん です",
      "vietnamese": "Lượt tiếp theo là của tôi"
    }
  },
  {
    "id": "mimi-n3-01-115",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 115,
    "word": "方法",
    "reading": "ほうほう",
    "pitchAccent": "ほう[ほう]",
    "hanViet": "PHƯƠNG PHÁP",
    "meaning": "Phương pháp, cách thức",
    "exampleSentence": {
      "japanese": "効率的な学習方法を探す",
      "furigana": "こうりつてき な がくしゅう ほうほう を さがす",
      "vietnamese": "Tìm kiếm phương pháp học tập hiệu quả"
    }
  },
  {
    "id": "mimi-n3-01-116",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 116,
    "word": "製品",
    "reading": "せいひん",
    "pitchAccent": "せい[ひん]",
    "hanViet": "CHẾ PHẨM",
    "meaning": "Sản phẩm hàng hóa hoàn thiện",
    "exampleSentence": {
      "japanese": "高品質な日本製品",
      "furigana": "こうひんしつ な にほん せいひん",
      "vietnamese": "Sản phẩm hàng hóa Nhật Bản chất lượng cao"
    }
  },
  {
    "id": "mimi-n3-01-117",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 117,
    "word": "値上がり",
    "reading": "ねあがり",
    "pitchAccent": "ねあ[がり]",
    "hanViet": "TRỊ THƯỢNG",
    "meaning": "Sự tăng giá cả",
    "exampleSentence": {
      "japanese": "物価が急激に値上がりする",
      "furigana": "ぶっか が きゅうげき に ねあがり する",
      "vietnamese": "Giá cả hàng hóa tăng mạnh"
    }
  },
  {
    "id": "mimi-n3-01-118",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 118,
    "word": "生",
    "reading": "なま",
    "pitchAccent": "[な]ま",
    "hanViet": "SINH",
    "meaning": "Tươi sống, thô, chưa qua chế biến",
    "exampleSentence": {
      "japanese": "生魚を美味しく食べる",
      "furigana": "なまざかな を おいしく たべる",
      "vietnamese": "Ăn cá tươi sống rất ngon"
    }
  },
  {
    "id": "mimi-n3-01-119",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 119,
    "word": "乾燥",
    "reading": "かんそう",
    "pitchAccent": "かん[そう]",
    "hanViet": "CAN TÁO",
    "meaning": "Khô hanh, sấy khô",
    "exampleSentence": {
      "japanese": "冬は空気が乾燥しやすい",
      "furigana": "ふゆ は くうき が かんそう しやすい",
      "vietnamese": "Mùa đông không khí rất dễ bị khô hanh"
    }
  },
  {
    "id": "mimi-n3-01-120",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 120,
    "word": "清潔",
    "reading": "せいけつ",
    "pitchAccent": "せい[けつ]",
    "hanViet": "THANH KHIẾT",
    "meaning": "Sạch sẽ, tinh tươm",
    "exampleSentence": {
      "japanese": "部屋を常に清潔に保つ",
      "furigana": "へや を つねに せいけつ に たもつ",
      "vietnamese": "Luôn giữ căn phòng sạch sẽ tinh tươm"
    }
  }
];
