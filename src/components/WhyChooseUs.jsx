const features = [
    {
        icon: "📖",
        title: "Thousands of Books",
        description:
            "Access over 500+ books across multiple genres. From classic literature to modern tech — we have it all.",
    },
    {
        icon: "⚡",
        title: "Instant Borrowing",
        description:
            "Borrow any book instantly with just one click. No waiting in lines, no paperwork — pure digital convenience.",
    },
    {
        icon: "🔒",
        title: "Secure & Private",
        description:
            "Your data is fully protected. We use industry-standard encryption to keep your account safe at all times.",
    },
    {
        icon: "🔄",
        title: "Easy Returns",
        description:
            "Returning a book is just as easy as borrowing one. Manage everything from your personal dashboard.",
    },
    {
        icon: "📱",
        title: "Read Anywhere",
        description:
            "Our platform works seamlessly on mobile, tablet, and desktop. Your library is always in your pocket.",
    },
    {
        icon: "🎁",
        title: "Free for 30 Days",
        description:
            "New members get full access completely free for the first 30 days. No credit card required to start.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-medium">
                        ✨ Why Book Borrow
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                        Everything You Need in One Place
                    </h2>
                    <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-md mx-auto text-sm">
                        We built Book Borrow to make reading accessible, simple, and
                        enjoyable for everyone.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-6 rounded-2xl border border-gray-100 dark:border-white/8 bg-white dark:bg-white/[0.03] hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;