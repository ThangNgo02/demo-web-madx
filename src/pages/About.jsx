import React from 'react';
import { Calendar, Users, Target, Award, Globe, ArrowRight } from 'lucide-react';
import { aboutContent, partnerLogos } from '../data/siteData';

export default function About() {
  return (
    <div className="animate-fade-in pb-20">
      {/* About Hero */}
      <section className="relative overflow-hidden bg-brand-deep py-20 text-white text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,102,226,0.15),transparent_60%),linear-gradient(180deg,#07132c_0%,#0c214a_100%)]" />
        <div className="mx-auto max-w-3xl px-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">Về chúng tôi</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            Liên Minh Thực Chiến
          </h1>
          <p className="mt-5 text-base text-slate-300 leading-7">
            MADX quy tụ những chuyên gia công nghệ, kiến trúc sư giải pháp hàng đầu, mang trong mình triết lý đồng hành thực tế và tự chủ công nghệ cốt lõi.
          </p>
        </div>
      </section>

      {/* Story & Vision */}
      <section className="mx-auto mt-16 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/5 mb-5">
              <Target className="h-5 w-5 text-brand-blue" />
            </span>
            <h2 className="font-display text-2xl font-extrabold text-brand-deep">
              {aboutContent.vision.title}
            </h2>
            <p className="mt-5 text-sm leading-7 text-slate-600 font-medium">
              {aboutContent.vision.text}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Chúng tôi tin rằng chuyển đổi số thành công không đến từ những xấp tài liệu báo cáo lý thuyết dài hàng trăm trang. Thành công thực sự đến từ việc tối ưu từng giây picking hàng trong kho, tăng từng tỷ lệ chuyển đổi đơn hàng bán lẻ và bảo mật 100% dòng tiền giao dịch.
            </p>
          </div>
          <div className="relative rounded-2xl bg-brand-deep p-6 text-white min-h-[280px] flex flex-col justify-between overflow-hidden border border-white/5">
            <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3),transparent_70%)]" />
            
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">Định vị chiến lược</span>
              <h3 className="mt-2 font-display text-lg font-bold">Tổng thầu Công nghệ Thực chiến</h3>
            </div>

            <div className="space-y-4 my-6 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                <span>Nghiệp vụ đi trước — Công nghệ theo sau</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                <span>Cam kết bàn giao toàn quyền sở hữu mã nguồn</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-cyan" />
                <span>Khảo sát, thiết kế Sandbox và deploy thực tế</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-400 font-semibold italic border-t border-white/5 pt-3">
              * Đồng hành cùng Nam Phong, Masi, Dược Vương, Elise.
            </div>
          </div>
        </div>
      </section>

      {/* Alliance Partners */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">Global Network</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            {aboutContent.partners.title}
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            {aboutContent.partners.text}
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
          {partnerLogos.map((logo, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 text-center hover:border-brand-blue/20 hover:shadow-sm transition duration-200 flex flex-col justify-center items-center min-h-[90px]">
              <span className="font-extrabold text-sm text-slate-500">{logo}</span>
              <span className="block text-[8px] text-brand-blue uppercase tracking-widest mt-1.5 font-bold">Certified Partner</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Culture */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="overflow-hidden rounded-3xl border border-slate-200/60 bg-white p-8 shadow-sm grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/5 mb-5">
              <Users className="h-5 w-5 text-brand-blue" />
            </span>
            <h2 className="font-display text-2xl font-extrabold text-brand-deep">
              {aboutContent.team.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {aboutContent.team.text}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: 'Tôn trọng Nghiệp vụ', desc: 'Lắng nghe nỗi đau thực tế của nhân sự trực tiếp vận hành trước khi viết code.' },
              { title: 'Tự chủ Lõi IP', desc: 'Không ngừng R&D các giải pháp độc quyền về AI, computer vision để nâng cao vị thế.' },
              { title: 'Chính trực & Minh bạch', desc: 'Nói không với tư vấn lý thuyết, cam kết SLA bảo trì hỗ trợ 24/7 thực tế.' }
            ].map((val, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded bg-brand-blue/5 text-brand-blue font-bold text-xs">
                  0{i + 1}
                </span>
                <h4 className="mt-4 font-bold text-slate-800 text-xs uppercase tracking-wide">{val.title}</h4>
                <p className="mt-2 text-xs text-slate-500 leading-normal font-medium">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="mx-auto mt-20 w-[min(1280px,calc(100%-32px))] px-4">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">News & updates</span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-brand-deep sm:text-3xl">
            Tin tức & Sự kiện nổi bật
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aboutContent.news.map((item, idx) => (
            <div key={idx} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-blue/20 hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {item.date}
                </span>
                <h3 className="mt-3.5 font-display font-extrabold text-slate-800 leading-snug group-hover:text-brand-blue transition">
                  {item.title}
                </h3>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
                <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:translate-x-0.5 transition-transform cursor-pointer">
                  Đọc thêm
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
