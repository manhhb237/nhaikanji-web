import React, { useState } from 'react';
import { PRICING_PLANS, TESTIMONIALS, FAQ_ITEMS } from '../../data/upgradeData';
import type { PricingPlan } from '../../types/upgrade';
import { PaymentModal } from './PaymentModal';
import { 
  Crown, 
  Check, 
  X, 
  Sparkles, 
  Zap, 
  Star, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Brain,
  MessageSquare,
  FileCheck2,
  Headphones
} from 'lucide-react';

export const UpgradePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const aiFeatures = [
    {
      icon: Brain,
      title: 'Tra Cứu Ngữ Cảnh AI',
      desc: 'Giải thích sắc thái khác biệt giữa các từ đồng nghĩa (VD: 勉強 vs 学習 vs 学問).'
    },
    {
      icon: FileCheck2,
      title: 'Chấm & Sửa Bài Viết / Dịch',
      desc: 'Nhập đoạn văn tiếng Nhật, AI chấm điểm ngữ pháp theo chuẩn barem đề thi JLPT.'
    },
    {
      icon: MessageSquare,
      title: 'Hội Thoại Kaiwa Nhập Vai',
      desc: 'Luyện tập giao tiếp thực tế với gia sư AI theo từng tình huống phỏng vấn, công sở, đời sống.'
    },
    {
      icon: Headphones,
      title: 'Luyện Shadowing Phát Âm',
      desc: 'Tạo file âm thanh chuẩn phát âm Tokyo để luyện nói nhại theo phản xạ ngắt nhịp.'
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* Hero Banner */}
      <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-extrabold shadow-sm">
          <Crown className="w-4 h-4 fill-amber-500" />
          <span>Nâng Cấp Bản Quyền Nhai Kanji PRO</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Xóa Mù Kanji & Chinh Phục JLPT N1 Cùng <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent">Nhai Kanji Pro</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Đầu tư một lần vào phương pháp học bản chất qua sơ đồ chiết tự, hệ thống lặp lại ngắt quãng SRS và trợ lý trí tuệ nhân tạo AI thông minh.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.id}
              className={`relative bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? 'border-amber-500/80 dark:border-amber-500 shadow-2xl shadow-orange-500/15 md:-translate-y-3 ring-2 ring-amber-500/30'
                  : 'border-slate-200 dark:border-slate-800 shadow-lg hover:border-blue-500/50'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge || 'Được khuyên dùng nhiều nhất'}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[32px]">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="my-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                      {plan.price === 0 ? '0đ' : `${plan.price.toLocaleString('vi-VN')}đ`}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">{plan.period}</span>
                  </div>

                  {plan.originalPrice && (
                    <div className="text-xs text-slate-400 line-through mt-1">
                      Giá gốc: {plan.originalPrice.toLocaleString('vi-VN')}đ
                    </div>
                  )}

                  <div className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-blue-500" />
                    <span>Tặng {plan.aiCredits.toLocaleString()} AI Credits</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 my-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Quyền lợi bao gồm:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      {feat.included ? (
                        <div className={`p-0.5 rounded-full mt-0.5 ${feat.highlight ? 'bg-amber-500 text-white' : 'bg-emerald-500/10 text-emerald-500'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="p-0.5 rounded-full mt-0.5 bg-slate-100 dark:bg-slate-800 text-slate-400">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <span className={`${feat.included ? (feat.highlight ? 'font-bold text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300') : 'text-slate-400 line-through'}`}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => setSelectedPlan(plan)}
                disabled={plan.price === 0}
                className={`w-full py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${
                  isPopular
                    ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-white shadow-orange-500/25'
                    : plan.price > 0
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-default shadow-none'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>{plan.ctaText}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* AI Features Highlight */}
      <div className="bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-slate-900/40 rounded-3xl p-8 sm:p-10 border border-indigo-500/30 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trợ Lý Trí Tuệ Nhân Tạo (AI Assistant)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Học Thông Minh Hơn Với Bộ Công Cụ AI Đột Phá
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Ứng dụng công nghệ AI tạo sinh thế hệ mới nhất được tinh chỉnh chuyên sâu cho ngữ liệu JLPT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aiFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">{feat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Cảm Nhận Từ Hơn 15.000+ Học Viên
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Những câu chuyện thành công từ người học tiếng Nhật trên toàn quốc và tại Nhật Bản.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
                />
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-400">{t.role}</div>
                  <span className="inline-block mt-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.2 rounded">
                    {t.jlptTarget}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Câu Hỏi Thường Gặp
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPlan && (
        <PaymentModal plan={selectedPlan} onClose={() => setSelectedPlan(null)} />
      )}
    </div>
  );
};
