import type { JLPTLevel } from './kanji';

export interface GrammarPoint {
  id: string;
  pattern: string; // ví dụ: ~てから, ~ばかり, ~わけがない
  romaji: string;
  vietnameseMeaning: string;
  level: JLPTLevel;
  category: string; // Thời gian, Nguyên nhân, Mục đích, Nhượng bộ, Điều kiện...
  formation: string; // Cách kết hợp (V-te + kara, N + ni tsuite...)
  explanation: string;
  examples: {
    japanese: string;
    furigana: string;
    vietnamese: string;
  }[];
}

export interface ParsedToken {
  surface: string; // Từ gốc trong câu
  reading: string; // Cách đọc Hiragana
  hanViet?: string; // Âm Hán Việt nếu có Kanji
  pos: 'noun' | 'verb' | 'particle' | 'adjective' | 'adverb' | 'auxiliary' | 'punctuation';
  posLabel: string; // Danh từ, Động từ, Trợ từ, Tính từ...
  meaning: string;
  baseForm?: string; // Thể nguyên mẫu
  grammarNote?: string;
}

export interface SentenceAnalysisResult {
  originalSentence: string;
  furigana: string;
  romaji: string;
  vietnameseTranslation: string;
  grammarPoints: string[];
  tokens: ParsedToken[];
  difficultyLevel: JLPTLevel;
}
