import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#0a0a0b]">

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/20 dark:via-[#0a0a0b] dark:to-orange-950/20" />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 dark:bg-amber-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 dark:bg-orange-500/10 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="text-center px-6 max-w-4xl mx-auto">

        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium tracking-wide">
          📚 Your Digital Library
        </span>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
          Find Your{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-amber-600 dark:text-amber-400">
              Next Read
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9C50 3 100 1 150 3C200 5 250 7 298 4"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore thousands of books across every genre. Borrow, read, and
          return — all from the comfort of your home.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/all-books"
            className="px-8 py-3.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10"
          >
            Browse Now →
          </Link>
          <Link
            href="/all-books"
            className="px-8 py-3.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium transition-all duration-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            View All Books
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
          {[
            { number: "500+", label: "Books" },
            { number: "12+", label: "Categories" },
            { number: "1K+", label: "Readers" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {stat.number}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;