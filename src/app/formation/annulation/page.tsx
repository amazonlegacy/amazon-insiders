import Link from "next/link";

export default function AnnulationPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 font-sans"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" }}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-tight mb-10">
        <span className="text-white">Amazon</span>
        <span style={{ color: "#FF6B35" }}>Insiders</span>
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
          Paiement annulé
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Tu as annulé le paiement. Aucun montant n'a été débité.
          Tu peux reprendre la formation à tout moment.
        </p>

        <Link
          href="/formation"
          className="block w-full py-3.5 rounded-xl text-white font-bold text-sm text-center transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98] mb-3"
          style={{ backgroundColor: "#FF6B35" }}
        >
          Retourner à la formation
        </Link>

        <Link
          href="/contact"
          className="block w-full py-3.5 rounded-xl font-bold text-sm text-center border-2 transition-all duration-200 hover:bg-orange-50 active:scale-[0.98]"
          style={{ borderColor: "#FF6B35", color: "#FF6B35" }}
        >
          Une question ? Contacte-nous
        </Link>

        <Link
          href="/"
          className="block text-xs text-gray-400 mt-5 hover:text-gray-600 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
