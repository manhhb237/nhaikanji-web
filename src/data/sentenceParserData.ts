import type { ParsedToken, SentenceAnalysisResult } from '../types/grammar';

// Token lookup table for common Japanese vocabulary
export const TOKEN_DICT: Record<string, Omit<ParsedToken, 'surface'>> = {
  '私': { reading: 'わたし (watashi)', hanViet: 'TƯ', pos: 'noun', posLabel: 'Đại từ nhân xưng', meaning: 'Tôi, bản thân tôi' },
  'わたし': { reading: 'わたし (watashi)', pos: 'noun', posLabel: 'Đại từ nhân xưng', meaning: 'Tôi, bản thân tôi' },
  'あなた': { reading: 'あなた (anata)', pos: 'noun', posLabel: 'Đại từ', meaning: 'Bạn, anh/chị' },
  '彼': { reading: 'かれ (kare)', hanViet: 'BỈ', pos: 'noun', posLabel: 'Đại từ', meaning: 'Anh ấy' },
  '彼女': { reading: 'かのじょ (kanojo)', hanViet: 'BỈ NỮ', pos: 'noun', posLabel: 'Đại từ', meaning: 'Cô ấy, bạn gái' },
  '先生': { reading: 'せんせい (sensei)', hanViet: 'TIÊN SINH', pos: 'noun', posLabel: 'Danh từ', meaning: 'Thầy cô giáo' },
  '学生': { reading: 'がくせい (gakusei)', hanViet: 'HỌC SINH', pos: 'noun', posLabel: 'Danh từ', meaning: 'Học sinh, sinh viên' },
  '日本': { reading: 'にほん (nihon)', hanViet: 'NHẬT BẢN', pos: 'noun', posLabel: 'Danh từ riêng', meaning: 'Nước Nhật Bản' },
  '日本語': { reading: 'にほんご (nihongo)', hanViet: 'NHẬT BẢN NGỮ', pos: 'noun', posLabel: 'Danh từ', meaning: 'Tiếng Nhật' },
  'ベトナム': { reading: 'ベトナム (betonamu)', pos: 'noun', posLabel: 'Danh từ riêng', meaning: 'Việt Nam' },
  '本': { reading: 'ほん (hon)', hanViet: 'BẢN', pos: 'noun', posLabel: 'Danh từ', meaning: 'Quyển sách' },
  '水': { reading: 'みず (mizu)', hanViet: 'THỦY', pos: 'noun', posLabel: 'Danh từ', meaning: 'Nước' },
  'ご飯': { reading: 'ごはん (gohan)', hanViet: 'PHẠN', pos: 'noun', posLabel: 'Danh từ', meaning: 'Cơm, bữa ăn' },
  '学校': { reading: 'がっこう (gakkou)', hanViet: 'HỌC HIỆU', pos: 'noun', posLabel: 'Danh từ', meaning: 'Trường học' },
  '電車': { reading: 'でんしゃ (densha)', hanViet: 'ĐIỆN XA', pos: 'noun', posLabel: 'Danh từ', meaning: 'Tàu điện' },
  '漢字': { reading: 'かんじ (kanji)', hanViet: 'HÁN TỰ', pos: 'noun', posLabel: 'Danh từ', meaning: 'Chữ Hán (Kanji)' },
  '勉強': { reading: 'べんきょう (benkyou)', hanViet: 'MIỄN CƯỠNG', pos: 'noun', posLabel: 'Danh từ', meaning: 'Học tập' },
  '友達': { reading: 'ともだち (tomodachi)', hanViet: 'HỮU ĐẠT', pos: 'noun', posLabel: 'Danh từ', meaning: 'Bạn bè' },
  '今日': { reading: 'きょう (kyou)', hanViet: 'KIM NHẬT', pos: 'noun', posLabel: 'Danh từ thời gian', meaning: 'Hôm nay' },
  '明日': { reading: 'あした (ashita)', hanViet: 'MINH NHẬT', pos: 'noun', posLabel: 'Danh từ thời gian', meaning: 'Ngày mai' },
  '昨日': { reading: 'きのう (kinou)', hanViet: 'TÁC NHẬT', pos: 'noun', posLabel: 'Danh từ thời gian', meaning: 'Hôm qua' },
  '毎日': { reading: 'まいにち (mainichi)', hanViet: 'MỖI NHẬT', pos: 'noun', posLabel: 'Trạng từ', meaning: 'Mỗi ngày' },
  '大好き': { reading: 'だいすき (daisuki)', hanViet: 'ĐẠI HẢO', pos: 'adjective', posLabel: 'Tính từ đuôi な', meaning: 'Rất thích' },
  '好き': { reading: 'すき (suki)', hanViet: 'HẢO', pos: 'adjective', posLabel: 'Tính từ đuôi な', meaning: 'Thích' },
  '面白い': { reading: 'おもしろい (omoshiroi)', hanViet: 'DIỆN BẠCH', pos: 'adjective', posLabel: 'Tính từ đuôi い', meaning: 'Thú vị, hay ho' },
  '難しい': { reading: 'むずかしい (muzukashii)', hanViet: 'NAN', pos: 'adjective', posLabel: 'Tính từ đuôi い', meaning: 'Khó khăn' },
  '食べる': { reading: 'たべる (taberu)', hanViet: 'THỰC', pos: 'verb', posLabel: 'Động từ nhóm 2', meaning: 'Ăn', baseForm: '食べる' },
  '食べます': { reading: 'たべます (tabemasu)', hanViet: 'THỰC', pos: 'verb', posLabel: 'Động từ lịch sự', meaning: 'Ăn', baseForm: '食べる' },
  '食べた': { reading: 'たべた (tabeta)', hanViet: 'THỰC', pos: 'verb', posLabel: 'Động từ quá khứ', meaning: 'Đã ăn', baseForm: '食べる' },
  '飲む': { reading: 'のむ (nomu)', hanViet: 'ẨM', pos: 'verb', posLabel: 'Động từ nhóm 1', meaning: 'Uống', baseForm: '飲む' },
  '飲みます': { reading: 'のみます (nomimasu)', hanViet: 'ẨM', pos: 'verb', posLabel: 'Động từ lịch sự', meaning: 'Uống', baseForm: '飲む' },
  '行く': { reading: 'いく (iku)', hanViet: 'HÀNH', pos: 'verb', posLabel: 'Động từ nhóm 1', meaning: 'Đi', baseForm: '行く' },
  '行きます': { reading: 'いきます (ikimasu)', hanViet: 'HÀNH', pos: 'verb', posLabel: 'Động từ lịch sự', meaning: 'Đi', baseForm: '行く' },
  '行った': { reading: 'いった (itta)', hanViet: 'HÀNH', pos: 'verb', posLabel: 'Động từ quá khứ', meaning: 'Đã đi', baseForm: '行く' },
  '見る': { reading: 'みる (miru)', hanViet: 'KIẾN', pos: 'verb', posLabel: 'Động từ nhóm 2', meaning: 'Nhìn, xem', baseForm: '見る' },
  '話す': { reading: 'はなす (hanasu)', hanViet: 'THOẠI', pos: 'verb', posLabel: 'Động từ nhóm 1', meaning: 'Nói chuyện', baseForm: '話す' },
  '書く': { reading: 'かく (kaku)', hanViet: 'THƯ', pos: 'verb', posLabel: 'Động từ nhóm 1', meaning: 'Viết', baseForm: '書く' },
  '買う': { reading: 'かう (kau)', hanViet: 'MÃI', pos: 'verb', posLabel: 'Động từ nhóm 1', meaning: 'Mua', baseForm: '買う' },
  'する': { reading: 'する (suru)', pos: 'verb', posLabel: 'Động từ nhóm 3', meaning: 'Làm', baseForm: 'する' },
  'します': { reading: 'します (shimasu)', pos: 'verb', posLabel: 'Động từ lịch sự', meaning: 'Làm', baseForm: 'する' },
  'です': { reading: 'です (desu)', pos: 'auxiliary', posLabel: 'Trợ động từ khẳng định', meaning: 'Là (lịch sự)' },
  'でした': { reading: 'でした (deshita)', pos: 'auxiliary', posLabel: 'Trợ động từ quá khứ', meaning: 'Đã là (lịch sự)' },
  'である': { reading: 'である (de aru)', pos: 'auxiliary', posLabel: 'Trợ động từ trang trọng', meaning: 'Là (văn viết)' },
  'だ': { reading: 'だ (da)', pos: 'auxiliary', posLabel: 'Trợ động từ thân mật', meaning: 'Là (thể thường)' },
  // Trợ từ
  'は': { reading: 'wa', pos: 'particle', posLabel: 'Trợ từ chủ đề', meaning: 'Đánh dấu chủ ngữ / chủ đề được nhắc tới', grammarNote: 'Nhấn mạnh phần vị ngữ đằng sau' },
  'が': { reading: 'ga', pos: 'particle', posLabel: 'Trợ từ chủ ngữ', meaning: 'Đánh dấu chủ thể hành động hoặc đối tượng của tính từ', grammarNote: 'Dùng với tính từ chỉ sở thích (好き), khả năng (できる), mong muốn' },
  'を': { reading: 'wo / o', pos: 'particle', posLabel: 'Trợ từ tân ngữ', meaning: 'Chỉ đối tượng trực tiếp chịu tác động của hành động' },
  'に': { reading: 'ni', pos: 'particle', posLabel: 'Trợ từ địa điểm / thời gian', meaning: 'Chỉ đích đến, thời gian cụ thể, hoặc đối tượng tiếp nhận' },
  'で': { reading: 'de', pos: 'particle', posLabel: 'Trợ từ phương tiện / nơi chốn', meaning: 'Chỉ nơi diễn ra hành động, phương tiện hoặc nguyên nhân' },
  'へ': { reading: 'e', pos: 'particle', posLabel: 'Trợ từ hướng di chuyển', meaning: 'Chỉ phương hướng di chuyển tới đâu' },
  'と': { reading: 'to', pos: 'particle', posLabel: 'Trợ từ liên kết / cùng với', meaning: 'Và, cùng với ai đó' },
  'も': { reading: 'mo', pos: 'particle', posLabel: 'Trợ từ đồng nhất', meaning: 'Cũng, cả hai' },
  'から': { reading: 'kara', pos: 'particle', posLabel: 'Trợ từ điểm xuất phát', meaning: 'Từ đâu, bởi vì' },
  'まで': { reading: 'made', pos: 'particle', posLabel: 'Trợ từ giới hạn', meaning: 'Đến tận đâu, cho tới khi' },
  'より': { reading: 'yori', pos: 'particle', posLabel: 'Trợ từ so sánh', meaning: 'Hơn, so với' },
  'の': { reading: 'no', pos: 'particle', posLabel: 'Trợ từ sở hữu / liên kết', meaning: 'Của, bổ nghĩa cho danh từ sau' }
};

// Preset sample sentences for instant demo
export const SAMPLE_SENTENCES: SentenceAnalysisResult[] = [
  {
    originalSentence: '私は毎日日本語を勉強します。',
    furigana: 'わたしは まいにち にほんごを べんきょうします。',
    romaji: 'Watashi wa mainichi nihongo wo benkyou shimasu.',
    vietnameseTranslation: 'Tôi học tiếng Nhật mỗi ngày.',
    difficultyLevel: 'N5',
    grammarPoints: ['Trợ từ は (Chủ đề)', 'Trợ từ を (Tân ngữ)', 'Động từ đuôi ~ます'],
    tokens: [
      { surface: '私', reading: 'わたし (watashi)', hanViet: 'TƯ', pos: 'noun', posLabel: 'Đại từ', meaning: 'Tôi' },
      { surface: 'は', reading: 'wa', pos: 'particle', posLabel: 'Trợ từ chủ đề', meaning: 'Thì / Là' },
      { surface: '毎日', reading: 'まいにち (mainichi)', hanViet: 'MỖI NHẬT', pos: 'adverb', posLabel: 'Trạng từ', meaning: 'Mỗi ngày' },
      { surface: '日本語', reading: 'にほんご (nihongo)', hanViet: 'NHẬT BẢN NGỮ', pos: 'noun', posLabel: 'Danh từ', meaning: 'Tiếng Nhật' },
      { surface: 'を', reading: 'o', pos: 'particle', posLabel: 'Trợ từ tân ngữ', meaning: 'Tác động trực tiếp' },
      { surface: '勉強します', reading: 'べんきょうします (benkyou shimasu)', hanViet: 'MIỄN CƯỠNG', pos: 'verb', posLabel: 'Động từ lịch sự', meaning: 'Học tập' }
    ]
  },
  {
    originalSentence: '先生のおかげでJLPT N3に合格できました。',
    furigana: 'せんせいの おかげで JLPT N3に ごうかくできました。',
    romaji: 'Sensei no okage de JLPT N3 ni goukaku dekimashita.',
    vietnameseTranslation: 'Nhờ có thầy giáo mà em đã đỗ được chứng chỉ JLPT N3.',
    difficultyLevel: 'N3',
    grammarPoints: ['~おかげで (Nhờ ơn/Nhờ có)', 'Trợ từ に (Đích đến/Mục tiêu)', 'Thể khả năng ~できました'],
    tokens: [
      { surface: '先生', reading: 'せんせい (sensei)', hanViet: 'TIÊN SINH', pos: 'noun', posLabel: 'Danh từ', meaning: 'Thầy giáo' },
      { surface: 'の', reading: 'no', pos: 'particle', posLabel: 'Trợ từ sở hữu', meaning: 'Của' },
      { surface: 'おかげで', reading: 'おかげで (okage de)', pos: 'auxiliary', posLabel: 'Ngữ pháp N3', meaning: 'Nhờ có / Ơn trời' },
      { surface: 'JLPT N3', reading: 'JLPT N3', pos: 'noun', posLabel: 'Danh từ riêng', meaning: 'Kỳ thi năng lực tiếng Nhật N3' },
      { surface: 'に', reading: 'ni', pos: 'particle', posLabel: 'Trợ từ mục tiêu', meaning: 'Vào / Đạt được' },
      { surface: '合格できました', reading: 'ごうかくできました (goukaku dekimashita)', hanViet: 'HỢP CÁCH', pos: 'verb', posLabel: 'Động từ thể khả năng quá khứ', meaning: 'Đã có thể đỗ / thi đậu' }
    ]
  },
  {
    originalSentence: 'あんなに一生懸命勉強したんだから、不合格のわけがない。',
    furigana: 'あんなに いっしょうけんめい べんきょうしたんだから、ふごうかくの わけがない。',
    romaji: 'Anna ni isshoukenmei benkyou shitan dakara, fugoukaku no wake ga nai.',
    vietnameseTranslation: 'Đã học chăm chỉ hết mình như thế thì tuyệt đối không thể nào trượt được!',
    difficultyLevel: 'N3',
    grammarPoints: ['~わけがない (Tuyệt đối không thể nào)', '~んだから (Vì lý do rõ ràng)', '一生懸命 (Hết mình)'],
    tokens: [
      { surface: 'あんなに', reading: 'あんなに (anna ni)', pos: 'adverb', posLabel: 'Trạng từ', meaning: 'Đến mức như thế' },
      { surface: '一生懸命', reading: 'いっしょうけんめい (isshoukenmei)', hanViet: 'NHẤT SINH HUYỀN MỆNH', pos: 'adverb', posLabel: 'Trạng từ', meaning: 'Hết mình, miệt mài' },
      { surface: '勉強したんだから', reading: 'べんきょうしたんだから', hanViet: 'MIỄN CƯỠNG', pos: 'verb', posLabel: 'Động từ + Giải thích lý do', meaning: 'Bởi vì đã học' },
      { surface: '不合格', reading: 'ふごうかく (fugoukaku)', hanViet: 'BẤT HỢP CÁCH', pos: 'noun', posLabel: 'Danh từ', meaning: 'Không đỗ, thi trượt' },
      { surface: 'のわけがない', reading: 'のわけがない (no wake ga nai)', pos: 'auxiliary', posLabel: 'Cấu trúc ngữ pháp N3', meaning: 'Làm sao mà... được / Tuyệt đối không có chuyện' }
    ]
  }
];

// Parser algorithm
export function parseJapaneseSentence(text: string): SentenceAnalysisResult {
  const clean = text.trim();
  const matchedSample = SAMPLE_SENTENCES.find(s => s.originalSentence === clean);
  if (matchedSample) {
    return matchedSample;
  }

  // Dynamic token parsing
  const tokens: ParsedToken[] = [];
  let remaining = clean;

  const sortedDictKeys = Object.keys(TOKEN_DICT).sort((a, b) => b.length - a.length);

  while (remaining.length > 0) {
    let matched = false;
    for (const key of sortedDictKeys) {
      if (remaining.startsWith(key)) {
        const item = TOKEN_DICT[key];
        tokens.push({
          surface: key,
          ...item
        });
        remaining = remaining.slice(key.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      // Single character token
      const char = remaining[0];
      tokens.push({
        surface: char,
        reading: char,
        pos: 'noun',
        posLabel: 'Ký tự / Từ',
        meaning: `Phần từ: ${char}`
      });
      remaining = remaining.slice(1);
    }
  }

  return {
    originalSentence: clean,
    furigana: tokens.map(t => t.reading.split(' ')[0]).join(' '),
    romaji: 'Phân tích ngữ nghĩa chi tiết bên dưới',
    vietnameseTranslation: 'Bản dịch tự động được phân tích theo cấu trúc ngữ pháp.',
    difficultyLevel: 'N4',
    grammarPoints: tokens.filter(t => t.pos === 'particle').map(t => `Trợ từ ${t.surface} (${t.posLabel})`),
    tokens
  };
}
