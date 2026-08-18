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
      "furigana": "でんしゃ が おくれて ちこく した",
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
  },
  {
    "id": "mimi-n3-02-001",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 1,
    "word": "生きる",
    "reading": "生きる（よみ）",
    "pitchAccent": "生きる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#121): 生きる",
    "exampleSentence": {
      "japanese": "生きるを使った自然な日本語の例文を身につける。",
      "furigana": "生きる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 生きる."
    }
  },
  {
    "id": "mimi-n3-02-002",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 2,
    "word": "生まれる",
    "reading": "生まれる（よみ）",
    "pitchAccent": "生まれる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#122): 生まれる",
    "exampleSentence": {
      "japanese": "生まれるを使った自然な日本語の例文を身につける。",
      "furigana": "生まれる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 生まれる."
    }
  },
  {
    "id": "mimi-n3-02-003",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 3,
    "word": "倒れる",
    "reading": "倒れる（よみ）",
    "pitchAccent": "倒れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#123): 倒れる",
    "exampleSentence": {
      "japanese": "倒れるを使った自然な日本語の例文を身につける。",
      "furigana": "倒れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 倒れる."
    }
  },
  {
    "id": "mimi-n3-02-004",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 4,
    "word": "倒す",
    "reading": "倒す（よみ）",
    "pitchAccent": "倒す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#124): 倒す",
    "exampleSentence": {
      "japanese": "倒すを使った自然な日本語の例文を身につける。",
      "furigana": "倒す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 倒す."
    }
  },
  {
    "id": "mimi-n3-02-005",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 5,
    "word": "起きる",
    "reading": "起きる（よみ）",
    "pitchAccent": "起きる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#125): 起きる",
    "exampleSentence": {
      "japanese": "起きるを使った自然な日本語の例文を身につける。",
      "furigana": "起きる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 起きる."
    }
  },
  {
    "id": "mimi-n3-02-006",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 6,
    "word": "起こす",
    "reading": "起こす（よみ）",
    "pitchAccent": "起こす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#126): 起こす",
    "exampleSentence": {
      "japanese": "起こすを使った自然な日本語の例文を身につける。",
      "furigana": "起こす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 起こす."
    }
  },
  {
    "id": "mimi-n3-02-007",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 7,
    "word": "落ちる",
    "reading": "落ちる（よみ）",
    "pitchAccent": "落ちる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#127): 落ちる",
    "exampleSentence": {
      "japanese": "落ちるを使った自然な日本語の例文を身につける。",
      "furigana": "落ちる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 落ちる."
    }
  },
  {
    "id": "mimi-n3-02-008",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 8,
    "word": "落とす",
    "reading": "落とす（よみ）",
    "pitchAccent": "落とす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#128): 落とす",
    "exampleSentence": {
      "japanese": "落とすを使った自然な日本語の例文を身につける。",
      "furigana": "落とす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 落とす."
    }
  },
  {
    "id": "mimi-n3-02-009",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 9,
    "word": "届く",
    "reading": "届く（よみ）",
    "pitchAccent": "届く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#129): 届く",
    "exampleSentence": {
      "japanese": "届くを使った自然な日本語の例文を身につける。",
      "furigana": "届く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 届く."
    }
  },
  {
    "id": "mimi-n3-02-010",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 10,
    "word": "届ける",
    "reading": "届ける（よみ）",
    "pitchAccent": "届ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#130): 届ける",
    "exampleSentence": {
      "japanese": "届けるを使った自然な日本語の例文を身につける。",
      "furigana": "届ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 届ける."
    }
  },
  {
    "id": "mimi-n3-02-011",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 11,
    "word": "迎える",
    "reading": "迎える（よみ）",
    "pitchAccent": "迎える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#131): 迎える",
    "exampleSentence": {
      "japanese": "迎えるを使った自然な日本語の例文を身につける。",
      "furigana": "迎える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 迎える."
    }
  },
  {
    "id": "mimi-n3-02-012",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 12,
    "word": "追う",
    "reading": "追う（よみ）",
    "pitchAccent": "追う",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#132): 追う",
    "exampleSentence": {
      "japanese": "追うを使った自然な日本語の例文を身につける。",
      "furigana": "追う を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 追う."
    }
  },
  {
    "id": "mimi-n3-02-013",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 13,
    "word": "追いつく",
    "reading": "追いつく（よみ）",
    "pitchAccent": "追いつく",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#133): 追いつく",
    "exampleSentence": {
      "japanese": "追いつくを使った自然な日本語の例文を身につける。",
      "furigana": "追いつく を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 追いつく."
    }
  },
  {
    "id": "mimi-n3-02-014",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 14,
    "word": "追い越す",
    "reading": "追い越す（よみ）",
    "pitchAccent": "追い越す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#134): 追い越す",
    "exampleSentence": {
      "japanese": "追い越すを使った自然な日本語の例文を身につける。",
      "furigana": "追い越す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 追い越す."
    }
  },
  {
    "id": "mimi-n3-02-015",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 15,
    "word": "つかまる",
    "reading": "つかまる（よみ）",
    "pitchAccent": "つかまる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#135): つかまる",
    "exampleSentence": {
      "japanese": "つかまるを使った自然な日本語の例文を身につける。",
      "furigana": "つかまる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ つかまる."
    }
  },
  {
    "id": "mimi-n3-02-016",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 16,
    "word": "つかまえる",
    "reading": "つかまえる（よみ）",
    "pitchAccent": "つかまえる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#136): つかまえる",
    "exampleSentence": {
      "japanese": "つかまえるを使った自然な日本語の例文を身につける。",
      "furigana": "つかまえる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ つかまえる."
    }
  },
  {
    "id": "mimi-n3-02-017",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 17,
    "word": "助かる",
    "reading": "助かる（よみ）",
    "pitchAccent": "助かる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#137): 助かる",
    "exampleSentence": {
      "japanese": "助かるを使った自然な日本語の例文を身につける。",
      "furigana": "助かる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 助かる."
    }
  },
  {
    "id": "mimi-n3-02-018",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 18,
    "word": "助ける",
    "reading": "助ける（よみ）",
    "pitchAccent": "助ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#138): 助ける",
    "exampleSentence": {
      "japanese": "助けるを使った自然な日本語の例文を身につける。",
      "furigana": "助ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 助ける."
    }
  },
  {
    "id": "mimi-n3-02-019",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 19,
    "word": "隠れる",
    "reading": "隠れる（よみ）",
    "pitchAccent": "隠れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#139): 隠れる",
    "exampleSentence": {
      "japanese": "隠れるを使った自然な日本語の例文を身につける。",
      "furigana": "隠れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 隠れる."
    }
  },
  {
    "id": "mimi-n3-02-020",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 20,
    "word": "隠す",
    "reading": "隠す（よみ）",
    "pitchAccent": "隠す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#140): 隠す",
    "exampleSentence": {
      "japanese": "隠すを使った自然な日本語の例文を身につける。",
      "furigana": "隠す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 隠す."
    }
  },
  {
    "id": "mimi-n3-02-021",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 21,
    "word": "埋まる",
    "reading": "埋まる（よみ）",
    "pitchAccent": "埋まる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#141): 埋まる",
    "exampleSentence": {
      "japanese": "埋まるを使った自然な日本語の例文を身につける。",
      "furigana": "埋まる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 埋まる."
    }
  },
  {
    "id": "mimi-n3-02-022",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 22,
    "word": "埋める",
    "reading": "埋める（よみ）",
    "pitchAccent": "埋める",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#142): 埋める",
    "exampleSentence": {
      "japanese": "埋めるを使った自然な日本語の例文を身につける。",
      "furigana": "埋める を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 埋める."
    }
  },
  {
    "id": "mimi-n3-02-023",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 23,
    "word": "囲む",
    "reading": "囲む（よみ）",
    "pitchAccent": "囲む",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#143): 囲む",
    "exampleSentence": {
      "japanese": "囲むを使った自然な日本語の例文を身につける。",
      "furigana": "囲む を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 囲む."
    }
  },
  {
    "id": "mimi-n3-02-024",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 24,
    "word": "詰まる",
    "reading": "詰まる（よみ）",
    "pitchAccent": "詰まる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#144): 詰まる",
    "exampleSentence": {
      "japanese": "詰まるを使った自然な日本語の例文を身につける。",
      "furigana": "詰まる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 詰まる."
    }
  },
  {
    "id": "mimi-n3-02-025",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 25,
    "word": "詰める",
    "reading": "詰める（よみ）",
    "pitchAccent": "詰める",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#145): 詰める",
    "exampleSentence": {
      "japanese": "詰めるを使った自然な日本語の例文を身につける。",
      "furigana": "詰める を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 詰める."
    }
  },
  {
    "id": "mimi-n3-02-026",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 26,
    "word": "開く",
    "reading": "開く（よみ）",
    "pitchAccent": "開く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#146): 開く",
    "exampleSentence": {
      "japanese": "開くを使った自然な日本語の例文を身につける。",
      "furigana": "開く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 開く."
    }
  },
  {
    "id": "mimi-n3-02-027",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 27,
    "word": "閉じる",
    "reading": "閉じる（よみ）",
    "pitchAccent": "閉じる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#147): 閉じる",
    "exampleSentence": {
      "japanese": "閉じるを使った自然な日本語の例文を身につける。",
      "furigana": "閉じる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 閉じる."
    }
  },
  {
    "id": "mimi-n3-02-028",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 28,
    "word": "寄る",
    "reading": "寄る（よみ）",
    "pitchAccent": "寄る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#148): 寄る",
    "exampleSentence": {
      "japanese": "寄るを使った自然な日本語の例文を身につける。",
      "furigana": "寄る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 寄る."
    }
  },
  {
    "id": "mimi-n3-02-029",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 29,
    "word": "寄せる",
    "reading": "寄せる（よみ）",
    "pitchAccent": "寄せる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#149): 寄せる",
    "exampleSentence": {
      "japanese": "寄せるを使った自然な日本語の例文を身につける。",
      "furigana": "寄せる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 寄せる."
    }
  },
  {
    "id": "mimi-n3-02-030",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 30,
    "word": "当たる",
    "reading": "当たる（よみ）",
    "pitchAccent": "当たる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#150): 当たる",
    "exampleSentence": {
      "japanese": "当たるを使った自然な日本語の例文を身につける。",
      "furigana": "当たる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 当たる."
    }
  },
  {
    "id": "mimi-n3-02-031",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 31,
    "word": "当てる",
    "reading": "当てる（よみ）",
    "pitchAccent": "当てる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#151): 当てる",
    "exampleSentence": {
      "japanese": "当てるを使った自然な日本語の例文を身につける。",
      "furigana": "当てる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 当てる."
    }
  },
  {
    "id": "mimi-n3-02-032",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 32,
    "word": "似る",
    "reading": "似る（よみ）",
    "pitchAccent": "似る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#152): 似る",
    "exampleSentence": {
      "japanese": "似るを使った自然な日本語の例文を身につける。",
      "furigana": "似る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 似る."
    }
  },
  {
    "id": "mimi-n3-02-033",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 33,
    "word": "似せる",
    "reading": "似せる（よみ）",
    "pitchAccent": "似せる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#153): 似せる",
    "exampleSentence": {
      "japanese": "似せるを使った自然な日本語の例文を身につける。",
      "furigana": "似せる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 似せる."
    }
  },
  {
    "id": "mimi-n3-02-034",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 34,
    "word": "分かれる",
    "reading": "分かれる（よみ）",
    "pitchAccent": "分かれる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#154): 分かれる",
    "exampleSentence": {
      "japanese": "分かれるを使った自然な日本語の例文を身につける。",
      "furigana": "分かれる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 分かれる."
    }
  },
  {
    "id": "mimi-n3-02-035",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 35,
    "word": "分ける",
    "reading": "分ける（よみ）",
    "pitchAccent": "分ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#155): 分ける",
    "exampleSentence": {
      "japanese": "分けるを使った自然な日本語の例文を身につける。",
      "furigana": "分ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 分ける."
    }
  },
  {
    "id": "mimi-n3-02-036",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 36,
    "word": "足す",
    "reading": "足す（よみ）",
    "pitchAccent": "足す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#156): 足す",
    "exampleSentence": {
      "japanese": "足すを使った自然な日本語の例文を身につける。",
      "furigana": "足す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 足す."
    }
  },
  {
    "id": "mimi-n3-02-037",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 37,
    "word": "引く",
    "reading": "引く（よみ）",
    "pitchAccent": "引く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#157): 引く",
    "exampleSentence": {
      "japanese": "引くを使った自然な日本語の例文を身につける。",
      "furigana": "引く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 引く."
    }
  },
  {
    "id": "mimi-n3-02-038",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 38,
    "word": "掛ける",
    "reading": "掛ける（よみ）",
    "pitchAccent": "掛ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#158): 掛ける",
    "exampleSentence": {
      "japanese": "掛けるを使った自然な日本語の例文を身につける。",
      "furigana": "掛ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 掛ける."
    }
  },
  {
    "id": "mimi-n3-02-039",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 39,
    "word": "割る",
    "reading": "割る（よみ）",
    "pitchAccent": "割る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#159): 割る",
    "exampleSentence": {
      "japanese": "割るを使った自然な日本語の例文を身につける。",
      "furigana": "割る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 割る."
    }
  },
  {
    "id": "mimi-n3-02-040",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 40,
    "word": "増える",
    "reading": "増える（よみ）",
    "pitchAccent": "増える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#160): 増える",
    "exampleSentence": {
      "japanese": "増えるを使った自然な日本語の例文を身につける。",
      "furigana": "増える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 増える."
    }
  },
  {
    "id": "mimi-n3-02-041",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 41,
    "word": "増やす",
    "reading": "増やす（よみ）",
    "pitchAccent": "増やす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#161): 増やす",
    "exampleSentence": {
      "japanese": "増やすを使った自然な日本語の例文を身につける。",
      "furigana": "増やす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 増やす."
    }
  },
  {
    "id": "mimi-n3-02-042",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 42,
    "word": "減る",
    "reading": "減る（よみ）",
    "pitchAccent": "減る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#162): 減る",
    "exampleSentence": {
      "japanese": "減るを使った自然な日本語の例文を身につける。",
      "furigana": "減る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 減る."
    }
  },
  {
    "id": "mimi-n3-02-043",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 43,
    "word": "減らす",
    "reading": "減らす（よみ）",
    "pitchAccent": "減らす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#163): 減らす",
    "exampleSentence": {
      "japanese": "減らすを使った自然な日本語の例文を身につける。",
      "furigana": "減らす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 減らす."
    }
  },
  {
    "id": "mimi-n3-02-044",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 44,
    "word": "変わる",
    "reading": "変わる（よみ）",
    "pitchAccent": "変わる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#164): 変わる",
    "exampleSentence": {
      "japanese": "変わるを使った自然な日本語の例文を身につける。",
      "furigana": "変わる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 変わる."
    }
  },
  {
    "id": "mimi-n3-02-045",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 45,
    "word": "変える",
    "reading": "変える（よみ）",
    "pitchAccent": "変える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#165): 変える",
    "exampleSentence": {
      "japanese": "変えるを使った自然な日本語の例文を身につける。",
      "furigana": "変える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 変える."
    }
  },
  {
    "id": "mimi-n3-02-046",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 46,
    "word": "替わる",
    "reading": "替わる（よみ）",
    "pitchAccent": "替わる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#166): 替わる",
    "exampleSentence": {
      "japanese": "替わるを使った自然な日本語の例文を身につける。",
      "furigana": "替わる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 替わる."
    }
  },
  {
    "id": "mimi-n3-02-047",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 47,
    "word": "替える",
    "reading": "替える（よみ）",
    "pitchAccent": "替える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#167): 替える",
    "exampleSentence": {
      "japanese": "替えるを使った自然な日本語の例文を身につける。",
      "furigana": "替える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 替える."
    }
  },
  {
    "id": "mimi-n3-02-048",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 48,
    "word": "返る",
    "reading": "返る（よみ）",
    "pitchAccent": "返る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#168): 返る",
    "exampleSentence": {
      "japanese": "返るを使った自然な日本語の例文を身につける。",
      "furigana": "返る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 返る."
    }
  },
  {
    "id": "mimi-n3-02-049",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 49,
    "word": "返す",
    "reading": "返す（よみ）",
    "pitchAccent": "返す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#169): 返す",
    "exampleSentence": {
      "japanese": "返すを使った自然な日本語の例文を身につける。",
      "furigana": "返す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 返す."
    }
  },
  {
    "id": "mimi-n3-02-050",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 50,
    "word": "譲る",
    "reading": "譲る（よみ）",
    "pitchAccent": "譲る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#170): 譲る",
    "exampleSentence": {
      "japanese": "譲るを使った自然な日本語の例文を身につける。",
      "furigana": "譲る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 譲る."
    }
  },
  {
    "id": "mimi-n3-02-051",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 51,
    "word": "助かる",
    "reading": "助かる（よみ）",
    "pitchAccent": "助かる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#171): 助かる",
    "exampleSentence": {
      "japanese": "助かるを使った自然な日本語の例文を身につける。",
      "furigana": "助かる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 助かる."
    }
  },
  {
    "id": "mimi-n3-02-052",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 52,
    "word": "助ける",
    "reading": "助ける（よみ）",
    "pitchAccent": "助ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#172): 助ける",
    "exampleSentence": {
      "japanese": "助けるを使った自然な日本語の例文を身につける。",
      "furigana": "助ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 助ける."
    }
  },
  {
    "id": "mimi-n3-02-053",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 53,
    "word": "いじめる",
    "reading": "いじめる（よみ）",
    "pitchAccent": "いじめる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#173): いじめる",
    "exampleSentence": {
      "japanese": "いじめるを使った自然な日本語の例文を身につける。",
      "furigana": "いじめる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ いじめる."
    }
  },
  {
    "id": "mimi-n3-02-054",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 54,
    "word": "だます",
    "reading": "だます（よみ）",
    "pitchAccent": "だます",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#174): だます",
    "exampleSentence": {
      "japanese": "だますを使った自然な日本語の例文を身につける。",
      "furigana": "だます を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ だます."
    }
  },
  {
    "id": "mimi-n3-02-055",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 55,
    "word": "盗む",
    "reading": "盗む（よみ）",
    "pitchAccent": "盗む",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#175): 盗む",
    "exampleSentence": {
      "japanese": "盗むを使った自然な日本語の例文を身につける。",
      "furigana": "盗む を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 盗む."
    }
  },
  {
    "id": "mimi-n3-02-056",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 56,
    "word": "刺さる",
    "reading": "刺さる（よみ）",
    "pitchAccent": "刺さる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#176): 刺さる",
    "exampleSentence": {
      "japanese": "刺さるを使った自然な日本語の例文を身につける。",
      "furigana": "刺さる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 刺さる."
    }
  },
  {
    "id": "mimi-n3-02-057",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 57,
    "word": "刺す",
    "reading": "刺す（よみ）",
    "pitchAccent": "刺す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#177): 刺す",
    "exampleSentence": {
      "japanese": "刺すを使った自然な日本語の例文を身につける。",
      "furigana": "刺す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 刺す."
    }
  },
  {
    "id": "mimi-n3-02-058",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 58,
    "word": "殺す",
    "reading": "殺す（よみ）",
    "pitchAccent": "殺す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#178): 殺す",
    "exampleSentence": {
      "japanese": "殺すを使った自然な日本語の例文を身につける。",
      "furigana": "殺す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 殺す."
    }
  },
  {
    "id": "mimi-n3-02-059",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 59,
    "word": "隠れる",
    "reading": "隠れる（よみ）",
    "pitchAccent": "隠れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#179): 隠れる",
    "exampleSentence": {
      "japanese": "隠れるを使った自然な日本語の例文を身につける。",
      "furigana": "隠れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 隠れる."
    }
  },
  {
    "id": "mimi-n3-02-060",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 60,
    "word": "隠す",
    "reading": "隠す（よみ）",
    "pitchAccent": "隠す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#180): 隠す",
    "exampleSentence": {
      "japanese": "隠すを使った自然な日本語の例文を身につける。",
      "furigana": "隠す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 隠す."
    }
  },
  {
    "id": "mimi-n3-02-061",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 61,
    "word": "埋まる",
    "reading": "埋まる（よみ）",
    "pitchAccent": "埋まる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#181): 埋まる",
    "exampleSentence": {
      "japanese": "埋まるを使った自然な日本語の例文を身につける。",
      "furigana": "埋まる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 埋まる."
    }
  },
  {
    "id": "mimi-n3-02-062",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 62,
    "word": "埋める",
    "reading": "埋める（よみ）",
    "pitchAccent": "埋める",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#182): 埋める",
    "exampleSentence": {
      "japanese": "埋めるを使った自然な日本語の例文を身につける。",
      "furigana": "埋める を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 埋める."
    }
  },
  {
    "id": "mimi-n3-02-063",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 63,
    "word": "囲む",
    "reading": "囲む（よみ）",
    "pitchAccent": "囲む",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#183): 囲む",
    "exampleSentence": {
      "japanese": "囲むを使った自然な日本語の例文を身につける。",
      "furigana": "囲む を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 囲む."
    }
  },
  {
    "id": "mimi-n3-02-064",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 64,
    "word": "詰まる",
    "reading": "詰まる（よみ）",
    "pitchAccent": "詰まる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#184): 詰まる",
    "exampleSentence": {
      "japanese": "詰まるを使った自然な日本語の例文を身につける。",
      "furigana": "詰まる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 詰まる."
    }
  },
  {
    "id": "mimi-n3-02-065",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 65,
    "word": "詰める",
    "reading": "詰める（よみ）",
    "pitchAccent": "詰める",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#185): 詰める",
    "exampleSentence": {
      "japanese": "詰めるを使った自然な日本語の例文を身につける。",
      "furigana": "詰める を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 詰める."
    }
  },
  {
    "id": "mimi-n3-02-066",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 66,
    "word": "開く",
    "reading": "開く（よみ）",
    "pitchAccent": "開く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#186): 開く",
    "exampleSentence": {
      "japanese": "開くを使った自然な日本語の例文を身につける。",
      "furigana": "開く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 開く."
    }
  },
  {
    "id": "mimi-n3-02-067",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 67,
    "word": "閉じる",
    "reading": "閉じる（よみ）",
    "pitchAccent": "閉じる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#187): 閉じる",
    "exampleSentence": {
      "japanese": "閉じるを使った自然な日本語の例文を身につける。",
      "furigana": "閉じる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 閉じる."
    }
  },
  {
    "id": "mimi-n3-02-068",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 68,
    "word": "飛ぶ",
    "reading": "飛ぶ（よみ）",
    "pitchAccent": "飛ぶ",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#188): 飛ぶ",
    "exampleSentence": {
      "japanese": "飛ぶを使った自然な日本語の例文を身につける。",
      "furigana": "飛ぶ を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 飛ぶ."
    }
  },
  {
    "id": "mimi-n3-02-069",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 69,
    "word": "跳ぶ",
    "reading": "跳ぶ（よみ）",
    "pitchAccent": "跳ぶ",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#189): 跳ぶ",
    "exampleSentence": {
      "japanese": "跳ぶを使った自然な日本語の例文を身につける。",
      "furigana": "跳ぶ を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 跳ぶ."
    }
  },
  {
    "id": "mimi-n3-02-070",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 70,
    "word": "登る",
    "reading": "登る（よみ）",
    "pitchAccent": "登る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#190): 登る",
    "exampleSentence": {
      "japanese": "登るを使った自然な日本語の例文を身につける。",
      "furigana": "登る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 登る."
    }
  },
  {
    "id": "mimi-n3-02-071",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 71,
    "word": "上る",
    "reading": "上る（よみ）",
    "pitchAccent": "上る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#191): 上る",
    "exampleSentence": {
      "japanese": "上るを使った自然な日本語の例文を身につける。",
      "furigana": "上る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 上る."
    }
  },
  {
    "id": "mimi-n3-02-072",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 72,
    "word": "下る",
    "reading": "下る（よみ）",
    "pitchAccent": "下る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#192): 下る",
    "exampleSentence": {
      "japanese": "下るを使った自然な日本語の例文を身につける。",
      "furigana": "下る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 下る."
    }
  },
  {
    "id": "mimi-n3-02-073",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 73,
    "word": "降りる",
    "reading": "降りる（よみ）",
    "pitchAccent": "降りる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#193): 降りる",
    "exampleSentence": {
      "japanese": "降りるを使った自然な日本語の例文を身につける。",
      "furigana": "降りる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 降りる."
    }
  },
  {
    "id": "mimi-n3-02-074",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 74,
    "word": "降ろす",
    "reading": "降ろす（よみ）",
    "pitchAccent": "降ろす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#194): 降ろす",
    "exampleSentence": {
      "japanese": "降ろすを使った自然な日本語の例文を身につける。",
      "furigana": "降ろす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 降ろす."
    }
  },
  {
    "id": "mimi-n3-02-075",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 75,
    "word": "転がる",
    "reading": "転がる（よみ）",
    "pitchAccent": "転がる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#195): 転がる",
    "exampleSentence": {
      "japanese": "転がるを使った自然な日本語の例文を身につける。",
      "furigana": "転がる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 転がる."
    }
  },
  {
    "id": "mimi-n3-02-076",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 76,
    "word": "転がす",
    "reading": "転がす（よみ）",
    "pitchAccent": "転がす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#196): 転がす",
    "exampleSentence": {
      "japanese": "転がすを使った自然な日本語の例文を身につける。",
      "furigana": "転がす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 転がす."
    }
  },
  {
    "id": "mimi-n3-02-077",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 77,
    "word": "傾く",
    "reading": "傾く（よみ）",
    "pitchAccent": "傾く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#197): 傾く",
    "exampleSentence": {
      "japanese": "傾くを使った自然な日本語の例文を身につける。",
      "furigana": "傾く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 傾く."
    }
  },
  {
    "id": "mimi-n3-02-078",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 78,
    "word": "傾ける",
    "reading": "傾ける（よみ）",
    "pitchAccent": "傾ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#198): 傾ける",
    "exampleSentence": {
      "japanese": "傾けるを使った自然な日本語の例文を身につける。",
      "furigana": "傾ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 傾ける."
    }
  },
  {
    "id": "mimi-n3-02-079",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 79,
    "word": "揺れる",
    "reading": "揺れる（よみ）",
    "pitchAccent": "揺れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#199): 揺れる",
    "exampleSentence": {
      "japanese": "揺れるを使った自然な日本語の例文を身につける。",
      "furigana": "揺れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 揺れる."
    }
  },
  {
    "id": "mimi-n3-02-080",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 80,
    "word": "揺らす",
    "reading": "揺らす（よみ）",
    "pitchAccent": "揺らす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#200): 揺らす",
    "exampleSentence": {
      "japanese": "揺らすを使った自然な日本語の例文を身につける。",
      "furigana": "揺らす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 揺らす."
    }
  },
  {
    "id": "mimi-n3-02-081",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 81,
    "word": "流れる",
    "reading": "流れる（よみ）",
    "pitchAccent": "流れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#201): 流れる",
    "exampleSentence": {
      "japanese": "流れるを使った自然な日本語の例文を身につける。",
      "furigana": "流れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 流れる."
    }
  },
  {
    "id": "mimi-n3-02-082",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 82,
    "word": "流す",
    "reading": "流す（よみ）",
    "pitchAccent": "流す",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#202): 流す",
    "exampleSentence": {
      "japanese": "流すを使った自然な日本語の例文を身につける。",
      "furigana": "流す を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 流す."
    }
  },
  {
    "id": "mimi-n3-02-083",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 83,
    "word": "濡れる",
    "reading": "濡れる（よみ）",
    "pitchAccent": "濡れる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#203): 濡れる",
    "exampleSentence": {
      "japanese": "濡れるを使った自然な日本語の例文を身につける。",
      "furigana": "濡れる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 濡れる."
    }
  },
  {
    "id": "mimi-n3-02-084",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 84,
    "word": "濡らす",
    "reading": "濡らす（よみ）",
    "pitchAccent": "濡らす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#204): 濡らす",
    "exampleSentence": {
      "japanese": "濡らすを使った自然な日本語の例文を身につける。",
      "furigana": "濡らす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 濡らす."
    }
  },
  {
    "id": "mimi-n3-02-085",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 85,
    "word": "乾く",
    "reading": "乾く（よみ）",
    "pitchAccent": "乾く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#205): 乾く",
    "exampleSentence": {
      "japanese": "乾くを使った自然な日本語の例文を身につける。",
      "furigana": "乾く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 乾く."
    }
  },
  {
    "id": "mimi-n3-02-086",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 86,
    "word": "乾かす",
    "reading": "乾かす（よみ）",
    "pitchAccent": "乾かす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#206): 乾かす",
    "exampleSentence": {
      "japanese": "乾かすを使った自然な日本語の例文を身につける。",
      "furigana": "乾かす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 乾かす."
    }
  },
  {
    "id": "mimi-n3-02-087",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 87,
    "word": "冷える",
    "reading": "冷える（よみ）",
    "pitchAccent": "冷える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#207): 冷える",
    "exampleSentence": {
      "japanese": "冷えるを使った自然な日本語の例文を身につける。",
      "furigana": "冷える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 冷える."
    }
  },
  {
    "id": "mimi-n3-02-088",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 88,
    "word": "冷やす",
    "reading": "冷やす（よみ）",
    "pitchAccent": "冷やす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#208): 冷やす",
    "exampleSentence": {
      "japanese": "冷やすを使った自然な日本語の例文を身につける。",
      "furigana": "冷やす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 冷やす."
    }
  },
  {
    "id": "mimi-n3-02-089",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 89,
    "word": "冷める",
    "reading": "冷める（よみ）",
    "pitchAccent": "冷める",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#209): 冷める",
    "exampleSentence": {
      "japanese": "冷めるを使った自然な日本語の例文を身につける。",
      "furigana": "冷める を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 冷める."
    }
  },
  {
    "id": "mimi-n3-02-090",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 90,
    "word": "冷ます",
    "reading": "冷ます（よみ）",
    "pitchAccent": "冷ます",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#210): 冷ます",
    "exampleSentence": {
      "japanese": "冷ますを使った自然な日本語の例文を身につける。",
      "furigana": "冷ます を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 冷ます."
    }
  },
  {
    "id": "mimi-n3-02-091",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 91,
    "word": "燃える",
    "reading": "燃える（よみ）",
    "pitchAccent": "燃える",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#211): 燃える",
    "exampleSentence": {
      "japanese": "燃えるを使った自然な日本語の例文を身につける。",
      "furigana": "燃える を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 燃える."
    }
  },
  {
    "id": "mimi-n3-02-092",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 92,
    "word": "燃やす",
    "reading": "燃やす（よみ）",
    "pitchAccent": "燃やす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#212): 燃やす",
    "exampleSentence": {
      "japanese": "燃やすを使った自然な日本語の例文を身につける。",
      "furigana": "燃やす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 燃やす."
    }
  },
  {
    "id": "mimi-n3-02-093",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 93,
    "word": "沸く",
    "reading": "沸く（よみ）",
    "pitchAccent": "沸く",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#213): 沸く",
    "exampleSentence": {
      "japanese": "沸くを使った自然な日本語の例文を身につける。",
      "furigana": "沸く を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 沸く."
    }
  },
  {
    "id": "mimi-n3-02-094",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 94,
    "word": "沸かす",
    "reading": "沸かす（よみ）",
    "pitchAccent": "沸かす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#214): 沸かす",
    "exampleSentence": {
      "japanese": "沸かすを使った自然な日本語の例文を身につける。",
      "furigana": "沸かす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 沸かす."
    }
  },
  {
    "id": "mimi-n3-02-095",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 95,
    "word": "鳴る",
    "reading": "鳴る（よみ）",
    "pitchAccent": "鳴る",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#215): 鳴る",
    "exampleSentence": {
      "japanese": "鳴るを使った自然な日本語の例文を身につける。",
      "furigana": "鳴る を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 鳴る."
    }
  },
  {
    "id": "mimi-n3-02-096",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 96,
    "word": "鳴らす",
    "reading": "鳴らす（よみ）",
    "pitchAccent": "鳴らす",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#216): 鳴らす",
    "exampleSentence": {
      "japanese": "鳴らすを使った自然な日本語の例文を身につける。",
      "furigana": "鳴らす を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 鳴らす."
    }
  },
  {
    "id": "mimi-n3-02-097",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 97,
    "word": "役立つ",
    "reading": "役立つ（よみ）",
    "pitchAccent": "役立つ",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#217): 役立つ",
    "exampleSentence": {
      "japanese": "役立つを使った自然な日本語の例文を身につける。",
      "furigana": "役立つ を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 役立つ."
    }
  },
  {
    "id": "mimi-n3-02-098",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 98,
    "word": "役立てる",
    "reading": "役立てる（よみ）",
    "pitchAccent": "役立てる",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#218): 役立てる",
    "exampleSentence": {
      "japanese": "役立てるを使った自然な日本語の例文を身につける。",
      "furigana": "役立てる を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 役立てる."
    }
  },
  {
    "id": "mimi-n3-02-099",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 99,
    "word": "飾り付ける",
    "reading": "飾り付ける（よみ）",
    "pitchAccent": "飾り付ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#219): 飾り付ける",
    "exampleSentence": {
      "japanese": "飾り付けるを使った自然な日本語の例文を身につける。",
      "furigana": "飾り付ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 飾り付ける."
    }
  },
  {
    "id": "mimi-n3-02-100",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 100,
    "word": "片付ける",
    "reading": "片付ける（よみ）",
    "pitchAccent": "片付ける",
    "hanViet": "ĐỘNG TỪ",
    "meaning": "Động từ N3 trọng tâm (#220): 片付ける",
    "exampleSentence": {
      "japanese": "片付けるを使った自然な日本語の例文を身につける。",
      "furigana": "片付ける を つかった しぜんな にほんご の れいぶん を みにつける。",
      "vietnamese": "Học câu ví dụ tiếng Nhật tự nhiên sử dụng động từ 片付ける."
    }
  },
  {
    "id": "mimi-n3-03-001",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 1,
    "word": "連用_221",
    "reading": "連用よみ221",
    "pitchAccent": "連用[221]",
    "hanViet": "HÁN TỰ 221",
    "meaning": "Thuật ngữ Mimikara N3 số 221 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第1番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 221 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-002",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 2,
    "word": "連用_222",
    "reading": "連用よみ222",
    "pitchAccent": "連用[222]",
    "hanViet": "HÁN TỰ 222",
    "meaning": "Thuật ngữ Mimikara N3 số 222 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第2番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 222 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-003",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 3,
    "word": "連用_223",
    "reading": "連用よみ223",
    "pitchAccent": "連用[223]",
    "hanViet": "HÁN TỰ 223",
    "meaning": "Thuật ngữ Mimikara N3 số 223 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第3番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 223 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-004",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 4,
    "word": "連用_224",
    "reading": "連用よみ224",
    "pitchAccent": "連用[224]",
    "hanViet": "HÁN TỰ 224",
    "meaning": "Thuật ngữ Mimikara N3 số 224 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第4番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 224 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-005",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 5,
    "word": "連用_225",
    "reading": "連用よみ225",
    "pitchAccent": "連用[225]",
    "hanViet": "HÁN TỰ 225",
    "meaning": "Thuật ngữ Mimikara N3 số 225 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第5番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 225 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-006",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 6,
    "word": "連用_226",
    "reading": "連用よみ226",
    "pitchAccent": "連用[226]",
    "hanViet": "HÁN TỰ 226",
    "meaning": "Thuật ngữ Mimikara N3 số 226 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第6番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 226 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-007",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 7,
    "word": "連用_227",
    "reading": "連用よみ227",
    "pitchAccent": "連用[227]",
    "hanViet": "HÁN TỰ 227",
    "meaning": "Thuật ngữ Mimikara N3 số 227 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第7番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 227 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-008",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 8,
    "word": "連用_228",
    "reading": "連用よみ228",
    "pitchAccent": "連用[228]",
    "hanViet": "HÁN TỰ 228",
    "meaning": "Thuật ngữ Mimikara N3 số 228 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第8番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 228 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-009",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 9,
    "word": "連用_229",
    "reading": "連用よみ229",
    "pitchAccent": "連用[229]",
    "hanViet": "HÁN TỰ 229",
    "meaning": "Thuật ngữ Mimikara N3 số 229 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第9番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 229 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-010",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 10,
    "word": "連用_230",
    "reading": "連用よみ230",
    "pitchAccent": "連用[230]",
    "hanViet": "HÁN TỰ 230",
    "meaning": "Thuật ngữ Mimikara N3 số 230 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第10番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 230 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-011",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 11,
    "word": "連用_231",
    "reading": "連用よみ231",
    "pitchAccent": "連用[231]",
    "hanViet": "HÁN TỰ 231",
    "meaning": "Thuật ngữ Mimikara N3 số 231 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第11番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 231 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-012",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 12,
    "word": "連用_232",
    "reading": "連用よみ232",
    "pitchAccent": "連用[232]",
    "hanViet": "HÁN TỰ 232",
    "meaning": "Thuật ngữ Mimikara N3 số 232 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第12番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 232 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-013",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 13,
    "word": "連用_233",
    "reading": "連用よみ233",
    "pitchAccent": "連用[233]",
    "hanViet": "HÁN TỰ 233",
    "meaning": "Thuật ngữ Mimikara N3 số 233 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第13番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 233 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-014",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 14,
    "word": "連用_234",
    "reading": "連用よみ234",
    "pitchAccent": "連用[234]",
    "hanViet": "HÁN TỰ 234",
    "meaning": "Thuật ngữ Mimikara N3 số 234 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第14番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 234 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-015",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 15,
    "word": "連用_235",
    "reading": "連用よみ235",
    "pitchAccent": "連用[235]",
    "hanViet": "HÁN TỰ 235",
    "meaning": "Thuật ngữ Mimikara N3 số 235 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第15番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 235 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-016",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 16,
    "word": "連用_236",
    "reading": "連用よみ236",
    "pitchAccent": "連用[236]",
    "hanViet": "HÁN TỰ 236",
    "meaning": "Thuật ngữ Mimikara N3 số 236 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第16番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 236 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-017",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 17,
    "word": "連用_237",
    "reading": "連用よみ237",
    "pitchAccent": "連用[237]",
    "hanViet": "HÁN TỰ 237",
    "meaning": "Thuật ngữ Mimikara N3 số 237 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第17番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 237 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-018",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 18,
    "word": "連用_238",
    "reading": "連用よみ238",
    "pitchAccent": "連用[238]",
    "hanViet": "HÁN TỰ 238",
    "meaning": "Thuật ngữ Mimikara N3 số 238 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第18番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 238 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-019",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 19,
    "word": "連用_239",
    "reading": "連用よみ239",
    "pitchAccent": "連用[239]",
    "hanViet": "HÁN TỰ 239",
    "meaning": "Thuật ngữ Mimikara N3 số 239 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第19番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 239 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-020",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 20,
    "word": "連用_240",
    "reading": "連用よみ240",
    "pitchAccent": "連用[240]",
    "hanViet": "HÁN TỰ 240",
    "meaning": "Thuật ngữ Mimikara N3 số 240 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第20番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 240 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-021",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 21,
    "word": "連用_241",
    "reading": "連用よみ241",
    "pitchAccent": "連用[241]",
    "hanViet": "HÁN TỰ 241",
    "meaning": "Thuật ngữ Mimikara N3 số 241 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第21番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 241 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-022",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 22,
    "word": "連用_242",
    "reading": "連用よみ242",
    "pitchAccent": "連用[242]",
    "hanViet": "HÁN TỰ 242",
    "meaning": "Thuật ngữ Mimikara N3 số 242 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第22番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 242 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-023",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 23,
    "word": "連用_243",
    "reading": "連用よみ243",
    "pitchAccent": "連用[243]",
    "hanViet": "HÁN TỰ 243",
    "meaning": "Thuật ngữ Mimikara N3 số 243 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第23番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 243 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-024",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 24,
    "word": "連用_244",
    "reading": "連用よみ244",
    "pitchAccent": "連用[244]",
    "hanViet": "HÁN TỰ 244",
    "meaning": "Thuật ngữ Mimikara N3 số 244 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第24番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 244 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-025",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 25,
    "word": "連用_245",
    "reading": "連用よみ245",
    "pitchAccent": "連用[245]",
    "hanViet": "HÁN TỰ 245",
    "meaning": "Thuật ngữ Mimikara N3 số 245 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第25番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 245 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-026",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 26,
    "word": "連用_246",
    "reading": "連用よみ246",
    "pitchAccent": "連用[246]",
    "hanViet": "HÁN TỰ 246",
    "meaning": "Thuật ngữ Mimikara N3 số 246 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第26番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 246 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-027",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 27,
    "word": "連用_247",
    "reading": "連用よみ247",
    "pitchAccent": "連用[247]",
    "hanViet": "HÁN TỰ 247",
    "meaning": "Thuật ngữ Mimikara N3 số 247 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第27番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 247 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-028",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 28,
    "word": "連用_248",
    "reading": "連用よみ248",
    "pitchAccent": "連用[248]",
    "hanViet": "HÁN TỰ 248",
    "meaning": "Thuật ngữ Mimikara N3 số 248 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第28番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 248 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-029",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 29,
    "word": "連用_249",
    "reading": "連用よみ249",
    "pitchAccent": "連用[249]",
    "hanViet": "HÁN TỰ 249",
    "meaning": "Thuật ngữ Mimikara N3 số 249 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第29番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 249 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-030",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 30,
    "word": "連用_250",
    "reading": "連用よみ250",
    "pitchAccent": "連用[250]",
    "hanViet": "HÁN TỰ 250",
    "meaning": "Thuật ngữ Mimikara N3 số 250 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第30番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 250 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-031",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 31,
    "word": "連用_251",
    "reading": "連用よみ251",
    "pitchAccent": "連用[251]",
    "hanViet": "HÁN TỰ 251",
    "meaning": "Thuật ngữ Mimikara N3 số 251 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第31番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 251 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-032",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 32,
    "word": "連用_252",
    "reading": "連用よみ252",
    "pitchAccent": "連用[252]",
    "hanViet": "HÁN TỰ 252",
    "meaning": "Thuật ngữ Mimikara N3 số 252 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第32番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 252 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-033",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 33,
    "word": "連用_253",
    "reading": "連用よみ253",
    "pitchAccent": "連用[253]",
    "hanViet": "HÁN TỰ 253",
    "meaning": "Thuật ngữ Mimikara N3 số 253 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第33番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 253 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-034",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 34,
    "word": "連用_254",
    "reading": "連用よみ254",
    "pitchAccent": "連用[254]",
    "hanViet": "HÁN TỰ 254",
    "meaning": "Thuật ngữ Mimikara N3 số 254 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第34番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 254 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-035",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 35,
    "word": "連用_255",
    "reading": "連用よみ255",
    "pitchAccent": "連用[255]",
    "hanViet": "HÁN TỰ 255",
    "meaning": "Thuật ngữ Mimikara N3 số 255 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第35番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 255 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-036",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 36,
    "word": "連用_256",
    "reading": "連用よみ256",
    "pitchAccent": "連用[256]",
    "hanViet": "HÁN TỰ 256",
    "meaning": "Thuật ngữ Mimikara N3 số 256 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第36番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 256 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-037",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 37,
    "word": "連用_257",
    "reading": "連用よみ257",
    "pitchAccent": "連用[257]",
    "hanViet": "HÁN TỰ 257",
    "meaning": "Thuật ngữ Mimikara N3 số 257 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第37番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 257 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-03-038",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 38,
    "word": "連用_258",
    "reading": "連用よみ258",
    "pitchAccent": "連用[258]",
    "hanViet": "HÁN TỰ 258",
    "meaning": "Thuật ngữ Mimikara N3 số 258 thuộc まとめ | 連用名詞",
    "exampleSentence": {
      "japanese": "まとめ | 連用名詞の第38番目の語彙を活用した例文です。",
      "furigana": "まとめ | 連用名詞の だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 258 của まとめ | 連用名詞."
    }
  },
  {
    "id": "mimi-n3-04-001",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 1,
    "word": "イ形容詞_259",
    "reading": "イ形容詞よみ259",
    "pitchAccent": "イ形容詞[259]",
    "hanViet": "HÁN TỰ 259",
    "meaning": "Thuật ngữ Mimikara N3 số 259 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 259 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-002",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 2,
    "word": "イ形容詞_260",
    "reading": "イ形容詞よみ260",
    "pitchAccent": "イ形容詞[260]",
    "hanViet": "HÁN TỰ 260",
    "meaning": "Thuật ngữ Mimikara N3 số 260 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 260 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-003",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 3,
    "word": "イ形容詞_261",
    "reading": "イ形容詞よみ261",
    "pitchAccent": "イ形容詞[261]",
    "hanViet": "HÁN TỰ 261",
    "meaning": "Thuật ngữ Mimikara N3 số 261 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 261 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-004",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 4,
    "word": "イ形容詞_262",
    "reading": "イ形容詞よみ262",
    "pitchAccent": "イ形容詞[262]",
    "hanViet": "HÁN TỰ 262",
    "meaning": "Thuật ngữ Mimikara N3 số 262 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 262 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-005",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 5,
    "word": "イ形容詞_263",
    "reading": "イ形容詞よみ263",
    "pitchAccent": "イ形容詞[263]",
    "hanViet": "HÁN TỰ 263",
    "meaning": "Thuật ngữ Mimikara N3 số 263 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 263 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-006",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 6,
    "word": "イ形容詞_264",
    "reading": "イ形容詞よみ264",
    "pitchAccent": "イ形容詞[264]",
    "hanViet": "HÁN TỰ 264",
    "meaning": "Thuật ngữ Mimikara N3 số 264 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 264 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-007",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 7,
    "word": "イ形容詞_265",
    "reading": "イ形容詞よみ265",
    "pitchAccent": "イ形容詞[265]",
    "hanViet": "HÁN TỰ 265",
    "meaning": "Thuật ngữ Mimikara N3 số 265 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 265 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-008",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 8,
    "word": "イ形容詞_266",
    "reading": "イ形容詞よみ266",
    "pitchAccent": "イ形容詞[266]",
    "hanViet": "HÁN TỰ 266",
    "meaning": "Thuật ngữ Mimikara N3 số 266 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 266 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-009",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 9,
    "word": "イ形容詞_267",
    "reading": "イ形容詞よみ267",
    "pitchAccent": "イ形容詞[267]",
    "hanViet": "HÁN TỰ 267",
    "meaning": "Thuật ngữ Mimikara N3 số 267 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 267 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-010",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 10,
    "word": "イ形容詞_268",
    "reading": "イ形容詞よみ268",
    "pitchAccent": "イ形容詞[268]",
    "hanViet": "HÁN TỰ 268",
    "meaning": "Thuật ngữ Mimikara N3 số 268 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 268 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-011",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 11,
    "word": "イ形容詞_269",
    "reading": "イ形容詞よみ269",
    "pitchAccent": "イ形容詞[269]",
    "hanViet": "HÁN TỰ 269",
    "meaning": "Thuật ngữ Mimikara N3 số 269 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 269 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-012",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 12,
    "word": "イ形容詞_270",
    "reading": "イ形容詞よみ270",
    "pitchAccent": "イ形容詞[270]",
    "hanViet": "HÁN TỰ 270",
    "meaning": "Thuật ngữ Mimikara N3 số 270 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 270 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-013",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 13,
    "word": "イ形容詞_271",
    "reading": "イ形容詞よみ271",
    "pitchAccent": "イ形容詞[271]",
    "hanViet": "HÁN TỰ 271",
    "meaning": "Thuật ngữ Mimikara N3 số 271 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 271 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-014",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 14,
    "word": "イ形容詞_272",
    "reading": "イ形容詞よみ272",
    "pitchAccent": "イ形容詞[272]",
    "hanViet": "HÁN TỰ 272",
    "meaning": "Thuật ngữ Mimikara N3 số 272 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 272 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-015",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 15,
    "word": "イ形容詞_273",
    "reading": "イ形容詞よみ273",
    "pitchAccent": "イ形容詞[273]",
    "hanViet": "HÁN TỰ 273",
    "meaning": "Thuật ngữ Mimikara N3 số 273 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 273 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-016",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 16,
    "word": "イ形容詞_274",
    "reading": "イ形容詞よみ274",
    "pitchAccent": "イ形容詞[274]",
    "hanViet": "HÁN TỰ 274",
    "meaning": "Thuật ngữ Mimikara N3 số 274 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 274 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-017",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 17,
    "word": "イ形容詞_275",
    "reading": "イ形容詞よみ275",
    "pitchAccent": "イ形容詞[275]",
    "hanViet": "HÁN TỰ 275",
    "meaning": "Thuật ngữ Mimikara N3 số 275 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 275 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-018",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 18,
    "word": "イ形容詞_276",
    "reading": "イ形容詞よみ276",
    "pitchAccent": "イ形容詞[276]",
    "hanViet": "HÁN TỰ 276",
    "meaning": "Thuật ngữ Mimikara N3 số 276 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 276 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-019",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 19,
    "word": "イ形容詞_277",
    "reading": "イ形容詞よみ277",
    "pitchAccent": "イ形容詞[277]",
    "hanViet": "HÁN TỰ 277",
    "meaning": "Thuật ngữ Mimikara N3 số 277 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 277 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-020",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 20,
    "word": "イ形容詞_278",
    "reading": "イ形容詞よみ278",
    "pitchAccent": "イ形容詞[278]",
    "hanViet": "HÁN TỰ 278",
    "meaning": "Thuật ngữ Mimikara N3 số 278 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 278 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-021",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 21,
    "word": "イ形容詞_279",
    "reading": "イ形容詞よみ279",
    "pitchAccent": "イ形容詞[279]",
    "hanViet": "HÁN TỰ 279",
    "meaning": "Thuật ngữ Mimikara N3 số 279 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 279 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-022",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 22,
    "word": "イ形容詞_280",
    "reading": "イ形容詞よみ280",
    "pitchAccent": "イ形容詞[280]",
    "hanViet": "HÁN TỰ 280",
    "meaning": "Thuật ngữ Mimikara N3 số 280 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 280 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-023",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 23,
    "word": "イ形容詞_281",
    "reading": "イ形容詞よみ281",
    "pitchAccent": "イ形容詞[281]",
    "hanViet": "HÁN TỰ 281",
    "meaning": "Thuật ngữ Mimikara N3 số 281 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 281 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-024",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 24,
    "word": "イ形容詞_282",
    "reading": "イ形容詞よみ282",
    "pitchAccent": "イ形容詞[282]",
    "hanViet": "HÁN TỰ 282",
    "meaning": "Thuật ngữ Mimikara N3 số 282 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 282 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-025",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 25,
    "word": "イ形容詞_283",
    "reading": "イ形容詞よみ283",
    "pitchAccent": "イ形容詞[283]",
    "hanViet": "HÁN TỰ 283",
    "meaning": "Thuật ngữ Mimikara N3 số 283 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 283 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-026",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 26,
    "word": "イ形容詞_284",
    "reading": "イ形容詞よみ284",
    "pitchAccent": "イ形容詞[284]",
    "hanViet": "HÁN TỰ 284",
    "meaning": "Thuật ngữ Mimikara N3 số 284 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 284 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-027",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 27,
    "word": "イ形容詞_285",
    "reading": "イ形容詞よみ285",
    "pitchAccent": "イ形容詞[285]",
    "hanViet": "HÁN TỰ 285",
    "meaning": "Thuật ngữ Mimikara N3 số 285 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 285 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-028",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 28,
    "word": "イ形容詞_286",
    "reading": "イ形容詞よみ286",
    "pitchAccent": "イ形容詞[286]",
    "hanViet": "HÁN TỰ 286",
    "meaning": "Thuật ngữ Mimikara N3 số 286 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 286 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-029",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 29,
    "word": "イ形容詞_287",
    "reading": "イ形容詞よみ287",
    "pitchAccent": "イ形容詞[287]",
    "hanViet": "HÁN TỰ 287",
    "meaning": "Thuật ngữ Mimikara N3 số 287 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 287 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-030",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 30,
    "word": "イ形容詞_288",
    "reading": "イ形容詞よみ288",
    "pitchAccent": "イ形容詞[288]",
    "hanViet": "HÁN TỰ 288",
    "meaning": "Thuật ngữ Mimikara N3 số 288 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 288 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-031",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 31,
    "word": "イ形容詞_289",
    "reading": "イ形容詞よみ289",
    "pitchAccent": "イ形容詞[289]",
    "hanViet": "HÁN TỰ 289",
    "meaning": "Thuật ngữ Mimikara N3 số 289 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 289 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-032",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 32,
    "word": "イ形容詞_290",
    "reading": "イ形容詞よみ290",
    "pitchAccent": "イ形容詞[290]",
    "hanViet": "HÁN TỰ 290",
    "meaning": "Thuật ngữ Mimikara N3 số 290 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 290 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-033",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 33,
    "word": "イ形容詞_291",
    "reading": "イ形容詞よみ291",
    "pitchAccent": "イ形容詞[291]",
    "hanViet": "HÁN TỰ 291",
    "meaning": "Thuật ngữ Mimikara N3 số 291 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 291 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-034",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 34,
    "word": "イ形容詞_292",
    "reading": "イ形容詞よみ292",
    "pitchAccent": "イ形容詞[292]",
    "hanViet": "HÁN TỰ 292",
    "meaning": "Thuật ngữ Mimikara N3 số 292 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 292 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-035",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 35,
    "word": "イ形容詞_293",
    "reading": "イ形容詞よみ293",
    "pitchAccent": "イ形容詞[293]",
    "hanViet": "HÁN TỰ 293",
    "meaning": "Thuật ngữ Mimikara N3 số 293 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 293 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-036",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 36,
    "word": "イ形容詞_294",
    "reading": "イ形容詞よみ294",
    "pitchAccent": "イ形容詞[294]",
    "hanViet": "HÁN TỰ 294",
    "meaning": "Thuật ngữ Mimikara N3 số 294 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 294 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-037",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 37,
    "word": "イ形容詞_295",
    "reading": "イ形容詞よみ295",
    "pitchAccent": "イ形容詞[295]",
    "hanViet": "HÁN TỰ 295",
    "meaning": "Thuật ngữ Mimikara N3 số 295 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 295 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-038",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 38,
    "word": "イ形容詞_296",
    "reading": "イ形容詞よみ296",
    "pitchAccent": "イ形容詞[296]",
    "hanViet": "HÁN TỰ 296",
    "meaning": "Thuật ngữ Mimikara N3 số 296 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 296 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-039",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 39,
    "word": "イ形容詞_297",
    "reading": "イ形容詞よみ297",
    "pitchAccent": "イ形容詞[297]",
    "hanViet": "HÁN TỰ 297",
    "meaning": "Thuật ngữ Mimikara N3 số 297 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 297 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-04-040",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 40,
    "word": "イ形容詞_298",
    "reading": "イ形容詞よみ298",
    "pitchAccent": "イ形容詞[298]",
    "hanViet": "HÁN TỰ 298",
    "meaning": "Thuật ngữ Mimikara N3 số 298 thuộc Unit 3 | 形容詞 A",
    "exampleSentence": {
      "japanese": "Unit 3 | 形容詞 Aの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 3 | 形容詞 Aの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 298 của Unit 3 | 形容詞 A."
    }
  },
  {
    "id": "mimi-n3-05-001",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 1,
    "word": "派生_299",
    "reading": "派生よみ299",
    "pitchAccent": "派生[299]",
    "hanViet": "HÁN TỰ 299",
    "meaning": "Thuật ngữ Mimikara N3 số 299 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第1番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 299 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-002",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 2,
    "word": "派生_300",
    "reading": "派生よみ300",
    "pitchAccent": "派生[300]",
    "hanViet": "HÁN TỰ 300",
    "meaning": "Thuật ngữ Mimikara N3 số 300 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第2番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 300 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-003",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 3,
    "word": "派生_301",
    "reading": "派生よみ301",
    "pitchAccent": "派生[301]",
    "hanViet": "HÁN TỰ 301",
    "meaning": "Thuật ngữ Mimikara N3 số 301 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第3番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 301 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-004",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 4,
    "word": "派生_302",
    "reading": "派生よみ302",
    "pitchAccent": "派生[302]",
    "hanViet": "HÁN TỰ 302",
    "meaning": "Thuật ngữ Mimikara N3 số 302 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第4番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 302 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-005",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 5,
    "word": "派生_303",
    "reading": "派生よみ303",
    "pitchAccent": "派生[303]",
    "hanViet": "HÁN TỰ 303",
    "meaning": "Thuật ngữ Mimikara N3 số 303 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第5番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 303 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-006",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 6,
    "word": "派生_304",
    "reading": "派生よみ304",
    "pitchAccent": "派生[304]",
    "hanViet": "HÁN TỰ 304",
    "meaning": "Thuật ngữ Mimikara N3 số 304 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第6番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 304 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-007",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 7,
    "word": "派生_305",
    "reading": "派生よみ305",
    "pitchAccent": "派生[305]",
    "hanViet": "HÁN TỰ 305",
    "meaning": "Thuật ngữ Mimikara N3 số 305 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第7番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 305 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-008",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 8,
    "word": "派生_306",
    "reading": "派生よみ306",
    "pitchAccent": "派生[306]",
    "hanViet": "HÁN TỰ 306",
    "meaning": "Thuật ngữ Mimikara N3 số 306 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第8番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 306 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-009",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 9,
    "word": "派生_307",
    "reading": "派生よみ307",
    "pitchAccent": "派生[307]",
    "hanViet": "HÁN TỰ 307",
    "meaning": "Thuật ngữ Mimikara N3 số 307 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第9番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 307 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-010",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 10,
    "word": "派生_308",
    "reading": "派生よみ308",
    "pitchAccent": "派生[308]",
    "hanViet": "HÁN TỰ 308",
    "meaning": "Thuật ngữ Mimikara N3 số 308 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第10番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 308 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-011",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 11,
    "word": "派生_309",
    "reading": "派生よみ309",
    "pitchAccent": "派生[309]",
    "hanViet": "HÁN TỰ 309",
    "meaning": "Thuật ngữ Mimikara N3 số 309 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第11番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 309 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-05-012",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 12,
    "word": "派生_310",
    "reading": "派生よみ310",
    "pitchAccent": "派生[310]",
    "hanViet": "HÁN TỰ 310",
    "meaning": "Thuật ngữ Mimikara N3 số 310 thuộc まとめ | イ形容詞 + まる／める",
    "exampleSentence": {
      "japanese": "まとめ | イ形容詞 + まる／めるの第12番目の語彙を活用した例文です。",
      "furigana": "まとめ | イ形容詞 + まる／めるの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 310 của まとめ | イ形容詞 + まる／める."
    }
  },
  {
    "id": "mimi-n3-06-001",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 1,
    "word": "名詞_311",
    "reading": "名詞よみ311",
    "pitchAccent": "名詞[311]",
    "hanViet": "HÁN TỰ 311",
    "meaning": "Thuật ngữ Mimikara N3 số 311 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 311 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-002",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 2,
    "word": "名詞_312",
    "reading": "名詞よみ312",
    "pitchAccent": "名詞[312]",
    "hanViet": "HÁN TỰ 312",
    "meaning": "Thuật ngữ Mimikara N3 số 312 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 312 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-003",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 3,
    "word": "名詞_313",
    "reading": "名詞よみ313",
    "pitchAccent": "名詞[313]",
    "hanViet": "HÁN TỰ 313",
    "meaning": "Thuật ngữ Mimikara N3 số 313 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 313 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-004",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 4,
    "word": "名詞_314",
    "reading": "名詞よみ314",
    "pitchAccent": "名詞[314]",
    "hanViet": "HÁN TỰ 314",
    "meaning": "Thuật ngữ Mimikara N3 số 314 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 314 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-005",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 5,
    "word": "名詞_315",
    "reading": "名詞よみ315",
    "pitchAccent": "名詞[315]",
    "hanViet": "HÁN TỰ 315",
    "meaning": "Thuật ngữ Mimikara N3 số 315 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 315 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-006",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 6,
    "word": "名詞_316",
    "reading": "名詞よみ316",
    "pitchAccent": "名詞[316]",
    "hanViet": "HÁN TỰ 316",
    "meaning": "Thuật ngữ Mimikara N3 số 316 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 316 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-007",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 7,
    "word": "名詞_317",
    "reading": "名詞よみ317",
    "pitchAccent": "名詞[317]",
    "hanViet": "HÁN TỰ 317",
    "meaning": "Thuật ngữ Mimikara N3 số 317 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 317 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-008",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 8,
    "word": "名詞_318",
    "reading": "名詞よみ318",
    "pitchAccent": "名詞[318]",
    "hanViet": "HÁN TỰ 318",
    "meaning": "Thuật ngữ Mimikara N3 số 318 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 318 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-009",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 9,
    "word": "名詞_319",
    "reading": "名詞よみ319",
    "pitchAccent": "名詞[319]",
    "hanViet": "HÁN TỰ 319",
    "meaning": "Thuật ngữ Mimikara N3 số 319 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 319 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-010",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 10,
    "word": "名詞_320",
    "reading": "名詞よみ320",
    "pitchAccent": "名詞[320]",
    "hanViet": "HÁN TỰ 320",
    "meaning": "Thuật ngữ Mimikara N3 số 320 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 320 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-011",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 11,
    "word": "名詞_321",
    "reading": "名詞よみ321",
    "pitchAccent": "名詞[321]",
    "hanViet": "HÁN TỰ 321",
    "meaning": "Thuật ngữ Mimikara N3 số 321 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 321 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-012",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 12,
    "word": "名詞_322",
    "reading": "名詞よみ322",
    "pitchAccent": "名詞[322]",
    "hanViet": "HÁN TỰ 322",
    "meaning": "Thuật ngữ Mimikara N3 số 322 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 322 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-013",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 13,
    "word": "名詞_323",
    "reading": "名詞よみ323",
    "pitchAccent": "名詞[323]",
    "hanViet": "HÁN TỰ 323",
    "meaning": "Thuật ngữ Mimikara N3 số 323 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 323 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-014",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 14,
    "word": "名詞_324",
    "reading": "名詞よみ324",
    "pitchAccent": "名詞[324]",
    "hanViet": "HÁN TỰ 324",
    "meaning": "Thuật ngữ Mimikara N3 số 324 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 324 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-015",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 15,
    "word": "名詞_325",
    "reading": "名詞よみ325",
    "pitchAccent": "名詞[325]",
    "hanViet": "HÁN TỰ 325",
    "meaning": "Thuật ngữ Mimikara N3 số 325 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 325 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-016",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 16,
    "word": "名詞_326",
    "reading": "名詞よみ326",
    "pitchAccent": "名詞[326]",
    "hanViet": "HÁN TỰ 326",
    "meaning": "Thuật ngữ Mimikara N3 số 326 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 326 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-017",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 17,
    "word": "名詞_327",
    "reading": "名詞よみ327",
    "pitchAccent": "名詞[327]",
    "hanViet": "HÁN TỰ 327",
    "meaning": "Thuật ngữ Mimikara N3 số 327 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 327 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-018",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 18,
    "word": "名詞_328",
    "reading": "名詞よみ328",
    "pitchAccent": "名詞[328]",
    "hanViet": "HÁN TỰ 328",
    "meaning": "Thuật ngữ Mimikara N3 số 328 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 328 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-019",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 19,
    "word": "名詞_329",
    "reading": "名詞よみ329",
    "pitchAccent": "名詞[329]",
    "hanViet": "HÁN TỰ 329",
    "meaning": "Thuật ngữ Mimikara N3 số 329 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 329 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-020",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 20,
    "word": "名詞_330",
    "reading": "名詞よみ330",
    "pitchAccent": "名詞[330]",
    "hanViet": "HÁN TỰ 330",
    "meaning": "Thuật ngữ Mimikara N3 số 330 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 330 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-021",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 21,
    "word": "名詞_331",
    "reading": "名詞よみ331",
    "pitchAccent": "名詞[331]",
    "hanViet": "HÁN TỰ 331",
    "meaning": "Thuật ngữ Mimikara N3 số 331 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 331 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-022",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 22,
    "word": "名詞_332",
    "reading": "名詞よみ332",
    "pitchAccent": "名詞[332]",
    "hanViet": "HÁN TỰ 332",
    "meaning": "Thuật ngữ Mimikara N3 số 332 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 332 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-023",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 23,
    "word": "名詞_333",
    "reading": "名詞よみ333",
    "pitchAccent": "名詞[333]",
    "hanViet": "HÁN TỰ 333",
    "meaning": "Thuật ngữ Mimikara N3 số 333 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 333 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-024",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 24,
    "word": "名詞_334",
    "reading": "名詞よみ334",
    "pitchAccent": "名詞[334]",
    "hanViet": "HÁN TỰ 334",
    "meaning": "Thuật ngữ Mimikara N3 số 334 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 334 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-025",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 25,
    "word": "名詞_335",
    "reading": "名詞よみ335",
    "pitchAccent": "名詞[335]",
    "hanViet": "HÁN TỰ 335",
    "meaning": "Thuật ngữ Mimikara N3 số 335 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 335 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-026",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 26,
    "word": "名詞_336",
    "reading": "名詞よみ336",
    "pitchAccent": "名詞[336]",
    "hanViet": "HÁN TỰ 336",
    "meaning": "Thuật ngữ Mimikara N3 số 336 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 336 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-027",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 27,
    "word": "名詞_337",
    "reading": "名詞よみ337",
    "pitchAccent": "名詞[337]",
    "hanViet": "HÁN TỰ 337",
    "meaning": "Thuật ngữ Mimikara N3 số 337 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 337 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-028",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 28,
    "word": "名詞_338",
    "reading": "名詞よみ338",
    "pitchAccent": "名詞[338]",
    "hanViet": "HÁN TỰ 338",
    "meaning": "Thuật ngữ Mimikara N3 số 338 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 338 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-029",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 29,
    "word": "名詞_339",
    "reading": "名詞よみ339",
    "pitchAccent": "名詞[339]",
    "hanViet": "HÁN TỰ 339",
    "meaning": "Thuật ngữ Mimikara N3 số 339 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 339 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-030",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 30,
    "word": "名詞_340",
    "reading": "名詞よみ340",
    "pitchAccent": "名詞[340]",
    "hanViet": "HÁN TỰ 340",
    "meaning": "Thuật ngữ Mimikara N3 số 340 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 340 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-031",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 31,
    "word": "名詞_341",
    "reading": "名詞よみ341",
    "pitchAccent": "名詞[341]",
    "hanViet": "HÁN TỰ 341",
    "meaning": "Thuật ngữ Mimikara N3 số 341 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 341 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-032",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 32,
    "word": "名詞_342",
    "reading": "名詞よみ342",
    "pitchAccent": "名詞[342]",
    "hanViet": "HÁN TỰ 342",
    "meaning": "Thuật ngữ Mimikara N3 số 342 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 342 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-033",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 33,
    "word": "名詞_343",
    "reading": "名詞よみ343",
    "pitchAccent": "名詞[343]",
    "hanViet": "HÁN TỰ 343",
    "meaning": "Thuật ngữ Mimikara N3 số 343 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 343 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-034",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 34,
    "word": "名詞_344",
    "reading": "名詞よみ344",
    "pitchAccent": "名詞[344]",
    "hanViet": "HÁN TỰ 344",
    "meaning": "Thuật ngữ Mimikara N3 số 344 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 344 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-035",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 35,
    "word": "名詞_345",
    "reading": "名詞よみ345",
    "pitchAccent": "名詞[345]",
    "hanViet": "HÁN TỰ 345",
    "meaning": "Thuật ngữ Mimikara N3 số 345 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 345 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-036",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 36,
    "word": "名詞_346",
    "reading": "名詞よみ346",
    "pitchAccent": "名詞[346]",
    "hanViet": "HÁN TỰ 346",
    "meaning": "Thuật ngữ Mimikara N3 số 346 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 346 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-037",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 37,
    "word": "名詞_347",
    "reading": "名詞よみ347",
    "pitchAccent": "名詞[347]",
    "hanViet": "HÁN TỰ 347",
    "meaning": "Thuật ngữ Mimikara N3 số 347 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 347 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-038",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 38,
    "word": "名詞_348",
    "reading": "名詞よみ348",
    "pitchAccent": "名詞[348]",
    "hanViet": "HÁN TỰ 348",
    "meaning": "Thuật ngữ Mimikara N3 số 348 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 348 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-039",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 39,
    "word": "名詞_349",
    "reading": "名詞よみ349",
    "pitchAccent": "名詞[349]",
    "hanViet": "HÁN TỰ 349",
    "meaning": "Thuật ngữ Mimikara N3 số 349 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 349 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-040",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 40,
    "word": "名詞_350",
    "reading": "名詞よみ350",
    "pitchAccent": "名詞[350]",
    "hanViet": "HÁN TỰ 350",
    "meaning": "Thuật ngữ Mimikara N3 số 350 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 350 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-041",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 41,
    "word": "名詞_351",
    "reading": "名詞よみ351",
    "pitchAccent": "名詞[351]",
    "hanViet": "HÁN TỰ 351",
    "meaning": "Thuật ngữ Mimikara N3 số 351 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第41番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい41ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 351 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-042",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 42,
    "word": "名詞_352",
    "reading": "名詞よみ352",
    "pitchAccent": "名詞[352]",
    "hanViet": "HÁN TỰ 352",
    "meaning": "Thuật ngữ Mimikara N3 số 352 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第42番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい42ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 352 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-043",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 43,
    "word": "名詞_353",
    "reading": "名詞よみ353",
    "pitchAccent": "名詞[353]",
    "hanViet": "HÁN TỰ 353",
    "meaning": "Thuật ngữ Mimikara N3 số 353 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第43番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい43ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 353 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-044",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 44,
    "word": "名詞_354",
    "reading": "名詞よみ354",
    "pitchAccent": "名詞[354]",
    "hanViet": "HÁN TỰ 354",
    "meaning": "Thuật ngữ Mimikara N3 số 354 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第44番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい44ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 354 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-045",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 45,
    "word": "名詞_355",
    "reading": "名詞よみ355",
    "pitchAccent": "名詞[355]",
    "hanViet": "HÁN TỰ 355",
    "meaning": "Thuật ngữ Mimikara N3 số 355 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第45番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい45ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 355 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-046",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 46,
    "word": "名詞_356",
    "reading": "名詞よみ356",
    "pitchAccent": "名詞[356]",
    "hanViet": "HÁN TỰ 356",
    "meaning": "Thuật ngữ Mimikara N3 số 356 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第46番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい46ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 356 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-047",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 47,
    "word": "名詞_357",
    "reading": "名詞よみ357",
    "pitchAccent": "名詞[357]",
    "hanViet": "HÁN TỰ 357",
    "meaning": "Thuật ngữ Mimikara N3 số 357 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第47番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい47ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 357 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-048",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 48,
    "word": "名詞_358",
    "reading": "名詞よみ358",
    "pitchAccent": "名詞[358]",
    "hanViet": "HÁN TỰ 358",
    "meaning": "Thuật ngữ Mimikara N3 số 358 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第48番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい48ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 358 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-049",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 49,
    "word": "名詞_359",
    "reading": "名詞よみ359",
    "pitchAccent": "名詞[359]",
    "hanViet": "HÁN TỰ 359",
    "meaning": "Thuật ngữ Mimikara N3 số 359 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第49番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい49ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 359 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-050",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 50,
    "word": "名詞_360",
    "reading": "名詞よみ360",
    "pitchAccent": "名詞[360]",
    "hanViet": "HÁN TỰ 360",
    "meaning": "Thuật ngữ Mimikara N3 số 360 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第50番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい50ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 360 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-051",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 51,
    "word": "名詞_361",
    "reading": "名詞よみ361",
    "pitchAccent": "名詞[361]",
    "hanViet": "HÁN TỰ 361",
    "meaning": "Thuật ngữ Mimikara N3 số 361 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第51番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい51ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 361 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-052",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 52,
    "word": "名詞_362",
    "reading": "名詞よみ362",
    "pitchAccent": "名詞[362]",
    "hanViet": "HÁN TỰ 362",
    "meaning": "Thuật ngữ Mimikara N3 số 362 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第52番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい52ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 362 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-053",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 53,
    "word": "名詞_363",
    "reading": "名詞よみ363",
    "pitchAccent": "名詞[363]",
    "hanViet": "HÁN TỰ 363",
    "meaning": "Thuật ngữ Mimikara N3 số 363 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第53番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい53ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 363 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-054",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 54,
    "word": "名詞_364",
    "reading": "名詞よみ364",
    "pitchAccent": "名詞[364]",
    "hanViet": "HÁN TỰ 364",
    "meaning": "Thuật ngữ Mimikara N3 số 364 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第54番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい54ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 364 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-055",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 55,
    "word": "名詞_365",
    "reading": "名詞よみ365",
    "pitchAccent": "名詞[365]",
    "hanViet": "HÁN TỰ 365",
    "meaning": "Thuật ngữ Mimikara N3 số 365 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第55番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい55ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 365 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-056",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 56,
    "word": "名詞_366",
    "reading": "名詞よみ366",
    "pitchAccent": "名詞[366]",
    "hanViet": "HÁN TỰ 366",
    "meaning": "Thuật ngữ Mimikara N3 số 366 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第56番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい56ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 366 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-057",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 57,
    "word": "名詞_367",
    "reading": "名詞よみ367",
    "pitchAccent": "名詞[367]",
    "hanViet": "HÁN TỰ 367",
    "meaning": "Thuật ngữ Mimikara N3 số 367 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第57番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい57ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 367 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-058",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 58,
    "word": "名詞_368",
    "reading": "名詞よみ368",
    "pitchAccent": "名詞[368]",
    "hanViet": "HÁN TỰ 368",
    "meaning": "Thuật ngữ Mimikara N3 số 368 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第58番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい58ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 368 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-059",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 59,
    "word": "名詞_369",
    "reading": "名詞よみ369",
    "pitchAccent": "名詞[369]",
    "hanViet": "HÁN TỰ 369",
    "meaning": "Thuật ngữ Mimikara N3 số 369 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第59番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい59ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 369 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-060",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 60,
    "word": "名詞_370",
    "reading": "名詞よみ370",
    "pitchAccent": "名詞[370]",
    "hanViet": "HÁN TỰ 370",
    "meaning": "Thuật ngữ Mimikara N3 số 370 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第60番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい60ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 370 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-061",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 61,
    "word": "名詞_371",
    "reading": "名詞よみ371",
    "pitchAccent": "名詞[371]",
    "hanViet": "HÁN TỰ 371",
    "meaning": "Thuật ngữ Mimikara N3 số 371 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第61番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい61ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 371 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-062",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 62,
    "word": "名詞_372",
    "reading": "名詞よみ372",
    "pitchAccent": "名詞[372]",
    "hanViet": "HÁN TỰ 372",
    "meaning": "Thuật ngữ Mimikara N3 số 372 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第62番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい62ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 372 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-063",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 63,
    "word": "名詞_373",
    "reading": "名詞よみ373",
    "pitchAccent": "名詞[373]",
    "hanViet": "HÁN TỰ 373",
    "meaning": "Thuật ngữ Mimikara N3 số 373 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第63番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい63ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 373 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-064",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 64,
    "word": "名詞_374",
    "reading": "名詞よみ374",
    "pitchAccent": "名詞[374]",
    "hanViet": "HÁN TỰ 374",
    "meaning": "Thuật ngữ Mimikara N3 số 374 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第64番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい64ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 374 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-065",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 65,
    "word": "名詞_375",
    "reading": "名詞よみ375",
    "pitchAccent": "名詞[375]",
    "hanViet": "HÁN TỰ 375",
    "meaning": "Thuật ngữ Mimikara N3 số 375 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第65番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい65ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 375 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-066",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 66,
    "word": "名詞_376",
    "reading": "名詞よみ376",
    "pitchAccent": "名詞[376]",
    "hanViet": "HÁN TỰ 376",
    "meaning": "Thuật ngữ Mimikara N3 số 376 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第66番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい66ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 376 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-067",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 67,
    "word": "名詞_377",
    "reading": "名詞よみ377",
    "pitchAccent": "名詞[377]",
    "hanViet": "HÁN TỰ 377",
    "meaning": "Thuật ngữ Mimikara N3 số 377 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第67番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい67ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 377 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-068",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 68,
    "word": "名詞_378",
    "reading": "名詞よみ378",
    "pitchAccent": "名詞[378]",
    "hanViet": "HÁN TỰ 378",
    "meaning": "Thuật ngữ Mimikara N3 số 378 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第68番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい68ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 378 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-069",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 69,
    "word": "名詞_379",
    "reading": "名詞よみ379",
    "pitchAccent": "名詞[379]",
    "hanViet": "HÁN TỰ 379",
    "meaning": "Thuật ngữ Mimikara N3 số 379 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第69番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい69ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 379 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-070",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 70,
    "word": "名詞_380",
    "reading": "名詞よみ380",
    "pitchAccent": "名詞[380]",
    "hanViet": "HÁN TỰ 380",
    "meaning": "Thuật ngữ Mimikara N3 số 380 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第70番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい70ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 380 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-071",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 71,
    "word": "名詞_381",
    "reading": "名詞よみ381",
    "pitchAccent": "名詞[381]",
    "hanViet": "HÁN TỰ 381",
    "meaning": "Thuật ngữ Mimikara N3 số 381 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第71番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい71ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 381 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-072",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 72,
    "word": "名詞_382",
    "reading": "名詞よみ382",
    "pitchAccent": "名詞[382]",
    "hanViet": "HÁN TỰ 382",
    "meaning": "Thuật ngữ Mimikara N3 số 382 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第72番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい72ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 382 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-073",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 73,
    "word": "名詞_383",
    "reading": "名詞よみ383",
    "pitchAccent": "名詞[383]",
    "hanViet": "HÁN TỰ 383",
    "meaning": "Thuật ngữ Mimikara N3 số 383 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第73番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい73ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 383 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-074",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 74,
    "word": "名詞_384",
    "reading": "名詞よみ384",
    "pitchAccent": "名詞[384]",
    "hanViet": "HÁN TỰ 384",
    "meaning": "Thuật ngữ Mimikara N3 số 384 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第74番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい74ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 384 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-075",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 75,
    "word": "名詞_385",
    "reading": "名詞よみ385",
    "pitchAccent": "名詞[385]",
    "hanViet": "HÁN TỰ 385",
    "meaning": "Thuật ngữ Mimikara N3 số 385 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第75番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい75ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 385 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-076",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 76,
    "word": "名詞_386",
    "reading": "名詞よみ386",
    "pitchAccent": "名詞[386]",
    "hanViet": "HÁN TỰ 386",
    "meaning": "Thuật ngữ Mimikara N3 số 386 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第76番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい76ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 386 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-077",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 77,
    "word": "名詞_387",
    "reading": "名詞よみ387",
    "pitchAccent": "名詞[387]",
    "hanViet": "HÁN TỰ 387",
    "meaning": "Thuật ngữ Mimikara N3 số 387 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第77番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい77ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 387 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-078",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 78,
    "word": "名詞_388",
    "reading": "名詞よみ388",
    "pitchAccent": "名詞[388]",
    "hanViet": "HÁN TỰ 388",
    "meaning": "Thuật ngữ Mimikara N3 số 388 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第78番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい78ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 388 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-079",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 79,
    "word": "名詞_389",
    "reading": "名詞よみ389",
    "pitchAccent": "名詞[389]",
    "hanViet": "HÁN TỰ 389",
    "meaning": "Thuật ngữ Mimikara N3 số 389 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第79番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい79ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 389 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-080",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 80,
    "word": "名詞_390",
    "reading": "名詞よみ390",
    "pitchAccent": "名詞[390]",
    "hanViet": "HÁN TỰ 390",
    "meaning": "Thuật ngữ Mimikara N3 số 390 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第80番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい80ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 390 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-081",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 81,
    "word": "名詞_391",
    "reading": "名詞よみ391",
    "pitchAccent": "名詞[391]",
    "hanViet": "HÁN TỰ 391",
    "meaning": "Thuật ngữ Mimikara N3 số 391 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第81番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい81ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 391 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-082",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 82,
    "word": "名詞_392",
    "reading": "名詞よみ392",
    "pitchAccent": "名詞[392]",
    "hanViet": "HÁN TỰ 392",
    "meaning": "Thuật ngữ Mimikara N3 số 392 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第82番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい82ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 392 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-083",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 83,
    "word": "名詞_393",
    "reading": "名詞よみ393",
    "pitchAccent": "名詞[393]",
    "hanViet": "HÁN TỰ 393",
    "meaning": "Thuật ngữ Mimikara N3 số 393 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第83番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい83ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 393 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-084",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 84,
    "word": "名詞_394",
    "reading": "名詞よみ394",
    "pitchAccent": "名詞[394]",
    "hanViet": "HÁN TỰ 394",
    "meaning": "Thuật ngữ Mimikara N3 số 394 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第84番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい84ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 394 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-085",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 85,
    "word": "名詞_395",
    "reading": "名詞よみ395",
    "pitchAccent": "名詞[395]",
    "hanViet": "HÁN TỰ 395",
    "meaning": "Thuật ngữ Mimikara N3 số 395 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第85番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい85ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 395 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-086",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 86,
    "word": "名詞_396",
    "reading": "名詞よみ396",
    "pitchAccent": "名詞[396]",
    "hanViet": "HÁN TỰ 396",
    "meaning": "Thuật ngữ Mimikara N3 số 396 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第86番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい86ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 396 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-087",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 87,
    "word": "名詞_397",
    "reading": "名詞よみ397",
    "pitchAccent": "名詞[397]",
    "hanViet": "HÁN TỰ 397",
    "meaning": "Thuật ngữ Mimikara N3 số 397 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第87番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい87ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 397 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-088",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 88,
    "word": "名詞_398",
    "reading": "名詞よみ398",
    "pitchAccent": "名詞[398]",
    "hanViet": "HÁN TỰ 398",
    "meaning": "Thuật ngữ Mimikara N3 số 398 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第88番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい88ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 398 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-089",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 89,
    "word": "名詞_399",
    "reading": "名詞よみ399",
    "pitchAccent": "名詞[399]",
    "hanViet": "HÁN TỰ 399",
    "meaning": "Thuật ngữ Mimikara N3 số 399 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第89番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい89ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 399 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-090",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 90,
    "word": "名詞_400",
    "reading": "名詞よみ400",
    "pitchAccent": "名詞[400]",
    "hanViet": "HÁN TỰ 400",
    "meaning": "Thuật ngữ Mimikara N3 số 400 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第90番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい90ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 400 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-091",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 91,
    "word": "名詞_401",
    "reading": "名詞よみ401",
    "pitchAccent": "名詞[401]",
    "hanViet": "HÁN TỰ 401",
    "meaning": "Thuật ngữ Mimikara N3 số 401 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第91番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい91ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 401 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-092",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 92,
    "word": "名詞_402",
    "reading": "名詞よみ402",
    "pitchAccent": "名詞[402]",
    "hanViet": "HÁN TỰ 402",
    "meaning": "Thuật ngữ Mimikara N3 số 402 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第92番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい92ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 402 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-093",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 93,
    "word": "名詞_403",
    "reading": "名詞よみ403",
    "pitchAccent": "名詞[403]",
    "hanViet": "HÁN TỰ 403",
    "meaning": "Thuật ngữ Mimikara N3 số 403 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第93番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい93ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 403 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-094",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 94,
    "word": "名詞_404",
    "reading": "名詞よみ404",
    "pitchAccent": "名詞[404]",
    "hanViet": "HÁN TỰ 404",
    "meaning": "Thuật ngữ Mimikara N3 số 404 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第94番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい94ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 404 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-095",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 95,
    "word": "名詞_405",
    "reading": "名詞よみ405",
    "pitchAccent": "名詞[405]",
    "hanViet": "HÁN TỰ 405",
    "meaning": "Thuật ngữ Mimikara N3 số 405 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第95番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい95ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 405 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-096",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 96,
    "word": "名詞_406",
    "reading": "名詞よみ406",
    "pitchAccent": "名詞[406]",
    "hanViet": "HÁN TỰ 406",
    "meaning": "Thuật ngữ Mimikara N3 số 406 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第96番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい96ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 406 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-097",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 97,
    "word": "名詞_407",
    "reading": "名詞よみ407",
    "pitchAccent": "名詞[407]",
    "hanViet": "HÁN TỰ 407",
    "meaning": "Thuật ngữ Mimikara N3 số 407 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第97番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい97ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 407 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-098",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 98,
    "word": "名詞_408",
    "reading": "名詞よみ408",
    "pitchAccent": "名詞[408]",
    "hanViet": "HÁN TỰ 408",
    "meaning": "Thuật ngữ Mimikara N3 số 408 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第98番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい98ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 408 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-099",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 99,
    "word": "名詞_409",
    "reading": "名詞よみ409",
    "pitchAccent": "名詞[409]",
    "hanViet": "HÁN TỰ 409",
    "meaning": "Thuật ngữ Mimikara N3 số 409 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第99番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい99ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 409 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-100",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 100,
    "word": "名詞_410",
    "reading": "名詞よみ410",
    "pitchAccent": "名詞[410]",
    "hanViet": "HÁN TỰ 410",
    "meaning": "Thuật ngữ Mimikara N3 số 410 thuộc Unit 4 | 名詞 B",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの第100番目の語彙を活用した例文です。",
      "furigana": "Unit 4 | 名詞 Bの だい100ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 410 của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-07-001",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 1,
    "word": "動詞_411",
    "reading": "動詞よみ411",
    "pitchAccent": "動詞[411]",
    "hanViet": "HÁN TỰ 411",
    "meaning": "Thuật ngữ Mimikara N3 số 411 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 411 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-002",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 2,
    "word": "動詞_412",
    "reading": "動詞よみ412",
    "pitchAccent": "動詞[412]",
    "hanViet": "HÁN TỰ 412",
    "meaning": "Thuật ngữ Mimikara N3 số 412 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 412 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-003",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 3,
    "word": "動詞_413",
    "reading": "動詞よみ413",
    "pitchAccent": "動詞[413]",
    "hanViet": "HÁN TỰ 413",
    "meaning": "Thuật ngữ Mimikara N3 số 413 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 413 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-004",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 4,
    "word": "動詞_414",
    "reading": "動詞よみ414",
    "pitchAccent": "動詞[414]",
    "hanViet": "HÁN TỰ 414",
    "meaning": "Thuật ngữ Mimikara N3 số 414 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 414 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-005",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 5,
    "word": "動詞_415",
    "reading": "動詞よみ415",
    "pitchAccent": "動詞[415]",
    "hanViet": "HÁN TỰ 415",
    "meaning": "Thuật ngữ Mimikara N3 số 415 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 415 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-006",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 6,
    "word": "動詞_416",
    "reading": "動詞よみ416",
    "pitchAccent": "動詞[416]",
    "hanViet": "HÁN TỰ 416",
    "meaning": "Thuật ngữ Mimikara N3 số 416 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 416 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-007",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 7,
    "word": "動詞_417",
    "reading": "動詞よみ417",
    "pitchAccent": "動詞[417]",
    "hanViet": "HÁN TỰ 417",
    "meaning": "Thuật ngữ Mimikara N3 số 417 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 417 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-008",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 8,
    "word": "動詞_418",
    "reading": "動詞よみ418",
    "pitchAccent": "動詞[418]",
    "hanViet": "HÁN TỰ 418",
    "meaning": "Thuật ngữ Mimikara N3 số 418 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 418 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-009",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 9,
    "word": "動詞_419",
    "reading": "動詞よみ419",
    "pitchAccent": "動詞[419]",
    "hanViet": "HÁN TỰ 419",
    "meaning": "Thuật ngữ Mimikara N3 số 419 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 419 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-010",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 10,
    "word": "動詞_420",
    "reading": "動詞よみ420",
    "pitchAccent": "動詞[420]",
    "hanViet": "HÁN TỰ 420",
    "meaning": "Thuật ngữ Mimikara N3 số 420 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 420 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-011",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 11,
    "word": "動詞_421",
    "reading": "動詞よみ421",
    "pitchAccent": "動詞[421]",
    "hanViet": "HÁN TỰ 421",
    "meaning": "Thuật ngữ Mimikara N3 số 421 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 421 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-012",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 12,
    "word": "動詞_422",
    "reading": "動詞よみ422",
    "pitchAccent": "動詞[422]",
    "hanViet": "HÁN TỰ 422",
    "meaning": "Thuật ngữ Mimikara N3 số 422 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 422 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-013",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 13,
    "word": "動詞_423",
    "reading": "動詞よみ423",
    "pitchAccent": "動詞[423]",
    "hanViet": "HÁN TỰ 423",
    "meaning": "Thuật ngữ Mimikara N3 số 423 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 423 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-014",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 14,
    "word": "動詞_424",
    "reading": "動詞よみ424",
    "pitchAccent": "動詞[424]",
    "hanViet": "HÁN TỰ 424",
    "meaning": "Thuật ngữ Mimikara N3 số 424 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 424 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-015",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 15,
    "word": "動詞_425",
    "reading": "動詞よみ425",
    "pitchAccent": "動詞[425]",
    "hanViet": "HÁN TỰ 425",
    "meaning": "Thuật ngữ Mimikara N3 số 425 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 425 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-016",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 16,
    "word": "動詞_426",
    "reading": "動詞よみ426",
    "pitchAccent": "動詞[426]",
    "hanViet": "HÁN TỰ 426",
    "meaning": "Thuật ngữ Mimikara N3 số 426 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 426 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-017",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 17,
    "word": "動詞_427",
    "reading": "動詞よみ427",
    "pitchAccent": "動詞[427]",
    "hanViet": "HÁN TỰ 427",
    "meaning": "Thuật ngữ Mimikara N3 số 427 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 427 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-018",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 18,
    "word": "動詞_428",
    "reading": "動詞よみ428",
    "pitchAccent": "動詞[428]",
    "hanViet": "HÁN TỰ 428",
    "meaning": "Thuật ngữ Mimikara N3 số 428 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 428 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-019",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 19,
    "word": "動詞_429",
    "reading": "動詞よみ429",
    "pitchAccent": "動詞[429]",
    "hanViet": "HÁN TỰ 429",
    "meaning": "Thuật ngữ Mimikara N3 số 429 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 429 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-020",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 20,
    "word": "動詞_430",
    "reading": "動詞よみ430",
    "pitchAccent": "動詞[430]",
    "hanViet": "HÁN TỰ 430",
    "meaning": "Thuật ngữ Mimikara N3 số 430 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 430 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-021",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 21,
    "word": "動詞_431",
    "reading": "動詞よみ431",
    "pitchAccent": "動詞[431]",
    "hanViet": "HÁN TỰ 431",
    "meaning": "Thuật ngữ Mimikara N3 số 431 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 431 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-022",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 22,
    "word": "動詞_432",
    "reading": "動詞よみ432",
    "pitchAccent": "動詞[432]",
    "hanViet": "HÁN TỰ 432",
    "meaning": "Thuật ngữ Mimikara N3 số 432 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 432 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-023",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 23,
    "word": "動詞_433",
    "reading": "動詞よみ433",
    "pitchAccent": "動詞[433]",
    "hanViet": "HÁN TỰ 433",
    "meaning": "Thuật ngữ Mimikara N3 số 433 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 433 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-024",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 24,
    "word": "動詞_434",
    "reading": "動詞よみ434",
    "pitchAccent": "動詞[434]",
    "hanViet": "HÁN TỰ 434",
    "meaning": "Thuật ngữ Mimikara N3 số 434 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 434 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-025",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 25,
    "word": "動詞_435",
    "reading": "動詞よみ435",
    "pitchAccent": "動詞[435]",
    "hanViet": "HÁN TỰ 435",
    "meaning": "Thuật ngữ Mimikara N3 số 435 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 435 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-026",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 26,
    "word": "動詞_436",
    "reading": "動詞よみ436",
    "pitchAccent": "動詞[436]",
    "hanViet": "HÁN TỰ 436",
    "meaning": "Thuật ngữ Mimikara N3 số 436 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 436 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-027",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 27,
    "word": "動詞_437",
    "reading": "動詞よみ437",
    "pitchAccent": "動詞[437]",
    "hanViet": "HÁN TỰ 437",
    "meaning": "Thuật ngữ Mimikara N3 số 437 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 437 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-028",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 28,
    "word": "動詞_438",
    "reading": "動詞よみ438",
    "pitchAccent": "動詞[438]",
    "hanViet": "HÁN TỰ 438",
    "meaning": "Thuật ngữ Mimikara N3 số 438 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 438 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-029",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 29,
    "word": "動詞_439",
    "reading": "動詞よみ439",
    "pitchAccent": "動詞[439]",
    "hanViet": "HÁN TỰ 439",
    "meaning": "Thuật ngữ Mimikara N3 số 439 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 439 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-030",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 30,
    "word": "動詞_440",
    "reading": "動詞よみ440",
    "pitchAccent": "動詞[440]",
    "hanViet": "HÁN TỰ 440",
    "meaning": "Thuật ngữ Mimikara N3 số 440 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 440 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-031",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 31,
    "word": "動詞_441",
    "reading": "動詞よみ441",
    "pitchAccent": "動詞[441]",
    "hanViet": "HÁN TỰ 441",
    "meaning": "Thuật ngữ Mimikara N3 số 441 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 441 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-032",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 32,
    "word": "動詞_442",
    "reading": "動詞よみ442",
    "pitchAccent": "動詞[442]",
    "hanViet": "HÁN TỰ 442",
    "meaning": "Thuật ngữ Mimikara N3 số 442 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 442 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-033",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 33,
    "word": "動詞_443",
    "reading": "動詞よみ443",
    "pitchAccent": "動詞[443]",
    "hanViet": "HÁN TỰ 443",
    "meaning": "Thuật ngữ Mimikara N3 số 443 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 443 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-034",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 34,
    "word": "動詞_444",
    "reading": "動詞よみ444",
    "pitchAccent": "動詞[444]",
    "hanViet": "HÁN TỰ 444",
    "meaning": "Thuật ngữ Mimikara N3 số 444 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 444 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-035",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 35,
    "word": "動詞_445",
    "reading": "動詞よみ445",
    "pitchAccent": "動詞[445]",
    "hanViet": "HÁN TỰ 445",
    "meaning": "Thuật ngữ Mimikara N3 số 445 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 445 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-036",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 36,
    "word": "動詞_446",
    "reading": "動詞よみ446",
    "pitchAccent": "動詞[446]",
    "hanViet": "HÁN TỰ 446",
    "meaning": "Thuật ngữ Mimikara N3 số 446 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 446 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-037",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 37,
    "word": "動詞_447",
    "reading": "動詞よみ447",
    "pitchAccent": "動詞[447]",
    "hanViet": "HÁN TỰ 447",
    "meaning": "Thuật ngữ Mimikara N3 số 447 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 447 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-038",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 38,
    "word": "動詞_448",
    "reading": "動詞よみ448",
    "pitchAccent": "動詞[448]",
    "hanViet": "HÁN TỰ 448",
    "meaning": "Thuật ngữ Mimikara N3 số 448 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 448 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-039",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 39,
    "word": "動詞_449",
    "reading": "動詞よみ449",
    "pitchAccent": "動詞[449]",
    "hanViet": "HÁN TỰ 449",
    "meaning": "Thuật ngữ Mimikara N3 số 449 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 449 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-040",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 40,
    "word": "動詞_450",
    "reading": "動詞よみ450",
    "pitchAccent": "動詞[450]",
    "hanViet": "HÁN TỰ 450",
    "meaning": "Thuật ngữ Mimikara N3 số 450 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 450 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-041",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 41,
    "word": "動詞_451",
    "reading": "動詞よみ451",
    "pitchAccent": "動詞[451]",
    "hanViet": "HÁN TỰ 451",
    "meaning": "Thuật ngữ Mimikara N3 số 451 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第41番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい41ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 451 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-042",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 42,
    "word": "動詞_452",
    "reading": "動詞よみ452",
    "pitchAccent": "動詞[452]",
    "hanViet": "HÁN TỰ 452",
    "meaning": "Thuật ngữ Mimikara N3 số 452 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第42番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい42ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 452 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-043",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 43,
    "word": "動詞_453",
    "reading": "動詞よみ453",
    "pitchAccent": "動詞[453]",
    "hanViet": "HÁN TỰ 453",
    "meaning": "Thuật ngữ Mimikara N3 số 453 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第43番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい43ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 453 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-044",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 44,
    "word": "動詞_454",
    "reading": "動詞よみ454",
    "pitchAccent": "動詞[454]",
    "hanViet": "HÁN TỰ 454",
    "meaning": "Thuật ngữ Mimikara N3 số 454 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第44番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい44ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 454 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-045",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 45,
    "word": "動詞_455",
    "reading": "動詞よみ455",
    "pitchAccent": "動詞[455]",
    "hanViet": "HÁN TỰ 455",
    "meaning": "Thuật ngữ Mimikara N3 số 455 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第45番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい45ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 455 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-046",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 46,
    "word": "動詞_456",
    "reading": "動詞よみ456",
    "pitchAccent": "動詞[456]",
    "hanViet": "HÁN TỰ 456",
    "meaning": "Thuật ngữ Mimikara N3 số 456 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第46番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい46ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 456 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-047",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 47,
    "word": "動詞_457",
    "reading": "動詞よみ457",
    "pitchAccent": "動詞[457]",
    "hanViet": "HÁN TỰ 457",
    "meaning": "Thuật ngữ Mimikara N3 số 457 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第47番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい47ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 457 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-048",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 48,
    "word": "動詞_458",
    "reading": "動詞よみ458",
    "pitchAccent": "動詞[458]",
    "hanViet": "HÁN TỰ 458",
    "meaning": "Thuật ngữ Mimikara N3 số 458 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第48番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい48ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 458 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-049",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 49,
    "word": "動詞_459",
    "reading": "動詞よみ459",
    "pitchAccent": "動詞[459]",
    "hanViet": "HÁN TỰ 459",
    "meaning": "Thuật ngữ Mimikara N3 số 459 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第49番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい49ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 459 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-050",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 50,
    "word": "動詞_460",
    "reading": "動詞よみ460",
    "pitchAccent": "動詞[460]",
    "hanViet": "HÁN TỰ 460",
    "meaning": "Thuật ngữ Mimikara N3 số 460 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第50番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい50ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 460 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-051",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 51,
    "word": "動詞_461",
    "reading": "動詞よみ461",
    "pitchAccent": "動詞[461]",
    "hanViet": "HÁN TỰ 461",
    "meaning": "Thuật ngữ Mimikara N3 số 461 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第51番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい51ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 461 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-052",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 52,
    "word": "動詞_462",
    "reading": "動詞よみ462",
    "pitchAccent": "動詞[462]",
    "hanViet": "HÁN TỰ 462",
    "meaning": "Thuật ngữ Mimikara N3 số 462 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第52番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい52ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 462 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-053",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 53,
    "word": "動詞_463",
    "reading": "動詞よみ463",
    "pitchAccent": "動詞[463]",
    "hanViet": "HÁN TỰ 463",
    "meaning": "Thuật ngữ Mimikara N3 số 463 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第53番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい53ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 463 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-054",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 54,
    "word": "動詞_464",
    "reading": "動詞よみ464",
    "pitchAccent": "動詞[464]",
    "hanViet": "HÁN TỰ 464",
    "meaning": "Thuật ngữ Mimikara N3 số 464 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第54番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい54ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 464 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-055",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 55,
    "word": "動詞_465",
    "reading": "動詞よみ465",
    "pitchAccent": "動詞[465]",
    "hanViet": "HÁN TỰ 465",
    "meaning": "Thuật ngữ Mimikara N3 số 465 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第55番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい55ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 465 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-056",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 56,
    "word": "動詞_466",
    "reading": "動詞よみ466",
    "pitchAccent": "動詞[466]",
    "hanViet": "HÁN TỰ 466",
    "meaning": "Thuật ngữ Mimikara N3 số 466 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第56番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい56ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 466 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-057",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 57,
    "word": "動詞_467",
    "reading": "動詞よみ467",
    "pitchAccent": "動詞[467]",
    "hanViet": "HÁN TỰ 467",
    "meaning": "Thuật ngữ Mimikara N3 số 467 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第57番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい57ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 467 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-058",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 58,
    "word": "動詞_468",
    "reading": "動詞よみ468",
    "pitchAccent": "動詞[468]",
    "hanViet": "HÁN TỰ 468",
    "meaning": "Thuật ngữ Mimikara N3 số 468 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第58番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい58ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 468 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-059",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 59,
    "word": "動詞_469",
    "reading": "動詞よみ469",
    "pitchAccent": "動詞[469]",
    "hanViet": "HÁN TỰ 469",
    "meaning": "Thuật ngữ Mimikara N3 số 469 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第59番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい59ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 469 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-060",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 60,
    "word": "動詞_470",
    "reading": "動詞よみ470",
    "pitchAccent": "動詞[470]",
    "hanViet": "HÁN TỰ 470",
    "meaning": "Thuật ngữ Mimikara N3 số 470 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第60番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい60ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 470 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-061",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 61,
    "word": "動詞_471",
    "reading": "動詞よみ471",
    "pitchAccent": "動詞[471]",
    "hanViet": "HÁN TỰ 471",
    "meaning": "Thuật ngữ Mimikara N3 số 471 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第61番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい61ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 471 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-062",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 62,
    "word": "動詞_472",
    "reading": "動詞よみ472",
    "pitchAccent": "動詞[472]",
    "hanViet": "HÁN TỰ 472",
    "meaning": "Thuật ngữ Mimikara N3 số 472 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第62番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい62ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 472 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-063",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 63,
    "word": "動詞_473",
    "reading": "動詞よみ473",
    "pitchAccent": "動詞[473]",
    "hanViet": "HÁN TỰ 473",
    "meaning": "Thuật ngữ Mimikara N3 số 473 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第63番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい63ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 473 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-064",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 64,
    "word": "動詞_474",
    "reading": "動詞よみ474",
    "pitchAccent": "動詞[474]",
    "hanViet": "HÁN TỰ 474",
    "meaning": "Thuật ngữ Mimikara N3 số 474 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第64番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい64ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 474 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-065",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 65,
    "word": "動詞_475",
    "reading": "動詞よみ475",
    "pitchAccent": "動詞[475]",
    "hanViet": "HÁN TỰ 475",
    "meaning": "Thuật ngữ Mimikara N3 số 475 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第65番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい65ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 475 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-066",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 66,
    "word": "動詞_476",
    "reading": "動詞よみ476",
    "pitchAccent": "動詞[476]",
    "hanViet": "HÁN TỰ 476",
    "meaning": "Thuật ngữ Mimikara N3 số 476 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第66番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい66ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 476 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-067",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 67,
    "word": "動詞_477",
    "reading": "動詞よみ477",
    "pitchAccent": "動詞[477]",
    "hanViet": "HÁN TỰ 477",
    "meaning": "Thuật ngữ Mimikara N3 số 477 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第67番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい67ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 477 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-068",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 68,
    "word": "動詞_478",
    "reading": "動詞よみ478",
    "pitchAccent": "動詞[478]",
    "hanViet": "HÁN TỰ 478",
    "meaning": "Thuật ngữ Mimikara N3 số 478 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第68番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい68ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 478 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-069",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 69,
    "word": "動詞_479",
    "reading": "動詞よみ479",
    "pitchAccent": "動詞[479]",
    "hanViet": "HÁN TỰ 479",
    "meaning": "Thuật ngữ Mimikara N3 số 479 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第69番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい69ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 479 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-070",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 70,
    "word": "動詞_480",
    "reading": "動詞よみ480",
    "pitchAccent": "動詞[480]",
    "hanViet": "HÁN TỰ 480",
    "meaning": "Thuật ngữ Mimikara N3 số 480 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第70番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい70ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 480 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-071",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 71,
    "word": "動詞_481",
    "reading": "動詞よみ481",
    "pitchAccent": "動詞[481]",
    "hanViet": "HÁN TỰ 481",
    "meaning": "Thuật ngữ Mimikara N3 số 481 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第71番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい71ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 481 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-072",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 72,
    "word": "動詞_482",
    "reading": "動詞よみ482",
    "pitchAccent": "動詞[482]",
    "hanViet": "HÁN TỰ 482",
    "meaning": "Thuật ngữ Mimikara N3 số 482 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第72番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい72ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 482 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-073",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 73,
    "word": "動詞_483",
    "reading": "動詞よみ483",
    "pitchAccent": "動詞[483]",
    "hanViet": "HÁN TỰ 483",
    "meaning": "Thuật ngữ Mimikara N3 số 483 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第73番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい73ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 483 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-074",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 74,
    "word": "動詞_484",
    "reading": "動詞よみ484",
    "pitchAccent": "動詞[484]",
    "hanViet": "HÁN TỰ 484",
    "meaning": "Thuật ngữ Mimikara N3 số 484 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第74番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい74ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 484 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-075",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 75,
    "word": "動詞_485",
    "reading": "動詞よみ485",
    "pitchAccent": "動詞[485]",
    "hanViet": "HÁN TỰ 485",
    "meaning": "Thuật ngữ Mimikara N3 số 485 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第75番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい75ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 485 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-076",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 76,
    "word": "動詞_486",
    "reading": "動詞よみ486",
    "pitchAccent": "動詞[486]",
    "hanViet": "HÁN TỰ 486",
    "meaning": "Thuật ngữ Mimikara N3 số 486 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第76番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい76ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 486 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-077",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 77,
    "word": "動詞_487",
    "reading": "動詞よみ487",
    "pitchAccent": "動詞[487]",
    "hanViet": "HÁN TỰ 487",
    "meaning": "Thuật ngữ Mimikara N3 số 487 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第77番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい77ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 487 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-078",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 78,
    "word": "動詞_488",
    "reading": "動詞よみ488",
    "pitchAccent": "動詞[488]",
    "hanViet": "HÁN TỰ 488",
    "meaning": "Thuật ngữ Mimikara N3 số 488 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第78番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい78ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 488 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-079",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 79,
    "word": "動詞_489",
    "reading": "動詞よみ489",
    "pitchAccent": "動詞[489]",
    "hanViet": "HÁN TỰ 489",
    "meaning": "Thuật ngữ Mimikara N3 số 489 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第79番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい79ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 489 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-080",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 80,
    "word": "動詞_490",
    "reading": "動詞よみ490",
    "pitchAccent": "動詞[490]",
    "hanViet": "HÁN TỰ 490",
    "meaning": "Thuật ngữ Mimikara N3 số 490 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第80番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい80ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 490 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-081",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 81,
    "word": "動詞_491",
    "reading": "動詞よみ491",
    "pitchAccent": "動詞[491]",
    "hanViet": "HÁN TỰ 491",
    "meaning": "Thuật ngữ Mimikara N3 số 491 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第81番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい81ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 491 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-082",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 82,
    "word": "動詞_492",
    "reading": "動詞よみ492",
    "pitchAccent": "動詞[492]",
    "hanViet": "HÁN TỰ 492",
    "meaning": "Thuật ngữ Mimikara N3 số 492 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第82番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい82ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 492 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-083",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 83,
    "word": "動詞_493",
    "reading": "動詞よみ493",
    "pitchAccent": "動詞[493]",
    "hanViet": "HÁN TỰ 493",
    "meaning": "Thuật ngữ Mimikara N3 số 493 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第83番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい83ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 493 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-084",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 84,
    "word": "動詞_494",
    "reading": "動詞よみ494",
    "pitchAccent": "動詞[494]",
    "hanViet": "HÁN TỰ 494",
    "meaning": "Thuật ngữ Mimikara N3 số 494 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第84番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい84ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 494 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-085",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 85,
    "word": "動詞_495",
    "reading": "動詞よみ495",
    "pitchAccent": "動詞[495]",
    "hanViet": "HÁN TỰ 495",
    "meaning": "Thuật ngữ Mimikara N3 số 495 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第85番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい85ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 495 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-086",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 86,
    "word": "動詞_496",
    "reading": "動詞よみ496",
    "pitchAccent": "動詞[496]",
    "hanViet": "HÁN TỰ 496",
    "meaning": "Thuật ngữ Mimikara N3 số 496 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第86番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい86ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 496 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-087",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 87,
    "word": "動詞_497",
    "reading": "動詞よみ497",
    "pitchAccent": "動詞[497]",
    "hanViet": "HÁN TỰ 497",
    "meaning": "Thuật ngữ Mimikara N3 số 497 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第87番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい87ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 497 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-088",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 88,
    "word": "動詞_498",
    "reading": "動詞よみ498",
    "pitchAccent": "動詞[498]",
    "hanViet": "HÁN TỰ 498",
    "meaning": "Thuật ngữ Mimikara N3 số 498 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第88番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい88ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 498 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-089",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 89,
    "word": "動詞_499",
    "reading": "動詞よみ499",
    "pitchAccent": "動詞[499]",
    "hanViet": "HÁN TỰ 499",
    "meaning": "Thuật ngữ Mimikara N3 số 499 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第89番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい89ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 499 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-090",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 90,
    "word": "動詞_500",
    "reading": "動詞よみ500",
    "pitchAccent": "動詞[500]",
    "hanViet": "HÁN TỰ 500",
    "meaning": "Thuật ngữ Mimikara N3 số 500 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第90番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい90ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 500 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-091",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 91,
    "word": "動詞_501",
    "reading": "動詞よみ501",
    "pitchAccent": "動詞[501]",
    "hanViet": "HÁN TỰ 501",
    "meaning": "Thuật ngữ Mimikara N3 số 501 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第91番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい91ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 501 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-092",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 92,
    "word": "動詞_502",
    "reading": "動詞よみ502",
    "pitchAccent": "動詞[502]",
    "hanViet": "HÁN TỰ 502",
    "meaning": "Thuật ngữ Mimikara N3 số 502 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第92番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい92ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 502 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-093",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 93,
    "word": "動詞_503",
    "reading": "動詞よみ503",
    "pitchAccent": "動詞[503]",
    "hanViet": "HÁN TỰ 503",
    "meaning": "Thuật ngữ Mimikara N3 số 503 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第93番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい93ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 503 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-094",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 94,
    "word": "動詞_504",
    "reading": "動詞よみ504",
    "pitchAccent": "動詞[504]",
    "hanViet": "HÁN TỰ 504",
    "meaning": "Thuật ngữ Mimikara N3 số 504 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第94番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい94ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 504 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-095",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 95,
    "word": "動詞_505",
    "reading": "動詞よみ505",
    "pitchAccent": "動詞[505]",
    "hanViet": "HÁN TỰ 505",
    "meaning": "Thuật ngữ Mimikara N3 số 505 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第95番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい95ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 505 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-096",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 96,
    "word": "動詞_506",
    "reading": "動詞よみ506",
    "pitchAccent": "動詞[506]",
    "hanViet": "HÁN TỰ 506",
    "meaning": "Thuật ngữ Mimikara N3 số 506 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第96番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい96ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 506 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-097",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 97,
    "word": "動詞_507",
    "reading": "動詞よみ507",
    "pitchAccent": "動詞[507]",
    "hanViet": "HÁN TỰ 507",
    "meaning": "Thuật ngữ Mimikara N3 số 507 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第97番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい97ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 507 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-098",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 98,
    "word": "動詞_508",
    "reading": "動詞よみ508",
    "pitchAccent": "動詞[508]",
    "hanViet": "HÁN TỰ 508",
    "meaning": "Thuật ngữ Mimikara N3 số 508 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第98番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい98ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 508 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-099",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 99,
    "word": "動詞_509",
    "reading": "動詞よみ509",
    "pitchAccent": "動詞[509]",
    "hanViet": "HÁN TỰ 509",
    "meaning": "Thuật ngữ Mimikara N3 số 509 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第99番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい99ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 509 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-100",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 100,
    "word": "動詞_510",
    "reading": "動詞よみ510",
    "pitchAccent": "動詞[510]",
    "hanViet": "HÁN TỰ 510",
    "meaning": "Thuật ngữ Mimikara N3 số 510 thuộc Unit 5 | 動詞 B",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの第100番目の語彙を活用した例文です。",
      "furigana": "Unit 5 | 動詞 Bの だい100ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 510 của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-08-001",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 1,
    "word": "カタカナ_511",
    "reading": "カタカナよみ511",
    "pitchAccent": "カタカナ[511]",
    "hanViet": "HÁN TỰ 511",
    "meaning": "Thuật ngữ Mimikara N3 số 511 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 511 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-002",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 2,
    "word": "カタカナ_512",
    "reading": "カタカナよみ512",
    "pitchAccent": "カタカナ[512]",
    "hanViet": "HÁN TỰ 512",
    "meaning": "Thuật ngữ Mimikara N3 số 512 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 512 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-003",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 3,
    "word": "カタカナ_513",
    "reading": "カタカナよみ513",
    "pitchAccent": "カタカナ[513]",
    "hanViet": "HÁN TỰ 513",
    "meaning": "Thuật ngữ Mimikara N3 số 513 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 513 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-004",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 4,
    "word": "カタカナ_514",
    "reading": "カタカナよみ514",
    "pitchAccent": "カタカナ[514]",
    "hanViet": "HÁN TỰ 514",
    "meaning": "Thuật ngữ Mimikara N3 số 514 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 514 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-005",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 5,
    "word": "カタカナ_515",
    "reading": "カタカナよみ515",
    "pitchAccent": "カタカナ[515]",
    "hanViet": "HÁN TỰ 515",
    "meaning": "Thuật ngữ Mimikara N3 số 515 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 515 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-006",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 6,
    "word": "カタカナ_516",
    "reading": "カタカナよみ516",
    "pitchAccent": "カタカナ[516]",
    "hanViet": "HÁN TỰ 516",
    "meaning": "Thuật ngữ Mimikara N3 số 516 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 516 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-007",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 7,
    "word": "カタカナ_517",
    "reading": "カタカナよみ517",
    "pitchAccent": "カタカナ[517]",
    "hanViet": "HÁN TỰ 517",
    "meaning": "Thuật ngữ Mimikara N3 số 517 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 517 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-008",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 8,
    "word": "カタカナ_518",
    "reading": "カタカナよみ518",
    "pitchAccent": "カタカナ[518]",
    "hanViet": "HÁN TỰ 518",
    "meaning": "Thuật ngữ Mimikara N3 số 518 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 518 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-009",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 9,
    "word": "カタカナ_519",
    "reading": "カタカナよみ519",
    "pitchAccent": "カタカナ[519]",
    "hanViet": "HÁN TỰ 519",
    "meaning": "Thuật ngữ Mimikara N3 số 519 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 519 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-010",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 10,
    "word": "カタカナ_520",
    "reading": "カタカナよみ520",
    "pitchAccent": "カタカナ[520]",
    "hanViet": "HÁN TỰ 520",
    "meaning": "Thuật ngữ Mimikara N3 số 520 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 520 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-011",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 11,
    "word": "カタカナ_521",
    "reading": "カタカナよみ521",
    "pitchAccent": "カタカナ[521]",
    "hanViet": "HÁN TỰ 521",
    "meaning": "Thuật ngữ Mimikara N3 số 521 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 521 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-012",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 12,
    "word": "カタカナ_522",
    "reading": "カタカナよみ522",
    "pitchAccent": "カタカナ[522]",
    "hanViet": "HÁN TỰ 522",
    "meaning": "Thuật ngữ Mimikara N3 số 522 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 522 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-013",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 13,
    "word": "カタカナ_523",
    "reading": "カタカナよみ523",
    "pitchAccent": "カタカナ[523]",
    "hanViet": "HÁN TỰ 523",
    "meaning": "Thuật ngữ Mimikara N3 số 523 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 523 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-014",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 14,
    "word": "カタカナ_524",
    "reading": "カタカナよみ524",
    "pitchAccent": "カタカナ[524]",
    "hanViet": "HÁN TỰ 524",
    "meaning": "Thuật ngữ Mimikara N3 số 524 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 524 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-015",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 15,
    "word": "カタカナ_525",
    "reading": "カタカナよみ525",
    "pitchAccent": "カタカナ[525]",
    "hanViet": "HÁN TỰ 525",
    "meaning": "Thuật ngữ Mimikara N3 số 525 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 525 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-016",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 16,
    "word": "カタカナ_526",
    "reading": "カタカナよみ526",
    "pitchAccent": "カタカナ[526]",
    "hanViet": "HÁN TỰ 526",
    "meaning": "Thuật ngữ Mimikara N3 số 526 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 526 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-017",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 17,
    "word": "カタカナ_527",
    "reading": "カタカナよみ527",
    "pitchAccent": "カタカナ[527]",
    "hanViet": "HÁN TỰ 527",
    "meaning": "Thuật ngữ Mimikara N3 số 527 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 527 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-018",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 18,
    "word": "カタカナ_528",
    "reading": "カタカナよみ528",
    "pitchAccent": "カタカナ[528]",
    "hanViet": "HÁN TỰ 528",
    "meaning": "Thuật ngữ Mimikara N3 số 528 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 528 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-019",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 19,
    "word": "カタカナ_529",
    "reading": "カタカナよみ529",
    "pitchAccent": "カタカナ[529]",
    "hanViet": "HÁN TỰ 529",
    "meaning": "Thuật ngữ Mimikara N3 số 529 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 529 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-020",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 20,
    "word": "カタカナ_530",
    "reading": "カタカナよみ530",
    "pitchAccent": "カタカナ[530]",
    "hanViet": "HÁN TỰ 530",
    "meaning": "Thuật ngữ Mimikara N3 số 530 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 530 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-021",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 21,
    "word": "カタカナ_531",
    "reading": "カタカナよみ531",
    "pitchAccent": "カタカナ[531]",
    "hanViet": "HÁN TỰ 531",
    "meaning": "Thuật ngữ Mimikara N3 số 531 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 531 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-022",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 22,
    "word": "カタカナ_532",
    "reading": "カタカナよみ532",
    "pitchAccent": "カタカナ[532]",
    "hanViet": "HÁN TỰ 532",
    "meaning": "Thuật ngữ Mimikara N3 số 532 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 532 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-023",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 23,
    "word": "カタカナ_533",
    "reading": "カタカナよみ533",
    "pitchAccent": "カタカナ[533]",
    "hanViet": "HÁN TỰ 533",
    "meaning": "Thuật ngữ Mimikara N3 số 533 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 533 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-024",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 24,
    "word": "カタカナ_534",
    "reading": "カタカナよみ534",
    "pitchAccent": "カタカナ[534]",
    "hanViet": "HÁN TỰ 534",
    "meaning": "Thuật ngữ Mimikara N3 số 534 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 534 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-025",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 25,
    "word": "カタカナ_535",
    "reading": "カタカナよみ535",
    "pitchAccent": "カタカナ[535]",
    "hanViet": "HÁN TỰ 535",
    "meaning": "Thuật ngữ Mimikara N3 số 535 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 535 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-026",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 26,
    "word": "カタカナ_536",
    "reading": "カタカナよみ536",
    "pitchAccent": "カタカナ[536]",
    "hanViet": "HÁN TỰ 536",
    "meaning": "Thuật ngữ Mimikara N3 số 536 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 536 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-027",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 27,
    "word": "カタカナ_537",
    "reading": "カタカナよみ537",
    "pitchAccent": "カタカナ[537]",
    "hanViet": "HÁN TỰ 537",
    "meaning": "Thuật ngữ Mimikara N3 số 537 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 537 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-028",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 28,
    "word": "カタカナ_538",
    "reading": "カタカナよみ538",
    "pitchAccent": "カタカナ[538]",
    "hanViet": "HÁN TỰ 538",
    "meaning": "Thuật ngữ Mimikara N3 số 538 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 538 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-029",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 29,
    "word": "カタカナ_539",
    "reading": "カタカナよみ539",
    "pitchAccent": "カタカナ[539]",
    "hanViet": "HÁN TỰ 539",
    "meaning": "Thuật ngữ Mimikara N3 số 539 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 539 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-030",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 30,
    "word": "カタカナ_540",
    "reading": "カタカナよみ540",
    "pitchAccent": "カタカナ[540]",
    "hanViet": "HÁN TỰ 540",
    "meaning": "Thuật ngữ Mimikara N3 số 540 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 540 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-031",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 31,
    "word": "カタカナ_541",
    "reading": "カタカナよみ541",
    "pitchAccent": "カタカナ[541]",
    "hanViet": "HÁN TỰ 541",
    "meaning": "Thuật ngữ Mimikara N3 số 541 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 541 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-032",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 32,
    "word": "カタカナ_542",
    "reading": "カタカナよみ542",
    "pitchAccent": "カタカナ[542]",
    "hanViet": "HÁN TỰ 542",
    "meaning": "Thuật ngữ Mimikara N3 số 542 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 542 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-033",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 33,
    "word": "カタカナ_543",
    "reading": "カタカナよみ543",
    "pitchAccent": "カタカナ[543]",
    "hanViet": "HÁN TỰ 543",
    "meaning": "Thuật ngữ Mimikara N3 số 543 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 543 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-034",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 34,
    "word": "カタカナ_544",
    "reading": "カタカナよみ544",
    "pitchAccent": "カタカナ[544]",
    "hanViet": "HÁN TỰ 544",
    "meaning": "Thuật ngữ Mimikara N3 số 544 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 544 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-035",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 35,
    "word": "カタカナ_545",
    "reading": "カタカナよみ545",
    "pitchAccent": "カタカナ[545]",
    "hanViet": "HÁN TỰ 545",
    "meaning": "Thuật ngữ Mimikara N3 số 545 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 545 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-036",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 36,
    "word": "カタカナ_546",
    "reading": "カタカナよみ546",
    "pitchAccent": "カタカナ[546]",
    "hanViet": "HÁN TỰ 546",
    "meaning": "Thuật ngữ Mimikara N3 số 546 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 546 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-037",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 37,
    "word": "カタカナ_547",
    "reading": "カタカナよみ547",
    "pitchAccent": "カタカナ[547]",
    "hanViet": "HÁN TỰ 547",
    "meaning": "Thuật ngữ Mimikara N3 số 547 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 547 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-038",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 38,
    "word": "カタカナ_548",
    "reading": "カタカナよみ548",
    "pitchAccent": "カタカナ[548]",
    "hanViet": "HÁN TỰ 548",
    "meaning": "Thuật ngữ Mimikara N3 số 548 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 548 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-039",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 39,
    "word": "カタカナ_549",
    "reading": "カタカナよみ549",
    "pitchAccent": "カタカナ[549]",
    "hanViet": "HÁN TỰ 549",
    "meaning": "Thuật ngữ Mimikara N3 số 549 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 549 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-040",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 40,
    "word": "カタカナ_550",
    "reading": "カタカナよみ550",
    "pitchAccent": "カタカナ[550]",
    "hanViet": "HÁN TỰ 550",
    "meaning": "Thuật ngữ Mimikara N3 số 550 thuộc Unit 6 | カタカナ A",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 6 | カタカナ Aの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 550 của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-09-001",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 1,
    "word": "ナ形容詞_551",
    "reading": "ナ形容詞よみ551",
    "pitchAccent": "ナ形容詞[551]",
    "hanViet": "HÁN TỰ 551",
    "meaning": "Thuật ngữ Mimikara N3 số 551 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 551 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-002",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 2,
    "word": "ナ形容詞_552",
    "reading": "ナ形容詞よみ552",
    "pitchAccent": "ナ形容詞[552]",
    "hanViet": "HÁN TỰ 552",
    "meaning": "Thuật ngữ Mimikara N3 số 552 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 552 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-003",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 3,
    "word": "ナ形容詞_553",
    "reading": "ナ形容詞よみ553",
    "pitchAccent": "ナ形容詞[553]",
    "hanViet": "HÁN TỰ 553",
    "meaning": "Thuật ngữ Mimikara N3 số 553 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 553 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-004",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 4,
    "word": "ナ形容詞_554",
    "reading": "ナ形容詞よみ554",
    "pitchAccent": "ナ形容詞[554]",
    "hanViet": "HÁN TỰ 554",
    "meaning": "Thuật ngữ Mimikara N3 số 554 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 554 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-005",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 5,
    "word": "ナ形容詞_555",
    "reading": "ナ形容詞よみ555",
    "pitchAccent": "ナ形容詞[555]",
    "hanViet": "HÁN TỰ 555",
    "meaning": "Thuật ngữ Mimikara N3 số 555 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 555 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-006",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 6,
    "word": "ナ形容詞_556",
    "reading": "ナ形容詞よみ556",
    "pitchAccent": "ナ形容詞[556]",
    "hanViet": "HÁN TỰ 556",
    "meaning": "Thuật ngữ Mimikara N3 số 556 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 556 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-007",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 7,
    "word": "ナ形容詞_557",
    "reading": "ナ形容詞よみ557",
    "pitchAccent": "ナ形容詞[557]",
    "hanViet": "HÁN TỰ 557",
    "meaning": "Thuật ngữ Mimikara N3 số 557 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 557 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-008",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 8,
    "word": "ナ形容詞_558",
    "reading": "ナ形容詞よみ558",
    "pitchAccent": "ナ形容詞[558]",
    "hanViet": "HÁN TỰ 558",
    "meaning": "Thuật ngữ Mimikara N3 số 558 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 558 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-009",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 9,
    "word": "ナ形容詞_559",
    "reading": "ナ形容詞よみ559",
    "pitchAccent": "ナ形容詞[559]",
    "hanViet": "HÁN TỰ 559",
    "meaning": "Thuật ngữ Mimikara N3 số 559 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 559 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-010",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 10,
    "word": "ナ形容詞_560",
    "reading": "ナ形容詞よみ560",
    "pitchAccent": "ナ形容詞[560]",
    "hanViet": "HÁN TỰ 560",
    "meaning": "Thuật ngữ Mimikara N3 số 560 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 560 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-011",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 11,
    "word": "ナ形容詞_561",
    "reading": "ナ形容詞よみ561",
    "pitchAccent": "ナ形容詞[561]",
    "hanViet": "HÁN TỰ 561",
    "meaning": "Thuật ngữ Mimikara N3 số 561 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 561 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-012",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 12,
    "word": "ナ形容詞_562",
    "reading": "ナ形容詞よみ562",
    "pitchAccent": "ナ形容詞[562]",
    "hanViet": "HÁN TỰ 562",
    "meaning": "Thuật ngữ Mimikara N3 số 562 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 562 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-013",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 13,
    "word": "ナ形容詞_563",
    "reading": "ナ形容詞よみ563",
    "pitchAccent": "ナ形容詞[563]",
    "hanViet": "HÁN TỰ 563",
    "meaning": "Thuật ngữ Mimikara N3 số 563 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 563 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-014",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 14,
    "word": "ナ形容詞_564",
    "reading": "ナ形容詞よみ564",
    "pitchAccent": "ナ形容詞[564]",
    "hanViet": "HÁN TỰ 564",
    "meaning": "Thuật ngữ Mimikara N3 số 564 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 564 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-015",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 15,
    "word": "ナ形容詞_565",
    "reading": "ナ形容詞よみ565",
    "pitchAccent": "ナ形容詞[565]",
    "hanViet": "HÁN TỰ 565",
    "meaning": "Thuật ngữ Mimikara N3 số 565 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 565 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-016",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 16,
    "word": "ナ形容詞_566",
    "reading": "ナ形容詞よみ566",
    "pitchAccent": "ナ形容詞[566]",
    "hanViet": "HÁN TỰ 566",
    "meaning": "Thuật ngữ Mimikara N3 số 566 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 566 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-017",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 17,
    "word": "ナ形容詞_567",
    "reading": "ナ形容詞よみ567",
    "pitchAccent": "ナ形容詞[567]",
    "hanViet": "HÁN TỰ 567",
    "meaning": "Thuật ngữ Mimikara N3 số 567 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 567 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-018",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 18,
    "word": "ナ形容詞_568",
    "reading": "ナ形容詞よみ568",
    "pitchAccent": "ナ形容詞[568]",
    "hanViet": "HÁN TỰ 568",
    "meaning": "Thuật ngữ Mimikara N3 số 568 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 568 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-019",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 19,
    "word": "ナ形容詞_569",
    "reading": "ナ形容詞よみ569",
    "pitchAccent": "ナ形容詞[569]",
    "hanViet": "HÁN TỰ 569",
    "meaning": "Thuật ngữ Mimikara N3 số 569 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 569 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-020",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 20,
    "word": "ナ形容詞_570",
    "reading": "ナ形容詞よみ570",
    "pitchAccent": "ナ形容詞[570]",
    "hanViet": "HÁN TỰ 570",
    "meaning": "Thuật ngữ Mimikara N3 số 570 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 570 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-021",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 21,
    "word": "ナ形容詞_571",
    "reading": "ナ形容詞よみ571",
    "pitchAccent": "ナ形容詞[571]",
    "hanViet": "HÁN TỰ 571",
    "meaning": "Thuật ngữ Mimikara N3 số 571 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 571 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-022",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 22,
    "word": "ナ形容詞_572",
    "reading": "ナ形容詞よみ572",
    "pitchAccent": "ナ形容詞[572]",
    "hanViet": "HÁN TỰ 572",
    "meaning": "Thuật ngữ Mimikara N3 số 572 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 572 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-023",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 23,
    "word": "ナ形容詞_573",
    "reading": "ナ形容詞よみ573",
    "pitchAccent": "ナ形容詞[573]",
    "hanViet": "HÁN TỰ 573",
    "meaning": "Thuật ngữ Mimikara N3 số 573 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 573 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-024",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 24,
    "word": "ナ形容詞_574",
    "reading": "ナ形容詞よみ574",
    "pitchAccent": "ナ形容詞[574]",
    "hanViet": "HÁN TỰ 574",
    "meaning": "Thuật ngữ Mimikara N3 số 574 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 574 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-025",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 25,
    "word": "ナ形容詞_575",
    "reading": "ナ形容詞よみ575",
    "pitchAccent": "ナ形容詞[575]",
    "hanViet": "HÁN TỰ 575",
    "meaning": "Thuật ngữ Mimikara N3 số 575 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 575 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-026",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 26,
    "word": "ナ形容詞_576",
    "reading": "ナ形容詞よみ576",
    "pitchAccent": "ナ形容詞[576]",
    "hanViet": "HÁN TỰ 576",
    "meaning": "Thuật ngữ Mimikara N3 số 576 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 576 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-027",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 27,
    "word": "ナ形容詞_577",
    "reading": "ナ形容詞よみ577",
    "pitchAccent": "ナ形容詞[577]",
    "hanViet": "HÁN TỰ 577",
    "meaning": "Thuật ngữ Mimikara N3 số 577 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 577 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-028",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 28,
    "word": "ナ形容詞_578",
    "reading": "ナ形容詞よみ578",
    "pitchAccent": "ナ形容詞[578]",
    "hanViet": "HÁN TỰ 578",
    "meaning": "Thuật ngữ Mimikara N3 số 578 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 578 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-029",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 29,
    "word": "ナ形容詞_579",
    "reading": "ナ形容詞よみ579",
    "pitchAccent": "ナ形容詞[579]",
    "hanViet": "HÁN TỰ 579",
    "meaning": "Thuật ngữ Mimikara N3 số 579 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 579 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-030",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 30,
    "word": "ナ形容詞_580",
    "reading": "ナ形容詞よみ580",
    "pitchAccent": "ナ形容詞[580]",
    "hanViet": "HÁN TỰ 580",
    "meaning": "Thuật ngữ Mimikara N3 số 580 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 580 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-031",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 31,
    "word": "ナ形容詞_581",
    "reading": "ナ形容詞よみ581",
    "pitchAccent": "ナ形容詞[581]",
    "hanViet": "HÁN TỰ 581",
    "meaning": "Thuật ngữ Mimikara N3 số 581 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 581 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-032",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 32,
    "word": "ナ形容詞_582",
    "reading": "ナ形容詞よみ582",
    "pitchAccent": "ナ形容詞[582]",
    "hanViet": "HÁN TỰ 582",
    "meaning": "Thuật ngữ Mimikara N3 số 582 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 582 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-033",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 33,
    "word": "ナ形容詞_583",
    "reading": "ナ形容詞よみ583",
    "pitchAccent": "ナ形容詞[583]",
    "hanViet": "HÁN TỰ 583",
    "meaning": "Thuật ngữ Mimikara N3 số 583 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 583 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-034",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 34,
    "word": "ナ形容詞_584",
    "reading": "ナ形容詞よみ584",
    "pitchAccent": "ナ形容詞[584]",
    "hanViet": "HÁN TỰ 584",
    "meaning": "Thuật ngữ Mimikara N3 số 584 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 584 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-035",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 35,
    "word": "ナ形容詞_585",
    "reading": "ナ形容詞よみ585",
    "pitchAccent": "ナ形容詞[585]",
    "hanViet": "HÁN TỰ 585",
    "meaning": "Thuật ngữ Mimikara N3 số 585 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 585 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-036",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 36,
    "word": "ナ形容詞_586",
    "reading": "ナ形容詞よみ586",
    "pitchAccent": "ナ形容詞[586]",
    "hanViet": "HÁN TỰ 586",
    "meaning": "Thuật ngữ Mimikara N3 số 586 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 586 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-037",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 37,
    "word": "ナ形容詞_587",
    "reading": "ナ形容詞よみ587",
    "pitchAccent": "ナ形容詞[587]",
    "hanViet": "HÁN TỰ 587",
    "meaning": "Thuật ngữ Mimikara N3 số 587 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 587 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-038",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 38,
    "word": "ナ形容詞_588",
    "reading": "ナ形容詞よみ588",
    "pitchAccent": "ナ形容詞[588]",
    "hanViet": "HÁN TỰ 588",
    "meaning": "Thuật ngữ Mimikara N3 số 588 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 588 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-039",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 39,
    "word": "ナ形容詞_589",
    "reading": "ナ形容詞よみ589",
    "pitchAccent": "ナ形容詞[589]",
    "hanViet": "HÁN TỰ 589",
    "meaning": "Thuật ngữ Mimikara N3 số 589 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 589 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-040",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 40,
    "word": "ナ形容詞_590",
    "reading": "ナ形容詞よみ590",
    "pitchAccent": "ナ形容詞[590]",
    "hanViet": "HÁN TỰ 590",
    "meaning": "Thuật ngữ Mimikara N3 số 590 thuộc Unit 7 | 形容詞 B",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 7 | 形容詞 Bの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 590 của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-10-001",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 1,
    "word": "副詞_591",
    "reading": "副詞よみ591",
    "pitchAccent": "副詞[591]",
    "hanViet": "HÁN TỰ 591",
    "meaning": "Thuật ngữ Mimikara N3 số 591 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 591 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-002",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 2,
    "word": "副詞_592",
    "reading": "副詞よみ592",
    "pitchAccent": "副詞[592]",
    "hanViet": "HÁN TỰ 592",
    "meaning": "Thuật ngữ Mimikara N3 số 592 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 592 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-003",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 3,
    "word": "副詞_593",
    "reading": "副詞よみ593",
    "pitchAccent": "副詞[593]",
    "hanViet": "HÁN TỰ 593",
    "meaning": "Thuật ngữ Mimikara N3 số 593 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 593 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-004",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 4,
    "word": "副詞_594",
    "reading": "副詞よみ594",
    "pitchAccent": "副詞[594]",
    "hanViet": "HÁN TỰ 594",
    "meaning": "Thuật ngữ Mimikara N3 số 594 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 594 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-005",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 5,
    "word": "副詞_595",
    "reading": "副詞よみ595",
    "pitchAccent": "副詞[595]",
    "hanViet": "HÁN TỰ 595",
    "meaning": "Thuật ngữ Mimikara N3 số 595 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 595 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-006",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 6,
    "word": "副詞_596",
    "reading": "副詞よみ596",
    "pitchAccent": "副詞[596]",
    "hanViet": "HÁN TỰ 596",
    "meaning": "Thuật ngữ Mimikara N3 số 596 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 596 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-007",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 7,
    "word": "副詞_597",
    "reading": "副詞よみ597",
    "pitchAccent": "副詞[597]",
    "hanViet": "HÁN TỰ 597",
    "meaning": "Thuật ngữ Mimikara N3 số 597 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 597 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-008",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 8,
    "word": "副詞_598",
    "reading": "副詞よみ598",
    "pitchAccent": "副詞[598]",
    "hanViet": "HÁN TỰ 598",
    "meaning": "Thuật ngữ Mimikara N3 số 598 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 598 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-009",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 9,
    "word": "副詞_599",
    "reading": "副詞よみ599",
    "pitchAccent": "副詞[599]",
    "hanViet": "HÁN TỰ 599",
    "meaning": "Thuật ngữ Mimikara N3 số 599 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 599 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-010",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 10,
    "word": "副詞_600",
    "reading": "副詞よみ600",
    "pitchAccent": "副詞[600]",
    "hanViet": "HÁN TỰ 600",
    "meaning": "Thuật ngữ Mimikara N3 số 600 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 600 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-011",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 11,
    "word": "副詞_601",
    "reading": "副詞よみ601",
    "pitchAccent": "副詞[601]",
    "hanViet": "HÁN TỰ 601",
    "meaning": "Thuật ngữ Mimikara N3 số 601 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 601 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-012",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 12,
    "word": "副詞_602",
    "reading": "副詞よみ602",
    "pitchAccent": "副詞[602]",
    "hanViet": "HÁN TỰ 602",
    "meaning": "Thuật ngữ Mimikara N3 số 602 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 602 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-013",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 13,
    "word": "副詞_603",
    "reading": "副詞よみ603",
    "pitchAccent": "副詞[603]",
    "hanViet": "HÁN TỰ 603",
    "meaning": "Thuật ngữ Mimikara N3 số 603 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 603 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-014",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 14,
    "word": "副詞_604",
    "reading": "副詞よみ604",
    "pitchAccent": "副詞[604]",
    "hanViet": "HÁN TỰ 604",
    "meaning": "Thuật ngữ Mimikara N3 số 604 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 604 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-015",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 15,
    "word": "副詞_605",
    "reading": "副詞よみ605",
    "pitchAccent": "副詞[605]",
    "hanViet": "HÁN TỰ 605",
    "meaning": "Thuật ngữ Mimikara N3 số 605 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 605 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-016",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 16,
    "word": "副詞_606",
    "reading": "副詞よみ606",
    "pitchAccent": "副詞[606]",
    "hanViet": "HÁN TỰ 606",
    "meaning": "Thuật ngữ Mimikara N3 số 606 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 606 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-017",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 17,
    "word": "副詞_607",
    "reading": "副詞よみ607",
    "pitchAccent": "副詞[607]",
    "hanViet": "HÁN TỰ 607",
    "meaning": "Thuật ngữ Mimikara N3 số 607 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 607 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-018",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 18,
    "word": "副詞_608",
    "reading": "副詞よみ608",
    "pitchAccent": "副詞[608]",
    "hanViet": "HÁN TỰ 608",
    "meaning": "Thuật ngữ Mimikara N3 số 608 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 608 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-019",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 19,
    "word": "副詞_609",
    "reading": "副詞よみ609",
    "pitchAccent": "副詞[609]",
    "hanViet": "HÁN TỰ 609",
    "meaning": "Thuật ngữ Mimikara N3 số 609 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 609 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-020",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 20,
    "word": "副詞_610",
    "reading": "副詞よみ610",
    "pitchAccent": "副詞[610]",
    "hanViet": "HÁN TỰ 610",
    "meaning": "Thuật ngữ Mimikara N3 số 610 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 610 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-021",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 21,
    "word": "副詞_611",
    "reading": "副詞よみ611",
    "pitchAccent": "副詞[611]",
    "hanViet": "HÁN TỰ 611",
    "meaning": "Thuật ngữ Mimikara N3 số 611 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 611 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-022",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 22,
    "word": "副詞_612",
    "reading": "副詞よみ612",
    "pitchAccent": "副詞[612]",
    "hanViet": "HÁN TỰ 612",
    "meaning": "Thuật ngữ Mimikara N3 số 612 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 612 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-023",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 23,
    "word": "副詞_613",
    "reading": "副詞よみ613",
    "pitchAccent": "副詞[613]",
    "hanViet": "HÁN TỰ 613",
    "meaning": "Thuật ngữ Mimikara N3 số 613 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 613 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-024",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 24,
    "word": "副詞_614",
    "reading": "副詞よみ614",
    "pitchAccent": "副詞[614]",
    "hanViet": "HÁN TỰ 614",
    "meaning": "Thuật ngữ Mimikara N3 số 614 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 614 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-025",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 25,
    "word": "副詞_615",
    "reading": "副詞よみ615",
    "pitchAccent": "副詞[615]",
    "hanViet": "HÁN TỰ 615",
    "meaning": "Thuật ngữ Mimikara N3 số 615 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 615 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-026",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 26,
    "word": "副詞_616",
    "reading": "副詞よみ616",
    "pitchAccent": "副詞[616]",
    "hanViet": "HÁN TỰ 616",
    "meaning": "Thuật ngữ Mimikara N3 số 616 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 616 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-027",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 27,
    "word": "副詞_617",
    "reading": "副詞よみ617",
    "pitchAccent": "副詞[617]",
    "hanViet": "HÁN TỰ 617",
    "meaning": "Thuật ngữ Mimikara N3 số 617 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 617 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-028",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 28,
    "word": "副詞_618",
    "reading": "副詞よみ618",
    "pitchAccent": "副詞[618]",
    "hanViet": "HÁN TỰ 618",
    "meaning": "Thuật ngữ Mimikara N3 số 618 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 618 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-029",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 29,
    "word": "副詞_619",
    "reading": "副詞よみ619",
    "pitchAccent": "副詞[619]",
    "hanViet": "HÁN TỰ 619",
    "meaning": "Thuật ngữ Mimikara N3 số 619 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 619 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-030",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 30,
    "word": "副詞_620",
    "reading": "副詞よみ620",
    "pitchAccent": "副詞[620]",
    "hanViet": "HÁN TỰ 620",
    "meaning": "Thuật ngữ Mimikara N3 số 620 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 620 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-031",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 31,
    "word": "副詞_621",
    "reading": "副詞よみ621",
    "pitchAccent": "副詞[621]",
    "hanViet": "HÁN TỰ 621",
    "meaning": "Thuật ngữ Mimikara N3 số 621 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 621 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-032",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 32,
    "word": "副詞_622",
    "reading": "副詞よみ622",
    "pitchAccent": "副詞[622]",
    "hanViet": "HÁN TỰ 622",
    "meaning": "Thuật ngữ Mimikara N3 số 622 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 622 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-033",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 33,
    "word": "副詞_623",
    "reading": "副詞よみ623",
    "pitchAccent": "副詞[623]",
    "hanViet": "HÁN TỰ 623",
    "meaning": "Thuật ngữ Mimikara N3 số 623 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 623 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-034",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 34,
    "word": "副詞_624",
    "reading": "副詞よみ624",
    "pitchAccent": "副詞[624]",
    "hanViet": "HÁN TỰ 624",
    "meaning": "Thuật ngữ Mimikara N3 số 624 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 624 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-035",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 35,
    "word": "副詞_625",
    "reading": "副詞よみ625",
    "pitchAccent": "副詞[625]",
    "hanViet": "HÁN TỰ 625",
    "meaning": "Thuật ngữ Mimikara N3 số 625 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 625 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-036",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 36,
    "word": "副詞_626",
    "reading": "副詞よみ626",
    "pitchAccent": "副詞[626]",
    "hanViet": "HÁN TỰ 626",
    "meaning": "Thuật ngữ Mimikara N3 số 626 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 626 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-037",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 37,
    "word": "副詞_627",
    "reading": "副詞よみ627",
    "pitchAccent": "副詞[627]",
    "hanViet": "HÁN TỰ 627",
    "meaning": "Thuật ngữ Mimikara N3 số 627 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 627 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-038",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 38,
    "word": "副詞_628",
    "reading": "副詞よみ628",
    "pitchAccent": "副詞[628]",
    "hanViet": "HÁN TỰ 628",
    "meaning": "Thuật ngữ Mimikara N3 số 628 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 628 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-039",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 39,
    "word": "副詞_629",
    "reading": "副詞よみ629",
    "pitchAccent": "副詞[629]",
    "hanViet": "HÁN TỰ 629",
    "meaning": "Thuật ngữ Mimikara N3 số 629 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 629 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-040",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 40,
    "word": "副詞_630",
    "reading": "副詞よみ630",
    "pitchAccent": "副詞[630]",
    "hanViet": "HÁN TỰ 630",
    "meaning": "Thuật ngữ Mimikara N3 số 630 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 630 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-041",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 41,
    "word": "副詞_631",
    "reading": "副詞よみ631",
    "pitchAccent": "副詞[631]",
    "hanViet": "HÁN TỰ 631",
    "meaning": "Thuật ngữ Mimikara N3 số 631 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第41番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい41ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 631 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-042",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 42,
    "word": "副詞_632",
    "reading": "副詞よみ632",
    "pitchAccent": "副詞[632]",
    "hanViet": "HÁN TỰ 632",
    "meaning": "Thuật ngữ Mimikara N3 số 632 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第42番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい42ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 632 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-043",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 43,
    "word": "副詞_633",
    "reading": "副詞よみ633",
    "pitchAccent": "副詞[633]",
    "hanViet": "HÁN TỰ 633",
    "meaning": "Thuật ngữ Mimikara N3 số 633 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第43番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい43ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 633 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-044",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 44,
    "word": "副詞_634",
    "reading": "副詞よみ634",
    "pitchAccent": "副詞[634]",
    "hanViet": "HÁN TỰ 634",
    "meaning": "Thuật ngữ Mimikara N3 số 634 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第44番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい44ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 634 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-045",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 45,
    "word": "副詞_635",
    "reading": "副詞よみ635",
    "pitchAccent": "副詞[635]",
    "hanViet": "HÁN TỰ 635",
    "meaning": "Thuật ngữ Mimikara N3 số 635 thuộc Unit 8 | 副詞 A",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの第45番目の語彙を活用した例文です。",
      "furigana": "Unit 8 | 副詞 Aの だい45ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 635 của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-11-001",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 1,
    "word": "社会名詞_636",
    "reading": "社会名詞よみ636",
    "pitchAccent": "社会名詞[636]",
    "hanViet": "HÁN TỰ 636",
    "meaning": "Thuật ngữ Mimikara N3 số 636 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 636 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-002",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 2,
    "word": "社会名詞_637",
    "reading": "社会名詞よみ637",
    "pitchAccent": "社会名詞[637]",
    "hanViet": "HÁN TỰ 637",
    "meaning": "Thuật ngữ Mimikara N3 số 637 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 637 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-003",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 3,
    "word": "社会名詞_638",
    "reading": "社会名詞よみ638",
    "pitchAccent": "社会名詞[638]",
    "hanViet": "HÁN TỰ 638",
    "meaning": "Thuật ngữ Mimikara N3 số 638 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 638 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-004",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 4,
    "word": "社会名詞_639",
    "reading": "社会名詞よみ639",
    "pitchAccent": "社会名詞[639]",
    "hanViet": "HÁN TỰ 639",
    "meaning": "Thuật ngữ Mimikara N3 số 639 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 639 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-005",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 5,
    "word": "社会名詞_640",
    "reading": "社会名詞よみ640",
    "pitchAccent": "社会名詞[640]",
    "hanViet": "HÁN TỰ 640",
    "meaning": "Thuật ngữ Mimikara N3 số 640 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 640 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-006",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 6,
    "word": "社会名詞_641",
    "reading": "社会名詞よみ641",
    "pitchAccent": "社会名詞[641]",
    "hanViet": "HÁN TỰ 641",
    "meaning": "Thuật ngữ Mimikara N3 số 641 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 641 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-007",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 7,
    "word": "社会名詞_642",
    "reading": "社会名詞よみ642",
    "pitchAccent": "社会名詞[642]",
    "hanViet": "HÁN TỰ 642",
    "meaning": "Thuật ngữ Mimikara N3 số 642 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 642 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-008",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 8,
    "word": "社会名詞_643",
    "reading": "社会名詞よみ643",
    "pitchAccent": "社会名詞[643]",
    "hanViet": "HÁN TỰ 643",
    "meaning": "Thuật ngữ Mimikara N3 số 643 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 643 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-009",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 9,
    "word": "社会名詞_644",
    "reading": "社会名詞よみ644",
    "pitchAccent": "社会名詞[644]",
    "hanViet": "HÁN TỰ 644",
    "meaning": "Thuật ngữ Mimikara N3 số 644 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 644 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-010",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 10,
    "word": "社会名詞_645",
    "reading": "社会名詞よみ645",
    "pitchAccent": "社会名詞[645]",
    "hanViet": "HÁN TỰ 645",
    "meaning": "Thuật ngữ Mimikara N3 số 645 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 645 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-011",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 11,
    "word": "社会名詞_646",
    "reading": "社会名詞よみ646",
    "pitchAccent": "社会名詞[646]",
    "hanViet": "HÁN TỰ 646",
    "meaning": "Thuật ngữ Mimikara N3 số 646 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 646 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-012",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 12,
    "word": "社会名詞_647",
    "reading": "社会名詞よみ647",
    "pitchAccent": "社会名詞[647]",
    "hanViet": "HÁN TỰ 647",
    "meaning": "Thuật ngữ Mimikara N3 số 647 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 647 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-013",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 13,
    "word": "社会名詞_648",
    "reading": "社会名詞よみ648",
    "pitchAccent": "社会名詞[648]",
    "hanViet": "HÁN TỰ 648",
    "meaning": "Thuật ngữ Mimikara N3 số 648 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 648 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-014",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 14,
    "word": "社会名詞_649",
    "reading": "社会名詞よみ649",
    "pitchAccent": "社会名詞[649]",
    "hanViet": "HÁN TỰ 649",
    "meaning": "Thuật ngữ Mimikara N3 số 649 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 649 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-015",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 15,
    "word": "社会名詞_650",
    "reading": "社会名詞よみ650",
    "pitchAccent": "社会名詞[650]",
    "hanViet": "HÁN TỰ 650",
    "meaning": "Thuật ngữ Mimikara N3 số 650 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 650 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-016",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 16,
    "word": "社会名詞_651",
    "reading": "社会名詞よみ651",
    "pitchAccent": "社会名詞[651]",
    "hanViet": "HÁN TỰ 651",
    "meaning": "Thuật ngữ Mimikara N3 số 651 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 651 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-017",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 17,
    "word": "社会名詞_652",
    "reading": "社会名詞よみ652",
    "pitchAccent": "社会名詞[652]",
    "hanViet": "HÁN TỰ 652",
    "meaning": "Thuật ngữ Mimikara N3 số 652 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 652 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-018",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 18,
    "word": "社会名詞_653",
    "reading": "社会名詞よみ653",
    "pitchAccent": "社会名詞[653]",
    "hanViet": "HÁN TỰ 653",
    "meaning": "Thuật ngữ Mimikara N3 số 653 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 653 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-019",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 19,
    "word": "社会名詞_654",
    "reading": "社会名詞よみ654",
    "pitchAccent": "社会名詞[654]",
    "hanViet": "HÁN TỰ 654",
    "meaning": "Thuật ngữ Mimikara N3 số 654 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 654 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-020",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 20,
    "word": "社会名詞_655",
    "reading": "社会名詞よみ655",
    "pitchAccent": "社会名詞[655]",
    "hanViet": "HÁN TỰ 655",
    "meaning": "Thuật ngữ Mimikara N3 số 655 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 655 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-021",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 21,
    "word": "社会名詞_656",
    "reading": "社会名詞よみ656",
    "pitchAccent": "社会名詞[656]",
    "hanViet": "HÁN TỰ 656",
    "meaning": "Thuật ngữ Mimikara N3 số 656 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 656 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-022",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 22,
    "word": "社会名詞_657",
    "reading": "社会名詞よみ657",
    "pitchAccent": "社会名詞[657]",
    "hanViet": "HÁN TỰ 657",
    "meaning": "Thuật ngữ Mimikara N3 số 657 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 657 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-023",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 23,
    "word": "社会名詞_658",
    "reading": "社会名詞よみ658",
    "pitchAccent": "社会名詞[658]",
    "hanViet": "HÁN TỰ 658",
    "meaning": "Thuật ngữ Mimikara N3 số 658 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 658 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-024",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 24,
    "word": "社会名詞_659",
    "reading": "社会名詞よみ659",
    "pitchAccent": "社会名詞[659]",
    "hanViet": "HÁN TỰ 659",
    "meaning": "Thuật ngữ Mimikara N3 số 659 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 659 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-025",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 25,
    "word": "社会名詞_660",
    "reading": "社会名詞よみ660",
    "pitchAccent": "社会名詞[660]",
    "hanViet": "HÁN TỰ 660",
    "meaning": "Thuật ngữ Mimikara N3 số 660 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 660 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-026",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 26,
    "word": "社会名詞_661",
    "reading": "社会名詞よみ661",
    "pitchAccent": "社会名詞[661]",
    "hanViet": "HÁN TỰ 661",
    "meaning": "Thuật ngữ Mimikara N3 số 661 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 661 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-027",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 27,
    "word": "社会名詞_662",
    "reading": "社会名詞よみ662",
    "pitchAccent": "社会名詞[662]",
    "hanViet": "HÁN TỰ 662",
    "meaning": "Thuật ngữ Mimikara N3 số 662 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 662 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-028",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 28,
    "word": "社会名詞_663",
    "reading": "社会名詞よみ663",
    "pitchAccent": "社会名詞[663]",
    "hanViet": "HÁN TỰ 663",
    "meaning": "Thuật ngữ Mimikara N3 số 663 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 663 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-029",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 29,
    "word": "社会名詞_664",
    "reading": "社会名詞よみ664",
    "pitchAccent": "社会名詞[664]",
    "hanViet": "HÁN TỰ 664",
    "meaning": "Thuật ngữ Mimikara N3 số 664 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 664 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-030",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 30,
    "word": "社会名詞_665",
    "reading": "社会名詞よみ665",
    "pitchAccent": "社会名詞[665]",
    "hanViet": "HÁN TỰ 665",
    "meaning": "Thuật ngữ Mimikara N3 số 665 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 665 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-031",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 31,
    "word": "社会名詞_666",
    "reading": "社会名詞よみ666",
    "pitchAccent": "社会名詞[666]",
    "hanViet": "HÁN TỰ 666",
    "meaning": "Thuật ngữ Mimikara N3 số 666 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 666 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-032",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 32,
    "word": "社会名詞_667",
    "reading": "社会名詞よみ667",
    "pitchAccent": "社会名詞[667]",
    "hanViet": "HÁN TỰ 667",
    "meaning": "Thuật ngữ Mimikara N3 số 667 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 667 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-033",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 33,
    "word": "社会名詞_668",
    "reading": "社会名詞よみ668",
    "pitchAccent": "社会名詞[668]",
    "hanViet": "HÁN TỰ 668",
    "meaning": "Thuật ngữ Mimikara N3 số 668 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 668 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-034",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 34,
    "word": "社会名詞_669",
    "reading": "社会名詞よみ669",
    "pitchAccent": "社会名詞[669]",
    "hanViet": "HÁN TỰ 669",
    "meaning": "Thuật ngữ Mimikara N3 số 669 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 669 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-035",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 35,
    "word": "社会名詞_670",
    "reading": "社会名詞よみ670",
    "pitchAccent": "社会名詞[670]",
    "hanViet": "HÁN TỰ 670",
    "meaning": "Thuật ngữ Mimikara N3 số 670 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 670 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-036",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 36,
    "word": "社会名詞_671",
    "reading": "社会名詞よみ671",
    "pitchAccent": "社会名詞[671]",
    "hanViet": "HÁN TỰ 671",
    "meaning": "Thuật ngữ Mimikara N3 số 671 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 671 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-037",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 37,
    "word": "社会名詞_672",
    "reading": "社会名詞よみ672",
    "pitchAccent": "社会名詞[672]",
    "hanViet": "HÁN TỰ 672",
    "meaning": "Thuật ngữ Mimikara N3 số 672 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 672 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-038",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 38,
    "word": "社会名詞_673",
    "reading": "社会名詞よみ673",
    "pitchAccent": "社会名詞[673]",
    "hanViet": "HÁN TỰ 673",
    "meaning": "Thuật ngữ Mimikara N3 số 673 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 673 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-039",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 39,
    "word": "社会名詞_674",
    "reading": "社会名詞よみ674",
    "pitchAccent": "社会名詞[674]",
    "hanViet": "HÁN TỰ 674",
    "meaning": "Thuật ngữ Mimikara N3 số 674 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 674 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-040",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 40,
    "word": "社会名詞_675",
    "reading": "社会名詞よみ675",
    "pitchAccent": "社会名詞[675]",
    "hanViet": "HÁN TỰ 675",
    "meaning": "Thuật ngữ Mimikara N3 số 675 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 675 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-041",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 41,
    "word": "社会名詞_676",
    "reading": "社会名詞よみ676",
    "pitchAccent": "社会名詞[676]",
    "hanViet": "HÁN TỰ 676",
    "meaning": "Thuật ngữ Mimikara N3 số 676 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第41番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい41ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 676 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-042",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 42,
    "word": "社会名詞_677",
    "reading": "社会名詞よみ677",
    "pitchAccent": "社会名詞[677]",
    "hanViet": "HÁN TỰ 677",
    "meaning": "Thuật ngữ Mimikara N3 số 677 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第42番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい42ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 677 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-043",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 43,
    "word": "社会名詞_678",
    "reading": "社会名詞よみ678",
    "pitchAccent": "社会名詞[678]",
    "hanViet": "HÁN TỰ 678",
    "meaning": "Thuật ngữ Mimikara N3 số 678 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第43番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい43ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 678 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-044",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 44,
    "word": "社会名詞_679",
    "reading": "社会名詞よみ679",
    "pitchAccent": "社会名詞[679]",
    "hanViet": "HÁN TỰ 679",
    "meaning": "Thuật ngữ Mimikara N3 số 679 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第44番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい44ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 679 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-045",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 45,
    "word": "社会名詞_680",
    "reading": "社会名詞よみ680",
    "pitchAccent": "社会名詞[680]",
    "hanViet": "HÁN TỰ 680",
    "meaning": "Thuật ngữ Mimikara N3 số 680 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第45番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい45ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 680 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-046",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 46,
    "word": "社会名詞_681",
    "reading": "社会名詞よみ681",
    "pitchAccent": "社会名詞[681]",
    "hanViet": "HÁN TỰ 681",
    "meaning": "Thuật ngữ Mimikara N3 số 681 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第46番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい46ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 681 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-047",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 47,
    "word": "社会名詞_682",
    "reading": "社会名詞よみ682",
    "pitchAccent": "社会名詞[682]",
    "hanViet": "HÁN TỰ 682",
    "meaning": "Thuật ngữ Mimikara N3 số 682 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第47番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい47ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 682 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-048",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 48,
    "word": "社会名詞_683",
    "reading": "社会名詞よみ683",
    "pitchAccent": "社会名詞[683]",
    "hanViet": "HÁN TỰ 683",
    "meaning": "Thuật ngữ Mimikara N3 số 683 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第48番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい48ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 683 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-049",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 49,
    "word": "社会名詞_684",
    "reading": "社会名詞よみ684",
    "pitchAccent": "社会名詞[684]",
    "hanViet": "HÁN TỰ 684",
    "meaning": "Thuật ngữ Mimikara N3 số 684 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第49番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい49ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 684 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-050",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 50,
    "word": "社会名詞_685",
    "reading": "社会名詞よみ685",
    "pitchAccent": "社会名詞[685]",
    "hanViet": "HÁN TỰ 685",
    "meaning": "Thuật ngữ Mimikara N3 số 685 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第50番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい50ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 685 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-051",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 51,
    "word": "社会名詞_686",
    "reading": "社会名詞よみ686",
    "pitchAccent": "社会名詞[686]",
    "hanViet": "HÁN TỰ 686",
    "meaning": "Thuật ngữ Mimikara N3 số 686 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第51番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい51ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 686 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-052",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 52,
    "word": "社会名詞_687",
    "reading": "社会名詞よみ687",
    "pitchAccent": "社会名詞[687]",
    "hanViet": "HÁN TỰ 687",
    "meaning": "Thuật ngữ Mimikara N3 số 687 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第52番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい52ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 687 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-053",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 53,
    "word": "社会名詞_688",
    "reading": "社会名詞よみ688",
    "pitchAccent": "社会名詞[688]",
    "hanViet": "HÁN TỰ 688",
    "meaning": "Thuật ngữ Mimikara N3 số 688 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第53番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい53ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 688 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-054",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 54,
    "word": "社会名詞_689",
    "reading": "社会名詞よみ689",
    "pitchAccent": "社会名詞[689]",
    "hanViet": "HÁN TỰ 689",
    "meaning": "Thuật ngữ Mimikara N3 số 689 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第54番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい54ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 689 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-055",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 55,
    "word": "社会名詞_690",
    "reading": "社会名詞よみ690",
    "pitchAccent": "社会名詞[690]",
    "hanViet": "HÁN TỰ 690",
    "meaning": "Thuật ngữ Mimikara N3 số 690 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第55番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい55ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 690 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-056",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 56,
    "word": "社会名詞_691",
    "reading": "社会名詞よみ691",
    "pitchAccent": "社会名詞[691]",
    "hanViet": "HÁN TỰ 691",
    "meaning": "Thuật ngữ Mimikara N3 số 691 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第56番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい56ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 691 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-057",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 57,
    "word": "社会名詞_692",
    "reading": "社会名詞よみ692",
    "pitchAccent": "社会名詞[692]",
    "hanViet": "HÁN TỰ 692",
    "meaning": "Thuật ngữ Mimikara N3 số 692 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第57番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい57ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 692 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-058",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 58,
    "word": "社会名詞_693",
    "reading": "社会名詞よみ693",
    "pitchAccent": "社会名詞[693]",
    "hanViet": "HÁN TỰ 693",
    "meaning": "Thuật ngữ Mimikara N3 số 693 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第58番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい58ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 693 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-059",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 59,
    "word": "社会名詞_694",
    "reading": "社会名詞よみ694",
    "pitchAccent": "社会名詞[694]",
    "hanViet": "HÁN TỰ 694",
    "meaning": "Thuật ngữ Mimikara N3 số 694 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第59番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい59ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 694 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-060",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 60,
    "word": "社会名詞_695",
    "reading": "社会名詞よみ695",
    "pitchAccent": "社会名詞[695]",
    "hanViet": "HÁN TỰ 695",
    "meaning": "Thuật ngữ Mimikara N3 số 695 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第60番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい60ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 695 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-061",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 61,
    "word": "社会名詞_696",
    "reading": "社会名詞よみ696",
    "pitchAccent": "社会名詞[696]",
    "hanViet": "HÁN TỰ 696",
    "meaning": "Thuật ngữ Mimikara N3 số 696 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第61番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい61ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 696 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-062",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 62,
    "word": "社会名詞_697",
    "reading": "社会名詞よみ697",
    "pitchAccent": "社会名詞[697]",
    "hanViet": "HÁN TỰ 697",
    "meaning": "Thuật ngữ Mimikara N3 số 697 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第62番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい62ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 697 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-063",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 63,
    "word": "社会名詞_698",
    "reading": "社会名詞よみ698",
    "pitchAccent": "社会名詞[698]",
    "hanViet": "HÁN TỰ 698",
    "meaning": "Thuật ngữ Mimikara N3 số 698 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第63番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい63ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 698 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-064",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 64,
    "word": "社会名詞_699",
    "reading": "社会名詞よみ699",
    "pitchAccent": "社会名詞[699]",
    "hanViet": "HÁN TỰ 699",
    "meaning": "Thuật ngữ Mimikara N3 số 699 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第64番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい64ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 699 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-065",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 65,
    "word": "社会名詞_700",
    "reading": "社会名詞よみ700",
    "pitchAccent": "社会名詞[700]",
    "hanViet": "HÁN TỰ 700",
    "meaning": "Thuật ngữ Mimikara N3 số 700 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第65番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい65ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 700 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-066",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 66,
    "word": "社会名詞_701",
    "reading": "社会名詞よみ701",
    "pitchAccent": "社会名詞[701]",
    "hanViet": "HÁN TỰ 701",
    "meaning": "Thuật ngữ Mimikara N3 số 701 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第66番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい66ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 701 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-067",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 67,
    "word": "社会名詞_702",
    "reading": "社会名詞よみ702",
    "pitchAccent": "社会名詞[702]",
    "hanViet": "HÁN TỰ 702",
    "meaning": "Thuật ngữ Mimikara N3 số 702 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第67番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい67ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 702 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-068",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 68,
    "word": "社会名詞_703",
    "reading": "社会名詞よみ703",
    "pitchAccent": "社会名詞[703]",
    "hanViet": "HÁN TỰ 703",
    "meaning": "Thuật ngữ Mimikara N3 số 703 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第68番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい68ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 703 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-069",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 69,
    "word": "社会名詞_704",
    "reading": "社会名詞よみ704",
    "pitchAccent": "社会名詞[704]",
    "hanViet": "HÁN TỰ 704",
    "meaning": "Thuật ngữ Mimikara N3 số 704 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第69番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい69ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 704 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-070",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 70,
    "word": "社会名詞_705",
    "reading": "社会名詞よみ705",
    "pitchAccent": "社会名詞[705]",
    "hanViet": "HÁN TỰ 705",
    "meaning": "Thuật ngữ Mimikara N3 số 705 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第70番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい70ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 705 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-071",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 71,
    "word": "社会名詞_706",
    "reading": "社会名詞よみ706",
    "pitchAccent": "社会名詞[706]",
    "hanViet": "HÁN TỰ 706",
    "meaning": "Thuật ngữ Mimikara N3 số 706 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第71番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい71ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 706 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-072",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 72,
    "word": "社会名詞_707",
    "reading": "社会名詞よみ707",
    "pitchAccent": "社会名詞[707]",
    "hanViet": "HÁN TỰ 707",
    "meaning": "Thuật ngữ Mimikara N3 số 707 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第72番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい72ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 707 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-073",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 73,
    "word": "社会名詞_708",
    "reading": "社会名詞よみ708",
    "pitchAccent": "社会名詞[708]",
    "hanViet": "HÁN TỰ 708",
    "meaning": "Thuật ngữ Mimikara N3 số 708 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第73番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい73ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 708 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-074",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 74,
    "word": "社会名詞_709",
    "reading": "社会名詞よみ709",
    "pitchAccent": "社会名詞[709]",
    "hanViet": "HÁN TỰ 709",
    "meaning": "Thuật ngữ Mimikara N3 số 709 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第74番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい74ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 709 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-075",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 75,
    "word": "社会名詞_710",
    "reading": "社会名詞よみ710",
    "pitchAccent": "社会名詞[710]",
    "hanViet": "HÁN TỰ 710",
    "meaning": "Thuật ngữ Mimikara N3 số 710 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第75番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい75ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 710 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-076",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 76,
    "word": "社会名詞_711",
    "reading": "社会名詞よみ711",
    "pitchAccent": "社会名詞[711]",
    "hanViet": "HÁN TỰ 711",
    "meaning": "Thuật ngữ Mimikara N3 số 711 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第76番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい76ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 711 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-077",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 77,
    "word": "社会名詞_712",
    "reading": "社会名詞よみ712",
    "pitchAccent": "社会名詞[712]",
    "hanViet": "HÁN TỰ 712",
    "meaning": "Thuật ngữ Mimikara N3 số 712 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第77番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい77ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 712 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-078",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 78,
    "word": "社会名詞_713",
    "reading": "社会名詞よみ713",
    "pitchAccent": "社会名詞[713]",
    "hanViet": "HÁN TỰ 713",
    "meaning": "Thuật ngữ Mimikara N3 số 713 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第78番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい78ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 713 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-079",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 79,
    "word": "社会名詞_714",
    "reading": "社会名詞よみ714",
    "pitchAccent": "社会名詞[714]",
    "hanViet": "HÁN TỰ 714",
    "meaning": "Thuật ngữ Mimikara N3 số 714 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第79番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい79ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 714 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-080",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 80,
    "word": "社会名詞_715",
    "reading": "社会名詞よみ715",
    "pitchAccent": "社会名詞[715]",
    "hanViet": "HÁN TỰ 715",
    "meaning": "Thuật ngữ Mimikara N3 số 715 thuộc Unit 9 | 名詞 C",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの第80番目の語彙を活用した例文です。",
      "furigana": "Unit 9 | 名詞 Cの だい80ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 715 của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-12-001",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 1,
    "word": "複合動詞_716",
    "reading": "複合動詞よみ716",
    "pitchAccent": "複合動詞[716]",
    "hanViet": "HÁN TỰ 716",
    "meaning": "Thuật ngữ Mimikara N3 số 716 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 716 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-002",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 2,
    "word": "複合動詞_717",
    "reading": "複合動詞よみ717",
    "pitchAccent": "複合動詞[717]",
    "hanViet": "HÁN TỰ 717",
    "meaning": "Thuật ngữ Mimikara N3 số 717 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 717 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-003",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 3,
    "word": "複合動詞_718",
    "reading": "複合動詞よみ718",
    "pitchAccent": "複合動詞[718]",
    "hanViet": "HÁN TỰ 718",
    "meaning": "Thuật ngữ Mimikara N3 số 718 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 718 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-004",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 4,
    "word": "複合動詞_719",
    "reading": "複合動詞よみ719",
    "pitchAccent": "複合動詞[719]",
    "hanViet": "HÁN TỰ 719",
    "meaning": "Thuật ngữ Mimikara N3 số 719 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 719 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-005",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 5,
    "word": "複合動詞_720",
    "reading": "複合動詞よみ720",
    "pitchAccent": "複合動詞[720]",
    "hanViet": "HÁN TỰ 720",
    "meaning": "Thuật ngữ Mimikara N3 số 720 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 720 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-006",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 6,
    "word": "複合動詞_721",
    "reading": "複合動詞よみ721",
    "pitchAccent": "複合動詞[721]",
    "hanViet": "HÁN TỰ 721",
    "meaning": "Thuật ngữ Mimikara N3 số 721 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 721 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-007",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 7,
    "word": "複合動詞_722",
    "reading": "複合動詞よみ722",
    "pitchAccent": "複合動詞[722]",
    "hanViet": "HÁN TỰ 722",
    "meaning": "Thuật ngữ Mimikara N3 số 722 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 722 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-008",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 8,
    "word": "複合動詞_723",
    "reading": "複合動詞よみ723",
    "pitchAccent": "複合動詞[723]",
    "hanViet": "HÁN TỰ 723",
    "meaning": "Thuật ngữ Mimikara N3 số 723 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 723 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-009",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 9,
    "word": "複合動詞_724",
    "reading": "複合動詞よみ724",
    "pitchAccent": "複合動詞[724]",
    "hanViet": "HÁN TỰ 724",
    "meaning": "Thuật ngữ Mimikara N3 số 724 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 724 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-010",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 10,
    "word": "複合動詞_725",
    "reading": "複合動詞よみ725",
    "pitchAccent": "複合動詞[725]",
    "hanViet": "HÁN TỰ 725",
    "meaning": "Thuật ngữ Mimikara N3 số 725 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 725 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-011",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 11,
    "word": "複合動詞_726",
    "reading": "複合動詞よみ726",
    "pitchAccent": "複合動詞[726]",
    "hanViet": "HÁN TỰ 726",
    "meaning": "Thuật ngữ Mimikara N3 số 726 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 726 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-012",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 12,
    "word": "複合動詞_727",
    "reading": "複合動詞よみ727",
    "pitchAccent": "複合動詞[727]",
    "hanViet": "HÁN TỰ 727",
    "meaning": "Thuật ngữ Mimikara N3 số 727 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 727 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-013",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 13,
    "word": "複合動詞_728",
    "reading": "複合動詞よみ728",
    "pitchAccent": "複合動詞[728]",
    "hanViet": "HÁN TỰ 728",
    "meaning": "Thuật ngữ Mimikara N3 số 728 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 728 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-014",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 14,
    "word": "複合動詞_729",
    "reading": "複合動詞よみ729",
    "pitchAccent": "複合動詞[729]",
    "hanViet": "HÁN TỰ 729",
    "meaning": "Thuật ngữ Mimikara N3 số 729 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 729 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-015",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 15,
    "word": "複合動詞_730",
    "reading": "複合動詞よみ730",
    "pitchAccent": "複合動詞[730]",
    "hanViet": "HÁN TỰ 730",
    "meaning": "Thuật ngữ Mimikara N3 số 730 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 730 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-016",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 16,
    "word": "複合動詞_731",
    "reading": "複合動詞よみ731",
    "pitchAccent": "複合動詞[731]",
    "hanViet": "HÁN TỰ 731",
    "meaning": "Thuật ngữ Mimikara N3 số 731 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 731 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-017",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 17,
    "word": "複合動詞_732",
    "reading": "複合動詞よみ732",
    "pitchAccent": "複合動詞[732]",
    "hanViet": "HÁN TỰ 732",
    "meaning": "Thuật ngữ Mimikara N3 số 732 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 732 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-018",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 18,
    "word": "複合動詞_733",
    "reading": "複合動詞よみ733",
    "pitchAccent": "複合動詞[733]",
    "hanViet": "HÁN TỰ 733",
    "meaning": "Thuật ngữ Mimikara N3 số 733 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 733 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-019",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 19,
    "word": "複合動詞_734",
    "reading": "複合動詞よみ734",
    "pitchAccent": "複合動詞[734]",
    "hanViet": "HÁN TỰ 734",
    "meaning": "Thuật ngữ Mimikara N3 số 734 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 734 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-020",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 20,
    "word": "複合動詞_735",
    "reading": "複合動詞よみ735",
    "pitchAccent": "複合動詞[735]",
    "hanViet": "HÁN TỰ 735",
    "meaning": "Thuật ngữ Mimikara N3 số 735 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 735 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-021",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 21,
    "word": "複合動詞_736",
    "reading": "複合動詞よみ736",
    "pitchAccent": "複合動詞[736]",
    "hanViet": "HÁN TỰ 736",
    "meaning": "Thuật ngữ Mimikara N3 số 736 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 736 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-022",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 22,
    "word": "複合動詞_737",
    "reading": "複合動詞よみ737",
    "pitchAccent": "複合動詞[737]",
    "hanViet": "HÁN TỰ 737",
    "meaning": "Thuật ngữ Mimikara N3 số 737 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 737 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-023",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 23,
    "word": "複合動詞_738",
    "reading": "複合動詞よみ738",
    "pitchAccent": "複合動詞[738]",
    "hanViet": "HÁN TỰ 738",
    "meaning": "Thuật ngữ Mimikara N3 số 738 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 738 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-024",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 24,
    "word": "複合動詞_739",
    "reading": "複合動詞よみ739",
    "pitchAccent": "複合動詞[739]",
    "hanViet": "HÁN TỰ 739",
    "meaning": "Thuật ngữ Mimikara N3 số 739 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 739 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-025",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 25,
    "word": "複合動詞_740",
    "reading": "複合動詞よみ740",
    "pitchAccent": "複合動詞[740]",
    "hanViet": "HÁN TỰ 740",
    "meaning": "Thuật ngữ Mimikara N3 số 740 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 740 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-026",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 26,
    "word": "複合動詞_741",
    "reading": "複合動詞よみ741",
    "pitchAccent": "複合動詞[741]",
    "hanViet": "HÁN TỰ 741",
    "meaning": "Thuật ngữ Mimikara N3 số 741 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 741 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-027",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 27,
    "word": "複合動詞_742",
    "reading": "複合動詞よみ742",
    "pitchAccent": "複合動詞[742]",
    "hanViet": "HÁN TỰ 742",
    "meaning": "Thuật ngữ Mimikara N3 số 742 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 742 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-028",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 28,
    "word": "複合動詞_743",
    "reading": "複合動詞よみ743",
    "pitchAccent": "複合動詞[743]",
    "hanViet": "HÁN TỰ 743",
    "meaning": "Thuật ngữ Mimikara N3 số 743 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 743 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-029",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 29,
    "word": "複合動詞_744",
    "reading": "複合動詞よみ744",
    "pitchAccent": "複合動詞[744]",
    "hanViet": "HÁN TỰ 744",
    "meaning": "Thuật ngữ Mimikara N3 số 744 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 744 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-030",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 30,
    "word": "複合動詞_745",
    "reading": "複合動詞よみ745",
    "pitchAccent": "複合動詞[745]",
    "hanViet": "HÁN TỰ 745",
    "meaning": "Thuật ngữ Mimikara N3 số 745 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 745 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-031",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 31,
    "word": "複合動詞_746",
    "reading": "複合動詞よみ746",
    "pitchAccent": "複合動詞[746]",
    "hanViet": "HÁN TỰ 746",
    "meaning": "Thuật ngữ Mimikara N3 số 746 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 746 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-032",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 32,
    "word": "複合動詞_747",
    "reading": "複合動詞よみ747",
    "pitchAccent": "複合動詞[747]",
    "hanViet": "HÁN TỰ 747",
    "meaning": "Thuật ngữ Mimikara N3 số 747 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 747 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-033",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 33,
    "word": "複合動詞_748",
    "reading": "複合動詞よみ748",
    "pitchAccent": "複合動詞[748]",
    "hanViet": "HÁN TỰ 748",
    "meaning": "Thuật ngữ Mimikara N3 số 748 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 748 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-034",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 34,
    "word": "複合動詞_749",
    "reading": "複合動詞よみ749",
    "pitchAccent": "複合動詞[749]",
    "hanViet": "HÁN TỰ 749",
    "meaning": "Thuật ngữ Mimikara N3 số 749 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 749 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-035",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 35,
    "word": "複合動詞_750",
    "reading": "複合動詞よみ750",
    "pitchAccent": "複合動詞[750]",
    "hanViet": "HÁN TỰ 750",
    "meaning": "Thuật ngữ Mimikara N3 số 750 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 750 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-036",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 36,
    "word": "複合動詞_751",
    "reading": "複合動詞よみ751",
    "pitchAccent": "複合動詞[751]",
    "hanViet": "HÁN TỰ 751",
    "meaning": "Thuật ngữ Mimikara N3 số 751 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 751 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-037",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 37,
    "word": "複合動詞_752",
    "reading": "複合動詞よみ752",
    "pitchAccent": "複合動詞[752]",
    "hanViet": "HÁN TỰ 752",
    "meaning": "Thuật ngữ Mimikara N3 số 752 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 752 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-038",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 38,
    "word": "複合動詞_753",
    "reading": "複合動詞よみ753",
    "pitchAccent": "複合動詞[753]",
    "hanViet": "HÁN TỰ 753",
    "meaning": "Thuật ngữ Mimikara N3 số 753 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 753 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-039",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 39,
    "word": "複合動詞_754",
    "reading": "複合動詞よみ754",
    "pitchAccent": "複合動詞[754]",
    "hanViet": "HÁN TỰ 754",
    "meaning": "Thuật ngữ Mimikara N3 số 754 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 754 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-040",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 40,
    "word": "複合動詞_755",
    "reading": "複合動詞よみ755",
    "pitchAccent": "複合動詞[755]",
    "hanViet": "HÁN TỰ 755",
    "meaning": "Thuật ngữ Mimikara N3 số 755 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 755 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-041",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 41,
    "word": "複合動詞_756",
    "reading": "複合動詞よみ756",
    "pitchAccent": "複合動詞[756]",
    "hanViet": "HÁN TỰ 756",
    "meaning": "Thuật ngữ Mimikara N3 số 756 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第41番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい41ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 756 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-042",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 42,
    "word": "複合動詞_757",
    "reading": "複合動詞よみ757",
    "pitchAccent": "複合動詞[757]",
    "hanViet": "HÁN TỰ 757",
    "meaning": "Thuật ngữ Mimikara N3 số 757 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第42番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい42ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 757 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-043",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 43,
    "word": "複合動詞_758",
    "reading": "複合動詞よみ758",
    "pitchAccent": "複合動詞[758]",
    "hanViet": "HÁN TỰ 758",
    "meaning": "Thuật ngữ Mimikara N3 số 758 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第43番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい43ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 758 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-044",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 44,
    "word": "複合動詞_759",
    "reading": "複合動詞よみ759",
    "pitchAccent": "複合動詞[759]",
    "hanViet": "HÁN TỰ 759",
    "meaning": "Thuật ngữ Mimikara N3 số 759 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第44番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい44ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 759 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-045",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 45,
    "word": "複合動詞_760",
    "reading": "複合動詞よみ760",
    "pitchAccent": "複合動詞[760]",
    "hanViet": "HÁN TỰ 760",
    "meaning": "Thuật ngữ Mimikara N3 số 760 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第45番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい45ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 760 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-046",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 46,
    "word": "複合動詞_761",
    "reading": "複合動詞よみ761",
    "pitchAccent": "複合動詞[761]",
    "hanViet": "HÁN TỰ 761",
    "meaning": "Thuật ngữ Mimikara N3 số 761 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第46番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい46ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 761 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-047",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 47,
    "word": "複合動詞_762",
    "reading": "複合動詞よみ762",
    "pitchAccent": "複合動詞[762]",
    "hanViet": "HÁN TỰ 762",
    "meaning": "Thuật ngữ Mimikara N3 số 762 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第47番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい47ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 762 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-048",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 48,
    "word": "複合動詞_763",
    "reading": "複合動詞よみ763",
    "pitchAccent": "複合動詞[763]",
    "hanViet": "HÁN TỰ 763",
    "meaning": "Thuật ngữ Mimikara N3 số 763 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第48番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい48ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 763 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-049",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 49,
    "word": "複合動詞_764",
    "reading": "複合動詞よみ764",
    "pitchAccent": "複合動詞[764]",
    "hanViet": "HÁN TỰ 764",
    "meaning": "Thuật ngữ Mimikara N3 số 764 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第49番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい49ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 764 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-050",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 50,
    "word": "複合動詞_765",
    "reading": "複合動詞よみ765",
    "pitchAccent": "複合動詞[765]",
    "hanViet": "HÁN TỰ 765",
    "meaning": "Thuật ngữ Mimikara N3 số 765 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第50番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい50ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 765 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-051",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 51,
    "word": "複合動詞_766",
    "reading": "複合動詞よみ766",
    "pitchAccent": "複合動詞[766]",
    "hanViet": "HÁN TỰ 766",
    "meaning": "Thuật ngữ Mimikara N3 số 766 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第51番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい51ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 766 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-052",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 52,
    "word": "複合動詞_767",
    "reading": "複合動詞よみ767",
    "pitchAccent": "複合動詞[767]",
    "hanViet": "HÁN TỰ 767",
    "meaning": "Thuật ngữ Mimikara N3 số 767 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第52番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい52ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 767 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-053",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 53,
    "word": "複合動詞_768",
    "reading": "複合動詞よみ768",
    "pitchAccent": "複合動詞[768]",
    "hanViet": "HÁN TỰ 768",
    "meaning": "Thuật ngữ Mimikara N3 số 768 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第53番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい53ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 768 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-054",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 54,
    "word": "複合動詞_769",
    "reading": "複合動詞よみ769",
    "pitchAccent": "複合動詞[769]",
    "hanViet": "HÁN TỰ 769",
    "meaning": "Thuật ngữ Mimikara N3 số 769 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第54番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい54ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 769 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-055",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 55,
    "word": "複合動詞_770",
    "reading": "複合動詞よみ770",
    "pitchAccent": "複合動詞[770]",
    "hanViet": "HÁN TỰ 770",
    "meaning": "Thuật ngữ Mimikara N3 số 770 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第55番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい55ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 770 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-056",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 56,
    "word": "複合動詞_771",
    "reading": "複合動詞よみ771",
    "pitchAccent": "複合動詞[771]",
    "hanViet": "HÁN TỰ 771",
    "meaning": "Thuật ngữ Mimikara N3 số 771 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第56番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい56ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 771 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-057",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 57,
    "word": "複合動詞_772",
    "reading": "複合動詞よみ772",
    "pitchAccent": "複合動詞[772]",
    "hanViet": "HÁN TỰ 772",
    "meaning": "Thuật ngữ Mimikara N3 số 772 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第57番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい57ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 772 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-058",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 58,
    "word": "複合動詞_773",
    "reading": "複合動詞よみ773",
    "pitchAccent": "複合動詞[773]",
    "hanViet": "HÁN TỰ 773",
    "meaning": "Thuật ngữ Mimikara N3 số 773 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第58番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい58ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 773 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-059",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 59,
    "word": "複合動詞_774",
    "reading": "複合動詞よみ774",
    "pitchAccent": "複合動詞[774]",
    "hanViet": "HÁN TỰ 774",
    "meaning": "Thuật ngữ Mimikara N3 số 774 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第59番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい59ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 774 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-060",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 60,
    "word": "複合動詞_775",
    "reading": "複合動詞よみ775",
    "pitchAccent": "複合動詞[775]",
    "hanViet": "HÁN TỰ 775",
    "meaning": "Thuật ngữ Mimikara N3 số 775 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第60番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい60ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 775 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-061",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 61,
    "word": "複合動詞_776",
    "reading": "複合動詞よみ776",
    "pitchAccent": "複合動詞[776]",
    "hanViet": "HÁN TỰ 776",
    "meaning": "Thuật ngữ Mimikara N3 số 776 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第61番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい61ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 776 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-062",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 62,
    "word": "複合動詞_777",
    "reading": "複合動詞よみ777",
    "pitchAccent": "複合動詞[777]",
    "hanViet": "HÁN TỰ 777",
    "meaning": "Thuật ngữ Mimikara N3 số 777 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第62番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい62ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 777 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-063",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 63,
    "word": "複合動詞_778",
    "reading": "複合動詞よみ778",
    "pitchAccent": "複合動詞[778]",
    "hanViet": "HÁN TỰ 778",
    "meaning": "Thuật ngữ Mimikara N3 số 778 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第63番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい63ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 778 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-064",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 64,
    "word": "複合動詞_779",
    "reading": "複合動詞よみ779",
    "pitchAccent": "複合動詞[779]",
    "hanViet": "HÁN TỰ 779",
    "meaning": "Thuật ngữ Mimikara N3 số 779 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第64番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい64ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 779 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-065",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 65,
    "word": "複合動詞_780",
    "reading": "複合動詞よみ780",
    "pitchAccent": "複合動詞[780]",
    "hanViet": "HÁN TỰ 780",
    "meaning": "Thuật ngữ Mimikara N3 số 780 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第65番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい65ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 780 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-066",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 66,
    "word": "複合動詞_781",
    "reading": "複合動詞よみ781",
    "pitchAccent": "複合動詞[781]",
    "hanViet": "HÁN TỰ 781",
    "meaning": "Thuật ngữ Mimikara N3 số 781 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第66番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい66ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 781 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-067",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 67,
    "word": "複合動詞_782",
    "reading": "複合動詞よみ782",
    "pitchAccent": "複合動詞[782]",
    "hanViet": "HÁN TỰ 782",
    "meaning": "Thuật ngữ Mimikara N3 số 782 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第67番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい67ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 782 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-068",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 68,
    "word": "複合動詞_783",
    "reading": "複合動詞よみ783",
    "pitchAccent": "複合動詞[783]",
    "hanViet": "HÁN TỰ 783",
    "meaning": "Thuật ngữ Mimikara N3 số 783 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第68番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい68ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 783 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-069",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 69,
    "word": "複合動詞_784",
    "reading": "複合動詞よみ784",
    "pitchAccent": "複合動詞[784]",
    "hanViet": "HÁN TỰ 784",
    "meaning": "Thuật ngữ Mimikara N3 số 784 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第69番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい69ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 784 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-070",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 70,
    "word": "複合動詞_785",
    "reading": "複合動詞よみ785",
    "pitchAccent": "複合動詞[785]",
    "hanViet": "HÁN TỰ 785",
    "meaning": "Thuật ngữ Mimikara N3 số 785 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第70番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい70ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 785 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-071",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 71,
    "word": "複合動詞_786",
    "reading": "複合動詞よみ786",
    "pitchAccent": "複合動詞[786]",
    "hanViet": "HÁN TỰ 786",
    "meaning": "Thuật ngữ Mimikara N3 số 786 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第71番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい71ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 786 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-072",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 72,
    "word": "複合動詞_787",
    "reading": "複合動詞よみ787",
    "pitchAccent": "複合動詞[787]",
    "hanViet": "HÁN TỰ 787",
    "meaning": "Thuật ngữ Mimikara N3 số 787 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第72番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい72ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 787 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-073",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 73,
    "word": "複合動詞_788",
    "reading": "複合動詞よみ788",
    "pitchAccent": "複合動詞[788]",
    "hanViet": "HÁN TỰ 788",
    "meaning": "Thuật ngữ Mimikara N3 số 788 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第73番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい73ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 788 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-074",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 74,
    "word": "複合動詞_789",
    "reading": "複合動詞よみ789",
    "pitchAccent": "複合動詞[789]",
    "hanViet": "HÁN TỰ 789",
    "meaning": "Thuật ngữ Mimikara N3 số 789 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第74番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい74ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 789 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-075",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 75,
    "word": "複合動詞_790",
    "reading": "複合動詞よみ790",
    "pitchAccent": "複合動詞[790]",
    "hanViet": "HÁN TỰ 790",
    "meaning": "Thuật ngữ Mimikara N3 số 790 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第75番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい75ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 790 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-076",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 76,
    "word": "複合動詞_791",
    "reading": "複合動詞よみ791",
    "pitchAccent": "複合動詞[791]",
    "hanViet": "HÁN TỰ 791",
    "meaning": "Thuật ngữ Mimikara N3 số 791 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第76番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい76ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 791 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-077",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 77,
    "word": "複合動詞_792",
    "reading": "複合動詞よみ792",
    "pitchAccent": "複合動詞[792]",
    "hanViet": "HÁN TỰ 792",
    "meaning": "Thuật ngữ Mimikara N3 số 792 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第77番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい77ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 792 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-078",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 78,
    "word": "複合動詞_793",
    "reading": "複合動詞よみ793",
    "pitchAccent": "複合動詞[793]",
    "hanViet": "HÁN TỰ 793",
    "meaning": "Thuật ngữ Mimikara N3 số 793 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第78番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい78ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 793 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-079",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 79,
    "word": "複合動詞_794",
    "reading": "複合動詞よみ794",
    "pitchAccent": "複合動詞[794]",
    "hanViet": "HÁN TỰ 794",
    "meaning": "Thuật ngữ Mimikara N3 số 794 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第79番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい79ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 794 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-080",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 80,
    "word": "複合動詞_795",
    "reading": "複合動詞よみ795",
    "pitchAccent": "複合動詞[795]",
    "hanViet": "HÁN TỰ 795",
    "meaning": "Thuật ngữ Mimikara N3 số 795 thuộc Unit 10 | 動詞 C",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの第80番目の語彙を活用した例文です。",
      "furigana": "Unit 10 | 動詞 Cの だい80ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 795 của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-13-001",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 1,
    "word": "外来語_796",
    "reading": "外来語よみ796",
    "pitchAccent": "外来語[796]",
    "hanViet": "HÁN TỰ 796",
    "meaning": "Thuật ngữ Mimikara N3 số 796 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 796 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-002",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 2,
    "word": "外来語_797",
    "reading": "外来語よみ797",
    "pitchAccent": "外来語[797]",
    "hanViet": "HÁN TỰ 797",
    "meaning": "Thuật ngữ Mimikara N3 số 797 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 797 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-003",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 3,
    "word": "外来語_798",
    "reading": "外来語よみ798",
    "pitchAccent": "外来語[798]",
    "hanViet": "HÁN TỰ 798",
    "meaning": "Thuật ngữ Mimikara N3 số 798 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 798 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-004",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 4,
    "word": "外来語_799",
    "reading": "外来語よみ799",
    "pitchAccent": "外来語[799]",
    "hanViet": "HÁN TỰ 799",
    "meaning": "Thuật ngữ Mimikara N3 số 799 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 799 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-005",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 5,
    "word": "外来語_800",
    "reading": "外来語よみ800",
    "pitchAccent": "外来語[800]",
    "hanViet": "HÁN TỰ 800",
    "meaning": "Thuật ngữ Mimikara N3 số 800 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 800 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-006",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 6,
    "word": "外来語_801",
    "reading": "外来語よみ801",
    "pitchAccent": "外来語[801]",
    "hanViet": "HÁN TỰ 801",
    "meaning": "Thuật ngữ Mimikara N3 số 801 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 801 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-007",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 7,
    "word": "外来語_802",
    "reading": "外来語よみ802",
    "pitchAccent": "外来語[802]",
    "hanViet": "HÁN TỰ 802",
    "meaning": "Thuật ngữ Mimikara N3 số 802 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 802 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-008",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 8,
    "word": "外来語_803",
    "reading": "外来語よみ803",
    "pitchAccent": "外来語[803]",
    "hanViet": "HÁN TỰ 803",
    "meaning": "Thuật ngữ Mimikara N3 số 803 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 803 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-009",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 9,
    "word": "外来語_804",
    "reading": "外来語よみ804",
    "pitchAccent": "外来語[804]",
    "hanViet": "HÁN TỰ 804",
    "meaning": "Thuật ngữ Mimikara N3 số 804 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 804 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-010",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 10,
    "word": "外来語_805",
    "reading": "外来語よみ805",
    "pitchAccent": "外来語[805]",
    "hanViet": "HÁN TỰ 805",
    "meaning": "Thuật ngữ Mimikara N3 số 805 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 805 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-011",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 11,
    "word": "外来語_806",
    "reading": "外来語よみ806",
    "pitchAccent": "外来語[806]",
    "hanViet": "HÁN TỰ 806",
    "meaning": "Thuật ngữ Mimikara N3 số 806 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 806 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-012",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 12,
    "word": "外来語_807",
    "reading": "外来語よみ807",
    "pitchAccent": "外来語[807]",
    "hanViet": "HÁN TỰ 807",
    "meaning": "Thuật ngữ Mimikara N3 số 807 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 807 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-013",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 13,
    "word": "外来語_808",
    "reading": "外来語よみ808",
    "pitchAccent": "外来語[808]",
    "hanViet": "HÁN TỰ 808",
    "meaning": "Thuật ngữ Mimikara N3 số 808 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 808 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-014",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 14,
    "word": "外来語_809",
    "reading": "外来語よみ809",
    "pitchAccent": "外来語[809]",
    "hanViet": "HÁN TỰ 809",
    "meaning": "Thuật ngữ Mimikara N3 số 809 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 809 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-015",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 15,
    "word": "外来語_810",
    "reading": "外来語よみ810",
    "pitchAccent": "外来語[810]",
    "hanViet": "HÁN TỰ 810",
    "meaning": "Thuật ngữ Mimikara N3 số 810 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 810 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-016",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 16,
    "word": "外来語_811",
    "reading": "外来語よみ811",
    "pitchAccent": "外来語[811]",
    "hanViet": "HÁN TỰ 811",
    "meaning": "Thuật ngữ Mimikara N3 số 811 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 811 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-017",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 17,
    "word": "外来語_812",
    "reading": "外来語よみ812",
    "pitchAccent": "外来語[812]",
    "hanViet": "HÁN TỰ 812",
    "meaning": "Thuật ngữ Mimikara N3 số 812 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 812 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-018",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 18,
    "word": "外来語_813",
    "reading": "外来語よみ813",
    "pitchAccent": "外来語[813]",
    "hanViet": "HÁN TỰ 813",
    "meaning": "Thuật ngữ Mimikara N3 số 813 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 813 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-019",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 19,
    "word": "外来語_814",
    "reading": "外来語よみ814",
    "pitchAccent": "外来語[814]",
    "hanViet": "HÁN TỰ 814",
    "meaning": "Thuật ngữ Mimikara N3 số 814 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 814 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-020",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 20,
    "word": "外来語_815",
    "reading": "外来語よみ815",
    "pitchAccent": "外来語[815]",
    "hanViet": "HÁN TỰ 815",
    "meaning": "Thuật ngữ Mimikara N3 số 815 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 815 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-021",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 21,
    "word": "外来語_816",
    "reading": "外来語よみ816",
    "pitchAccent": "外来語[816]",
    "hanViet": "HÁN TỰ 816",
    "meaning": "Thuật ngữ Mimikara N3 số 816 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 816 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-022",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 22,
    "word": "外来語_817",
    "reading": "外来語よみ817",
    "pitchAccent": "外来語[817]",
    "hanViet": "HÁN TỰ 817",
    "meaning": "Thuật ngữ Mimikara N3 số 817 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 817 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-023",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 23,
    "word": "外来語_818",
    "reading": "外来語よみ818",
    "pitchAccent": "外来語[818]",
    "hanViet": "HÁN TỰ 818",
    "meaning": "Thuật ngữ Mimikara N3 số 818 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 818 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-024",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 24,
    "word": "外来語_819",
    "reading": "外来語よみ819",
    "pitchAccent": "外来語[819]",
    "hanViet": "HÁN TỰ 819",
    "meaning": "Thuật ngữ Mimikara N3 số 819 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 819 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-025",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 25,
    "word": "外来語_820",
    "reading": "外来語よみ820",
    "pitchAccent": "外来語[820]",
    "hanViet": "HÁN TỰ 820",
    "meaning": "Thuật ngữ Mimikara N3 số 820 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 820 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-026",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 26,
    "word": "外来語_821",
    "reading": "外来語よみ821",
    "pitchAccent": "外来語[821]",
    "hanViet": "HÁN TỰ 821",
    "meaning": "Thuật ngữ Mimikara N3 số 821 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 821 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-027",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 27,
    "word": "外来語_822",
    "reading": "外来語よみ822",
    "pitchAccent": "外来語[822]",
    "hanViet": "HÁN TỰ 822",
    "meaning": "Thuật ngữ Mimikara N3 số 822 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 822 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-028",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 28,
    "word": "外来語_823",
    "reading": "外来語よみ823",
    "pitchAccent": "外来語[823]",
    "hanViet": "HÁN TỰ 823",
    "meaning": "Thuật ngữ Mimikara N3 số 823 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 823 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-029",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 29,
    "word": "外来語_824",
    "reading": "外来語よみ824",
    "pitchAccent": "外来語[824]",
    "hanViet": "HÁN TỰ 824",
    "meaning": "Thuật ngữ Mimikara N3 số 824 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 824 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-030",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 30,
    "word": "外来語_825",
    "reading": "外来語よみ825",
    "pitchAccent": "外来語[825]",
    "hanViet": "HÁN TỰ 825",
    "meaning": "Thuật ngữ Mimikara N3 số 825 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 825 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-031",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 31,
    "word": "外来語_826",
    "reading": "外来語よみ826",
    "pitchAccent": "外来語[826]",
    "hanViet": "HÁN TỰ 826",
    "meaning": "Thuật ngữ Mimikara N3 số 826 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 826 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-032",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 32,
    "word": "外来語_827",
    "reading": "外来語よみ827",
    "pitchAccent": "外来語[827]",
    "hanViet": "HÁN TỰ 827",
    "meaning": "Thuật ngữ Mimikara N3 số 827 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 827 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-033",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 33,
    "word": "外来語_828",
    "reading": "外来語よみ828",
    "pitchAccent": "外来語[828]",
    "hanViet": "HÁN TỰ 828",
    "meaning": "Thuật ngữ Mimikara N3 số 828 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 828 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-034",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 34,
    "word": "外来語_829",
    "reading": "外来語よみ829",
    "pitchAccent": "外来語[829]",
    "hanViet": "HÁN TỰ 829",
    "meaning": "Thuật ngữ Mimikara N3 số 829 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 829 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-035",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 35,
    "word": "外来語_830",
    "reading": "外来語よみ830",
    "pitchAccent": "外来語[830]",
    "hanViet": "HÁN TỰ 830",
    "meaning": "Thuật ngữ Mimikara N3 số 830 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 830 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-036",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 36,
    "word": "外来語_831",
    "reading": "外来語よみ831",
    "pitchAccent": "外来語[831]",
    "hanViet": "HÁN TỰ 831",
    "meaning": "Thuật ngữ Mimikara N3 số 831 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第36番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい36ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 831 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-037",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 37,
    "word": "外来語_832",
    "reading": "外来語よみ832",
    "pitchAccent": "外来語[832]",
    "hanViet": "HÁN TỰ 832",
    "meaning": "Thuật ngữ Mimikara N3 số 832 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第37番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい37ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 832 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-038",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 38,
    "word": "外来語_833",
    "reading": "外来語よみ833",
    "pitchAccent": "外来語[833]",
    "hanViet": "HÁN TỰ 833",
    "meaning": "Thuật ngữ Mimikara N3 số 833 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第38番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい38ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 833 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-039",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 39,
    "word": "外来語_834",
    "reading": "外来語よみ834",
    "pitchAccent": "外来語[834]",
    "hanViet": "HÁN TỰ 834",
    "meaning": "Thuật ngữ Mimikara N3 số 834 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第39番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい39ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 834 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-040",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 40,
    "word": "外来語_835",
    "reading": "外来語よみ835",
    "pitchAccent": "外来語[835]",
    "hanViet": "HÁN TỰ 835",
    "meaning": "Thuật ngữ Mimikara N3 số 835 thuộc Unit 11 | カタカナ B",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの第40番目の語彙を活用した例文です。",
      "furigana": "Unit 11 | カタカナ Bの だい40ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 835 của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-14-001",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 1,
    "word": "料理動詞_836",
    "reading": "料理動詞よみ836",
    "pitchAccent": "料理動詞[836]",
    "hanViet": "HÁN TỰ 836",
    "meaning": "Thuật ngữ Mimikara N3 số 836 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第1番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 836 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-002",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 2,
    "word": "料理動詞_837",
    "reading": "料理動詞よみ837",
    "pitchAccent": "料理動詞[837]",
    "hanViet": "HÁN TỰ 837",
    "meaning": "Thuật ngữ Mimikara N3 số 837 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第2番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 837 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-003",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 3,
    "word": "料理動詞_838",
    "reading": "料理動詞よみ838",
    "pitchAccent": "料理動詞[838]",
    "hanViet": "HÁN TỰ 838",
    "meaning": "Thuật ngữ Mimikara N3 số 838 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第3番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 838 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-004",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 4,
    "word": "料理動詞_839",
    "reading": "料理動詞よみ839",
    "pitchAccent": "料理動詞[839]",
    "hanViet": "HÁN TỰ 839",
    "meaning": "Thuật ngữ Mimikara N3 số 839 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第4番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 839 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-005",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 5,
    "word": "料理動詞_840",
    "reading": "料理動詞よみ840",
    "pitchAccent": "料理動詞[840]",
    "hanViet": "HÁN TỰ 840",
    "meaning": "Thuật ngữ Mimikara N3 số 840 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第5番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 840 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-006",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 6,
    "word": "料理動詞_841",
    "reading": "料理動詞よみ841",
    "pitchAccent": "料理動詞[841]",
    "hanViet": "HÁN TỰ 841",
    "meaning": "Thuật ngữ Mimikara N3 số 841 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第6番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 841 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-007",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 7,
    "word": "料理動詞_842",
    "reading": "料理動詞よみ842",
    "pitchAccent": "料理動詞[842]",
    "hanViet": "HÁN TỰ 842",
    "meaning": "Thuật ngữ Mimikara N3 số 842 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第7番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 842 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-008",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 8,
    "word": "料理動詞_843",
    "reading": "料理動詞よみ843",
    "pitchAccent": "料理動詞[843]",
    "hanViet": "HÁN TỰ 843",
    "meaning": "Thuật ngữ Mimikara N3 số 843 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第8番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 843 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-009",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 9,
    "word": "料理動詞_844",
    "reading": "料理動詞よみ844",
    "pitchAccent": "料理動詞[844]",
    "hanViet": "HÁN TỰ 844",
    "meaning": "Thuật ngữ Mimikara N3 số 844 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第9番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 844 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-010",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 10,
    "word": "料理動詞_845",
    "reading": "料理動詞よみ845",
    "pitchAccent": "料理動詞[845]",
    "hanViet": "HÁN TỰ 845",
    "meaning": "Thuật ngữ Mimikara N3 số 845 thuộc まとめ | 料理の動詞",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の第10番目の語彙を活用した例文です。",
      "furigana": "まとめ | 料理の動詞の だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 845 của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-15-001",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 1,
    "word": "程度副詞_846",
    "reading": "程度副詞よみ846",
    "pitchAccent": "程度副詞[846]",
    "hanViet": "HÁN TỰ 846",
    "meaning": "Thuật ngữ Mimikara N3 số 846 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第1番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい1ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 846 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-002",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 2,
    "word": "程度副詞_847",
    "reading": "程度副詞よみ847",
    "pitchAccent": "程度副詞[847]",
    "hanViet": "HÁN TỰ 847",
    "meaning": "Thuật ngữ Mimikara N3 số 847 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第2番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい2ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 847 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-003",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 3,
    "word": "程度副詞_848",
    "reading": "程度副詞よみ848",
    "pitchAccent": "程度副詞[848]",
    "hanViet": "HÁN TỰ 848",
    "meaning": "Thuật ngữ Mimikara N3 số 848 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第3番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい3ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 848 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-004",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 4,
    "word": "程度副詞_849",
    "reading": "程度副詞よみ849",
    "pitchAccent": "程度副詞[849]",
    "hanViet": "HÁN TỰ 849",
    "meaning": "Thuật ngữ Mimikara N3 số 849 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第4番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい4ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 849 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-005",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 5,
    "word": "程度副詞_850",
    "reading": "程度副詞よみ850",
    "pitchAccent": "程度副詞[850]",
    "hanViet": "HÁN TỰ 850",
    "meaning": "Thuật ngữ Mimikara N3 số 850 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第5番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい5ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 850 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-006",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 6,
    "word": "程度副詞_851",
    "reading": "程度副詞よみ851",
    "pitchAccent": "程度副詞[851]",
    "hanViet": "HÁN TỰ 851",
    "meaning": "Thuật ngữ Mimikara N3 số 851 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第6番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい6ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 851 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-007",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 7,
    "word": "程度副詞_852",
    "reading": "程度副詞よみ852",
    "pitchAccent": "程度副詞[852]",
    "hanViet": "HÁN TỰ 852",
    "meaning": "Thuật ngữ Mimikara N3 số 852 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第7番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい7ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 852 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-008",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 8,
    "word": "程度副詞_853",
    "reading": "程度副詞よみ853",
    "pitchAccent": "程度副詞[853]",
    "hanViet": "HÁN TỰ 853",
    "meaning": "Thuật ngữ Mimikara N3 số 853 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第8番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい8ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 853 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-009",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 9,
    "word": "程度副詞_854",
    "reading": "程度副詞よみ854",
    "pitchAccent": "程度副詞[854]",
    "hanViet": "HÁN TỰ 854",
    "meaning": "Thuật ngữ Mimikara N3 số 854 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第9番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい9ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 854 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-010",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 10,
    "word": "程度副詞_855",
    "reading": "程度副詞よみ855",
    "pitchAccent": "程度副詞[855]",
    "hanViet": "HÁN TỰ 855",
    "meaning": "Thuật ngữ Mimikara N3 số 855 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第10番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい10ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 855 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-011",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 11,
    "word": "程度副詞_856",
    "reading": "程度副詞よみ856",
    "pitchAccent": "程度副詞[856]",
    "hanViet": "HÁN TỰ 856",
    "meaning": "Thuật ngữ Mimikara N3 số 856 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第11番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい11ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 856 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-012",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 12,
    "word": "程度副詞_857",
    "reading": "程度副詞よみ857",
    "pitchAccent": "程度副詞[857]",
    "hanViet": "HÁN TỰ 857",
    "meaning": "Thuật ngữ Mimikara N3 số 857 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第12番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい12ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 857 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-013",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 13,
    "word": "程度副詞_858",
    "reading": "程度副詞よみ858",
    "pitchAccent": "程度副詞[858]",
    "hanViet": "HÁN TỰ 858",
    "meaning": "Thuật ngữ Mimikara N3 số 858 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第13番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい13ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 858 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-014",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 14,
    "word": "程度副詞_859",
    "reading": "程度副詞よみ859",
    "pitchAccent": "程度副詞[859]",
    "hanViet": "HÁN TỰ 859",
    "meaning": "Thuật ngữ Mimikara N3 số 859 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第14番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい14ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 859 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-015",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 15,
    "word": "程度副詞_860",
    "reading": "程度副詞よみ860",
    "pitchAccent": "程度副詞[860]",
    "hanViet": "HÁN TỰ 860",
    "meaning": "Thuật ngữ Mimikara N3 số 860 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第15番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい15ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 860 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-016",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 16,
    "word": "程度副詞_861",
    "reading": "程度副詞よみ861",
    "pitchAccent": "程度副詞[861]",
    "hanViet": "HÁN TỰ 861",
    "meaning": "Thuật ngữ Mimikara N3 số 861 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第16番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい16ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 861 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-017",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 17,
    "word": "程度副詞_862",
    "reading": "程度副詞よみ862",
    "pitchAccent": "程度副詞[862]",
    "hanViet": "HÁN TỰ 862",
    "meaning": "Thuật ngữ Mimikara N3 số 862 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第17番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい17ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 862 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-018",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 18,
    "word": "程度副詞_863",
    "reading": "程度副詞よみ863",
    "pitchAccent": "程度副詞[863]",
    "hanViet": "HÁN TỰ 863",
    "meaning": "Thuật ngữ Mimikara N3 số 863 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第18番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい18ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 863 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-019",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 19,
    "word": "程度副詞_864",
    "reading": "程度副詞よみ864",
    "pitchAccent": "程度副詞[864]",
    "hanViet": "HÁN TỰ 864",
    "meaning": "Thuật ngữ Mimikara N3 số 864 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第19番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい19ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 864 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-020",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 20,
    "word": "程度副詞_865",
    "reading": "程度副詞よみ865",
    "pitchAccent": "程度副詞[865]",
    "hanViet": "HÁN TỰ 865",
    "meaning": "Thuật ngữ Mimikara N3 số 865 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第20番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい20ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 865 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-021",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 21,
    "word": "程度副詞_866",
    "reading": "程度副詞よみ866",
    "pitchAccent": "程度副詞[866]",
    "hanViet": "HÁN TỰ 866",
    "meaning": "Thuật ngữ Mimikara N3 số 866 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第21番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい21ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 866 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-022",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 22,
    "word": "程度副詞_867",
    "reading": "程度副詞よみ867",
    "pitchAccent": "程度副詞[867]",
    "hanViet": "HÁN TỰ 867",
    "meaning": "Thuật ngữ Mimikara N3 số 867 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第22番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい22ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 867 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-023",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 23,
    "word": "程度副詞_868",
    "reading": "程度副詞よみ868",
    "pitchAccent": "程度副詞[868]",
    "hanViet": "HÁN TỰ 868",
    "meaning": "Thuật ngữ Mimikara N3 số 868 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第23番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい23ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 868 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-024",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 24,
    "word": "程度副詞_869",
    "reading": "程度副詞よみ869",
    "pitchAccent": "程度副詞[869]",
    "hanViet": "HÁN TỰ 869",
    "meaning": "Thuật ngữ Mimikara N3 số 869 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第24番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい24ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 869 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-025",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 25,
    "word": "程度副詞_870",
    "reading": "程度副詞よみ870",
    "pitchAccent": "程度副詞[870]",
    "hanViet": "HÁN TỰ 870",
    "meaning": "Thuật ngữ Mimikara N3 số 870 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第25番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい25ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 870 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-026",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 26,
    "word": "程度副詞_871",
    "reading": "程度副詞よみ871",
    "pitchAccent": "程度副詞[871]",
    "hanViet": "HÁN TỰ 871",
    "meaning": "Thuật ngữ Mimikara N3 số 871 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第26番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい26ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 871 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-027",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 27,
    "word": "程度副詞_872",
    "reading": "程度副詞よみ872",
    "pitchAccent": "程度副詞[872]",
    "hanViet": "HÁN TỰ 872",
    "meaning": "Thuật ngữ Mimikara N3 số 872 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第27番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい27ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 872 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-028",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 28,
    "word": "程度副詞_873",
    "reading": "程度副詞よみ873",
    "pitchAccent": "程度副詞[873]",
    "hanViet": "HÁN TỰ 873",
    "meaning": "Thuật ngữ Mimikara N3 số 873 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第28番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい28ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 873 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-029",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 29,
    "word": "程度副詞_874",
    "reading": "程度副詞よみ874",
    "pitchAccent": "程度副詞[874]",
    "hanViet": "HÁN TỰ 874",
    "meaning": "Thuật ngữ Mimikara N3 số 874 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第29番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい29ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 874 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-030",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 30,
    "word": "程度副詞_875",
    "reading": "程度副詞よみ875",
    "pitchAccent": "程度副詞[875]",
    "hanViet": "HÁN TỰ 875",
    "meaning": "Thuật ngữ Mimikara N3 số 875 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第30番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい30ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 875 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-031",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 31,
    "word": "程度副詞_876",
    "reading": "程度副詞よみ876",
    "pitchAccent": "程度副詞[876]",
    "hanViet": "HÁN TỰ 876",
    "meaning": "Thuật ngữ Mimikara N3 số 876 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第31番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい31ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 876 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-032",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 32,
    "word": "程度副詞_877",
    "reading": "程度副詞よみ877",
    "pitchAccent": "程度副詞[877]",
    "hanViet": "HÁN TỰ 877",
    "meaning": "Thuật ngữ Mimikara N3 số 877 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第32番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい32ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 877 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-033",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 33,
    "word": "程度副詞_878",
    "reading": "程度副詞よみ878",
    "pitchAccent": "程度副詞[878]",
    "hanViet": "HÁN TỰ 878",
    "meaning": "Thuật ngữ Mimikara N3 số 878 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第33番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい33ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 878 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-034",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 34,
    "word": "程度副詞_879",
    "reading": "程度副詞よみ879",
    "pitchAccent": "程度副詞[879]",
    "hanViet": "HÁN TỰ 879",
    "meaning": "Thuật ngữ Mimikara N3 số 879 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第34番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい34ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 879 của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-035",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 35,
    "word": "程度副詞_880",
    "reading": "程度副詞よみ880",
    "pitchAccent": "程度副詞[880]",
    "hanViet": "HÁN TỰ 880",
    "meaning": "Thuật ngữ Mimikara N3 số 880 thuộc Unit 12 | 副詞 B",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの第35番目の語彙を活用した例文です。",
      "furigana": "Unit 12 | 副詞 Bの だい35ばんめ の ごい を かつよう した れいぶん です。",
      "vietnamese": "Câu ví dụ ứng dụng từ vựng số 880 của Unit 12 | 副詞 B."
    }
  }
];
