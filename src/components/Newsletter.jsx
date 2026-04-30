"use client";
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubmitted(true);
        setEmail("");
    };

    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0a0a0b]">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500 to-orange-500 px-8 py-16 text-center">

                    {/* Decorative blobs */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

                    {/* Content */}
                    <div className="relative z-10">
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                            📬 Stay Updated
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Never Miss a New Arrival
                        </h2>
                        <p className="mt-3 text-white/80 max-w-md mx-auto text-sm">
                            Subscribe to our newsletter and get notified about new books,
                            special offers, and reading tips every week.
                        </p>

                        {submitted ? (
                            <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-amber-600 font-semibold text-sm">
                                ✅ Thank you for subscribing!
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-5 py-3 rounded-full bg-white text-gray-900 text-sm font-medium placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <button
                                    type="submit"
                                    className="shrink-0 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:scale-[1.03] transition-all duration-200"
                                >
                                    Subscribe →
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;