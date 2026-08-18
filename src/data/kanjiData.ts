import type { KanjiItem } from '../types/kanji';

export const KANJI_DATA: KanjiItem[] = [
  // ================= N5 =================
  {
    id: 'k-nhat',
    kanji: '日',
    hanViet: 'NHẬT',
    strokes: 4,
    level: 'N5',
    onyomi: ['NICHI', 'JITSU'],
    kunyomi: ['hi', '-bi', '-ka'],
    mainRadical: '日',
    radicalName: 'Bộ Nhật (Mặt trời)',
    breakdown: [
      { radical: '囗', name: 'Bộ Vi', meaning: 'Vòng tròn khép kín bao quanh' },
      { radical: '一', name: 'Bộ Nhất', meaning: 'Một tia sáng chiếu ngang tâm' }
    ],
    mnemonic: 'Hình ảnh mặt trời hình tròn có một vệt sáng chói lọi ở giữa, đại diện cho ban ngày và đất nước Mặt Trời Mọc (Nhật Bản).',
    compounds: [
      { word: '日本', reading: 'にほん (Nihon)', meaning: 'Nước Nhật Bản', level: 'N5' },
      { word: '日曜日', reading: 'にちようび (Nichiyoubi)', meaning: 'Chủ nhật', level: 'N5' },
      { word: '休日', reading: 'きゅうじつ (Kyuujitsu)', meaning: 'Ngày nghỉ lễ', level: 'N4' },
      { word: '日光', reading: 'にっこう (Nikkou)', meaning: 'Ánh sáng mặt trời', level: 'N3' }
    ]
  },
  {
    id: 'k-nguyet',
    kanji: '月',
    hanViet: 'NGUYỆT',
    strokes: 4,
    level: 'N5',
    onyomi: ['GETSU', 'GATSU'],
    kunyomi: ['tsuki'],
    mainRadical: '月',
    radicalName: 'Bộ Nguyệt (Mặt trăng)',
    breakdown: [
      { radical: '月', name: 'Bộ Nguyệt', meaning: 'Hình ảnh vầng trăng khuyết với hai áng mây bay ngang qua' }
    ],
    mnemonic: 'Vầng trăng khuyết lơ lửng giữa trời đêm có mây che, đại diện cho mặt trăng và tháng trong năm.',
    compounds: [
      { word: '月曜日', reading: 'げつようび (Getsuyoubi)', meaning: 'Thứ hai', level: 'N5' },
      { word: '今月', reading: 'こんげつ (Kongetsu)', meaning: 'Tháng này', level: 'N5' },
      { word: '生年月日', reading: 'せいねんがっぴ (Seinengappi)', meaning: 'Ngày tháng năm sinh', level: 'N3' },
      { word: '月光', reading: 'げっこう (Gekkou)', meaning: 'Ánh trăng vằng vặc', level: 'N2' }
    ]
  },
  {
    id: 'k-moc',
    kanji: '木',
    hanViet: 'MỘC',
    strokes: 4,
    level: 'N5',
    onyomi: ['MOKU', 'BOKU'],
    kunyomi: ['ki', 'ko-'],
    mainRadical: '木',
    radicalName: 'Bộ Mộc (Cây cối)',
    breakdown: [
      { radical: '十', name: 'Bộ Thập', meaning: 'Thân và cành cây thẳng đứng' },
      { radical: '八', name: 'Bộ Bát', meaning: 'Hai nhánh rễ cắm sâu vào lòng đất' }
    ],
    mnemonic: 'Thân cây thẳng vươn lên cao với hai nhánh rễ đâm sâu xuống lòng đất.',
    compounds: [
      { word: '木曜日', reading: 'もくようび (Mokuyoubi)', meaning: 'Thứ năm', level: 'N5' },
      { word: '木', reading: 'き (Ki)', meaning: 'Cây cối, gỗ', level: 'N5' },
      { word: '木材', reading: 'もくざい (Mokuzai)', meaning: 'Gỗ xây dựng, vật liệu gỗ', level: 'N3' }
    ]
  },
  {
    id: 'k-thuy',
    kanji: '水',
    hanViet: 'THỦY',
    strokes: 4,
    level: 'N5',
    onyomi: ['SUI'],
    kunyomi: ['mizu'],
    mainRadical: '水',
    radicalName: 'Bộ Thủy (Nước)',
    breakdown: [
      { radical: '亅', name: 'Bộ Quyết', meaning: 'Dòng nước chính chảy xối xả ở giữa' },
      { radical: '冫', name: 'Hai bên', meaning: 'Những giọt nước bắn tung tóe sang hai bờ' }
    ],
    mnemonic: 'Dòng nước chảy xiết cuồn cuộn ở giữa làm những bọt nước bắn toé sang hai bên bờ.',
    compounds: [
      { word: '水', reading: 'みず (Mizu)', meaning: 'Nước', level: 'N5' },
      { word: '水曜日', reading: 'すいようび (Suiyoubi)', meaning: 'Thứ tư', level: 'N5' },
      { word: '水泳', reading: 'すいえい (Suiei)', meaning: 'Bơi lội', level: 'N4' },
      { word: '洪水', reading: 'こうずい (Kouzui)', meaning: 'Lũ lụt', level: 'N3' }
    ]
  },
  {
    id: 'k-hoa',
    kanji: '火',
    hanViet: 'HỎA',
    strokes: 4,
    level: 'N5',
    onyomi: ['KA'],
    kunyomi: ['hi', '-bi', 'ho-'],
    mainRadical: '火',
    radicalName: 'Bộ Hỏa (Ngọn lửa)',
    breakdown: [
      { radical: '人', name: 'Bộ Nhân', meaning: 'Người đứng giữa đống lửa' },
      { radical: '丷', name: 'Tia lửa', meaning: 'Hai đốm lửa bập bùng xung quanh' }
    ],
    mnemonic: 'Người dang hai tay hoảng sợ vì xung quanh bùng lên những tia lửa rực cháy.',
    compounds: [
      { word: '火曜日', reading: 'かようび (Kayoubi)', meaning: 'Thứ ba', level: 'N5' },
      { word: '火事', reading: 'かじ (Kaji)', meaning: 'Vụ hỏa hoạn, cháy nhà', level: 'N4' },
      { word: '花火', reading: 'はなび (Hanabi)', meaning: 'Pháo hoa', level: 'N4' },
      { word: '火災', reading: 'かさい (Kasai)', meaning: 'Thảm họa cháy', level: 'N2' }
    ]
  },
  {
    id: 'k-kim',
    kanji: '金',
    hanViet: 'KIM',
    strokes: 8,
    level: 'N5',
    onyomi: ['KIN', 'KON'],
    kunyomi: ['kane', 'kana-'],
    mainRadical: '金',
    radicalName: 'Bộ Kim (Kim loại, vàng)',
    breakdown: [
      { radical: '人', name: 'Bộ Nhân', meaning: 'Mái che bảo vệ trên đỉnh' },
      { radical: '王', name: 'Bộ Vương', meaning: 'Vua cai quản tài sản quý báu' },
      { radical: '丷', name: 'Hai hạt vàng', meaning: 'Quặng vàng quý giá chôn giấu trong đất' }
    ],
    mnemonic: 'Dưới mái che, nhà vua cất giữ những hạt vàng kim loại quý giá lấp lánh.',
    compounds: [
      { word: 'お金', reading: 'おかね (Okane)', meaning: 'Tiền bạc', level: 'N5' },
      { word: '金曜日', reading: 'きんようび (Kinyoubi)', meaning: 'Thứ sáu', level: 'N5' },
      { word: '料金', reading: 'りょうきん (Ryoukin)', meaning: 'Chi phí, cước phí', level: 'N4' },
      { word: '金融', reading: 'きんゆう (Kinyuu)', meaning: 'Tài chính, ngân hàng', level: 'N2' }
    ]
  },
  {
    id: 'k-tho',
    kanji: '土',
    hanViet: 'THỔ',
    strokes: 3,
    level: 'N5',
    onyomi: ['DO', 'TO'],
    kunyomi: ['tsuchi'],
    mainRadical: '土',
    radicalName: 'Bộ Thổ (Đất)',
    breakdown: [
      { radical: '十', name: 'Bộ Thập', meaning: 'Mầm cây mọc vươn thẳng lên' },
      { radical: '一', name: 'Bộ Nhất', meaning: 'Mặt đất màu mỡ nuôi dưỡng' }
    ],
    mnemonic: 'Từ mặt đất màu mỡ (nét ngang dưới dài), một chồi cây nhú lên đón ánh sáng.',
    compounds: [
      { word: '土曜日', reading: 'どようび (Doyoubi)', meaning: 'Thứ bảy', level: 'N5' },
      { word: '土地', reading: 'とち (Tochi)', meaning: 'Đất đai, khu đất', level: 'N3' },
      { word: 'お土産', reading: 'おみやげ (Omiyage)', meaning: 'Quà lưu niệm đặc sản', level: 'N4' }
    ]
  },
  {
    id: 'k-hoc',
    kanji: '学',
    hanViet: 'HỌC',
    strokes: 8,
    level: 'N5',
    onyomi: ['GAKU'],
    kunyomi: ['mana-bu'],
    mainRadical: '子',
    radicalName: 'Bộ Tử (Đứa trẻ)',
    breakdown: [
      { radical: '⺌', name: 'Bộ Tiểu biến thể', meaning: 'Những kiến thức, tia sáng trí tuệ' },
      { radical: '冖', name: 'Bộ Mịch', meaning: 'Mái trường che chở' },
      { radical: '子', name: 'Bộ Tử', meaning: 'Đứa trẻ ngồi học' }
    ],
    mnemonic: 'Đứa trẻ (子) ngồi dưới mái trường (冖) tiếp thu những tia sáng kiến thức (⺌) để thành người có học.',
    compounds: [
      { word: '学生', reading: 'がくせい (Gakusei)', meaning: 'Học sinh, sinh viên', level: 'N5' },
      { word: '学校', reading: 'がっこう (Gakkou)', meaning: 'Trường học', level: 'N5' },
      { word: '大学', reading: 'だいがく (Daigaku)', meaning: 'Trường đại học', level: 'N5' },
      { word: '留学', reading: 'りゅうがく (Ryuugaku)', meaning: 'Du học', level: 'N4' }
    ]
  },
  {
    id: 'k-sinh',
    kanji: '生',
    hanViet: 'SINH',
    strokes: 5,
    level: 'N5',
    onyomi: ['SEI', 'SHOU'],
    kunyomi: ['i-kiru', 'u-mareru', 'nama'],
    mainRadical: '生',
    radicalName: 'Bộ Sinh (Sự sống)',
    breakdown: [
      { radical: '土', name: 'Bộ Thổ', meaning: 'Đất mẹ nuôi sống vạn vật' },
      { radical: '丿', name: 'Mầm cây', meaning: 'Chồi non đâm chồi nảy lộc' }
    ],
    mnemonic: 'Chồi non mọc vươn lên từ lòng đất mẹ, biểu tượng cho sự sinh sôi nảy nở của sự sống.',
    compounds: [
      { word: '先生', reading: 'せんせい (Sensei)', meaning: 'Thầy cô giáo', level: 'N5' },
      { word: '生活', reading: 'せいかつ (Seikatsu)', meaning: 'Cuộc sống, sinh hoạt', level: 'N4' },
      { word: '生まれる', reading: 'うまれる (Umareru)', meaning: 'Được sinh ra', level: 'N4' },
      { word: '生ビール', reading: 'なまビール (Nama-biiru)', meaning: 'Bia tươi', level: 'N5' }
    ]
  },
  {
    id: 'k-nguoi',
    kanji: '人',
    hanViet: 'NHÂN',
    strokes: 2,
    level: 'N5',
    onyomi: ['JIN', 'NIN'],
    kunyomi: ['hito', '-ri', '-to'],
    mainRadical: '人',
    radicalName: 'Bộ Nhân (Con người)',
    breakdown: [
      { radical: '丿', name: 'Nét trái', meaning: 'Một người đứng tựa' },
      { radical: '乀', name: 'Nét phải', meaning: 'Một người đứng đỡ bên cạnh' }
    ],
    mnemonic: 'Con người sinh ra không thể sống một mình mà luôn phải dựa vào nhau để cùng đứng vững.',
    compounds: [
      { word: '日本人', reading: 'にほんじん (Nihonjin)', meaning: 'Người Nhật Bản', level: 'N5' },
      { word: '一人', reading: 'ひとり (Hitori)', meaning: 'Một người, một mình', level: 'N5' },
      { word: '大人', reading: 'おとな (Otona)', meaning: 'Người lớn, trưởng thành', level: 'N4' },
      { word: '人間', reading: 'にんげん (Ningen)', meaning: 'Con người, nhân loại', level: 'N3' }
    ]
  },

  // ================= N4 =================
  {
    id: 'k-tam',
    kanji: '心',
    hanViet: 'TÂM',
    strokes: 4,
    level: 'N4',
    onyomi: ['SHIN'],
    kunyomi: ['kokoro'],
    mainRadical: '心',
    radicalName: 'Bộ Tâm (Trái tim)',
    breakdown: [
      { radical: '丶', name: 'Ba giọt máu', meaning: 'Các ngăn và giọt máu trong tim' },
      { radical: '乚', name: 'Khung tim', meaning: 'Khoang tim ôm lấy cảm xúc' }
    ],
    mnemonic: 'Hình ảnh quả tim đang đập với các tâm thất, tâm nhĩ chứa đựng mọi cảm xúc chân thành.',
    compounds: [
      { word: '安心', reading: 'あんしん (Anshin)', meaning: 'Yên tâm, an lòng', level: 'N4' },
      { word: '心配', reading: 'しんぱい (Shinpai)', meaning: 'Lo lắng', level: 'N4' },
      { word: '中心', reading: 'ちゅうしん (Chuushin)', meaning: 'Trung tâm, cốt lõi', level: 'N3' },
      { word: '心理学', reading: 'しんりがく (Shinrigaku)', meaning: 'Tâm lý học', level: 'N2' }
    ]
  },
  {
    id: 'k-dien',
    kanji: '電',
    hanViet: 'ĐIỆN',
    strokes: 13,
    level: 'N4',
    onyomi: ['DEN'],
    kunyomi: [],
    mainRadical: '雨',
    radicalName: 'Bộ Vũ (Mưa)',
    breakdown: [
      { radical: '雨', name: 'Bộ Vũ', meaning: 'Cơn mưa giông sấm chớp' },
      { radical: '申', name: 'Bộ Thân biến thể (乚)', meaning: 'Tia sét ngoằn ngoèo xé toạc bầu trời' }
    ],
    mnemonic: 'Khi trời mưa bão (雨), trên trời đánh xuống tia sét chớp lóe (申 $\rightarrow$ 乚), đó chính là hiện tượng điện tự nhiên.',
    compounds: [
      { word: '電車', reading: 'でんしゃ (Densha)', meaning: 'Tàu điện', level: 'N5' },
      { word: '電話', reading: 'でんわ (Denwa)', meaning: 'Điện thoại', level: 'N5' },
      { word: '電気', reading: 'でんき (Denki)', meaning: 'Điện, đèn điện', level: 'N5' },
      { word: '電力', reading: 'でんりょく (Denryoku)', meaning: 'Điện lực, nguồn điện', level: 'N3' }
    ]
  },
  {
    id: 'k-ngon',
    kanji: '言',
    hanViet: 'NGÔN',
    strokes: 7,
    level: 'N4',
    onyomi: ['GEN', 'GON'],
    kunyomi: ['i-u', 'koto'],
    mainRadical: '言',
    radicalName: 'Bộ Ngôn (Lời nói)',
    breakdown: [
      { radical: '亠', name: 'Bộ Đầu', meaning: 'Ý nghĩ trên đỉnh đầu' },
      { radical: '二', name: 'Hai gạch', meaning: 'Sóng âm truyền đi' },
      { radical: '口', name: 'Bộ Khẩu', meaning: 'Cái miệng phát ra lời nói' }
    ],
    mnemonic: 'Từ cái miệng (口) phát ra những luồng âm thanh truyền tải tư tưởng trong đầu, tạo thành ngôn ngữ.',
    compounds: [
      { word: '言う', reading: 'いう (Iu)', meaning: 'Nói', level: 'N5' },
      { word: '言葉', reading: 'ことば (Kotoba)', meaning: 'Từ vựng, lời nói, ngôn ngữ', level: 'N4' },
      { word: '言語', reading: 'げんご (Gengo)', meaning: 'Ngôn ngữ học', level: 'N3' },
      { word: '伝言', reading: 'でんごん (Dengon)', meaning: 'Tin nhắn, lời nhắn', level: 'N3' }
    ]
  },
  {
    id: 'k-thuong',
    kanji: '商',
    hanViet: 'THƯƠNG',
    strokes: 11,
    level: 'N4',
    onyomi: ['SHOU'],
    kunyomi: ['akina-u'],
    mainRadical: '口',
    radicalName: 'Bộ Khẩu (Cái miệng)',
    breakdown: [
      { radical: '亠', name: 'Bộ Đầu', meaning: 'Mái nhà tiệm buôn' },
      { radical: '丷', name: 'Hai hạt vàng', meaning: 'Đồng tiền giao dịch' },
      { radical: '冂', name: 'Bộ Quynh', meaning: 'Quầy bán hàng' },
      { radical: '口', name: 'Bộ Khẩu', meaning: 'Cái miệng đon đả mời khách' }
    ],
    mnemonic: 'Người thương nhân đứng trong quầy hàng (冂) miệng (口) luôn tươi cười mời chào để kiếm tiền (丷), đó là nghề buôn bán kinh thương.',
    compounds: [
      { word: '商品', reading: 'しょうひん (Shouhin)', meaning: 'Hàng hóa, sản phẩm', level: 'N4' },
      { word: '商店', reading: 'しょうてん (Shouten)', meaning: 'Cửa hàng buôn bán', level: 'N4' },
      { word: '商業', reading: 'しょうぎょう (Shougyou)', meaning: 'Thương nghiệp, kinh doanh', level: 'N3' }
    ]
  },

  // ================= N3 =================
  {
    id: 'k-ai',
    kanji: '愛',
    hanViet: 'ÁI',
    strokes: 13,
    level: 'N3',
    onyomi: ['AI'],
    kunyomi: ['ito-shii', 'mana'],
    mainRadical: '心',
    radicalName: 'Bộ Tâm (Trái tim)',
    breakdown: [
      { radical: '爫', name: 'Bộ Trảo', meaning: 'Móng vuốt, bàn tay ôm lấy vuốt ve' },
      { radical: '冖', name: 'Bộ Mịch', meaning: 'Mái nhà che chở chở che' },
      { radical: '心', name: 'Bộ Tâm', meaning: 'Trái tim yêu thương' },
      { radical: '夂', name: 'Bộ Truy', meaning: 'Bước chân chậm rãi tiến đến' }
    ],
    mnemonic: 'Tình yêu chân chính là khi ta dùng cả bàn tay (爫) che chở (冖) cho trái tim (心) người ấy, cùng nhau bước đi (夂) chậm rãi suốt cuộc đời.',
    compounds: [
      { word: '愛する', reading: 'あいする (Aisuru)', meaning: 'Yêu thương', level: 'N3' },
      { word: '愛情', reading: 'あいじょう (Aijou)', meaning: 'Tình yêu thương', level: 'N3' },
      { word: '恋愛', reading: 'れんあい (Renai)', meaning: 'Tình yêu đôi lứa', level: 'N3' },
      { word: '愛国心', reading: 'あいこくしん (Aikokushin)', meaning: 'Lòng yêu nước', level: 'N1' }
    ]
  },
  {
    id: 'k-ngo',
    kanji: '悟',
    hanViet: 'NGỘ',
    strokes: 10,
    level: 'N3',
    onyomi: ['GO'],
    kunyomi: ['sato-ru'],
    mainRadical: '心',
    radicalName: 'Bộ Tâm (Tâm đứng 忄)',
    breakdown: [
      { radical: '忄', name: 'Bộ Tâm đứng', meaning: 'Tâm trí, nội tâm sâu thẳm' },
      { radical: '吾', name: 'Chữ Ngô (Năm cái miệng)', meaning: 'Tôi, bản thân mình (五 + 口)' }
    ],
    mnemonic: 'Khi tâm trí (忄) hiểu rõ và thấu suốt về chính bản thân mình (吾), ta đạt đến cảnh giới giác ngộ (悟).',
    compounds: [
      { word: '覚悟', reading: 'かくご (Kakugo)', meaning: 'Sự chuẩn bị tinh thần, quyết tâm', level: 'N2' },
      { word: '悟る', reading: 'さとる (Satoru)', meaning: 'Lĩnh hội, giác ngộ, nhận ra', level: 'N1' }
    ]
  },
  {
    id: 'k-nghia',
    kanji: '義',
    hanViet: 'NGHĨA',
    strokes: 13,
    level: 'N3',
    onyomi: ['GI'],
    kunyomi: [],
    mainRadical: '羊',
    radicalName: 'Bộ Dương (Con dê)',
    breakdown: [
      { radical: '羊', name: 'Bộ Dương', meaning: 'Con dê lương thiện, thuần khiết' },
      { radical: '我', name: 'Chữ Ngã', meaning: 'Bản thân tôi (Tay cầm giáo bảo vệ chính đạo)' }
    ],
    mnemonic: 'Bản thân ta (我) phải luôn giữ tâm tính thuần khiết và lương thiện như loài dê (羊), hành xử quang minh chính đại là sống có đạo nghĩa.',
    compounds: [
      { word: '義務', reading: 'ぎむ (Gimu)', meaning: 'Nghĩa vụ, bổn phận', level: 'N3' },
      { word: '正義', reading: 'せいぎ (Seigi)', meaning: 'Chính nghĩa, công lý', level: 'N2' },
      { word: '意義', reading: 'いぎ (Igi)', meaning: 'Ý nghĩa to lớn', level: 'N2' },
      { word: '定義', reading: 'ていぎ (Teigi)', meaning: 'Định nghĩa', level: 'N2' }
    ]
  },
  {
    id: 'k-mong',
    kanji: '夢',
    hanViet: 'MỘNG',
    strokes: 13,
    level: 'N3',
    onyomi: ['MU'],
    kunyomi: ['yume', 'yume-miru'],
    mainRadical: '夕',
    radicalName: 'Bộ Tịch (Buổi tối)',
    breakdown: [
      { radical: '艹', name: 'Bộ Thảo', meaning: 'Bãi cỏ xanh mướt' },
      { radical: '罒', name: 'Bộ Võng / Mục', meaning: 'Đôi mắt khép lại' },
      { radical: '冖', name: 'Màn đêm', meaning: 'Màn đêm bao phủ' },
      { radical: '夕', name: 'Bộ Tịch', meaning: 'Buổi chiều tối hoàng hôn' }
    ],
    mnemonic: 'Vào buổi tối (夕), khép đôi mắt (罒) ngủ trên bãi cỏ (艹) dưới màn đêm (冖), ta sẽ nhìn thấy những giấc mơ (夢) tuyệt đẹp.',
    compounds: [
      { word: '夢', reading: 'ゆめ (Yume)', meaning: 'Giấc mơ, ước mơ', level: 'N3' },
      { word: '悪夢', reading: 'あくむ (Akumu)', meaning: 'Cơn ác mộng', level: 'N2' },
      { word: '夢中', reading: 'むちゅう (Muchuu)', meaning: 'Say mê, chìm đắm', level: 'N2' }
    ]
  },

  // ================= N2 =================
  {
    id: 'k-canh',
    kanji: '響',
    hanViet: 'HƯỞNG',
    strokes: 20,
    level: 'N2',
    onyomi: ['KYOU'],
    kunyomi: ['hibi-ku'],
    mainRadical: '音',
    radicalName: 'Bộ Âm (Âm thanh)',
    breakdown: [
      { radical: '郷', name: 'Chữ Hương', meaning: 'Làng quê quê hương' },
      { radical: '音', name: 'Bộ Âm', meaning: 'Tiếng động, âm thanh' }
    ],
    mnemonic: 'Tiếng âm thanh (音) vang vọng từ làng quê (郷) xa xôi tạo nên sự cộng hưởng và ảnh hưởng sâu sắc đến tâm can.',
    compounds: [
      { word: '影響', reading: 'えいきょう (Eikyou)', meaning: 'Sự ảnh hưởng, tác động', level: 'N3' },
      { word: '響く', reading: 'ひびく (Hibiku)', meaning: 'Vang vọng, rung động lòng người', level: 'N2' },
      { word: '交響曲', reading: 'こうきょうきょく (Koukyoukyoku)', meaning: 'Bản giao hưởng', level: 'N1' }
    ]
  },
  {
    id: 'k-khoanh',
    kanji: '環',
    hanViet: 'HOÀN',
    strokes: 17,
    level: 'N2',
    onyomi: ['KAN'],
    kunyomi: ['wa'],
    mainRadical: '王',
    radicalName: 'Bộ Ngọc (Viên ngọc)',
    breakdown: [
      { radical: '王', name: 'Bộ Ngọc', meaning: 'Viên ngọc bích tròn trịa' },
      { radical: '睘', name: 'Bộ Hoàn biến thể', meaning: 'Mắt nhìn chăm chú vào vòng tròn bao quanh' }
    ],
    mnemonic: 'Một chiếc vòng ngọc bích (王) tròn trịa bao bọc xung quanh, đại diện cho tuần hoàn và môi trường sống.',
    compounds: [
      { word: '環境', reading: 'かんきょう (Kankyou)', meaning: 'Môi trường sống', level: 'N3' },
      { word: '循環', reading: 'じゅんかん (Junkan)', meaning: 'Tuần hoàn, vòng lặp', level: 'N2' },
      { word: '環状線', reading: 'かんじょうせん (Kanjousen)', meaning: 'Tuyến đường vành đai', level: 'N2' }
    ]
  },

  // ================= N1 =================
  {
    id: 'k-nhai',
    kanji: '嚼',
    hanViet: 'TƯỚC (NHAI)',
    strokes: 20,
    level: 'N1',
    onyomi: ['SHAKU'],
    kunyomi: ['ka-mu'],
    mainRadical: '口',
    radicalName: 'Bộ Khẩu (Cái miệng)',
    breakdown: [
      { radical: '口', name: 'Bộ Khẩu', meaning: 'Cái miệng đang nghiền ngẫm' },
      { radical: '爵', name: 'Chữ Tước', meaning: 'Chiếc chén rượu quý của quý tộc có chân nâng cao' }
    ],
    mnemonic: 'Dùng miệng (口) thưởng thức từng chút một như nâng chén rượu quý (爵), "nhai" chậm rãi để ngấm trọn vẹn tinh hoa kiến thức.',
    compounds: [
      { word: '咀嚼', reading: 'そしゃく (Soshaku)', meaning: 'Nhai kỹ thức ăn / Nghiền ngẫm thấu đáo kiến thức', level: 'N1' },
      { word: '咀嚼力', reading: 'そしゃくりょく (Soshakuryoku)', meaning: 'Khả năng tư duy nghiền ngẫm sâu sắc', level: 'N1' }
    ]
  },
  {
    id: 'k-uc',
    kanji: '鬱',
    hanViet: 'ÚC',
    strokes: 29,
    level: 'N1',
    onyomi: ['UTSU'],
    kunyomi: ['fusa-gu'],
    mainRadical: '鬯',
    radicalName: 'Bộ Sưởng (Rượu nghệ)',
    breakdown: [
      { radical: '木 + 木', name: 'Rừng cây Mộc', meaning: 'Cây cối rậm rạp che phủ kín mít' },
      { radical: '缶', name: 'Bộ Phẫu', meaning: 'Chiếc hũ gốm chứa đựng' },
      { radical: '冖', name: 'Bộ Mịch', meaning: 'Mái che ngăn cách' },
      { radical: '鬯', name: 'Bộ Sưởng', meaning: 'Rượu cúng lên men trong tối' },
      { radical: '彡', name: 'Bộ Sam', meaning: 'Làn khói u buồn tỏa ra' }
    ],
    mnemonic: 'Giữa rừng cây rậm rạp (木木) có hũ rượu ủ kín (缶) dưới mái che (冖), khói sương mờ mịt (彡) tạo cảm giác u uất, trầm cảm.',
    compounds: [
      { word: '憂鬱', reading: 'ゆううつ (Yuuutsu)', meaning: 'U uất, buồn rầu phiền muộn', level: 'N1' },
      { word: '鬱病', reading: 'うつびょう (Utsubyou)', meaning: 'Bệnh trầm cảm', level: 'N1' }
    ]
  }
];
