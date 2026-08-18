import React, { createContext, useContext, useState, useEffect } from 'react';

export type TabType = 
  | 'kanji' 
  | 'vocab' 
  | 'grammar' 
  | 'flashcard' 
  | 'shadowing' 
  | 'typing' 
  | 'exam' 
  | 'alphabet' 
  | 'pomodoro' 
  | 'dashboard' 
  | 'practice-sheet' 
  | 'radicals' 
  | 'upgrade';

export interface UserState {
  isLoggedIn: boolean;
  name: string;
  email: string;
  plan: 'free' | 'yearly' | 'lifetime';
  aiCredits: number;
  streakDays: number;
  exp: number;
  learnedKanjiIds: string[];
  favoriteKanjiIds: string[];
  activeTab: TabType;
  darkMode: boolean;
}

interface UserContextType {
  user: UserState;
  setActiveTab: (tab: TabType) => void;
  toggleFavorite: (id: string) => void;
  markAsLearned: (id: string) => void;
  addExp: (amount: number) => void;
  useAiCredit: (amount?: number) => boolean;
  upgradePlan: (plan: 'yearly' | 'lifetime') => void;
  toggleDarkMode: () => void;
  login: (name: string, email: string) => void;
  logout: () => void;
}

const DEFAULT_USER: UserState = {
  isLoggedIn: true,
  name: 'Học Viên Nhai Kanji',
  email: 'hocvien@nhaikanji.vn',
  plan: 'free',
  aiCredits: 50,
  streakDays: 7,
  exp: 7420,
  learnedKanjiIds: ['k-nhat', 'k-nguyet', 'k-moc'],
  favoriteKanjiIds: ['k-ai', 'k-mong'],
  activeTab: 'kanji',
  darkMode: true,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserState>(() => {
    const saved = localStorage.getItem('nhaikanji_user');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_USER,
          ...parsed,
          exp: parsed.exp ?? DEFAULT_USER.exp,
          streakDays: parsed.streakDays ?? DEFAULT_USER.streakDays,
          activeTab: parsed.activeTab ?? DEFAULT_USER.activeTab
        };
      } catch {
        return DEFAULT_USER;
      }
    }
    return DEFAULT_USER;
  });

  useEffect(() => {
    localStorage.setItem('nhaikanji_user', JSON.stringify(user));
    if (user.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [user]);

  const setActiveTab = (activeTab: TabType) => {
    setUser(prev => ({ ...prev, activeTab }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFavorite = (id: string) => {
    setUser(prev => {
      const exists = prev.favoriteKanjiIds.includes(id);
      return {
        ...prev,
        favoriteKanjiIds: exists
          ? prev.favoriteKanjiIds.filter(item => item !== id)
          : [...prev.favoriteKanjiIds, id]
      };
    });
  };

  const markAsLearned = (id: string) => {
    setUser(prev => {
      if (prev.learnedKanjiIds.includes(id)) return prev;
      return {
        ...prev,
        learnedKanjiIds: [...prev.learnedKanjiIds, id],
        exp: (prev.exp || 0) + 50,
        streakDays: prev.streakDays + 1
      };
    });
  };

  const addExp = (amount: number) => {
    setUser(prev => ({ ...prev, exp: (prev.exp || 0) + amount }));
  };

  const useAiCredit = (amount = 10) => {
    if (user.aiCredits < amount) return false;
    setUser(prev => ({ ...prev, aiCredits: prev.aiCredits - amount }));
    return true;
  };

  const upgradePlan = (plan: 'yearly' | 'lifetime') => {
    const creditsBonus = plan === 'lifetime' ? 20000 : 5000;
    setUser(prev => ({
      ...prev,
      plan,
      aiCredits: prev.aiCredits + creditsBonus
    }));
  };

  const toggleDarkMode = () => {
    setUser(prev => ({ ...prev, darkMode: !prev.darkMode }));
  };

  const login = (name: string, email: string) => {
    setUser(prev => ({ ...prev, isLoggedIn: true, name, email }));
  };

  const logout = () => {
    setUser(DEFAULT_USER);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setActiveTab,
        toggleFavorite,
        markAsLearned,
        addExp,
        useAiCredit,
        upgradePlan,
        toggleDarkMode,
        login,
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
