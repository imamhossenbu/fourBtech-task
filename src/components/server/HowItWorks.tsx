
import Image from "next/image";
import { LuDownload, LuCreditCard, LuWallet } from "react-icons/lu";

export default function HowItWorks() {
    const steps = [
        {
            num: "01", Icon: LuDownload, title: "Download Easy Pay",
            body: "Get the Easy Pay app today from the App Store or Google Play hassle free."
        },
        {
            num: "02", Icon: LuCreditCard, title: "Link your bank or card",
            body: "Easily connect your account in seconds with advanced security for peace of mind."
        },
        {
            num: "03", Icon: LuWallet, title: "Start paying",
            body: "Easily split bills, send money to friends, and make smooth online payments instantly."
        },
    ];

    return (
        <section className="bg-[#F6F7FB]  dark:bg-slate-950">

            <div
                className="
        w-[90%] mx-auto py-20
          rounded-2xl
      "
            >

                <div className="flex flex-wrap items-center justify-between gap-4 ">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                            How it works
                        </p>
                        <h2 className="mt-2 text-[26px] leading-snug font-semibold text-[#0B1020] dark:text-white sm:text-3xl">
                            Make payments, transfers, and
                            <br className="hidden sm:block" /> more in 3 simple steps
                        </h2>
                    </div>

                    <a
                        href="#get-started"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
                    >
                        Get Started Now
                    </a>
                </div>

                <div
                    className="
          mt-6 
          rounded-2xl
          border border-[#E8EAF0]        
          bg-white shadow-sm               
          dark:border-white/10 dark:bg-slate-900/60
        "
                >
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                        {steps.map(({ num, Icon, title, body }, i) => {
                            const leftDivider = i > 0 ? "sm:border-l sm:border-[#E8EAF0] dark:sm:border-white/10" : "";
                            const topDivider = i > 0 ? "border-t border-[#E8EAF0] dark:border-white/10 sm:border-t-0" : "";
                            return (
                                <div
                                    key={num}
                                    className={`relative ${topDivider} ${leftDivider} p-6 sm:p-8 pt-10 sm:pt-12 min-h-[170px]`}
                                >

                                    <span
                                        aria-hidden
                                        className="pointer-events-none absolute left-4 top-3 select-none text-5xl font-extrabold
                             text-[#0B1020]/4 dark:text-white/5 sm:left-5 sm:top-4 sm:text-6xl"
                                    >
                                        {num}
                                    </span>


                                    <div className="relative z-10 flex flex-col items-start">
                                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl
                                  border border-[#E8EAF0] bg-white/90
                                  dark:border-white/15 dark:bg-slate-900/60">
                                            <Icon className="h-5 w-5 text-[#0B1020] dark:text-gray-100" />
                                        </div>

                                        <h3 className="text-[15px] font-semibold text-[#0B1020] dark:text-white">
                                            {title}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                            {body}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="mt-6 overflow-hidden rounded-2xl border border-[#E8EAF0] dark:border-white/10 bg-white dark:bg-slate-900/60">
                    <div className="relative h-60 w-full sm:h-80 lg:h-[620px]">
                        <Image
                            src="/man.png"
                            alt="Using Easy Pay at a cafe"
                            fill
                            priority
                            className="object-contain"
                            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 92vw, 92vw"
                        />
                    </div>
                </div>
            </div>
        </section>

    );
}
