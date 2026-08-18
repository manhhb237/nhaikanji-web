import React from 'react';
import { Flame, Zap, X } from 'lucide-react';
import { useUser } from '../../context/UserContext';

export const LeaderboardModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { user } = useUser();

  if (!isOpen) return null;

  const topUsers = [
    { rank: 1, name: 'Nguyễn Hải Nam', exp: 12540, streak: 45, level: 'N2 Master', avatar: '🦊' },
    { rank: 2, name: 'Trần Thị Mai', exp: 10890, streak: 32, level: 'N3 Pro', avatar: '🐼' },
    { rank: 3, name: 'Lê Minh Quân', exp: 9650, streak: 28, level: 'N2 Pro', avatar: '🦁' },
    { rank: 4, name: 'Học Viên Nhai Kanji (Bạn)', exp: 7420, streak: user.streakDays, level: 'N3 Learner', avatar: '🐱', isMe: true },
    { rank: 5, name: 'Phạm Thu Trang', exp: 6890, streak: 19, level: 'N4 Master', avatar: '🐰' },
    { rank: 6, name: 'Đỗ Đức Thắng', exp: 5430, streak: 14, level: 'N4 Pro', avatar: '🐯' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Header with Mascot Chil */}
        <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/20">
              🦊
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Bảng Vinh Danh & Mascot Chil (チル)</h3>
              </div>
              <p className="text-xs text-slate-400">Top học viên tích cực nhất tuần này</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mascot Message Box */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-500/30 flex items-center gap-3">
          <span className="text-3xl">🦊</span>
          <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
            <strong className="text-amber-500">Chil:</strong> "Bạn đang giữ chuỗi <strong>{user.streakDays} ngày liên tiếp</strong>! Cố gắng thêm một chút nữa để lọt vào Top 3 tuần này nhé!"
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
          {topUsers.map(u => (
            <div
              key={u.rank}
              className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
                u.isMe
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500/40 shadow-sm'
                  : 'bg-slate-50 dark:bg-slate-900/60 border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 text-center font-black text-xs ${
                  u.rank === 1 ? 'text-amber-500 text-sm' : u.rank === 2 ? 'text-slate-400 text-sm' : u.rank === 3 ? 'text-amber-700 text-sm' : 'text-slate-400'
                }`}>
                  {u.rank === 1 ? '🥇' : u.rank === 2 ? '🥈' : u.rank === 3 ? '🥉' : `#${u.rank}`}
                </span>

                <span className="text-xl">{u.avatar}</span>

                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{u.name}</span>
                    {u.isMe && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-600 text-white font-bold">BẠN</span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400">{u.level}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs font-black text-blue-600 dark:text-blue-400 flex items-center justify-end gap-0.5">
                  <Zap className="w-3.5 h-3.5 fill-blue-500" />
                  {u.exp.toLocaleString()} EXP
                </div>
                <div className="text-[10px] text-orange-500 font-bold flex items-center justify-end gap-0.5">
                  <Flame className="w-3 h-3 fill-orange-500" /> {u.streak} ngày
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
