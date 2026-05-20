"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import { Link } from "@/i18n/navigation";

type Testimonial = {
  initials: string;
  color: string;
  name: string;
  role: string;
  stars: number;
  category: string;
  text: string;
  kpi: string;
};

// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────

function TestimonialCard({ t: testimonial }: { t: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 gap-5">
      {/* Top row */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: testimonial.color }}
        >
          {testimonial.initials}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500 truncate">{testimonial.role}</div>
        </div>
      </div>

      {/* Stars + badge */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-0.5">
          {[...Array(testimonial.stars)].map((_, i) => (
            <svg key={i} className="w-4 h-4" style={{ color: "#FF6B35" }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "#FF6B3515", color: "#FF6B35" }}
        >
          {testimonial.category}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">"{testimonial.text}"</p>

      {/* KPI */}
      <div
        className="rounded-xl px-4 py-3 text-sm font-bold text-center"
        style={{ backgroundColor: "#FF6B3510", color: "#FF6B35" }}
      >
        🏆 {testimonial.kpi}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TemoignagesPage() {
  const t = useTranslations("temoignages");
  const [activeFilter, setActiveFilter] = useState<string>("");

  const categories = t.raw("categories") as string[];
  const testimonials = t.raw("testimonials") as Testimonial[];
  const heroStats = t.raw("hero.stats") as Array<{ value: string; label: string }>;
  const statsItems = t.raw("stats_section.items") as Array<{ value: string; label: string }>;

  // Initialize active filter to first category (i.e., "All" / "Tous")
  const effectiveFilter = activeFilter || categories[0];

  const filtered =
    effectiveFilter === categories[0]
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.category === effectiveFilter);

  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FFB800 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
            {t("hero.title1")}<br />{t("hero.title2")}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-14">
            {t("hero.subtitle")}
          </p>
          {/* Chiffres clés */}
          <div className="flex items-stretch justify-center max-w-2xl mx-auto gap-0 border-t border-white/25 pt-10">
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 text-center px-6 ${i < 2 ? "border-r border-white/25" : ""}`}
              >
                <div className="text-4xl md:text-5xl font-black text-white">{s.value}</div>
                <div className="text-sm text-white/75 mt-1.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="py-10 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => {
            const isActive = cat === effectiveFilter;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
                style={
                  isActive
                    ? { backgroundColor: "#FF6B35", borderColor: "#FF6B35", color: "#fff" }
                    : { backgroundColor: "transparent", borderColor: "#FF6B35", color: "#FF6B35" }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">{t("no_results")}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((testimonial) => (
                <TestimonialCard key={testimonial.name} t={testimonial} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RÉSULTATS CHIFFRÉS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-14">
            {t("stats_section.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsItems.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center hover:bg-white/10 hover:border-[#FF6B35]/40 transition-all duration-300"
              >
                <div className="text-4xl font-black mb-3" style={{ color: "#FF6B35" }}>
                  {s.value}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FFB800 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {t("cta_section.title")}
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            {t("cta_section.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formation"
              className="px-8 py-4 rounded-xl bg-white font-bold text-base transition-all duration-200 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              style={{ color: "#FF6B35" }}
            >
              {t("cta_section.cta_formation")}
            </Link>
            <a
              href="https://calendly.com/amazonlegacy-forma/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border-2 border-white font-bold text-base text-white transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
            >
              {t("cta_section.cta_consultation")}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-5xl font-bold tracking-tight font-stencil" style={{ lineHeight: 1 }}>
            <span className="text-white">Scal</span>
            <span style={{ color: "#FF6B35", fontStyle: "italic" }}>lab</span>
          </Link>
          <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
