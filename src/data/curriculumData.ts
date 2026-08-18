import type { VocabItem, CurriculumInfo } from '../types/vocabulary';
import { MINNA_VOCAB_DATA } from './minnaVocabData';
import { MIMIKARA_VOCAB_DATA } from './mimikaraVocabData';
import { TANGO_VOCAB_DATA } from './tangoVocabData';
import { SHINKANZEN_VOCAB_DATA } from './shinkanzenVocabData';

export const CURRICULA: CurriculumInfo[] = [
  {
    id: 'minna',
    name: 'Minna no Nihongo',
    japaneseName: 'みんなの日本語',
    description: 'Bộ giáo trình chuẩn quốc dân 50 bài cho trình độ Sơ cấp N5 - N4',
    levelRange: 'N5 - N4',
    totalLessons: 50,
    totalWords: 2150,
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
  },
  {
    id: 'mimikara',
    name: 'Mimikara Oboeru',
    japaneseName: '耳から覚える日本語',
    description: 'Học từ vựng qua phản xạ âm thanh và câu ví dụ thực tế cho N3 - N2',
    levelRange: 'N3 - N2',
    totalLessons: 12,
    totalWords: 1800,
    badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
  },
  {
    id: 'tango',
    name: 'Tango 2000 / 2500',
    japaneseName: '日本語単語スピードマスター',
    description: 'Từ vựng trọng tâm thi JLPT theo chủ đề chuyên sâu N4 - N3 - N2',
    levelRange: 'N4 - N2',
    totalLessons: 20,
    totalWords: 2500,
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
  },
  {
    id: 'shinkanzen',
    name: 'Shinkanzen Master',
    japaneseName: '新完全マスター',
    description: 'Luyện thi cấp tốc bám sát đề thi thật JLPT từ N3 đến N1',
    levelRange: 'N3 - N1',
    totalLessons: 15,
    totalWords: 2200,
    badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
  }
];

export const VOCABULARY_DATA: VocabItem[] = [
  ...MINNA_VOCAB_DATA,
  ...MIMIKARA_VOCAB_DATA,
  ...TANGO_VOCAB_DATA,
  ...SHINKANZEN_VOCAB_DATA
];
