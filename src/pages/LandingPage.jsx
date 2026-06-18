import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, ChevronRight, Zap, Database, Cpu, TrendingUp, CheckCircle, Download,
  Mail, Layers, Globe, Play, Menu, X, ArrowUpRight, Phone, MapPin,
  ShieldCheck, BarChart3, Users, Sparkles, AreaChart, Send, CheckCircle2, Clock,
  Target, Award, Calendar, Filter
} from 'lucide-react';
import {
  products, services, caseStudies, clients, partnerLogos,
  resourceBlogs, aboutContent, industrySolutions
} from '../data/siteData';
import logoLightBg from '../assets/logo-trên-nền-trắng.jpg';
import logoDarkBg from '../assets/logo-trắng-trên-nền-đen.jpg';

const sections = [
  { id: 'hero', name: 'Trang chủ' },
  { id: 'solutions', name: 'Giải pháp' },
  { id: 'products', name: 'Sản phẩm' },
  { id: 'services', name: 'Dịch vụ' },
  { id: 'case-studies', name: 'Dự án' },
  { id: 'about', name: 'Về MADX' },
  { id: 'resources', name: 'Tài nguyên' },
  { id: 'contact', name: 'Liên hệ' }
];

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Newsletter
  const [newsEmail, setNewsEmail] = useState('');
  const [isSubmittingNews, setIsSubmittingNews] = useState(false);
  const [isSuccessNews, setIsSuccessNews] = useState(false);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 50);

      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        if (sectionEls[i].offsetTop <= scrollPos) {
          setActiveSection(sectionEls[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setContactForm({ name: '', email: '', phone: '', company: '', interest: '', message: '' });
    }, 1500);
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

  const duocVuong = caseStudies.find(c => c.id === 'duoc-vuong');

  return (
    <div className="flex min-h-screen flex-col font-sans">

      {/* ═══════════════════════════════ HEADER ═══════════════════════════════ */}
      <header className={`fixed top-4 left-1/2 z-50 w-[min(1280px,calc(100%-32px))] -translate-x-1/2 rounded-2xl border px-6 py-4 shadow-[0_12px_40px_rgba(3,10,28,0.06)] backdrop-blur-md transition-all duration-300 ${isHeaderScrolled ? 'border-white/60 bg-white/85 shadow-lg' : 'border-white/40 bg-white/70'}`}>
        <div className="flex items-center justify-between gap-5">
          <a onClick={() => scrollTo('hero')} className="flex items-center cursor-pointer">
            <img src={logoLightBg} alt="MADX Logo" className="h-12 w-auto object-contain rounded-lg shadow-sm" />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative cursor-pointer rounded-xl px-3 py-2.5 text-sm font-bold transition duration-200 hover:bg-slate-100/50 hover:text-brand-blue ${activeSection === s.id ? 'active-nav-link text-brand-blue' : 'text-slate-600'}`}
              >
                {s.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              onClick={() => scrollTo('contact')}
              className="group cursor-pointer inline-flex h-11 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Đặt lịch tư vấn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition lg:hidden text-slate-700 hover:bg-slate-50" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-deep/60 backdrop-blur-sm transition-all lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-24 left-4 right-4 rounded-3xl border border-white/20 bg-white p-6 shadow-2xl animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col gap-3">
              {sections.map((s) => (
                <a key={s.id} onClick={() => scrollTo(s.id)} className={`cursor-pointer rounded-2xl px-4 py-3 text-base font-bold transition hover:bg-slate-50 hover:text-brand-blue ${activeSection === s.id ? 'bg-brand-blue/5 text-brand-blue' : 'text-slate-700'}`}>
                  {s.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <a onClick={() => scrollTo('contact')} className="cursor-pointer flex h-12 items-center justify-center rounded-2xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark">
                Đặt lịch tư vấn
              </a>
            </div>
          </div>
        </div>
      )}


      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section id="hero" className="relative isolate overflow-hidden bg-brand-deep pt-40 pb-20 text-white lg:pb-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-[850px] bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.15),transparent_40%),radial-gradient(circle_at_20%_30%,rgba(0,102,226,0.18),transparent_50%),linear-gradient(180deg,#07132c_0%,#0c214a_60%,#0b1a3c_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="mx-auto grid w-[min(1280px,calc(100%-32px))] gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="flex flex-col items-start animate-fade-in">
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
              <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 font-bold text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/40">
                Đặt lịch tư vấn ngành (30 phút miễn phí)
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a onClick={() => scrollTo('case-studies')} className="cursor-pointer inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 font-bold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white">
                Xem dự án tiêu biểu
              </a>
            </div>
          </div>

          {/* 4 Pillar Diagram */}
          <div className="glass-panel-dark rounded-3xl p-6 shadow-[0_30px_100px_rgba(0,0,0,0.4)] relative border border-white/15 animate-slide-up">
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
                <div key={idx} className={`flex items-start gap-3.5 rounded-2xl border bg-white/[0.02] p-3.5 transition duration-300 hover:bg-white/[0.05] ${p.color}`}>
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
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-slate-500 font-semibold tracking-wider uppercase">
              <span>Kiến trúc Open-ERP</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Active Diagram
              </span>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="mt-16 border-t border-white/5 bg-brand-ink/40 py-8 backdrop-blur-sm">
          <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan">
              Đã xử lý hơn 120 triệu giao dịch / 15 triệu đơn hàng cho khách hàng
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4.5">
              {clients.map((client) => (
                <span key={client} className="rounded-xl border border-white/5 bg-white/[0.03] px-5 py-2.5 text-xs font-bold text-slate-400 transition hover:border-brand-blue/30 hover:text-white">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ SOLUTIONS ═══════════════════════════════ */}
      <section id="solutions" className="scroll-mt-28 py-20">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Giải pháp ngành</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Chuỗi Giá Trị Liên Thông Toàn Diện
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Hợp nhất Sản xuất – Kho bãi – Thương mại điện tử – Bán lẻ trên một nền tảng duy nhất.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industrySolutions.map((sol) => (
              <div key={sol.id} className="group glass-panel rounded-3xl p-6 hover-premium flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-brand-deep group-hover:text-brand-blue transition">{sol.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{sol.hero}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {sol.customers.map((c, i) => (
                      <span key={i} className="rounded bg-brand-blue/5 px-2 py-0.5 text-[10px] font-bold text-brand-blue">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-blue-dark transition">
                    Tư vấn giải pháp <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ PRODUCTS ═══════════════════════════════ */}
      <section id="products" className="scroll-mt-28 py-20 bg-white border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Sản phẩm & Nền tảng</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Hệ sinh thái Sản phẩm Công nghệ Lõi
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Các nền tảng tự chủ công nghệ giúp doanh nghiệp bứt phá hiệu suất vận hành.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="group glass-panel rounded-3xl p-8 hover-premium flex flex-col justify-between">
                <div>
                  <span className="rounded-full bg-brand-blue/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-blue">
                    {product.label}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-brand-deep group-hover:text-brand-blue transition">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-3">{product.text}</p>
                  {product.simplifiedExplanation && (
                    <p className="mt-3 text-xs text-slate-500 italic bg-slate-50 rounded-xl p-3 border border-slate-100">
                      💡 {product.simplifiedExplanation}
                    </p>
                  )}
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium italic">
                    Tích hợp: {product.keyClients.slice(0, 2).join(', ')}
                  </span>
                  <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                    <ChevronRight className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ SERVICES ═══════════════════════════════ */}
      <section id="services" className="scroll-mt-28 py-20 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Dịch vụ chuyên gia</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Tư vấn & Triển khai Thực chiến
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Không làm tư vấn lý thuyết suông. MADX chịu trách nhiệm đến khi bạn làm chủ hệ thống.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue/20 hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-brand-deep group-hover:text-brand-blue transition leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">{service.problem}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.scope.slice(0, 3).map((s, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-500">
                        <CheckCircle className="h-3 w-3 text-brand-blue-light shrink-0" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-medium">KPI: {service.kpis.slice(0, 60)}...</span>
                  <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex items-center gap-1 text-xs font-bold text-brand-blue">
                    Tư vấn <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CASE STUDIES ═══════════════════════════════ */}
      <section id="case-studies" className="scroll-mt-28 py-20 bg-white border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Dự án tiêu biểu</span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Câu chuyện Khách hàng Thành công
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Hơn 9 dự án chuyển đổi số thực tế đã go-live, mang lại hiệu quả trực tiếp cho hoạt động kinh doanh.
            </p>
          </div>

          {/* Featured: Dược Vương */}
          {duocVuong && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-brand-deep text-white shadow-xl mb-10">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <span className="rounded-full bg-brand-cyan/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-cyan w-fit">
                    Case Study tiêu biểu: Dược Vương
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                    Chuyển đổi số chuỗi cung ứng & phân phối dược phẩm
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Hợp nhất cổng B2B Giá Thuốc Tốt với hệ thống quản trị kho WMS Core + ERP nội bộ, giảm thiểu tối đa quy trình thủ công.
                  </p>
                  <div className="mt-6 grid gap-4 grid-cols-3">
                    {duocVuong.highlights.map((h, i) => (
                      <div key={i} className="rounded-2xl bg-white/5 border border-white/5 p-3 text-center">
                        <strong className="block text-xl font-extrabold text-brand-cyan">{h.value}</strong>
                        <span className="mt-1 block text-[9px] text-slate-400 font-bold uppercase tracking-wide">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative bg-[#0c1f44] p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 min-h-[280px]">
                  <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
                  <div className="text-center">
                    <div className="h-14 w-14 mx-auto rounded-full bg-brand-cyan/15 flex items-center justify-center text-brand-cyan mb-4 border border-brand-cyan/20 animate-pulse">
                      <Play className="h-6 w-6 fill-current ml-0.5" />
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">Video walkthrough WMS Dược Vương</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Case Study Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.filter(c => c.id !== 'duoc-vuong').slice(0, 6).map((item) => (
              <div key={item.id} className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:translate-y-[-3px] hover:border-brand-blue/30 hover:shadow-lg">
                <div>
                  <span className="rounded-full bg-brand-blue/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                    {item.sector}
                  </span>
                  <h3 className="mt-3 font-display text-base font-extrabold text-brand-deep group-hover:text-brand-blue transition leading-snug">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">{item.challenge[0]}</p>
                  <div className="mt-4 grid gap-2 grid-cols-2">
                    {item.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/50 p-2 text-center">
                        <span className="block font-display text-sm font-extrabold text-brand-blue">{h.value}</span>
                        <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">{h.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ ABOUT ═══════════════════════════════ */}
      <section id="about" className="scroll-mt-28 py-20 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Về MADX</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                Liên Minh Thực Chiến
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600 font-medium">{aboutContent.vision.text}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Chúng tôi tin rằng chuyển đổi số thành công không đến từ tài liệu báo cáo lý thuyết. Thành công thực sự đến từ việc tối ưu từng giây picking hàng trong kho, tăng từng tỷ lệ chuyển đổi đơn hàng.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { title: 'Tôn trọng Nghiệp vụ', desc: 'Lắng nghe nỗi đau thực tế trước khi viết code.' },
                  { title: 'Tự chủ Lõi IP', desc: 'R&D AI, computer vision độc quyền.' },
                  { title: 'Chính trực & Minh bạch', desc: 'Cam kết SLA bảo trì hỗ trợ 24/7.' }
                ].map((val, i) => (
                  <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded bg-brand-blue/5 text-brand-blue font-bold text-[10px]">0{i + 1}</span>
                    <h4 className="mt-3 font-bold text-slate-800 text-xs uppercase tracking-wide">{val.title}</h4>
                    <p className="mt-1.5 text-[11px] text-slate-500 leading-normal">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-brand-deep p-6 text-white flex flex-col justify-between overflow-hidden border border-white/5 relative min-h-[320px]">
              <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3),transparent_70%)]" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Định vị chiến lược</span>
                <h3 className="mt-2 font-display text-lg font-bold">Tổng thầu Công nghệ Thực chiến</h3>
              </div>
              <div className="space-y-3.5 my-6 text-xs font-semibold text-slate-300">
                {['Nghiệp vụ đi trước — Công nghệ theo sau', 'Cam kết bàn giao toàn quyền sở hữu mã nguồn', 'Khảo sát, thiết kế Sandbox và deploy thực tế'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Partners */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-3">Đối tác công nghệ</p>
                <div className="flex flex-wrap gap-2">
                  {partnerLogos.map((logo, i) => (
                    <span key={i} className="rounded bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold text-slate-400">{logo}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ RESOURCES ═══════════════════════════════ */}
      <section id="resources" className="scroll-mt-28 py-20 bg-white border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Resource Hub</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
              Tài nguyên số & Insights chuyên môn
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {resourceBlogs.map((blog) => (
              <div key={blog.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue/20 hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span className="bg-brand-blue/5 text-brand-blue px-2.5 py-0.5 rounded-full">{blog.category}</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 className="mt-3 font-display font-extrabold text-slate-800 text-sm leading-snug group-hover:text-brand-blue transition">
                    {blog.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2">{blog.excerpt}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue cursor-pointer">
                    Đọc tiếp <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <section id="contact" className="scroll-mt-28 py-20 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            {/* Left info */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Liên hệ</span>
                <h2 className="mt-3 font-display text-3xl font-extrabold text-brand-deep">Kết nối với Chuyên gia</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Đội ngũ của chúng tôi thường phản hồi trong vòng 24 giờ làm việc.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-deep">Văn phòng</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Tầng 7, TTTM Giga Mall, 240-242 Phạm Văn Đồng, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                    <Phone className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-deep">Đường dây nóng</h3>
                    <div className="mt-1 flex gap-3 text-xs text-slate-500 font-semibold">
                      <a href="tel:0909411885" className="hover:text-brand-blue transition">0909 411 885</a>
                      <a href="tel:0911401955" className="hover:text-brand-blue transition">0911 401 955</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                    <Mail className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-deep">Email</h3>
                    <a href="mailto:Cs@madx.vn" className="text-xs text-slate-500 font-semibold hover:text-brand-blue transition">Cs@madx.vn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
              {isSubmitted ? (
                <div className="py-12 text-center animate-fade-in flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-brand-deep">Gửi thành công!</h3>
                  <p className="mt-3 max-w-sm text-sm text-slate-500">Chuyên gia tư vấn sẽ liên hệ lại với bạn sớm nhất.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 px-5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition">
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-brand-deep">Gửi yêu cầu tư vấn</h3>
                    <p className="mt-1 text-xs text-slate-500">Vui lòng điền đầy đủ các thông tin bên dưới.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-name" className="text-xs font-bold text-slate-700">Họ và tên *</label>
                      <input required type="text" id="c-name" value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-phone" className="text-xs font-bold text-slate-700">Số điện thoại *</label>
                      <input required type="tel" id="c-phone" value={contactForm.phone} onChange={e => setContactForm(p => ({ ...p, phone: e.target.value }))} placeholder="0909xxxxxx" className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-email" className="text-xs font-bold text-slate-700">Email doanh nghiệp *</label>
                      <input required type="email" id="c-email" value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))} placeholder="name@company.com" className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="c-company" className="text-xs font-bold text-slate-700">Tên doanh nghiệp *</label>
                      <input required type="text" id="c-company" value={contactForm.company} onChange={e => setContactForm(p => ({ ...p, company: e.target.value }))} placeholder="Công ty TNHH MADX" className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-interest" className="text-xs font-bold text-slate-700">Nhu cầu tư vấn *</label>
                    <select required id="c-interest" value={contactForm.interest} onChange={e => setContactForm(p => ({ ...p, interest: e.target.value }))} className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 text-slate-700">
                      <option value="">-- Vui lòng chọn nhu cầu --</option>
                      <optgroup label="Sản phẩm & Nền tảng">
                        {products.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                      </optgroup>
                      <optgroup label="Dịch vụ Chuyên sâu">
                        {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      </optgroup>
                      <option value="Yêu cầu khác / Tư vấn chung">Yêu cầu khác / Tư vấn chung</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="c-message" className="text-xs font-bold text-slate-700">Chi tiết yêu cầu</label>
                    <textarea id="c-message" rows={3} value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))} placeholder="Chia sẻ quy mô nhân sự, phần mềm đang sử dụng, hoặc nút thắt vận hành chính..." className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark disabled:opacity-50 shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/25">
                    {isSubmitting ? 'Đang kết nối chuyên gia...' : (<><span>Gửi yêu cầu tư vấn</span><Send className="h-4 w-4" /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CTA + NEWSLETTER ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-20 bg-brand-slate text-white border-t border-white/5">
        <div className="absolute inset-0 -z-10 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] text-center max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sẵn sàng số hóa chuỗi giá trị của bạn?
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Liên hệ nhận lộ trình tư vấn chi tiết hoặc đăng ký nhận bản tin công nghệ định kỳ.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex h-11 items-center justify-center rounded-xl bg-brand-blue px-6 text-xs font-bold text-white transition hover:bg-brand-blue-dark">
              Liên hệ chuyên gia
            </a>
            <div className="w-full max-w-xs">
              {isSuccessNews ? (
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-4 py-2.5 rounded-xl animate-fade-in text-center">
                  Cảm ơn bạn đã đăng ký nhận bản tin!
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="flex gap-2">
                  <input required type="email" placeholder="Đăng ký nhận bản tin..." value={newsEmail} onChange={(e) => setNewsEmail(e.target.value)} className="h-11 rounded-xl border border-white/10 bg-white/5 px-4 text-xs text-white outline-none transition focus:border-brand-blue flex-grow" />
                  <button type="submit" disabled={isSubmittingNews} className="h-11 rounded-xl bg-white text-brand-slate px-4 text-xs font-bold transition hover:bg-slate-100 shrink-0">
                    {isSubmittingNews ? 'Đang ký...' : 'Đăng ký'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ FOOTER ═══════════════════════════════ */}
      <footer className="border-t border-slate-200/60 bg-brand-deep pt-16 pb-12 text-white">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-5">
              <a onClick={() => scrollTo('hero')} className="flex items-center cursor-pointer">
                <img src={logoDarkBg} alt="MADX Logo" className="h-10 w-auto object-contain rounded-lg" />
              </a>
              <p className="text-sm leading-6 text-slate-400">
                Tổng thầu chuyển đổi số thực chiến cho doanh nghiệp tăng trưởng. Thiết kế hạ tầng số tích hợp ERP, POS, kho vận, dữ liệu và AI thành một nền tảng quản trị đồng bộ.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Sản phẩm & Nền tảng</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
                {products.slice(0, 4).map(p => (
                  <li key={p.id}><a onClick={() => scrollTo('products')} className="cursor-pointer transition hover:text-white">{p.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Dịch vụ chính</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
                {services.slice(0, 4).map(s => (
                  <li key={s.id}><a onClick={() => scrollTo('services')} className="cursor-pointer transition hover:text-white">{s.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Liên hệ</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-blue-light" />
                  <span>Tầng 7, TTTM Giga Mall, 240-242 Phạm Văn Đồng, TP. Thủ Đức, TP. HCM</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue-light" />
                  <a href="mailto:Cs@madx.vn" className="transition hover:text-white">Cs@madx.vn</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue-light mt-1" />
                  <div className="flex flex-col">
                    <a href="tel:0909411885" className="transition hover:text-white">0909 411 885</a>
                    <a href="tel:0911401955" className="transition hover:text-white">0911 401 955</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-10 border-slate-800" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MADX. All rights reserved.</p>
            <div className="flex gap-5">
              <span className="cursor-pointer hover:text-slate-400">Điều khoản dịch vụ</span>
              <span className="cursor-pointer hover:text-slate-400">Chính sách bảo mật</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
