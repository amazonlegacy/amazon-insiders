"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

// ─── CHECKOUT HANDLER ─────────────────────────────────────────────────────────

async function redirectToCheckout() {
  const res = await fetch("/api/checkout", { method: "POST" });
  const data = await res.json();
  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Une erreur est survenue. Réessaie dans quelques instants.");
  }
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const modules = [
  {
    num: "Intro",
    title: "Bienvenue et tour d'horizon",
    duration: null,
    lessons: 3,
    description:
      "Ce que tu vas accomplir avec résultats concrets et timeline réaliste. Comment naviguer dans la formation. Les 3 erreurs que font 90% des débutants sur Amazon.",
    items: [
      "Ce que tu vas accomplir — résultats concrets et timeline réaliste",
      "Comment naviguer dans la formation",
      "Les 3 erreurs que font 90% des débutants sur Amazon",
    ],
  },
  {
    num: "01",
    title: "Comprendre l'écosystème Amazon",
    duration: "45 min",
    lessons: 4,
    description:
      "Avant de vendre, il faut comprendre comment Amazon pense. Ce module évite les faux pas dès le départ.",
    items: [
      "Comment fonctionne l'algorithme A9/A10",
      "FBA vs FBM vs SFP — choisir son modèle logistique",
      "Individual vs Professionnel — quand passer au compte Pro",
      "Tour complet de Seller Central en démo live",
    ],
  },
  {
    num: "02",
    title: "Trouver le bon produit à vendre",
    duration: "90 min",
    lessons: 6,
    description:
      "Le module le plus important. 80% des échecs sur Amazon viennent d'un mauvais choix de produit. Une méthode rigoureuse, pas de l'instinct.",
    items: [
      "Les critères d'un produit gagnant",
      "Recherche produit avec Helium 10 en démo live",
      "Analyser la concurrence et estimer la demande",
      "Calculer sa marge avec le FBA Calculator",
      "Trouver ses fournisseurs sur Alibaba",
      "Exercice : valider ton idée de produit",
    ],
  },
  {
    num: "03",
    title: "Créer un listing qui convertit",
    duration: "75 min",
    lessons: 5,
    description:
      "Un bon produit mal présenté ne vend pas. Ce module couvre tout ce qui fait qu'un listing se retrouve en première page et convertit.",
    items: [
      "Recherche de mots-clés avec Helium 10 Cerebro",
      "Rédiger titre, bullet points et description optimisés",
      "Les photos produit qui font la différence",
      "Créer sa page A+ en démo live",
      "Le prix — stratégie de lancement vs prix cible",
    ],
  },
  {
    num: "04",
    title: "Logistique FBA et gestion des stocks",
    duration: "60 min",
    lessons: 4,
    description:
      "La partie que les débutants sous-estiment. Une rupture de stock détruit le ranking. Une mauvaise préparation génère des frais cachés.",
    items: [
      "Envoyer son premier shipment à Amazon",
      "Comprendre les frais FBA",
      "Gérer ses stocks et anticiper les ruptures",
      "Inspection qualité et gestion des retours",
    ],
  },
  {
    num: "05",
    title: "Amazon Ads",
    duration: "120 min",
    lessons: 7,
    description:
      "Le module le plus attendu. C'est ici que Scallab se différencie des formations généralistes. Maîtriser les Ads est ton avantage concurrentiel.",
    items: [
      "Les 3 types de campagnes — SP, SB, SD",
      "Structure de compte optimale",
      "Lancer sa première campagne auto en démo live",
      "Passer en manuel — exploiter les données",
      "Optimiser son ACoS — la méthode hebdomadaire",
      "Stratégie de lancement produit avec les Ads",
      "Exercice : audit d'une campagne réelle",
    ],
  },
  {
    num: "06",
    title: "Avis clients et réputation",
    duration: "45 min",
    lessons: 3,
    description:
      "Les avis sont le carburant du ranking et de la conversion. Uniquement des méthodes conformes aux CGU Amazon.",
    items: [
      "Amazon Vine et le bouton Demander un avis",
      "Gérer les avis négatifs",
      "Ce qu'il ne faut absolument pas faire",
    ],
  },
  {
    num: "07",
    title: "Analyser ses performances et scaler",
    duration: "60 min",
    lessons: 4,
    description:
      "Une fois les premières ventes obtenues, la plupart des vendeurs stagnent faute de savoir lire leurs données. Ce module transforme les chiffres en décisions.",
    items: [
      "Les rapports Seller Central à maîtriser",
      "Calculer sa vraie rentabilité",
      "Scaler : plus de budget Ads ou nouveau produit ?",
      "S'étendre aux autres marketplaces européennes",
    ],
  },
  {
    num: "🎁",
    title: "Ressources, outils et communauté",
    duration: "Accès permanent",
    lessons: 4,
    description: "Tous les outils et ressources pour aller plus vite et ne jamais rester bloqué.",
    items: [
      "Checklist de lancement produit en PDF — 40 points à valider",
      "Tableau de calcul de marge Google Sheets",
      "Les outils recommandés avec codes promo : Helium 10, Jungle Scout, Keepa, SellerBoard",
      "Accès au groupe privé d'entraide Discord",
    ],
    isBonus: true,
  },
];

const skills = [
  "Trouver un produit rentable avec la méthode Helium 10",
  "Contacter et négocier avec des fournisseurs Alibaba",
  "Créer un listing optimisé SEO qui rank sur Amazon",
  "Lancer et gérer des campagnes Amazon Ads rentables",
  "Réduire son ACoS et maximiser son ROI publicitaire",
  "Gérer sa logistique FBA sans rupture de stock",
  "Obtenir des avis clients de manière conforme",
  "Lire et interpréter ses rapports Seller Central",
  "Calculer sa marge nette réelle",
  "Scaler son business Amazon",
  "Éviter les erreurs et suspensions de compte",
  "Vendre sur plusieurs marketplaces européennes",
];

const profiles = [
  {
    icon: "🚀",
    title: "Tu es débutant complet",
    desc: "Tu veux lancer ton premier produit sur Amazon sans te tromper dès le départ.",
  },
  {
    icon: "📈",
    title: "Tu vends déjà sur Amazon",
    desc: "Tu veux optimiser tes listings, réduire ton ACoS et scaler tes ventes.",
  },
  {
    icon: "🎓",
    title: "Tu veux te former sérieusement",
    desc: "Tu cherches une formation complète, à jour, avec un vrai suivi.",
  },
];

// ─── BUY BUTTON ───────────────────────────────────────────────────────────────

function BuyButton() {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await redirectToCheckout();
    setLoading(false);
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      style={{ backgroundColor: "#FF6B35" }}
    >
      {loading ? (
        <>
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Redirection…
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Accéder à la formation — 497€
        </>
      )}
    </button>
  );
}

// ─── MODULE CARD ──────────────────────────────────────────────────────────────

function ModuleCard({ mod, index }: { mod: (typeof modules)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? "border-[#FF6B35]/40 shadow-lg" : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
      } bg-white`}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-6 text-left group"
      >
        {/* Number badge */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black shrink-0 text-white transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: mod.isBonus ? "#FF6B35" : open ? "#FF6B35" : "#1a1a2e" }}
        >
          {mod.num}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-base font-bold text-gray-900 group-hover:text-[#FF6B35] transition-colors">
              {mod.title}
            </h3>
            {mod.isBonus && (
              <span
                className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: "#FF6B3520", color: "#FF6B35" }}
              >
                Bonus
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              {mod.lessons} leçon{mod.lessons > 1 ? "s" : ""}
            </span>
            {mod.duration && (
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {mod.duration}
              </span>
            )}
          </div>
        </div>

        {/* Chevron */}
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 border-t border-gray-100 pt-5">
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{mod.description}</p>
          <ul className="space-y-3">
            {mod.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FormationPage() {
  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
            style={{ backgroundColor: "#FF6B3530", color: "#FF6B35" }}
          >
            Formation complète
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Maîtrise Amazon de A à Z
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-10">
            8 modules, 40+ leçons, des exercices pratiques et une communauté d'entraide pour
            lancer et scaler ton business Amazon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/login"
              className="px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Accéder à la formation
            </Link>
            <a
              href="#programme"
              className="px-8 py-4 rounded-xl font-semibold text-base border-2 border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:scale-95"
            >
              Voir le programme
            </a>
          </div>
          {/* Stats */}
          <div className="flex items-stretch justify-center max-w-2xl mx-auto border-t border-white/10 pt-12 mt-2 gap-0">
            {[
              { value: "8", label: "Modules" },
              { value: "40+", label: "Leçons" },
              { value: "∞", label: "Accès à vie" },
            ].map((s, i) => (
              <div key={s.label} className={`flex-1 text-center px-6 py-2 ${i < 2 ? "border-r border-white/15" : ""}`}>
                <div className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: "#FF6B35" }}>{s.value}</div>
                <div className="text-base text-white mt-2 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-5">Ce que tu vas accomplir</h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Que tu sois débutant complet ou vendeur Amazon qui stagne, cette formation te donne une
              méthode rigoureuse et actionnable. Pas de théorie inutile — uniquement ce qui fonctionne
              en 2024.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profiles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ backgroundColor: "#FF6B3515" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="programme" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Le programme complet</h2>
            <p className="text-gray-500 text-lg">Une progression logique du débutant au vendeur autonome.</p>
          </div>
          <div className="space-y-3">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.num} mod={mod} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNAUTÉ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
            style={{ backgroundColor: "#FF6B3530", color: "#FF6B35" }}
          >
            Inclus dans la formation
          </div>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6" style={{ backgroundColor: "#FF6B3520" }}>
            👥
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-5">
            Une communauté pour ne jamais rester bloqué
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            En rejoignant la formation, tu intègres un groupe privé d'élèves et d'experts Amazon
            Insiders. Pose tes questions, partage tes avancées, obtiens des réponses concrètes. Nous
            sommes présents pour t'accompagner à chaque étape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            {[
              "Espace d'échange privé réservé aux élèves",
              "Réponses garanties de l'équipe Scallab",
              "Partage d'expériences entre vendeurs",
              "Accès à vie à la communauté",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4 border border-white/10">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Ce que tu sauras faire à la fin de la formation
            </h2>
            <p className="text-gray-500 text-lg">Des compétences concrètes, immédiatement applicables.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-[#FF6B35]/30 transition-all duration-200"
              >
                <span
                  className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700 text-sm font-medium leading-snug">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIF */}
      <section id="tarif" className="py-24 px-6 bg-white">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Accède à la formation</h2>
            <p className="text-gray-500 text-lg">Un investissement unique, un accès à vie.</p>
          </div>
          <div className="rounded-2xl border-2 shadow-xl overflow-hidden" style={{ borderColor: "#FF6B35" }}>
            {/* Header carte */}
            <div className="px-8 py-6 text-white text-center" style={{ backgroundColor: "#FF6B35" }}>
              <div className="text-sm font-semibold uppercase tracking-widest mb-1 opacity-80">Formation complète</div>
              <div className="text-6xl font-black">497€</div>
              <div className="text-sm opacity-75 mt-1">paiement unique · accès à vie</div>
            </div>
            {/* Corps carte */}
            <div className="px-8 py-8 bg-white">
              <ul className="space-y-4 mb-8">
                {[
                  "8 modules · 40+ leçons vidéo",
                  "Exercices pratiques et templates",
                  "Checklist de lancement PDF (40 points)",
                  "Tableau de calcul de marge Google Sheets",
                  "Codes promo outils : Helium 10, Jungle Scout…",
                  "Accès au groupe privé Discord",
                  "Mises à jour futures incluses",
                  "Accès à vie sans abonnement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#FF6B35" }}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <BuyButton />
              <p className="text-center text-xs text-gray-400 mt-4 font-medium">
                Paiement sécurisé par Stripe · Satisfait ou remboursé 14 jours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section
        className="py-24 px-6"
        style={{ background: "linear-gradient(135deg, #FF6B35 0%, #e8551f 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Prêt à lancer ton business Amazon ?
          </h2>
          <p className="text-orange-100 text-lg mb-10 leading-relaxed">
            Rejoins la formation et commence dès aujourd'hui.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-white font-bold text-base transition-all duration-200 hover:bg-orange-50 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            style={{ color: "#FF6B35" }}
          >
            Accéder à la formation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-orange-200 text-sm mt-5 font-medium">
            Accès à vie · Mises à jour incluses · Communauté privée
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tight font-stencil">
            <span className="text-white">Scal</span>
            <span style={{ color: "#FF6B35" }}>lab</span>
          </Link>
          <p className="text-gray-500 text-sm">© 2024 Scallab. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
