import React from 'react';
import { useUser } from '../../context/UserContext';
import { 
  Flame, 
  Target, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ArrowRight,
  Zap,
  TrendingUp
} from 'lucide-react';

export const StudyProgressDashboard: React.FC = () => {
  const { user, setActiveTab } = useUser();

  const levelsProgress = [
    { level: 'N5', total: 120, learned: 95, color: 'from-emerald-500 to-teal-500' },
    { level: 'N4', total: 250, learned: 130, color: 'from-sky-500 to-blue-500' },
    { level: 'N3', total: 350, learned: 85, color: 'from-indigo-500 to-purple-500' },
    { level: 'N2', total: 400, learned: 40, color: 'from-amber-500 to-orange-500' },
    { level: 'N1', total: 500, learned: 15, color: 'from-rose-500 to-pink-500' },
  ];

  const weeklyActivity = [
    { day: 'T2', count: 12, time: '25p', active: true },
    { day: 'T3', count: 18, time: '35p', active: true },
    { day: 'T4', count: 15, time: '30p', active: true },
    { day: 'T5', count: 22, time: '45p', active: true },
    { day: 'T6', count: 10, time: '20p', active: true },
    { day: 'T7', count: 25, time: '50p', active: true },
    { day: 'CN', count: 8, time: '15p', active: true },
  ];

  const totalLearned = user.learnedKanjiIds.length + 365;

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
            <span>Trung Tâm Thống Kê & Lộ Trình Học Cá Nhân Hóa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Tiến Độ Học Tập & Bảng Mục Tiêu
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Theo dõi sự tiến bộ từng ngày, đo lường tốc độ ghi nhớ qua hệ thống lặp lại ngắt quãng SRS và duy trì thói quen học 10 chữ Kanji mỗi ngày.
          </p>
        </div>
      </div>

      {/* 4 Stat Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Streak */}
        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-orange-500" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Chuỗi Streak</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{user.streakDays} ngày</div>
          </div>
        </div>

        {/* Total Kanji Mastered */}
        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Tổng Kanji đã nhớ</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{totalLearned} chữ</div>
          </div>
        </div>

        {/* Daily Target */}
        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Mục tiêu hôm nay</div>
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400">8 / 10 chữ</div>
          </div>
        </div>

        {/* AI Credits */}
        <div className="p-5 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6 fill-purple-500" />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">AI Credits</div>
            <div className="text-2xl font-black text-slate-900 dark:text-white">{user.aiCredits.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Level Completion Grid */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
              Tiến Độ Làm Chủ Kanji Theo Cấp Độ JLPT
            </h3>
            <p className="text-xs text-slate-400">Tỷ lệ hoàn thành kho từ vựng và chiết tự từ N5 đến N1</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            Tổng 2.500+ Kanji
          </span>
        </div>

        <div className="space-y-4">
          {levelsProgress.map((item) => {
            const percentage = Math.round((item.learned / item.total) * 100);
            return (
              <div key={item.level} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-2">
                    <span className="w-8 py-0.5 rounded text-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {item.level}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {item.learned} / {item.total} chữ
                    </span>
                  </span>
                  <span className="text-slate-800 dark:text-slate-200">{percentage}%</span>
                </div>

                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Activity & Study Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Weekly Bar Chart */}
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span>Thời Gian Học Trong Tuần</span>
            </h4>
            <span className="text-xs text-slate-400 font-medium">Tổng: 3.5 giờ</span>
          </div>

          <div className="grid grid-cols-7 gap-2 items-end h-40 pt-4">
            {weeklyActivity.map((w, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-[10px] text-slate-400 font-bold">{w.time}</span>
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-xl transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(w.count / 25) * 100}%` }}
                />
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{w.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily 10 Kanji Action Box */}
        <div className="bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900 rounded-3xl p-6 border border-indigo-500/30 text-white flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lộ Trình "Nhai" 10 Chữ / Ngày</span>
            </div>
            <h4 className="text-xl font-extrabold">Hôm Nay Bạn Còn 2 Chữ Để Đạt Chỉ Tiêu!</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Học chậm rãi, bóc tách bản chất chiết tự và ôn tập đúng thời điểm giúp tỷ lệ ghi nhớ dài hạn đạt tới 95%.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('flashcard')}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Bắt Đầu Học Ngay Bây Giờ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
