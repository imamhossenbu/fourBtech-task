
export default function Mission() {
    return (
        <section
            className="w-[92%] mx-auto py-20 rounded-2xl 
                 bg-[radial-gradient(120%_120%_at_50%_80%,#EEF4FF_0%,#FEF6DF_60%,#EADCF9_100%)]
                 dark:bg-[radial-gradient(120%_120%_at_50%_80%,#0f172a_0%,#1e293b_100%)]"
        >
            <div className="max-w-3xl mx-auto text-center">
                {/* Heading */}
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                    Our Mission
                </p>

                <h2 className="mt-3 text-[30px] sm:text-[34px] leading-tight font-semibold text-[#0B1020] dark:text-white">
                    Empowering everyone with simple, <br className="hidden sm:block" />
                    secure digital payments
                </h2>

                {/* Description */}
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    At <span className="font-semibold text-[#0B1020] dark:text-white">Easy Pay</span>,
                    we’re on a mission to simplify global financial interactions by combining
                    cutting-edge security with effortless usability.
                    We believe that payments should be fast, borderless, and built on trust.
                </p>

                {/* Call to action */}
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="#learn-more"
                        className="inline-flex h-11 items-center justify-center rounded-full
                       bg-[#2563EB] px-6 text-white text-sm font-semibold 
                       hover:bg-[#1E3A8A] transition"
                    >
                        Learn More
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex h-11 items-center justify-center rounded-full
                       border border-[#2563EB] px-6 text-[#2563EB] text-sm font-semibold
                       hover:bg-[#2563EB] hover:text-white transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
