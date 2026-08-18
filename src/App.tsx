import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { KanjiHome } from './components/kanji/KanjiHome';
import { GrammarHome } from './components/grammar/GrammarHome';
import { SRSFlashcard } from './components/practice/SRSFlashcard';
import { RadicalsBrowser } from './components/kanji/RadicalsBrowser';
import { UpgradePage } from './components/upgrade/UpgradePage';
import { KANJI_DATA } from './data/kanjiData';
import { Search, X, BookOpen } from 'lucide-react';
import type { KanjiItem } from './types/kanji';
import { KanjiDetailModal } from './components/kanji/KanjiDetailModal';

const AppContent: React.FC = () => {
  const { user } = useUser();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalKanji, setModalKanji] = useState<KanjiItem | null>(null);

  // Keyboard shortcut Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const searchResults = KANJI_DATA.filter((k) => {
    if (!searchQuery.trim()) return false;
    const q = searchQuery.toLowerCase();
    return (
      k.kanji.includes(q) ||
      k.hanViet.toLowerCase().includes(q) ||
      k.onyomi.some(on => on.toLowerCase().includes(q)) ||
      k.kunyomi.some(kun => kun.toLowerCase().includes(q)) ||
      k.compounds.some(c => c.word.includes(q) || c.meaning.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] flex">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 lg:pb-8">
        {/* Top Header */}
        <Header onOpenSearch={() => setIsSearchOpen(true)} />

        {/* Dynamic Page Views */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {user.activeTab === 'kanji' && <KanjiHome />}
          {user.activeTab === 'grammar' && <GrammarHome />}
          {user.activeTab === 'flashcard' && <SRSFlashcard />}
          {user.activeTab === 'radicals' && <RadicalsBrowser />}
          {user.activeTab === 'upgrade' && <UpgradePage />}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNav />

      {/* Global Quick Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-800 gap-3">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tra cứu nhanh Hán tự, Onyomi, Kunyomi, Từ ghép..."
                className="flex-1 bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Results / Suggestions */}
            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-xs text-slate-400 space-y-2">
                  <BookOpen className="w-8 h-8 mx-auto text-slate-300 dark:text-slate-600" />
                  <p>Nhập tên Hán Việt (NHẬT, THỦY...), Kanji (日, 月) hoặc cách đọc Romaji</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1.5">
                  {searchResults.map((k) => (
                    <button
                      key={k.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setModalKanji(k);
                      }}
                      className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-slate-200/60 dark:border-slate-800/80 flex items-center justify-between transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-black font-japanese text-blue-600 dark:text-blue-400">
                          {k.kanji}
                        </span>
                        <div>
                          <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{k.hanViet}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-bold">
                              {k.level}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 font-medium">
                            {k.mnemonic.slice(0, 60)}...
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Xem chiết tự &rarr;
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-xs text-slate-400">
                  Không tìm thấy kết quả nào cho "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Kanji Detail Modal */}
      {modalKanji && (
        <KanjiDetailModal
          kanji={modalKanji}
          onClose={() => setModalKanji(null)}
        />
      )}
    </div>
  );
};

export function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
