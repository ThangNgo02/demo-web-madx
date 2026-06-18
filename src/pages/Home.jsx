import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Database, Cpu, TrendingUp, CheckCircle, AlertCircle, Download, Mail, Layers, Globe, Play } from 'lucide-react';
import { products, services, caseStudies, clients, partnerLogos, resourceBlogs } from '../data/siteData';

export default function Home() {
  const navigate = useNavigate();
  
  // Tech DD Lead Magnet Form State
  const [leadEmail, setLeadEmail] = useState('');
  const [leadCompany, setLeadCompany] = useState('');
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isSuccessLead, setIsSuccessLead] = useState(false);

  // Newsletter Form State
  const [newsEmail, setNewsEmail] = useState('');
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);
  const [isSuccessNews, setIsSuccessNews] = useState(false);

  const duocVuong = caseStudies.find(c => c.id === 'duoc-vuong');

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    setTimeout(() => {
      setIsSubmittingLead(false);
      setIsSuccessLead(true);
      setLeadEmail('');
      setLeadCompany('');
    }, 1200);
  };

  const handleNewsSubmit = (e) => {
    e.preventDefault();
    setIsSubmittingNews(true);
    setTimeout(() => {
      setIsSubmittingNews(false);
      setIsSuccessNews(true);
      setNewsEmail('');
    }, 1000);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-brand-deep pt-12 pb-20 text-white lg:pb-32">
        {/* Decorative Gradients */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[850px] bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(0,102,226,0.18),transparent_50%),linear-gradient(180deg,#07132c_0%,#0c214a_60%,#0b1a3c_100%)]" />
        {/* Grid lines */}
        <div className="absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="mx-auto grid w-[min(1280px,calc(100%-32px))] gap-16 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          {/* Left Text */}
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-brand-cyan backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
              Tổng thầu chuyển đổi số cho doanh nghiệp bán lẻ & sản xuất
            </div>
            
            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Tổng thầu Chuyển đổi số <br />
              <span className="text-gradient-blue bg-gradient-to-r from-brand-blue-light via-brand-cyan to-white">cho Doanh nghiệp Bán lẻ – Sản xuất Việt Nam</span>
            </h1>
            
            <p className="mt-6 text-base leading-7 text-slate-300 max-w-xl">
              Hợp nhất 4 Pillar Sản xuất – Kho – E-commerce – Retail trên một kiến trúc Open-ERP. Đã triển khai và khẳng định hiệu quả vận hành cho Nam Phong, Masi, Dược Vương, Elise.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                state={{ interest: 'Tư vấn Chuyển đổi số tổng thể' }}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 font-bold text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/40"
              >
                Đặt lịch tư vấn ngành (30 phút miễn phí)
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 font-bold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                Xem case study
              </Link>
            </div>
          </div>

          {/* Right: 4 Pillar Animated Diagram (NO handshakes) */}
          <div className="glass-panel-dark rounded-3xl p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] relative border border-white/15">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-brand-cyan mb-5 text-center">
              Kiến Trúc 4 Pillar Liên Thông
            </h3>
            
            <div className="space-y-3.5">
              {[
                { name: 'Pillar 1: Sản xuất (Manufacturing)', icon: Cpu, desc: 'Lập kế hoạch BOM & tự động hóa lệnh MES', color: 'border-brand-blue text-brand-blue-light' },
                { name: 'Pillar 2: Kho vận (Warehousing / WMS)', icon: Database, desc: 'Quản trị barcode/RFID & định vị tồn kho', color: 'border-brand-cyan text-brand-cyan' },
                { name: 'Pillar 3: Thương mại điện tử (E-commerce)', icon: Globe, desc: 'Đồng bộ đơn hàng B2B/B2C thời gian thực', color: 'border-sky-400 text-sky-400' },
                { name: 'Pillar 4: Bán lẻ đa điểm (Retail / POS)', icon: Zap, desc: 'Bán hàng thông minh tích hợp FaceID nhận diện', color: 'border-emerald-400 text-emerald-400' }
              ].map((p, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3.5 rounded-2xl border bg-white/[0.02] p-3.5 transition duration-300 hover:bg-white/[0.05] ${p.color}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{p.name}</h4>
                    <p className="text-[10px] text-slate-400 mt-1 leading-normal">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Live status */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500 font-semibold tracking-wider uppercase">
              <span>Kiến trúc Open-ERP</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active Diagram
              </span>
            </div>
          </div>
        </div>

        {/* Trust Strip Marquee Section */}
        <div className="mt-16 border-t border-white/5 bg-brand-ink/40 py-8 backdrop-blur-sm">
          <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              Đã xử lý hơn 120 triệu giao dịch / 15 triệu đơn hàng cho khách hàng
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4.5">
              {clients.map((client) => (
                <span
                  key={client}
                  className="rounded-xl border border-white/5 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-slate-400 transition hover:border-brand-blue/30 hover:text-white"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Solution Pillars (POS-Fintech Solution) */}
      <section className="mx-auto w-[min(1280px,calc(100%-32px))] py-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Core Architecture</span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
            Khối Giải Pháp Lõi POS-Fintech
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Hạ tầng thanh toán POS và Fintech liên thông đồng bộ giúp tối ưu hóa luồng giao dịch đa điểm, định danh thông minh và phòng ngừa rủi ro thất thoát.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group glass-panel rounded-3xl p-8 hover-premium flex flex-col justify-between"
            >
              <div>
                <span className="rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue">
                  {product.label}
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-deep group-hover:text-brand-blue transition">
                  {product.title}
                </h3>
                <p className="mt-3.5 text-sm leading-6 text-slate-600">
                  {product.text}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium italic">
                  Tích hợp: {product.keyClients.slice(0, 2).join(', ')}
                </span>
                <Link
                  to="/products"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white"
                >
                  <ChevronRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose MADX? (USP 3 Columns with Proof) */}
      <section className="bg-white py-20 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Lợi thế cạnh tranh (USP)</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
              Tại sao doanh nghiệp lựa chọn MADX?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: '1. End-to-End thực sự', stat: '5 phòng ban', desc: 'Hợp nhất Sản xuất, Kế hoạch, Kho bãi, Bán hàng và Kế toán trên 1 luồng dữ liệu liên mạch, loại bỏ hoàn toàn các báo cáo Excel rời rạc.' },
              { title: '2. Sandbox nội bộ chạy thật', stat: 'Flagship Sandbox', desc: 'Chúng tôi vận hành Flagship Sandbox thực tế để kiểm định trực tiếp tính tương thích của thiết bị camera AI, máy POS trước khi triển khai thực địa.' },
              { title: '3. IP sở hữu độc quyền', stat: '< 0.5 giây', desc: 'Sở hữu lõi thuật toán nhận diện khuôn mặt FaceID đạt tốc độ xử lý cực nhanh và mô hình AI Forecasting dự báo tồn kho đạt độ chính xác >90%.' }
            ].map((usp, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-slate-50/20 p-8 flex flex-col justify-between hover:border-brand-blue/20 transition duration-300">
                <div>
                  <h4 className="font-display font-extrabold text-brand-deep text-lg">{usp.title}</h4>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">{usp.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Số liệu kiểm định</span>
                  <span className="text-xs font-extrabold text-brand-blue bg-brand-blue/5 rounded px-2.5 py-1">{usp.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study Spotlight (Dược Vương) */}
      <section className="mx-auto w-[min(1280px,calc(100%-32px))] py-20">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Success Story Spotlight</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            Khách hàng nổi bật của chúng tôi
          </h2>
        </div>

        {duocVuong && (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-brand-deep text-white shadow-xl">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan">
                    Case Study tiêu biểu: Dược Vương
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                    Chuyển đổi số chuỗi cung ứng & phân phối dược phẩm
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Hợp nhất cổng B2B Giá Thuốc Tốt với hệ thống quản trị kho WMS Core + Barcode và ERP nội bộ, giảm thiểu tối đa quy trình thủ công và đối soát lệch số.
                  </p>
                  
                  {/* Highlights statistics */}
                  <div className="mt-8 grid gap-4 grid-cols-2">
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
                      <strong className="block text-2xl font-extrabold text-brand-cyan sm:text-3xl">80%</strong>
                      <span className="mt-1 block text-[10px] text-slate-400 font-bold uppercase tracking-wide">Giảm thời gian kiểm kê</span>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-white/5 p-4">
                      <strong className="block text-2xl font-extrabold text-brand-cyan sm:text-3xl">99.90%</strong>
                      <span className="mt-1 block text-[10px] text-slate-400 font-bold uppercase tracking-wide">Chính xác tồn kho</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 flex-wrap">
                  <Link
                    to={`/case-studies/${duocVuong.id}`}
                    className="inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-white px-5 text-sm font-bold text-brand-deep transition hover:bg-slate-100"
                  >
                    Xem case đầy đủ
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/case-studies"
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-bold text-slate-200 transition hover:bg-white/10"
                  >
                    Xem tất cả case studies
                  </Link>
                </div>
              </div>

              {/* Video Mockup Walkthrough Container */}
              <div className="relative bg-[#0c1f44] p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 min-h-[300px]">
                <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
                <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-4">WMS Warehouse Live Walkthrough</span>
                
                {/* Visual simulator box resembling a muted video player */}
                <div className="rounded-2xl border border-white/10 bg-[#051126] p-4 text-center h-52 flex flex-col items-center justify-center relative shadow-inner">
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 rounded px-2 py-0.5 text-[8px] font-bold text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    MUTED VIDEO MOCKUP
                  </div>
                  <div className="h-12 w-12 rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan mb-3 border border-brand-cyan/20 animate-pulse cursor-pointer hover:scale-105 transition">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Click to play video walkthrough (60s)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Lead Magnet — Tech DD Report Banner */}
      <section className="mx-auto w-[min(1280px,calc(100%-32px))] py-12">
        <div className="rounded-3xl bg-gradient-to-r from-brand-slate to-brand-deep border border-slate-800 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_right,rgba(6,182,212,0.2),transparent_60%)]" />
          
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <span className="rounded bg-brand-cyan/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                Lead Magnet — Thẩm định Độc lập
              </span>
              <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl leading-snug">
                Đánh giá hạ tầng IT/OT của doanh nghiệp bạn — Nhận Tech DD Report mẫu giá trị 15k - 35k USD
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Hãy để lại email doanh nghiệp và thông tin liên hệ của bạn để tải về bản Tech DD Report mẫu, được xây dựng bởi các Architects hàng đầu nhằm thẩm định an toàn mã nguồn và rủi ro công nghệ.
              </p>
            </div>

            {/* Gated form */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              {isSuccessLead ? (
                <div className="text-center py-6 animate-fade-in flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">Đăng ký thành công!</h4>
                  <p className="text-xs text-slate-400 mt-2">Chúng tôi đã gửi bản báo cáo mẫu qua hòm thư điện tử.</p>
                  <button
                    onClick={() => setIsSuccessLead(false)}
                    className="mt-5 text-xs text-brand-cyan font-bold hover:underline"
                  >
                    Đăng ký email khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="leadEmail" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Email doanh nghiệp *</label>
                    <input
                      required
                      type="email"
                      id="leadEmail"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="h-10 rounded-xl border border-white/10 bg-white/5 px-4 text-xs text-white outline-none transition focus:border-brand-blue"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="leadCompany" className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Tên công ty *</label>
                    <input
                      required
                      type="text"
                      id="leadCompany"
                      value={leadCompany}
                      onChange={(e) => setLeadCompany(e.target.value)}
                      placeholder="Công ty Cổ phần A"
                      className="h-10 rounded-xl border border-white/10 bg-white/5 px-4 text-xs text-white outline-none transition focus:border-brand-blue"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="w-full h-11 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark text-xs disabled:opacity-50"
                  >
                    <Download className="h-4 w-4" />
                    {isSubmittingLead ? 'Đang gửi...' : 'Tải tài liệu mẫu'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Teaser (3 Recent Blogs) */}
      <section className="mx-auto w-[min(1280px,calc(100%-32px))] py-20 border-t border-slate-200/60">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Resource Hub</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            Tài nguyên số & Insights chuyên môn mới nhất
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resourceBlogs.map((blog) => (
            <div key={blog.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue/20 hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  {blog.category}
                </span>
                <h3 className="mt-3 font-display font-extrabold text-slate-800 text-sm leading-snug group-hover:text-brand-blue transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
                <Link
                  to="/resources"
                  className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue"
                >
                  Đọc tiếp
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Partners Ecosystem */}
      <section className="bg-slate-50 py-16 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Hệ sinh thái Đối tác & Liên minh Công nghệ đã ký kết
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partnerLogos.map((logo, idx) => (
              <span key={idx} className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-400">
                {logo}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 italic mt-3">
            * Chỉ hiển thị các đối tác đã ký thỏa thuận chính thức (MoU).
          </p>
        </div>
      </section>

      {/* Footer CTA & Newsletter Form (newsletter signup) */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-brand-slate text-white border-t border-white/5">
        <div className="absolute inset-0 -z-10 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] px-4 text-center max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sẵn sàng số hóa chuỗi giá trị của bạn?
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Hãy liên hệ với chúng tôi để nhận lộ trình tư vấn chi tiết từ Solution Architects, hoặc đăng ký nhận bản tin công nghệ định kỳ.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-blue px-6 text-xs font-bold text-white transition hover:bg-brand-blue-dark"
            >
              Liên hệ chuyên gia
            </Link>

            {/* Newsletter Form */}
            <div className="w-full max-w-xs">
              {isSuccessNews ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-4 py-2.5 rounded-xl animate-fade-in text-center">
                  Cảm ơn bạn đã đăng ký nhận bản tin!
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="flex gap-2">
                  <input
                    required
                    type="email"
                    placeholder="Đăng ký nhận bản tin..."
                    value={newsEmail}
                    onChange={(e) => setNewsEmail(e.target.value)}
                    className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-xs text-white outline-none transition focus:border-brand-blue flex-grow"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingNews}
                    className="h-11 rounded-xl bg-white text-brand-slate px-4 text-xs font-bold transition hover:bg-slate-100 shrink-0"
                  >
                    {isSubmittingNews ? 'Đang ký...' : 'Đăng ký'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
