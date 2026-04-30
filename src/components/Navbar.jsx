"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white dark:bg-[#0a0a0b] transition-shadow duration-200 ${scrolled ? "shadow-sm" : "border-b border-gray-100 dark:border-white/8"
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/photo.png"
            alt="Book Borrow logo"
            loading="eager"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-lg font-black tracking-tight text-gray-900 dark:text-white">
            Book Borrow
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === href
                  ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Hi, {user.name ?? "there"}
              </span>
              <button
                onClick={() => setUser(null)}
                className="rounded-md border border-gray-200 dark:border-white/10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-white/5"
              >
                Sign out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${pathname === "/signin"
                  ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-gray-900 dark:bg-white px-4 py-1.5 text-sm font-medium text-white dark:text-black transition hover:bg-gray-700 dark:hover:bg-gray-200"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden rounded-xl p-2 bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-200"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-white/8 bg-white dark:bg-[#0a0a0b] px-4 pb-4 pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${pathname === href
                    ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 dark:border-white/8 pt-3">
            {user ? (
              <button
                onClick={() => { setUser(null); setMenuOpen(false); }}
                className="w-full rounded-md border border-gray-200 dark:border-white/10 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                Sign out
              </button>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md border border-gray-200 dark:border-white/10 py-2 text-center text-sm font-medium transition ${pathname === "/signin"
                    ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/30"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md bg-gray-900 dark:bg-white py-2 text-center text-sm font-medium text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 transition"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;