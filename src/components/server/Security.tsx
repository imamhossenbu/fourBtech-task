
import { BsDot } from "react-icons/bs";
import Reveal from "../client/Reveal";
import HoverLift from "../client/HoverLift";

export default function Security() {
    const items = [
        {
            color: "#3B82F6", title: "Two-factor authentication",
            desc: "Two-factor authentication ensures added protection by using verification steps."
        },
        {
            color: "#F87171", title: "Fraud detection and alerts",
            desc: "Fraud detection safeguards your money, sending instant alerts for any activity."
        },
        {
            color: "#34D399", title: "Transaction notifications",
            desc: "Instant notifications for transaction keep you informed to manage your finances."
        },
        {
            color: "#06B6D4", title: "Biometric access",
            desc: "Easily and securely log in with biometric features, and facial recognition."
        },
        {
            color: "#FBBF24", title: "End-to-end encryption",
            desc: "By encryption, protecting your data from unauthorized access."
        },
        {
            color: "#A78BFA", title: "24/7 Protection support",
            desc: "Our dedicated team is available around the clock to help you."
        },
    ];

    return (
        <section className="w-[92%] md:w-[90%] mx-auto py-10 bg-white dark:bg-[#0F172A] rounded-2xl">
            {/* Header */}
            <Reveal>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 ">
                    <div className="sm:w-2/3">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                            Security
                        </p>
                        <h2 className="mt-2 text-[30px] sm:text-[34px] font-semibold leading-snug text-[#0B1020] dark:text-white">
                            We protect your money at
                            <br className="hidden sm:block" /> every step with Easy Pay
                        </h2>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 sm:w-1/3 text-[15px] leading-relaxed">
                        Easy Pay ensures your money is protected at every step with advanced
                        encryption, real-time monitoring, and multi-factor authentication.
                    </p>
                </div>
            </Reveal>

            {/* Cards */}
            <Reveal>
                <HoverLift>
                    <div
                        className="
          mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 rounded-2xl
          border border-[#E5E7EB] bg-[linear-gradient(135deg,#F9FAFF_0%,#FFF8F4_100%)]
          dark:border-white/10 dark:bg-[linear-gradient(135deg,#0B1220_0%,#141826_100%)]
        "
                    >
                        {items.map(({ color, title, desc }, i) => (
                            <div
                                key={i}
                                className={`
              relative flex flex-col justify-start p-6
              border-b border-r border-[#E5E7EB]/70 dark:border-white/10
              ${i === 2 || i === 5 ? "lg:border-r-0" : ""}
              ${i >= 3 ? "lg:border-b-0" : ""}
            `}
                            >
                                <div className="flex items-center mb-2">
                                    <BsDot size={32} style={{ color }} />
                                </div>

                                <h3 className="text-[16px] font-semibold text-[#0B1020] dark:text-white">
                                    {title}
                                </h3>
                                <p className="mt-1 text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </HoverLift>
            </Reveal>
        </section>
    );
}
