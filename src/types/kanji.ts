export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface RadicalPart {
  radical: string;
  name: string; // Tên Hán Việt của bộ (ví dụ: Nhân đứng, Thủy, Mộc)
  meaning: string; // Ý nghĩa (ví dụ: Người, Nước, Cây)
  icon?: string;
}

export interface CompoundWord {
  word: string;
  reading: string;
  meaning: string;
  level?: JLPTLevel;
}

export interface KanjiItem {
  id: string;
  kanji: string;
  hanViet: string; // Tên Hán Việt: NHẬT, NGUYỆT, TÌNH...
  strokes: number;
  level: JLPTLevel;
  onyomi: string[];
  kunyomi: string[];
  mainRadical: string; // Bộ thủ chính
  radicalName: string;
  breakdown: RadicalPart[]; // Chiết tự: danh sách các bộ phận cấu thành
  mnemonic: string; // Câu chuyện chiết tự gợi nhớ bản chất ("Xóa mù")
  compounds: CompoundWord[];
  strokeOrderSvg?: string[];
  tags?: string[];
}

export interface RadicalItem {
  number: number;
  radical: string;
  variants?: string[];
  strokes: number;
  hanViet: string;
  meaning: string;
  pinyin?: string;
  frequencyRank?: number;
}
