// components/sections/Testimonials.tsx
import TestimonialsSlider from "@/components/client/TestimonialsSlider";

export default function Testimonial() {
    const items = [
        {
            text:
                "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
            name: "Ethan Williams",
            role: "Digital Marketing Specialist",
            avatar: "/u2.png",
            rating: 5,
        },
        {
            text:
                "Discover a payment app focused on transparency. Enjoy a seamless flow without hidden fees, providing clarity at every transaction. It’s designed to put you in full control of your payments.",
            name: "Daniel Thompson",
            role: "Product Designer",
            avatar: "/u3.png",
            rating: 5,
        },
        {
            text:
                "Switching to Easy Pay made our team’s billing painless. Instant alerts and reports keep everything tidy and fast. Highly recommended for modern teams.",
            name: "Sophia Patel",
            role: "Finance Manager",
            avatar: "/u1.jpg",
            rating: 5,
        },
    ];

    return (
        <section className="w-[90%] mx-auto py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* LEFT = 50% */}
                <div className="lg:pr-6">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7C3AED]">
                        Testimonial
                    </p>
                    <h2 className="mt-2 text-[32px] leading-tight font-semibold text-[#0B1020] dark:text-white">
                        We’ve build trust with
                        <br className="hidden sm:block" /> reviews from real users
                    </h2>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                        Boost your credibility by featuring genuine testimonials from real users.
                    </p>

                    <div className="mt-7 flex items-center gap-4">
                        {/* Prev */}
                        <button
                            id="t-prev"
                            aria-label="Previous"
                            className="h-12 w-12 rounded-full border border-slate-300 bg-white 
               text-slate-900 hover:bg-slate-900 hover:text-white transition
               dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 
               dark:hover:bg-slate-100 dark:hover:text-slate-900"
                        >
                            ‹
                        </button>

                        {/* Next */}
                        <button
                            id="t-next"
                            aria-label="Next"
                            className="h-12 w-12 rounded-full bg-slate-900 text-white 
               hover:bg-slate-800 transition
               dark:bg-slate-100 dark:text-slate-900 
               dark:hover:bg-white"
                        >
                            ›
                        </button>
                    </div>

                </div>

                {/* RIGHT = 50% */}
                <div className="lg:pl-2">
                    <TestimonialsSlider items={items} />
                </div>
            </div>
        </section>
    );
}
