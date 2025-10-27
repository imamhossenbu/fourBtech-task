"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle({ className = "" }: { className?: string }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const savedTheme = localStorage.getItem("theme");
        const dark = savedTheme ? savedTheme === "dark" : prefersDark;
        setIsDark(dark);
        document.documentElement.classList.toggle("dark", dark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark", newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`h-10 w-10 rounded-lg border flex items-center justify-center transition hover:bg-muted/30 ${className}`}
        >
            {isDark ? <FiSun className="text-lg" /> : <FiMoon className="text-lg" />}
        </button>
    );
}
