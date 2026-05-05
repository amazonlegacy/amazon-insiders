"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";

// ─── FAQ DATA ─────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "La formation est-elle adaptée aux débutants complets ?",
    a: "Oui, la formation part de zéro. Aucune expérience Amazon n'est requise. On t'explique chaque étape dans l'ordre.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "Les premiers résultats concrets arrivent généralement entre 6 et 12 semaines après le lancement du premier produit, en suivant notre méthode.",
  },
  {
    q: "Est-ce que j'ai accès à la formation à vie ?",
    a: "Oui. Une fois la formation achetée, tu y as accès à vie ainsi qu'à toutes les mises à jour futures sans frais supplémentaires.",
  },
  {
    q: "Comment fonctionne la communauté d'entraide ?",
    a: "Tu intègres un groupe privé d'élèves et d'experts. Tu peux poser tes questions à tout moment et l'équipe Amazon Insiders te répond personnellement.",
  },
  {
    q: "Proposez-vous un accompagnement individuel en plus de la formation ?",
    a: "Oui, nous proposons des services d'accompagnement personnalisé. Consulte notre page Services ou contacte-nous directement pour en discuter.",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open ? "border-[#FF6B35]/40 shadow-md" : "border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md"
      } bg-white`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
      >
        <span className={`text-sm font-semibold transition-colors ${open ? "text-[#FF6B35]" : "text-gray-900 group-hover:text-[#FF6B35]"}`}>
          {q}
        </span>
        <span
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ backgroundColor: open ? "#FF6B35" : "#FF6B3515" }}
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180 text-white" : "text-[#FF6B35]"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="font-sans text-gray-900">
      <Header />

      {/* HERO */}
      <section
        className="pt-32 pb-20 px-6"
        style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FFB800 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Contacte-nous
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Une question sur nos services ou la formation ?<br />
            Notre équipe te répond sous 24h.
          </p>
        </div>
      </section>

      {/* SECTION PRINCIPALE */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Colonne gauche */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">On est là pour toi</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Que tu aies une question sur nos services, la formation ou ton projet Amazon, n'hésite
              pas à nous écrire. Nous répondons à chaque message personnellement.
            </p>

            {/* Infos contact */}
            <div className="space-y-4 mb-10">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: "contact@amazon-insiders.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  text: "Réponse sous 24h garantie",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  text: "Consultation gratuite de 30 min disponible",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md hover:border-[#FF6B35]/20 transition-all duration-200"
                >
                  <span
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#FF6B3515", color: "#FF6B35" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-gray-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Nous suivre</p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 hover:bg-orange-50 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
                    style={{ borderColor: "#FF6B35", color: "#FF6B35" }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite — Formulaire */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-500 text-sm mb-8">Nous te répondons sous 24h.</p>
                <button
                  onClick={() => { setSent(false); setName(""); setEmail(""); setSubject(""); setMessage(""); }}
                  className="px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Envoie-nous un message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Prénom et nom
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jean Dupont"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jean@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
                    />
                  </div>

                  {/* Sujet */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Sujet
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 bg-white appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px" }}
                    >
                      <option value="" disabled>Sélectionne un sujet</option>
                      <option value="services">Renseignement sur les services</option>
                      <option value="formation">Renseignement sur la formation</option>
                      <option value="consultation">Demande de consultation gratuite</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décris-nous ton projet ou ta question..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                    style={{ backgroundColor: "#FF6B35" }}
                  >
                    Envoyer le message
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium">
                    Nous répondons sous 24h · Aucun engagement
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-500 text-lg">Les réponses aux questions qu'on nous pose le plus souvent.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ backgroundColor: "#1a1a2e" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">Amazon</span>
            <span style={{ color: "#FF6B35" }}>Insiders</span>
          </Link>
          <p className="text-gray-500 text-sm">© 2024 Amazon Insiders. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
