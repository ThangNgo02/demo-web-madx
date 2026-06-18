import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, AlertCircle, CheckCircle, ArrowRight, ShieldCheck, Zap, BarChart3, Users, Play, DollarSign, ArrowUpRight } from 'lucide-react';
import { industrySolutions, partnerLogos } from '../data/siteData';

export default function Solutions() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('retail');
  
  // ROI Calculator state for Warehousing tab
  const [dailyOrders, setDailyOrders] = useState(500);
  const [avgOrderPickTime, setAvgOrderPickTime] = useState(15); // minutes

  const currentSolution = industrySolutions.find(sol => sol.id === activeTab);

  // ROI Calculator Calculations
  const calculatedSavings = () => {
    // 80% time saving on audits, let's say WMS saves 3 minutes per order picking
    const hourlyRate = 30000; // VND per hour
    const totalMinutesSavedDaily = dailyOrders * 3; 
    const hoursSavedDaily = totalMinutesSavedDaily / 60;
    const dailySavings = hoursSavedDaily * hourlyRate;
    const yearlySavings = dailySavings * 365;

    return {
      timeSaved: Math.round(hoursSavedDaily),
      moneySaved: Math.round(yearlySavings).toLocaleString('vi-VN')
    };
  };

  const handleContactRedirect = (solutionTitle) => {
    navigate('/contact', { state: { interest: solutionTitle } });
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Solutions Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Giải pháp ngành</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Chuỗi Giá Trị Liên Thông
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Hợp nhất Sản xuất – Kho bãi – Thương mại điện tử – Bán lẻ trên một nền tảng duy nhất. MADX giải quyết triệt để sự cô lập dữ liệu.
          </p>
        </div>
      </section>

      {/* Pain Points Bar (Pattern Interrupt) */}
      <section className="bg-amber-500/10 border-y border-amber-500/20 py-8">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 text-center mb-6">
            Nỗi đau thực tế từ các doanh nghiệp trước khi gặp MADX
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { quote: '"Chúng tôi bị lệch tồn kho từ 8-12%, kế toán và kho mất hàng ngày đối chiếu lệch số trên Excel."', client: 'Chuỗi Căn tin trường học' },
              { quote: '"Chi hơn 80 triệu đồng/tháng tiền license BI nhưng C-Level vẫn không có dashboard cập nhật kịp thời."', client: 'Doanh nghiệp phân phối dược' },
              { quote: '"MES chạy một đường, ERP chạy một nẻo, kế hoạch sản xuất hoàn toàn ngắt kết nối với phòng mua hàng."', client: 'Nhà máy phụ liệu may mặc' }
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-amber-500/10 p-5 shadow-sm relative">
                <AlertCircle className="absolute top-4 right-4 h-4 w-4 text-amber-500" />
                <p className="text-xs text-slate-600 italic leading-relaxed">
                  {p.quote}
                </p>
                <span className="block text-[10px] font-bold text-slate-400 mt-3 text-right">
                  — {p.client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs Menu */}
      <div className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-5">
          {industrySolutions.map((sol) => (
            <button
              key={sol.id}
              onClick={() => setActiveTab(sol.id)}
              className={`rounded-xl px-6 py-3 text-xs font-bold transition duration-200 ${
                activeTab === sol.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {sol.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Rendering */}
      {currentSolution && (
        <section className="mx-auto mt-10 w-[min(1280px,calc(100%-32px))] px-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left Column: Solution Detail */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/5 rounded px-2.5 py-1">
                  Khách hàng tiêu biểu: {currentSolution.customers.join(', ')}
                </span>
                
                <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-deep leading-tight">
                  {currentSolution.hero}
                </h2>

                {/* Problem quote */}
                <div className="mt-6 border-l-4 border-amber-500 bg-slate-50 p-4 rounded-r-2xl">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Thách thức phổ biến trong ngành
                  </h4>
                  <ul className="mt-2 space-y-1.5">
                    {currentSolution.painPointQuotes.map((q, idx) => (
                      <li key={idx} className="text-xs text-slate-600 italic leading-relaxed">
                        • {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Stack list */}
                <div className="mt-8">
                  <h3 className="font-display font-bold text-sm text-brand-deep uppercase tracking-wider">
                    Kiến trúc giải pháp tích hợp (Solution Stack)
                  </h3>
                  <ul className="mt-4 space-y-3.5">
                    {currentSolution.solutionStack.map((stack, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-700 font-medium leading-relaxed">
                        <CheckCircle className="h-4.5 w-4.5 text-brand-blue-light shrink-0 mt-0.5" />
                        <span>{stack}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => handleContactRedirect(currentSolution.title)}
                  className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  {currentSolution.cta}
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Special Feature & Widgets */}
            <div className="rounded-2xl bg-brand-deep p-6.5 text-white flex flex-col justify-between overflow-hidden border border-white/5 relative">
              <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.3),transparent_70%)]" />
              
              {/* Conditional Rendering based on Tab */}
              {activeTab === 'retail' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Đặc quyền thiết kế</span>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                      {currentSolution.specialFeature.title}
                    </h3>
                    <p className="mt-3.5 text-xs text-slate-300 leading-relaxed font-medium">
                      {currentSolution.specialFeature.desc}
                    </p>
                  </div>
                  
                  {/* Flagship visualization */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                    <span className="block text-xs font-bold text-white mb-2">Sandbox Live Feeds</span>
                    <div className="h-32 bg-[#051126] rounded-lg border border-white/5 flex items-center justify-center relative">
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-emerald-500/10 rounded-full px-2 py-0.5 text-[8px] text-emerald-400 font-bold border border-emerald-500/20">
                        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-ping" />
                        AI CAM 01
                      </div>
                      <div className="text-center text-slate-500 flex flex-col items-center gap-2">
                        <Users className="h-6 w-6 text-brand-cyan animate-pulse" />
                        <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Đang theo dõi lưu lượng đi bộ</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'manufacturing' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Hồ sơ kỹ thuật</span>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                      {currentSolution.resources.architectureMapTitle}
                    </h3>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                      Tài liệu kiến trúc hệ thống chi tiết giúp CIO/CTO đánh giá luồng kết nối MES và Open-ERP.
                    </p>
                  </div>
                  
                  {/* Technical card list */}
                  <div className="space-y-2.5">
                    {[
                      currentSolution.resources.caseStudyTitle,
                      currentSolution.resources.roiTitle
                    ].map((title, i) => (
                      <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-semibold hover:bg-white/[0.06] transition duration-200 cursor-pointer">
                        <span>{title}</span>
                        <ArrowUpRight className="h-4.5 w-4.5 text-brand-cyan" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'warehousing' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Interactive ROI Widget</span>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                      {currentSolution.widget.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-400">
                      {currentSolution.widget.desc}
                    </p>
                  </div>

                  {/* Calculator elements */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4.5 space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <div className="flex justify-between text-xs font-bold">
                        <span>Số lượng đơn hàng/ngày:</span>
                        <span className="text-brand-cyan">{dailyOrders} đơn</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="3000"
                        step="50"
                        value={dailyOrders}
                        onChange={(e) => setDailyOrders(Number(e.target.value))}
                        className="h-1 w-full bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                      />
                    </div>

                    <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-3 text-center">
                      <div>
                        <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-tight">Số giờ tiết kiệm/ngày</span>
                        <strong className="text-xl text-white font-black">{calculatedSavings().timeSaved} giờ</strong>
                      </div>
                      <div>
                        <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-tight">Số tiền tối ưu/năm</span>
                        <strong className="text-xl text-brand-cyan font-black">~ {calculatedSavings().moneySaved}đ</strong>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ecommerce' && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Lợi thế so sánh</span>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                      {currentSolution.differentiation.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                      {currentSolution.differentiation.desc}
                    </p>
                  </div>
                  
                  {/* Bidding list */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400 font-bold mb-2.5">Nhóm dự án Enterprise</span>
                    <div className="text-xs font-semibold space-y-2 text-slate-300">
                      <div className="flex items-center gap-2">• Ngân sách đấu thầu linh hoạt theo ROI</div>
                      <div className="flex items-center gap-2">• Cam kết bàn giao 100% sở hữu code</div>
                      <div className="flex items-center gap-2">• Hỗ trợ vận hành thực chiến Portco</div>
                    </div>
                  </div>
                </div>
              )}

              {/* General footer metadata */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>Giải pháp may đo MADX</span>
                <span>Kiến trúc mở (Open architecture)</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Grid Section */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Differentiator Matrix</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            Sự khác biệt vượt trội từ Tổng thầu MADX
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm">
          <div className="grid grid-cols-3 bg-slate-900 text-white text-xs font-bold py-4.5 px-6 text-center tracking-wider uppercase divide-x divide-slate-800">
            <div>Tiêu chí so sánh</div>
            <div>SI Nền tảng đơn / SI thông thường</div>
            <div className="text-brand-cyan">MADX Thực Chiến</div>
          </div>
          
          <div className="divide-y divide-slate-100 text-xs text-slate-700">
            {[
              { criteria: 'Khả năng tích hợp', others: 'Chỉ cài đặt phần mềm đơn lẻ (ERP riêng, POS riêng), gây cô lập dữ liệu.', madx: 'Hợp nhất toàn bộ chuỗi giá trị (MES - Kho - CRM - Ecom - BI) trên một kiến trúc Open-ERP.' },
              { criteria: 'Quyền sở hữu công nghệ', others: 'Khóa nền tảng độc quyền, tính phí license tăng dần theo doanh số hoặc nhân sự.', madx: 'Chính sách mở hoàn toàn. Không khóa nền tảng, bàn giao 100% mã nguồn sạch sau dự án.' },
              { criteria: 'Thử nghiệm & Sandbox', others: 'Chỉ test trên dữ liệu giả lập, dễ xảy ra lỗi khi deploy thực tế tại điểm bán.', madx: 'Vận hành hệ sinh thái Flagship Sandbox thực tế để kiểm tra dòng chảy nghiệp vụ trước khi go-live.' },
              { criteria: 'May đo & Tự chủ IP', others: 'Phụ thuộc hoàn toàn vào template có sẵn của hãng lớn, không thể tùy chỉnh đặc thù.', madx: 'Sở hữu IP độc quyền (FaceID chấm công/POS, thuật toán AI dự báo tồn kho) giúp tùy biến sâu.' }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 py-5 px-6 gap-4 text-center divide-x divide-slate-100 items-center">
                <div className="font-bold text-left text-brand-deep pl-1">{row.criteria}</div>
                <div className="text-slate-500 font-medium px-2">{row.others}</div>
                <div className="font-semibold text-slate-900 bg-brand-blue/[0.01] px-2">{row.madx}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust partner logos */}
      <section className="bg-white py-16 mt-20 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Hệ sinh thái Đối tác & Liên minh Công nghệ đã ký kết
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partnerLogos.map((logo, idx) => (
              <span key={idx} className="rounded-xl border border-slate-100 bg-slate-50 px-6 py-3 text-sm font-extrabold text-slate-400 hover:text-slate-600 transition duration-200">
                {logo}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-semibold italic mt-4">
            * Chỉ hiển thị các đối tác công nghệ đã có thỏa thuận hợp tác (MoU) chính thức.
          </p>
        </div>
      </section>
    </div>
  );
}
