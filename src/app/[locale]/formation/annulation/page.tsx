import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function AnnulationPage() {
  const t = await getTranslations("annulation");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight mb-10 font-stencil">
        <span className="text-white">Scal</span>
        <span style={{ color: "#FF6B35", fontStyle: "italic" }}>lab</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10 text-center">
        {/* Icône */}
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {t("subtitle")}
        </p>

        <Link
          href="/formation"
          className="block w-full py-3.5 rounded-xl text-white font-bold text-sm text-center transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98] mb-3"
          style={{ backgroundColor: "#FF6B35" }}
        >
          {t("cta_formation")}
        </Link>

        <Link
          href="/contact"
          className="block w-full py-3.5 rounded-xl font-bold text-sm text-center border-2 transition-all duration-200 hover:bg-orange-50 active:scale-[0.98]"
          style={{ borderColor: "#FF6B35", color: "#FF6B35" }}
        >
          {t("cta_contact")}
        </Link>

        <Link
          href="/"
          className="block text-xs text-gray-400 mt-5 hover:text-gray-600 transition-colors"
        >
          {t("back_home")}
        </Link>
      </div>
    </div>
  );
}
