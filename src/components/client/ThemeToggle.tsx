"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ className = "" }: { className?: string }) {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const ls = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const dark = ls ? ls === "dark" : prefersDark;
            setIsDark(dark);
        } catch { }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark, mounted]);

    if (!mounted) {
        return (
            <button
                aria-label="Toggle theme"
                className={`h-10 w-10 rounded-lg border flex items-center justify-center ${className}`}
            >
                <span className="inline-block h-4 w-4 rounded-full bg-muted-foreground/40" />
            </button>
        );
    }

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setIsDark(v => !v)}
            className={`h-10 w-10 rounded-lg border flex items-center justify-center hover:bg-muted transition ${className}`}
        >
            {isDark ? (
                <FiSun className="text-foreground text-lg" />
            ) : (
                <FiMoon className="text-foreground text-lg" />
            )}
        </button>
    );
}
