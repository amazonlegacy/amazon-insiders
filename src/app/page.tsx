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

          {/* ── Isometric 3D Box — top-left ── */}
          <svg width="68" height="68" viewBox="0 0 48 48" fill="none" stroke="#FF6B35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "9%", left: "4%", opacity: 0.12, transform: "rotate(-10deg)" }}>
            <path d="M24 4L44 14L24 24L4 14Z" fill="#FF6B35" fillOpacity="0.10"/>
            <path d="M4 14L24 24L24 44L4 34Z" fill="#FF6B35" fillOpacity="0.06"/>
            <path d="M24 24L44 14L44 34L24 44Z" fill="#FF6B35" fillOpacity="0.08"/>
            <line x1="24" y1="4" x2="24" y2="24" strokeOpacity="0.5"/>
            <line x1="4" y1="14" x2="44" y2="14" strokeOpacity="0.3"/>
            <line x1="14" y1="9" x2="14" y2="29" strokeOpacity="0.25" strokeWidth="0.8"/>
            <line x1="34" y1="9" x2="34" y2="29" strokeOpacity="0.25" strokeWidth="0.8"/>
          </svg>

          {/* ── Isometric 3D Box small — bottom-left ── */}
          <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#FF6B35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "68%", left: "1%", opacity: 0.07, transform: "rotate(8deg)" }}>
            <path d="M24 4L44 14L24 24L4 14Z" fill="#FF6B35" fillOpacity="0.10"/>
            <path d="M4 14L24 24L24 44L4 34Z" fill="#FF6B35" fillOpacity="0.06"/>
            <path d="M24 24L44 14L44 34L24 44Z" fill="#FF6B35" fillOpacity="0.08"/>
            <line x1="24" y1="4" x2="24" y2="24" strokeOpacity="0.5"/>
          </svg>

          {/* ── Dollar coin badge — bottom-left ── */}
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="absolute" style={{ bottom: "12%", left: "7%", opacity: 0.12, transform: "rotate(-9deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <circle cx="30" cy="30" r="22" stroke="#FF6B35" strokeWidth="0.7" strokeDasharray="3 3"/>
            <line x1="30" y1="12" x2="30" y2="48" stroke="#FF6B35" strokeWidth="1.4"/>
            <path d="M37 19H25.5a5.5 5.5 0 0 0 0 11H35a5.5 5.5 0 0 1 0 11H22" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Dollar coin small — center-left ── */}
          <svg width="36" height="36" viewBox="0 0 60 60" fill="none" className="absolute" style={{ top: "34%", left: "8%", opacity: 0.07, transform: "rotate(13deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <line x1="30" y1="12" x2="30" y2="48" stroke="#FF6B35" strokeWidth="1.4"/>
            <path d="M37 19H25.5a5.5 5.5 0 0 0 0 11H35a5.5 5.5 0 0 1 0 11H22" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Pound coin badge — mid-right ── */}
          <svg width="56" height="56" viewBox="0 0 60 60" fill="none" className="absolute" style={{ top: "50%", right: "8%", opacity: 0.11, transform: "rotate(-7deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <circle cx="30" cy="30" r="22" stroke="#FF6B35" strokeWidth="0.7" strokeDasharray="3 3"/>
            <path d="M36 42H22M22 42v-2a8 8 0 0 1 8-8v0a6 6 0 0 0 6-6v-2a6 6 0 0 0-10-4.47" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Pound coin small — bottom center-right ── */}
          <svg width="34" height="34" viewBox="0 0 60 60" fill="none" className="absolute" style={{ bottom: "22%", right: "21%", opacity: 0.07, transform: "rotate(9deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <path d="M36 42H22M22 42v-2a8 8 0 0 1 8-8v0a6 6 0 0 0 6-6v-2a6 6 0 0 0-10-4.47" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Euro coin badge — top-right ── */}
          <svg width="54" height="54" viewBox="0 0 60 60" fill="none" className="absolute" style={{ top: "12%", right: "6%", opacity: 0.10, transform: "rotate(-13deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <circle cx="30" cy="30" r="22" stroke="#FF6B35" strokeWidth="0.7" strokeDasharray="3 3"/>
            <path d="M42 20a14 14 0 1 0 0 20M16 27h16M16 33h16" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Euro coin small — top far-left ── */}
          <svg width="34" height="34" viewBox="0 0 60 60" fill="none" className="absolute" style={{ top: "42%", left: "19%", opacity: 0.06, transform: "rotate(-8deg)" }}>
            <circle cx="30" cy="30" r="28" stroke="#FF6B35" strokeWidth="1.8"/>
            <path d="M42 20a14 14 0 1 0 0 20M16 27h16M16 33h16" stroke="#FF6B35" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>

          {/* ── Area line chart — mid-left ── */}
          <svg width="70" height="52" viewBox="0 0 70 52" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "50%", left: "1%", opacity: 0.10, transform: "rotate(3deg)" }}>
            <path d="M5 42 C12 42 14 32 20 28 C26 24 28 34 34 26 C40 18 44 22 50 12 C56 4 62 8 65 6" fill="none"/>
            <path d="M5 42 C12 42 14 32 20 28 C26 24 28 34 34 26 C40 18 44 22 50 12 C56 4 62 8 65 6 L65 48 L5 48 Z" fill="#FF6B35" fillOpacity="0.07" stroke="none"/>
            <line x1="3" y1="48" x2="67" y2="48" strokeWidth="1.2"/>
            <circle cx="65" cy="6" r="3" fill="#FF6B35" fillOpacity="0.35" stroke="#FF6B35" strokeWidth="1.3"/>
            <circle cx="34" cy="26" r="2.2" fill="#FF6B35" fillOpacity="0.25" stroke="#FF6B35" strokeWidth="1"/>
            <circle cx="20" cy="28" r="2.2" fill="#FF6B35" fillOpacity="0.25" stroke="#FF6B35" strokeWidth="1"/>
          </svg>

          {/* ── Rounded bar chart — bottom-left ── */}
          <svg width="54" height="54" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "28%", left: "1%", opacity: 0.09, transform: "rotate(4deg)" }}>
            <rect x="2" y="14" width="5" height="14" rx="1.5" fill="#FF6B35" fillOpacity="0.12"/>
            <rect x="9" y="8" width="5" height="20" rx="1.5" fill="#FF6B35" fillOpacity="0.12"/>
            <rect x="16" y="11" width="5" height="17" rx="1.5" fill="#FF6B35" fillOpacity="0.12"/>
            <rect x="23" y="4" width="5" height="24" rx="1.5" fill="#FF6B35" fillOpacity="0.12"/>
            <line x1="0" y1="29" x2="32" y2="29" strokeWidth="1.2"/>
          </svg>

          {/* ── Shopping cart detailed — top-right area ── */}
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "5%", right: "17%", opacity: 0.10, transform: "rotate(7deg)" }}>
            <path d="M1 2h4l3.5 16h16l3-10H8" fill="none"/>
            <rect x="10" y="20" width="12" height="6" rx="1" fill="#FF6B35" fillOpacity="0.08"/>
            <circle cx="12" cy="28.5" r="2" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1.2"/>
            <circle cx="22" cy="28.5" r="2" fill="#FF6B35" fillOpacity="0.2" stroke="#FF6B35" strokeWidth="1.2"/>
            <line x1="13" y1="12" x2="13" y2="18" strokeOpacity="0.4" strokeWidth="0.8"/>
            <line x1="19" y1="12" x2="19" y2="18" strokeOpacity="0.4" strokeWidth="0.8"/>
          </svg>

          {/* ── Target / bullseye — top-center ── */}
          <svg width="50" height="50" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "7%", left: "38%", opacity: 0.08, transform: "rotate(-4deg)" }}>
            <circle cx="16" cy="16" r="14"/>
            <circle cx="16" cy="16" r="9" fill="#FF6B35" fillOpacity="0.04"/>
            <circle cx="16" cy="16" r="5" fill="#FF6B35" fillOpacity="0.07"/>
            <circle cx="16" cy="16" r="2" fill="#FF6B35" fillOpacity="0.20"/>
            <line x1="30" y1="16" x2="23" y2="16" strokeWidth="1.6"/>
            <line x1="2" y1="16" x2="9" y2="16" strokeWidth="1.6"/>
            <line x1="16" y1="2" x2="16" y2="9" strokeWidth="1.6"/>
          </svg>

          {/* ── Trending arrow with dots — right side ── */}
          <svg width="62" height="62" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "35%", right: "3%", opacity: 0.10, transform: "rotate(-7deg)" }}>
            <polyline points="2 24 10 16 16 20 24 10 30 6"/>
            <polyline points="24 6 30 6 30 12"/>
            <circle cx="10" cy="16" r="2" fill="#FF6B35" fillOpacity="0.30" stroke="#FF6B35" strokeWidth="1"/>
            <circle cx="16" cy="20" r="2" fill="#FF6B35" fillOpacity="0.30" stroke="#FF6B35" strokeWidth="1"/>
            <circle cx="24" cy="10" r="2" fill="#FF6B35" fillOpacity="0.30" stroke="#FF6B35" strokeWidth="1"/>
            <circle cx="30" cy="6" r="2.5" fill="#FF6B35" fillOpacity="0.40" stroke="#FF6B35" strokeWidth="1.2"/>
          </svg>

          {/* ── Price tag — top center-right ── */}
          <svg width="46" height="46" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "18%", right: "26%", opacity: 0.08, transform: "rotate(-16deg)" }}>
            <path d="M16 2H2v14l12.59 12.59a2 2 0 002.82 0l9.18-9.18a2 2 0 000-2.82Z" fill="#FF6B35" fillOpacity="0.07"/>
            <circle cx="9" cy="9" r="2.5" fill="#FF6B35" fillOpacity="0.25" stroke="#FF6B35" strokeWidth="1.2"/>
            <line x1="16" y1="10" x2="24" y2="18" strokeOpacity="0.35" strokeWidth="0.9"/>
            <line x1="12" y1="14" x2="20" y2="22" strokeOpacity="0.35" strokeWidth="0.9"/>
          </svg>

          {/* ── Megaphone with waves — bottom-right ── */}
          <svg width="58" height="58" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "8%", right: "5%", opacity: 0.10, transform: "rotate(6deg)" }}>
            <polygon points="14 8 7 12 3 12 3 20 7 20 14 24" fill="#FF6B35" fillOpacity="0.08"/>
            <path d="M14 8L28 3v26L14 24"/>
            <path d="M25 10a8 8 0 010 12" strokeWidth="1.5"/>
            <path d="M22 13a4 4 0 010 6" strokeWidth="1.4"/>
            <line x1="7" y1="20" x2="5" y2="28" strokeOpacity="0.5"/>
          </svg>

          {/* ── Search with crosshair — center-left ── */}
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "26%", left: "12%", opacity: 0.08, transform: "rotate(-5deg)" }}>
            <circle cx="14" cy="14" r="11" fill="#FF6B35" fillOpacity="0.05"/>
            <line x1="22.8" y1="22.8" x2="29" y2="29" strokeWidth="2.2"/>
            <line x1="9" y1="14" x2="19" y2="14" strokeOpacity="0.6"/>
            <line x1="14" y1="9" x2="14" y2="19" strokeOpacity="0.6"/>
            <circle cx="14" cy="14" r="3.5" fill="#FF6B35" fillOpacity="0.12"/>
          </svg>

          {/* ── Truck detailed — bottom-center ── */}
          <svg width="62" height="62" viewBox="0 0 48 36" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "13%", left: "37%", opacity: 0.08, transform: "rotate(-2deg)" }}>
            <rect x="1" y="3" width="28" height="22" rx="2" fill="#FF6B35" fillOpacity="0.05"/>
            <path d="M29 9h9l8 10v7H29V9Z" fill="#FF6B35" fillOpacity="0.07"/>
            <line x1="29" y1="16" x2="46" y2="16" strokeOpacity="0.4"/>
            <circle cx="9" cy="30" r="4.5" fill="#FF6B35" fillOpacity="0.10" stroke="#FF6B35" strokeWidth="1.3"/>
            <circle cx="9" cy="30" r="1.5" fill="#FF6B35" fillOpacity="0.30"/>
            <circle cx="36" cy="30" r="4.5" fill="#FF6B35" fillOpacity="0.10" stroke="#FF6B35" strokeWidth="1.3"/>
            <circle cx="36" cy="30" r="1.5" fill="#FF6B35" fillOpacity="0.30"/>
            <line x1="14" y1="30" x2="31" y2="30"/>
            <line x1="8" y1="12" x2="22" y2="12" strokeOpacity="0.3" strokeWidth="0.8"/>
          </svg>

          {/* ── Pie chart with segment — top-right mid ── */}
          <svg width="44" height="44" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ top: "28%", right: "14%", opacity: 0.08, transform: "rotate(6deg)" }}>
            <circle cx="16" cy="16" r="13"/>
            <path d="M16 3 A13 13 0 0 1 29 16 L16 16 Z" fill="#FF6B35" fillOpacity="0.15"/>
            <path d="M16 3 A13 13 0 0 1 29 16" strokeWidth="1.6"/>
            <line x1="16" y1="3" x2="16" y2="16" strokeWidth="1.2"/>
            <line x1="29" y1="16" x2="16" y2="16" strokeWidth="1.2"/>
          </svg>

          {/* ── Pie chart small — bottom far-right ── */}
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="#FF6B35" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="absolute" style={{ bottom: "30%", right: "2%", opacity: 0.07, transform: "rotate(-11deg)" }}>
            <circle cx="16" cy="16" r="13"/>
            <path d="M16 3 A13 13 0 0 1 29 16 L16 16 Z" fill="#FF6B35" fillOpacity="0.15"/>
            <line x1="16" y1="3" x2="16" y2="16" strokeWidth="1.2"/>
            <line x1="29" y1="16" x2="16" y2="16" strokeWidth="1.2"/>
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
