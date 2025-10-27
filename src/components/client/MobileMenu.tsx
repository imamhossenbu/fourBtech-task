"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                aria-label="Toggle menu"
                onClick={() => setOpen(v => !v)}
                className="p-2 rounded-md border hover:bg-muted transition"
            >
                {open ? <FiX className="text-foreground text-xl" /> : <FiMenu className="text-foreground text-xl" />}
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-16 border-b bg-background">
                    <div className="container py-3 space-y-2">
                        {["Features", "Security", "Pricing", "FAQ"].map(item => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2"
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link
                            href="#get-started"
                            className="inline-flex w-full justify-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90"
                            onClick={() => setOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
