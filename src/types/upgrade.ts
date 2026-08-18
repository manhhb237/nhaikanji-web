export interface PricingPlan {
  id: 'free' | 'yearly' | 'lifetime';
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  price: number; // VNĐ
  originalPrice?: number;
  period: string; // /năm, trọn đời
  aiCredits: number;
  features: {
    text: string;
    included: boolean;
    highlight?: boolean;
  }[];
  ctaText: string;
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  jlptTarget: string;
  comment: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'account' | 'payment' | 'ai' | 'features';
}
