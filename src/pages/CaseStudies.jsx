import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, ChevronRight, HelpCircle } from 'lucide-react';
import { caseStudies } from '../data/siteData';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tất cả dự án' },
    { id: 'retail', label: 'Bán lẻ & Phân phối' },
    { id: 'industrial', label: 'Sản xuất & Kho vận' },
    { id: 'workforce', label: 'Nhân sự & Lao động' },
    { id: 'education', label: 'Giáo dục & Đào tạo' }
  ];

  // Helper to check if a case belongs to a category
  const filteredCases = caseStudies.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'retail') {
      return item.id === 'duoc-vuong' || item.id === 'nam-phong';
    }
    if (activeFilter === 'industrial') {
      return item.id === 'masi' || item.id === 'lien-chau' || item.id === 'ka-logistics';
    }
    if (activeFilter === 'workforce') {
      return item.id === 'care-solutions' || item.id === 'green-speed';
    }
    if (activeFilter === 'education') {
      return item.id === 'quang-ich-edu' || item.id === 'kyna-for-kids';
    }
    return true;
  });

  return (
    <div className="animate-fade-in pb-20">
      {/* Case Studies Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Case Studies</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Câu chuyện Khách hàng Thành công
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Khám phá 9 dự án chuyển đổi số thực tế đã go-live thành công, mang lại hiệu quả trực tiếp cho hoạt động kinh doanh, điều hành và dòng tiền của doanh nghiệp.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="mx-auto mt-12 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          <span className="mr-3 hidden items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 md:inline-flex">
            <Filter className="h-4 w-4" />
            Lọc dự án:
          </span>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition duration-200 ${
                activeFilter === f.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="mx-auto mt-10 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6.5 shadow-sm transition-all duration-300 hover:translate-y-[-4px] hover:border-brand-blue/30 hover:shadow-lg"
            >
              <div>
                <span className="rounded-full bg-brand-blue/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                  {item.sector}
                </span>
                
                <h3 className="mt-4 font-display text-lg font-extrabold text-brand-deep group-hover:text-brand-blue transition leading-snug">
                  {item.name}
                </h3>
                <p className="mt-2.5 text-xs text-slate-600 line-clamp-3">
                  <span className="font-semibold text-slate-700">Thách thức:</span> {item.challenge[0]}
                </p>

                {/* Highlights */}
                <div className="mt-5 grid gap-2 grid-cols-2">
                  {item.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 bg-slate-50/50 p-2.5 text-center">
                      <span className="block font-display text-base font-extrabold text-brand-blue">{h.value}</span>
                      <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-tight mt-0.5">{h.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-medium italic">
                  Chuyển đổi số thành công
                </span>
                <Link
                  to={`/case-studies/${item.id}`}
                  className="inline-flex h-9 items-center justify-center gap-1 rounded-xl bg-slate-900 px-4 text-xs font-bold text-white transition group-hover:bg-brand-blue"
                >
                  Xem chi tiết
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
