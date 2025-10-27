// components/sections/Features.tsx

import Reveal from "@/components/client/Reveal";
import HoverLift from "@/components/client/HoverLift";
import Image from "next/image";

export default function Features() {
    const items = [
        {
            title: "Instant payments",
            body: "Send money to friends or family in real–time, for free.",
            img: "/img5.png",
            lightBg: "bg-[#EEF4FF]",        // light (pastel blue)
            darkBg: "dark:bg-blue-900/30",  // dark tinted
        },
        {
            title: "No hidden fees",
            body: "Clear and simple pricing. Always be aware of your costs.",
            img: "/img7.png",
            lightBg: "bg-[#FFF3D9]",         // light (soft sand)
            darkBg: "dark:bg-amber-900/30",  // dark tinted
        },
        {
            title: "Digital wallet",
            body: "Store money securely and make fast transfers or purchases.",
            img: "/img8.png",
            lightBg: "bg-[#EAF7FF]",        // light (aqua tint)
            darkBg: "dark:bg-cyan-900/30",  // dark tinted
        },
        {
            title: "Secure transactions",
            body: "End-to-end encryption for all transactions.",
            img: "/img1.png",
            lightBg: "bg-[#F1E9FF]",          // light (lavender)
            darkBg: "dark:bg-violet-900/30",  // dark tinted
        },
    ];

    return (
        <section id="features" className="w-[90%] mx-auto py-24">
            {/* Heading */}
            <Reveal className="mx-auto mb-12 max-w-3xl text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7C3AED]">
                    Features
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-[#0B1020] dark:text-white md:text-4xl">
                    Why choose Easy Pay for <br className="hidden sm:block" />
                    effortless payments?
                </h2>
            </Reveal>

            {/* Feature cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map(({ title, body, img, lightBg, darkBg }, i) => (
                    <Reveal key={title} delay={i * 0.05}>
                        <HoverLift>
                            <div
                                className={`group rounded-2xl ${lightBg} ${darkBg} p-7 shadow-sm
                ring-1 ring-black/5 dark:ring-white/10 transition-all duration-300`}
                            >
                                <div
                                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                  border border-black/10 dark:border-white/10 bg-white/70 dark:bg-slate-900/60"
                                >
                                    <Image
                                        src={img}
                                        alt={title}
                                        width={28}
                                        height={28}
                                        className="object-contain dark:invert"
                                    /* যদি তোমার PNG/ICON রঙিন হয়, এটা সরিয়ে দিও */
                                    />
                                </div>

                                <h3 className="mb-1 text-lg font-semibold text-[#0B1020] dark:text-white">
                                    {title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{body}</p>
                            </div>
                        </HoverLift>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
