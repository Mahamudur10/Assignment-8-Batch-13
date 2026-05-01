import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0b] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/50 dark:bg-amber-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/50 dark:bg-orange-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-50 dark:bg-amber-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />

      <div className="relative text-center max-w-2xl mx-auto">

        {/* 404 with book icon overlay */}
        <div className="relative inline-block mb-6">
          <p className="text-[200px] sm:text-[240px] font-black leading-none select-none bg-gradient-to-b from-gray-100 to-gray-50 dark:from-white/5 dark:to-transparent bg-clip-text text-transparent">
            404
          </p>
          {/* Floating book icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="text-7xl sm:text-8xl filter drop-shadow-lg animate-bounce" style={{ animationDuration: "3s" }}>
                📚
              </div>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex items-center justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-semibold tracking-wide">
            ⚠️ Error 404 — Page Not Found
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-5">
          This page took a{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-amber-600 dark:text-amber-400">
              long vacation
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
            >
              <path
                d="M2 6C40 2 80 1 100 2C120 3 160 5 198 3"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4 max-w-md mx-auto">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
        <p className="text-gray-400 dark:text-gray-600 text-sm mb-10">
          Don't worry — let's get you back on track!
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-10">
          {[
            { icon: "📖", label: "500+ Books" },
            { icon: "🔍", label: "Easy Search" },
            { icon: "⚡", label: "Fast Borrow" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-3 rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.02]"
            >
              <p className="text-2xl mb-1">{item.icon}</p>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-[1.03] hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 transition-all duration-200"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/all-books"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:scale-[1.03] transition-all duration-200"
          >
            📚 Browse Books
          </Link>
        </div>

        {/* Bottom hint */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-400 dark:text-gray-600">
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10" />
          <p>
            Think this is a mistake?{" "}
            <Link
              href="/contact"
              className="text-amber-600 dark:text-amber-400 font-medium hover:underline"
            >
              Contact us
            </Link>
          </p>
          <div className="h-px w-12 bg-gray-200 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}