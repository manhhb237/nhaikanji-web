import React from 'react';
import { useUser } from '../../context/UserContext';
import { 
  Flame, 
  Zap, 
  Crown, 
  Search, 
  Moon, 
  Sun
} from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { user, setActiveTab, toggleDarkMode } = useUser();

  return (
    <header className="sticky top-0 z-20 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 lg:px-8 py-3 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Mobile Brand / Title */}
        <div className="flex items-center gap-2.5 lg:hidden cursor-pointer" onClick={() => setActiveTab('kanji')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow">
            嚼
          </div>
          <div>
            <div className="font-extrabold text-sm text-slate-900 dark:text-white leading-tight">NHAI KANJI</div>
            <div className="text-[10px] text-slate-400">Chiết tự & Ngữ pháp</div>
          </div>
        </div>

        {/* Global Search Bar (Trigger) */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div
            onClick={onOpenSearch}
            className="w-full flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-400 text-xs hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-inner"
          >
            <Search className="w-4 h-4 text-slate-400" />
            <span className="flex-1">Tra cứu Kanji, Hán Việt, Romaji, Bộ thủ...</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-slate-200 dark:bg-slate-700 rounded border border-slate-300 dark:border-slate-600">
              Ctrl + K
            </kbd>
          </div>
        </div>

        {/* Right Action Widgets */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Daily Streak */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-bold" title="Số ngày học liên tiếp">
            <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
            <span>{user.streakDays}</span>
          </div>

          {/* AI Credits */}
          <div 
            onClick={() => setActiveTab('upgrade')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold cursor-pointer hover:bg-blue-500/20 transition-all"
            title="Số lượt AI Credits còn lại"
          >
            <Zap className="w-4 h-4 fill-blue-500 text-blue-500" />
            <span>{user.aiCredits.toLocaleString()}</span>
          </div>

          {/* Upgrade Button */}
          {user.plan === 'free' ? (
            <button
              onClick={() => setActiveTab('upgrade')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs shadow-md shadow-orange-500/20 active:scale-95 transition-all"
            >
              <Crown className="w-3.5 h-3.5 fill-current" />
              <span className="hidden xs:inline">Nâng cấp</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
              <Crown className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span className="hidden xs:inline">{user.plan === 'lifetime' ? 'Trọn Đời' : 'Pro 1 Năm'}</span>
            </div>
          )}

          {/* Theme toggle mobile */}
          <button
            onClick={toggleDarkMode}
            className="lg:hidden p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {user.darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Avatar Profile */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow ring-2 ring-blue-500/20">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  );
};
