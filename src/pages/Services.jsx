import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, AlertCircle, CheckCircle, ArrowRight, ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';
import { services } from '../data/siteData';

export default function Services() {
  const navigate = useNavigate();

  const handleContactRedirect = (serviceName) => {
    navigate('/contact', { state: { interest: serviceName } });
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'tech-due-diligence':
        return <ShieldCheck className="h-6 w-6 text-brand-blue" />;
      case 'erp-hrm-implementation':
        return <Zap className="h-6 w-6 text-brand-blue" />;
      case 'data-ai-implementation':
        return <BarChart3 className="h-6 w-6 text-brand-blue" />;
      case 'digital-transformation-consulting':
        return <Users className="h-6 w-6 text-brand-blue" />;
      default:
        return <ShieldCheck className="h-6 w-6 text-brand-blue" />;
    }
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Services Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Dịch vụ chuyên gia</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tư vấn & Triển khai Thực chiến
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Chúng tôi không làm tư vấn lý thuyết suông. MADX chịu trách nhiệm tối ưu hóa các dòng chảy nghiệp vụ, nâng cao ROI và đồng hành cùng nhân sự của bạn đến khi làm chủ hệ thống.
          </p>
        </div>
      </section>

      {/* Services Content list */}
      <section className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4 space-y-20">
        {services.map((service, idx) => (
          <div key={service.id} id={service.id} className="scroll-mt-28">
            {/* Title & Overview Card */}
            <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between border-b border-slate-100 pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                    {getServiceIcon(service.id)}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-extrabold text-brand-deep">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm font-medium text-slate-500">
                      <span className="font-semibold text-slate-700">Đối tượng khách hàng:</span> {service.targetAudience}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleContactRedirect(service.title)}
                  className="group inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  Liên hệ chuyên gia
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Core sections grid */}
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {/* Problems and Scope */}
                <div className="space-y-8">
                  {/* Problem & Pain points */}
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-amber-600">
                      <AlertCircle className="h-4.5 w-4.5" />
                      Thách thức / Nỗi đau (Pain Points)
                    </h3>
                    <p className="mt-3.5 text-sm font-medium text-slate-700 bg-slate-50 rounded-xl p-3.5 border-l-4 border-amber-500">
                      {service.problem}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {service.painPoints.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-500">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Scope of Work */}
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-deep">
                      Phạm vi công việc (Scope of Work)
                    </h3>
                    <ul className="mt-4 grid gap-2.5">
                      {service.scope.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/30 px-4 py-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle className="h-4 w-4 text-brand-blue-light shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Steps and Differentiation */}
                <div className="space-y-8">
                  {/* Implementation Steps */}
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand-deep">
                      Quy trình triển khai các bước
                    </h3>
                    <div className="mt-4 relative border-l border-slate-200 pl-4 ml-2.5 space-y-6">
                      {service.steps.map((step, i) => {
                        const [title, desc] = step.split(': ');
                        return (
                          <div key={i} className="relative">
                            <span className="absolute -left-[25px] flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue font-display text-[10px] font-black text-white shadow-sm shadow-brand-blue/30">
                              {i + 1}
                            </span>
                            <h4 className="text-xs font-bold text-slate-800 leading-tight">
                              {title}
                            </h4>
                            {desc && (
                              <p className="mt-1 text-xs text-slate-500 leading-normal">
                                {desc}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Differentiation Comparison Table */}
                  <div className="rounded-2xl border border-slate-200/60 overflow-hidden bg-slate-50/20">
                    <div className="bg-slate-900 px-4 py-2.5 text-center text-xs font-bold text-white uppercase tracking-wider">
                      Sự khác biệt của MADX
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-slate-200">
                      <div className="p-4">
                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-tight">Đơn vị khác</span>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed font-medium">
                          {service.differentiation.others}
                        </p>
                      </div>
                      <div className="p-4 bg-brand-blue/[0.01]">
                        <span className="block text-[10px] font-bold text-brand-blue uppercase tracking-tight">MADX Thực Chiến</span>
                        <p className="mt-2 text-xs text-slate-700 leading-relaxed font-semibold">
                          {service.differentiation.madx}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* KPIs & Technical metadata */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between text-xs">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-600">
                    <span className="font-semibold text-slate-700">Công nghệ:</span> {service.techUsed}
                  </span>
                </div>
                <div className="rounded-lg bg-emerald-50 border border-emerald-100 px-3.5 py-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-800">
                    <span className="text-slate-500 font-medium">KPI đầu ra:</span> {service.kpis}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust Quote / Bottom banner */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] rounded-3xl bg-brand-slate p-8 sm:p-12 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-xl">
          <h3 className="font-display text-xl font-bold">Chính sách Tư vấn Độc lập</h3>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            MADX cam kết tính khách quan tuyệt đối. Chúng tôi không nhận chiết khấu, hoa hồng đại lý từ bất kỳ hãng phần mềm nào (Odoo, SAP, Oracle NetSuite...). Giải pháp chúng tôi đề xuất chỉ nhằm tối ưu hóa chi phí đầu tư (ROI) và khớp quy trình tốt nhất cho bạn.
          </p>
        </div>
        <button
          onClick={() => handleContactRedirect('Yêu cầu báo giá dịch vụ')}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
        >
          Nhận mẫu báo cáo
        </button>
      </section>
    </div>
  );
}
