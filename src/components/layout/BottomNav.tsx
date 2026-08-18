import React from 'react';
import { useUser } from '../../context/UserContext';
import { 
  BookOpen, 
  BrainCircuit, 
  Layers, 
  Sparkles, 
  Crown 
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { user, setActiveTab } = useUser();

  const items = [
    { id: 'kanji' as const, label: 'Hán Tự', icon: BookOpen },
    { id: 'grammar' as const, label: 'Ngữ Pháp', icon: BrainCircuit },
    { id: 'flashcard' as const, label: 'Flashcard', icon: Layers },
    { id: 'radicals' as const, label: 'Bộ Thủ', icon: Sparkles },
    { id: 'upgrade' as const, label: 'Nâng Cấp', icon: Crown, highlight: true }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 shadow-2xl safe-area-inset-bottom">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = user.activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all ${
                isActive
                  ? item.highlight
                    ? 'text-orange-500 font-bold scale-105'
                    : 'text-blue-600 dark:text-blue-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 font-medium'
              }`}
            >
              <div className={`p-1 rounded-lg relative ${
                isActive
                  ? item.highlight
                    ? 'bg-orange-500/15'
                    : 'bg-blue-500/15'
                  : 'transparent'
              }`}>
                <Icon className={`w-5 h-5 ${item.highlight && !isActive ? 'text-amber-500' : ''}`} />
                {item.highlight && user.plan === 'free' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full animate-ping" />
                )}
              </div>
              <span className="text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
