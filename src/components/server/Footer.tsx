
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-[92%] mx-auto">
            <div
                className="
          relative overflow-hidden rounded-2xl
          bg-[radial-gradient(80%_60%_at_50%_90%,#E9D5FF_15%,transparent_55%)]
          dark:bg-[radial-gradient(80%_60%_at_50%_90%,#3b2b63_15%,transparent_55%)]
          px-5 sm:px-8 lg:px-10
        "
            >
                {/* top content */}
                <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-3">

                    <div>
                        <Link href="/" aria-label="Easy Pay Home" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Easy Pay"
                                width={30}
                                height={30}
                                className="w-12 h-12 object-contain pt-2"
                                priority
                            />
                            <span className="text-xl font-semibold text-[#0B1020] dark:text-white">
                                Easy <span className="opacity-80">Pay</span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                            Easy Pay offers secure, seamless, and fee-free payments for effortless global
                            transactions.
                        </p>
                    </div>

                    {/* link columns */}
                    <div className="lg:col-span-2 grid grid-cols-2 gap-8 sm:gap-12">
                        <div>
                            <h4 className="text-sm font-semibold text-[#0B1020] dark:text-white">
                                Short links
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><Link href="#features" className="text-gray-700 hover:underline dark:text-gray-200">Features</Link></li>
                                <li><Link href="#how-it-works" className="text-gray-700 hover:underline dark:text-gray-200">How it works</Link></li>
                                <li><Link href="#security" className="text-gray-700 hover:underline dark:text-gray-200">Security</Link></li>
                                <li><Link href="#testimonial" className="text-gray-700 hover:underline dark:text-gray-200">Testimonial</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-[#0B1020] dark:text-white">
                                Other pages
                            </h4>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li><Link href="/privacy-policy" className="text-gray-700 hover:underline dark:text-gray-200">Privacy policy</Link></li>
                                <li><Link href="/terms" className="text-gray-700 hover:underline dark:text-gray-200">Terms &amp; conditions</Link></li>
                                <li><Link href="/404" className="text-gray-700 hover:underline dark:text-gray-200">404</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* divider */}
                <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                {/* bottom line */}
                <div className="py-5 text-center">
                    <p className="text-[13px] text-gray-500 dark:text-gray-400">
                        2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB
                    </p>
                </div>
            </div>
        </footer>
    );
}
