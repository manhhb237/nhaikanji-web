import React, { useState } from 'react';
import type { PricingPlan } from '../../types/upgrade';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  Smartphone, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  Crown
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface PaymentModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
  const { upgradePlan, setActiveTab } = useUser();
  const [method, setMethod] = useState<'bank' | 'momo'>('bank');
  const [orderCode] = useState(() => 'NK' + Math.floor(100000 + Math.random() * 900000));
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!plan) return null;

  const bankAccount = {
    bankName: 'MB Bank (Ngân Hàng Quân Đội)',
    accountNumber: '0388998888',
    accountHolder: 'NHAI KANJI EDUCATION',
    amount: plan.price,
    syntax: `${orderCode} ${plan.id.toUpperCase()}`
  };

  // QR VietQR Quick URL
  const qrUrl = `https://api.vietqr.io/image/970422-${bankAccount.accountNumber}-qr_only.jpg?amount=${plan.price}&addInfo=${encodeURIComponent(bankAccount.syntax)}&accountName=${encodeURIComponent(bankAccount.accountHolder)}`;

  const copyToClipboard = (text: string, type: 'code' | 'acc') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      upgradePlan(plan.id === 'lifetime' ? 'lifetime' : 'yearly');
      setIsProcessing(false);
      setIsSuccess(true);
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Thanh Toán Nâng Cấp: {plan.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isSuccess ? (
          <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
            {/* Plan Info Badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-between shadow-lg shadow-blue-500/20">
              <div>
                <span className="text-xs text-white/80 uppercase font-semibold tracking-wider">Gói đã chọn</span>
                <h4 className="text-xl font-black">{plan.name}</h4>
                <p className="text-xs text-white/80">Tặng kèm {plan.aiCredits.toLocaleString()} AI Credits</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black">{plan.price.toLocaleString('vi-VN')}đ</div>
                <div className="text-xs text-white/70">{plan.period}</div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMethod('bank')}
                className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2.5 font-bold text-xs transition-all ${
                  method === 'bank'
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Chuyển Khoản Ngân Hàng (VietQR)</span>
              </button>

              <button
                onClick={() => setMethod('momo')}
                className={`p-3.5 rounded-2xl border flex items-center justify-center gap-2.5 font-bold text-xs transition-all ${
                  method === 'momo'
                    ? 'border-pink-600 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 shadow-md'
                    : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Ví MoMo Tự Động</span>
              </button>
            </div>

            {/* QR Code & Banking Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              {/* QR Image */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-200">
                  <img
                    src={qrUrl}
                    alt="VietQR Nhai Kanji"
                    className="w-44 h-44 object-contain rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="text-center text-[10px] text-slate-500 font-bold mt-1">
                    Quét mã bằng App Ngân hàng
                  </div>
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kích hoạt tự động 24/7</span>
                </div>
              </div>

              {/* Transfer Details Form */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-medium">Ngân hàng thụ hưởng:</span>
                  <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">{bankAccount.bankName}</div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium">Số tài khoản:</span>
                  <div className="flex items-center justify-between font-mono font-bold text-slate-900 dark:text-white bg-white dark:bg-[#111827] p-2 rounded-xl border border-slate-200 dark:border-slate-800 mt-0.5">
                    <span>{bankAccount.accountNumber}</span>
                    <button
                      onClick={() => copyToClipboard(bankAccount.accountNumber, 'acc')}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      {copiedAccount ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium">Chủ tài khoản:</span>
                  <div className="font-bold text-slate-800 dark:text-slate-200">{bankAccount.accountHolder}</div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium">Nội dung chuyển khoản (bắt buộc):</span>
                  <div className="flex items-center justify-between font-mono font-bold text-rose-600 dark:text-rose-400 bg-white dark:bg-[#111827] p-2 rounded-xl border border-slate-200 dark:border-slate-800 mt-0.5">
                    <span>{bankAccount.syntax}</span>
                    <button
                      onClick={() => copyToClipboard(bankAccount.syntax, 'code')}
                      className="text-rose-500 hover:text-rose-600"
                    >
                      {copiedCode ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2">
              <button
                onClick={handleSimulatePayment}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isProcessing ? 'Đang xác thực giao dịch...' : 'Xác Nhận Đã Chuyển Khoản (Kích Hoạt Ngay)'}</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Hệ thống sẽ tự động quét đối soát và cấp quyền Pro ngay lập tức.
              </p>
            </div>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-20 h-20 rounded-full bg-emerald-500/15 text-emerald-500 mx-auto flex items-center justify-center shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2">
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">
                Nâng Cấp Tài Khoản Thành Công!
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                Chúc mừng bạn đã mở khóa thành công <strong>{plan.name}</strong>. Tài khoản của bạn đã được cộng thêm <strong>{plan.aiCredits.toLocaleString()} AI Credits</strong> và toàn bộ tính năng cao cấp!
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 max-w-sm mx-auto text-xs text-emerald-700 dark:text-emerald-300 font-semibold space-y-1">
              <div>Mã đơn hàng: #{orderCode}</div>
              <div>Trạng thái: ĐÃ KÍCH HOẠT VĨNH VIỄN</div>
            </div>

            <button
              onClick={() => {
                onClose();
                setActiveTab('kanji');
              }}
              className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
            >
              Bắt Đầu Khám Phá Nhai Kanji Pro
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
