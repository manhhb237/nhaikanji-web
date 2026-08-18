import React from 'react';
import { useUser } from '../../context/UserContext';
import { 
  BookOpen, 
  BrainCircuit, 
  Layers, 
  Sparkles, 
  Crown, 
  Moon, 
  Sun, 
  Flame,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { user, setActiveTab, toggleDarkMode } = useUser();

  const navItems = [
    {
      id: 'kanji' as const,
      label: 'Hán Tự & Chiết Tự',
      sublabel: 'Xóa mù qua sơ đồ tư duy',
      icon: BookOpen,
      badge: 'N5 - N1'
    },
    {
      id: 'grammar' as const,
      label: 'Phân Tích Câu & Ngữ Pháp',
      sublabel: '文の分析 & Mindmap',
      icon: BrainCircuit,
      badge: 'AI Beta'
    },
    {
      id: 'flashcard' as const,
      label: 'Luyện Tập Flashcard SRS',
      sublabel: 'Lặp lại ngắt quãng',
      icon: Layers,
      badge: 'SRS'
    },
    {
      id: 'radicals' as const,
      label: '214 Bộ Thủ Khang Hy',
      sublabel: 'Mẹo nhớ & biến thể',
      icon: Sparkles
    },
    {
      id: 'upgrade' as const,
      label: 'Nâng Cấp Bản Quyền',
      sublabel: 'Gói Web & Trọn Đời',
      icon: Crown,
      highlight: true,
      badge: 'HOT'
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-slate-800 p-4 select-none z-30 transition-colors">
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-2 py-3 mb-4 cursor-pointer" onClick={() => setActiveTab('kanji')}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
          嚼
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight">NHAI KANJI</h1>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">PRO</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Xóa mù Kanji qua Chiết tự</p>
        </div>
      </div>

      {/* User Quick Stats Widget */}
      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 mb-4 border border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-slate-500 dark:text-slate-400">Tiến độ hôm nay</span>
          <span className="flex items-center text-orange-500 font-bold gap-1">
            <Flame className="w-3.5 h-3.5 fill-orange-500" />
            {user.streakDays} ngày streak
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-400">Đã thuộc</div>
            <div className="font-bold text-sm text-slate-800 dark:text-slate-200">{user.learnedKanjiIds.length} chữ</div>
          </div>
          <div className="bg-white dark:bg-slate-900/80 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
            <div className="text-xs text-slate-400">AI Credits</div>
            <div className="font-bold text-sm text-blue-500 flex items-center justify-center gap-0.5">
              <Zap className="w-3.5 h-3.5 fill-blue-500" />
              {user.aiCredits}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 space-y-1.5 overflow-y-auto pr-1">
        <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase px-3 py-1">Menu Học Tập</div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = user.activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all text-left ${
                isActive
                  ? item.highlight
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-orange-500/20'
                    : 'bg-blue-50 dark:bg-blue-600/15 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/30'
                  : item.highlight
                  ? 'bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border border-amber-500/20'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  isActive 
                    ? item.highlight ? 'bg-white/20 text-white' : 'bg-blue-600 text-white' 
                    : item.highlight ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-sm leading-tight">{item.label}</div>
                  <div className={`text-[11px] ${isActive && item.highlight ? 'text-white/80' : 'text-slate-400'}`}>{item.sublabel}</div>
                </div>
              </div>
              {item.badge && (
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  isActive && item.highlight
                    ? 'bg-white text-orange-600'
                    : item.highlight
                    ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white animate-pulse'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Upgrade Callout Card */}
      {user.plan === 'free' && (
        <div className="my-3 p-3.5 rounded-2xl bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-slate-900 text-white border border-indigo-500/30 shadow-xl relative overflow-hidden">
          <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl" />
          <div className="flex items-center gap-2 mb-1.5">
            <Crown className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-xs uppercase tracking-wider text-amber-300">Gói Pro Trọn Đời</span>
          </div>
          <p className="text-xs text-slate-300 mb-3 leading-relaxed">
            Mở khóa 2.500+ Kanji chiết tự và AI phân tích ngữ cảnh không giới hạn.
          </p>
          <button
            onClick={() => setActiveTab('upgrade')}
            className="w-full py-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-1.5"
          >
            <span>Nâng cấp ngay</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {user.plan !== 'free' && (
        <div className="my-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <div className="text-xs">
            <div className="font-bold">Đã Kích Hoạt {user.plan === 'lifetime' ? 'Trọn Đời' : 'Gói 1 Năm'}</div>
            <div className="text-[11px] opacity-80">Đầy đủ quyền lợi Pro</div>
          </div>
        </div>
      )}

      {/* Footer / Theme Toggle */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {user.darkMode ? (
            <>
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Giao diện sáng</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-slate-600" />
              <span>Giao diện tối</span>
            </>
          )}
        </button>

        <span className="text-[10px] text-slate-400 font-medium">v2.5.0</span>
      </div>
    </aside>
  );
};
