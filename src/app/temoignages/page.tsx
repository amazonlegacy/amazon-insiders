"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const categories = [
  "Tous",
  "Formation",
  "Amazon FBA",
  "Gestion de compte",
  "Optimisation listing",
  "Amazon Ads",
];

const testimonials = [
  {
    initials: "SL",
    color: "#6366f1",
    name: "Sophie Laurent",
    role: "Vendeuse FBA - Accessoires maison",
    stars: 5,
    category: "Formation",
    text: "J'étais complètement débutante quand j'ai rejoint la formation. En 8 semaines j'avais lancé mon premier produit. La méthode est claire, actionnable, sans blabla. Je recommande les yeux fermés.",
    kpi: "Premier produit lancé en 8 semaines",
  },
  {
    initials: "TF",
    color: "#0ea5e9",
    name: "Thomas Ferreira",
    role: "Vendeur FBA - Sport & Outdoor",
    stars: 5,
    category: "Amazon Ads",
    text: "Mon ACoS était à 42% et je perdais de l'argent sur chaque vente. Après 6 semaines de gestion par Scallab, il est tombé à 18%. Le ROI est exceptionnel.",
    kpi: "ACoS passé de 42% à 18%",
  },
  {
    initials: "AL",
    color: "#ec4899",
    name: "Amina Leblanc",
    role: "Marque privée - Beauté & Soin",
    stars: 5,
    category: "Optimisation listing",
    text: "Mon listing existait depuis 8 mois sans vraiment performer. Après l'optimisation complète par l'équipe, mes conversions ont bondi de 68% en moins d'un mois. Impressionnant.",
    kpi: "Conversions +68% en 1 mois",
  },
  {
    initials: "KM",
    color: "#10b981",
    name: "Karim Mansouri",
    role: "Débutant FBA - Cuisine & Maison",
    stars: 5,
    category: "Amazon FBA",
    text: "Je cherchais un accompagnement sérieux pour lancer mon activité FBA. L'équipe m'a guidé du sourcing jusqu'au lancement. Aujourd'hui je génère 8 000€ de CA mensuel après 4 mois.",
    kpi: "8 000€ CA/mois après 4 mois",
  },
  {
    initials: "JM",
    color: "#f59e0b",
    name: "Julie Moreau",
    role: "Vendeuse confirmée - Jouets & Jeux",
    stars: 5,
    category: "Gestion de compte",
    text: "Gérer mon Seller Central me prenait 2h par jour. Scallab s'occupe de tout. Je me concentre sur ma stratégie produit pendant qu'eux gèrent l'opérationnel. Un vrai soulagement.",
    kpi: "2h/jour récupérées",
  },
  {
    initials: "NP",
    color: "#8b5cf6",
    name: "Nicolas Petit",
    role: "Reconversion professionnelle - Animalerie",
    stars: 5,
    category: "Formation",
    text: "Après 15 ans en entreprise, je voulais créer mon propre business. La formation Scallab m'a donné toutes les clés. En 3 mois j'avais quitté mon emploi et vivais de mon activité Amazon.",
    kpi: "Reconversion réussie en 3 mois",
  },
];

const stats = [
  { value: "120+", label: "Clients accompagnés depuis 2021" },
  { value: "3.4M€", label: "de chiffre d'affaires généré pour nos clients" },
  { value: "100%", label: "de clients satisfaits ou très satisfaits" },
  { value: "-58%", label: "ACoS moyen réduit sur les comptes gérés" },
];

// ─── TESTIMONIAL CARD ─────────────────────────────────────────────────────────

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-7 gap-5">
      {/* Top row */}
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-gray-900 text-sm">{t.name}</div>
          <div className="text-xs text-gray-500 truncate">{t.role}</div>
        </div>
      </div>

      {/* Stars + badge */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex gap-0.5">
          {[...Array(t.stars)].map((_, i) => (
            <svg key={i} className="w-4 h-4" style={{ color: "#FF6B35" }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "#FF6B3515", color: "#FF6B35" }}
        >
          {t.category}
        </span>
      </div>

      {/* Text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>

      {/* KPI */}
      <div
        className="rounded-xl px-4 py-3 text-sm font-bold text-center"
        style={{ backgroundColor: "#FF6B3510", color: "#FF6B35" }}
      >
        🏆 {t.kpi}
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TemoignagesPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

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
            Ils ont transformé<br />leur business Amazon
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-14">
            120+ entrepreneurs accompagnés. Voici leurs résultats.
          </p>
          {/* Chiffres clés */}
          <div className="flex items-stretch justify-center max-w-2xl mx-auto gap-0 border-t border-white/25 pt-10">
            {[
              { value: "120+", label: "Clients accompagnés" },
              { value: "3.4M€", label: "CA généré" },
              { value: "100%", label: "Satisfaction" },
            ].map((s, i) => (
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
            const isActive = cat === activeFilter;
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
            <p className="text-center text-gray-400 py-20">Aucun témoignage pour cette catégorie.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RÉSULTATS CHIFFRÉS */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-white text-center mb-14">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
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
            Prêt à écrire ton histoire ?
          </h2>
          <p className="text-white/85 text-lg mb-10 leading-relaxed">
            Rejoins les entrepreneurs qui ont transformé leur business Amazon avec nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formation"
              className="px-8 py-4 rounded-xl bg-white font-bold text-base transition-all duration-200 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              style={{ color: "#FF6B35" }}
            >
              Voir la formation
            </Link>
            <a
              href="https://calendly.com/amazonlegacy-forma/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border-2 border-white font-bold text-base text-white transition-all duration-200 hover:bg-white/15 hover:-translate-y-0.5 active:scale-95"
            >
              Consultation gratuite
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
          <p className="text-gray-500 text-sm">© 2024 Scallab. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
