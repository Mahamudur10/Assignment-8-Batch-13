import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://assignment-8-batch-13.vercel.app/data.json", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch books data");
    }

    const books = await res.json();
    const book = books.find((b) => String(b.id) === String(id));

    if (!book) return notFound();

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0b]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">

                {/* Back Button */}
                <Link
                    href="/all-books"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6 sm:mb-10"
                >
                    ← Back to All Books
                </Link>

                <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-medium">
                        {book.category || "Uncategorized"}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-3">
                    {book.title}
                </h1>

                {/* Author */}
                <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
                    by{" "}
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {book.author || "Unknown Author"}
                    </span>
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-6" />

                <div className="mb-8">
                    <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl shadow-black/5 bg-gray-100 dark:bg-gray-800">
                        {book.image_url ? (
                            <Image
                                src={book.image_url}
                                alt={book.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 400px"
                                priority
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                No cover available
                            </div>
                        )}
                    </div>
                </div>

                {/* Available Quantity Card */}
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

                {/* Description */}
                <div className="mb-8">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                        About this book
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                        {book.description || "No description available for this book."}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 dark:bg-white/10 mb-6" />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {book.available_quantity > 0 ? (
                        <button
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
    );
};

export default BookDetailsPage;