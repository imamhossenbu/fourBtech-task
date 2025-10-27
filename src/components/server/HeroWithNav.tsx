import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/client/ThemeToggle";
import MobileMenu from "../client/MobileMenu";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function HeroWithNav() {
    return (
        <section
            className="relative mx-auto mt-2 lg:h-screen  w-[97%] overflow-hidden rounded-2xl
      bg-[linear-gradient(120deg,#ECF2FF_0%,#FEF6DF_50%,#DFC9F5_100%)]
      dark:bg-[linear-gradient(120deg,#0f172a_0%,#1e293b_100%)]"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
                {/* NAVBAR */}
                <header className="flex h-20 items-center justify-between">
                    <Link href="/" aria-label="EasyPay Home" className="flex select-none items-center">
                        <Image
                            src="/logo.png"
                            width={45}
                            height={60}
                            alt="EasyPay logo"
                            className="w-auto object-contain pt-2"
                            priority
                        />
                        <span className="text-xl font-semibold tracking-tight text-[#0B1020] dark:text-white">
                            Easy <span className="opacity-80">Pay</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-10 text-[15px] font-medium md:flex">
                        {["Features", "Pricing", "Security", "Benefits"].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-[#374151] transition hover:text-[#111827] dark:text-gray-300 dark:hover:text-white"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeToggle />
                        <Link
                            href="#contact"
                            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-600 px-5 
              font-medium text-white shadow-sm transition hover:bg-black"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile actions */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <MobileMenu />
                    </div>
                </header>

                {/* HERO */}
                <div className="relative">
                    <div className="grid items-center gap-2 md:grid-cols-12  lg:gap-6">
                        {/* LEFT  */}
                        <div className="order-2 space-y-4 md:order-1 md:col-span-6 lg:col-span-5">
                            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                                Easy Payment
                            </p>
                            <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#0B1020] dark:text-white relative">
                                Pay{" "}
                                <span className="relative inline-block">
                                    fast and smarter
                                    {/* custom underline SVG */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 300 10"
                                        className="absolute left-0 bottom-0 w-full h-2.5"
                                    >
                                        <path
                                            d="M2 8 Q150 0 298 8"
                                            stroke="#2563EB"
                                            strokeWidth="5"
                                            fill="transparent"
                                            strokeLinecap="round"
                                            opacity="0.9"
                                        />
                                    </svg>
                                </span>
                                <br />
                                from anywhere
                            </h1>

                            <p className="max-w-prose text-gray-600 dark:text-gray-300">
                                Experience the future of payments: fast, secure, and tailored for the next
                                generation’s convenience and trust.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                {/* App Store Button */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white 
               transition hover:scale-105 active:scale-95"
                                >
                                    <FaApple className="text-2xl" />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[10px] font-light tracking-wide uppercase">
                                            Download on the
                                        </span>
                                        <span className="text-base font-semibold">App Store</span>
                                    </div>
                                </a>

                                {/* Google Play Button */}
                                <a
                                    href="#"
                                    className="flex items-center gap-3 rounded-xl bg-black px-5 py-3 text-white 
               transition hover:scale-105 active:scale-95"
                                >
                                    <FaGooglePlay className="text-xl" />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-[10px] font-light tracking-wide uppercase">
                                            Get it on
                                        </span>
                                        <span className="text-base font-semibold">Google Play</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* RIGHT (big image) */}
                        <div className="order-1 relative md:order-2 md:col-span-6 lg:col-span-7">
                            <div
                                className="
      relative mx-auto 
      h-72 w-full        
      sm:h-[380px]        
      md:h-[480px] 
      lg:h-[440px]
    "
                            >
                                <Image
                                    src="/hero.png"
                                    alt="User holding phone"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 95vw, (max-width: 1024px) 50vw, 55vw"
                                    className="
        object-cover
        sm:scale-[1.15]   
        md:translate-x-2 
        lg:scale-[1.18] 
        lg:translate-x-6
      "
                                    style={{ transform: "scaleX(-1)" }}
                                />
                            </div>
                        </div>

                    </div>


                    <div className="pointer-events-none">
                        {/* User badge */}
                        <div
                            className="pointer-events-auto absolute  top-20 md:top-40 flex items-center gap-3 rounded-xl
              bg-white px-2 py-3 shadow-lg dark:bg-gray-800 -right-8 sm:right-8 md:right-10 lg:right-2"
                        >
                            <div className="flex -space-x-2">
                                <Image src="/user1.png" alt="" width={32} height={32} className="rounded-full border" />
                                <Image src="/user2.png" alt="" width={32} height={32} className="rounded-full border" />
                                <Image src="/user3.png" alt="" width={32} height={32} className="rounded-full border" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">120K+</p>
                                <p className="text-xs text-gray-500">Active users</p>
                            </div>
                        </div>

                        {/* Payment card */}
                        <div
                            className="pointer-events-auto absolute bottom-96 md:bottom-6 left-1/2 -translate-x-1/2 rounded-xl
              bg-white px-5 py-4 shadow-lg dark:bg-gray-800 md:left-[58%] md:translate-x-0"
                        >
                            <p className="mb-1 text-sm font-bold text-black dark:text-white">Payment Received</p>
                            <p className="text-lg font-semibold text-blue-600">+35,890.00</p>
                            <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                                <span>1st Jan, 2024</span>
                                <span className="font-medium text-green-500">3.09%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
