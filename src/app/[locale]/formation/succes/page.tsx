import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function SuccesPage() {
  const t = await getTranslations("succes");
  const includedItems = t.raw("included_items") as string[];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight mb-10 font-stencil">
        <span className="text-white">Scal</span>
        <span style={{ color: "#FF6B35" }}>lab</span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl px-8 py-10 text-center">
        {/* Icône succès */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: "#FF6B3515" }}
        >
          <svg className="w-10 h-10" style={{ color: "#FF6B35" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t("title")}
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          {t("subtitle")}
        </p>

        {/* Récapitulatif */}
        <div
          className="rounded-xl px-5 py-4 mb-8 text-left"
          style={{ backgroundColor: "#FF6B3510" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#FF6B35" }}>
            {t("included_label")}
          </p>
          {includedItems.map((item) => (
            <div key={item} className="flex items-center gap-2 py-1">
              <svg className="w-3.5 h-3.5 shrink-0" style={{ color: "#FF6B35" }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>

        <Link
          href="/login"
          className="block w-full py-3.5 rounded-xl text-white font-bold text-sm text-center transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
          style={{ backgroundColor: "#FF6B35" }}
        >
          {t("cta")}
        </Link>

        <Link
          href="/"
          className="block text-xs text-gray-400 mt-4 hover:text-gray-600 transition-colors"
        >
          {t("back_home")}
        </Link>
      </div>
    </div>
  );
}
