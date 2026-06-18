import React from "react";
const pillars = [
  {
    title: 'POS-Fintech',
    text: 'Diem ban le thong minh, tich hop thanh toan va Loyalty da kenh.',
  },
  {
    title: 'Chuoi cung ung',
    text: 'Quan ly kho WMS, logistics va chuoi ban le lien mach tu nha may den tay khach hang.',
  },
  {
    title: 'Enterprise Core',
    text: 'Loi ERP mo rong, HRM, CRM giup quan tri toan dien nguon luc doanh nghiep.',
  },
  {
    title: 'Data & AI',
    text: 'Phan tich du lieu chuyen sau, AI Forecasting du bao nhu cau chinh xac.',
  },
];

const reasons = [
  {
    title: 'End to End thuc su',
    metric: '99.9%',
    metricLabel: 'Uptime he thong lien tuc',
    text: 'Thiet ke tron ven tu tu van, trien khai den van hanh, bao phu toan bo luong nghiep vu va giam phu thuoc he thong trung gian.',
  },
  {
    title: 'Thu nghiem an toan',
    metric: '95%',
    metricLabel: 'Giam loi khi Go-live',
    text: 'Moi tinh nang duoc cau hinh va chay thu tren moi truong Sandbox mo phong quy trinh thuc te truoc khi dua vao van hanh.',
  },
  {
    title: 'IP doc quyen',
    metric: '< 1s',
    metricLabel: 'Dong bo du lieu real-time',
    text: 'Cong nghe FaceID, AI Forecasting va cac mo hinh tich hop duoc MADX phat trien cho bai toan ban le, san xuat va phan phoi.',
  },
];

const partners = [
  'Salesforce',
  'SAP',
  'Oracle',
  'Odoo',
  'Magento',
  'Microsoft',
  'IBM',
  'Google Cloud',
  'AWS',
  'Adobe',
];

const customers = [
  'Tien Phat',
  'Kim Long',
  'CareVN',
  'Altara',
  'Nam Phong',
  'Masi',
  'Duoc Vuong',
  'Elise',
  'Lien Chau',
];

const posts = [
  {
    category: 'Ebook moi',
    title: 'Cam nang xay dung he thong ERP cho chuoi >50 cua hang',
    date: 'PDF 45 trang',
  },
  {
    category: 'Ban le',
    title: 'Tai sao POS truyen thong dang lam cham toc do mo rong chuoi?',
    date: '15/05/2026',
  },
  {
    category: 'AI & Data',
    title: 'Ung dung AI Forecasting de giam 30% hang ton kho ao',
    date: '10/05/2026',
  },
];

function App() {
  return (
    <main className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="MADX home">
          <span className="brand-mark">M</span>
          <span>MADX</span>
        </a>
        <nav className="nav" aria-label="Dieu huong chinh">
          <a href="#solutions">Giai phap</a>
          <a href="#why">Tai sao MADX</a>
          <a href="#case">Case Study</a>
          <a href="#resources">Tai nguyen</a>
        </nav>
        <a className="header-cta" href="#contact">
          Tu van
        </a>
      </header>

      <section id="top" className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Tong thau Chuyen doi so</p>
          <h1>Nen tang so hoa chuoi gia tri cho doanh nghiep ban le va san xuat</h1>
          <p className="hero-text">
            MADX hop nhat San xuat, Kho, Thuong mai dien tu va Ban le tren mot
            kien truc Open-ERP, giup doanh nghiep chuan hoa van hanh va tang toc
            mo rong.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              Dat lich tu van nganh
            </a>
            <a className="button ghost" href="#case">
              Xem Case Study
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Mo phong dashboard van hanh">
          <img
            src="https://violet-locust-380055.hostingersite.com/wp-content/uploads/2026/05/consulting-1.gif"
            alt="Tu van chuyen doi so MADX"
          />
          <div className="stat-panel">
            <span>Da xu ly hon</span>
            <strong>50.000+</strong>
            <span>giao dich</span>
          </div>
          <div className="dashboard-card">
            <div>
              <span>Open ERP</span>
              <strong>12.000+ don hang</strong>
            </div>
            <div className="bars">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Khach hang tieu bieu">
        {customers.map((name) => (
          <span key={name}>{name}</span>
        ))}
      </section>

      <section id="solutions" className="section split-heading">
        <div>
          <p className="eyebrow">4 Tru Cot Giai Phap</p>
          <h2>Chuan hoa quy trinh, toi uu van hanh va thuc day tang truong</h2>
        </div>
        <p>
          Tu diem ban, kho van, loi ERP den du lieu va AI, MADX xay dung mot he
          sinh thai co the mo rong theo toc do tang truong cua doanh nghiep.
        </p>
      </section>

      <section className="pillar-grid">
        {pillars.map((pillar, index) => (
          <article className="pillar-card" key={pillar.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
            <a href="#contact">Kham pha</a>
          </article>
        ))}
      </section>

      <section id="why" className="section why-section">
        <div className="section-heading">
          <p className="eyebrow">Tai sao MADX?</p>
          <h2>Dong hanh tu thiet ke he thong den van hanh thuc te</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <div>
                <strong>{reason.metric}</strong>
                <span>{reason.metricLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case" className="section case-section">
        <div className="case-media">
          <span>Spotlight</span>
          <strong>Duoc Vuong</strong>
          <div className="play-button" aria-hidden="true">
            Play
          </div>
        </div>
        <div className="case-copy">
          <p className="eyebrow">Case Study</p>
          <h2>Cach Duoc Vuong so hoa toan dien chuoi cung ung Y te</h2>
          <p>
            Ap dung kien truc Open-ERP cua MADX, Duoc Vuong dong bo hoa du lieu
            tu hang tram quay thuoc, tich hop POS va he thong quan ly kho trung
            tam theo chuan GPP.
          </p>
          <div className="case-stats">
            <div>
              <strong>80%</strong>
              <span>Giam thoi gian kiem ke</span>
            </div>
            <div>
              <strong>99.9%</strong>
              <span>Chinh xac ton kho real-time</span>
            </div>
          </div>
          <a className="button primary" href="#contact">
            Xem case day du
          </a>
        </div>
      </section>

      <section className="section partners">
        <p className="eyebrow">He sinh thai doi tac</p>
        <div>
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="section report-band">
        <div>
          <p className="eyebrow">Tech Due Diligence</p>
          <h2>Danh gia ha tang IT/OT cua doanh nghiep ban</h2>
          <p>
            Nhan ban mau Tech Due Diligence Report giup phat hien lo hong va co
            hoi toi uu chi phi cong nghe.
          </p>
        </div>
        <a className="button light" href="#contact">
          Tai Sample Report
        </a>
      </section>

      <section id="resources" className="section resources">
        <div className="split-heading">
          <div>
            <p className="eyebrow">Goc nhin & Tai nguyen</p>
            <h2>Cap nhat xu huong cong nghe ban le moi nhat</h2>
          </div>
          <a href="#contact">Xem tat ca</a>
        </div>
        <div className="resource-grid">
          {posts.map((post) => (
            <article className="resource-card" key={post.title}>
              <span>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <p className="eyebrow">San sang so hoa chuoi gia tri?</p>
          <h2>Doi ngu ky su va chuyen gia tu van cua MADX luon san sang.</h2>
          <p>
            Van phong: Tang 7 - Trung Tam Thuong Mai Giga Mall, 240-242 Pham Van
            Dong, Phuong Hiep Binh, TP Ho Chi Minh
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Ho va ten" aria-label="Ho va ten" />
          <input type="email" placeholder="Email doanh nghiep" aria-label="Email doanh nghiep" />
          <input type="tel" placeholder="So dien thoai" aria-label="So dien thoai" />
          <button type="button">Lien he chuyen gia</button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>MADX</strong>
          <p>Open-ERP, Omnichannel Retail, Du lieu & AI, Tech Due Diligence.</p>
        </div>
        <div>
          <span>Email: Cs@masi.vn</span>
          <span>Call Center: 0909 411 885 | 0911 401 955 | 0979 045 766</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
