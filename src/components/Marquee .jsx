"use client";

const Marquee = () => {
    const items = [
        "New Arrivals: The Midnight Library",
        "Special Discount on Memberships — Join Today!",
        "New Arrivals: Clean Code",
        "New Arrivals: A Brief History of Time",
        "First 30 Days — Borrow Books for Free!",
        "New Arrivals: The Alchemist",
        "Limited Copies: 1984 — Grab Yours Now!",
        "This Week's Top Pick: Sapiens",
        "New Arrivals: To Kill a Mockingbird",
        "Special Offer: Borrow 3 Books at Once!",
    ];

    return (
        <div className="overflow-hidden w-full bg-amber-50 dark:bg-amber-500/10 border-y border-amber-100 dark:border-amber-500/20 py-3">
            <div className="marquee-track">
                {[...items, ...items].map((item, index) => (
                    <span
                        key={index}
                        className="mx-8 text-sm font-medium text-amber-700 dark:text-amber-400"
                    >
                        📖 {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;