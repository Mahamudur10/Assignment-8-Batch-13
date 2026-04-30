import Image from "next/image";
import Link from "next/link";

const FeaturedBooks = async () => {
  const res = await fetch("https://assignment-8-batch-13.vercel.app/data.json");
  const books = await res.json();
  const featuredBooks = books.slice(0, 4);

  return (
    <section className="py-20 px-6 bg-white dark:bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
            📚 Featured Books
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            Top Picks For You
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
            Handpicked books loved by our readers. Start your journey today.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="group rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.03] overflow-hidden hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300"
            >
              {/* Book Cover */}
              <div className="relative h-56 w-full overflow-hidden bg-amber-50 dark:bg-amber-500/10">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/60 text-xs font-medium text-gray-700 dark:text-gray-300">
                  {book.category}
                </span>
              </div>

              {/* Book Info */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug line-clamp-1">
                    {book.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {book.author}
                  </p>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                  {book.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {book.available_quantity} copies left
                  </span>
                  <Link
                    href={`/books/${book.id}`}
                    className="px-3 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-medium transition-all duration-200 hover:scale-[1.03]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/all-books"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
          >
            View All Books →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;