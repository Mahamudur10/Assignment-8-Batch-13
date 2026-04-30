"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = ["All", "Story", "Tech", "Science"];

const AllBooksPage = ({ books }) => {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const filtered = books.filter((book) => {
        const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory = activeCategory === "All" || book.category === activeCategory;
        return matchSearch && matchCategory;
    });

    return (
        <div className="min-h-screen bg-white dark:bg-[#0a0a0b]">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Page Header */}
                <div className="text-center mb-10">
                    <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
                        📚 Our Collection
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                        All Books
                    </h1>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
                        Browse our full collection. Filter by category or search by title.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mb-8">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        🔍
                    </span>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by book title..."
                        className="w-full pl-10 pr-5 py-3 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] text-sm text-gray-900 dark:text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-amber-400/30 transition"
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="w-full md:w-48 shrink-0">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                            Categories
                        </p>
                        <ul className="flex md:flex-col flex-row flex-wrap gap-2">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => setActiveCategory(cat)}
                                        className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                                ? "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Books Grid */}
                    <div className="flex-1">
                        {filtered.length === 0 ? (
                            <div className="text-center py-20 text-gray-400 dark:text-gray-500">
                                <p className="text-4xl mb-3">📭</p>
                                <p className="text-sm">No books found. Try a different search.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map((book) => (
                                    <div
                                        key={book.id}
                                        className="group rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.03] overflow-hidden hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300"
                                    >
                                        {/* Book Cover */}
                                        <div className="relative h-52 w-full overflow-hidden bg-amber-50 dark:bg-amber-500/10">
                                            <Image
                                                src={book.image_url}
                                                alt={book.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
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

                                            <div className="flex items-center justify-between pt-1">
                                                <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                                    {book.available_quantity} copies left
                                                </span>
                                                <Link
                                                    href={`/books/${book.id}`}
                                                    className="px-3 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-medium transition-all duration-200 hover:scale-[1.03]"
                                                >
                                                    Details →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;