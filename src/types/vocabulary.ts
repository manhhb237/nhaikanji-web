import type { JLPTLevel } from './kanji';

export type CurriculumType = 'minna' | 'mimikara' | 'tango' | 'shinkanzen';

export interface VocabItem {
  id: string;
  word: string;
  reading: string; // Hiragana / Katakana
  hanViet?: string;
  romaji: string;
  meaning: string;
  level: JLPTLevel;
  curriculum: CurriculumType;
  lesson: number; // Bài số mấy
  lessonName?: string;
  exampleSentence?: {
    japanese: string;
    furigana: string;
    vietnamese: string;
  };
  audioText?: string;
}

export interface CurriculumInfo {
  id: CurriculumType;
  name: string;
  japaneseName: string;
  description: string;
  levelRange: string;
  totalLessons: number;
  totalWords: number;
  badgeColor: string;
}
