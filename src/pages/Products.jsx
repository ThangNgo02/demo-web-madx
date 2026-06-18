import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, HelpCircle, Layers, Cpu, AreaChart, Sparkles, ArrowRight } from 'lucide-react';
import { products } from '../data/siteData';

export default function Products() {
  const navigate = useNavigate();

  // Helper to map product icons
  const getProductIcon = (id) => {
    switch (id) {
      case 'open-erp':
        return <Layers className="h-8 w-8 text-brand-blue" />;
      case 'pos-faceid':
        return <Cpu className="h-8 w-8 text-brand-blue" />;
      case 'embedded-bi':
        return <AreaChart className="h-8 w-8 text-brand-blue" />;
      case 'ai-suite':
        return <Sparkles className="h-8 w-8 text-brand-blue" />;
      default:
        return <Layers className="h-8 w-8 text-brand-blue" />;
    }
  };

  const handleContactRedirect = (productName) => {
    navigate('/contact', { state: { interest: productName } });
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Products Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Nền tảng của chúng tôi</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sản phẩm & Giải pháp
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Các hệ thống lõi vững chắc được MADX tự chủ công nghệ hoặc đóng gói tinh chỉnh chuyên sâu, làm đòn bẩy giúp doanh nghiệp bứt phá hiệu suất vận hành.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4 space-y-12">
        {products.map((product, idx) => (
          <div
            key={product.id}
            id={product.id}
            className={`overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]`}
          >
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/5 shadow-inner">
                    {getProductIcon(product.id)}
                  </div>
                  <div>
                    <span className="rounded-md bg-brand-blue/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                      {product.label}
                    </span>
                    <h2 className="mt-1.5 font-display text-2xl font-extrabold text-brand-deep">
                      {product.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-6 text-slate-600">
                  {product.text}
                </p>

                {/* Simplified Explanation Box */}
                {product.simplifiedExplanation && (
                  <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-brand-blue-light shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Giải thích dễ hiểu</h4>
                      <p className="mt-1 text-xs text-slate-600 leading-5">
                        {product.simplifiedExplanation}
                      </p>
                    </div>
                  </div>
                )}

                {/* Unique Selling Points (USP) */}
                <div className="mt-8">
                  <h3 className="font-display font-bold text-sm text-brand-deep uppercase tracking-wider">
                    Lợi thế nổi bật (USP)
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {product.usp.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="h-4.5 w-4.5 text-brand-blue-light shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action and Clients info */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Khách hàng triển khai:</span> {product.keyClients.join(', ')}
                </div>
                <button
                  onClick={() => handleContactRedirect(product.title)}
                  className="group inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-5 text-xs font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  Tư vấn & Nhận báo giá
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Right Abstract Visual/Graphic */}
            <div className="relative rounded-2xl bg-brand-deep p-6 text-white flex flex-col justify-between overflow-hidden border border-white/5 min-h-[300px]">
              <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.3),transparent_70%)]" />
              <div className="absolute inset-0 -z-10 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:20px_20px]" />
              
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">One-Liner Statement</p>
                <p className="mt-3.5 font-display text-lg font-bold leading-7 text-white italic">
                  "{product.oneLiner}"
                </p>
              </div>

              {/* Graphical representation based on type */}
              <div className="mt-8 flex-grow flex items-center justify-center">
                {product.id === 'open-erp' && (
                  <div className="grid grid-cols-2 gap-2 w-full max-w-[280px]">
                    {['Bán lẻ', 'Sản xuất', 'Thương mại', 'Dược phẩm'].map((item, idx) => (
                      <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                        <span className="block text-[11px] font-bold text-slate-300">{item}</span>
                        <span className="block text-[8px] text-brand-cyan uppercase tracking-tight mt-1">Module hóa</span>
                      </div>
                    ))}
                  </div>
                )}

                {product.id === 'pos-faceid' && (
                  <div className="flex flex-col items-center gap-3 w-full max-w-[280px] rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <div className="relative h-16 w-16 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-brand-cyan animate-pulse" />
                      <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-ping" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-bold text-white">Lõi Nhận Diện Khuôn Mặt</span>
                      <span className="block text-[8px] text-brand-cyan uppercase tracking-tight mt-0.5">Xác thực dưới 0.5 giây</span>
                    </div>
                  </div>
                )}

                {product.id === 'embedded-bi' && (
                  <div className="w-full max-w-[280px] space-y-2">
                    <div className="flex justify-between text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                      <span>Live KPIs Dashboard</span>
                      <span>100% Realtime</span>
                    </div>
                    <div className="flex gap-2 items-end h-20 bg-white/[0.02] border border-white/10 rounded-lg p-2.5">
                      {[30, 75, 45, 90, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-white/[0.03] rounded h-full flex items-end">
                          <div
                            className="w-full bg-gradient-to-t from-brand-blue to-brand-cyan rounded"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {product.id === 'ai-suite' && (
                  <div className="flex flex-col gap-2 w-full max-w-[280px] rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex items-center justify-between text-[8px] text-slate-400 font-bold uppercase tracking-wider">
                      <span>AI Intelligent Assistant</span>
                      <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium italic border-l-2 border-brand-cyan pl-2 py-0.5">
                      "Dự báo nhu cầu tồn kho kho hàng Dược Vương cho 30 ngày tiếp theo đạt độ chính xác 92%..."
                    </div>
                  </div>
                )}
              </div>

              {/* Points tags */}
              <div className="mt-8 flex flex-wrap gap-1.5 justify-center">
                {product.points.map((p, idx) => (
                  <span key={idx} className="rounded bg-white/[0.07] px-2 py-1 text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Support section */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] rounded-3xl bg-brand-slate p-8 sm:p-12 text-white text-center">
        <h3 className="font-display text-2xl font-extrabold sm:text-3xl">Bạn cần giải pháp may đo riêng?</h3>
        <p className="mt-3.5 mx-auto max-w-xl text-sm text-slate-400 leading-6">
          Đội ngũ kỹ sư R&D và chuyên gia tư vấn kiến trúc của MADX sẵn sàng hợp tác nghiên cứu, thiết kế phần cứng/phần mềm chuyên biệt để giải quyết các bài toán đặc thù của doanh nghiệp bạn.
        </p>
        <button
          onClick={() => handleContactRedirect('May đo giải pháp riêng')}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
        >
          Liên hệ kỹ sư giải pháp
        </button>
      </section>
    </div>
  );
}
