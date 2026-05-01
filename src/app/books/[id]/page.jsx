'use client';

import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const BookDetailsPage = ({ params }) => {
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const { id } = await params;
      const res = await fetch("https://assignment-8-batch-13.vercel.app/data.json", {
        cache: "no-store",
      });
      const books = await res.json();
      const foundBook = books.find((b) => String(b.id) === String(id));
      if (!foundBook) return notFound();
      setBook(foundBook);
      setLoading(false);
    };

    fetchBook();
  }, [params]);

  const handleBorrow = () => {
    if (book?.available_quantity > 0) {
      toast.success(`"${book.title}" borrowed successfully! 📖`);
    } else {
      toast.error("This book is currently unavailable");
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0b]">
      <div className="flex flex-col items-center gap-3">
        <svg className="animate-spin w-8 h-8 text-amber-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <p className="text-sm text-gray-400">Loading book...</p>
      </div>
    </div>
  );

  if (!book) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <Link
          href="/all-books"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6 sm:mb-10"
        >
          ← Back to All Books
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Book Cover */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl bg-gray-100 dark:bg-gray-800">
            {book.image_url ? (
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No cover available
              </div>
            )}
          </div>

          {/* Right Column - Book Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium">
                {book.category || "Uncategorized"}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-3">
              {book.title}
            </h1>

            <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
              by{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {book.author || "Unknown Author"}
              </span>
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-6" />

            <div className="mb-8 p-4 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03]">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Available Copies
                </span>
                <span className={`text-sm font-bold ${book.available_quantity > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
                  {book.available_quantity > 0 ? `${book.available_quantity} copies left` : "Out of Stock"}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                About this book
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {book.description || "No description available for this book."}
              </p>
            </div>

            <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-6" />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {book.available_quantity > 0 ? (
                <button
                  onClick={handleBorrow}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 transition-all duration-200 active:scale-95"
                >
                  📖 Borrow This Book
                </button>
              ) : (
                <button
                  disabled
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 text-sm font-semibold cursor-not-allowed"
                >
                  Out of Stock
                </button>
              )}

              <Link
                href="/all-books"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-gray-300 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 text-center"
              >
                Browse More Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;