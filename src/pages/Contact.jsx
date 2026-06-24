import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { products, services } from '../data/siteData';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-select based on router state redirect
  useEffect(() => {
    if (location.state?.interest) {
      setFormData(prev => ({ ...prev, interest: location.state.interest }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Get in touch</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Liên hệ với Chuyên gia MADX
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            Khảo sát hiện trạng miễn phí và tư vấn lộ trình kiến trúc số tối ưu nhất cho bài toán kinh doanh của bạn.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left info column */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-brand-deep">
                Thông tin kết nối
              </h2>
              <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                Đội ngũ của chúng tôi thường phản hồi các yêu cầu khảo sát hoặc thắc mắc kỹ thuật trong vòng 24 giờ làm việc.
              </p>
            </div>

            {/* Address, Phone, Mail lists */}
            <div className="grid gap-5">
              {/* Address */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-brand-deep">Văn phòng làm việc</h3>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500 font-medium">
                    Tầng 7 - Trung Tâm Thương Mại Giga Mall, 240-242 Phạm Văn Đồng, Phường Hiệp Bình Chánh, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh.
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-brand-deep">Hòm thư điện tử</h3>
                  <p className="mt-1.5 text-xs text-slate-500 font-semibold">
                    <a href="mailto:cs@madx.com.vn" className="hover:text-brand-blue transition">cs@madx.com.vn</a>
                  </p>
                </div>
              </div>

              {/* Hotlines */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-brand-deep">Đường dây nóng (Hotlines)</h3>
                  <div className="mt-1.5 grid gap-1 text-xs text-slate-500 font-semibold sm:grid-cols-2">
                    <a href="tel:0909411885" className="hover:text-brand-blue transition">0909 411 885</a>
                    <a href="tel:0911401955" className="hover:text-brand-blue transition">0911 401 955</a>
                    <a href="tel:0979045766" className="hover:text-brand-blue transition">0979 045 766</a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue/5">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-brand-deep">Thời gian làm việc</h3>
                  <p className="mt-1.5 text-xs text-slate-500 font-medium">
                    Thứ 2 - Thứ 6: 08:30 - 17:30 <br />
                    Thứ 7: 08:30 - 12:00 (Nghỉ Chủ Nhật)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center animate-fade-in flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-brand-deep">Gửi thông tin thành công!</h3>
                <p className="mt-3.5 max-w-sm text-sm text-slate-500 leading-relaxed">
                  Cảm ơn bạn đã quan tâm đến giải pháp của MADX. Chuyên gia tư vấn của chúng tôi sẽ xem xét yêu cầu và liên hệ lại với bạn trong thời gian sớm nhất.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 px-5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-lg font-extrabold text-brand-deep">
                    Gửi yêu cầu khảo sát & Tư vấn
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Vui lòng điền đầy đủ các thông tin bên dưới.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700">Họ và tên *</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nguyễn Văn A"
                      className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700">Số điện thoại *</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0909xxxxxx"
                      className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Corporate Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700">Email doanh nghiệp *</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-bold text-slate-700">Tên doanh nghiệp *</label>
                    <input
                      required
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Công ty TNHH MADX"
                      className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5"
                    />
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-xs font-bold text-slate-700">Nhu cầu tư vấn *</label>
                  <select
                    required
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 text-slate-700"
                  >
                    <option value="">-- Vui lòng chọn nhu cầu --</option>
                    <optgroup label="Sản phẩm & Nền tảng">
                      {products.map(p => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Dịch vụ Chuyên sâu">
                      {services.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <option value="Yêu cầu khác / Tư vấn chung">Yêu cầu khác / Tư vấn chung</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700">Chi tiết yêu cầu / Khó khăn doanh nghiệp đang gặp phải</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Vui lòng chia sẻ các thông tin như quy mô nhân sự, phần mềm đang sử dụng, hoặc các nút thắt vận hành chính..."
                    className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-xs outline-none transition focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue font-bold text-white transition hover:bg-brand-blue-dark disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-blue/15 hover:shadow-xl hover:shadow-brand-blue/25"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-1.5">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Đang kết nối chuyên gia...
                    </span>
                  ) : (
                    <>
                      Gửi yêu cầu khảo sát
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
