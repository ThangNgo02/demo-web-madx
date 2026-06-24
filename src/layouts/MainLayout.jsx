import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, Layers } from 'lucide-react';
import logoLightBg from '../assets/logo-trên-nền-trắng.jpg';
import logoDarkBg from '../assets/logo-trắng-trên-nền-đen.jpg';

// Scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Giải pháp ngành', path: '/solutions' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Dịch vụ', path: '/services' },
    { name: 'Dự án', path: '/case-studies' },
    { name: 'Về MADX', path: '/about' },
    { name: 'Tài nguyên', path: '/resources' },
    { name: 'Liên hệ', path: '/contact' }
  ];

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <ScrollToTop />

      {/* Header */}
      <header className="fixed top-4 left-1/2 z-50 w-[min(1280px,calc(100%-32px))] -translate-x-1/2 rounded-2xl border border-white/40 bg-white/70 px-6 py-5 shadow-[0_12px_40px_rgba(3,10,28,0.06)] backdrop-blur-md transition-all duration-300">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoLightBg} alt="MADX Logo" className="h-14 w-auto object-contain rounded-lg shadow-sm" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative rounded-xl px-3 py-2.5 text-sm xl:text-base font-bold text-slate-600 transition duration-200 hover:bg-slate-100/50 hover:text-brand-blue ${isActive ? 'active-nav-link' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Header */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-xl bg-brand-blue px-6 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-300 hover:bg-brand-blue-dark hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Đặt lịch tư vấn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition lg:hidden text-slate-700 hover:bg-slate-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-deep/60 backdrop-blur-sm transition-all lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute top-24 left-4 right-4 rounded-3xl border border-white/20 bg-white p-6 shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3.5 text-base font-bold text-slate-700 transition hover:bg-slate-50 hover:text-brand-blue ${pathname === link.path ? 'bg-brand-blue/5 text-brand-blue' : ''
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-12 items-center justify-center rounded-2xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark"
              >
                Đặt lịch tư vấn
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow pt-36">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-brand-deep pt-16 pb-12 text-white">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))]">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="flex flex-col gap-5">
              <Link to="/" className="flex items-center">
                <img src={logoDarkBg} alt="MADX Logo" className="h-10 w-auto object-contain rounded-lg" />
              </Link>
              <p className="text-sm leading-6 text-slate-400">
                Tổng thầu chuyển đổi số thực chiến cho doanh nghiệp tăng trưởng. Thiết kế hạ tầng số tích hợp ERP, POS, kho vận, dữ liệu và AI thành một nền tảng quản trị đồng bộ.
              </p>
            </div>

            {/* Sitemap/Quicklinks */}
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Sản phẩm & Nền tảng</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
                <li><Link to="/products" className="transition hover:text-white">Open-ERP Platform</Link></li>
                <li><Link to="/products" className="transition hover:text-white">POS & Face ID Engine</Link></li>
                <li><Link to="/products" className="transition hover:text-white">Embedded BI Portal</Link></li>
                <li><Link to="/products" className="transition hover:text-white">AI Suite</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Dịch vụ chính</h3>
              <ul className="mt-5 space-y-3.5 text-sm text-slate-400">
                <li><Link to="/services" className="transition hover:text-white">Tech Due Diligence</Link></li>
                <li><Link to="/services" className="transition hover:text-white">ERP/HRM Implementation</Link></li>
                <li><Link to="/services" className="transition hover:text-white">Data & AI Implementation</Link></li>
                <li><Link to="/services" className="transition hover:text-white">Digital Transformation Consulting</Link></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="font-display font-bold text-lg text-slate-200">Liên hệ</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-blue-light" />
                  <span>Tầng 7, TTTM Giga Mall, 240-242 Phạm Văn Đồng, P. Hiệp Bình Chánh, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue-light" />
                  <a href="mailto:cs@madx.com.vn" className="transition hover:text-white">cs@madx.com.vn</a>
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
