"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  const t = useTranslations("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Fonctionnalité de connexion à connecter à un backend");
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight mb-10 font-stencil">
        <span className="text-white">Scal</span>
        <span style={{ color: "#FF6B35" }}>lab</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">{t("title")}</h1>
          <p className="text-gray-500 text-sm">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t("email_label")}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("email_placeholder")}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
            />
          </div>

          {/* Mot de passe */}
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {t("password_label")}
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm outline-none transition-all duration-200 focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={showPassword ? t("hide_password") : t("show_password")}
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Mot de passe oublié */}
            <div className="flex justify-end mt-2">
              <a
                href="#"
                className="text-xs font-semibold transition-colors hover:opacity-80"
                style={{ color: "#FF6B35" }}
              >
                {t("forgot_password")}
              </a>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98] mt-2"
            style={{ backgroundColor: "#FF6B35" }}
          >
            {t("submit")}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-7">
          {t("no_access")}{" "}
          <Link
            href="/formation#tarif"
            className="font-semibold transition-colors hover:opacity-80"
            style={{ color: "#FF6B35" }}
          >
            {t("join_formation")}
          </Link>
        </p>
      </div>
    </div>
  );
}
