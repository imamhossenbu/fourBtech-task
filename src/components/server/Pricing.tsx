

export default function Pricing() {
    const plans = [
        {
            name: "Free Plan",
            blurb: "Free for personal payments.",
            price: 0,
            unit: "/month",
            features: [
                "Up to 100 transactions per month",
                "Basic proud protection",
                "Email support",
            ],
            theme: "light" as const,
            cta: "Get Free Plan",
        },
        {
            name: "Advanced",
            blurb: "Minimal fees for advanced transactions",
            price: 19,
            unit: "/month",
            features: [
                "Up to 1000 transactions per month",
                "Advanced proud protection",
                "Detailed transaction reports",
                "Priority email & chat support",
            ],
            theme: "dark" as const,
            cta: "Get Advanced Plan",
        },
        {
            name: "Business",
            blurb: "Premium business transactions",
            price: 29,
            unit: "/month",
            features: [
                "Unlimited transactions per month",
                "Premium proud protection",
                "Detailed transaction reports",
                "Priority email & chat support",
            ],
            theme: "light" as const,
            cta: "Get Business Plan",
        },
    ];

    return (
        <section className="w-[90%] mx-auto py-20">
            {/* Heading */}
            <div className="text-center mb-10">
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                    Pricing
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-[#0B1020] dark:text-white">
                    Simple transparent pricing
                    <br className="hidden sm:block" /> no hidden fees
                </h2>
            </div>

            {/* Cards */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {plans.map((p) => {
                    const isDark = p.theme === "dark";
                    return (
                        <div
                            key={p.name}
                            className={[
                                "rounded-2xl overflow-hidden h-full",
                                isDark ? "relative border border-amber-300/80"
                                    : "border border-[#E5E7EB] dark:border-white/10",
                            ].join(" ")}
                        >
                            {/* Card body */}
                            <div
                                className={[
                                    "p-6 md:p-8 flex h-full flex-col",
                                    "min-h-[420px] md:min-h-[460px]",                   // ⬅️ uniform min height
                                    isDark ? "bg-[#0B1220] text-white"
                                        : "bg-white text-[#0B1020] dark:bg-slate-900/60 dark:text-white",
                                ].join(" ")}
                            >
                                {/* Top */}
                                <div>
                                    <h3 className={["text-lg font-semibold", isDark ? "text-white" : ""].join(" ")}>
                                        {p.name}
                                    </h3>
                                    <p className={["mt-1 text-sm", isDark ? "text-slate-300" : "text-gray-600 dark:text-gray-300"].join(" ")}>
                                        {p.blurb}
                                    </p>

                                    <div className="mt-6 flex items-end gap-1">
                                        <span className="text-4xl md:text-5xl font-bold">${p.price}</span>
                                        <span className={["mb-1 text-sm", isDark ? "text-slate-300" : "text-gray-600 dark:text-gray-300"].join(" ")}>
                                            {p.unit}
                                        </span>
                                    </div>

                                    <div className={["mt-6 h-px", isDark ? "bg-white/10" : "bg-[#E5E7EB]"].join(" ")} />
                                    <ul className="mt-5 space-y-3">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex items-start gap-3">
                                                <svg className={`h-5 w-5 shrink-0 ${isDark ? "text-[#60A5FA]" : "text-[#7C3AED]/70"}`} viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4z" /></svg>
                                                <span className={["text-sm", isDark ? "text-slate-200" : "text-gray-700 dark:text-gray-200"].join(" ")}>
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA pinned to bottom */}
                                <div className="mt-auto pt-6">
                                    {isDark ? (
                                        <button className="w-full h-12 rounded-full bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition shadow-inner" type="button">
                                            {p.cta}
                                        </button>
                                    ) : (
                                        <button className="w-full h-12 rounded-full border border-black/20 dark:border-white/20 bg-white dark:bg-transparent hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition font-semibold" type="button">
                                            {p.cta}
                                        </button>
                                    )}
                                </div>
                            </div>

                            {isDark && <div className="pointer-events-none h-10 bg-[radial-gradient(70%_60%_at_50%_0%,#7C3AED33,transparent)]" />}
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
