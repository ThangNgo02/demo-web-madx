import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
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
import iconLight from '../assets/icon.png';
import blogTechDD from '../assets/blog-tech-dd.png';
import blogWmsLogistics from '../assets/blog-wms-logistics.png';
import { motion, AnimatePresence, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import blogEcommerce from '../assets/blog-ecommerce.png';
import homeImg from '../assets/home.png';

/* ── Animation Variants ── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } })
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } })
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const FadeInUp = ({ children, delay = 0, className = "", ...props }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeInUp}
    custom={delay}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

const StaggerWrap = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={staggerContainer}
    className={className}
  >
    {children}
  </motion.div>
);

/* Animated number counter that triggers on scroll into view */
const AnimatedCounter = ({ end, suffix = '', prefix = '', duration = 2 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <span ref={ref}>
      {inView ? <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} /> : `${prefix}0${suffix}`}
    </span>
  );
};

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
      <header className={`fixed top-4 left-1/2 z-50 w-[min(1280px,calc(100%-32px))] -translate-x-1/2 rounded-2xl border px-6 py-4 backdrop-blur-xl transition-all duration-500 ${isHeaderScrolled ? 'border-slate-200/60 bg-white/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)]' : 'border-white/10 bg-brand-deep/60 shadow-[0_8px_30px_rgba(0,0,0,0.2)]'}`}>
        <div className="flex items-center justify-between gap-5">
          <a onClick={() => scrollTo('hero')} className="flex items-center cursor-pointer">
            <img src={isHeaderScrolled ? iconLight : iconLight} alt="MADX Logo" className={`h-12 w-auto object-contain rounded-lg transition-all duration-500 ${!isHeaderScrolled ? 'mix-blend-screen' : ''}`} />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {sections.map((s) => (
              <a
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative cursor-pointer rounded-xl px-3 py-2.5 text-sm font-semibold transition duration-200 ${
                  isHeaderScrolled
                    ? (activeSection === s.id ? 'text-brand-blue bg-brand-blue/5' : 'text-slate-600 hover:text-brand-blue hover:bg-slate-100/50')
                    : (activeSection === s.id ? 'text-brand-cyan bg-white/[0.08]' : 'text-slate-300 hover:text-white hover:bg-white/[0.05]')
                }`}
              >
                {s.name}
                {activeSection === s.id && (
                  <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full transition-colors duration-500 ${isHeaderScrolled ? 'bg-brand-blue shadow-[0_0_8px_rgba(0,102,226,0.4)]' : 'bg-brand-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]'}`} />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              onClick={() => scrollTo('contact')}
              className={`group cursor-pointer inline-flex h-11 items-center justify-center gap-1.5 rounded-xl px-5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl ${
                isHeaderScrolled
                  ? 'bg-brand-blue shadow-brand-blue/20 hover:bg-brand-blue-dark hover:shadow-brand-blue/30'
                  : 'bg-gradient-to-r from-brand-blue to-brand-cyan shadow-brand-blue/25 hover:shadow-brand-cyan/30 hover:brightness-110'
              }`}
            >
              Đặt lịch tư vấn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-sm transition lg:hidden ${isHeaderScrolled ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50' : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'}`} aria-label="Toggle menu">
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
          <div className="flex flex-col items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-brand-cyan backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
                Tổng thầu chuyển đổi số cho doanh nghiệp bán lẻ & sản xuất
              </div>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }} className="font-display font-extrabold tracking-tight text-balance">
              <div className="block text-xl sm:text-2xl lg:text-3xl leading-[1.15] text-white mb-3">
                Tổng thầu Chuyển đổi số cho Doanh nghiệp 
              </div>
              
              <div className="block text-3xl sm:text-4xl lg:text-5xl leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
                 Bán lẻ & Sản xuất Việt Nam
              </div>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mt-6 text-[16px] leading-relaxed text-slate-300 max-w-xl text-balance">
              Hợp nhất 4 Pillar Sản xuất – Kho – E-commerce – Retail trên một kiến trúc Open-ERP. Đã triển khai và khẳng định hiệu quả vận hành cho Nam Phong, Masi, Dược Vương, Elise.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-8 flex flex-wrap gap-4">
              <a onClick={() => scrollTo('contact')} className="cursor-pointer inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan animate-gradient px-6 font-bold text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-cyan/40 hover:brightness-110">
                Đặt lịch tư vấn ngành (30 phút miễn phí)
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a onClick={() => scrollTo('case-studies')} className="cursor-pointer inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 font-bold text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-white/30">
                Xem dự án tiêu biểu
              </a>
            </motion.div>
          </div>

          {/* Animated SVG Illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative">
            {/* Glow background */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-brand-cyan/20 via-transparent to-brand-blue/20 blur-3xl rounded-full opacity-40" />
            
            <div className="relative">
              {/* Central Hub */}
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 500 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-2xl">
                  {/* Animated connection lines */}
                  <defs>
                    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                    <filter id="glowStrong">
                      <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                      <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>

                  {/* Connection lines from center to each pillar */}
                  <line x1="250" y1="230" x2="120" y2="100" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="6 4">
                    <animate attributeName="strokeDashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="230" x2="380" y2="100" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="6 4">
                    <animate attributeName="strokeDashoffset" from="0" to="-20" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="230" x2="120" y2="360" stroke="url(#lineGrad2)" strokeWidth="1.5" strokeDasharray="6 4">
                    <animate attributeName="strokeDashoffset" from="0" to="-20" dur="1.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="230" x2="380" y2="360" stroke="url(#lineGrad1)" strokeWidth="1.5" strokeDasharray="6 4">
                    <animate attributeName="strokeDashoffset" from="0" to="-20" dur="2.2s" repeatCount="indefinite" />
                  </line>

                  {/* Horizontal & Vertical connection lines */}
                  <line x1="120" y1="100" x2="380" y2="100" stroke="rgba(6,182,212,0.15)" strokeWidth="1" strokeDasharray="4 6" />
                  <line x1="120" y1="360" x2="380" y2="360" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 6" />
                  <line x1="120" y1="100" x2="120" y2="360" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="4 6" />
                  <line x1="380" y1="100" x2="380" y2="360" stroke="rgba(59,130,246,0.1)" strokeWidth="1" strokeDasharray="4 6" />

                  {/* Orbiting particles around center */}
                  <circle r="3" fill="#06b6d4" filter="url(#glow)">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M250,200 A30,30 0 1,1 250,260 A30,30 0 1,1 250,200" />
                  </circle>
                  <circle r="2" fill="#3b82f6" filter="url(#glow)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M220,230 A30,30 0 1,1 280,230 A30,30 0 1,1 220,230" />
                  </circle>

                  {/* ══ PILLAR 1: Manufacturing (Top-Left) ══ */}
                  <g>
                    <rect x="55" y="40" width="130" height="120" rx="16" fill="url(#cardGrad)" stroke="rgba(6,182,212,0.6)" strokeWidth="1" />
                    {/* Gear icon */}
                    <g transform="translate(120, 75)" stroke="#06b6d4" strokeWidth="1.5" fill="none" filter="url(#glow)">
                      <circle cx="0" cy="0" r="8">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="3" />
                      <line x1="0" y1="-11" x2="0" y2="-8" />
                      <line x1="0" y1="8" x2="0" y2="11" />
                      <line x1="-11" y1="0" x2="-8" y2="0" />
                      <line x1="8" y1="0" x2="11" y2="0" />
                    </g>
                    <text x="120" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Sản xuất</text>
                    <text x="120" y="118" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="8" fontFamily="system-ui">Manufacturing</text>
                    {/* Mini bar chart */}
                    <rect x="80" y="130" width="6" height="16" rx="2" fill="rgba(6,182,212,0.4)">
                      <animate attributeName="height" values="10;16;12;10" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y" values="136;130;134;136" dur="3s" repeatCount="indefinite" />
                    </rect>
                    <rect x="90" y="134" width="6" height="12" rx="2" fill="rgba(6,182,212,0.3)">
                      <animate attributeName="height" values="12;8;14;12" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="y" values="134;138;132;134" dur="2.5s" repeatCount="indefinite" />
                    </rect>
                    <rect x="100" y="128" width="6" height="18" rx="2" fill="rgba(6,182,212,0.5)">
                      <animate attributeName="height" values="18;14;18;14;18" dur="4s" repeatCount="indefinite" />
                      <animate attributeName="y" values="128;132;128;132;128" dur="4s" repeatCount="indefinite" />
                    </rect>
                  </g>

                  {/* ══ PILLAR 2: WMS (Top-Right) ══ */}
                  <g>
                    <rect x="315" y="40" width="130" height="120" rx="16" fill="url(#cardGrad)" stroke="rgba(59,130,246,0.6)" strokeWidth="1" />
                    {/* Database/Server icon */}
                    <g transform="translate(380, 70)" stroke="#3b82f6" strokeWidth="1.5" fill="none" filter="url(#glow)">
                      <ellipse cx="0" cy="-6" rx="12" ry="5" />
                      <path d="M-12,-6 L-12,6 C-12,9 -6,11 0,11 C6,11 12,9 12,6 L12,-6" />
                      <ellipse cx="0" cy="6" rx="12" ry="5" opacity="0.4" />
                    </g>
                    <text x="380" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Kho vận</text>
                    <text x="380" y="118" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="8" fontFamily="system-ui">WMS</text>
                    {/* Scanning animation */}
                    <line x1="345" y1="132" x2="415" y2="132" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" />
                    <line x1="345" y1="138" x2="415" y2="138" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" />
                    <line x1="345" y1="144" x2="415" y2="144" stroke="rgba(59,130,246,0.15)" strokeWidth="0.5" />
                    <rect x="345" y="130" width="70" height="2" rx="1" fill="rgba(59,130,246,0.6)">
                      <animate attributeName="y" values="130;146;130" dur="2s" repeatCount="indefinite" />
                    </rect>
                  </g>

                  {/* ══ PILLAR 3: E-commerce (Bottom-Left) ══ */}
                  <g>
                    <rect x="55" y="300" width="130" height="120" rx="16" fill="url(#cardGrad)" stroke="rgba(16,185,129,0.6)" strokeWidth="1" />
                    {/* Globe icon */}
                    <g transform="translate(120, 340)" stroke="#10b981" strokeWidth="1.5" fill="none" filter="url(#glow)">
                      <circle cx="0" cy="0" r="12" />
                      <ellipse cx="0" cy="0" rx="5" ry="12">
                        <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="12s" repeatCount="indefinite" />
                      </ellipse>
                      <line x1="-12" y1="0" x2="12" y2="0" />
                    </g>
                    <text x="120" y="370" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Thương mại</text>
                    <text x="120" y="383" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="8" fontFamily="system-ui">E-commerce</text>
                    {/* Data flow dots */}
                    <circle r="2" fill="#10b981" opacity="0.8" filter="url(#glow)">
                      <animate attributeName="cx" values="80;160;80" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="cy" values="400;395;400" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </g>

                  {/* ══ PILLAR 4: Retail / POS (Bottom-Right) ══ */}
                  <g>
                    <rect x="315" y="300" width="130" height="120" rx="16" fill="url(#cardGrad)" stroke="rgba(245,158,11,0.6)" strokeWidth="1" />
                    {/* POS / Lightning icon */}
                    <g transform="translate(380, 336)" stroke="#f59e0b" strokeWidth="1.5" fill="none" filter="url(#glow)">
                      <polygon points="0,-14 -4,0 2,0 -2,14 6,0 0,0 4,-14" fill="rgba(245,158,11,0.15)">
                        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
                      </polygon>
                    </g>
                    <text x="380" y="370" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">Bán lẻ</text>
                    <text x="380" y="383" textAnchor="middle" fill="rgba(148,163,184,0.8)" fontSize="8" fontFamily="system-ui">Retail / POS</text>
                    {/* Pulse ring */}
                    <circle cx="380" cy="400" r="4" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="1">
                      <animate attributeName="r" values="4;12;4" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="380" cy="400" r="3" fill="#f59e0b" opacity="0.6" />
                  </g>

                  {/* ══ CENTER HUB: Open-ERP ══ */}
                  <g>
                    <circle cx="250" cy="230" r="48" fill="rgba(6,182,212,0.08)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.5" />
                    <circle cx="250" cy="230" r="36" fill="rgba(6,182,212,0.05)" stroke="rgba(6,182,212,0.3)" strokeWidth="1" />
                    {/* Rotating outer ring */}
                    <circle cx="250" cy="230" r="52" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="8 12">
                      <animateTransform attributeName="transform" type="rotate" from="0 250 230" to="360 250 230" dur="20s" repeatCount="indefinite" />
                    </circle>
                    {/* Hub icon */}
                    <g transform="translate(250, 222)" stroke="#06b6d4" strokeWidth="1.5" fill="none" filter="url(#glow)">
                      <rect x="-10" y="-8" width="20" height="16" rx="3" />
                      <line x1="-6" y1="-3" x2="6" y2="-3" />
                      <line x1="-6" y1="1" x2="6" y2="1" />
                      <line x1="-6" y1="5" x2="2" y2="5" />
                    </g>
                    <text x="250" y="250" textAnchor="middle" fill="white" fontSize="9" fontWeight="800" fontFamily="system-ui" letterSpacing="0.5">OPEN-ERP</text>
                  </g>

                  {/* Floating data particles */}
                  <circle r="1.5" fill="#06b6d4" opacity="0.6">
                    <animate attributeName="cx" values="150;200;170;150" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="180;160;200;180" dur="6s" repeatCount="indefinite" />
                  </circle>
                  <circle r="1" fill="#3b82f6" opacity="0.5">
                    <animate attributeName="cx" values="300;350;320;300" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="280;300;260;280" dur="5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="1.5" fill="#10b981" opacity="0.4">
                    <animate attributeName="cx" values="180;220;190;180" dur="7s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="300;280;310;300" dur="7s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>


      </section>


      {/* ═══════════════════════════════ SOLUTIONS ═══════════════════════════════ */}
      <section id="solutions" className="scroll-mt-28 py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] relative z-10">
          <FadeInUp>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                Giải pháp ngành
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                Chuỗi Giá Trị Liên Thông Toàn Diện
              </h2>
              <p className="mt-5 text-[16px] text-slate-500 max-w-2xl">
                Hợp nhất Sản xuất – Kho bãi – Thương mại điện tử – Bán lẻ trên một nền tảng duy nhất, được thiết kế riêng cho từng đặc thù ngành.
              </p>
            </div>
          </FadeInUp>

          <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(() => {
              const cardThemes = [
                { iconBg: 'bg-slate-800', iconColor: 'text-white', ring: 'group-hover:ring-slate-800/10' },
                { iconBg: 'bg-brand-blue', iconColor: 'text-white', ring: 'group-hover:ring-brand-blue/10' },
                { iconBg: 'bg-cyan-500', iconColor: 'text-white', ring: 'group-hover:ring-cyan-500/10' },
                { iconBg: 'bg-emerald-500', iconColor: 'text-white', ring: 'group-hover:ring-emerald-500/10' }
              ];
              const iconPaths = [
                <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>, 
                <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>, 
                <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="22" y1="12" x2="16" y2="12" /><line x1="12" y1="2" x2="12" y2="8" /><line x1="12" y1="16" x2="12" y2="22" /><line x1="2" y1="12" x2="8" y2="12" /></>, 
                <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></> 
              ];
              return industrySolutions.map((sol, idx) => {
                const theme = cardThemes[idx % cardThemes.length];
                return (
                  <motion.div key={sol.id} variants={fadeInUp} onClick={() => scrollTo('contact')} className={`group flex flex-col justify-between cursor-pointer rounded-3xl bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-2 border-slate-200/80 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:border-slate-300 ring-4 ring-transparent ${theme.ring}`} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                    <div>
                      <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconColor} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {iconPaths[idx % iconPaths.length]}
                        </svg>
                      </div>
                      
                      <h3 className="font-display text-[20px] font-bold text-brand-deep mb-4 leading-snug group-hover:text-brand-blue transition-colors">
                        {sol.title}
                      </h3>
                      
                      <p className="text-[14px] leading-relaxed text-slate-500">
                        {sol.hero}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center text-[13px] font-bold text-brand-blue opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </motion.div>
                );
              });
            })()}
          </StaggerWrap>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════ PRODUCTS ═══════════════════════════════ */}
      <section id="products" className="scroll-mt-28 py-20 bg-white">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <FadeInUp>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Sản phẩm & Nền tảng</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                Hệ sinh thái Sản phẩm Công nghệ Lõi
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Các nền tảng tự chủ công nghệ giúp doanh nghiệp bứt phá hiệu suất vận hành.
              </p>
            </div>
          </FadeInUp>

          <div className="grid gap-6 lg:grid-cols-2">
            {(() => {
              const productIcons = {
                'open-erp': Database,
                'pos-faceid': Target,
                'embedded-bi': BarChart3,
                'ai-suite': Sparkles
              };
              const gradients = [
                'from-blue-500 to-cyan-400',
                'from-emerald-500 to-teal-400',
                'from-violet-500 to-purple-400',
                'from-pink-500 to-rose-400'
              ];
              
              return products.slice(0, 4).map((product, idx) => {
                const Icon = productIcons[product.id] || Layers;
                const grad = gradients[idx % gradients.length];
                
                return (
                  <FadeInUp key={product.id} delay={(idx % 2 + 1) * 0.1} className="group relative rounded-3xl bg-white border border-slate-100 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    
                    {/* Subtle Gradient Glow in Background */}
                    <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${grad} opacity-5 group-hover:opacity-10 transition-opacity blur-3xl`} />
                    
                    <div className="relative z-10 flex-1">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg shadow-brand-blue/10 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-6 w-6" strokeWidth={2} />
                        </div>
                        <span className={`inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] shadow-[0_2px_8px_rgba(0,0,0,0.06)] ring-1 ring-slate-200/50 text-transparent bg-clip-text bg-gradient-to-r ${grad}`}>
                          {product.label}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-[22px] font-extrabold text-brand-deep group-hover:text-brand-blue transition-colors leading-snug">
                        {product.title}
                      </h3>
                      
                      <p className="mt-3 text-[14px] leading-relaxed text-slate-500 line-clamp-2">
                        {product.text}
                      </p>
                      

                    </div>
                    
                    <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 text-[12px] font-medium text-slate-400 min-w-0 flex-1">
                        <span className="flex shrink-0 items-center justify-center h-6 w-6 rounded-full bg-slate-50 text-slate-400 border border-slate-100">
                           <Users className="h-3 w-3" />
                        </span>
                        <span className="truncate">Khách hàng: <span className="text-slate-600 font-bold">{product.keyClients.slice(0, 2).join(', ')}</span></span>
                      </div>
                      
                      <a onClick={() => scrollTo('contact')} className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-blue hover:text-brand-blue-dark transition-all group-hover:gap-2">
                        Chi tiết <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </FadeInUp>
                );
              });
            })()}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ═══════════════════════════════ SERVICES ═══════════════════════════════ */}
      <section id="services" className="scroll-mt-28 py-20">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <FadeInUp>
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">
                <Sparkles className="h-3.5 w-3.5" /> Dịch vụ chuyên gia
              </span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                Tư vấn & Triển khai Thực chiến
              </h2>
              <p className="mt-4 text-[15px] text-slate-500 leading-relaxed">
                Không tư vấn lý thuyết suông — MADX đồng hành đến khi bạn làm chủ hệ thống.
              </p>
            </div>
          </FadeInUp>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {(() => {
              const cardStyles = [
                { color: 'text-indigo-600', iconColor: 'text-indigo-500' },
                { color: 'text-orange-500', iconColor: 'text-orange-400' },
                { color: 'text-rose-500', iconColor: 'text-rose-400' },
                { color: 'text-emerald-500', iconColor: 'text-emerald-400' },
                { color: 'text-cyan-500', iconColor: 'text-cyan-400' },
                { color: 'text-purple-500', iconColor: 'text-purple-400' }
              ];
              const iconMap = [Cpu, ShieldCheck, BarChart3, Layers, TrendingUp, Target];
              return services.slice(0, 6).map((service, idx) => {
                const Icon = iconMap[idx % iconMap.length];
                const style = cardStyles[idx % cardStyles.length];
                return (
                  <FadeInUp key={service.id} delay={(idx % 2 + 1) * 0.1} className="group flex rounded-2xl bg-white p-8 border border-slate-200/80 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300">
                    {/* Icon Column */}
                    <div className="mr-6 shrink-0">
                      <Icon className={`h-12 w-12 ${style.iconColor}`} strokeWidth={1.2} />
                    </div>
                    {/* Content Column */}
                    <div className="flex flex-col">
                      <span className={`font-display text-2xl font-extrabold leading-none ${style.color}`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`mt-2 font-display text-xl font-bold leading-snug ${style.color}`}>
                        {service.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
                        {service.problem}
                      </p>
                      
                      {/* Learn More link inline */}
                      <a onClick={() => scrollTo('contact')} className={`mt-5 cursor-pointer inline-flex items-center gap-1.5 text-[13px] font-bold ${style.color} opacity-80 hover:opacity-100 transition-all`}>
                        Tìm hiểu thêm <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </FadeInUp>
                );
              });
            })()}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CASE STUDIES ═══════════════════════════════ */}
      <section id="case-studies" className="scroll-mt-28 py-20 bg-white border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <FadeInUp>
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Dự án tiêu biểu</span>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                Câu chuyện Khách hàng Thành công
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Hơn 9 dự án chuyển đổi số thực tế đã go-live, mang lại hiệu quả trực tiếp cho hoạt động kinh doanh.
              </p>
            </div>
          </FadeInUp>

          {/* Featured: Dược Vương */}
          {duocVuong && (
            <FadeInUp delay={0.1} className="overflow-hidden rounded-3xl border border-slate-200 bg-brand-deep text-white shadow-xl mb-10">
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
            </FadeInUp>
          )}

          {/* Case Study Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(() => {
              const cardStyles = [
                { borderColor: '#8b5cf6', iconBg: '#f3f0ff', iconColor: '#7c3aed', statBg: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', statColor: '#6d28d9', arrow: '↗' },
                { borderColor: '#10b981', iconBg: '#ecfdf5', iconColor: '#059669', statBg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)', statColor: '#047857', arrow: '↗' },
                { borderColor: '#f59e0b', iconBg: '#fffbeb', iconColor: '#d97706', statBg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', statColor: '#b45309', arrow: '↗' },
                { borderColor: '#3b82f6', iconBg: '#eff6ff', iconColor: '#2563eb', statBg: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', statColor: '#1d4ed8', arrow: '↗' },
                { borderColor: '#ec4899', iconBg: '#fdf2f8', iconColor: '#db2777', statBg: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)', statColor: '#be185d', arrow: '↗' },
                { borderColor: '#f97316', iconBg: '#fff7ed', iconColor: '#ea580c', statBg: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', statColor: '#c2410c', arrow: '↗' },
              ];
              const iconPaths = [
                <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
                <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
                <><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></>,
                <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
                <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
                <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
              ];
              return caseStudies.filter(c => c.id !== 'duoc-vuong').slice(0, 6).map((item, idx) => {
                const s = cardStyles[idx % cardStyles.length];
                return (
                  <FadeInUp
                    key={item.id}
                    delay={(idx % 3 + 1) * 0.1}
                    className="group relative flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-200/80 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                    style={{
                      borderLeft: `3px solid ${s.borderColor}`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = s.borderColor}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.borderLeft = `3px solid ${s.borderColor}`; }}
                  >
                    <div>
                      {/* Icon */}
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl mb-4"
                        style={{ backgroundColor: s.iconBg }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={s.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {iconPaths[idx % iconPaths.length]}
                        </svg>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-[15px] font-extrabold text-brand-deep group-hover:text-brand-blue transition leading-snug">
                        {item.name}
                      </h3>

                      {/* Sector Tag */}
                      <span className="inline-block mt-1.5 text-[10px] font-semibold tracking-wide uppercase" style={{ color: s.iconColor, opacity: 0.8 }}>
                        {item.sector}
                      </span>

                      {/* Description */}
                      <p className="mt-2 text-[11.5px] text-slate-500 leading-[1.65] line-clamp-2">
                        {item.challenge[0]}
                      </p>
                    </div>

                  </FadeInUp>
                );
              });
            })()}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ ABOUT / WHY CHOOSE US ═══════════════════════════════ */}
      <section id="about" className="scroll-mt-28 py-20 border-t border-slate-200/60 bg-white">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          {/* Top part: Why choose us list + illustration (Image 4 style) */}
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl mb-8">
                Tại sao bạn nên chọn chúng tôi
              </h2>
              
              <div className="space-y-8">
                {/* Item 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-deep mb-2">Hơn 50 nhà phát triển giàu kinh nghiệm</h3>
                    <p className="text-[14px] leading-relaxed text-slate-500">Đội ngũ của chúng tôi được hình thành từ những nhà phát triển giàu kinh nghiệm, với hơn 10 năm phát triển các dự án tại thị trường Mỹ và Châu Á.</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-deep mb-2">Thế mạnh của chúng tôi</h3>
                    <p className="text-[14px] leading-relaxed text-slate-500">Trong quá trình phát triển của mình, MADX đã triển khai nhiều dự án về các lĩnh vực: E-Commerce, ERP, Logistic, Hệ thống quản lý sản xuất đa điểm.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-deep mb-2">Hỗ trợ khách hàng 24/7</h3>
                    <p className="text-[14px] leading-relaxed text-slate-500">Chúng tôi tin tưởng rằng thành công của khách hàng là chìa khóa cho sự phát triển của MADX. Và chúng tôi sẽ luôn mang đến những giải pháp tối ưu nhất.</p>
                  </div>
                </div>
                
              </div>
            <div className='ml-8'>
              <a onClick={() => scrollTo('contact')} className="mt-10 group cursor-pointer inline-flex items-center gap-2 text-[15px] font-bold text-indigo-500 hover:text-indigo-600 transition-all">
                Liên hệ chuyên gia <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
             
            </div>

            {/* Right Illustration placeholder */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-[3rem] bg-indigo-50 overflow-hidden flex items-center justify-center p-8 border border-indigo-100">
                {/* Decorative Elements */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.5),transparent_70%)]" />
                <div className="grid grid-cols-2 gap-6 relative z-10">
                   <div className="bg-white p-6 rounded-3xl shadow-xl transform -rotate-6 hover:rotate-0 transition-transform"><Cpu className="h-12 w-12 text-indigo-500" /></div>
                   <div className="bg-white p-6 rounded-3xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform mt-8"><Database className="h-12 w-12 text-orange-500" /></div>
                   <div className="bg-white p-6 rounded-3xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform"><Layers className="h-12 w-12 text-emerald-500" /></div>
                   <div className="bg-white p-6 rounded-3xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform mt-8"><Globe className="h-12 w-12 text-cyan-500" /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom part: Progress Circles (Image 2 style) */}
          <div className="pt-20 border-t border-slate-100">
             <div className="text-center mb-16">
               <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">MADX Solutions</span>
               <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
                 Đồng hành cùng mỗi doanh nghiệp
               </h2>
             </div>
             
             <div className="grid gap-12 md:grid-cols-3">
               {/* Circle 1 */}
               <div className="flex flex-col items-center text-center">
                 <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-indigo-50 mb-6 shadow-inner">
                    <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                      <motion.circle 
                        cx="50" cy="50" r="46" fill="transparent" stroke="#6366f1" strokeWidth="8" 
                        strokeDasharray="289" 
                        initial={{ strokeDashoffset: 289 }}
                        whileInView={{ strokeDashoffset: 49 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-display text-3xl font-extrabold text-indigo-500">
                      <CountUp end={83} duration={2.5} enableScrollSpy scrollSpyOnce />%
                    </span>
                 </div>
                 <h3 className="text-lg font-bold text-indigo-600 mb-3">Tăng hiệu quả hoạt động kinh doanh</h3>
                 <p className="text-[13px] leading-relaxed text-slate-500">
                   Được thành lập với sứ mệnh chuyển đổi số, MADX nhanh chóng giúp các công ty gia công, sản xuất sáng tạo quy trình.
                 </p>
               </div>

               {/* Circle 2 */}
               <div className="flex flex-col items-center text-center">
                 <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-orange-50 mb-6 shadow-inner">
                    <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                      <motion.circle 
                        cx="50" cy="50" r="46" fill="transparent" stroke="#f97316" strokeWidth="8" 
                        strokeDasharray="289" 
                        initial={{ strokeDashoffset: 289 }}
                        whileInView={{ strokeDashoffset: 31 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-display text-3xl font-extrabold text-orange-500">
                      <CountUp end={89} duration={2.5} enableScrollSpy scrollSpyOnce />%
                    </span>
                 </div>
                 <h3 className="text-lg font-bold text-orange-600 mb-3">Xây dựng được uy tín và thương hiệu</h3>
                 <p className="text-[13px] leading-relaxed text-slate-500">
                   Đội ngũ của chúng tôi bao gồm các nhà phát triển kinh nghiệm thực chiến từ các dự án lớn tại Châu Á và Mỹ.
                 </p>
               </div>

               {/* Circle 3 */}
               <div className="flex flex-col items-center text-center">
                 <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-emerald-50 mb-6 shadow-inner">
                    <svg className="absolute inset-0 h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                      <motion.circle 
                        cx="50" cy="50" r="46" fill="transparent" stroke="#10b981" strokeWidth="8" 
                        strokeDasharray="289" 
                        initial={{ strokeDashoffset: 289 }}
                        whileInView={{ strokeDashoffset: 28 }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="font-display text-3xl font-extrabold text-emerald-500">
                      <CountUp end={90} duration={2.5} enableScrollSpy scrollSpyOnce />%
                    </span>
                 </div>
                 <h3 className="text-lg font-bold text-emerald-600 mb-3">Công nghệ và ngôn ngữ tối ưu nhất</h3>
                 <p className="text-[13px] leading-relaxed text-slate-500">
                   Chúng tôi luôn sử dụng các công nghệ và ngôn ngữ lập trình tối ưu nhất cho khách hàng, đảm bảo hệ thống hoạt động nhanh và hiệu quả.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ RESOURCES ═══════════════════════════════ */}
      <section id="resources" className="scroll-mt-28 py-20 bg-slate-50/50 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Resource Hub</span>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
              Tài nguyên số & Insights chuyên môn
            </h2>
          </div>

          {/* Blog Cards with Images */}
          <div className="grid gap-6 md:grid-cols-3">
            {(() => {
              const blogImages = [blogTechDD, blogWmsLogistics, blogEcommerce];
              const categoryColors = [
                { bg: '#eef2ff', text: '#4f46e5' },
                { bg: '#ecfdf5', text: '#059669' },
                { bg: '#eff6ff', text: '#2563eb' },
              ];
              return resourceBlogs.map((blog, idx) => {
                const catStyle = categoryColors[idx % categoryColors.length];
                return (
                  <div
                    key={blog.id}
                    className="group flex flex-col rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:translate-y-[-3px]"
                    style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.04)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.04)'}
                  >
                    {/* Image Area */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                      <img
                        src={blogImages[idx]}
                        alt={blog.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category Tag */}
                      <span
                        className="absolute bottom-3 left-4 px-3 py-1 rounded-full text-[11px] font-bold"
                        style={{ backgroundColor: catStyle.bg, color: catStyle.text }}
                      >
                        {blog.category}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-between flex-grow p-5">
                      <div>
                        <h3 className="font-display font-extrabold text-brand-deep text-[15px] leading-snug group-hover:text-brand-blue transition">
                          {blog.title}
                        </h3>
                        <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Footer: Date + Read more */}
                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 font-medium">
                          {blog.date}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue cursor-pointer group-hover:gap-1.5 transition-all">
                          Đọc thêm <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CONTACT ═══════════════════════════════ */}
      <section id="contact" className="scroll-mt-28 py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="rounded-[3rem] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            {/* Left Panel - Dark Gradient */}
            <div className="relative p-10 lg:p-16 lg:w-5/12 bg-brand-deep text-white overflow-hidden flex flex-col justify-between">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-72 w-72 rounded-full bg-brand-blue opacity-30 blur-[80px]" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-emerald-500 opacity-20 blur-[80px]" />
              
              <div className="relative z-10">
                <span className="inline-flex h-8 items-center rounded-full bg-white/10 px-4 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-cyan backdrop-blur-md border border-white/10">
                  Liên Hệ
                </span>
                <h2 className="mt-8 font-display text-4xl font-extrabold text-white leading-tight">
                  Sẵn sàng chuyển đổi số?
                </h2>
                <p className="mt-4 text-[15px] text-slate-300 leading-relaxed max-w-md">
                  Đội ngũ chuyên gia của MADX luôn sẵn lòng đồng hành và giải đáp mọi thắc mắc của bạn trong vòng 24 giờ làm việc.
                </p>
              </div>

              <div className="relative z-10 mt-16 space-y-8">
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-brand-blue group-hover:border-brand-blue">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[16px] text-white">Trụ sở chính</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-slate-300">Tầng 7, TTTM Giga Mall, 240-242 Phạm Văn Đồng, TP. Thủ Đức, TP. Hồ Chí Minh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-brand-blue group-hover:border-brand-blue">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[16px] text-white">Đường dây nóng</h3>
                    <div className="mt-1.5 flex gap-4 text-[14px] text-slate-300 font-medium">
                      <a href="tel:0909411885" className="hover:text-white transition">0909 411 885</a>
                      <a href="tel:0911401955" className="hover:text-white transition">0911 401 955</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-brand-blue group-hover:border-brand-blue">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[16px] text-white">Email</h3>
                    <a href="mailto:Cs@madx.vn" className="mt-1.5 block text-[14px] text-slate-300 font-medium hover:text-white transition">Cs@madx.vn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-10 lg:p-16 lg:w-7/12 bg-white relative flex flex-col justify-center">
              {isSubmitted ? (
                <div className="py-12 text-center animate-fade-in flex flex-col items-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6 border border-emerald-100">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="font-display text-3xl font-extrabold text-brand-deep">Gửi thành công!</h3>
                  <p className="mt-4 max-w-sm text-[15px] text-slate-500 leading-relaxed">Chuyên gia tư vấn của chúng tôi sẽ liên hệ lại với bạn sớm nhất có thể.</p>
                  <button onClick={() => setIsSubmitted(false)} className="mt-8 inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 px-8 text-[14px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors">
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="mb-10">
                    <h3 className="font-display text-2xl font-extrabold text-brand-deep">Gửi yêu cầu tư vấn</h3>
                    <p className="mt-2 text-[15px] text-slate-500">Vui lòng điền đầy đủ các thông tin bên dưới để chúng tôi hỗ trợ tốt nhất.</p>
                  </div>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-name" className="text-[13px] font-bold text-brand-deep">Họ và tên *</label>
                      <input required type="text" id="c-name" value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))} placeholder="Nguyễn Văn A" className="h-14 rounded-xl border border-slate-200 bg-transparent px-5 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-phone" className="text-[13px] font-bold text-brand-deep">Số điện thoại *</label>
                      <input required type="tel" id="c-phone" value={contactForm.phone} onChange={e => setContactForm(p => ({ ...p, phone: e.target.value }))} placeholder="0909xxxxxx" className="h-14 rounded-xl border border-slate-200 bg-transparent px-5 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                  </div>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-email" className="text-[13px] font-bold text-brand-deep">Email doanh nghiệp *</label>
                      <input required type="email" id="c-email" value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))} placeholder="name@company.com" className="h-14 rounded-xl border border-slate-200 bg-transparent px-5 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-company" className="text-[13px] font-bold text-brand-deep">Tên doanh nghiệp *</label>
                      <input required type="text" id="c-company" value={contactForm.company} onChange={e => setContactForm(p => ({ ...p, company: e.target.value }))} placeholder="Công ty TNHH MADX" className="h-14 rounded-xl border border-slate-200 bg-transparent px-5 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-interest" className="text-[13px] font-bold text-brand-deep">Nhu cầu tư vấn *</label>
                    <select required id="c-interest" value={contactForm.interest} onChange={e => setContactForm(p => ({ ...p, interest: e.target.value }))} className="h-14 rounded-xl border border-slate-200 bg-transparent px-5 text-[15px] outline-none transition focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 text-slate-700">
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
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-message" className="text-[13px] font-bold text-brand-deep">Chi tiết yêu cầu</label>
                    <textarea id="c-message" rows={4} value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))} placeholder="Chia sẻ quy mô nhân sự, phần mềm đang sử dụng, hoặc nút thắt vận hành chính..." className="rounded-xl border border-slate-200 bg-transparent p-5 text-[15px] outline-none transition placeholder:text-slate-400 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 resize-none" />
                  </div>
                  
                  <button type="submit" disabled={isSubmitting} className="w-full h-14 mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue font-bold text-[16px] text-white transition-all hover:bg-brand-blue-dark disabled:opacity-50 shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.35)]">
                    {isSubmitting ? 'Đang kết nối chuyên gia...' : (<><span>Gửi yêu cầu tư vấn</span><Send className="h-5 w-5" /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════ CTA + NEWSLETTER ═══════════════════════════════ */}
      <section className="relative overflow-hidden py-32 bg-white text-slate-800 border-t border-slate-200/60">
        {/* Background Gradients & Effects */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute right-0 bottom-0 -z-10 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-emerald-500 opacity-[0.04] blur-[100px] rounded-full pointer-events-none" />

        <div className="mx-auto w-[min(1280px,calc(100%-32px))] text-center max-w-3xl relative z-10">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-brand-deep sm:text-5xl leading-tight">
            Sẵn sàng số hóa chuỗi <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">giá trị của bạn?</span>
          </h2>
          <p className="mt-6 text-[16px] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Liên hệ ngay để nhận lộ trình tư vấn chuyển đổi số chi tiết từ chuyên gia, hoặc đăng ký để không bỏ lỡ các xu hướng công nghệ mới nhất.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <a onClick={() => scrollTo('contact')} className="w-full sm:w-auto cursor-pointer inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 text-[15px] font-bold text-white transition-all hover:bg-brand-blue-dark shadow-[0_8px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5">
              <span>Liên hệ chuyên gia</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <div className="w-full sm:w-auto">
              {isSuccessNews ? (
                <div className="flex h-14 items-center justify-center bg-emerald-50 border border-emerald-100 text-emerald-600 text-[14px] font-bold px-6 rounded-xl animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Cảm ơn bạn đã đăng ký!
                </div>
              ) : (
                <form onSubmit={handleNewsSubmit} className="flex gap-2 w-full">
                  <input required type="email" placeholder="Đăng ký nhận bản tin..." value={newsEmail} onChange={(e) => setNewsEmail(e.target.value)} className="h-14 w-full sm:w-[280px] rounded-xl border border-slate-200 bg-slate-50 px-5 text-[14px] text-slate-700 outline-none transition-all focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 placeholder:text-slate-400" />
                  <button type="submit" disabled={isSubmittingNews} className="h-14 rounded-xl bg-brand-deep text-white px-6 text-[15px] font-bold transition-all hover:bg-slate-800 shrink-0 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0">
                    {isSubmittingNews ? 'Đang gửi...' : 'Đăng ký'}
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
