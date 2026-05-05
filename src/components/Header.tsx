"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Formation", href: "/formation" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-gray-900">Amazon</span>
          <span style={{ color: "#FF6B35" }}>Insiders</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="transition-colors"
                style={
                  isActive
                    ? { color: "#FF6B35", fontWeight: 600 }
                    : { color: "#4B5563" }
                }
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#111827";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = "#4B5563";
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all duration-200 hover:bg-orange-50 active:scale-95"
            style={{ borderColor: "#FF6B35", color: "#FF6B35" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Se connecter
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
            style={{ backgroundColor: "#FF6B35" }}
          >
            Consultation gratuite
          </Link>
        </div>
      </div>
    </header>
  );
}
