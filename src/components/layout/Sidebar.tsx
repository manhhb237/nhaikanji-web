import React, { useState } from 'react';
import { useUser, type TabType } from '../../context/UserContext';
import { 
  BookOpen, 
  BrainCircuit, 
  Layers, 
  Sparkles, 
  Crown, 
  Moon, 
  Sun, 
  Flame,
  Bookmark,
  TrendingUp,
  FileText,
  Headphones,
  Keyboard,
  Award,
  Clock,
  Trophy,
  Type,
  type LucideIcon
} from 'lucide-react';
import { LeaderboardModal } from '../gamification/LeaderboardModal';

interface NavItem {
  id: TabType;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  badge?: string;
  highlight?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const Sidebar: React.FC = () => {
  const { user, setActiveTab, toggleDarkMode } = useUser();
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const navSections: NavSection[] = [
    {
      title: 'Học Tập & Chiết Tự',
      items: [
        { id: 'kanji', label: 'Hán Tự & Chiết Tự', sublabel: 'Xóa mù qua sơ đồ tư duy', icon: BookOpen, badge: 'N5-N1' },
        { id: 'vocab', label: 'Từ Vựng Giáo Trình', sublabel: 'Minna, Mimikara, Tango, Shin', icon: Bookmark, badge: 'N5-N1' },
        { id: 'grammar', label: 'Phân Tích Câu & Ngữ Pháp', sublabel: '文の分析 & Sơ đồ tư duy', icon: BrainCircuit, badge: 'AI' },
        { id: 'alphabet', label: 'Bảng Chữ Cái Kana', sublabel: 'Hiragana & Katakana', icon: Type },
        { id: 'radicals', label: '214 Bộ Thủ Khang Hy', sublabel: 'Mẹo nhớ & biến thể', icon: Sparkles },
      ]
    },
    {
      title: 'Luyện Tập & Phản Xạ',
      items: [
        { id: 'flashcard', label: 'Luyện Flashcard SRS', sublabel: 'Lật thẻ 3D & Ghép thẻ', icon: Layers, badge: 'SRS' },
        { id: 'shadowing', label: 'Nghe Đuổi & Chép Chính Tả', sublabel: 'Shadowing & Dictation', icon: Headphones, badge: 'Audio' },
        { id: 'typing', label: 'Gõ Phím Phản Xạ', sublabel: 'Luyện gõ Romaji/Kana', icon: Keyboard },
        { id: 'exam', label: 'Thi Thử JLPT Mock Test', sublabel: 'Bấm giờ chuẩn đề thi thật', icon: Award, badge: 'Thi thử' },
      ]
    },
    {
      title: 'Công Cụ & Tiến Độ',
      items: [
        { id: 'pomodoro', label: 'Phòng Tự Học Pomodoro', sublabel: '25p tập trung + Nhạc Lofi', icon: Clock },
        { id: 'dashboard', label: 'Tiến Độ & Lộ Trình Học', sublabel: '10 chữ/ngày, % Cấp độ', icon: TrendingUp },
        { id: 'practice-sheet', label: 'Xuất File Luyện Viết PDF', sublabel: 'In phiếu ô ly chuẩn A4', icon: FileText, badge: 'PDF' },
      ]
    },
    {
      title: 'Bản Quyền',
      items: [
        { id: 'upgrade', label: 'Nâng Cấp Bản Quyền', sublabel: 'Gói Web & Trọn Đời', icon: Crown, highlight: true, badge: 'HOT' }
      ]
    }
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 bg-white dark:bg-[#111827] border-r border-slate-200 dark:border-slate-800 p-4 select-none z-30 transition-colors">
      {/* Brand Header */}
      <div className="flex items-center gap-3 px-2 py-2 mb-2 cursor-pointer" onClick={() => setActiveTab('kanji')}>
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

      {/* Mascot & Streak Widget */}
      <div 
        onClick={() => setIsLeaderboardOpen(true)}
        className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 rounded-2xl p-2.5 mb-3 border border-amber-500/30 cursor-pointer hover:border-amber-500 transition-all flex items-center justify-between group"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl group-hover:scale-110 transition-transform">🦊</span>
          <div>
            <div className="text-[11px] font-black text-slate-900 dark:text-white flex items-center gap-1">
              <span>Chil (チル)</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500 text-white font-bold">TOP 4</span>
            </div>
            <div className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />
              <span>{(user?.streakDays ?? 7)} ngày streak • {(user?.exp ?? 7420).toLocaleString()} EXP</span>
            </div>
          </div>
        </div>
        <Trophy className="w-4 h-4 text-amber-500" />
      </div>

      {/* Navigation Groups */}
      <nav className="flex-1 space-y-4 overflow-y-auto pr-1">
        {navSections.map((sec, sIdx) => (
          <div key={sIdx} className="space-y-1">
            <div className="text-[9px] font-black tracking-wider text-slate-400 uppercase px-3 py-0.5">
              {sec.title}
            </div>
            {sec.items.map((item) => {
              const Icon = item.icon;
              const isActive = user.activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-2 rounded-xl transition-all text-left ${
                    isActive
                      ? item.highlight
                        ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-blue-50 dark:bg-blue-600/15 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/30'
                      : item.highlight
                      ? 'bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 border border-amber-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${
                      isActive 
                        ? item.highlight ? 'bg-white/20 text-white' : 'bg-blue-600 text-white' 
                        : item.highlight ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-semibold text-xs leading-tight">{item.label}</div>
                      <div className={`text-[9px] ${isActive && item.highlight ? 'text-white/80' : 'text-slate-400'}`}>{item.sublabel}</div>
                    </div>
                  </div>
                  {item.badge && (
                    <span className={`text-[8px] font-bold px-1.5 py-0.2 rounded-full ${
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
          </div>
        ))}
      </nav>

      {/* Footer / Theme Toggle */}
      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {user.darkMode ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Sáng</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-600" />
              <span>Tối</span>
            </>
          )}
        </button>

        <span className="text-[10px] text-slate-400 font-medium">v3.0.0 Pro</span>
      </div>

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
      />
    </aside>
  );
};
