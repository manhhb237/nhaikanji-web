import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Music, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  Plus, 
  Trash2,
  Brain
} from 'lucide-react';
import confetti from 'canvas-confetti';

type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export const PomodoroStudyRoom: React.FC = () => {
  const [timerMode, setTimerMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [ambientSound, setAmbientSound] = useState<string>('lofi');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Todo items in Study Room
  const [todos, setTodos] = useState<{ id: string; text: string; done: boolean }[]>([
    { id: '1', text: 'Học 10 chữ Kanji N3 theo sơ đồ chiết tự', done: true },
    { id: '2', text: 'Luyện 20 từ vựng Mimikara Chương 1', done: false },
    { id: '3', text: 'Làm 1 bài luyện Shadowing N3', done: false }
  ]);
  const [newTodoInput, setNewTodoInput] = useState('');

  const TIMER_SETTINGS = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const switchMode = (mode: TimerMode) => {
    setTimerMode(mode);
    setIsActive(false);
    setTimeLeft(TIMER_SETTINGS[mode]);
  };

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(TIMER_SETTINGS[timerMode]);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAddTodo = () => {
    if (!newTodoInput.trim()) return;
    setTodos(prev => [...prev, { id: Date.now().toString(), text: newTodoInput.trim(), done: false }]);
    setNewTodoInput('');
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const removeTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <Brain className="w-3.5 h-3.5 text-amber-300" />
            <span>Không Gian Tự Học & Pomodoro Focus Timer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Phòng Tự Học & Pomodoro
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Áp dụng phương pháp Pomodoro 25 phút học tập trung cao độ, 5 phút nghỉ ngơi kết hợp âm thanh thư giãn giúp duy trì trạng thái tập trung sâu (Deep Work).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Pomodoro Clock */}
        <div className="lg:col-span-7 bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-center flex flex-col justify-between">
          {/* Mode Tabs */}
          <div className="flex items-center justify-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl max-w-xs mx-auto">
            <button
              onClick={() => switchMode('focus')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                timerMode === 'focus'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Học Tập (25p)
            </button>
            <button
              onClick={() => switchMode('shortBreak')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                timerMode === 'shortBreak'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Nghỉ Ngắn (5p)
            </button>
            <button
              onClick={() => switchMode('longBreak')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
                timerMode === 'longBreak'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Nghỉ Dài (15p)
            </button>
          </div>

          {/* Big Clock Display */}
          <div className="py-6">
            <div className="text-6xl sm:text-8xl font-black font-mono tracking-tight text-slate-900 dark:text-white">
              {formatTime(timeLeft)}
            </div>
            <p className="text-xs font-bold text-slate-400 mt-2">
              {timerMode === 'focus' ? '🎯 Đang trong phiên học tập trung' : '☕ Hãy thư giãn mắt và uống một ngụm nước'}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleToggleActive}
              className={`px-8 py-3.5 rounded-2xl font-bold text-sm text-white shadow-xl transition-all active:scale-95 flex items-center gap-2 ${
                isActive
                  ? 'bg-rose-600 hover:bg-rose-500 shadow-rose-500/30'
                  : 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'
              }`}
            >
              {isActive ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current" />}
              <span>{isActive ? 'Tạm Dừng' : 'Bắt Đầu'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors shadow-sm"
              title="Đặt lại đồng hồ"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right: Study To-do List & Ambient Sound */}
        <div className="lg:col-span-5 space-y-6">
          {/* Ambient Sound Selector */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-900 dark:text-white flex items-center gap-1.5">
                <Music className="w-4 h-4 text-purple-500" />
                <span>Âm Thanh Tập Trung (Lo-fi)</span>
              </span>
              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className={`p-1.5 rounded-lg border text-xs font-bold flex items-center gap-1 ${
                  isAudioPlaying ? 'bg-purple-500/10 text-purple-600 border-purple-500/30' : 'text-slate-400'
                }`}
              >
                {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>{isAudioPlaying ? 'Đang bật' : 'Tắt'}</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-bold">
              {[
                { id: 'lofi', label: '🎧 Lofi Chill' },
                { id: 'rain', label: '🌧️ Mưa Rào' },
                { id: 'cafe', label: '☕ Cafe Tokyo' }
              ].map(s => (
                <button
                  key={s.id}
                  onClick={() => {
                    setAmbientSound(s.id);
                    setIsAudioPlaying(true);
                  }}
                  className={`p-2 rounded-xl border text-center transition-all ${
                    ambientSound === s.id && isAudioPlaying
                      ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Today's Tasks */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <span className="font-bold text-xs text-slate-900 dark:text-white block">
              Mục Tiêu Buổi Học Hôm Nay
            </span>

            {/* Add task input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newTodoInput}
                onChange={(e) => setNewTodoInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                placeholder="Thêm mục tiêu mới..."
                className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleAddTodo}
                className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Todo List Items */}
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {todos.map(t => (
                <div
                  key={t.id}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs group"
                >
                  <button
                    onClick={() => toggleTodo(t.id)}
                    className="flex items-center gap-2 text-left flex-1"
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${t.done ? 'text-emerald-500' : 'text-slate-300'}`} />
                    <span className={t.done ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200 font-medium'}>
                      {t.text}
                    </span>
                  </button>

                  <button
                    onClick={() => removeTodo(t.id)}
                    className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-rose-500 transition-opacity"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
