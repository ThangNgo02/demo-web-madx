import React, { useState } from 'react';
import { Download, BookOpen, Video, FileText, CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import { resourceBlogs } from '../data/siteData';

export default function Resources() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [reportType, setReportType] = useState('Tech DD Sample Report');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownloadTrigger = (type) => {
    setReportType(type);
    setDownloadModalOpen(true);
    setIsSuccess(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setCompany('');
    }, 1200);
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Resources Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Thư viện chia sẻ</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Tài Nguyên & Tri Thức
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Tài liệu nghiên cứu chuyên sâu, biểu mẫu báo cáo Tech DD thực tế và các bài viết phân tích nghiệp vụ dành cho CTO, CIO, Nhà đầu tư và Hội đồng quản trị.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left: Blog Lists */}
        <div className="space-y-8">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
            <BookOpen className="h-5 w-5 text-brand-blue" />
            <h2 className="font-display text-xl font-extrabold text-brand-deep">
              Blog Kỹ thuật & Insights Vận hành
            </h2>
          </div>

          <div className="grid gap-6">
            {resourceBlogs.map((blog) => (
              <article key={blog.id} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue/20 hover:shadow-md transition duration-300">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span className="bg-brand-blue/5 text-brand-blue px-2.5 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="mt-3.5 font-display text-lg font-extrabold text-slate-800 leading-snug group-hover:text-brand-blue transition">
                  {blog.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 font-medium">
                  {blog.excerpt}
                </p>
                <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:translate-x-0.5 transition-transform cursor-pointer">
                    Đọc toàn bài
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Sidebar: Downloads & Webinars */}
        <div className="space-y-8">
          {/* Lead Magnet — Tech DD Sample Report */}
          <div className="rounded-3xl bg-brand-slate p-6 text-white border border-white/5 shadow-md flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="rounded-full bg-brand-cyan/15 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-cyan">
                Lead Magnet — Phễu Đăng Ký
              </span>
              
              <h3 className="mt-4 font-display font-extrabold text-lg leading-snug">
                Bản báo cáo Tech DD Mẫu trị giá 15k - 35k USD
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Tải về bản báo cáo thẩm định hạ tầng IT/OT thực tế được thiết kế chuẩn quốc tế phục vụ các thương vụ M&A hoặc đánh giá trước gọi vốn lớn.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => handleDownloadTrigger('Báo cáo Tech DD Mẫu')}
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark text-xs"
              >
                <Download className="h-4 w-4" />
                Tải báo cáo mẫu (Free Sample)
              </button>
            </div>
          </div>

          {/* Gated Ebook 2 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between min-h-[200px]">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/5 text-brand-blue">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-display font-bold text-sm text-brand-deep">
                Ebook: Cẩm nang tối ưu hóa WMS Kho Bán Lẻ
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Các phương pháp thiết kế picking path và định cấu hình API đồng bộ vận chuyển.
              </p>
            </div>
            <button
              onClick={() => handleDownloadTrigger('Ebook WMS Bán Lẻ')}
              className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue-dark text-left"
            >
              Đăng ký tải Ebook
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Webinars & Events */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-brand-deep border-b border-slate-100 pb-3">
              <Video className="h-4.5 w-4.5 text-brand-blue" />
              Hội thảo & Webinars sắp tới
            </h3>
            
            <div className="mt-4 space-y-4 text-xs font-medium">
              {[
                { title: 'Webinar: Đồng bộ 4 Pillar liên thông vận hành doanh nghiệp', date: '25-06-2026', time: '14:00 - 15:30' },
                { title: 'Forum: Chuyển đổi số dệt may và phụ liệu sản xuất', date: '10-07-2026', time: '09:00 - 11:30' }
              ].map((ev, i) => (
                <div key={i} className="rounded-xl border border-slate-50 bg-slate-50/50 p-3.5 hover:bg-slate-50 transition duration-200">
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {ev.date} | {ev.time}
                  </span>
                  <h4 className="mt-1.5 font-bold text-slate-800 leading-snug">
                    {ev.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Gated Modal Dialog */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-deep/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl animate-slide-up relative">
            <button
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>

            {isSuccess ? (
              <div className="text-center py-6 flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-extrabold text-brand-deep">Yêu cầu được chấp nhận!</h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  Đường dẫn tải tài liệu **{reportType}** đã được gửi tự động tới email của bạn. Vui lòng kiểm tra hòm thư chính và thư rác.
                </p>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="mt-6 inline-flex h-9 items-center justify-center rounded-xl bg-brand-blue px-5 text-xs font-bold text-white transition hover:bg-brand-blue-dark"
                >
                  Hoàn tất
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display text-base font-extrabold text-brand-deep">
                    Đăng ký tải {reportType}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Chúng tôi sẽ gửi đường dẫn tải file trực tiếp qua hòm thư điện tử.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold text-slate-700">Email doanh nghiệp *</label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="h-10 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-[11px] font-bold text-slate-700">Tên doanh nghiệp *</label>
                  <input
                    required
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Công ty TNHH MADX"
                    className="h-10 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-xs"
                >
                  {isSubmitting ? 'Đang kết nối cổng dữ liệu...' : 'Nhận link tải qua Email'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
