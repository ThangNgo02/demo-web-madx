import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, AlertTriangle, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/siteData';

export default function CaseStudyDetail() {
  const { id } = useParams();
  
  // Find current case study
  const currentCase = caseStudies.find(c => c.id === id);

  if (!currentCase) {
    return (
      <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4 py-20 text-center animate-fade-in">
        <h2 className="font-display text-2xl font-bold text-brand-deep">Dự án không tồn tại hoặc đã bị gỡ bỏ.</h2>
        <p className="mt-3 text-slate-500 text-sm">Vui lòng kiểm tra lại đường dẫn.</p>
        <Link
          to="/case-studies"
          className="mt-6 inline-flex h-10 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-5 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại danh sách dự án
        </Link>
      </div>
    );
  }

  // Get related case studies (excluding current one, limit to 2)
  const relatedCases = caseStudies.filter(c => c.id !== id).slice(0, 2);

  return (
    <div className="animate-fade-in pb-20">
      {/* Detail Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-16 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-cyan hover:text-white transition mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách dự án
          </Link>
          
          <div className="max-w-4xl">
            <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan">
              {currentCase.sector}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {currentCase.fullTitle || currentCase.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Detail Core Content */}
      <section className="mx-auto mt-12 w-[min(1280px,calc(100%-32px))] px-4">
        {/* Highlight Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {currentCase.highlights.map((highlight, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
              <strong className="font-display text-3xl font-extrabold text-brand-blue">{highlight.value}</strong>
              <span className="mt-2 text-xs font-bold text-slate-500 uppercase tracking-wide leading-snug">{highlight.label}</span>
            </div>
          ))}
        </div>

        {/* Case Study Details Sections */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Main sections */}
          <div className="space-y-8">
            {/* 1. Thách thức */}
            <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-brand-deep border-b border-slate-100 pb-4">
                <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
                1. Thách thức & Khó khăn ban đầu
              </h2>
              <ul className="mt-6 space-y-4">
                {currentCase.challenge.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Giải pháp */}
            <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-brand-deep border-b border-slate-100 pb-4">
                <Lightbulb className="h-5 w-5 text-brand-cyan shrink-0" />
                2. Giải pháp kỹ thuật & Vận hành từ MADX
              </h2>
              <ul className="mt-6 space-y-4">
                {currentCase.solution.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Kết quả */}
            <div className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
              <h2 className="flex items-center gap-2.5 font-display text-lg font-extrabold text-brand-deep border-b border-slate-100 pb-4">
                <TrendingUp className="h-5 w-5 text-emerald-500 shrink-0" />
                3. Kết quả & Tác động thực tế đạt được
              </h2>
              <ul className="mt-6 space-y-4.5">
                {currentCase.result.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-50 text-emerald-600 border border-emerald-100">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar: related case studies & contact */}
          <div className="space-y-6">
            {/* Sidebar box 1: CTA box */}
            <div className="rounded-3xl bg-brand-slate p-6 text-white border border-white/5 shadow-md">
              <h3 className="font-display font-bold text-lg">Bạn có bài toán tương tự?</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Chúng tôi sẵn sàng khảo sát hệ thống hiện tại của bạn và thảo luận giải pháp khắc phục.
              </p>
              <Link
                to="/contact"
                state={{ interest: `Tư vấn case study: ${currentCase.name}` }}
                className="mt-5 flex h-10 items-center justify-center rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark text-xs"
              >
                Đặt lịch khảo sát
              </Link>
            </div>

            {/* Sidebar box 2: Related Cases */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display font-bold text-base text-brand-deep border-b border-slate-100 pb-3">
                Các dự án liên quan
              </h3>
              <div className="mt-4 space-y-4">
                {relatedCases.map((item) => (
                  <Link
                    key={item.id}
                    to={`/case-studies/${item.id}`}
                    className="group block rounded-xl border border-slate-100 hover:border-brand-blue/20 hover:bg-slate-50/50 p-4.5 transition duration-200"
                  >
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      {item.sector}
                    </span>
                    <h4 className="mt-1 font-display font-bold text-sm text-brand-deep group-hover:text-brand-blue transition">
                      {item.name}
                    </h4>
                    <span className="mt-3.5 inline-flex items-center gap-0.5 text-[10px] font-bold text-brand-blue group-hover:translate-x-0.5 transition-transform">
                      Chi tiết
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
