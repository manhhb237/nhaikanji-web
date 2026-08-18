import React, { useState } from 'react';
import { Volume2, BookOpen } from 'lucide-react';

interface KanaChar {
  kana: string;
  romaji: string;
  type: 'seion' | 'dakuon' | 'yoon';
}

const HIRAGANA_DATA: KanaChar[] = [
  { kana: 'あ', romaji: 'a', type: 'seion' },
  { kana: 'い', romaji: 'i', type: 'seion' },
  { kana: 'う', romaji: 'u', type: 'seion' },
  { kana: 'え', romaji: 'e', type: 'seion' },
  { kana: 'お', romaji: 'o', type: 'seion' },

  { kana: 'か', romaji: 'ka', type: 'seion' },
  { kana: 'き', romaji: 'ki', type: 'seion' },
  { kana: 'く', romaji: 'ku', type: 'seion' },
  { kana: 'け', romaji: 'ke', type: 'seion' },
  { kana: 'こ', romaji: 'ko', type: 'seion' },

  { kana: 'さ', romaji: 'sa', type: 'seion' },
  { kana: 'し', romaji: 'shi', type: 'seion' },
  { kana: 'す', romaji: 'su', type: 'seion' },
  { kana: 'せ', romaji: 'se', type: 'seion' },
  { kana: 'そ', romaji: 'so', type: 'seion' },

  { kana: 'た', romaji: 'ta', type: 'seion' },
  { kana: 'ち', romaji: 'chi', type: 'seion' },
  { kana: 'つ', romaji: 'tsu', type: 'seion' },
  { kana: 'て', romaji: 'te', type: 'seion' },
  { kana: 'と', romaji: 'to', type: 'seion' },

  { kana: 'な', romaji: 'na', type: 'seion' },
  { kana: 'に', romaji: 'ni', type: 'seion' },
  { kana: 'ぬ', romaji: 'nu', type: 'seion' },
  { kana: 'ね', romaji: 'ne', type: 'seion' },
  { kana: 'の', romaji: 'no', type: 'seion' },

  { kana: 'は', romaji: 'ha', type: 'seion' },
  { kana: 'ひ', romaji: 'hi', type: 'seion' },
  { kana: 'ふ', romaji: 'fu', type: 'seion' },
  { kana: 'へ', romaji: 'he', type: 'seion' },
  { kana: 'ほ', romaji: 'ho', type: 'seion' },

  { kana: 'ま', romaji: 'ma', type: 'seion' },
  { kana: 'み', romaji: 'mi', type: 'seion' },
  { kana: 'む', romaji: 'mu', type: 'seion' },
  { kana: 'め', romaji: 'me', type: 'seion' },
  { kana: 'も', romaji: 'mo', type: 'seion' },

  { kana: 'や', romaji: 'ya', type: 'seion' },
  { kana: 'ゆ', romaji: 'yu', type: 'seion' },
  { kana: 'よ', romaji: 'yo', type: 'seion' },

  { kana: 'ら', romaji: 'ra', type: 'seion' },
  { kana: 'り', romaji: 'ri', type: 'seion' },
  { kana: 'る', romaji: 'ru', type: 'seion' },
  { kana: 'れ', romaji: 're', type: 'seion' },
  { kana: 'ろ', romaji: 'ro', type: 'seion' },

  { kana: 'わ', romaji: 'wa', type: 'seion' },
  { kana: 'を', romaji: 'wo', type: 'seion' },
  { kana: 'ん', romaji: 'n', type: 'seion' },

  // Dakuon
  { kana: 'が', romaji: 'ga', type: 'dakuon' },
  { kana: 'ぎ', romaji: 'gi', type: 'dakuon' },
  { kana: 'ぐ', romaji: 'gu', type: 'dakuon' },
  { kana: 'げ', romaji: 'ge', type: 'dakuon' },
  { kana: 'ご', romaji: 'go', type: 'dakuon' },

  { kana: 'ざ', romaji: 'za', type: 'dakuon' },
  { kana: 'じ', romaji: 'ji', type: 'dakuon' },
  { kana: 'ず', romaji: 'zu', type: 'dakuon' },
  { kana: 'ぜ', romaji: 'ze', type: 'dakuon' },
  { kana: 'ぞ', romaji: 'zo', type: 'dakuon' },

  { kana: 'だ', romaji: 'da', type: 'dakuon' },
  { kana: 'ぢ', romaji: 'ji', type: 'dakuon' },
  { kana: 'づ', romaji: 'zu', type: 'dakuon' },
  { kana: 'で', romaji: 'de', type: 'dakuon' },
  { kana: 'ど', romaji: 'do', type: 'dakuon' },

  { kana: 'ば', romaji: 'ba', type: 'dakuon' },
  { kana: 'び', romaji: 'bi', type: 'dakuon' },
  { kana: 'ぶ', romaji: 'bu', type: 'dakuon' },
  { kana: 'べ', romaji: 'be', type: 'dakuon' },
  { kana: 'ぼ', romaji: 'bo', type: 'dakuon' },

  { kana: 'ぱ', romaji: 'pa', type: 'dakuon' },
  { kana: 'ぴ', romaji: 'pi', type: 'dakuon' },
  { kana: 'ぷ', romaji: 'pu', type: 'dakuon' },
  { kana: 'ぺ', romaji: 'pe', type: 'dakuon' },
  { kana: 'ぽ', romaji: 'po', type: 'dakuon' }
];

const KATAKANA_DATA: KanaChar[] = [
  { kana: 'ア', romaji: 'a', type: 'seion' },
  { kana: 'イ', romaji: 'i', type: 'seion' },
  { kana: 'ウ', romaji: 'u', type: 'seion' },
  { kana: 'エ', romaji: 'e', type: 'seion' },
  { kana: 'オ', romaji: 'o', type: 'seion' },

  { kana: 'カ', romaji: 'ka', type: 'seion' },
  { kana: 'キ', romaji: 'ki', type: 'seion' },
  { kana: 'ク', romaji: 'ku', type: 'seion' },
  { kana: 'ケ', romaji: 'ke', type: 'seion' },
  { kana: 'コ', romaji: 'ko', type: 'seion' },

  { kana: 'サ', romaji: 'sa', type: 'seion' },
  { kana: 'シ', romaji: 'shi', type: 'seion' },
  { kana: 'ス', romaji: 'su', type: 'seion' },
  { kana: 'セ', romaji: 'se', type: 'seion' },
  { kana: 'ソ', romaji: 'so', type: 'seion' },

  { kana: 'タ', romaji: 'ta', type: 'seion' },
  { kana: 'チ', romaji: 'chi', type: 'seion' },
  { kana: 'ツ', romaji: 'tsu', type: 'seion' },
  { kana: 'テ', romaji: 'te', type: 'seion' },
  { kana: 'ト', romaji: 'to', type: 'seion' },

  { kana: 'ナ', romaji: 'na', type: 'seion' },
  { kana: 'ニ', romaji: 'ni', type: 'seion' },
  { kana: 'ヌ', romaji: 'nu', type: 'seion' },
  { kana: 'ネ', romaji: 'ne', type: 'seion' },
  { kana: 'ノ', romaji: 'no', type: 'seion' },

  { kana: 'ハ', romaji: 'ha', type: 'seion' },
  { kana: 'ヒ', romaji: 'hi', type: 'seion' },
  { kana: 'フ', romaji: 'fu', type: 'seion' },
  { kana: 'ヘ', romaji: 'he', type: 'seion' },
  { kana: 'ホ', romaji: 'ho', type: 'seion' },

  { kana: 'マ', romaji: 'ma', type: 'seion' },
  { kana: 'ミ', romaji: 'mi', type: 'seion' },
  { kana: 'ム', romaji: 'mu', type: 'seion' },
  { kana: 'メ', romaji: 'me', type: 'seion' },
  { kana: 'モ', romaji: 'mo', type: 'seion' },

  { kana: 'ヤ', romaji: 'ya', type: 'seion' },
  { kana: 'ユ', romaji: 'yu', type: 'seion' },
  { kana: 'ヨ', romaji: 'yo', type: 'seion' },

  { kana: 'ラ', romaji: 'ra', type: 'seion' },
  { kana: 'リ', romaji: 'ri', type: 'seion' },
  { kana: 'ル', romaji: 'ru', type: 'seion' },
  { kana: 'レ', romaji: 're', type: 'seion' },
  { kana: 'ロ', romaji: 'ro', type: 'seion' },

  { kana: 'ワ', romaji: 'wa', type: 'seion' },
  { kana: 'ヲ', romaji: 'wo', type: 'seion' },
  { kana: 'ン', romaji: 'n', type: 'seion' }
];

export const KanaAlphabet: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hiragana' | 'katakana'>('hiragana');
  const [filterType, setFilterType] = useState<'all' | 'seion' | 'dakuon'>('all');

  const dataset = activeTab === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;
  const filteredChars = dataset.filter(c => filterType === 'all' || c.type === filterType);

  const playSound = (kana: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(kana);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Nền Móng Tiếng Nhật Nhập Môn</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Bảng Chữ Cái Hiragana & Katakana
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Học bảng chữ cái cơ bản, âm đục (Dakuon) và ảo âm (Yoon) kèm phát âm chuẩn Tokyo cho người mới bắt đầu.
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Main Tab Hiragana / Katakana */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
          <button
            onClick={() => setActiveTab('hiragana')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'hiragana'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Hiragana (Chữ Mềm)
          </button>
          <button
            onClick={() => setActiveTab('katakana')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'katakana'
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Katakana (Chữ Cứng)
          </button>
        </div>

        {/* Filter Type */}
        <div className="flex items-center gap-1.5 text-xs font-bold">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === 'all'
                ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Tất Cả
          </button>
          <button
            onClick={() => setFilterType('seion')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === 'seion'
                ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Âm Cơ Bản (Seion)
          </button>
          <button
            onClick={() => setFilterType('dakuon')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              filterType === 'dakuon'
                ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            Âm Đục (Dakuon)
          </button>
        </div>
      </div>

      {/* Grid of Kana Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {filteredChars.map((char, idx) => (
          <button
            key={idx}
            onClick={() => playSound(char.kana)}
            className="p-4 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-rose-500 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-1 group active:scale-95"
          >
            <span className="text-3xl sm:text-4xl font-black font-japanese text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              {char.kana}
            </span>
            <span className="text-xs font-bold text-slate-400">
              {char.romaji}
            </span>
            <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 text-rose-500">
              <Volume2 className="w-3 h-3" /> Nghe
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
