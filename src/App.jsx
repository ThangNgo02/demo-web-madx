import React from 'react';

const navGroups = [
  {
    label: 'Sản phẩm',
    items: ['Open-ERP Platform', 'POS & Face ID Engine', 'Embedded BI Portal', 'AI Suite'],
  },
  {
    label: 'Dịch vụ',
    items: [
      'Tech Due Diligence',
      'ERP/HRM Implementation',
      'Data & AI Implementation',
      'Digital Transformation Consulting',
    ],
  },
  {
    label: 'Case Study',
    items: ['Dược Vương', 'Nam Phong', 'Masi', 'Care Solutions'],
  },
];

const products = [
  {
    title: 'Open-ERP Platform',
    label: 'Enterprise Core',
    text: 'Nền tảng quản trị mở kế thừa sức mạnh ERP hàng đầu, được MADX đóng gói module cho bán lẻ, sản xuất, thương mại và dược phẩm.',
    points: ['Workflow linh hoạt', 'Open API', 'Module theo ngành'],
  },
  {
    title: 'POS & Face ID Engine',
    label: 'Retail AI',
    text: 'Kết hợp POS thông minh và nhận diện khuôn mặt để tăng tốc giao dịch, định danh khách hàng, chấm công và giảm gian lận.',
    points: ['Nhận diện < 0.5s', 'Tích hợp phần cứng', 'Vận hành đa điểm bán'],
  },
  {
    title: 'Embedded BI Portal',
    label: 'Data Experience',
    text: 'Dashboard BI nhúng trực tiếp vào ERP, HRM, CRM, giúp cấp quản trị ra quyết định theo dữ liệu thời gian thực.',
    points: ['Real-time KPI', 'Một nguồn dữ liệu', 'Dashboard theo vai trò'],
  },
  {
    title: 'AI Suite',
    label: 'Applied Intelligence',
    text: 'Bộ giải pháp AI cho doanh nghiệp: forecasting, co-pilot, computer vision và tự động hóa tác vụ tri thức nội bộ.',
    points: ['Forecasting', 'AI Co-pilot', 'Computer Vision'],
  },
];

const services = [
  {
    title: 'Tech Due Diligence',
    text: 'Đánh giá kiến trúc, mã nguồn, bảo mật, hạ tầng và năng lực đội ngũ IT trước M&A, gọi vốn hoặc nâng cấp hệ thống.',
  },
  {
    title: 'ERP/HRM Implementation',
    text: 'Chuẩn hóa quy trình, cấu hình hệ thống, migration dữ liệu, UAT, go-live và chuyển giao vận hành.',
  },
  {
    title: 'Data & AI Implementation',
    text: 'Thiết kế data warehouse, ETL, BI dashboard và mô hình AI phục vụ dự báo, tự động hóa và phân tích vận hành.',
  },
  {
    title: 'Digital Transformation Consulting',
    text: 'Đánh giá trưởng thành số, xác định quick wins, lập roadmap 1-3 năm và quản trị thay đổi trong tổ chức.',
  },
];

const caseStudies = [
  {
    name: 'Dược Vương',
    sector: 'Ecommerce / Pharma Distribution',
    result: 'Giảm 80% thời gian kiểm kê, dữ liệu tồn kho chính xác 99.9%',
  },
  {
    name: 'Nam Phong',
    sector: 'Retail Canteen Chain',
    result: 'Đồng bộ POS, tồn kho và doanh thu theo thời gian thực trên nhiều điểm bán',
  },
  {
    name: 'Masi',
    sector: 'Manufacturing ERP',
    result: 'Chuẩn hóa mua hàng, kho, sản xuất, bán hàng và kế toán trên một nền tảng',
  },
  {
    name: 'Care Solutions',
    sector: 'HRM / Workforce Operations',
    result: 'Tự động hóa chấm công, tính lương, dashboard nhân sự và dữ liệu tập trung',
  },
];

const clients = ['Tiến Phát', 'Kim Long', 'CareVN', 'Altara', 'Nam Phong', 'Masi', 'Dược Vương', 'Elise', 'Liên Châu'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-slate-950 antialiased">
      <header className="fixed left-1/2 top-4 z-50 w-[min(1180px,calc(100%-24px))] -translate-x-1/2 rounded-xl border border-white/70 bg-white/85 px-3 py-3 shadow-[0_18px_60px_rgba(8,43,82,0.14)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-5">
          <a href="#top" className="flex items-center gap-3" aria-label="MADX Home">
            <img src="/madx-logo.jpg" alt="MADX" className="h-10 w-24 rounded-lg object-cover object-left" />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
            {navGroups.map((group) => (
              <a
                key={group.label}
                href={`#${group.label === 'Sản phẩm' ? 'products' : group.label === 'Dịch vụ' ? 'services' : 'case'}`}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-madx-blue"
              >
                {group.label}
              </a>
            ))}
            <a className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-sky-50 hover:text-madx-blue" href="#contact">
              Liên hệ
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-madx-blue px-5 text-sm font-bold text-white shadow-lg shadow-sky-800/20 transition hover:bg-sky-700"
          >
            Đặt lịch tư vấn
          </a>
        </div>
      </header>

      <section id="top" className="relative isolate bg-madx-deep pt-28 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(35,183,229,0.34),transparent_34%),linear-gradient(135deg,#061f38_0%,#083b68_45%,#137dbb_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-14 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:pb-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Tổng thầu chuyển đổi số cho doanh nghiệp tăng trưởng
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Thiết kế hạ tầng số cho bán lẻ, sản xuất và phân phối.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-sky-50/82">
              MADX hợp nhất ERP, POS, kho vận, dữ liệu và AI thành một kiến trúc vận hành end-to-end, giúp doanh nghiệp rời khỏi Excel rời rạc và quản trị bằng dữ liệu thời gian thực.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-black text-madx-blue transition hover:bg-sky-50" href="#products">
                Khám phá nền tảng
              </a>
              <a className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10" href="#case">
                Xem case triển khai
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="rounded-xl bg-[#071527] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">MADX Operations Cloud</p>
                  <h2 className="mt-2 text-2xl font-black">Executive Cockpit</h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Live</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['50.000+', 'giao dịch'],
                  ['12.000+', 'đơn hàng'],
                  ['99.9%', 'uptime'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                    <strong className="block text-2xl font-black text-white">{value}</strong>
                    <span className="mt-1 block text-xs font-semibold text-slate-400">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-4 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  <span>Data Pipeline</span>
                  <span>ERP / POS / WMS / BI / AI</span>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[72, 118, 92, 150].map((height, index) => (
                    <div key={height} className="flex h-40 items-end rounded-lg bg-white/[0.04] p-2">
                      <div
                        className="w-full rounded-md bg-gradient-to-t from-madx-blue to-madx-cyan shadow-lg shadow-cyan-900/20"
                        style={{ height: `${height}px` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Open API', 'Sandbox UAT', 'AI Forecasting', 'FaceID Engine'].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-sky-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-wrap justify-center gap-2 border-t border-white/10 py-6">
          {clients.map((client) => (
            <span key={client} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-50/80">
              {client}
            </span>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto w-[min(1180px,calc(100%-32px))] py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-madx-blue">Products</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-madx-ink sm:text-5xl">Nền tảng công nghệ MADX sở hữu và triển khai sâu.</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            Sitemap từ brief được gom lại thành 4 cụm sản phẩm chính. Mỗi cụm có thể tách thành landing page riêng ở bước tiếp theo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {products.map((product) => (
            <article key={product.title} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-950/10">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-widest text-madx-blue">{product.label}</span>
              <h3 className="mt-5 text-2xl font-black text-madx-ink">{product.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{product.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.points.map((point) => (
                  <span key={point} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-madx-blue">Services</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-madx-ink sm:text-5xl">Không chỉ bán phần mềm. MADX chịu trách nhiệm cho kết quả vận hành.</h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-black text-madx-blue">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-5 text-xl font-black text-madx-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case" className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-3xl bg-madx-deep p-8 text-white shadow-2xl shadow-sky-950/20">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Featured Case</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">Dược Vương: số hóa chuỗi cung ứng dược phẩm.</h2>
          <p className="mt-5 leading-8 text-sky-50/75">
            MADX xây dựng hệ sinh thái tích hợp gồm B2B commerce, ERP, CRM, eInvoice, logistics partners và BI dashboard theo thời gian thực.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <strong className="text-3xl font-black">80%</strong>
              <span className="mt-2 block text-sm font-semibold text-sky-100/80">giảm thời gian kiểm kê</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <strong className="text-3xl font-black">99.9%</strong>
              <span className="mt-2 block text-sm font-semibold text-sky-100/80">độ chính xác tồn kho</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {caseStudies.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-black text-madx-ink">{item.name}</h3>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-madx-blue">{item.sector}</span>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#071527] py-20 text-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Sitemap direction</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">Kiến trúc website đề xuất từ brief.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {navGroups.map((group) => (
              <div key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <h3 className="text-lg font-black">{group.label}</h3>
                <ul className="mt-4 space-y-3 text-sm text-sky-50/75">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-8 py-24 lg:grid-cols-[1fr_.72fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-madx-blue">Contact</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-madx-ink sm:text-5xl">Sẵn sàng thiết kế lại hệ vận hành số?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Văn phòng: Tầng 7 - Trung Tâm Thương Mại Giga Mall, 240-242 Phạm Văn Đồng, Phường Hiệp Bình, TP Hồ Chí Minh.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-600">
            <span>Email: Cs@masi.vn</span>
            <span>Call Center: 0909 411 885 | 0911 401 955 | 0979 045 766</span>
          </div>
        </div>
        <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-sky-950/10">
          <div className="grid gap-4">
            <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none transition focus:border-madx-blue focus:ring-4 focus:ring-sky-100" placeholder="Họ và tên" type="text" />
            <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none transition focus:border-madx-blue focus:ring-4 focus:ring-sky-100" placeholder="Email doanh nghiệp" type="email" />
            <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none transition focus:border-madx-blue focus:ring-4 focus:ring-sky-100" placeholder="Số điện thoại" type="tel" />
            <button className="h-12 rounded-lg bg-madx-blue font-black text-white shadow-lg shadow-sky-800/20 transition hover:bg-sky-700" type="button">
              Liên hệ chuyên gia
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
