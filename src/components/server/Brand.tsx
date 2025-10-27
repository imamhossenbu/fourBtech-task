import Image from "next/image";

export default function Brand() {
    const logos = [
        "/logo6.png",
        "/logo1.png",
        "/logo2.png",
        "/logo3.png",
        "/logo4.png",
        "/logo5.png",
    ];

    return (
        <section className="w-full overflow-hidden bg-white dark:bg-slate-900">
            <div className="relative pb-20">
                <div className="w-full">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center gap-y-14 gap-x-10 sm:gap-x-16 lg:gap-x-20">
                        {logos.map((src, i) => (
                            <li
                                key={i}
                                className="flex items-center justify-center opacity-95 filter-[grayscale(1)] dark:opacity-85 dark:invert"
                            >
                                <div className="relative w-full flex items-center justify-center">
                                    <Image
                                        src={src}
                                        alt={`Brand logo ${i + 1}`}
                                        width={900}
                                        height={500}
                                        priority={i < 2}
                                        sizes="100vw"
                                        className="object-contain w-auto h-28 sm:h-40 md:h-56 lg:h-72 xl:h-80 transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
