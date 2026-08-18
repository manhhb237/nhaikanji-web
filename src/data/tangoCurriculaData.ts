export interface CurriculumBook {
  id: string;
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  title: string;
  japaneseTitle: string;
  wordCount: number;
  description: string;
  badge?: string;
  colorScheme: 'yellow' | 'green' | 'purple' | 'emerald' | 'orange' | 'red';
  hasHeadphones?: boolean;
  totalLessons: number;
}

export const ALL_CURRICULA_BOOKS: CurriculumBook[] = [
  // N5
  {
    id: 'tango-n5',
    level: 'N5',
    title: 'Tango N5',
    japaneseTitle: 'はじめての日本語能力試験 N5',
    wordCount: 1000,
    description: 'dành cho Kỳ thi Năng lực Nhật ngữ N5',
    colorScheme: 'yellow',
    totalLessons: 10
  },
  {
    id: 'minna-n5',
    level: 'N5',
    title: 'Minna no Nihongo I',
    japaneseTitle: 'みんなの日本語 初級Ⅰ 第2版 N5',
    wordCount: 1000,
    description: 'Tiếng Nhật sơ cấp 1 (Bài 1 - 25)',
    colorScheme: 'green',
    totalLessons: 25
  },

  // N4
  {
    id: 'tango-n4',
    level: 'N4',
    title: 'Tango N4',
    japaneseTitle: 'はじめての日本語能力試験 N4',
    wordCount: 1500,
    description: 'dành cho Kỳ thi Năng lực Nhật ngữ N4',
    colorScheme: 'purple',
    totalLessons: 12
  },
  {
    id: 'minna-n4',
    level: 'N4',
    title: 'Minna no Nihongo II',
    japaneseTitle: 'みんなの日本語 初級Ⅱ 第2版 N4',
    wordCount: 1500,
    description: 'Tiếng Nhật sơ cấp 2 (Bài 26 - 50)',
    colorScheme: 'green',
    totalLessons: 25
  },

  // N3
  {
    id: 'tango-n3',
    level: 'N3',
    title: 'Tango N3',
    japaneseTitle: 'はじめての日本語能力試験 N3',
    wordCount: 2000,
    description: 'dành cho Kỳ thi Năng lực Nhật ngữ N3',
    colorScheme: 'emerald',
    totalLessons: 16
  },
  {
    id: 'mimikara-n3',
    level: 'N3',
    title: 'Mimikara N3',
    japaneseTitle: '耳から覚える 語彙トレーニング N3',
    wordCount: 880,
    description: 'Luyện từ vựng qua nghe N3',
    colorScheme: 'emerald',
    hasHeadphones: true,
    totalLessons: 15
  },
  {
    id: 'shinkanzen-n3',
    level: 'N3',
    title: 'Shinkanzen N3',
    japaneseTitle: '新完全マスター 語彙 N3',
    wordCount: 1200,
    description: 'Chiến thuật từ vựng chuyên sâu N3',
    colorScheme: 'emerald',
    totalLessons: 14
  },

  // N2
  {
    id: 'tango-n2',
    level: 'N2',
    title: 'Tango N2',
    japaneseTitle: 'はじめての日本語能力試験 N2',
    wordCount: 2500,
    description: 'dành cho Kỳ thi Năng lực Nhật ngữ N2',
    colorScheme: 'orange',
    totalLessons: 18
  },
  {
    id: 'mimikara-n2',
    level: 'N2',
    title: 'Mimikara N2',
    japaneseTitle: '耳から覚える 語彙トレーニング N2',
    wordCount: 1160,
    description: 'Luyện từ vựng qua nghe N2',
    colorScheme: 'emerald',
    hasHeadphones: true,
    totalLessons: 14
  },
  {
    id: 'shinkanzen-n2',
    level: 'N2',
    title: 'Shinkanzen N2',
    japaneseTitle: '新完全マスター 語彙 N2',
    wordCount: 1500,
    description: 'Từ vựng trung cao cấp N2',
    colorScheme: 'orange',
    totalLessons: 16
  },

  // N1
  {
    id: 'tango-n1',
    level: 'N1',
    title: 'Tango N1',
    japaneseTitle: 'はじめての日本語能力試験 N1',
    wordCount: 3000,
    description: 'dành cho Kỳ thi Năng lực Nhật ngữ N1 cao cấp',
    colorScheme: 'red',
    totalLessons: 20
  },
  {
    id: 'mimikara-n1',
    level: 'N1',
    title: 'Mimikara N1',
    japaneseTitle: '耳から覚える 語彙トレーニング N1',
    wordCount: 1300,
    description: 'Luyện từ vựng qua nghe N1',
    colorScheme: 'red',
    hasHeadphones: true,
    totalLessons: 16
  }
];
