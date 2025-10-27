

export default function FinalCta() {
    return (
        <section className="w-[90%] mx-auto py-14">
            <div
                className="relative overflow-hidden rounded-[22px] 
        bg-[url('/cta.png')] bg-cover bg-center bg-no-repeat"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 rounded-[22px]" />

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center text-center px-5 py-14 sm:px-10 sm:py-20">
                    <h2 className="text-white text-[22px] sm:text-[28px] md:text-[32px] font-semibold leading-snug">
                        Ready to experience seamless
                        <br className="hidden sm:block" />
                        secure payments globally
                    </h2>

                    <p className="mt-3 text-[13.5px] sm:text-[14px] md:text-[15px] w-[90%] sm:w-[80%] md:w-[65%] mx-auto text-white/85 leading-relaxed">
                        Ready for hassle-free, secure payments anywhere in the world? Start
                        using Easy Pay today—it’s fast, free, and focused on keeping your
                        transactions secure!
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#download"
                            className="inline-flex h-11 items-center justify-center rounded-full bg-[#2563EB] px-6 text-white text-sm font-semibold shadow-sm hover:bg-[#1E3A8A] transition"
                        >
                            Download the App
                        </a>

                        <a
                            href="#get-started"
                            className="inline-flex h-11 items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 text-white text-sm font-semibold hover:bg-white/20 transition backdrop-blur-[1px]"
                        >
                            Get Started Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
