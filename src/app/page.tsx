"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">

        {/* ── Decorative background illustrations ── */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">

          {/* Package / FBA box — top-left */}
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "12%", left: "6%", opacity: 0.10, transform: "rotate(-12deg)" }}>
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><line x1="12" y1="22" x2="12" y2="12"/>
          </svg>

          {/* Shopping cart — top-right */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "8%", right: "8%", opacity: 0.09, transform: "rotate(10deg)" }}>
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>

          {/* Bar chart — mid-left */}
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "52%", left: "3%", opacity: 0.08, transform: "rotate(6deg)" }}>
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
          </svg>

          {/* Trending arrow up — right side */}
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "38%", right: "5%", opacity: 0.09, transform: "rotate(-8deg)" }}>
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
          </svg>

          {/* Star / review — bottom-left */}
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "14%", left: "9%", opacity: 0.10, transform: "rotate(15deg)" }}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>

          {/* Tag / price label — top center-right */}
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "18%", right: "22%", opacity: 0.07, transform: "rotate(-18deg)" }}>
            <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.41 0l7.3-7.3a1 1 0 0 0 0-1.41z"/><circle cx="7" cy="7" r="1.5"/>
          </svg>

          {/* Megaphone / ads — bottom-right */}
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "10%", right: "7%", opacity: 0.09, transform: "rotate(8deg)" }}>
            <path d="M3 11l19-9-9 19-2-8-8-2z"/>
          </svg>

          {/* Search / SEO — top center-left */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "28%", left: "14%", opacity: 0.07, transform: "rotate(-5deg)" }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>

          {/* Truck / logistics — bottom center */}
          <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "16%", left: "38%", opacity: 0.07, transform: "rotate(-3deg)" }}>
            <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>

          {/* Euro / revenue — mid-right */}
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "62%", right: "15%", opacity: 0.08, transform: "rotate(12deg)" }}>
            <path d="M4 10h12M4 14h12M19 6a7 7 0 1 0 0 12 7 7 0 0 0 0-12Z"/>
          </svg>

        </div>
        {/* ── end decorative illustrations ── */}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
            style={{ backgroundColor: "#FF6B3520", color: "#FF6B35" }}
          >
            Expert Amazon FBA & Seller Central
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            Développe ton business<br />
            <span style={{ color: "#FF6B35" }}>sur Amazon</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Accompagnement expert en FBA, gestion de compte, optimisation de listings et Amazon Ads.
            Des résultats concrets, pas des promesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Démarrer maintenant
            </a>
            <a
              href="#formation"
              className="px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all duration-200 hover:bg-orange-50 hover:-translate-y-0.5 active:scale-95"
              style={{ borderColor: "#FF6B35", color: "#FF6B35" }}
            >
              Voir la formation
            </a>
          </div>
        </div>
      </section>

      {/* RÉASSURANCE */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "120+", label: "Clients accompagnés" },
            { value: "3.4M€", label: "CA généré" },
            { value: "100%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: "#FF6B35" }}>
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-gray-600 mt-2 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black text-gray-900 mb-5">Nos services</h2>
            <p className="text-gray-500 text-xl max-w-xl mx-auto">Tout ce dont tu as besoin pour dominer Amazon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "📦",
                title: "Amazon FBA",
                desc: "Lancement, sourcing, logistique et stratégie complète pour vendre sur Amazon avec le modèle FBA.",
              },
              {
                icon: "🖥️",
                title: "Gestion de compte Seller",
                desc: "Pilotage complet du Seller Central : suivi des KPIs, gestion des litiges, santé du compte.",
              },
              {
                icon: "🔍",
                title: "Optimisation de listings",
                desc: "SEO Amazon, images haute conversion, titres accrocheurs et bullet points optimisés.",
              },
              {
                icon: "📊",
                title: "Amazon Ads / PPC",
                desc: "Campagnes Sponsored Products, Brands et Display pour maximiser ta visibilité et ton ROI.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: "#FF6B3515" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATION */}
      <section id="formation" className="py-24 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wide"
              style={{ backgroundColor: "#FF6B3525", color: "#FF6B35" }}
            >
              Programme complet
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Amazon Insiders — La Formation
            </h2>
            <p className="text-gray-400 text-lg">
              8 semaines pour lancer et scaler ton business Amazon
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Comprendre l'écosystème Amazon",
              "Trouver un produit gagnant",
              "Sourcing et négociation fournisseur",
              "Créer et optimiser ses listings",
              "Lancement produit",
              "Maîtriser Amazon Ads",
              "Analyser ses données et scaler",
              "Automatiser et construire une marque",
            ].map((module, i) => (
              <div
                key={module}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#FF6B35]/40 transition-all duration-200 cursor-default group"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 text-white"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  {i + 1}
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {module}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/formation#tarif"
              className="inline-flex items-center px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Accéder à la formation
            </a>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-500 text-lg">Des résultats concrets, mesurables</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                initials: "SL",
                name: "Sophie L.",
                text: "J'ai doublé mon CA en 3 mois grâce à l'accompagnement. L'équipe est disponible, réactive et vraiment experte.",
              },
              {
                initials: "KM",
                name: "Karim M.",
                text: "J'ai lancé mon premier produit en 6 semaines grâce à la formation. Tout est structuré, clair et actionnable.",
              },
              {
                initials: "TF",
                name: "Thomas F.",
                text: "Mes campagnes Ads sont passées de 42% à 18% d'ACoS. Un ROI impressionnant en quelques semaines seulement.",
              },
              {
                initials: "AL",
                name: "Amina L.",
                text: "Mes conversions ont augmenté de 68% après l'optimisation de mon listing. Le détail fait vraiment la différence.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" style={{ color: "#FF6B35" }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-base">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: "#FF6B35" }}
                  >
                    {t.initials}
                  </div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section id="contact" className="py-24 px-6" style={{ backgroundColor: "#FF6B35" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Prêt à passer au niveau supérieur ?
          </h2>
          <p className="text-orange-100 text-lg mb-10 leading-relaxed">
            Rejoins des dizaines d'entrepreneurs qui ont transformé leur business Amazon
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ton adresse email"
              className="flex-1 px-5 py-4 rounded-xl text-gray-900 placeholder-gray-500 text-base outline-none focus:ring-4 focus:ring-white/40 bg-white border-2 border-white"
            />
            <a
              href="https://calendly.com/amazonlegacy-forma/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl bg-white font-semibold text-base transition-all duration-200 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              style={{ color: "#FF6B35" }}
            >
              Consultation gratuite
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-white">Amazon</span>
            <span style={{ color: "#FF6B35" }}>Insiders</span>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Amazon Insiders. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
