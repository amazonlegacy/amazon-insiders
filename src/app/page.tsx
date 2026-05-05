"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
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
