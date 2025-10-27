
import { Globe2, Users2, CreditCard, ShieldCheck } from "lucide-react";
import Reveal from "../client/Reveal";
import HoverLift from "../client/HoverLift";

export default function GlobalReach() {
    const stats = [
        { Icon: Globe2, title: "Available in 60+ countries" },
        { Icon: Users2, title: "Trusted by 120K+ active users" },
        { Icon: CreditCard, title: "5M+ transactions monthly" },
        { Icon: ShieldCheck, title: "Top-tier encryption & security" },
    ];

    return (
        <section
            className="w-[90%] mx-auto py-20 rounded-2xl
                 bg-[radial-gradient(120%_120%_at_50%_80%,#EEF4FF_0%,#FEF6DF_60%,#EADCF9_100%)]
                 dark:bg-[radial-gradient(120%_120%_at_50%_80%,#0f172a_0%,#1e293b_100%)]"
        >
            <Reveal>
                <div className="text-center mb-12">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                        Global Network
                    </p>
                    <h2 className="mt-2 text-[30px] sm:text-[34px] font-semibold text-[#0B1020] dark:text-white">
                        Expanding worldwide with trust and technology
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        From Asia to Europe and the Americas, Easy Pay connects people through seamless
                        digital transactions—fast, secure, and borderless.
                    </p>
                </div>
            </Reveal>

            <Reveal>
                <HoverLift>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center max-w-6xl mx-auto">
                        {stats.map(({ Icon, title }, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm"
                            >
                                <Icon className="mx-auto h-10 w-10 text-[#2563EB]" />
                                <p className="mt-3 font-medium text-[#0B1020] dark:text-white">{title}</p>
                            </div>
                        ))}
                    </div>
                </HoverLift>
            </Reveal>
        </section>
    );
}
