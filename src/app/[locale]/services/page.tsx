"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import { Link } from "@/i18n/navigation";

export default function ServicesPage() {
  const t = useTranslations("services");

  const services = t.raw("items") as Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    points: string[];
    price: string;
    bg: string;
  }>;

  const whyUs = t.raw("why_us.items") as Array<{
    icon: string;
    title: string;
    desc: string;
  }>;

  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e8551f 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide bg-white/20 text-white">
            {t("hero.badge")}
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-orange-100 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className={`py-20 px-6 ${service.bg}`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Texte gauche */}
              <div className="flex-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: "#FF6B3515" }}
                >
                  {service.icon}
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{service.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">{service.description}</p>
                <div
                  className="inline-block px-5 py-2.5 rounded-xl text-sm font-bold mb-8"
                  style={{ backgroundColor: "#FF6B3512", color: "#FF6B35" }}
                >
                  💰 {service.price}
                </div>
                <div>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                    style={{ backgroundColor: "#FF6B35" }}
                  >
                    {t("contact_cta")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Carte droite — points inclus */}
              <div className="lg:w-80 w-full shrink-0">
                <div className="rounded-2xl border border-gray-100 bg-white shadow-md p-7">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">
                    {t("included")}
                  </h3>
                  <ul className="space-y-4">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: "#FF6B35" }}
                        >
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              {t("why_us.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group p-7 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center cursor-default"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-5"
                  style={{ backgroundColor: "#FF6B3515" }}
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6" style={{ backgroundColor: "#FF6B35" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            {t("cta_section.title")}
          </h2>
          <p className="text-orange-100 text-lg mb-10 leading-relaxed">
            {t("cta_section.subtitle")}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white font-bold text-base transition-all duration-200 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            style={{ color: "#FF6B35" }}
          >
            {t("cta_section.cta")}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-5xl font-bold tracking-tight font-stencil" style={{ lineHeight: 1 }}>
            <span className="text-white">SCAL</span>
            <span style={{ color: "#FF6B35" }}>lab</span>
          </Link>
          <p className="text-gray-500 text-sm">{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
