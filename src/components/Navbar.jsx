"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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

  const handleSignOut = async () => {
    await authClient.signOut();
    toast.success("Signed out successfully!");
    router.push("/");
    setMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/all-books", label: "All Books" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white dark:bg-[#0a0a0b] transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : "border-b border-gray-100 dark:border-white/8"
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
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === href
                    ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-3">
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 animate-pulse" />
          ) : user ? (
            <div className="flex items-center gap-3">
              {/* User Avatar */}
              <div className="flex items-center gap-2">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full object-cover border border-gray-200 dark:border-white/10"
                    unoptimized
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400 text-xs font-bold">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
              </div>

              {/* Sign Out */}
              <button
                onClick={handleSignOut}
                className="rounded-md border border-gray-200 dark:border-white/10 px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 transition hover:bg-gray-50 dark:hover:bg-white/5"
              >
                Sign out
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                  pathname === "/signin"
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

          {/* Mobile user info */}
          {user && (
            <div className="flex items-center gap-3 px-3 py-3 mb-2 rounded-xl bg-gray-50 dark:bg-white/[0.03]">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover border border-gray-200 dark:border-white/10"
                  unoptimized
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400 text-sm font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{user.email}</p>
              </div>
            </div>
          )}

          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === href
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
                onClick={handleSignOut}
                className="w-full rounded-md border border-gray-200 dark:border-white/10 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
              >
                Sign out
              </button>
            ) : (
              <>
                <Link
                  href="/signin"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md border border-gray-200 dark:border-white/10 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition"
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