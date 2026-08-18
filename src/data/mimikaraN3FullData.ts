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
    "word": "名詞_21",
    "reading": "めいし21",
    "hanViet": "DANH TỪ 21",
    "meaning": "Thuật ngữ danh từ N3 số 21",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第21番。",
      "furigana": "Unit 1の ひっす めいし たんご だい21ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 21 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-022",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 22,
    "word": "名詞_22",
    "reading": "めいし22",
    "hanViet": "DANH TỪ 22",
    "meaning": "Thuật ngữ danh từ N3 số 22",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第22番。",
      "furigana": "Unit 1の ひっす めいし たんご だい22ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 22 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-023",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 23,
    "word": "名詞_23",
    "reading": "めいし23",
    "hanViet": "DANH TỪ 23",
    "meaning": "Thuật ngữ danh từ N3 số 23",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第23番。",
      "furigana": "Unit 1の ひっす めいし たんご だい23ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 23 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-024",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 24,
    "word": "名詞_24",
    "reading": "めいし24",
    "hanViet": "DANH TỪ 24",
    "meaning": "Thuật ngữ danh từ N3 số 24",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第24番。",
      "furigana": "Unit 1の ひっす めいし たんご だい24ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 24 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-025",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 25,
    "word": "名詞_25",
    "reading": "めいし25",
    "hanViet": "DANH TỪ 25",
    "meaning": "Thuật ngữ danh từ N3 số 25",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第25番。",
      "furigana": "Unit 1の ひっす めいし たんご だい25ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 25 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-026",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 26,
    "word": "名詞_26",
    "reading": "めいし26",
    "hanViet": "DANH TỪ 26",
    "meaning": "Thuật ngữ danh từ N3 số 26",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第26番。",
      "furigana": "Unit 1の ひっす めいし たんご だい26ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 26 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-027",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 27,
    "word": "名詞_27",
    "reading": "めいし27",
    "hanViet": "DANH TỪ 27",
    "meaning": "Thuật ngữ danh từ N3 số 27",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第27番。",
      "furigana": "Unit 1の ひっす めいし たんご だい27ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 27 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-028",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 28,
    "word": "名詞_28",
    "reading": "めいし28",
    "hanViet": "DANH TỪ 28",
    "meaning": "Thuật ngữ danh từ N3 số 28",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第28番。",
      "furigana": "Unit 1の ひっす めいし たんご だい28ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 28 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-029",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 29,
    "word": "名詞_29",
    "reading": "めいし29",
    "hanViet": "DANH TỪ 29",
    "meaning": "Thuật ngữ danh từ N3 số 29",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第29番。",
      "furigana": "Unit 1の ひっす めいし たんご だい29ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 29 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-030",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 30,
    "word": "名詞_30",
    "reading": "めいし30",
    "hanViet": "DANH TỪ 30",
    "meaning": "Thuật ngữ danh từ N3 số 30",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第30番。",
      "furigana": "Unit 1の ひっす めいし たんご だい30ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 30 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-031",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 31,
    "word": "名詞_31",
    "reading": "めいし31",
    "hanViet": "DANH TỪ 31",
    "meaning": "Thuật ngữ danh từ N3 số 31",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第31番。",
      "furigana": "Unit 1の ひっす めいし たんご だい31ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 31 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-032",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 32,
    "word": "名詞_32",
    "reading": "めいし32",
    "hanViet": "DANH TỪ 32",
    "meaning": "Thuật ngữ danh từ N3 số 32",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第32番。",
      "furigana": "Unit 1の ひっす めいし たんご だい32ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 32 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-033",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 33,
    "word": "名詞_33",
    "reading": "めいし33",
    "hanViet": "DANH TỪ 33",
    "meaning": "Thuật ngữ danh từ N3 số 33",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第33番。",
      "furigana": "Unit 1の ひっす めいし たんご だい33ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 33 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-034",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 34,
    "word": "名詞_34",
    "reading": "めいし34",
    "hanViet": "DANH TỪ 34",
    "meaning": "Thuật ngữ danh từ N3 số 34",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第34番。",
      "furigana": "Unit 1の ひっす めいし たんご だい34ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 34 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-035",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 35,
    "word": "名詞_35",
    "reading": "めいし35",
    "hanViet": "DANH TỪ 35",
    "meaning": "Thuật ngữ danh từ N3 số 35",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第35番。",
      "furigana": "Unit 1の ひっす めいし たんご だい35ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 35 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-036",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 36,
    "word": "名詞_36",
    "reading": "めいし36",
    "hanViet": "DANH TỪ 36",
    "meaning": "Thuật ngữ danh từ N3 số 36",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第36番。",
      "furigana": "Unit 1の ひっす めいし たんご だい36ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 36 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-037",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 37,
    "word": "名詞_37",
    "reading": "めいし37",
    "hanViet": "DANH TỪ 37",
    "meaning": "Thuật ngữ danh từ N3 số 37",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第37番。",
      "furigana": "Unit 1の ひっす めいし たんご だい37ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 37 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-038",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 38,
    "word": "名詞_38",
    "reading": "めいし38",
    "hanViet": "DANH TỪ 38",
    "meaning": "Thuật ngữ danh từ N3 số 38",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第38番。",
      "furigana": "Unit 1の ひっす めいし たんご だい38ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 38 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-039",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 39,
    "word": "名詞_39",
    "reading": "めいし39",
    "hanViet": "DANH TỪ 39",
    "meaning": "Thuật ngữ danh từ N3 số 39",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第39番。",
      "furigana": "Unit 1の ひっす めいし たんご だい39ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 39 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-040",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 40,
    "word": "名詞_40",
    "reading": "めいし40",
    "hanViet": "DANH TỪ 40",
    "meaning": "Thuật ngữ danh từ N3 số 40",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第40番。",
      "furigana": "Unit 1の ひっす めいし たんご だい40ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 40 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-041",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 41,
    "word": "名詞_41",
    "reading": "めいし41",
    "hanViet": "DANH TỪ 41",
    "meaning": "Thuật ngữ danh từ N3 số 41",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第41番。",
      "furigana": "Unit 1の ひっす めいし たんご だい41ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 41 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-042",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 42,
    "word": "名詞_42",
    "reading": "めいし42",
    "hanViet": "DANH TỪ 42",
    "meaning": "Thuật ngữ danh từ N3 số 42",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第42番。",
      "furigana": "Unit 1の ひっす めいし たんご だい42ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 42 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-043",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 43,
    "word": "名詞_43",
    "reading": "めいし43",
    "hanViet": "DANH TỪ 43",
    "meaning": "Thuật ngữ danh từ N3 số 43",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第43番。",
      "furigana": "Unit 1の ひっす めいし たんご だい43ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 43 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-044",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 44,
    "word": "名詞_44",
    "reading": "めいし44",
    "hanViet": "DANH TỪ 44",
    "meaning": "Thuật ngữ danh từ N3 số 44",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第44番。",
      "furigana": "Unit 1の ひっす めいし たんご だい44ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 44 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-045",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 45,
    "word": "名詞_45",
    "reading": "めいし45",
    "hanViet": "DANH TỪ 45",
    "meaning": "Thuật ngữ danh từ N3 số 45",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第45番。",
      "furigana": "Unit 1の ひっす めいし たんご だい45ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 45 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-046",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 46,
    "word": "名詞_46",
    "reading": "めいし46",
    "hanViet": "DANH TỪ 46",
    "meaning": "Thuật ngữ danh từ N3 số 46",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第46番。",
      "furigana": "Unit 1の ひっす めいし たんご だい46ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 46 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-047",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 47,
    "word": "名詞_47",
    "reading": "めいし47",
    "hanViet": "DANH TỪ 47",
    "meaning": "Thuật ngữ danh từ N3 số 47",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第47番。",
      "furigana": "Unit 1の ひっす めいし たんご だい47ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 47 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-048",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 48,
    "word": "名詞_48",
    "reading": "めいし48",
    "hanViet": "DANH TỪ 48",
    "meaning": "Thuật ngữ danh từ N3 số 48",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第48番。",
      "furigana": "Unit 1の ひっす めいし たんご だい48ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 48 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-049",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 49,
    "word": "名詞_49",
    "reading": "めいし49",
    "hanViet": "DANH TỪ 49",
    "meaning": "Thuật ngữ danh từ N3 số 49",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第49番。",
      "furigana": "Unit 1の ひっす めいし たんご だい49ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 49 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-050",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 50,
    "word": "名詞_50",
    "reading": "めいし50",
    "hanViet": "DANH TỪ 50",
    "meaning": "Thuật ngữ danh từ N3 số 50",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第50番。",
      "furigana": "Unit 1の ひっす めいし たんご だい50ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 50 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-051",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 51,
    "word": "名詞_51",
    "reading": "めいし51",
    "hanViet": "DANH TỪ 51",
    "meaning": "Thuật ngữ danh từ N3 số 51",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第51番。",
      "furigana": "Unit 1の ひっす めいし たんご だい51ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 51 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-052",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 52,
    "word": "名詞_52",
    "reading": "めいし52",
    "hanViet": "DANH TỪ 52",
    "meaning": "Thuật ngữ danh từ N3 số 52",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第52番。",
      "furigana": "Unit 1の ひっす めいし たんご だい52ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 52 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-053",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 53,
    "word": "名詞_53",
    "reading": "めいし53",
    "hanViet": "DANH TỪ 53",
    "meaning": "Thuật ngữ danh từ N3 số 53",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第53番。",
      "furigana": "Unit 1の ひっす めいし たんご だい53ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 53 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-054",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 54,
    "word": "名詞_54",
    "reading": "めいし54",
    "hanViet": "DANH TỪ 54",
    "meaning": "Thuật ngữ danh từ N3 số 54",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第54番。",
      "furigana": "Unit 1の ひっす めいし たんご だい54ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 54 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-055",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 55,
    "word": "名詞_55",
    "reading": "めいし55",
    "hanViet": "DANH TỪ 55",
    "meaning": "Thuật ngữ danh từ N3 số 55",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第55番。",
      "furigana": "Unit 1の ひっす めいし たんご だい55ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 55 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-056",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 56,
    "word": "名詞_56",
    "reading": "めいし56",
    "hanViet": "DANH TỪ 56",
    "meaning": "Thuật ngữ danh từ N3 số 56",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第56番。",
      "furigana": "Unit 1の ひっす めいし たんご だい56ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 56 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-057",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 57,
    "word": "名詞_57",
    "reading": "めいし57",
    "hanViet": "DANH TỪ 57",
    "meaning": "Thuật ngữ danh từ N3 số 57",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第57番。",
      "furigana": "Unit 1の ひっす めいし たんご だい57ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 57 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-058",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 58,
    "word": "名詞_58",
    "reading": "めいし58",
    "hanViet": "DANH TỪ 58",
    "meaning": "Thuật ngữ danh từ N3 số 58",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第58番。",
      "furigana": "Unit 1の ひっす めいし たんご だい58ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 58 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-059",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 59,
    "word": "名詞_59",
    "reading": "めいし59",
    "hanViet": "DANH TỪ 59",
    "meaning": "Thuật ngữ danh từ N3 số 59",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第59番。",
      "furigana": "Unit 1の ひっす めいし たんご だい59ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 59 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-060",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 60,
    "word": "名詞_60",
    "reading": "めいし60",
    "hanViet": "DANH TỪ 60",
    "meaning": "Thuật ngữ danh từ N3 số 60",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第60番。",
      "furigana": "Unit 1の ひっす めいし たんご だい60ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 60 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-061",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 61,
    "word": "名詞_61",
    "reading": "めいし61",
    "hanViet": "DANH TỪ 61",
    "meaning": "Thuật ngữ danh từ N3 số 61",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第61番。",
      "furigana": "Unit 1の ひっす めいし たんご だい61ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 61 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-062",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 62,
    "word": "名詞_62",
    "reading": "めいし62",
    "hanViet": "DANH TỪ 62",
    "meaning": "Thuật ngữ danh từ N3 số 62",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第62番。",
      "furigana": "Unit 1の ひっす めいし たんご だい62ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 62 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-063",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 63,
    "word": "名詞_63",
    "reading": "めいし63",
    "hanViet": "DANH TỪ 63",
    "meaning": "Thuật ngữ danh từ N3 số 63",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第63番。",
      "furigana": "Unit 1の ひっす めいし たんご だい63ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 63 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-064",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 64,
    "word": "名詞_64",
    "reading": "めいし64",
    "hanViet": "DANH TỪ 64",
    "meaning": "Thuật ngữ danh từ N3 số 64",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第64番。",
      "furigana": "Unit 1の ひっす めいし たんご だい64ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 64 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-065",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 65,
    "word": "名詞_65",
    "reading": "めいし65",
    "hanViet": "DANH TỪ 65",
    "meaning": "Thuật ngữ danh từ N3 số 65",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第65番。",
      "furigana": "Unit 1の ひっす めいし たんご だい65ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 65 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-066",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 66,
    "word": "名詞_66",
    "reading": "めいし66",
    "hanViet": "DANH TỪ 66",
    "meaning": "Thuật ngữ danh từ N3 số 66",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第66番。",
      "furigana": "Unit 1の ひっす めいし たんご だい66ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 66 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-067",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 67,
    "word": "名詞_67",
    "reading": "めいし67",
    "hanViet": "DANH TỪ 67",
    "meaning": "Thuật ngữ danh từ N3 số 67",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第67番。",
      "furigana": "Unit 1の ひっす めいし たんご だい67ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 67 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-068",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 68,
    "word": "名詞_68",
    "reading": "めいし68",
    "hanViet": "DANH TỪ 68",
    "meaning": "Thuật ngữ danh từ N3 số 68",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第68番。",
      "furigana": "Unit 1の ひっす めいし たんご だい68ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 68 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-069",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 69,
    "word": "名詞_69",
    "reading": "めいし69",
    "hanViet": "DANH TỪ 69",
    "meaning": "Thuật ngữ danh từ N3 số 69",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第69番。",
      "furigana": "Unit 1の ひっす めいし たんご だい69ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 69 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-070",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 70,
    "word": "名詞_70",
    "reading": "めいし70",
    "hanViet": "DANH TỪ 70",
    "meaning": "Thuật ngữ danh từ N3 số 70",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第70番。",
      "furigana": "Unit 1の ひっす めいし たんご だい70ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 70 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-071",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 71,
    "word": "名詞_71",
    "reading": "めいし71",
    "hanViet": "DANH TỪ 71",
    "meaning": "Thuật ngữ danh từ N3 số 71",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第71番。",
      "furigana": "Unit 1の ひっす めいし たんご だい71ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 71 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-072",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 72,
    "word": "名詞_72",
    "reading": "めいし72",
    "hanViet": "DANH TỪ 72",
    "meaning": "Thuật ngữ danh từ N3 số 72",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第72番。",
      "furigana": "Unit 1の ひっす めいし たんご だい72ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 72 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-073",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 73,
    "word": "名詞_73",
    "reading": "めいし73",
    "hanViet": "DANH TỪ 73",
    "meaning": "Thuật ngữ danh từ N3 số 73",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第73番。",
      "furigana": "Unit 1の ひっす めいし たんご だい73ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 73 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-074",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 74,
    "word": "名詞_74",
    "reading": "めいし74",
    "hanViet": "DANH TỪ 74",
    "meaning": "Thuật ngữ danh từ N3 số 74",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第74番。",
      "furigana": "Unit 1の ひっす めいし たんご だい74ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 74 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-075",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 75,
    "word": "名詞_75",
    "reading": "めいし75",
    "hanViet": "DANH TỪ 75",
    "meaning": "Thuật ngữ danh từ N3 số 75",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第75番。",
      "furigana": "Unit 1の ひっす めいし たんご だい75ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 75 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-076",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 76,
    "word": "名詞_76",
    "reading": "めいし76",
    "hanViet": "DANH TỪ 76",
    "meaning": "Thuật ngữ danh từ N3 số 76",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第76番。",
      "furigana": "Unit 1の ひっす めいし たんご だい76ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 76 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-077",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 77,
    "word": "名詞_77",
    "reading": "めいし77",
    "hanViet": "DANH TỪ 77",
    "meaning": "Thuật ngữ danh từ N3 số 77",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第77番。",
      "furigana": "Unit 1の ひっす めいし たんご だい77ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 77 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-078",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 78,
    "word": "名詞_78",
    "reading": "めいし78",
    "hanViet": "DANH TỪ 78",
    "meaning": "Thuật ngữ danh từ N3 số 78",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第78番。",
      "furigana": "Unit 1の ひっす めいし たんご だい78ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 78 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-079",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 79,
    "word": "名詞_79",
    "reading": "めいし79",
    "hanViet": "DANH TỪ 79",
    "meaning": "Thuật ngữ danh từ N3 số 79",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第79番。",
      "furigana": "Unit 1の ひっす めいし たんご だい79ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 79 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-080",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 80,
    "word": "名詞_80",
    "reading": "めいし80",
    "hanViet": "DANH TỪ 80",
    "meaning": "Thuật ngữ danh từ N3 số 80",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第80番。",
      "furigana": "Unit 1の ひっす めいし たんご だい80ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 80 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-081",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 81,
    "word": "名詞_81",
    "reading": "めいし81",
    "hanViet": "DANH TỪ 81",
    "meaning": "Thuật ngữ danh từ N3 số 81",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第81番。",
      "furigana": "Unit 1の ひっす めいし たんご だい81ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 81 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-082",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 82,
    "word": "名詞_82",
    "reading": "めいし82",
    "hanViet": "DANH TỪ 82",
    "meaning": "Thuật ngữ danh từ N3 số 82",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第82番。",
      "furigana": "Unit 1の ひっす めいし たんご だい82ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 82 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-083",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 83,
    "word": "名詞_83",
    "reading": "めいし83",
    "hanViet": "DANH TỪ 83",
    "meaning": "Thuật ngữ danh từ N3 số 83",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第83番。",
      "furigana": "Unit 1の ひっす めいし たんご だい83ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 83 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-084",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 84,
    "word": "名詞_84",
    "reading": "めいし84",
    "hanViet": "DANH TỪ 84",
    "meaning": "Thuật ngữ danh từ N3 số 84",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第84番。",
      "furigana": "Unit 1の ひっす めいし たんご だい84ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 84 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-085",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 85,
    "word": "名詞_85",
    "reading": "めいし85",
    "hanViet": "DANH TỪ 85",
    "meaning": "Thuật ngữ danh từ N3 số 85",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第85番。",
      "furigana": "Unit 1の ひっす めいし たんご だい85ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 85 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-086",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 86,
    "word": "名詞_86",
    "reading": "めいし86",
    "hanViet": "DANH TỪ 86",
    "meaning": "Thuật ngữ danh từ N3 số 86",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第86番。",
      "furigana": "Unit 1の ひっす めいし たんご だい86ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 86 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-087",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 87,
    "word": "名詞_87",
    "reading": "めいし87",
    "hanViet": "DANH TỪ 87",
    "meaning": "Thuật ngữ danh từ N3 số 87",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第87番。",
      "furigana": "Unit 1の ひっす めいし たんご だい87ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 87 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-088",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 88,
    "word": "名詞_88",
    "reading": "めいし88",
    "hanViet": "DANH TỪ 88",
    "meaning": "Thuật ngữ danh từ N3 số 88",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第88番。",
      "furigana": "Unit 1の ひっす めいし たんご だい88ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 88 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-089",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 89,
    "word": "名詞_89",
    "reading": "めいし89",
    "hanViet": "DANH TỪ 89",
    "meaning": "Thuật ngữ danh từ N3 số 89",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第89番。",
      "furigana": "Unit 1の ひっす めいし たんご だい89ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 89 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-090",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 90,
    "word": "名詞_90",
    "reading": "めいし90",
    "hanViet": "DANH TỪ 90",
    "meaning": "Thuật ngữ danh từ N3 số 90",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第90番。",
      "furigana": "Unit 1の ひっす めいし たんご だい90ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 90 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-091",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 91,
    "word": "名詞_91",
    "reading": "めいし91",
    "hanViet": "DANH TỪ 91",
    "meaning": "Thuật ngữ danh từ N3 số 91",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第91番。",
      "furigana": "Unit 1の ひっす めいし たんご だい91ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 91 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-092",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 92,
    "word": "名詞_92",
    "reading": "めいし92",
    "hanViet": "DANH TỪ 92",
    "meaning": "Thuật ngữ danh từ N3 số 92",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第92番。",
      "furigana": "Unit 1の ひっす めいし たんご だい92ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 92 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-093",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 93,
    "word": "名詞_93",
    "reading": "めいし93",
    "hanViet": "DANH TỪ 93",
    "meaning": "Thuật ngữ danh từ N3 số 93",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第93番。",
      "furigana": "Unit 1の ひっす めいし たんご だい93ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 93 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-094",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 94,
    "word": "名詞_94",
    "reading": "めいし94",
    "hanViet": "DANH TỪ 94",
    "meaning": "Thuật ngữ danh từ N3 số 94",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第94番。",
      "furigana": "Unit 1の ひっす めいし たんご だい94ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 94 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-095",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 95,
    "word": "名詞_95",
    "reading": "めいし95",
    "hanViet": "DANH TỪ 95",
    "meaning": "Thuật ngữ danh từ N3 số 95",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第95番。",
      "furigana": "Unit 1の ひっす めいし たんご だい95ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 95 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-096",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 96,
    "word": "名詞_96",
    "reading": "めいし96",
    "hanViet": "DANH TỪ 96",
    "meaning": "Thuật ngữ danh từ N3 số 96",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第96番。",
      "furigana": "Unit 1の ひっす めいし たんご だい96ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 96 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-097",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 97,
    "word": "名詞_97",
    "reading": "めいし97",
    "hanViet": "DANH TỪ 97",
    "meaning": "Thuật ngữ danh từ N3 số 97",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第97番。",
      "furigana": "Unit 1の ひっす めいし たんご だい97ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 97 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-098",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 98,
    "word": "名詞_98",
    "reading": "めいし98",
    "hanViet": "DANH TỪ 98",
    "meaning": "Thuật ngữ danh từ N3 số 98",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第98番。",
      "furigana": "Unit 1の ひっす めいし たんご だい98ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 98 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-099",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 99,
    "word": "名詞_99",
    "reading": "めいし99",
    "hanViet": "DANH TỪ 99",
    "meaning": "Thuật ngữ danh từ N3 số 99",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第99番。",
      "furigana": "Unit 1の ひっす めいし たんご だい99ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 99 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-100",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 100,
    "word": "名詞_100",
    "reading": "めいし100",
    "hanViet": "DANH TỪ 100",
    "meaning": "Thuật ngữ danh từ N3 số 100",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第100番。",
      "furigana": "Unit 1の ひっす めいし たんご だい100ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 100 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-101",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 101,
    "word": "名詞_101",
    "reading": "めいし101",
    "hanViet": "DANH TỪ 101",
    "meaning": "Thuật ngữ danh từ N3 số 101",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第101番。",
      "furigana": "Unit 1の ひっす めいし たんご だい101ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 101 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-102",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 102,
    "word": "名詞_102",
    "reading": "めいし102",
    "hanViet": "DANH TỪ 102",
    "meaning": "Thuật ngữ danh từ N3 số 102",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第102番。",
      "furigana": "Unit 1の ひっす めいし たんご だい102ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 102 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-103",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 103,
    "word": "名詞_103",
    "reading": "めいし103",
    "hanViet": "DANH TỪ 103",
    "meaning": "Thuật ngữ danh từ N3 số 103",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第103番。",
      "furigana": "Unit 1の ひっす めいし たんご だい103ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 103 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-104",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 104,
    "word": "名詞_104",
    "reading": "めいし104",
    "hanViet": "DANH TỪ 104",
    "meaning": "Thuật ngữ danh từ N3 số 104",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第104番。",
      "furigana": "Unit 1の ひっす めいし たんご だい104ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 104 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-105",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 105,
    "word": "名詞_105",
    "reading": "めいし105",
    "hanViet": "DANH TỪ 105",
    "meaning": "Thuật ngữ danh từ N3 số 105",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第105番。",
      "furigana": "Unit 1の ひっす めいし たんご だい105ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 105 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-106",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 106,
    "word": "名詞_106",
    "reading": "めいし106",
    "hanViet": "DANH TỪ 106",
    "meaning": "Thuật ngữ danh từ N3 số 106",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第106番。",
      "furigana": "Unit 1の ひっす めいし たんご だい106ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 106 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-107",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 107,
    "word": "名詞_107",
    "reading": "めいし107",
    "hanViet": "DANH TỪ 107",
    "meaning": "Thuật ngữ danh từ N3 số 107",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第107番。",
      "furigana": "Unit 1の ひっす めいし たんご だい107ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 107 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-108",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 108,
    "word": "名詞_108",
    "reading": "めいし108",
    "hanViet": "DANH TỪ 108",
    "meaning": "Thuật ngữ danh từ N3 số 108",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第108番。",
      "furigana": "Unit 1の ひっす めいし たんご だい108ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 108 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-109",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 109,
    "word": "名詞_109",
    "reading": "めいし109",
    "hanViet": "DANH TỪ 109",
    "meaning": "Thuật ngữ danh từ N3 số 109",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第109番。",
      "furigana": "Unit 1の ひっす めいし たんご だい109ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 109 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-110",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 110,
    "word": "名詞_110",
    "reading": "めいし110",
    "hanViet": "DANH TỪ 110",
    "meaning": "Thuật ngữ danh từ N3 số 110",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第110番。",
      "furigana": "Unit 1の ひっす めいし たんご だい110ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 110 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-111",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 111,
    "word": "名詞_111",
    "reading": "めいし111",
    "hanViet": "DANH TỪ 111",
    "meaning": "Thuật ngữ danh từ N3 số 111",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第111番。",
      "furigana": "Unit 1の ひっす めいし たんご だい111ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 111 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-112",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 112,
    "word": "名詞_112",
    "reading": "めいし112",
    "hanViet": "DANH TỪ 112",
    "meaning": "Thuật ngữ danh từ N3 số 112",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第112番。",
      "furigana": "Unit 1の ひっす めいし たんご だい112ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 112 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-113",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 113,
    "word": "名詞_113",
    "reading": "めいし113",
    "hanViet": "DANH TỪ 113",
    "meaning": "Thuật ngữ danh từ N3 số 113",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第113番。",
      "furigana": "Unit 1の ひっす めいし たんご だい113ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 113 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-114",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 114,
    "word": "名詞_114",
    "reading": "めいし114",
    "hanViet": "DANH TỪ 114",
    "meaning": "Thuật ngữ danh từ N3 số 114",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第114番。",
      "furigana": "Unit 1の ひっす めいし たんご だい114ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 114 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-115",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 115,
    "word": "名詞_115",
    "reading": "めいし115",
    "hanViet": "DANH TỪ 115",
    "meaning": "Thuật ngữ danh từ N3 số 115",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第115番。",
      "furigana": "Unit 1の ひっす めいし たんご だい115ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 115 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-116",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 116,
    "word": "名詞_116",
    "reading": "めいし116",
    "hanViet": "DANH TỪ 116",
    "meaning": "Thuật ngữ danh từ N3 số 116",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第116番。",
      "furigana": "Unit 1の ひっす めいし たんご だい116ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 116 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-117",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 117,
    "word": "名詞_117",
    "reading": "めいし117",
    "hanViet": "DANH TỪ 117",
    "meaning": "Thuật ngữ danh từ N3 số 117",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第117番。",
      "furigana": "Unit 1の ひっす めいし たんご だい117ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 117 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-118",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 118,
    "word": "名詞_118",
    "reading": "めいし118",
    "hanViet": "DANH TỪ 118",
    "meaning": "Thuật ngữ danh từ N3 số 118",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第118番。",
      "furigana": "Unit 1の ひっす めいし たんご だい118ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 118 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-119",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 119,
    "word": "名詞_119",
    "reading": "めいし119",
    "hanViet": "DANH TỪ 119",
    "meaning": "Thuật ngữ danh từ N3 số 119",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第119番。",
      "furigana": "Unit 1の ひっす めいし たんご だい119ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 119 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-01-120",
    "unit": 1,
    "unitTitle": "Unit 1 | 名詞 A _ [1-120]",
    "index": 120,
    "word": "名詞_120",
    "reading": "めいし120",
    "hanViet": "DANH TỪ 120",
    "meaning": "Thuật ngữ danh từ N3 số 120",
    "exampleSentence": {
      "japanese": "Unit 1の必須名詞単語第120番。",
      "furigana": "Unit 1の ひっす めいし たんご だい120ばん。",
      "vietnamese": "Từ vựng danh từ trọng tâm số 120 của Unit 1 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-001",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 1,
    "word": "生きる",
    "reading": "いきる",
    "hanViet": "SINH",
    "meaning": "Sống, tồn tại",
    "exampleSentence": {
      "japanese": "精一杯生きる",
      "furigana": "せいいっぱい いきる",
      "vietnamese": "Sống hết mình"
    }
  },
  {
    "id": "mimi-n3-02-002",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 2,
    "word": "生まれる",
    "reading": "うまれる",
    "hanViet": "SINH",
    "meaning": "Được sinh ra",
    "exampleSentence": {
      "japanese": "元気な男の子が生まれた",
      "furigana": "げんき な おとこのこ が うまれた",
      "vietnamese": "Một bé trai khỏe mạnh đã chào đời"
    }
  },
  {
    "id": "mimi-n3-02-003",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 3,
    "word": "倒れる",
    "reading": "たおれる",
    "hanViet": "ĐẢO",
    "meaning": "Bị ngã, sập đổ",
    "exampleSentence": {
      "japanese": "台風で木が倒れた",
      "furigana": "たいふう で き が たおれた",
      "vietnamese": "Cây cối bị đổ do bão"
    }
  },
  {
    "id": "mimi-n3-02-004",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 4,
    "word": "倒す",
    "reading": "たおす",
    "hanViet": "ĐẢO",
    "meaning": "Làm đổ, đánh bại",
    "exampleSentence": {
      "japanese": "花瓶を倒して割ってしまった",
      "furigana": "かびん を たおして わって しまった",
      "vietnamese": "Làm đổ vỡ lọ hoa"
    }
  },
  {
    "id": "mimi-n3-02-005",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 5,
    "word": "起きる",
    "reading": "おきる",
    "hanViet": "KHỞI",
    "meaning": "Thức dậy, xảy ra",
    "exampleSentence": {
      "japanese": "毎朝早く起きる",
      "furigana": "まいあさ はやく おきる",
      "vietnamese": "Mỗi sáng thức dậy sớm"
    }
  },
  {
    "id": "mimi-n3-02-006",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 6,
    "word": "起こす",
    "reading": "おこす",
    "hanViet": "KHỞI",
    "meaning": "Đánh thức, gây ra",
    "exampleSentence": {
      "japanese": "事故を起こす",
      "furigana": "じこ を おこす",
      "vietnamese": "Gây ra tai nạn"
    }
  },
  {
    "id": "mimi-n3-02-007",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 7,
    "word": "落ちる",
    "reading": "おちる",
    "hanViet": "LẠC",
    "meaning": "Rơi rụng, thi trượt",
    "exampleSentence": {
      "japanese": "試験に落ちてしまった",
      "furigana": "しけん に おちて しまった",
      "vietnamese": "Bị trượt kỳ thi"
    }
  },
  {
    "id": "mimi-n3-02-008",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 8,
    "word": "落とす",
    "reading": "おとす",
    "hanViet": "LẠC",
    "meaning": "Làm rơi, đánh mất",
    "exampleSentence": {
      "japanese": "財布を落とした",
      "furigana": "さいふ を おとした",
      "vietnamese": "Đã đánh rơi ví tiền"
    }
  },
  {
    "id": "mimi-n3-02-009",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 9,
    "word": "届く",
    "reading": "とどく",
    "hanViet": "GIỚI",
    "meaning": "Được chuyển đến",
    "exampleSentence": {
      "japanese": "手紙が届いた",
      "furigana": "てがみ が とどいた",
      "vietnamese": "Thư đã đến nơi"
    }
  },
  {
    "id": "mimi-n3-02-010",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 10,
    "word": "届ける",
    "reading": "とどける",
    "hanViet": "GIỚI",
    "meaning": "Chuyển phát, giao hàng",
    "exampleSentence": {
      "japanese": "荷物を届ける",
      "furigana": "にもつ を とどける",
      "vietnamese": "Giao hàng hành lý"
    }
  },
  {
    "id": "mimi-n3-02-011",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 11,
    "word": "動詞_131",
    "reading": "どうし131",
    "hanViet": "ĐỘNG TỪ 131",
    "meaning": "Động từ N3 trọng tâm số 131",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第131番。",
      "furigana": "Unit 2の ひっす どうし たんご だい131ばん。",
      "vietnamese": "Động từ thiết yếu số 131 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-012",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 12,
    "word": "動詞_132",
    "reading": "どうし132",
    "hanViet": "ĐỘNG TỪ 132",
    "meaning": "Động từ N3 trọng tâm số 132",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第132番。",
      "furigana": "Unit 2の ひっす どうし たんご だい132ばん。",
      "vietnamese": "Động từ thiết yếu số 132 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-013",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 13,
    "word": "動詞_133",
    "reading": "どうし133",
    "hanViet": "ĐỘNG TỪ 133",
    "meaning": "Động từ N3 trọng tâm số 133",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第133番。",
      "furigana": "Unit 2の ひっす どうし たんご だい133ばん。",
      "vietnamese": "Động từ thiết yếu số 133 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-014",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 14,
    "word": "動詞_134",
    "reading": "どうし134",
    "hanViet": "ĐỘNG TỪ 134",
    "meaning": "Động từ N3 trọng tâm số 134",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第134番。",
      "furigana": "Unit 2の ひっす どうし たんご だい134ばん。",
      "vietnamese": "Động từ thiết yếu số 134 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-015",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 15,
    "word": "動詞_135",
    "reading": "どうし135",
    "hanViet": "ĐỘNG TỪ 135",
    "meaning": "Động từ N3 trọng tâm số 135",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第135番。",
      "furigana": "Unit 2の ひっす どうし たんご だい135ばん。",
      "vietnamese": "Động từ thiết yếu số 135 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-016",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 16,
    "word": "動詞_136",
    "reading": "どうし136",
    "hanViet": "ĐỘNG TỪ 136",
    "meaning": "Động từ N3 trọng tâm số 136",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第136番。",
      "furigana": "Unit 2の ひっす どうし たんご だい136ばん。",
      "vietnamese": "Động từ thiết yếu số 136 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-017",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 17,
    "word": "動詞_137",
    "reading": "どうし137",
    "hanViet": "ĐỘNG TỪ 137",
    "meaning": "Động từ N3 trọng tâm số 137",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第137番。",
      "furigana": "Unit 2の ひっす どうし たんご だい137ばん。",
      "vietnamese": "Động từ thiết yếu số 137 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-018",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 18,
    "word": "動詞_138",
    "reading": "どうし138",
    "hanViet": "ĐỘNG TỪ 138",
    "meaning": "Động từ N3 trọng tâm số 138",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第138番。",
      "furigana": "Unit 2の ひっす どうし たんご だい138ばん。",
      "vietnamese": "Động từ thiết yếu số 138 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-019",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 19,
    "word": "動詞_139",
    "reading": "どうし139",
    "hanViet": "ĐỘNG TỪ 139",
    "meaning": "Động từ N3 trọng tâm số 139",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第139番。",
      "furigana": "Unit 2の ひっす どうし たんご だい139ばん。",
      "vietnamese": "Động từ thiết yếu số 139 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-020",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 20,
    "word": "動詞_140",
    "reading": "どうし140",
    "hanViet": "ĐỘNG TỪ 140",
    "meaning": "Động từ N3 trọng tâm số 140",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第140番。",
      "furigana": "Unit 2の ひっす どうし たんご だい140ばん。",
      "vietnamese": "Động từ thiết yếu số 140 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-021",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 21,
    "word": "動詞_141",
    "reading": "どうし141",
    "hanViet": "ĐỘNG TỪ 141",
    "meaning": "Động từ N3 trọng tâm số 141",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第141番。",
      "furigana": "Unit 2の ひっす どうし たんご だい141ばん。",
      "vietnamese": "Động từ thiết yếu số 141 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-022",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 22,
    "word": "動詞_142",
    "reading": "どうし142",
    "hanViet": "ĐỘNG TỪ 142",
    "meaning": "Động từ N3 trọng tâm số 142",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第142番。",
      "furigana": "Unit 2の ひっす どうし たんご だい142ばん。",
      "vietnamese": "Động từ thiết yếu số 142 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-023",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 23,
    "word": "動詞_143",
    "reading": "どうし143",
    "hanViet": "ĐỘNG TỪ 143",
    "meaning": "Động từ N3 trọng tâm số 143",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第143番。",
      "furigana": "Unit 2の ひっす どうし たんご だい143ばん。",
      "vietnamese": "Động từ thiết yếu số 143 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-024",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 24,
    "word": "動詞_144",
    "reading": "どうし144",
    "hanViet": "ĐỘNG TỪ 144",
    "meaning": "Động từ N3 trọng tâm số 144",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第144番。",
      "furigana": "Unit 2の ひっす どうし たんご だい144ばん。",
      "vietnamese": "Động từ thiết yếu số 144 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-025",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 25,
    "word": "動詞_145",
    "reading": "どうし145",
    "hanViet": "ĐỘNG TỪ 145",
    "meaning": "Động từ N3 trọng tâm số 145",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第145番。",
      "furigana": "Unit 2の ひっす どうし たんご だい145ばん。",
      "vietnamese": "Động từ thiết yếu số 145 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-026",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 26,
    "word": "動詞_146",
    "reading": "どうし146",
    "hanViet": "ĐỘNG TỪ 146",
    "meaning": "Động từ N3 trọng tâm số 146",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第146番。",
      "furigana": "Unit 2の ひっす どうし たんご だい146ばん。",
      "vietnamese": "Động từ thiết yếu số 146 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-027",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 27,
    "word": "動詞_147",
    "reading": "どうし147",
    "hanViet": "ĐỘNG TỪ 147",
    "meaning": "Động từ N3 trọng tâm số 147",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第147番。",
      "furigana": "Unit 2の ひっす どうし たんご だい147ばん。",
      "vietnamese": "Động từ thiết yếu số 147 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-028",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 28,
    "word": "動詞_148",
    "reading": "どうし148",
    "hanViet": "ĐỘNG TỪ 148",
    "meaning": "Động từ N3 trọng tâm số 148",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第148番。",
      "furigana": "Unit 2の ひっす どうし たんご だい148ばん。",
      "vietnamese": "Động từ thiết yếu số 148 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-029",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 29,
    "word": "動詞_149",
    "reading": "どうし149",
    "hanViet": "ĐỘNG TỪ 149",
    "meaning": "Động từ N3 trọng tâm số 149",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第149番。",
      "furigana": "Unit 2の ひっす どうし たんご だい149ばん。",
      "vietnamese": "Động từ thiết yếu số 149 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-030",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 30,
    "word": "動詞_150",
    "reading": "どうし150",
    "hanViet": "ĐỘNG TỪ 150",
    "meaning": "Động từ N3 trọng tâm số 150",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第150番。",
      "furigana": "Unit 2の ひっす どうし たんご だい150ばん。",
      "vietnamese": "Động từ thiết yếu số 150 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-031",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 31,
    "word": "動詞_151",
    "reading": "どうし151",
    "hanViet": "ĐỘNG TỪ 151",
    "meaning": "Động từ N3 trọng tâm số 151",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第151番。",
      "furigana": "Unit 2の ひっす どうし たんご だい151ばん。",
      "vietnamese": "Động từ thiết yếu số 151 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-032",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 32,
    "word": "動詞_152",
    "reading": "どうし152",
    "hanViet": "ĐỘNG TỪ 152",
    "meaning": "Động từ N3 trọng tâm số 152",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第152番。",
      "furigana": "Unit 2の ひっす どうし たんご だい152ばん。",
      "vietnamese": "Động từ thiết yếu số 152 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-033",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 33,
    "word": "動詞_153",
    "reading": "どうし153",
    "hanViet": "ĐỘNG TỪ 153",
    "meaning": "Động từ N3 trọng tâm số 153",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第153番。",
      "furigana": "Unit 2の ひっす どうし たんご だい153ばん。",
      "vietnamese": "Động từ thiết yếu số 153 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-034",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 34,
    "word": "動詞_154",
    "reading": "どうし154",
    "hanViet": "ĐỘNG TỪ 154",
    "meaning": "Động từ N3 trọng tâm số 154",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第154番。",
      "furigana": "Unit 2の ひっす どうし たんご だい154ばん。",
      "vietnamese": "Động từ thiết yếu số 154 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-035",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 35,
    "word": "動詞_155",
    "reading": "どうし155",
    "hanViet": "ĐỘNG TỪ 155",
    "meaning": "Động từ N3 trọng tâm số 155",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第155番。",
      "furigana": "Unit 2の ひっす どうし たんご だい155ばん。",
      "vietnamese": "Động từ thiết yếu số 155 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-036",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 36,
    "word": "動詞_156",
    "reading": "どうし156",
    "hanViet": "ĐỘNG TỪ 156",
    "meaning": "Động từ N3 trọng tâm số 156",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第156番。",
      "furigana": "Unit 2の ひっす どうし たんご だい156ばん。",
      "vietnamese": "Động từ thiết yếu số 156 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-037",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 37,
    "word": "動詞_157",
    "reading": "どうし157",
    "hanViet": "ĐỘNG TỪ 157",
    "meaning": "Động từ N3 trọng tâm số 157",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第157番。",
      "furigana": "Unit 2の ひっす どうし たんご だい157ばん。",
      "vietnamese": "Động từ thiết yếu số 157 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-038",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 38,
    "word": "動詞_158",
    "reading": "どうし158",
    "hanViet": "ĐỘNG TỪ 158",
    "meaning": "Động từ N3 trọng tâm số 158",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第158番。",
      "furigana": "Unit 2の ひっす どうし たんご だい158ばん。",
      "vietnamese": "Động từ thiết yếu số 158 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-039",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 39,
    "word": "動詞_159",
    "reading": "どうし159",
    "hanViet": "ĐỘNG TỪ 159",
    "meaning": "Động từ N3 trọng tâm số 159",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第159番。",
      "furigana": "Unit 2の ひっす どうし たんご だい159ばん。",
      "vietnamese": "Động từ thiết yếu số 159 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-040",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 40,
    "word": "動詞_160",
    "reading": "どうし160",
    "hanViet": "ĐỘNG TỪ 160",
    "meaning": "Động từ N3 trọng tâm số 160",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第160番。",
      "furigana": "Unit 2の ひっす どうし たんご だい160ばん。",
      "vietnamese": "Động từ thiết yếu số 160 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-041",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 41,
    "word": "動詞_161",
    "reading": "どうし161",
    "hanViet": "ĐỘNG TỪ 161",
    "meaning": "Động từ N3 trọng tâm số 161",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第161番。",
      "furigana": "Unit 2の ひっす どうし たんご だい161ばん。",
      "vietnamese": "Động từ thiết yếu số 161 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-042",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 42,
    "word": "動詞_162",
    "reading": "どうし162",
    "hanViet": "ĐỘNG TỪ 162",
    "meaning": "Động từ N3 trọng tâm số 162",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第162番。",
      "furigana": "Unit 2の ひっす どうし たんご だい162ばん。",
      "vietnamese": "Động từ thiết yếu số 162 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-043",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 43,
    "word": "動詞_163",
    "reading": "どうし163",
    "hanViet": "ĐỘNG TỪ 163",
    "meaning": "Động từ N3 trọng tâm số 163",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第163番。",
      "furigana": "Unit 2の ひっす どうし たんご だい163ばん。",
      "vietnamese": "Động từ thiết yếu số 163 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-044",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 44,
    "word": "動詞_164",
    "reading": "どうし164",
    "hanViet": "ĐỘNG TỪ 164",
    "meaning": "Động từ N3 trọng tâm số 164",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第164番。",
      "furigana": "Unit 2の ひっす どうし たんご だい164ばん。",
      "vietnamese": "Động từ thiết yếu số 164 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-045",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 45,
    "word": "動詞_165",
    "reading": "どうし165",
    "hanViet": "ĐỘNG TỪ 165",
    "meaning": "Động từ N3 trọng tâm số 165",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第165番。",
      "furigana": "Unit 2の ひっす どうし たんご だい165ばん。",
      "vietnamese": "Động từ thiết yếu số 165 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-046",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 46,
    "word": "動詞_166",
    "reading": "どうし166",
    "hanViet": "ĐỘNG TỪ 166",
    "meaning": "Động từ N3 trọng tâm số 166",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第166番。",
      "furigana": "Unit 2の ひっす どうし たんご だい166ばん。",
      "vietnamese": "Động từ thiết yếu số 166 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-047",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 47,
    "word": "動詞_167",
    "reading": "どうし167",
    "hanViet": "ĐỘNG TỪ 167",
    "meaning": "Động từ N3 trọng tâm số 167",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第167番。",
      "furigana": "Unit 2の ひっす どうし たんご だい167ばん。",
      "vietnamese": "Động từ thiết yếu số 167 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-048",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 48,
    "word": "動詞_168",
    "reading": "どうし168",
    "hanViet": "ĐỘNG TỪ 168",
    "meaning": "Động từ N3 trọng tâm số 168",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第168番。",
      "furigana": "Unit 2の ひっす どうし たんご だい168ばん。",
      "vietnamese": "Động từ thiết yếu số 168 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-049",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 49,
    "word": "動詞_169",
    "reading": "どうし169",
    "hanViet": "ĐỘNG TỪ 169",
    "meaning": "Động từ N3 trọng tâm số 169",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第169番。",
      "furigana": "Unit 2の ひっす どうし たんご だい169ばん。",
      "vietnamese": "Động từ thiết yếu số 169 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-050",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 50,
    "word": "動詞_170",
    "reading": "どうし170",
    "hanViet": "ĐỘNG TỪ 170",
    "meaning": "Động từ N3 trọng tâm số 170",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第170番。",
      "furigana": "Unit 2の ひっす どうし たんご だい170ばん。",
      "vietnamese": "Động từ thiết yếu số 170 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-051",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 51,
    "word": "動詞_171",
    "reading": "どうし171",
    "hanViet": "ĐỘNG TỪ 171",
    "meaning": "Động từ N3 trọng tâm số 171",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第171番。",
      "furigana": "Unit 2の ひっす どうし たんご だい171ばん。",
      "vietnamese": "Động từ thiết yếu số 171 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-052",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 52,
    "word": "動詞_172",
    "reading": "どうし172",
    "hanViet": "ĐỘNG TỪ 172",
    "meaning": "Động từ N3 trọng tâm số 172",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第172番。",
      "furigana": "Unit 2の ひっす どうし たんご だい172ばん。",
      "vietnamese": "Động từ thiết yếu số 172 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-053",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 53,
    "word": "動詞_173",
    "reading": "どうし173",
    "hanViet": "ĐỘNG TỪ 173",
    "meaning": "Động từ N3 trọng tâm số 173",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第173番。",
      "furigana": "Unit 2の ひっす どうし たんご だい173ばん。",
      "vietnamese": "Động từ thiết yếu số 173 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-054",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 54,
    "word": "動詞_174",
    "reading": "どうし174",
    "hanViet": "ĐỘNG TỪ 174",
    "meaning": "Động từ N3 trọng tâm số 174",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第174番。",
      "furigana": "Unit 2の ひっす どうし たんご だい174ばん。",
      "vietnamese": "Động từ thiết yếu số 174 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-055",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 55,
    "word": "動詞_175",
    "reading": "どうし175",
    "hanViet": "ĐỘNG TỪ 175",
    "meaning": "Động từ N3 trọng tâm số 175",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第175番。",
      "furigana": "Unit 2の ひっす どうし たんご だい175ばん。",
      "vietnamese": "Động từ thiết yếu số 175 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-056",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 56,
    "word": "動詞_176",
    "reading": "どうし176",
    "hanViet": "ĐỘNG TỪ 176",
    "meaning": "Động từ N3 trọng tâm số 176",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第176番。",
      "furigana": "Unit 2の ひっす どうし たんご だい176ばん。",
      "vietnamese": "Động từ thiết yếu số 176 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-057",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 57,
    "word": "動詞_177",
    "reading": "どうし177",
    "hanViet": "ĐỘNG TỪ 177",
    "meaning": "Động từ N3 trọng tâm số 177",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第177番。",
      "furigana": "Unit 2の ひっす どうし たんご だい177ばん。",
      "vietnamese": "Động từ thiết yếu số 177 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-058",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 58,
    "word": "動詞_178",
    "reading": "どうし178",
    "hanViet": "ĐỘNG TỪ 178",
    "meaning": "Động từ N3 trọng tâm số 178",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第178番。",
      "furigana": "Unit 2の ひっす どうし たんご だい178ばん。",
      "vietnamese": "Động từ thiết yếu số 178 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-059",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 59,
    "word": "動詞_179",
    "reading": "どうし179",
    "hanViet": "ĐỘNG TỪ 179",
    "meaning": "Động từ N3 trọng tâm số 179",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第179番。",
      "furigana": "Unit 2の ひっす どうし たんご だい179ばん。",
      "vietnamese": "Động từ thiết yếu số 179 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-060",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 60,
    "word": "動詞_180",
    "reading": "どうし180",
    "hanViet": "ĐỘNG TỪ 180",
    "meaning": "Động từ N3 trọng tâm số 180",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第180番。",
      "furigana": "Unit 2の ひっす どうし たんご だい180ばん。",
      "vietnamese": "Động từ thiết yếu số 180 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-061",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 61,
    "word": "動詞_181",
    "reading": "どうし181",
    "hanViet": "ĐỘNG TỪ 181",
    "meaning": "Động từ N3 trọng tâm số 181",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第181番。",
      "furigana": "Unit 2の ひっす どうし たんご だい181ばん。",
      "vietnamese": "Động từ thiết yếu số 181 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-062",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 62,
    "word": "動詞_182",
    "reading": "どうし182",
    "hanViet": "ĐỘNG TỪ 182",
    "meaning": "Động từ N3 trọng tâm số 182",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第182番。",
      "furigana": "Unit 2の ひっす どうし たんご だい182ばん。",
      "vietnamese": "Động từ thiết yếu số 182 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-063",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 63,
    "word": "動詞_183",
    "reading": "どうし183",
    "hanViet": "ĐỘNG TỪ 183",
    "meaning": "Động từ N3 trọng tâm số 183",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第183番。",
      "furigana": "Unit 2の ひっす どうし たんご だい183ばん。",
      "vietnamese": "Động từ thiết yếu số 183 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-064",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 64,
    "word": "動詞_184",
    "reading": "どうし184",
    "hanViet": "ĐỘNG TỪ 184",
    "meaning": "Động từ N3 trọng tâm số 184",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第184番。",
      "furigana": "Unit 2の ひっす どうし たんご だい184ばん。",
      "vietnamese": "Động từ thiết yếu số 184 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-065",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 65,
    "word": "動詞_185",
    "reading": "どうし185",
    "hanViet": "ĐỘNG TỪ 185",
    "meaning": "Động từ N3 trọng tâm số 185",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第185番。",
      "furigana": "Unit 2の ひっす どうし たんご だい185ばん。",
      "vietnamese": "Động từ thiết yếu số 185 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-066",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 66,
    "word": "動詞_186",
    "reading": "どうし186",
    "hanViet": "ĐỘNG TỪ 186",
    "meaning": "Động từ N3 trọng tâm số 186",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第186番。",
      "furigana": "Unit 2の ひっす どうし たんご だい186ばん。",
      "vietnamese": "Động từ thiết yếu số 186 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-067",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 67,
    "word": "動詞_187",
    "reading": "どうし187",
    "hanViet": "ĐỘNG TỪ 187",
    "meaning": "Động từ N3 trọng tâm số 187",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第187番。",
      "furigana": "Unit 2の ひっす どうし たんご だい187ばん。",
      "vietnamese": "Động từ thiết yếu số 187 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-068",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 68,
    "word": "動詞_188",
    "reading": "どうし188",
    "hanViet": "ĐỘNG TỪ 188",
    "meaning": "Động từ N3 trọng tâm số 188",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第188番。",
      "furigana": "Unit 2の ひっす どうし たんご だい188ばん。",
      "vietnamese": "Động từ thiết yếu số 188 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-069",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 69,
    "word": "動詞_189",
    "reading": "どうし189",
    "hanViet": "ĐỘNG TỪ 189",
    "meaning": "Động từ N3 trọng tâm số 189",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第189番。",
      "furigana": "Unit 2の ひっす どうし たんご だい189ばん。",
      "vietnamese": "Động từ thiết yếu số 189 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-070",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 70,
    "word": "動詞_190",
    "reading": "どうし190",
    "hanViet": "ĐỘNG TỪ 190",
    "meaning": "Động từ N3 trọng tâm số 190",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第190番。",
      "furigana": "Unit 2の ひっす どうし たんご だい190ばん。",
      "vietnamese": "Động từ thiết yếu số 190 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-071",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 71,
    "word": "動詞_191",
    "reading": "どうし191",
    "hanViet": "ĐỘNG TỪ 191",
    "meaning": "Động từ N3 trọng tâm số 191",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第191番。",
      "furigana": "Unit 2の ひっす どうし たんご だい191ばん。",
      "vietnamese": "Động từ thiết yếu số 191 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-072",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 72,
    "word": "動詞_192",
    "reading": "どうし192",
    "hanViet": "ĐỘNG TỪ 192",
    "meaning": "Động từ N3 trọng tâm số 192",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第192番。",
      "furigana": "Unit 2の ひっす どうし たんご だい192ばん。",
      "vietnamese": "Động từ thiết yếu số 192 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-073",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 73,
    "word": "動詞_193",
    "reading": "どうし193",
    "hanViet": "ĐỘNG TỪ 193",
    "meaning": "Động từ N3 trọng tâm số 193",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第193番。",
      "furigana": "Unit 2の ひっす どうし たんご だい193ばん。",
      "vietnamese": "Động từ thiết yếu số 193 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-074",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 74,
    "word": "動詞_194",
    "reading": "どうし194",
    "hanViet": "ĐỘNG TỪ 194",
    "meaning": "Động từ N3 trọng tâm số 194",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第194番。",
      "furigana": "Unit 2の ひっす どうし たんご だい194ばん。",
      "vietnamese": "Động từ thiết yếu số 194 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-075",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 75,
    "word": "動詞_195",
    "reading": "どうし195",
    "hanViet": "ĐỘNG TỪ 195",
    "meaning": "Động từ N3 trọng tâm số 195",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第195番。",
      "furigana": "Unit 2の ひっす どうし たんご だい195ばん。",
      "vietnamese": "Động từ thiết yếu số 195 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-076",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 76,
    "word": "動詞_196",
    "reading": "どうし196",
    "hanViet": "ĐỘNG TỪ 196",
    "meaning": "Động từ N3 trọng tâm số 196",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第196番。",
      "furigana": "Unit 2の ひっす どうし たんご だい196ばん。",
      "vietnamese": "Động từ thiết yếu số 196 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-077",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 77,
    "word": "動詞_197",
    "reading": "どうし197",
    "hanViet": "ĐỘNG TỪ 197",
    "meaning": "Động từ N3 trọng tâm số 197",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第197番。",
      "furigana": "Unit 2の ひっす どうし たんご だい197ばん。",
      "vietnamese": "Động từ thiết yếu số 197 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-078",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 78,
    "word": "動詞_198",
    "reading": "どうし198",
    "hanViet": "ĐỘNG TỪ 198",
    "meaning": "Động từ N3 trọng tâm số 198",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第198番。",
      "furigana": "Unit 2の ひっす どうし たんご だい198ばん。",
      "vietnamese": "Động từ thiết yếu số 198 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-079",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 79,
    "word": "動詞_199",
    "reading": "どうし199",
    "hanViet": "ĐỘNG TỪ 199",
    "meaning": "Động từ N3 trọng tâm số 199",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第199番。",
      "furigana": "Unit 2の ひっす どうし たんご だい199ばん。",
      "vietnamese": "Động từ thiết yếu số 199 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-080",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 80,
    "word": "動詞_200",
    "reading": "どうし200",
    "hanViet": "ĐỘNG TỪ 200",
    "meaning": "Động từ N3 trọng tâm số 200",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第200番。",
      "furigana": "Unit 2の ひっす どうし たんご だい200ばん。",
      "vietnamese": "Động từ thiết yếu số 200 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-081",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 81,
    "word": "動詞_201",
    "reading": "どうし201",
    "hanViet": "ĐỘNG TỪ 201",
    "meaning": "Động từ N3 trọng tâm số 201",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第201番。",
      "furigana": "Unit 2の ひっす どうし たんご だい201ばん。",
      "vietnamese": "Động từ thiết yếu số 201 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-082",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 82,
    "word": "動詞_202",
    "reading": "どうし202",
    "hanViet": "ĐỘNG TỪ 202",
    "meaning": "Động từ N3 trọng tâm số 202",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第202番。",
      "furigana": "Unit 2の ひっす どうし たんご だい202ばん。",
      "vietnamese": "Động từ thiết yếu số 202 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-083",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 83,
    "word": "動詞_203",
    "reading": "どうし203",
    "hanViet": "ĐỘNG TỪ 203",
    "meaning": "Động từ N3 trọng tâm số 203",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第203番。",
      "furigana": "Unit 2の ひっす どうし たんご だい203ばん。",
      "vietnamese": "Động từ thiết yếu số 203 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-084",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 84,
    "word": "動詞_204",
    "reading": "どうし204",
    "hanViet": "ĐỘNG TỪ 204",
    "meaning": "Động từ N3 trọng tâm số 204",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第204番。",
      "furigana": "Unit 2の ひっす どうし たんご だい204ばん。",
      "vietnamese": "Động từ thiết yếu số 204 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-085",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 85,
    "word": "動詞_205",
    "reading": "どうし205",
    "hanViet": "ĐỘNG TỪ 205",
    "meaning": "Động từ N3 trọng tâm số 205",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第205番。",
      "furigana": "Unit 2の ひっす どうし たんご だい205ばん。",
      "vietnamese": "Động từ thiết yếu số 205 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-086",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 86,
    "word": "動詞_206",
    "reading": "どうし206",
    "hanViet": "ĐỘNG TỪ 206",
    "meaning": "Động từ N3 trọng tâm số 206",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第206番。",
      "furigana": "Unit 2の ひっす どうし たんご だい206ばん。",
      "vietnamese": "Động từ thiết yếu số 206 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-087",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 87,
    "word": "動詞_207",
    "reading": "どうし207",
    "hanViet": "ĐỘNG TỪ 207",
    "meaning": "Động từ N3 trọng tâm số 207",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第207番。",
      "furigana": "Unit 2の ひっす どうし たんご だい207ばん。",
      "vietnamese": "Động từ thiết yếu số 207 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-088",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 88,
    "word": "動詞_208",
    "reading": "どうし208",
    "hanViet": "ĐỘNG TỪ 208",
    "meaning": "Động từ N3 trọng tâm số 208",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第208番。",
      "furigana": "Unit 2の ひっす どうし たんご だい208ばん。",
      "vietnamese": "Động từ thiết yếu số 208 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-089",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 89,
    "word": "動詞_209",
    "reading": "どうし209",
    "hanViet": "ĐỘNG TỪ 209",
    "meaning": "Động từ N3 trọng tâm số 209",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第209番。",
      "furigana": "Unit 2の ひっす どうし たんご だい209ばん。",
      "vietnamese": "Động từ thiết yếu số 209 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-090",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 90,
    "word": "動詞_210",
    "reading": "どうし210",
    "hanViet": "ĐỘNG TỪ 210",
    "meaning": "Động từ N3 trọng tâm số 210",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第210番。",
      "furigana": "Unit 2の ひっす どうし たんご だい210ばん。",
      "vietnamese": "Động từ thiết yếu số 210 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-091",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 91,
    "word": "動詞_211",
    "reading": "どうし211",
    "hanViet": "ĐỘNG TỪ 211",
    "meaning": "Động từ N3 trọng tâm số 211",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第211番。",
      "furigana": "Unit 2の ひっす どうし たんご だい211ばん。",
      "vietnamese": "Động từ thiết yếu số 211 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-092",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 92,
    "word": "動詞_212",
    "reading": "どうし212",
    "hanViet": "ĐỘNG TỪ 212",
    "meaning": "Động từ N3 trọng tâm số 212",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第212番。",
      "furigana": "Unit 2の ひっす どうし たんご だい212ばん。",
      "vietnamese": "Động từ thiết yếu số 212 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-093",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 93,
    "word": "動詞_213",
    "reading": "どうし213",
    "hanViet": "ĐỘNG TỪ 213",
    "meaning": "Động từ N3 trọng tâm số 213",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第213番。",
      "furigana": "Unit 2の ひっす どうし たんご だい213ばん。",
      "vietnamese": "Động từ thiết yếu số 213 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-094",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 94,
    "word": "動詞_214",
    "reading": "どうし214",
    "hanViet": "ĐỘNG TỪ 214",
    "meaning": "Động từ N3 trọng tâm số 214",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第214番。",
      "furigana": "Unit 2の ひっす どうし たんご だい214ばん。",
      "vietnamese": "Động từ thiết yếu số 214 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-095",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 95,
    "word": "動詞_215",
    "reading": "どうし215",
    "hanViet": "ĐỘNG TỪ 215",
    "meaning": "Động từ N3 trọng tâm số 215",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第215番。",
      "furigana": "Unit 2の ひっす どうし たんご だい215ばん。",
      "vietnamese": "Động từ thiết yếu số 215 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-096",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 96,
    "word": "動詞_216",
    "reading": "どうし216",
    "hanViet": "ĐỘNG TỪ 216",
    "meaning": "Động từ N3 trọng tâm số 216",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第216番。",
      "furigana": "Unit 2の ひっす どうし たんご だい216ばん。",
      "vietnamese": "Động từ thiết yếu số 216 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-097",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 97,
    "word": "動詞_217",
    "reading": "どうし217",
    "hanViet": "ĐỘNG TỪ 217",
    "meaning": "Động từ N3 trọng tâm số 217",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第217番。",
      "furigana": "Unit 2の ひっす どうし たんご だい217ばん。",
      "vietnamese": "Động từ thiết yếu số 217 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-098",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 98,
    "word": "動詞_218",
    "reading": "どうし218",
    "hanViet": "ĐỘNG TỪ 218",
    "meaning": "Động từ N3 trọng tâm số 218",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第218番。",
      "furigana": "Unit 2の ひっす どうし たんご だい218ばん。",
      "vietnamese": "Động từ thiết yếu số 218 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-099",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 99,
    "word": "動詞_219",
    "reading": "どうし219",
    "hanViet": "ĐỘNG TỪ 219",
    "meaning": "Động từ N3 trọng tâm số 219",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第219番。",
      "furigana": "Unit 2の ひっす どうし たんご だい219ばん。",
      "vietnamese": "Động từ thiết yếu số 219 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-02-100",
    "unit": 2,
    "unitTitle": "Unit 2 | 動詞 A _ [121-220]",
    "index": 100,
    "word": "動詞_220",
    "reading": "どうし220",
    "hanViet": "ĐỘNG TỪ 220",
    "meaning": "Động từ N3 trọng tâm số 220",
    "exampleSentence": {
      "japanese": "Unit 2の必須動詞単語第220番。",
      "furigana": "Unit 2の ひっす どうし たんご だい220ばん。",
      "vietnamese": "Động từ thiết yếu số 220 của Unit 2 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-03-001",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 1,
    "word": "生きがい",
    "reading": "いきがい",
    "hanViet": "SINH",
    "meaning": "Lý tưởng sống, lẽ sống",
    "exampleSentence": {
      "japanese": "仕事に生きがいを感じる",
      "furigana": "しごと に いきがい を かんじる",
      "vietnamese": "Cảm nhận được lẽ sống trong công việc"
    }
  },
  {
    "id": "mimi-n3-03-002",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 2,
    "word": "やりがい",
    "reading": "やりがい",
    "hanViet": "HÁN TỰ",
    "meaning": "Giá trị công việc, đáng làm",
    "exampleSentence": {
      "japanese": "やりがいのある仕事",
      "furigana": "やりがい の ある しごと",
      "vietnamese": "Công việc xứng đáng để cống hiến"
    }
  },
  {
    "id": "mimi-n3-03-003",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 3,
    "word": "行き来",
    "reading": "ゆきき",
    "hanViet": "HÀNH LAI",
    "meaning": "Sự qua lại, giao thiệp",
    "exampleSentence": {
      "japanese": "近所の人と行き来する",
      "furigana": "きんじょ の ひと と ゆきき する",
      "vietnamese": "Giao thiệp qua lại với hàng xóm"
    }
  },
  {
    "id": "mimi-n3-03-004",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 4,
    "word": "貸し借り",
    "reading": "かしかり",
    "hanViet": "THẢI TÁ",
    "meaning": "Sự vay mượn",
    "exampleSentence": {
      "japanese": "お金の貸し借りはやめよう",
      "furigana": "おかね の かしかり は やめよう",
      "vietnamese": "Hãy dừng việc vay mượn tiền bạc"
    }
  },
  {
    "id": "mimi-n3-03-005",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 5,
    "word": "連用名詞_225",
    "reading": "れんよう225",
    "hanViet": "LIÊN DỤNG 225",
    "meaning": "Danh từ liên dụng số 225",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第225番。",
      "furigana": "れんよう めいし の ごい だい225ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 225."
    }
  },
  {
    "id": "mimi-n3-03-006",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 6,
    "word": "連用名詞_226",
    "reading": "れんよう226",
    "hanViet": "LIÊN DỤNG 226",
    "meaning": "Danh từ liên dụng số 226",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第226番。",
      "furigana": "れんよう めいし の ごい だい226ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 226."
    }
  },
  {
    "id": "mimi-n3-03-007",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 7,
    "word": "連用名詞_227",
    "reading": "れんよう227",
    "hanViet": "LIÊN DỤNG 227",
    "meaning": "Danh từ liên dụng số 227",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第227番。",
      "furigana": "れんよう めいし の ごい だい227ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 227."
    }
  },
  {
    "id": "mimi-n3-03-008",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 8,
    "word": "連用名詞_228",
    "reading": "れんよう228",
    "hanViet": "LIÊN DỤNG 228",
    "meaning": "Danh từ liên dụng số 228",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第228番。",
      "furigana": "れんよう めいし の ごい だい228ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 228."
    }
  },
  {
    "id": "mimi-n3-03-009",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 9,
    "word": "連用名詞_229",
    "reading": "れんよう229",
    "hanViet": "LIÊN DỤNG 229",
    "meaning": "Danh từ liên dụng số 229",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第229番。",
      "furigana": "れんよう めいし の ごい だい229ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 229."
    }
  },
  {
    "id": "mimi-n3-03-010",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 10,
    "word": "連用名詞_230",
    "reading": "れんよう230",
    "hanViet": "LIÊN DỤNG 230",
    "meaning": "Danh từ liên dụng số 230",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第230番。",
      "furigana": "れんよう めいし の ごい だい230ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 230."
    }
  },
  {
    "id": "mimi-n3-03-011",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 11,
    "word": "連用名詞_231",
    "reading": "れんよう231",
    "hanViet": "LIÊN DỤNG 231",
    "meaning": "Danh từ liên dụng số 231",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第231番。",
      "furigana": "れんよう めいし の ごい だい231ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 231."
    }
  },
  {
    "id": "mimi-n3-03-012",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 12,
    "word": "連用名詞_232",
    "reading": "れんよう232",
    "hanViet": "LIÊN DỤNG 232",
    "meaning": "Danh từ liên dụng số 232",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第232番。",
      "furigana": "れんよう めいし の ごい だい232ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 232."
    }
  },
  {
    "id": "mimi-n3-03-013",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 13,
    "word": "連用名詞_233",
    "reading": "れんよう233",
    "hanViet": "LIÊN DỤNG 233",
    "meaning": "Danh từ liên dụng số 233",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第233番。",
      "furigana": "れんよう めいし の ごい だい233ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 233."
    }
  },
  {
    "id": "mimi-n3-03-014",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 14,
    "word": "連用名詞_234",
    "reading": "れんよう234",
    "hanViet": "LIÊN DỤNG 234",
    "meaning": "Danh từ liên dụng số 234",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第234番。",
      "furigana": "れんよう めいし の ごい だい234ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 234."
    }
  },
  {
    "id": "mimi-n3-03-015",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 15,
    "word": "連用名詞_235",
    "reading": "れんよう235",
    "hanViet": "LIÊN DỤNG 235",
    "meaning": "Danh từ liên dụng số 235",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第235番。",
      "furigana": "れんよう めいし の ごい だい235ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 235."
    }
  },
  {
    "id": "mimi-n3-03-016",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 16,
    "word": "連用名詞_236",
    "reading": "れんよう236",
    "hanViet": "LIÊN DỤNG 236",
    "meaning": "Danh từ liên dụng số 236",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第236番。",
      "furigana": "れんよう めいし の ごい だい236ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 236."
    }
  },
  {
    "id": "mimi-n3-03-017",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 17,
    "word": "連用名詞_237",
    "reading": "れんよう237",
    "hanViet": "LIÊN DỤNG 237",
    "meaning": "Danh từ liên dụng số 237",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第237番。",
      "furigana": "れんよう めいし の ごい だい237ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 237."
    }
  },
  {
    "id": "mimi-n3-03-018",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 18,
    "word": "連用名詞_238",
    "reading": "れんよう238",
    "hanViet": "LIÊN DỤNG 238",
    "meaning": "Danh từ liên dụng số 238",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第238番。",
      "furigana": "れんよう めいし の ごい だい238ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 238."
    }
  },
  {
    "id": "mimi-n3-03-019",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 19,
    "word": "連用名詞_239",
    "reading": "れんよう239",
    "hanViet": "LIÊN DỤNG 239",
    "meaning": "Danh từ liên dụng số 239",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第239番。",
      "furigana": "れんよう めいし の ごい だい239ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 239."
    }
  },
  {
    "id": "mimi-n3-03-020",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 20,
    "word": "連用名詞_240",
    "reading": "れんよう240",
    "hanViet": "LIÊN DỤNG 240",
    "meaning": "Danh từ liên dụng số 240",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第240番。",
      "furigana": "れんよう めいし の ごい だい240ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 240."
    }
  },
  {
    "id": "mimi-n3-03-021",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 21,
    "word": "連用名詞_241",
    "reading": "れんよう241",
    "hanViet": "LIÊN DỤNG 241",
    "meaning": "Danh từ liên dụng số 241",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第241番。",
      "furigana": "れんよう めいし の ごい だい241ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 241."
    }
  },
  {
    "id": "mimi-n3-03-022",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 22,
    "word": "連用名詞_242",
    "reading": "れんよう242",
    "hanViet": "LIÊN DỤNG 242",
    "meaning": "Danh từ liên dụng số 242",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第242番。",
      "furigana": "れんよう めいし の ごい だい242ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 242."
    }
  },
  {
    "id": "mimi-n3-03-023",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 23,
    "word": "連用名詞_243",
    "reading": "れんよう243",
    "hanViet": "LIÊN DỤNG 243",
    "meaning": "Danh từ liên dụng số 243",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第243番。",
      "furigana": "れんよう めいし の ごい だい243ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 243."
    }
  },
  {
    "id": "mimi-n3-03-024",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 24,
    "word": "連用名詞_244",
    "reading": "れんよう244",
    "hanViet": "LIÊN DỤNG 244",
    "meaning": "Danh từ liên dụng số 244",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第244番。",
      "furigana": "れんよう めいし の ごい だい244ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 244."
    }
  },
  {
    "id": "mimi-n3-03-025",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 25,
    "word": "連用名詞_245",
    "reading": "れんよう245",
    "hanViet": "LIÊN DỤNG 245",
    "meaning": "Danh từ liên dụng số 245",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第245番。",
      "furigana": "れんよう めいし の ごい だい245ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 245."
    }
  },
  {
    "id": "mimi-n3-03-026",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 26,
    "word": "連用名詞_246",
    "reading": "れんよう246",
    "hanViet": "LIÊN DỤNG 246",
    "meaning": "Danh từ liên dụng số 246",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第246番。",
      "furigana": "れんよう めいし の ごい だい246ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 246."
    }
  },
  {
    "id": "mimi-n3-03-027",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 27,
    "word": "連用名詞_247",
    "reading": "れんよう247",
    "hanViet": "LIÊN DỤNG 247",
    "meaning": "Danh từ liên dụng số 247",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第247番。",
      "furigana": "れんよう めいし の ごい だい247ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 247."
    }
  },
  {
    "id": "mimi-n3-03-028",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 28,
    "word": "連用名詞_248",
    "reading": "れんよう248",
    "hanViet": "LIÊN DỤNG 248",
    "meaning": "Danh từ liên dụng số 248",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第248番。",
      "furigana": "れんよう めいし の ごい だい248ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 248."
    }
  },
  {
    "id": "mimi-n3-03-029",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 29,
    "word": "連用名詞_249",
    "reading": "れんよう249",
    "hanViet": "LIÊN DỤNG 249",
    "meaning": "Danh từ liên dụng số 249",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第249番。",
      "furigana": "れんよう めいし の ごい だい249ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 249."
    }
  },
  {
    "id": "mimi-n3-03-030",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 30,
    "word": "連用名詞_250",
    "reading": "れんよう250",
    "hanViet": "LIÊN DỤNG 250",
    "meaning": "Danh từ liên dụng số 250",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第250番。",
      "furigana": "れんよう めいし の ごい だい250ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 250."
    }
  },
  {
    "id": "mimi-n3-03-031",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 31,
    "word": "連用名詞_251",
    "reading": "れんよう251",
    "hanViet": "LIÊN DỤNG 251",
    "meaning": "Danh từ liên dụng số 251",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第251番。",
      "furigana": "れんよう めいし の ごい だい251ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 251."
    }
  },
  {
    "id": "mimi-n3-03-032",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 32,
    "word": "連用名詞_252",
    "reading": "れんよう252",
    "hanViet": "LIÊN DỤNG 252",
    "meaning": "Danh từ liên dụng số 252",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第252番。",
      "furigana": "れんよう めいし の ごい だい252ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 252."
    }
  },
  {
    "id": "mimi-n3-03-033",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 33,
    "word": "連用名詞_253",
    "reading": "れんよう253",
    "hanViet": "LIÊN DỤNG 253",
    "meaning": "Danh từ liên dụng số 253",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第253番。",
      "furigana": "れんよう めいし の ごい だい253ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 253."
    }
  },
  {
    "id": "mimi-n3-03-034",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 34,
    "word": "連用名詞_254",
    "reading": "れんよう254",
    "hanViet": "LIÊN DỤNG 254",
    "meaning": "Danh từ liên dụng số 254",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第254番。",
      "furigana": "れんよう めいし の ごい だい254ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 254."
    }
  },
  {
    "id": "mimi-n3-03-035",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 35,
    "word": "連用名詞_255",
    "reading": "れんよう255",
    "hanViet": "LIÊN DỤNG 255",
    "meaning": "Danh từ liên dụng số 255",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第255番。",
      "furigana": "れんよう めいし の ごい だい255ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 255."
    }
  },
  {
    "id": "mimi-n3-03-036",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 36,
    "word": "連用名詞_256",
    "reading": "れんよう256",
    "hanViet": "LIÊN DỤNG 256",
    "meaning": "Danh từ liên dụng số 256",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第256番。",
      "furigana": "れんよう めいし の ごい だい256ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 256."
    }
  },
  {
    "id": "mimi-n3-03-037",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 37,
    "word": "連用名詞_257",
    "reading": "れんよう257",
    "hanViet": "LIÊN DỤNG 257",
    "meaning": "Danh từ liên dụng số 257",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第257番。",
      "furigana": "れんよう めいし の ごい だい257ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 257."
    }
  },
  {
    "id": "mimi-n3-03-038",
    "unit": 3,
    "unitTitle": "まとめ | 連用名詞 _ [221-258]",
    "index": 38,
    "word": "連用名詞_258",
    "reading": "れんよう258",
    "hanViet": "LIÊN DỤNG 258",
    "meaning": "Danh từ liên dụng số 258",
    "exampleSentence": {
      "japanese": "連用名詞の語彙第258番。",
      "furigana": "れんよう めいし の ごい だい258ばん。",
      "vietnamese": "Danh từ phái sinh từ động từ số 258."
    }
  },
  {
    "id": "mimi-n3-04-001",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 1,
    "word": "うらやましい",
    "reading": "うらやましい",
    "hanViet": "TIỆN",
    "meaning": "Ghen tị, thèm muốn",
    "exampleSentence": {
      "japanese": "友達の成功がうらやましい",
      "furigana": "ともだち の せいこう が うらやましい",
      "vietnamese": "Ghen tị trước thành công của bạn bè"
    }
  },
  {
    "id": "mimi-n3-04-002",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 2,
    "word": "悔しい",
    "reading": "くやしい",
    "hanViet": "HỐI",
    "meaning": "Tiếc nuối, cay cú",
    "exampleSentence": {
      "japanese": "試合に負けて悔しい",
      "furigana": "しあい に まけて くやしい",
      "vietnamese": "Tiếc nuối vì để thua trận đấu"
    }
  },
  {
    "id": "mimi-n3-04-003",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 3,
    "word": "情けない",
    "reading": "なさけない",
    "hanViet": "TÌNH",
    "meaning": "Đáng thương, thảm hại",
    "exampleSentence": {
      "japanese": "ミスをして情けない",
      "furigana": "ミス を して なさけない",
      "vietnamese": "Mắc sai lầm thật thảm hại"
    }
  },
  {
    "id": "mimi-n3-04-004",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 4,
    "word": "申し訳ない",
    "reading": "もうしわけない",
    "hanViet": "THÂN DỊCH",
    "meaning": "Thành thật xin lỗi",
    "exampleSentence": {
      "japanese": "ご迷惑をおかけして申し訳ない",
      "furigana": "ごめいわく を おかけ して もうしわけない",
      "vietnamese": "Thành thật xin lỗi vì đã làm phiền"
    }
  },
  {
    "id": "mimi-n3-04-005",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 5,
    "word": "形容詞_263",
    "reading": "けいようし263",
    "hanViet": "TÍNH TỪ 263",
    "meaning": "Tính từ đuôi i N3 số 263",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第263番。",
      "furigana": "Unit 3の ひっす けいようし だい263ばん。",
      "vietnamese": "Tính từ trọng tâm số 263 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-006",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 6,
    "word": "形容詞_264",
    "reading": "けいようし264",
    "hanViet": "TÍNH TỪ 264",
    "meaning": "Tính từ đuôi i N3 số 264",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第264番。",
      "furigana": "Unit 3の ひっす けいようし だい264ばん。",
      "vietnamese": "Tính từ trọng tâm số 264 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-007",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 7,
    "word": "形容詞_265",
    "reading": "けいようし265",
    "hanViet": "TÍNH TỪ 265",
    "meaning": "Tính từ đuôi i N3 số 265",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第265番。",
      "furigana": "Unit 3の ひっす けいようし だい265ばん。",
      "vietnamese": "Tính từ trọng tâm số 265 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-008",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 8,
    "word": "形容詞_266",
    "reading": "けいようし266",
    "hanViet": "TÍNH TỪ 266",
    "meaning": "Tính từ đuôi i N3 số 266",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第266番。",
      "furigana": "Unit 3の ひっす けいようし だい266ばん。",
      "vietnamese": "Tính từ trọng tâm số 266 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-009",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 9,
    "word": "形容詞_267",
    "reading": "けいようし267",
    "hanViet": "TÍNH TỪ 267",
    "meaning": "Tính từ đuôi i N3 số 267",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第267番。",
      "furigana": "Unit 3の ひっす けいようし だい267ばん。",
      "vietnamese": "Tính từ trọng tâm số 267 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-010",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 10,
    "word": "形容詞_268",
    "reading": "けいようし268",
    "hanViet": "TÍNH TỪ 268",
    "meaning": "Tính từ đuôi i N3 số 268",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第268番。",
      "furigana": "Unit 3の ひっす けいようし だい268ばん。",
      "vietnamese": "Tính từ trọng tâm số 268 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-011",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 11,
    "word": "形容詞_269",
    "reading": "けいようし269",
    "hanViet": "TÍNH TỪ 269",
    "meaning": "Tính từ đuôi i N3 số 269",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第269番。",
      "furigana": "Unit 3の ひっす けいようし だい269ばん。",
      "vietnamese": "Tính từ trọng tâm số 269 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-012",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 12,
    "word": "形容詞_270",
    "reading": "けいようし270",
    "hanViet": "TÍNH TỪ 270",
    "meaning": "Tính từ đuôi i N3 số 270",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第270番。",
      "furigana": "Unit 3の ひっす けいようし だい270ばん。",
      "vietnamese": "Tính từ trọng tâm số 270 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-013",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 13,
    "word": "形容詞_271",
    "reading": "けいようし271",
    "hanViet": "TÍNH TỪ 271",
    "meaning": "Tính từ đuôi i N3 số 271",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第271番。",
      "furigana": "Unit 3の ひっす けいようし だい271ばん。",
      "vietnamese": "Tính từ trọng tâm số 271 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-014",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 14,
    "word": "形容詞_272",
    "reading": "けいようし272",
    "hanViet": "TÍNH TỪ 272",
    "meaning": "Tính từ đuôi i N3 số 272",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第272番。",
      "furigana": "Unit 3の ひっす けいようし だい272ばん。",
      "vietnamese": "Tính từ trọng tâm số 272 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-015",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 15,
    "word": "形容詞_273",
    "reading": "けいようし273",
    "hanViet": "TÍNH TỪ 273",
    "meaning": "Tính từ đuôi i N3 số 273",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第273番。",
      "furigana": "Unit 3の ひっす けいようし だい273ばん。",
      "vietnamese": "Tính từ trọng tâm số 273 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-016",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 16,
    "word": "形容詞_274",
    "reading": "けいようし274",
    "hanViet": "TÍNH TỪ 274",
    "meaning": "Tính từ đuôi i N3 số 274",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第274番。",
      "furigana": "Unit 3の ひっす けいようし だい274ばん。",
      "vietnamese": "Tính từ trọng tâm số 274 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-017",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 17,
    "word": "形容詞_275",
    "reading": "けいようし275",
    "hanViet": "TÍNH TỪ 275",
    "meaning": "Tính từ đuôi i N3 số 275",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第275番。",
      "furigana": "Unit 3の ひっす けいようし だい275ばん。",
      "vietnamese": "Tính từ trọng tâm số 275 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-018",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 18,
    "word": "形容詞_276",
    "reading": "けいようし276",
    "hanViet": "TÍNH TỪ 276",
    "meaning": "Tính từ đuôi i N3 số 276",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第276番。",
      "furigana": "Unit 3の ひっす けいようし だい276ばん。",
      "vietnamese": "Tính từ trọng tâm số 276 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-019",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 19,
    "word": "形容詞_277",
    "reading": "けいようし277",
    "hanViet": "TÍNH TỪ 277",
    "meaning": "Tính từ đuôi i N3 số 277",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第277番。",
      "furigana": "Unit 3の ひっす けいようし だい277ばん。",
      "vietnamese": "Tính từ trọng tâm số 277 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-020",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 20,
    "word": "形容詞_278",
    "reading": "けいようし278",
    "hanViet": "TÍNH TỪ 278",
    "meaning": "Tính từ đuôi i N3 số 278",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第278番。",
      "furigana": "Unit 3の ひっす けいようし だい278ばん。",
      "vietnamese": "Tính từ trọng tâm số 278 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-021",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 21,
    "word": "形容詞_279",
    "reading": "けいようし279",
    "hanViet": "TÍNH TỪ 279",
    "meaning": "Tính từ đuôi i N3 số 279",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第279番。",
      "furigana": "Unit 3の ひっす けいようし だい279ばん。",
      "vietnamese": "Tính từ trọng tâm số 279 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-022",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 22,
    "word": "形容詞_280",
    "reading": "けいようし280",
    "hanViet": "TÍNH TỪ 280",
    "meaning": "Tính từ đuôi i N3 số 280",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第280番。",
      "furigana": "Unit 3の ひっす けいようし だい280ばん。",
      "vietnamese": "Tính từ trọng tâm số 280 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-023",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 23,
    "word": "形容詞_281",
    "reading": "けいようし281",
    "hanViet": "TÍNH TỪ 281",
    "meaning": "Tính từ đuôi i N3 số 281",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第281番。",
      "furigana": "Unit 3の ひっす けいようし だい281ばん。",
      "vietnamese": "Tính từ trọng tâm số 281 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-024",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 24,
    "word": "形容詞_282",
    "reading": "けいようし282",
    "hanViet": "TÍNH TỪ 282",
    "meaning": "Tính từ đuôi i N3 số 282",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第282番。",
      "furigana": "Unit 3の ひっす けいようし だい282ばん。",
      "vietnamese": "Tính từ trọng tâm số 282 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-025",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 25,
    "word": "形容詞_283",
    "reading": "けいようし283",
    "hanViet": "TÍNH TỪ 283",
    "meaning": "Tính từ đuôi i N3 số 283",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第283番。",
      "furigana": "Unit 3の ひっす けいようし だい283ばん。",
      "vietnamese": "Tính từ trọng tâm số 283 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-026",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 26,
    "word": "形容詞_284",
    "reading": "けいようし284",
    "hanViet": "TÍNH TỪ 284",
    "meaning": "Tính từ đuôi i N3 số 284",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第284番。",
      "furigana": "Unit 3の ひっす けいようし だい284ばん。",
      "vietnamese": "Tính từ trọng tâm số 284 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-027",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 27,
    "word": "形容詞_285",
    "reading": "けいようし285",
    "hanViet": "TÍNH TỪ 285",
    "meaning": "Tính từ đuôi i N3 số 285",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第285番。",
      "furigana": "Unit 3の ひっす けいようし だい285ばん。",
      "vietnamese": "Tính từ trọng tâm số 285 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-028",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 28,
    "word": "形容詞_286",
    "reading": "けいようし286",
    "hanViet": "TÍNH TỪ 286",
    "meaning": "Tính từ đuôi i N3 số 286",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第286番。",
      "furigana": "Unit 3の ひっす けいようし だい286ばん。",
      "vietnamese": "Tính từ trọng tâm số 286 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-029",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 29,
    "word": "形容詞_287",
    "reading": "けいようし287",
    "hanViet": "TÍNH TỪ 287",
    "meaning": "Tính từ đuôi i N3 số 287",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第287番。",
      "furigana": "Unit 3の ひっす けいようし だい287ばん。",
      "vietnamese": "Tính từ trọng tâm số 287 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-030",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 30,
    "word": "形容詞_288",
    "reading": "けいようし288",
    "hanViet": "TÍNH TỪ 288",
    "meaning": "Tính từ đuôi i N3 số 288",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第288番。",
      "furigana": "Unit 3の ひっす けいようし だい288ばん。",
      "vietnamese": "Tính từ trọng tâm số 288 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-031",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 31,
    "word": "形容詞_289",
    "reading": "けいようし289",
    "hanViet": "TÍNH TỪ 289",
    "meaning": "Tính từ đuôi i N3 số 289",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第289番。",
      "furigana": "Unit 3の ひっす けいようし だい289ばん。",
      "vietnamese": "Tính từ trọng tâm số 289 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-032",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 32,
    "word": "形容詞_290",
    "reading": "けいようし290",
    "hanViet": "TÍNH TỪ 290",
    "meaning": "Tính từ đuôi i N3 số 290",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第290番。",
      "furigana": "Unit 3の ひっす けいようし だい290ばん。",
      "vietnamese": "Tính từ trọng tâm số 290 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-033",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 33,
    "word": "形容詞_291",
    "reading": "けいようし291",
    "hanViet": "TÍNH TỪ 291",
    "meaning": "Tính từ đuôi i N3 số 291",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第291番。",
      "furigana": "Unit 3の ひっす けいようし だい291ばん。",
      "vietnamese": "Tính từ trọng tâm số 291 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-034",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 34,
    "word": "形容詞_292",
    "reading": "けいようし292",
    "hanViet": "TÍNH TỪ 292",
    "meaning": "Tính từ đuôi i N3 số 292",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第292番。",
      "furigana": "Unit 3の ひっす けいようし だい292ばん。",
      "vietnamese": "Tính từ trọng tâm số 292 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-035",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 35,
    "word": "形容詞_293",
    "reading": "けいようし293",
    "hanViet": "TÍNH TỪ 293",
    "meaning": "Tính từ đuôi i N3 số 293",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第293番。",
      "furigana": "Unit 3の ひっす けいようし だい293ばん。",
      "vietnamese": "Tính từ trọng tâm số 293 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-036",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 36,
    "word": "形容詞_294",
    "reading": "けいようし294",
    "hanViet": "TÍNH TỪ 294",
    "meaning": "Tính từ đuôi i N3 số 294",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第294番。",
      "furigana": "Unit 3の ひっす けいようし だい294ばん。",
      "vietnamese": "Tính từ trọng tâm số 294 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-037",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 37,
    "word": "形容詞_295",
    "reading": "けいようし295",
    "hanViet": "TÍNH TỪ 295",
    "meaning": "Tính từ đuôi i N3 số 295",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第295番。",
      "furigana": "Unit 3の ひっす けいようし だい295ばん。",
      "vietnamese": "Tính từ trọng tâm số 295 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-038",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 38,
    "word": "形容詞_296",
    "reading": "けいようし296",
    "hanViet": "TÍNH TỪ 296",
    "meaning": "Tính từ đuôi i N3 số 296",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第296番。",
      "furigana": "Unit 3の ひっす けいようし だい296ばん。",
      "vietnamese": "Tính từ trọng tâm số 296 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-039",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 39,
    "word": "形容詞_297",
    "reading": "けいようし297",
    "hanViet": "TÍNH TỪ 297",
    "meaning": "Tính từ đuôi i N3 số 297",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第297番。",
      "furigana": "Unit 3の ひっす けいようし だい297ばん。",
      "vietnamese": "Tính từ trọng tâm số 297 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-04-040",
    "unit": 4,
    "unitTitle": "Unit 3 | 形容詞 A _ [259-298]",
    "index": 40,
    "word": "形容詞_298",
    "reading": "けいようし298",
    "hanViet": "TÍNH TỪ 298",
    "meaning": "Tính từ đuôi i N3 số 298",
    "exampleSentence": {
      "japanese": "Unit 3の必須形容詞第298番。",
      "furigana": "Unit 3の ひっす けいようし だい298ばん。",
      "vietnamese": "Tính từ trọng tâm số 298 của Unit 3 Mimikara N3."
    }
  },
  {
    "id": "mimi-n3-05-001",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 1,
    "word": "高まる",
    "reading": "たかまる",
    "hanViet": "CAO",
    "meaning": "Tăng cao (tự ĐT)",
    "exampleSentence": {
      "japanese": "期待が高まる",
      "furigana": "きたい が たかまる",
      "vietnamese": "Kỳ vọng tăng cao"
    }
  },
  {
    "id": "mimi-n3-05-002",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 2,
    "word": "高める",
    "reading": "たかめる",
    "hanViet": "CAO",
    "meaning": "Nâng cao (tha ĐT)",
    "exampleSentence": {
      "japanese": "能力を高める",
      "furigana": "のうりょく を たかめる",
      "vietnamese": "Nâng cao năng lực"
    }
  },
  {
    "id": "mimi-n3-05-003",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 3,
    "word": "強まる",
    "reading": "つよまる",
    "hanViet": "CƯỜNG",
    "meaning": "Mạnh lên (tự ĐT)",
    "exampleSentence": {
      "japanese": "風が強まる",
      "furigana": "かぜ が つよまる",
      "vietnamese": "Gió mạnh lên"
    }
  },
  {
    "id": "mimi-n3-05-004",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 4,
    "word": "強める",
    "reading": "つよめる",
    "hanViet": "CƯỜNG",
    "meaning": "Tăng cường (tha ĐT)",
    "exampleSentence": {
      "japanese": "連携を強める",
      "furigana": "れんけい を つよめる",
      "vietnamese": "Tăng cường liên kết"
    }
  },
  {
    "id": "mimi-n3-05-005",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 5,
    "word": "変容_303",
    "reading": "へんよう303",
    "hanViet": "BIẾN DUNG 303",
    "meaning": "Động từ phái sinh tính từ số 303",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第303番。",
      "furigana": "イけいようし から はせい した どうし だい303ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 303."
    }
  },
  {
    "id": "mimi-n3-05-006",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 6,
    "word": "変容_304",
    "reading": "へんよう304",
    "hanViet": "BIẾN DUNG 304",
    "meaning": "Động từ phái sinh tính từ số 304",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第304番。",
      "furigana": "イけいようし から はせい した どうし だい304ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 304."
    }
  },
  {
    "id": "mimi-n3-05-007",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 7,
    "word": "変容_305",
    "reading": "へんよう305",
    "hanViet": "BIẾN DUNG 305",
    "meaning": "Động từ phái sinh tính từ số 305",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第305番。",
      "furigana": "イけいようし から はせい した どうし だい305ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 305."
    }
  },
  {
    "id": "mimi-n3-05-008",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 8,
    "word": "変容_306",
    "reading": "へんよう306",
    "hanViet": "BIẾN DUNG 306",
    "meaning": "Động từ phái sinh tính từ số 306",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第306番。",
      "furigana": "イけいようし から はせい した どうし だい306ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 306."
    }
  },
  {
    "id": "mimi-n3-05-009",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 9,
    "word": "変容_307",
    "reading": "へんよう307",
    "hanViet": "BIẾN DUNG 307",
    "meaning": "Động từ phái sinh tính từ số 307",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第307番。",
      "furigana": "イけいようし から はせい した どうし だい307ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 307."
    }
  },
  {
    "id": "mimi-n3-05-010",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 10,
    "word": "変容_308",
    "reading": "へんよう308",
    "hanViet": "BIẾN DUNG 308",
    "meaning": "Động từ phái sinh tính từ số 308",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第308番。",
      "furigana": "イけいようし から はせい した どうし だい308ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 308."
    }
  },
  {
    "id": "mimi-n3-05-011",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 11,
    "word": "変容_309",
    "reading": "へんよう309",
    "hanViet": "BIẾN DUNG 309",
    "meaning": "Động từ phái sinh tính từ số 309",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第309番。",
      "furigana": "イけいようし から はせい した どうし だい309ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 309."
    }
  },
  {
    "id": "mimi-n3-05-012",
    "unit": 5,
    "unitTitle": "まとめ | イ形容詞 + まる／める _ [299-310]",
    "index": 12,
    "word": "変容_310",
    "reading": "へんよう310",
    "hanViet": "BIẾN DUNG 310",
    "meaning": "Động từ phái sinh tính từ số 310",
    "exampleSentence": {
      "japanese": "イ形容詞から派生した動詞第310番。",
      "furigana": "イけいようし から はせい した どうし だい310ばん。",
      "vietnamese": "Động từ chuyển biến trạng thái số 310."
    }
  },
  {
    "id": "mimi-n3-06-001",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 1,
    "word": "名詞 B_1",
    "reading": "たんご_6_1",
    "hanViet": "HÁN TỰ 6-1",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#1)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-002",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 2,
    "word": "名詞 B_2",
    "reading": "たんご_6_2",
    "hanViet": "HÁN TỰ 6-2",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#2)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-003",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 3,
    "word": "名詞 B_3",
    "reading": "たんご_6_3",
    "hanViet": "HÁN TỰ 6-3",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#3)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-004",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 4,
    "word": "名詞 B_4",
    "reading": "たんご_6_4",
    "hanViet": "HÁN TỰ 6-4",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#4)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-005",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 5,
    "word": "名詞 B_5",
    "reading": "たんご_6_5",
    "hanViet": "HÁN TỰ 6-5",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#5)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-006",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 6,
    "word": "名詞 B_6",
    "reading": "たんご_6_6",
    "hanViet": "HÁN TỰ 6-6",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#6)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-007",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 7,
    "word": "名詞 B_7",
    "reading": "たんご_6_7",
    "hanViet": "HÁN TỰ 6-7",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#7)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-008",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 8,
    "word": "名詞 B_8",
    "reading": "たんご_6_8",
    "hanViet": "HÁN TỰ 6-8",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#8)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-009",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 9,
    "word": "名詞 B_9",
    "reading": "たんご_6_9",
    "hanViet": "HÁN TỰ 6-9",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#9)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-010",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 10,
    "word": "名詞 B_10",
    "reading": "たんご_6_10",
    "hanViet": "HÁN TỰ 6-10",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#10)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-011",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 11,
    "word": "名詞 B_11",
    "reading": "たんご_6_11",
    "hanViet": "HÁN TỰ 6-11",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#11)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-012",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 12,
    "word": "名詞 B_12",
    "reading": "たんご_6_12",
    "hanViet": "HÁN TỰ 6-12",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#12)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-013",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 13,
    "word": "名詞 B_13",
    "reading": "たんご_6_13",
    "hanViet": "HÁN TỰ 6-13",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#13)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-014",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 14,
    "word": "名詞 B_14",
    "reading": "たんご_6_14",
    "hanViet": "HÁN TỰ 6-14",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#14)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-015",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 15,
    "word": "名詞 B_15",
    "reading": "たんご_6_15",
    "hanViet": "HÁN TỰ 6-15",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#15)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-016",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 16,
    "word": "名詞 B_16",
    "reading": "たんご_6_16",
    "hanViet": "HÁN TỰ 6-16",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#16)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-017",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 17,
    "word": "名詞 B_17",
    "reading": "たんご_6_17",
    "hanViet": "HÁN TỰ 6-17",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#17)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-018",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 18,
    "word": "名詞 B_18",
    "reading": "たんご_6_18",
    "hanViet": "HÁN TỰ 6-18",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#18)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-019",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 19,
    "word": "名詞 B_19",
    "reading": "たんご_6_19",
    "hanViet": "HÁN TỰ 6-19",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#19)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-020",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 20,
    "word": "名詞 B_20",
    "reading": "たんご_6_20",
    "hanViet": "HÁN TỰ 6-20",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#20)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-021",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 21,
    "word": "名詞 B_21",
    "reading": "たんご_6_21",
    "hanViet": "HÁN TỰ 6-21",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#21)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-022",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 22,
    "word": "名詞 B_22",
    "reading": "たんご_6_22",
    "hanViet": "HÁN TỰ 6-22",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#22)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-023",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 23,
    "word": "名詞 B_23",
    "reading": "たんご_6_23",
    "hanViet": "HÁN TỰ 6-23",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#23)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-024",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 24,
    "word": "名詞 B_24",
    "reading": "たんご_6_24",
    "hanViet": "HÁN TỰ 6-24",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#24)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-025",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 25,
    "word": "名詞 B_25",
    "reading": "たんご_6_25",
    "hanViet": "HÁN TỰ 6-25",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#25)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-026",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 26,
    "word": "名詞 B_26",
    "reading": "たんご_6_26",
    "hanViet": "HÁN TỰ 6-26",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#26)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-027",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 27,
    "word": "名詞 B_27",
    "reading": "たんご_6_27",
    "hanViet": "HÁN TỰ 6-27",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#27)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-028",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 28,
    "word": "名詞 B_28",
    "reading": "たんご_6_28",
    "hanViet": "HÁN TỰ 6-28",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#28)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-029",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 29,
    "word": "名詞 B_29",
    "reading": "たんご_6_29",
    "hanViet": "HÁN TỰ 6-29",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#29)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-030",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 30,
    "word": "名詞 B_30",
    "reading": "たんご_6_30",
    "hanViet": "HÁN TỰ 6-30",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#30)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-031",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 31,
    "word": "名詞 B_31",
    "reading": "たんご_6_31",
    "hanViet": "HÁN TỰ 6-31",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#31)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-032",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 32,
    "word": "名詞 B_32",
    "reading": "たんご_6_32",
    "hanViet": "HÁN TỰ 6-32",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#32)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-033",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 33,
    "word": "名詞 B_33",
    "reading": "たんご_6_33",
    "hanViet": "HÁN TỰ 6-33",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#33)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-034",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 34,
    "word": "名詞 B_34",
    "reading": "たんご_6_34",
    "hanViet": "HÁN TỰ 6-34",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#34)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-035",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 35,
    "word": "名詞 B_35",
    "reading": "たんご_6_35",
    "hanViet": "HÁN TỰ 6-35",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#35)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-036",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 36,
    "word": "名詞 B_36",
    "reading": "たんご_6_36",
    "hanViet": "HÁN TỰ 6-36",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#36)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-037",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 37,
    "word": "名詞 B_37",
    "reading": "たんご_6_37",
    "hanViet": "HÁN TỰ 6-37",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#37)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-038",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 38,
    "word": "名詞 B_38",
    "reading": "たんご_6_38",
    "hanViet": "HÁN TỰ 6-38",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#38)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-039",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 39,
    "word": "名詞 B_39",
    "reading": "たんご_6_39",
    "hanViet": "HÁN TỰ 6-39",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#39)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-040",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 40,
    "word": "名詞 B_40",
    "reading": "たんご_6_40",
    "hanViet": "HÁN TỰ 6-40",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#40)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-041",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 41,
    "word": "名詞 B_41",
    "reading": "たんご_6_41",
    "hanViet": "HÁN TỰ 6-41",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#41)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-042",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 42,
    "word": "名詞 B_42",
    "reading": "たんご_6_42",
    "hanViet": "HÁN TỰ 6-42",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#42)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-043",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 43,
    "word": "名詞 B_43",
    "reading": "たんご_6_43",
    "hanViet": "HÁN TỰ 6-43",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#43)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-044",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 44,
    "word": "名詞 B_44",
    "reading": "たんご_6_44",
    "hanViet": "HÁN TỰ 6-44",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#44)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-045",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 45,
    "word": "名詞 B_45",
    "reading": "たんご_6_45",
    "hanViet": "HÁN TỰ 6-45",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#45)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-046",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 46,
    "word": "名詞 B_46",
    "reading": "たんご_6_46",
    "hanViet": "HÁN TỰ 6-46",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#46)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-047",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 47,
    "word": "名詞 B_47",
    "reading": "たんご_6_47",
    "hanViet": "HÁN TỰ 6-47",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#47)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-048",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 48,
    "word": "名詞 B_48",
    "reading": "たんご_6_48",
    "hanViet": "HÁN TỰ 6-48",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#48)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-049",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 49,
    "word": "名詞 B_49",
    "reading": "たんご_6_49",
    "hanViet": "HÁN TỰ 6-49",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#49)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-050",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 50,
    "word": "名詞 B_50",
    "reading": "たんご_6_50",
    "hanViet": "HÁN TỰ 6-50",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#50)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-051",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 51,
    "word": "名詞 B_51",
    "reading": "たんご_6_51",
    "hanViet": "HÁN TỰ 6-51",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#51)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-052",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 52,
    "word": "名詞 B_52",
    "reading": "たんご_6_52",
    "hanViet": "HÁN TỰ 6-52",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#52)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-053",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 53,
    "word": "名詞 B_53",
    "reading": "たんご_6_53",
    "hanViet": "HÁN TỰ 6-53",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#53)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-054",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 54,
    "word": "名詞 B_54",
    "reading": "たんご_6_54",
    "hanViet": "HÁN TỰ 6-54",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#54)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-055",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 55,
    "word": "名詞 B_55",
    "reading": "たんご_6_55",
    "hanViet": "HÁN TỰ 6-55",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#55)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-056",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 56,
    "word": "名詞 B_56",
    "reading": "たんご_6_56",
    "hanViet": "HÁN TỰ 6-56",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#56)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-057",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 57,
    "word": "名詞 B_57",
    "reading": "たんご_6_57",
    "hanViet": "HÁN TỰ 6-57",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#57)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-058",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 58,
    "word": "名詞 B_58",
    "reading": "たんご_6_58",
    "hanViet": "HÁN TỰ 6-58",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#58)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-059",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 59,
    "word": "名詞 B_59",
    "reading": "たんご_6_59",
    "hanViet": "HÁN TỰ 6-59",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#59)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-060",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 60,
    "word": "名詞 B_60",
    "reading": "たんご_6_60",
    "hanViet": "HÁN TỰ 6-60",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#60)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-061",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 61,
    "word": "名詞 B_61",
    "reading": "たんご_6_61",
    "hanViet": "HÁN TỰ 6-61",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#61)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-062",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 62,
    "word": "名詞 B_62",
    "reading": "たんご_6_62",
    "hanViet": "HÁN TỰ 6-62",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#62)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-063",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 63,
    "word": "名詞 B_63",
    "reading": "たんご_6_63",
    "hanViet": "HÁN TỰ 6-63",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#63)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-064",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 64,
    "word": "名詞 B_64",
    "reading": "たんご_6_64",
    "hanViet": "HÁN TỰ 6-64",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#64)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-065",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 65,
    "word": "名詞 B_65",
    "reading": "たんご_6_65",
    "hanViet": "HÁN TỰ 6-65",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#65)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-066",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 66,
    "word": "名詞 B_66",
    "reading": "たんご_6_66",
    "hanViet": "HÁN TỰ 6-66",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#66)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-067",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 67,
    "word": "名詞 B_67",
    "reading": "たんご_6_67",
    "hanViet": "HÁN TỰ 6-67",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#67)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-068",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 68,
    "word": "名詞 B_68",
    "reading": "たんご_6_68",
    "hanViet": "HÁN TỰ 6-68",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#68)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-069",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 69,
    "word": "名詞 B_69",
    "reading": "たんご_6_69",
    "hanViet": "HÁN TỰ 6-69",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#69)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-070",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 70,
    "word": "名詞 B_70",
    "reading": "たんご_6_70",
    "hanViet": "HÁN TỰ 6-70",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#70)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-071",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 71,
    "word": "名詞 B_71",
    "reading": "たんご_6_71",
    "hanViet": "HÁN TỰ 6-71",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#71)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-072",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 72,
    "word": "名詞 B_72",
    "reading": "たんご_6_72",
    "hanViet": "HÁN TỰ 6-72",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#72)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-073",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 73,
    "word": "名詞 B_73",
    "reading": "たんご_6_73",
    "hanViet": "HÁN TỰ 6-73",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#73)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-074",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 74,
    "word": "名詞 B_74",
    "reading": "たんご_6_74",
    "hanViet": "HÁN TỰ 6-74",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#74)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-075",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 75,
    "word": "名詞 B_75",
    "reading": "たんご_6_75",
    "hanViet": "HÁN TỰ 6-75",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#75)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-076",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 76,
    "word": "名詞 B_76",
    "reading": "たんご_6_76",
    "hanViet": "HÁN TỰ 6-76",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#76)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-077",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 77,
    "word": "名詞 B_77",
    "reading": "たんご_6_77",
    "hanViet": "HÁN TỰ 6-77",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#77)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-078",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 78,
    "word": "名詞 B_78",
    "reading": "たんご_6_78",
    "hanViet": "HÁN TỰ 6-78",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#78)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-079",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 79,
    "word": "名詞 B_79",
    "reading": "たんご_6_79",
    "hanViet": "HÁN TỰ 6-79",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#79)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-080",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 80,
    "word": "名詞 B_80",
    "reading": "たんご_6_80",
    "hanViet": "HÁN TỰ 6-80",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#80)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-081",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 81,
    "word": "名詞 B_81",
    "reading": "たんご_6_81",
    "hanViet": "HÁN TỰ 6-81",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#81)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-082",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 82,
    "word": "名詞 B_82",
    "reading": "たんご_6_82",
    "hanViet": "HÁN TỰ 6-82",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#82)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-083",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 83,
    "word": "名詞 B_83",
    "reading": "たんご_6_83",
    "hanViet": "HÁN TỰ 6-83",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#83)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-084",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 84,
    "word": "名詞 B_84",
    "reading": "たんご_6_84",
    "hanViet": "HÁN TỰ 6-84",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#84)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-085",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 85,
    "word": "名詞 B_85",
    "reading": "たんご_6_85",
    "hanViet": "HÁN TỰ 6-85",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#85)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-086",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 86,
    "word": "名詞 B_86",
    "reading": "たんご_6_86",
    "hanViet": "HÁN TỰ 6-86",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#86)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-087",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 87,
    "word": "名詞 B_87",
    "reading": "たんご_6_87",
    "hanViet": "HÁN TỰ 6-87",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#87)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-088",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 88,
    "word": "名詞 B_88",
    "reading": "たんご_6_88",
    "hanViet": "HÁN TỰ 6-88",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#88)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-089",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 89,
    "word": "名詞 B_89",
    "reading": "たんご_6_89",
    "hanViet": "HÁN TỰ 6-89",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#89)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-090",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 90,
    "word": "名詞 B_90",
    "reading": "たんご_6_90",
    "hanViet": "HÁN TỰ 6-90",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#90)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-091",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 91,
    "word": "名詞 B_91",
    "reading": "たんご_6_91",
    "hanViet": "HÁN TỰ 6-91",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#91)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-092",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 92,
    "word": "名詞 B_92",
    "reading": "たんご_6_92",
    "hanViet": "HÁN TỰ 6-92",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#92)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-093",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 93,
    "word": "名詞 B_93",
    "reading": "たんご_6_93",
    "hanViet": "HÁN TỰ 6-93",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#93)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-094",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 94,
    "word": "名詞 B_94",
    "reading": "たんご_6_94",
    "hanViet": "HÁN TỰ 6-94",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#94)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-095",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 95,
    "word": "名詞 B_95",
    "reading": "たんご_6_95",
    "hanViet": "HÁN TỰ 6-95",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#95)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-096",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 96,
    "word": "名詞 B_96",
    "reading": "たんご_6_96",
    "hanViet": "HÁN TỰ 6-96",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#96)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-097",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 97,
    "word": "名詞 B_97",
    "reading": "たんご_6_97",
    "hanViet": "HÁN TỰ 6-97",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#97)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-098",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 98,
    "word": "名詞 B_98",
    "reading": "たんご_6_98",
    "hanViet": "HÁN TỰ 6-98",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#98)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-099",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 99,
    "word": "名詞 B_99",
    "reading": "たんご_6_99",
    "hanViet": "HÁN TỰ 6-99",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#99)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-06-100",
    "unit": 6,
    "unitTitle": "Unit 4 | 名詞 B _ [311-410]",
    "index": 100,
    "word": "名詞 B_100",
    "reading": "たんご_6_100",
    "hanViet": "HÁN TỰ 6-100",
    "meaning": "Từ vựng chuyên sâu Unit 4 | 名詞 B (#100)",
    "exampleSentence": {
      "japanese": "Unit 4 | 名詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 4 | 名詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 4 | 名詞 B."
    }
  },
  {
    "id": "mimi-n3-07-001",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 1,
    "word": "動詞 B_1",
    "reading": "たんご_7_1",
    "hanViet": "HÁN TỰ 7-1",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#1)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-002",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 2,
    "word": "動詞 B_2",
    "reading": "たんご_7_2",
    "hanViet": "HÁN TỰ 7-2",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#2)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-003",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 3,
    "word": "動詞 B_3",
    "reading": "たんご_7_3",
    "hanViet": "HÁN TỰ 7-3",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#3)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-004",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 4,
    "word": "動詞 B_4",
    "reading": "たんご_7_4",
    "hanViet": "HÁN TỰ 7-4",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#4)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-005",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 5,
    "word": "動詞 B_5",
    "reading": "たんご_7_5",
    "hanViet": "HÁN TỰ 7-5",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#5)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-006",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 6,
    "word": "動詞 B_6",
    "reading": "たんご_7_6",
    "hanViet": "HÁN TỰ 7-6",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#6)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-007",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 7,
    "word": "動詞 B_7",
    "reading": "たんご_7_7",
    "hanViet": "HÁN TỰ 7-7",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#7)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-008",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 8,
    "word": "動詞 B_8",
    "reading": "たんご_7_8",
    "hanViet": "HÁN TỰ 7-8",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#8)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-009",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 9,
    "word": "動詞 B_9",
    "reading": "たんご_7_9",
    "hanViet": "HÁN TỰ 7-9",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#9)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-010",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 10,
    "word": "動詞 B_10",
    "reading": "たんご_7_10",
    "hanViet": "HÁN TỰ 7-10",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#10)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-011",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 11,
    "word": "動詞 B_11",
    "reading": "たんご_7_11",
    "hanViet": "HÁN TỰ 7-11",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#11)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-012",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 12,
    "word": "動詞 B_12",
    "reading": "たんご_7_12",
    "hanViet": "HÁN TỰ 7-12",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#12)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-013",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 13,
    "word": "動詞 B_13",
    "reading": "たんご_7_13",
    "hanViet": "HÁN TỰ 7-13",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#13)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-014",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 14,
    "word": "動詞 B_14",
    "reading": "たんご_7_14",
    "hanViet": "HÁN TỰ 7-14",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#14)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-015",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 15,
    "word": "動詞 B_15",
    "reading": "たんご_7_15",
    "hanViet": "HÁN TỰ 7-15",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#15)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-016",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 16,
    "word": "動詞 B_16",
    "reading": "たんご_7_16",
    "hanViet": "HÁN TỰ 7-16",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#16)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-017",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 17,
    "word": "動詞 B_17",
    "reading": "たんご_7_17",
    "hanViet": "HÁN TỰ 7-17",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#17)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-018",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 18,
    "word": "動詞 B_18",
    "reading": "たんご_7_18",
    "hanViet": "HÁN TỰ 7-18",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#18)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-019",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 19,
    "word": "動詞 B_19",
    "reading": "たんご_7_19",
    "hanViet": "HÁN TỰ 7-19",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#19)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-020",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 20,
    "word": "動詞 B_20",
    "reading": "たんご_7_20",
    "hanViet": "HÁN TỰ 7-20",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#20)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-021",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 21,
    "word": "動詞 B_21",
    "reading": "たんご_7_21",
    "hanViet": "HÁN TỰ 7-21",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#21)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-022",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 22,
    "word": "動詞 B_22",
    "reading": "たんご_7_22",
    "hanViet": "HÁN TỰ 7-22",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#22)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-023",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 23,
    "word": "動詞 B_23",
    "reading": "たんご_7_23",
    "hanViet": "HÁN TỰ 7-23",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#23)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-024",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 24,
    "word": "動詞 B_24",
    "reading": "たんご_7_24",
    "hanViet": "HÁN TỰ 7-24",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#24)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-025",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 25,
    "word": "動詞 B_25",
    "reading": "たんご_7_25",
    "hanViet": "HÁN TỰ 7-25",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#25)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-026",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 26,
    "word": "動詞 B_26",
    "reading": "たんご_7_26",
    "hanViet": "HÁN TỰ 7-26",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#26)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-027",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 27,
    "word": "動詞 B_27",
    "reading": "たんご_7_27",
    "hanViet": "HÁN TỰ 7-27",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#27)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-028",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 28,
    "word": "動詞 B_28",
    "reading": "たんご_7_28",
    "hanViet": "HÁN TỰ 7-28",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#28)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-029",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 29,
    "word": "動詞 B_29",
    "reading": "たんご_7_29",
    "hanViet": "HÁN TỰ 7-29",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#29)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-030",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 30,
    "word": "動詞 B_30",
    "reading": "たんご_7_30",
    "hanViet": "HÁN TỰ 7-30",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#30)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-031",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 31,
    "word": "動詞 B_31",
    "reading": "たんご_7_31",
    "hanViet": "HÁN TỰ 7-31",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#31)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-032",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 32,
    "word": "動詞 B_32",
    "reading": "たんご_7_32",
    "hanViet": "HÁN TỰ 7-32",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#32)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-033",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 33,
    "word": "動詞 B_33",
    "reading": "たんご_7_33",
    "hanViet": "HÁN TỰ 7-33",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#33)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-034",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 34,
    "word": "動詞 B_34",
    "reading": "たんご_7_34",
    "hanViet": "HÁN TỰ 7-34",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#34)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-035",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 35,
    "word": "動詞 B_35",
    "reading": "たんご_7_35",
    "hanViet": "HÁN TỰ 7-35",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#35)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-036",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 36,
    "word": "動詞 B_36",
    "reading": "たんご_7_36",
    "hanViet": "HÁN TỰ 7-36",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#36)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-037",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 37,
    "word": "動詞 B_37",
    "reading": "たんご_7_37",
    "hanViet": "HÁN TỰ 7-37",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#37)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-038",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 38,
    "word": "動詞 B_38",
    "reading": "たんご_7_38",
    "hanViet": "HÁN TỰ 7-38",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#38)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-039",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 39,
    "word": "動詞 B_39",
    "reading": "たんご_7_39",
    "hanViet": "HÁN TỰ 7-39",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#39)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-040",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 40,
    "word": "動詞 B_40",
    "reading": "たんご_7_40",
    "hanViet": "HÁN TỰ 7-40",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#40)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-041",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 41,
    "word": "動詞 B_41",
    "reading": "たんご_7_41",
    "hanViet": "HÁN TỰ 7-41",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#41)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-042",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 42,
    "word": "動詞 B_42",
    "reading": "たんご_7_42",
    "hanViet": "HÁN TỰ 7-42",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#42)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-043",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 43,
    "word": "動詞 B_43",
    "reading": "たんご_7_43",
    "hanViet": "HÁN TỰ 7-43",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#43)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-044",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 44,
    "word": "動詞 B_44",
    "reading": "たんご_7_44",
    "hanViet": "HÁN TỰ 7-44",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#44)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-045",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 45,
    "word": "動詞 B_45",
    "reading": "たんご_7_45",
    "hanViet": "HÁN TỰ 7-45",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#45)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-046",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 46,
    "word": "動詞 B_46",
    "reading": "たんご_7_46",
    "hanViet": "HÁN TỰ 7-46",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#46)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-047",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 47,
    "word": "動詞 B_47",
    "reading": "たんご_7_47",
    "hanViet": "HÁN TỰ 7-47",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#47)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-048",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 48,
    "word": "動詞 B_48",
    "reading": "たんご_7_48",
    "hanViet": "HÁN TỰ 7-48",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#48)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-049",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 49,
    "word": "動詞 B_49",
    "reading": "たんご_7_49",
    "hanViet": "HÁN TỰ 7-49",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#49)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-050",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 50,
    "word": "動詞 B_50",
    "reading": "たんご_7_50",
    "hanViet": "HÁN TỰ 7-50",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#50)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-051",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 51,
    "word": "動詞 B_51",
    "reading": "たんご_7_51",
    "hanViet": "HÁN TỰ 7-51",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#51)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-052",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 52,
    "word": "動詞 B_52",
    "reading": "たんご_7_52",
    "hanViet": "HÁN TỰ 7-52",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#52)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-053",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 53,
    "word": "動詞 B_53",
    "reading": "たんご_7_53",
    "hanViet": "HÁN TỰ 7-53",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#53)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-054",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 54,
    "word": "動詞 B_54",
    "reading": "たんご_7_54",
    "hanViet": "HÁN TỰ 7-54",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#54)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-055",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 55,
    "word": "動詞 B_55",
    "reading": "たんご_7_55",
    "hanViet": "HÁN TỰ 7-55",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#55)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-056",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 56,
    "word": "動詞 B_56",
    "reading": "たんご_7_56",
    "hanViet": "HÁN TỰ 7-56",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#56)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-057",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 57,
    "word": "動詞 B_57",
    "reading": "たんご_7_57",
    "hanViet": "HÁN TỰ 7-57",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#57)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-058",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 58,
    "word": "動詞 B_58",
    "reading": "たんご_7_58",
    "hanViet": "HÁN TỰ 7-58",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#58)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-059",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 59,
    "word": "動詞 B_59",
    "reading": "たんご_7_59",
    "hanViet": "HÁN TỰ 7-59",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#59)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-060",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 60,
    "word": "動詞 B_60",
    "reading": "たんご_7_60",
    "hanViet": "HÁN TỰ 7-60",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#60)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-061",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 61,
    "word": "動詞 B_61",
    "reading": "たんご_7_61",
    "hanViet": "HÁN TỰ 7-61",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#61)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-062",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 62,
    "word": "動詞 B_62",
    "reading": "たんご_7_62",
    "hanViet": "HÁN TỰ 7-62",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#62)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-063",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 63,
    "word": "動詞 B_63",
    "reading": "たんご_7_63",
    "hanViet": "HÁN TỰ 7-63",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#63)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-064",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 64,
    "word": "動詞 B_64",
    "reading": "たんご_7_64",
    "hanViet": "HÁN TỰ 7-64",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#64)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-065",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 65,
    "word": "動詞 B_65",
    "reading": "たんご_7_65",
    "hanViet": "HÁN TỰ 7-65",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#65)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-066",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 66,
    "word": "動詞 B_66",
    "reading": "たんご_7_66",
    "hanViet": "HÁN TỰ 7-66",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#66)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-067",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 67,
    "word": "動詞 B_67",
    "reading": "たんご_7_67",
    "hanViet": "HÁN TỰ 7-67",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#67)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-068",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 68,
    "word": "動詞 B_68",
    "reading": "たんご_7_68",
    "hanViet": "HÁN TỰ 7-68",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#68)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-069",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 69,
    "word": "動詞 B_69",
    "reading": "たんご_7_69",
    "hanViet": "HÁN TỰ 7-69",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#69)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-070",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 70,
    "word": "動詞 B_70",
    "reading": "たんご_7_70",
    "hanViet": "HÁN TỰ 7-70",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#70)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-071",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 71,
    "word": "動詞 B_71",
    "reading": "たんご_7_71",
    "hanViet": "HÁN TỰ 7-71",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#71)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-072",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 72,
    "word": "動詞 B_72",
    "reading": "たんご_7_72",
    "hanViet": "HÁN TỰ 7-72",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#72)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-073",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 73,
    "word": "動詞 B_73",
    "reading": "たんご_7_73",
    "hanViet": "HÁN TỰ 7-73",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#73)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-074",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 74,
    "word": "動詞 B_74",
    "reading": "たんご_7_74",
    "hanViet": "HÁN TỰ 7-74",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#74)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-075",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 75,
    "word": "動詞 B_75",
    "reading": "たんご_7_75",
    "hanViet": "HÁN TỰ 7-75",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#75)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-076",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 76,
    "word": "動詞 B_76",
    "reading": "たんご_7_76",
    "hanViet": "HÁN TỰ 7-76",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#76)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-077",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 77,
    "word": "動詞 B_77",
    "reading": "たんご_7_77",
    "hanViet": "HÁN TỰ 7-77",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#77)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-078",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 78,
    "word": "動詞 B_78",
    "reading": "たんご_7_78",
    "hanViet": "HÁN TỰ 7-78",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#78)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-079",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 79,
    "word": "動詞 B_79",
    "reading": "たんご_7_79",
    "hanViet": "HÁN TỰ 7-79",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#79)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-080",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 80,
    "word": "動詞 B_80",
    "reading": "たんご_7_80",
    "hanViet": "HÁN TỰ 7-80",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#80)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-081",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 81,
    "word": "動詞 B_81",
    "reading": "たんご_7_81",
    "hanViet": "HÁN TỰ 7-81",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#81)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-082",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 82,
    "word": "動詞 B_82",
    "reading": "たんご_7_82",
    "hanViet": "HÁN TỰ 7-82",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#82)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-083",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 83,
    "word": "動詞 B_83",
    "reading": "たんご_7_83",
    "hanViet": "HÁN TỰ 7-83",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#83)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-084",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 84,
    "word": "動詞 B_84",
    "reading": "たんご_7_84",
    "hanViet": "HÁN TỰ 7-84",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#84)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-085",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 85,
    "word": "動詞 B_85",
    "reading": "たんご_7_85",
    "hanViet": "HÁN TỰ 7-85",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#85)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-086",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 86,
    "word": "動詞 B_86",
    "reading": "たんご_7_86",
    "hanViet": "HÁN TỰ 7-86",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#86)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-087",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 87,
    "word": "動詞 B_87",
    "reading": "たんご_7_87",
    "hanViet": "HÁN TỰ 7-87",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#87)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-088",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 88,
    "word": "動詞 B_88",
    "reading": "たんご_7_88",
    "hanViet": "HÁN TỰ 7-88",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#88)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-089",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 89,
    "word": "動詞 B_89",
    "reading": "たんご_7_89",
    "hanViet": "HÁN TỰ 7-89",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#89)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-090",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 90,
    "word": "動詞 B_90",
    "reading": "たんご_7_90",
    "hanViet": "HÁN TỰ 7-90",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#90)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-091",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 91,
    "word": "動詞 B_91",
    "reading": "たんご_7_91",
    "hanViet": "HÁN TỰ 7-91",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#91)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-092",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 92,
    "word": "動詞 B_92",
    "reading": "たんご_7_92",
    "hanViet": "HÁN TỰ 7-92",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#92)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-093",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 93,
    "word": "動詞 B_93",
    "reading": "たんご_7_93",
    "hanViet": "HÁN TỰ 7-93",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#93)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-094",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 94,
    "word": "動詞 B_94",
    "reading": "たんご_7_94",
    "hanViet": "HÁN TỰ 7-94",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#94)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-095",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 95,
    "word": "動詞 B_95",
    "reading": "たんご_7_95",
    "hanViet": "HÁN TỰ 7-95",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#95)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-096",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 96,
    "word": "動詞 B_96",
    "reading": "たんご_7_96",
    "hanViet": "HÁN TỰ 7-96",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#96)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-097",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 97,
    "word": "動詞 B_97",
    "reading": "たんご_7_97",
    "hanViet": "HÁN TỰ 7-97",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#97)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-098",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 98,
    "word": "動詞 B_98",
    "reading": "たんご_7_98",
    "hanViet": "HÁN TỰ 7-98",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#98)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-099",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 99,
    "word": "動詞 B_99",
    "reading": "たんご_7_99",
    "hanViet": "HÁN TỰ 7-99",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#99)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-07-100",
    "unit": 7,
    "unitTitle": "Unit 5 | 動詞 B _ [411-510]",
    "index": 100,
    "word": "動詞 B_100",
    "reading": "たんご_7_100",
    "hanViet": "HÁN TỰ 7-100",
    "meaning": "Từ vựng chuyên sâu Unit 5 | 動詞 B (#100)",
    "exampleSentence": {
      "japanese": "Unit 5 | 動詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 5 | 動詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 5 | 動詞 B."
    }
  },
  {
    "id": "mimi-n3-08-001",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 1,
    "word": "カタカナ A_1",
    "reading": "たんご_8_1",
    "hanViet": "HÁN TỰ 8-1",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#1)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-002",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 2,
    "word": "カタカナ A_2",
    "reading": "たんご_8_2",
    "hanViet": "HÁN TỰ 8-2",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#2)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-003",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 3,
    "word": "カタカナ A_3",
    "reading": "たんご_8_3",
    "hanViet": "HÁN TỰ 8-3",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#3)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-004",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 4,
    "word": "カタカナ A_4",
    "reading": "たんご_8_4",
    "hanViet": "HÁN TỰ 8-4",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#4)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-005",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 5,
    "word": "カタカナ A_5",
    "reading": "たんご_8_5",
    "hanViet": "HÁN TỰ 8-5",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#5)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-006",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 6,
    "word": "カタカナ A_6",
    "reading": "たんご_8_6",
    "hanViet": "HÁN TỰ 8-6",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#6)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-007",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 7,
    "word": "カタカナ A_7",
    "reading": "たんご_8_7",
    "hanViet": "HÁN TỰ 8-7",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#7)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-008",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 8,
    "word": "カタカナ A_8",
    "reading": "たんご_8_8",
    "hanViet": "HÁN TỰ 8-8",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#8)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-009",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 9,
    "word": "カタカナ A_9",
    "reading": "たんご_8_9",
    "hanViet": "HÁN TỰ 8-9",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#9)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-010",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 10,
    "word": "カタカナ A_10",
    "reading": "たんご_8_10",
    "hanViet": "HÁN TỰ 8-10",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#10)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-011",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 11,
    "word": "カタカナ A_11",
    "reading": "たんご_8_11",
    "hanViet": "HÁN TỰ 8-11",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#11)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-012",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 12,
    "word": "カタカナ A_12",
    "reading": "たんご_8_12",
    "hanViet": "HÁN TỰ 8-12",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#12)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-013",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 13,
    "word": "カタカナ A_13",
    "reading": "たんご_8_13",
    "hanViet": "HÁN TỰ 8-13",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#13)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-014",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 14,
    "word": "カタカナ A_14",
    "reading": "たんご_8_14",
    "hanViet": "HÁN TỰ 8-14",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#14)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-015",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 15,
    "word": "カタカナ A_15",
    "reading": "たんご_8_15",
    "hanViet": "HÁN TỰ 8-15",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#15)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-016",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 16,
    "word": "カタカナ A_16",
    "reading": "たんご_8_16",
    "hanViet": "HÁN TỰ 8-16",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#16)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-017",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 17,
    "word": "カタカナ A_17",
    "reading": "たんご_8_17",
    "hanViet": "HÁN TỰ 8-17",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#17)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-018",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 18,
    "word": "カタカナ A_18",
    "reading": "たんご_8_18",
    "hanViet": "HÁN TỰ 8-18",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#18)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-019",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 19,
    "word": "カタカナ A_19",
    "reading": "たんご_8_19",
    "hanViet": "HÁN TỰ 8-19",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#19)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-020",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 20,
    "word": "カタカナ A_20",
    "reading": "たんご_8_20",
    "hanViet": "HÁN TỰ 8-20",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#20)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-021",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 21,
    "word": "カタカナ A_21",
    "reading": "たんご_8_21",
    "hanViet": "HÁN TỰ 8-21",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#21)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-022",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 22,
    "word": "カタカナ A_22",
    "reading": "たんご_8_22",
    "hanViet": "HÁN TỰ 8-22",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#22)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-023",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 23,
    "word": "カタカナ A_23",
    "reading": "たんご_8_23",
    "hanViet": "HÁN TỰ 8-23",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#23)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-024",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 24,
    "word": "カタカナ A_24",
    "reading": "たんご_8_24",
    "hanViet": "HÁN TỰ 8-24",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#24)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-025",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 25,
    "word": "カタカナ A_25",
    "reading": "たんご_8_25",
    "hanViet": "HÁN TỰ 8-25",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#25)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-026",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 26,
    "word": "カタカナ A_26",
    "reading": "たんご_8_26",
    "hanViet": "HÁN TỰ 8-26",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#26)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-027",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 27,
    "word": "カタカナ A_27",
    "reading": "たんご_8_27",
    "hanViet": "HÁN TỰ 8-27",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#27)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-028",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 28,
    "word": "カタカナ A_28",
    "reading": "たんご_8_28",
    "hanViet": "HÁN TỰ 8-28",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#28)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-029",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 29,
    "word": "カタカナ A_29",
    "reading": "たんご_8_29",
    "hanViet": "HÁN TỰ 8-29",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#29)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-030",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 30,
    "word": "カタカナ A_30",
    "reading": "たんご_8_30",
    "hanViet": "HÁN TỰ 8-30",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#30)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-031",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 31,
    "word": "カタカナ A_31",
    "reading": "たんご_8_31",
    "hanViet": "HÁN TỰ 8-31",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#31)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-032",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 32,
    "word": "カタカナ A_32",
    "reading": "たんご_8_32",
    "hanViet": "HÁN TỰ 8-32",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#32)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-033",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 33,
    "word": "カタカナ A_33",
    "reading": "たんご_8_33",
    "hanViet": "HÁN TỰ 8-33",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#33)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-034",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 34,
    "word": "カタカナ A_34",
    "reading": "たんご_8_34",
    "hanViet": "HÁN TỰ 8-34",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#34)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-035",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 35,
    "word": "カタカナ A_35",
    "reading": "たんご_8_35",
    "hanViet": "HÁN TỰ 8-35",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#35)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-036",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 36,
    "word": "カタカナ A_36",
    "reading": "たんご_8_36",
    "hanViet": "HÁN TỰ 8-36",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#36)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-037",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 37,
    "word": "カタカナ A_37",
    "reading": "たんご_8_37",
    "hanViet": "HÁN TỰ 8-37",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#37)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-038",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 38,
    "word": "カタカナ A_38",
    "reading": "たんご_8_38",
    "hanViet": "HÁN TỰ 8-38",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#38)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-039",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 39,
    "word": "カタカナ A_39",
    "reading": "たんご_8_39",
    "hanViet": "HÁN TỰ 8-39",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#39)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-08-040",
    "unit": 8,
    "unitTitle": "Unit 6 | カタカナ A _ [511-550]",
    "index": 40,
    "word": "カタカナ A_40",
    "reading": "たんご_8_40",
    "hanViet": "HÁN TỰ 8-40",
    "meaning": "Từ vựng chuyên sâu Unit 6 | カタカナ A (#40)",
    "exampleSentence": {
      "japanese": "Unit 6 | カタカナ Aの語彙をしっかりと覚える。",
      "furigana": "Unit 6 | カタカナ Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 6 | カタカナ A."
    }
  },
  {
    "id": "mimi-n3-09-001",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 1,
    "word": "形容詞 B_1",
    "reading": "たんご_9_1",
    "hanViet": "HÁN TỰ 9-1",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#1)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-002",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 2,
    "word": "形容詞 B_2",
    "reading": "たんご_9_2",
    "hanViet": "HÁN TỰ 9-2",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#2)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-003",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 3,
    "word": "形容詞 B_3",
    "reading": "たんご_9_3",
    "hanViet": "HÁN TỰ 9-3",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#3)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-004",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 4,
    "word": "形容詞 B_4",
    "reading": "たんご_9_4",
    "hanViet": "HÁN TỰ 9-4",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#4)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-005",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 5,
    "word": "形容詞 B_5",
    "reading": "たんご_9_5",
    "hanViet": "HÁN TỰ 9-5",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#5)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-006",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 6,
    "word": "形容詞 B_6",
    "reading": "たんご_9_6",
    "hanViet": "HÁN TỰ 9-6",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#6)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-007",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 7,
    "word": "形容詞 B_7",
    "reading": "たんご_9_7",
    "hanViet": "HÁN TỰ 9-7",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#7)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-008",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 8,
    "word": "形容詞 B_8",
    "reading": "たんご_9_8",
    "hanViet": "HÁN TỰ 9-8",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#8)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-009",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 9,
    "word": "形容詞 B_9",
    "reading": "たんご_9_9",
    "hanViet": "HÁN TỰ 9-9",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#9)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-010",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 10,
    "word": "形容詞 B_10",
    "reading": "たんご_9_10",
    "hanViet": "HÁN TỰ 9-10",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#10)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-011",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 11,
    "word": "形容詞 B_11",
    "reading": "たんご_9_11",
    "hanViet": "HÁN TỰ 9-11",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#11)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-012",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 12,
    "word": "形容詞 B_12",
    "reading": "たんご_9_12",
    "hanViet": "HÁN TỰ 9-12",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#12)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-013",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 13,
    "word": "形容詞 B_13",
    "reading": "たんご_9_13",
    "hanViet": "HÁN TỰ 9-13",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#13)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-014",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 14,
    "word": "形容詞 B_14",
    "reading": "たんご_9_14",
    "hanViet": "HÁN TỰ 9-14",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#14)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-015",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 15,
    "word": "形容詞 B_15",
    "reading": "たんご_9_15",
    "hanViet": "HÁN TỰ 9-15",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#15)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-016",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 16,
    "word": "形容詞 B_16",
    "reading": "たんご_9_16",
    "hanViet": "HÁN TỰ 9-16",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#16)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-017",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 17,
    "word": "形容詞 B_17",
    "reading": "たんご_9_17",
    "hanViet": "HÁN TỰ 9-17",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#17)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-018",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 18,
    "word": "形容詞 B_18",
    "reading": "たんご_9_18",
    "hanViet": "HÁN TỰ 9-18",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#18)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-019",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 19,
    "word": "形容詞 B_19",
    "reading": "たんご_9_19",
    "hanViet": "HÁN TỰ 9-19",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#19)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-020",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 20,
    "word": "形容詞 B_20",
    "reading": "たんご_9_20",
    "hanViet": "HÁN TỰ 9-20",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#20)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-021",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 21,
    "word": "形容詞 B_21",
    "reading": "たんご_9_21",
    "hanViet": "HÁN TỰ 9-21",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#21)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-022",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 22,
    "word": "形容詞 B_22",
    "reading": "たんご_9_22",
    "hanViet": "HÁN TỰ 9-22",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#22)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-023",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 23,
    "word": "形容詞 B_23",
    "reading": "たんご_9_23",
    "hanViet": "HÁN TỰ 9-23",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#23)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-024",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 24,
    "word": "形容詞 B_24",
    "reading": "たんご_9_24",
    "hanViet": "HÁN TỰ 9-24",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#24)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-025",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 25,
    "word": "形容詞 B_25",
    "reading": "たんご_9_25",
    "hanViet": "HÁN TỰ 9-25",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#25)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-026",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 26,
    "word": "形容詞 B_26",
    "reading": "たんご_9_26",
    "hanViet": "HÁN TỰ 9-26",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#26)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-027",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 27,
    "word": "形容詞 B_27",
    "reading": "たんご_9_27",
    "hanViet": "HÁN TỰ 9-27",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#27)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-028",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 28,
    "word": "形容詞 B_28",
    "reading": "たんご_9_28",
    "hanViet": "HÁN TỰ 9-28",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#28)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-029",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 29,
    "word": "形容詞 B_29",
    "reading": "たんご_9_29",
    "hanViet": "HÁN TỰ 9-29",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#29)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-030",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 30,
    "word": "形容詞 B_30",
    "reading": "たんご_9_30",
    "hanViet": "HÁN TỰ 9-30",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#30)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-031",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 31,
    "word": "形容詞 B_31",
    "reading": "たんご_9_31",
    "hanViet": "HÁN TỰ 9-31",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#31)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-032",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 32,
    "word": "形容詞 B_32",
    "reading": "たんご_9_32",
    "hanViet": "HÁN TỰ 9-32",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#32)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-033",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 33,
    "word": "形容詞 B_33",
    "reading": "たんご_9_33",
    "hanViet": "HÁN TỰ 9-33",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#33)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-034",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 34,
    "word": "形容詞 B_34",
    "reading": "たんご_9_34",
    "hanViet": "HÁN TỰ 9-34",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#34)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-035",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 35,
    "word": "形容詞 B_35",
    "reading": "たんご_9_35",
    "hanViet": "HÁN TỰ 9-35",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#35)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-036",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 36,
    "word": "形容詞 B_36",
    "reading": "たんご_9_36",
    "hanViet": "HÁN TỰ 9-36",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#36)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-037",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 37,
    "word": "形容詞 B_37",
    "reading": "たんご_9_37",
    "hanViet": "HÁN TỰ 9-37",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#37)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-038",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 38,
    "word": "形容詞 B_38",
    "reading": "たんご_9_38",
    "hanViet": "HÁN TỰ 9-38",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#38)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-039",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 39,
    "word": "形容詞 B_39",
    "reading": "たんご_9_39",
    "hanViet": "HÁN TỰ 9-39",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#39)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-09-040",
    "unit": 9,
    "unitTitle": "Unit 7 | 形容詞 B _ [551-590]",
    "index": 40,
    "word": "形容詞 B_40",
    "reading": "たんご_9_40",
    "hanViet": "HÁN TỰ 9-40",
    "meaning": "Từ vựng chuyên sâu Unit 7 | 形容詞 B (#40)",
    "exampleSentence": {
      "japanese": "Unit 7 | 形容詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 7 | 形容詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 7 | 形容詞 B."
    }
  },
  {
    "id": "mimi-n3-10-001",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 1,
    "word": "副詞 A_1",
    "reading": "たんご_10_1",
    "hanViet": "HÁN TỰ 10-1",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#1)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-002",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 2,
    "word": "副詞 A_2",
    "reading": "たんご_10_2",
    "hanViet": "HÁN TỰ 10-2",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#2)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-003",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 3,
    "word": "副詞 A_3",
    "reading": "たんご_10_3",
    "hanViet": "HÁN TỰ 10-3",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#3)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-004",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 4,
    "word": "副詞 A_4",
    "reading": "たんご_10_4",
    "hanViet": "HÁN TỰ 10-4",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#4)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-005",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 5,
    "word": "副詞 A_5",
    "reading": "たんご_10_5",
    "hanViet": "HÁN TỰ 10-5",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#5)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-006",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 6,
    "word": "副詞 A_6",
    "reading": "たんご_10_6",
    "hanViet": "HÁN TỰ 10-6",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#6)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-007",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 7,
    "word": "副詞 A_7",
    "reading": "たんご_10_7",
    "hanViet": "HÁN TỰ 10-7",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#7)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-008",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 8,
    "word": "副詞 A_8",
    "reading": "たんご_10_8",
    "hanViet": "HÁN TỰ 10-8",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#8)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-009",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 9,
    "word": "副詞 A_9",
    "reading": "たんご_10_9",
    "hanViet": "HÁN TỰ 10-9",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#9)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-010",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 10,
    "word": "副詞 A_10",
    "reading": "たんご_10_10",
    "hanViet": "HÁN TỰ 10-10",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#10)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-011",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 11,
    "word": "副詞 A_11",
    "reading": "たんご_10_11",
    "hanViet": "HÁN TỰ 10-11",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#11)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-012",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 12,
    "word": "副詞 A_12",
    "reading": "たんご_10_12",
    "hanViet": "HÁN TỰ 10-12",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#12)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-013",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 13,
    "word": "副詞 A_13",
    "reading": "たんご_10_13",
    "hanViet": "HÁN TỰ 10-13",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#13)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-014",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 14,
    "word": "副詞 A_14",
    "reading": "たんご_10_14",
    "hanViet": "HÁN TỰ 10-14",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#14)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-015",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 15,
    "word": "副詞 A_15",
    "reading": "たんご_10_15",
    "hanViet": "HÁN TỰ 10-15",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#15)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-016",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 16,
    "word": "副詞 A_16",
    "reading": "たんご_10_16",
    "hanViet": "HÁN TỰ 10-16",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#16)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-017",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 17,
    "word": "副詞 A_17",
    "reading": "たんご_10_17",
    "hanViet": "HÁN TỰ 10-17",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#17)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-018",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 18,
    "word": "副詞 A_18",
    "reading": "たんご_10_18",
    "hanViet": "HÁN TỰ 10-18",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#18)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-019",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 19,
    "word": "副詞 A_19",
    "reading": "たんご_10_19",
    "hanViet": "HÁN TỰ 10-19",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#19)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-020",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 20,
    "word": "副詞 A_20",
    "reading": "たんご_10_20",
    "hanViet": "HÁN TỰ 10-20",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#20)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-021",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 21,
    "word": "副詞 A_21",
    "reading": "たんご_10_21",
    "hanViet": "HÁN TỰ 10-21",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#21)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-022",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 22,
    "word": "副詞 A_22",
    "reading": "たんご_10_22",
    "hanViet": "HÁN TỰ 10-22",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#22)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-023",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 23,
    "word": "副詞 A_23",
    "reading": "たんご_10_23",
    "hanViet": "HÁN TỰ 10-23",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#23)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-024",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 24,
    "word": "副詞 A_24",
    "reading": "たんご_10_24",
    "hanViet": "HÁN TỰ 10-24",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#24)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-025",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 25,
    "word": "副詞 A_25",
    "reading": "たんご_10_25",
    "hanViet": "HÁN TỰ 10-25",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#25)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-026",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 26,
    "word": "副詞 A_26",
    "reading": "たんご_10_26",
    "hanViet": "HÁN TỰ 10-26",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#26)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-027",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 27,
    "word": "副詞 A_27",
    "reading": "たんご_10_27",
    "hanViet": "HÁN TỰ 10-27",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#27)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-028",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 28,
    "word": "副詞 A_28",
    "reading": "たんご_10_28",
    "hanViet": "HÁN TỰ 10-28",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#28)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-029",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 29,
    "word": "副詞 A_29",
    "reading": "たんご_10_29",
    "hanViet": "HÁN TỰ 10-29",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#29)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-030",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 30,
    "word": "副詞 A_30",
    "reading": "たんご_10_30",
    "hanViet": "HÁN TỰ 10-30",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#30)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-031",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 31,
    "word": "副詞 A_31",
    "reading": "たんご_10_31",
    "hanViet": "HÁN TỰ 10-31",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#31)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-032",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 32,
    "word": "副詞 A_32",
    "reading": "たんご_10_32",
    "hanViet": "HÁN TỰ 10-32",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#32)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-033",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 33,
    "word": "副詞 A_33",
    "reading": "たんご_10_33",
    "hanViet": "HÁN TỰ 10-33",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#33)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-034",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 34,
    "word": "副詞 A_34",
    "reading": "たんご_10_34",
    "hanViet": "HÁN TỰ 10-34",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#34)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-035",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 35,
    "word": "副詞 A_35",
    "reading": "たんご_10_35",
    "hanViet": "HÁN TỰ 10-35",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#35)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-036",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 36,
    "word": "副詞 A_36",
    "reading": "たんご_10_36",
    "hanViet": "HÁN TỰ 10-36",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#36)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-037",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 37,
    "word": "副詞 A_37",
    "reading": "たんご_10_37",
    "hanViet": "HÁN TỰ 10-37",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#37)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-038",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 38,
    "word": "副詞 A_38",
    "reading": "たんご_10_38",
    "hanViet": "HÁN TỰ 10-38",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#38)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-039",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 39,
    "word": "副詞 A_39",
    "reading": "たんご_10_39",
    "hanViet": "HÁN TỰ 10-39",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#39)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-040",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 40,
    "word": "副詞 A_40",
    "reading": "たんご_10_40",
    "hanViet": "HÁN TỰ 10-40",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#40)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-041",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 41,
    "word": "副詞 A_41",
    "reading": "たんご_10_41",
    "hanViet": "HÁN TỰ 10-41",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#41)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-042",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 42,
    "word": "副詞 A_42",
    "reading": "たんご_10_42",
    "hanViet": "HÁN TỰ 10-42",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#42)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-043",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 43,
    "word": "副詞 A_43",
    "reading": "たんご_10_43",
    "hanViet": "HÁN TỰ 10-43",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#43)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-044",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 44,
    "word": "副詞 A_44",
    "reading": "たんご_10_44",
    "hanViet": "HÁN TỰ 10-44",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#44)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-10-045",
    "unit": 10,
    "unitTitle": "Unit 8 | 副詞 A _ [591-635]",
    "index": 45,
    "word": "副詞 A_45",
    "reading": "たんご_10_45",
    "hanViet": "HÁN TỰ 10-45",
    "meaning": "Từ vựng chuyên sâu Unit 8 | 副詞 A (#45)",
    "exampleSentence": {
      "japanese": "Unit 8 | 副詞 Aの語彙をしっかりと覚える。",
      "furigana": "Unit 8 | 副詞 Aの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 8 | 副詞 A."
    }
  },
  {
    "id": "mimi-n3-11-001",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 1,
    "word": "名詞 C_1",
    "reading": "たんご_11_1",
    "hanViet": "HÁN TỰ 11-1",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#1)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-002",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 2,
    "word": "名詞 C_2",
    "reading": "たんご_11_2",
    "hanViet": "HÁN TỰ 11-2",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#2)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-003",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 3,
    "word": "名詞 C_3",
    "reading": "たんご_11_3",
    "hanViet": "HÁN TỰ 11-3",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#3)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-004",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 4,
    "word": "名詞 C_4",
    "reading": "たんご_11_4",
    "hanViet": "HÁN TỰ 11-4",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#4)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-005",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 5,
    "word": "名詞 C_5",
    "reading": "たんご_11_5",
    "hanViet": "HÁN TỰ 11-5",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#5)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-006",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 6,
    "word": "名詞 C_6",
    "reading": "たんご_11_6",
    "hanViet": "HÁN TỰ 11-6",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#6)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-007",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 7,
    "word": "名詞 C_7",
    "reading": "たんご_11_7",
    "hanViet": "HÁN TỰ 11-7",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#7)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-008",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 8,
    "word": "名詞 C_8",
    "reading": "たんご_11_8",
    "hanViet": "HÁN TỰ 11-8",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#8)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-009",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 9,
    "word": "名詞 C_9",
    "reading": "たんご_11_9",
    "hanViet": "HÁN TỰ 11-9",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#9)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-010",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 10,
    "word": "名詞 C_10",
    "reading": "たんご_11_10",
    "hanViet": "HÁN TỰ 11-10",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#10)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-011",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 11,
    "word": "名詞 C_11",
    "reading": "たんご_11_11",
    "hanViet": "HÁN TỰ 11-11",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#11)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-012",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 12,
    "word": "名詞 C_12",
    "reading": "たんご_11_12",
    "hanViet": "HÁN TỰ 11-12",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#12)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-013",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 13,
    "word": "名詞 C_13",
    "reading": "たんご_11_13",
    "hanViet": "HÁN TỰ 11-13",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#13)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-014",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 14,
    "word": "名詞 C_14",
    "reading": "たんご_11_14",
    "hanViet": "HÁN TỰ 11-14",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#14)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-015",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 15,
    "word": "名詞 C_15",
    "reading": "たんご_11_15",
    "hanViet": "HÁN TỰ 11-15",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#15)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-016",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 16,
    "word": "名詞 C_16",
    "reading": "たんご_11_16",
    "hanViet": "HÁN TỰ 11-16",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#16)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-017",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 17,
    "word": "名詞 C_17",
    "reading": "たんご_11_17",
    "hanViet": "HÁN TỰ 11-17",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#17)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-018",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 18,
    "word": "名詞 C_18",
    "reading": "たんご_11_18",
    "hanViet": "HÁN TỰ 11-18",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#18)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-019",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 19,
    "word": "名詞 C_19",
    "reading": "たんご_11_19",
    "hanViet": "HÁN TỰ 11-19",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#19)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-020",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 20,
    "word": "名詞 C_20",
    "reading": "たんご_11_20",
    "hanViet": "HÁN TỰ 11-20",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#20)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-021",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 21,
    "word": "名詞 C_21",
    "reading": "たんご_11_21",
    "hanViet": "HÁN TỰ 11-21",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#21)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-022",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 22,
    "word": "名詞 C_22",
    "reading": "たんご_11_22",
    "hanViet": "HÁN TỰ 11-22",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#22)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-023",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 23,
    "word": "名詞 C_23",
    "reading": "たんご_11_23",
    "hanViet": "HÁN TỰ 11-23",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#23)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-024",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 24,
    "word": "名詞 C_24",
    "reading": "たんご_11_24",
    "hanViet": "HÁN TỰ 11-24",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#24)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-025",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 25,
    "word": "名詞 C_25",
    "reading": "たんご_11_25",
    "hanViet": "HÁN TỰ 11-25",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#25)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-026",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 26,
    "word": "名詞 C_26",
    "reading": "たんご_11_26",
    "hanViet": "HÁN TỰ 11-26",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#26)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-027",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 27,
    "word": "名詞 C_27",
    "reading": "たんご_11_27",
    "hanViet": "HÁN TỰ 11-27",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#27)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-028",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 28,
    "word": "名詞 C_28",
    "reading": "たんご_11_28",
    "hanViet": "HÁN TỰ 11-28",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#28)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-029",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 29,
    "word": "名詞 C_29",
    "reading": "たんご_11_29",
    "hanViet": "HÁN TỰ 11-29",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#29)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-030",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 30,
    "word": "名詞 C_30",
    "reading": "たんご_11_30",
    "hanViet": "HÁN TỰ 11-30",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#30)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-031",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 31,
    "word": "名詞 C_31",
    "reading": "たんご_11_31",
    "hanViet": "HÁN TỰ 11-31",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#31)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-032",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 32,
    "word": "名詞 C_32",
    "reading": "たんご_11_32",
    "hanViet": "HÁN TỰ 11-32",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#32)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-033",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 33,
    "word": "名詞 C_33",
    "reading": "たんご_11_33",
    "hanViet": "HÁN TỰ 11-33",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#33)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-034",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 34,
    "word": "名詞 C_34",
    "reading": "たんご_11_34",
    "hanViet": "HÁN TỰ 11-34",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#34)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-035",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 35,
    "word": "名詞 C_35",
    "reading": "たんご_11_35",
    "hanViet": "HÁN TỰ 11-35",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#35)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-036",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 36,
    "word": "名詞 C_36",
    "reading": "たんご_11_36",
    "hanViet": "HÁN TỰ 11-36",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#36)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-037",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 37,
    "word": "名詞 C_37",
    "reading": "たんご_11_37",
    "hanViet": "HÁN TỰ 11-37",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#37)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-038",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 38,
    "word": "名詞 C_38",
    "reading": "たんご_11_38",
    "hanViet": "HÁN TỰ 11-38",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#38)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-039",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 39,
    "word": "名詞 C_39",
    "reading": "たんご_11_39",
    "hanViet": "HÁN TỰ 11-39",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#39)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-040",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 40,
    "word": "名詞 C_40",
    "reading": "たんご_11_40",
    "hanViet": "HÁN TỰ 11-40",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#40)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-041",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 41,
    "word": "名詞 C_41",
    "reading": "たんご_11_41",
    "hanViet": "HÁN TỰ 11-41",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#41)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-042",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 42,
    "word": "名詞 C_42",
    "reading": "たんご_11_42",
    "hanViet": "HÁN TỰ 11-42",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#42)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-043",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 43,
    "word": "名詞 C_43",
    "reading": "たんご_11_43",
    "hanViet": "HÁN TỰ 11-43",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#43)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-044",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 44,
    "word": "名詞 C_44",
    "reading": "たんご_11_44",
    "hanViet": "HÁN TỰ 11-44",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#44)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-045",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 45,
    "word": "名詞 C_45",
    "reading": "たんご_11_45",
    "hanViet": "HÁN TỰ 11-45",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#45)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-046",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 46,
    "word": "名詞 C_46",
    "reading": "たんご_11_46",
    "hanViet": "HÁN TỰ 11-46",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#46)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-047",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 47,
    "word": "名詞 C_47",
    "reading": "たんご_11_47",
    "hanViet": "HÁN TỰ 11-47",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#47)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-048",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 48,
    "word": "名詞 C_48",
    "reading": "たんご_11_48",
    "hanViet": "HÁN TỰ 11-48",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#48)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-049",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 49,
    "word": "名詞 C_49",
    "reading": "たんご_11_49",
    "hanViet": "HÁN TỰ 11-49",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#49)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-050",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 50,
    "word": "名詞 C_50",
    "reading": "たんご_11_50",
    "hanViet": "HÁN TỰ 11-50",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#50)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-051",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 51,
    "word": "名詞 C_51",
    "reading": "たんご_11_51",
    "hanViet": "HÁN TỰ 11-51",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#51)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-052",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 52,
    "word": "名詞 C_52",
    "reading": "たんご_11_52",
    "hanViet": "HÁN TỰ 11-52",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#52)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-053",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 53,
    "word": "名詞 C_53",
    "reading": "たんご_11_53",
    "hanViet": "HÁN TỰ 11-53",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#53)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-054",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 54,
    "word": "名詞 C_54",
    "reading": "たんご_11_54",
    "hanViet": "HÁN TỰ 11-54",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#54)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-055",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 55,
    "word": "名詞 C_55",
    "reading": "たんご_11_55",
    "hanViet": "HÁN TỰ 11-55",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#55)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-056",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 56,
    "word": "名詞 C_56",
    "reading": "たんご_11_56",
    "hanViet": "HÁN TỰ 11-56",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#56)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-057",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 57,
    "word": "名詞 C_57",
    "reading": "たんご_11_57",
    "hanViet": "HÁN TỰ 11-57",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#57)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-058",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 58,
    "word": "名詞 C_58",
    "reading": "たんご_11_58",
    "hanViet": "HÁN TỰ 11-58",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#58)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-059",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 59,
    "word": "名詞 C_59",
    "reading": "たんご_11_59",
    "hanViet": "HÁN TỰ 11-59",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#59)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-060",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 60,
    "word": "名詞 C_60",
    "reading": "たんご_11_60",
    "hanViet": "HÁN TỰ 11-60",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#60)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-061",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 61,
    "word": "名詞 C_61",
    "reading": "たんご_11_61",
    "hanViet": "HÁN TỰ 11-61",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#61)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-062",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 62,
    "word": "名詞 C_62",
    "reading": "たんご_11_62",
    "hanViet": "HÁN TỰ 11-62",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#62)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-063",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 63,
    "word": "名詞 C_63",
    "reading": "たんご_11_63",
    "hanViet": "HÁN TỰ 11-63",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#63)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-064",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 64,
    "word": "名詞 C_64",
    "reading": "たんご_11_64",
    "hanViet": "HÁN TỰ 11-64",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#64)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-065",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 65,
    "word": "名詞 C_65",
    "reading": "たんご_11_65",
    "hanViet": "HÁN TỰ 11-65",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#65)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-066",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 66,
    "word": "名詞 C_66",
    "reading": "たんご_11_66",
    "hanViet": "HÁN TỰ 11-66",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#66)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-067",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 67,
    "word": "名詞 C_67",
    "reading": "たんご_11_67",
    "hanViet": "HÁN TỰ 11-67",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#67)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-068",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 68,
    "word": "名詞 C_68",
    "reading": "たんご_11_68",
    "hanViet": "HÁN TỰ 11-68",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#68)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-069",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 69,
    "word": "名詞 C_69",
    "reading": "たんご_11_69",
    "hanViet": "HÁN TỰ 11-69",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#69)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-070",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 70,
    "word": "名詞 C_70",
    "reading": "たんご_11_70",
    "hanViet": "HÁN TỰ 11-70",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#70)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-071",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 71,
    "word": "名詞 C_71",
    "reading": "たんご_11_71",
    "hanViet": "HÁN TỰ 11-71",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#71)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-072",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 72,
    "word": "名詞 C_72",
    "reading": "たんご_11_72",
    "hanViet": "HÁN TỰ 11-72",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#72)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-073",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 73,
    "word": "名詞 C_73",
    "reading": "たんご_11_73",
    "hanViet": "HÁN TỰ 11-73",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#73)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-074",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 74,
    "word": "名詞 C_74",
    "reading": "たんご_11_74",
    "hanViet": "HÁN TỰ 11-74",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#74)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-075",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 75,
    "word": "名詞 C_75",
    "reading": "たんご_11_75",
    "hanViet": "HÁN TỰ 11-75",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#75)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-076",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 76,
    "word": "名詞 C_76",
    "reading": "たんご_11_76",
    "hanViet": "HÁN TỰ 11-76",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#76)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-077",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 77,
    "word": "名詞 C_77",
    "reading": "たんご_11_77",
    "hanViet": "HÁN TỰ 11-77",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#77)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-078",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 78,
    "word": "名詞 C_78",
    "reading": "たんご_11_78",
    "hanViet": "HÁN TỰ 11-78",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#78)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-079",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 79,
    "word": "名詞 C_79",
    "reading": "たんご_11_79",
    "hanViet": "HÁN TỰ 11-79",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#79)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-11-080",
    "unit": 11,
    "unitTitle": "Unit 9 | 名詞 C _ [636-715]",
    "index": 80,
    "word": "名詞 C_80",
    "reading": "たんご_11_80",
    "hanViet": "HÁN TỰ 11-80",
    "meaning": "Từ vựng chuyên sâu Unit 9 | 名詞 C (#80)",
    "exampleSentence": {
      "japanese": "Unit 9 | 名詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 9 | 名詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 9 | 名詞 C."
    }
  },
  {
    "id": "mimi-n3-12-001",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 1,
    "word": "動詞 C_1",
    "reading": "たんご_12_1",
    "hanViet": "HÁN TỰ 12-1",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#1)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-002",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 2,
    "word": "動詞 C_2",
    "reading": "たんご_12_2",
    "hanViet": "HÁN TỰ 12-2",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#2)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-003",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 3,
    "word": "動詞 C_3",
    "reading": "たんご_12_3",
    "hanViet": "HÁN TỰ 12-3",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#3)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-004",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 4,
    "word": "動詞 C_4",
    "reading": "たんご_12_4",
    "hanViet": "HÁN TỰ 12-4",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#4)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-005",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 5,
    "word": "動詞 C_5",
    "reading": "たんご_12_5",
    "hanViet": "HÁN TỰ 12-5",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#5)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-006",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 6,
    "word": "動詞 C_6",
    "reading": "たんご_12_6",
    "hanViet": "HÁN TỰ 12-6",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#6)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-007",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 7,
    "word": "動詞 C_7",
    "reading": "たんご_12_7",
    "hanViet": "HÁN TỰ 12-7",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#7)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-008",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 8,
    "word": "動詞 C_8",
    "reading": "たんご_12_8",
    "hanViet": "HÁN TỰ 12-8",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#8)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-009",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 9,
    "word": "動詞 C_9",
    "reading": "たんご_12_9",
    "hanViet": "HÁN TỰ 12-9",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#9)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-010",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 10,
    "word": "動詞 C_10",
    "reading": "たんご_12_10",
    "hanViet": "HÁN TỰ 12-10",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#10)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-011",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 11,
    "word": "動詞 C_11",
    "reading": "たんご_12_11",
    "hanViet": "HÁN TỰ 12-11",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#11)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-012",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 12,
    "word": "動詞 C_12",
    "reading": "たんご_12_12",
    "hanViet": "HÁN TỰ 12-12",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#12)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-013",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 13,
    "word": "動詞 C_13",
    "reading": "たんご_12_13",
    "hanViet": "HÁN TỰ 12-13",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#13)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-014",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 14,
    "word": "動詞 C_14",
    "reading": "たんご_12_14",
    "hanViet": "HÁN TỰ 12-14",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#14)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-015",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 15,
    "word": "動詞 C_15",
    "reading": "たんご_12_15",
    "hanViet": "HÁN TỰ 12-15",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#15)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-016",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 16,
    "word": "動詞 C_16",
    "reading": "たんご_12_16",
    "hanViet": "HÁN TỰ 12-16",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#16)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-017",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 17,
    "word": "動詞 C_17",
    "reading": "たんご_12_17",
    "hanViet": "HÁN TỰ 12-17",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#17)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-018",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 18,
    "word": "動詞 C_18",
    "reading": "たんご_12_18",
    "hanViet": "HÁN TỰ 12-18",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#18)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-019",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 19,
    "word": "動詞 C_19",
    "reading": "たんご_12_19",
    "hanViet": "HÁN TỰ 12-19",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#19)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-020",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 20,
    "word": "動詞 C_20",
    "reading": "たんご_12_20",
    "hanViet": "HÁN TỰ 12-20",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#20)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-021",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 21,
    "word": "動詞 C_21",
    "reading": "たんご_12_21",
    "hanViet": "HÁN TỰ 12-21",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#21)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-022",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 22,
    "word": "動詞 C_22",
    "reading": "たんご_12_22",
    "hanViet": "HÁN TỰ 12-22",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#22)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-023",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 23,
    "word": "動詞 C_23",
    "reading": "たんご_12_23",
    "hanViet": "HÁN TỰ 12-23",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#23)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-024",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 24,
    "word": "動詞 C_24",
    "reading": "たんご_12_24",
    "hanViet": "HÁN TỰ 12-24",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#24)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-025",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 25,
    "word": "動詞 C_25",
    "reading": "たんご_12_25",
    "hanViet": "HÁN TỰ 12-25",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#25)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-026",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 26,
    "word": "動詞 C_26",
    "reading": "たんご_12_26",
    "hanViet": "HÁN TỰ 12-26",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#26)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-027",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 27,
    "word": "動詞 C_27",
    "reading": "たんご_12_27",
    "hanViet": "HÁN TỰ 12-27",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#27)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-028",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 28,
    "word": "動詞 C_28",
    "reading": "たんご_12_28",
    "hanViet": "HÁN TỰ 12-28",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#28)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-029",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 29,
    "word": "動詞 C_29",
    "reading": "たんご_12_29",
    "hanViet": "HÁN TỰ 12-29",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#29)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-030",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 30,
    "word": "動詞 C_30",
    "reading": "たんご_12_30",
    "hanViet": "HÁN TỰ 12-30",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#30)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-031",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 31,
    "word": "動詞 C_31",
    "reading": "たんご_12_31",
    "hanViet": "HÁN TỰ 12-31",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#31)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-032",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 32,
    "word": "動詞 C_32",
    "reading": "たんご_12_32",
    "hanViet": "HÁN TỰ 12-32",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#32)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-033",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 33,
    "word": "動詞 C_33",
    "reading": "たんご_12_33",
    "hanViet": "HÁN TỰ 12-33",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#33)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-034",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 34,
    "word": "動詞 C_34",
    "reading": "たんご_12_34",
    "hanViet": "HÁN TỰ 12-34",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#34)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-035",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 35,
    "word": "動詞 C_35",
    "reading": "たんご_12_35",
    "hanViet": "HÁN TỰ 12-35",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#35)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-036",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 36,
    "word": "動詞 C_36",
    "reading": "たんご_12_36",
    "hanViet": "HÁN TỰ 12-36",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#36)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-037",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 37,
    "word": "動詞 C_37",
    "reading": "たんご_12_37",
    "hanViet": "HÁN TỰ 12-37",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#37)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-038",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 38,
    "word": "動詞 C_38",
    "reading": "たんご_12_38",
    "hanViet": "HÁN TỰ 12-38",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#38)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-039",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 39,
    "word": "動詞 C_39",
    "reading": "たんご_12_39",
    "hanViet": "HÁN TỰ 12-39",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#39)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-040",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 40,
    "word": "動詞 C_40",
    "reading": "たんご_12_40",
    "hanViet": "HÁN TỰ 12-40",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#40)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-041",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 41,
    "word": "動詞 C_41",
    "reading": "たんご_12_41",
    "hanViet": "HÁN TỰ 12-41",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#41)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-042",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 42,
    "word": "動詞 C_42",
    "reading": "たんご_12_42",
    "hanViet": "HÁN TỰ 12-42",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#42)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-043",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 43,
    "word": "動詞 C_43",
    "reading": "たんご_12_43",
    "hanViet": "HÁN TỰ 12-43",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#43)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-044",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 44,
    "word": "動詞 C_44",
    "reading": "たんご_12_44",
    "hanViet": "HÁN TỰ 12-44",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#44)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-045",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 45,
    "word": "動詞 C_45",
    "reading": "たんご_12_45",
    "hanViet": "HÁN TỰ 12-45",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#45)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-046",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 46,
    "word": "動詞 C_46",
    "reading": "たんご_12_46",
    "hanViet": "HÁN TỰ 12-46",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#46)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-047",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 47,
    "word": "動詞 C_47",
    "reading": "たんご_12_47",
    "hanViet": "HÁN TỰ 12-47",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#47)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-048",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 48,
    "word": "動詞 C_48",
    "reading": "たんご_12_48",
    "hanViet": "HÁN TỰ 12-48",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#48)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-049",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 49,
    "word": "動詞 C_49",
    "reading": "たんご_12_49",
    "hanViet": "HÁN TỰ 12-49",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#49)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-050",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 50,
    "word": "動詞 C_50",
    "reading": "たんご_12_50",
    "hanViet": "HÁN TỰ 12-50",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#50)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-051",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 51,
    "word": "動詞 C_51",
    "reading": "たんご_12_51",
    "hanViet": "HÁN TỰ 12-51",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#51)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-052",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 52,
    "word": "動詞 C_52",
    "reading": "たんご_12_52",
    "hanViet": "HÁN TỰ 12-52",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#52)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-053",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 53,
    "word": "動詞 C_53",
    "reading": "たんご_12_53",
    "hanViet": "HÁN TỰ 12-53",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#53)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-054",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 54,
    "word": "動詞 C_54",
    "reading": "たんご_12_54",
    "hanViet": "HÁN TỰ 12-54",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#54)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-055",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 55,
    "word": "動詞 C_55",
    "reading": "たんご_12_55",
    "hanViet": "HÁN TỰ 12-55",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#55)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-056",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 56,
    "word": "動詞 C_56",
    "reading": "たんご_12_56",
    "hanViet": "HÁN TỰ 12-56",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#56)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-057",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 57,
    "word": "動詞 C_57",
    "reading": "たんご_12_57",
    "hanViet": "HÁN TỰ 12-57",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#57)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-058",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 58,
    "word": "動詞 C_58",
    "reading": "たんご_12_58",
    "hanViet": "HÁN TỰ 12-58",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#58)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-059",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 59,
    "word": "動詞 C_59",
    "reading": "たんご_12_59",
    "hanViet": "HÁN TỰ 12-59",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#59)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-060",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 60,
    "word": "動詞 C_60",
    "reading": "たんご_12_60",
    "hanViet": "HÁN TỰ 12-60",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#60)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-061",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 61,
    "word": "動詞 C_61",
    "reading": "たんご_12_61",
    "hanViet": "HÁN TỰ 12-61",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#61)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-062",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 62,
    "word": "動詞 C_62",
    "reading": "たんご_12_62",
    "hanViet": "HÁN TỰ 12-62",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#62)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-063",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 63,
    "word": "動詞 C_63",
    "reading": "たんご_12_63",
    "hanViet": "HÁN TỰ 12-63",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#63)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-064",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 64,
    "word": "動詞 C_64",
    "reading": "たんご_12_64",
    "hanViet": "HÁN TỰ 12-64",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#64)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-065",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 65,
    "word": "動詞 C_65",
    "reading": "たんご_12_65",
    "hanViet": "HÁN TỰ 12-65",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#65)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-066",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 66,
    "word": "動詞 C_66",
    "reading": "たんご_12_66",
    "hanViet": "HÁN TỰ 12-66",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#66)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-067",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 67,
    "word": "動詞 C_67",
    "reading": "たんご_12_67",
    "hanViet": "HÁN TỰ 12-67",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#67)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-068",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 68,
    "word": "動詞 C_68",
    "reading": "たんご_12_68",
    "hanViet": "HÁN TỰ 12-68",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#68)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-069",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 69,
    "word": "動詞 C_69",
    "reading": "たんご_12_69",
    "hanViet": "HÁN TỰ 12-69",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#69)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-070",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 70,
    "word": "動詞 C_70",
    "reading": "たんご_12_70",
    "hanViet": "HÁN TỰ 12-70",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#70)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-071",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 71,
    "word": "動詞 C_71",
    "reading": "たんご_12_71",
    "hanViet": "HÁN TỰ 12-71",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#71)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-072",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 72,
    "word": "動詞 C_72",
    "reading": "たんご_12_72",
    "hanViet": "HÁN TỰ 12-72",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#72)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-073",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 73,
    "word": "動詞 C_73",
    "reading": "たんご_12_73",
    "hanViet": "HÁN TỰ 12-73",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#73)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-074",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 74,
    "word": "動詞 C_74",
    "reading": "たんご_12_74",
    "hanViet": "HÁN TỰ 12-74",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#74)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-075",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 75,
    "word": "動詞 C_75",
    "reading": "たんご_12_75",
    "hanViet": "HÁN TỰ 12-75",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#75)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-076",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 76,
    "word": "動詞 C_76",
    "reading": "たんご_12_76",
    "hanViet": "HÁN TỰ 12-76",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#76)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-077",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 77,
    "word": "動詞 C_77",
    "reading": "たんご_12_77",
    "hanViet": "HÁN TỰ 12-77",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#77)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-078",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 78,
    "word": "動詞 C_78",
    "reading": "たんご_12_78",
    "hanViet": "HÁN TỰ 12-78",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#78)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-079",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 79,
    "word": "動詞 C_79",
    "reading": "たんご_12_79",
    "hanViet": "HÁN TỰ 12-79",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#79)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-12-080",
    "unit": 12,
    "unitTitle": "Unit 10 | 動詞 C _ [716-795]",
    "index": 80,
    "word": "動詞 C_80",
    "reading": "たんご_12_80",
    "hanViet": "HÁN TỰ 12-80",
    "meaning": "Từ vựng chuyên sâu Unit 10 | 動詞 C (#80)",
    "exampleSentence": {
      "japanese": "Unit 10 | 動詞 Cの語彙をしっかりと覚える。",
      "furigana": "Unit 10 | 動詞 Cの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 10 | 動詞 C."
    }
  },
  {
    "id": "mimi-n3-13-001",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 1,
    "word": "カタカナ B_1",
    "reading": "たんご_13_1",
    "hanViet": "HÁN TỰ 13-1",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#1)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-002",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 2,
    "word": "カタカナ B_2",
    "reading": "たんご_13_2",
    "hanViet": "HÁN TỰ 13-2",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#2)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-003",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 3,
    "word": "カタカナ B_3",
    "reading": "たんご_13_3",
    "hanViet": "HÁN TỰ 13-3",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#3)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-004",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 4,
    "word": "カタカナ B_4",
    "reading": "たんご_13_4",
    "hanViet": "HÁN TỰ 13-4",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#4)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-005",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 5,
    "word": "カタカナ B_5",
    "reading": "たんご_13_5",
    "hanViet": "HÁN TỰ 13-5",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#5)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-006",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 6,
    "word": "カタカナ B_6",
    "reading": "たんご_13_6",
    "hanViet": "HÁN TỰ 13-6",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#6)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-007",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 7,
    "word": "カタカナ B_7",
    "reading": "たんご_13_7",
    "hanViet": "HÁN TỰ 13-7",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#7)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-008",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 8,
    "word": "カタカナ B_8",
    "reading": "たんご_13_8",
    "hanViet": "HÁN TỰ 13-8",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#8)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-009",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 9,
    "word": "カタカナ B_9",
    "reading": "たんご_13_9",
    "hanViet": "HÁN TỰ 13-9",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#9)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-010",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 10,
    "word": "カタカナ B_10",
    "reading": "たんご_13_10",
    "hanViet": "HÁN TỰ 13-10",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#10)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-011",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 11,
    "word": "カタカナ B_11",
    "reading": "たんご_13_11",
    "hanViet": "HÁN TỰ 13-11",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#11)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-012",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 12,
    "word": "カタカナ B_12",
    "reading": "たんご_13_12",
    "hanViet": "HÁN TỰ 13-12",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#12)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-013",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 13,
    "word": "カタカナ B_13",
    "reading": "たんご_13_13",
    "hanViet": "HÁN TỰ 13-13",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#13)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-014",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 14,
    "word": "カタカナ B_14",
    "reading": "たんご_13_14",
    "hanViet": "HÁN TỰ 13-14",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#14)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-015",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 15,
    "word": "カタカナ B_15",
    "reading": "たんご_13_15",
    "hanViet": "HÁN TỰ 13-15",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#15)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-016",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 16,
    "word": "カタカナ B_16",
    "reading": "たんご_13_16",
    "hanViet": "HÁN TỰ 13-16",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#16)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-017",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 17,
    "word": "カタカナ B_17",
    "reading": "たんご_13_17",
    "hanViet": "HÁN TỰ 13-17",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#17)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-018",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 18,
    "word": "カタカナ B_18",
    "reading": "たんご_13_18",
    "hanViet": "HÁN TỰ 13-18",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#18)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-019",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 19,
    "word": "カタカナ B_19",
    "reading": "たんご_13_19",
    "hanViet": "HÁN TỰ 13-19",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#19)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-020",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 20,
    "word": "カタカナ B_20",
    "reading": "たんご_13_20",
    "hanViet": "HÁN TỰ 13-20",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#20)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-021",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 21,
    "word": "カタカナ B_21",
    "reading": "たんご_13_21",
    "hanViet": "HÁN TỰ 13-21",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#21)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-022",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 22,
    "word": "カタカナ B_22",
    "reading": "たんご_13_22",
    "hanViet": "HÁN TỰ 13-22",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#22)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-023",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 23,
    "word": "カタカナ B_23",
    "reading": "たんご_13_23",
    "hanViet": "HÁN TỰ 13-23",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#23)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-024",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 24,
    "word": "カタカナ B_24",
    "reading": "たんご_13_24",
    "hanViet": "HÁN TỰ 13-24",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#24)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-025",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 25,
    "word": "カタカナ B_25",
    "reading": "たんご_13_25",
    "hanViet": "HÁN TỰ 13-25",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#25)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-026",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 26,
    "word": "カタカナ B_26",
    "reading": "たんご_13_26",
    "hanViet": "HÁN TỰ 13-26",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#26)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-027",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 27,
    "word": "カタカナ B_27",
    "reading": "たんご_13_27",
    "hanViet": "HÁN TỰ 13-27",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#27)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-028",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 28,
    "word": "カタカナ B_28",
    "reading": "たんご_13_28",
    "hanViet": "HÁN TỰ 13-28",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#28)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-029",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 29,
    "word": "カタカナ B_29",
    "reading": "たんご_13_29",
    "hanViet": "HÁN TỰ 13-29",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#29)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-030",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 30,
    "word": "カタカナ B_30",
    "reading": "たんご_13_30",
    "hanViet": "HÁN TỰ 13-30",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#30)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-031",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 31,
    "word": "カタカナ B_31",
    "reading": "たんご_13_31",
    "hanViet": "HÁN TỰ 13-31",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#31)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-032",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 32,
    "word": "カタカナ B_32",
    "reading": "たんご_13_32",
    "hanViet": "HÁN TỰ 13-32",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#32)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-033",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 33,
    "word": "カタカナ B_33",
    "reading": "たんご_13_33",
    "hanViet": "HÁN TỰ 13-33",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#33)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-034",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 34,
    "word": "カタカナ B_34",
    "reading": "たんご_13_34",
    "hanViet": "HÁN TỰ 13-34",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#34)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-035",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 35,
    "word": "カタカナ B_35",
    "reading": "たんご_13_35",
    "hanViet": "HÁN TỰ 13-35",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#35)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-036",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 36,
    "word": "カタカナ B_36",
    "reading": "たんご_13_36",
    "hanViet": "HÁN TỰ 13-36",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#36)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-037",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 37,
    "word": "カタカナ B_37",
    "reading": "たんご_13_37",
    "hanViet": "HÁN TỰ 13-37",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#37)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-038",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 38,
    "word": "カタカナ B_38",
    "reading": "たんご_13_38",
    "hanViet": "HÁN TỰ 13-38",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#38)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-039",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 39,
    "word": "カタカナ B_39",
    "reading": "たんご_13_39",
    "hanViet": "HÁN TỰ 13-39",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#39)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-13-040",
    "unit": 13,
    "unitTitle": "Unit 11 | カタカナ B _ [796-835]",
    "index": 40,
    "word": "カタカナ B_40",
    "reading": "たんご_13_40",
    "hanViet": "HÁN TỰ 13-40",
    "meaning": "Từ vựng chuyên sâu Unit 11 | カタカナ B (#40)",
    "exampleSentence": {
      "japanese": "Unit 11 | カタカナ Bの語彙をしっかりと覚える。",
      "furigana": "Unit 11 | カタカナ Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 11 | カタカナ B."
    }
  },
  {
    "id": "mimi-n3-14-001",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 1,
    "word": "料理の動詞_1",
    "reading": "たんご_14_1",
    "hanViet": "HÁN TỰ 14-1",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#1)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-002",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 2,
    "word": "料理の動詞_2",
    "reading": "たんご_14_2",
    "hanViet": "HÁN TỰ 14-2",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#2)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-003",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 3,
    "word": "料理の動詞_3",
    "reading": "たんご_14_3",
    "hanViet": "HÁN TỰ 14-3",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#3)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-004",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 4,
    "word": "料理の動詞_4",
    "reading": "たんご_14_4",
    "hanViet": "HÁN TỰ 14-4",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#4)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-005",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 5,
    "word": "料理の動詞_5",
    "reading": "たんご_14_5",
    "hanViet": "HÁN TỰ 14-5",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#5)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-006",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 6,
    "word": "料理の動詞_6",
    "reading": "たんご_14_6",
    "hanViet": "HÁN TỰ 14-6",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#6)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-007",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 7,
    "word": "料理の動詞_7",
    "reading": "たんご_14_7",
    "hanViet": "HÁN TỰ 14-7",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#7)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-008",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 8,
    "word": "料理の動詞_8",
    "reading": "たんご_14_8",
    "hanViet": "HÁN TỰ 14-8",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#8)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-009",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 9,
    "word": "料理の動詞_9",
    "reading": "たんご_14_9",
    "hanViet": "HÁN TỰ 14-9",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#9)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-14-010",
    "unit": 14,
    "unitTitle": "まとめ | 料理の動詞 _ [836-845]",
    "index": 10,
    "word": "料理の動詞_10",
    "reading": "たんご_14_10",
    "hanViet": "HÁN TỰ 14-10",
    "meaning": "Từ vựng chuyên sâu まとめ | 料理の動詞 (#10)",
    "exampleSentence": {
      "japanese": "まとめ | 料理の動詞の語彙をしっかりと覚える。",
      "furigana": "まとめ | 料理の動詞の ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của まとめ | 料理の動詞."
    }
  },
  {
    "id": "mimi-n3-15-001",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 1,
    "word": "副詞 B_1",
    "reading": "たんご_15_1",
    "hanViet": "HÁN TỰ 15-1",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#1)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-002",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 2,
    "word": "副詞 B_2",
    "reading": "たんご_15_2",
    "hanViet": "HÁN TỰ 15-2",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#2)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-003",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 3,
    "word": "副詞 B_3",
    "reading": "たんご_15_3",
    "hanViet": "HÁN TỰ 15-3",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#3)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-004",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 4,
    "word": "副詞 B_4",
    "reading": "たんご_15_4",
    "hanViet": "HÁN TỰ 15-4",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#4)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-005",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 5,
    "word": "副詞 B_5",
    "reading": "たんご_15_5",
    "hanViet": "HÁN TỰ 15-5",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#5)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-006",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 6,
    "word": "副詞 B_6",
    "reading": "たんご_15_6",
    "hanViet": "HÁN TỰ 15-6",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#6)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-007",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 7,
    "word": "副詞 B_7",
    "reading": "たんご_15_7",
    "hanViet": "HÁN TỰ 15-7",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#7)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-008",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 8,
    "word": "副詞 B_8",
    "reading": "たんご_15_8",
    "hanViet": "HÁN TỰ 15-8",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#8)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-009",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 9,
    "word": "副詞 B_9",
    "reading": "たんご_15_9",
    "hanViet": "HÁN TỰ 15-9",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#9)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-010",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 10,
    "word": "副詞 B_10",
    "reading": "たんご_15_10",
    "hanViet": "HÁN TỰ 15-10",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#10)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-011",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 11,
    "word": "副詞 B_11",
    "reading": "たんご_15_11",
    "hanViet": "HÁN TỰ 15-11",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#11)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-012",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 12,
    "word": "副詞 B_12",
    "reading": "たんご_15_12",
    "hanViet": "HÁN TỰ 15-12",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#12)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-013",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 13,
    "word": "副詞 B_13",
    "reading": "たんご_15_13",
    "hanViet": "HÁN TỰ 15-13",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#13)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-014",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 14,
    "word": "副詞 B_14",
    "reading": "たんご_15_14",
    "hanViet": "HÁN TỰ 15-14",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#14)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-015",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 15,
    "word": "副詞 B_15",
    "reading": "たんご_15_15",
    "hanViet": "HÁN TỰ 15-15",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#15)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-016",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 16,
    "word": "副詞 B_16",
    "reading": "たんご_15_16",
    "hanViet": "HÁN TỰ 15-16",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#16)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-017",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 17,
    "word": "副詞 B_17",
    "reading": "たんご_15_17",
    "hanViet": "HÁN TỰ 15-17",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#17)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-018",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 18,
    "word": "副詞 B_18",
    "reading": "たんご_15_18",
    "hanViet": "HÁN TỰ 15-18",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#18)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-019",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 19,
    "word": "副詞 B_19",
    "reading": "たんご_15_19",
    "hanViet": "HÁN TỰ 15-19",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#19)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-020",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 20,
    "word": "副詞 B_20",
    "reading": "たんご_15_20",
    "hanViet": "HÁN TỰ 15-20",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#20)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-021",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 21,
    "word": "副詞 B_21",
    "reading": "たんご_15_21",
    "hanViet": "HÁN TỰ 15-21",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#21)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-022",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 22,
    "word": "副詞 B_22",
    "reading": "たんご_15_22",
    "hanViet": "HÁN TỰ 15-22",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#22)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-023",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 23,
    "word": "副詞 B_23",
    "reading": "たんご_15_23",
    "hanViet": "HÁN TỰ 15-23",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#23)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-024",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 24,
    "word": "副詞 B_24",
    "reading": "たんご_15_24",
    "hanViet": "HÁN TỰ 15-24",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#24)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-025",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 25,
    "word": "副詞 B_25",
    "reading": "たんご_15_25",
    "hanViet": "HÁN TỰ 15-25",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#25)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-026",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 26,
    "word": "副詞 B_26",
    "reading": "たんご_15_26",
    "hanViet": "HÁN TỰ 15-26",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#26)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-027",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 27,
    "word": "副詞 B_27",
    "reading": "たんご_15_27",
    "hanViet": "HÁN TỰ 15-27",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#27)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-028",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 28,
    "word": "副詞 B_28",
    "reading": "たんご_15_28",
    "hanViet": "HÁN TỰ 15-28",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#28)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-029",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 29,
    "word": "副詞 B_29",
    "reading": "たんご_15_29",
    "hanViet": "HÁN TỰ 15-29",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#29)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-030",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 30,
    "word": "副詞 B_30",
    "reading": "たんご_15_30",
    "hanViet": "HÁN TỰ 15-30",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#30)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-031",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 31,
    "word": "副詞 B_31",
    "reading": "たんご_15_31",
    "hanViet": "HÁN TỰ 15-31",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#31)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-032",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 32,
    "word": "副詞 B_32",
    "reading": "たんご_15_32",
    "hanViet": "HÁN TỰ 15-32",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#32)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-033",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 33,
    "word": "副詞 B_33",
    "reading": "たんご_15_33",
    "hanViet": "HÁN TỰ 15-33",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#33)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-034",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 34,
    "word": "副詞 B_34",
    "reading": "たんご_15_34",
    "hanViet": "HÁN TỰ 15-34",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#34)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  },
  {
    "id": "mimi-n3-15-035",
    "unit": 15,
    "unitTitle": "Unit 12 | 副詞 B _ [846-880]",
    "index": 35,
    "word": "副詞 B_35",
    "reading": "たんご_15_35",
    "hanViet": "HÁN TỰ 15-35",
    "meaning": "Từ vựng chuyên sâu Unit 12 | 副詞 B (#35)",
    "exampleSentence": {
      "japanese": "Unit 12 | 副詞 Bの語彙をしっかりと覚える。",
      "furigana": "Unit 12 | 副詞 Bの ごい を しっかり と おぼえる。",
      "vietnamese": "Ghi nhớ chắc chắn từ vựng của Unit 12 | 副詞 B."
    }
  }
];
