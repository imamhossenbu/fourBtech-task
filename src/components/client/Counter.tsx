"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

export default function Counter({ from = 0, to = 120000, duration = 1.2, className }: {
    from?: number; to?: number; duration?: number; className?: string;
}) {
    const mv = useMotionValue(from);
    const spring = useSpring(mv, { stiffness: 100, damping: 20 });
    const text = useTransform(spring, latest => Math.floor(latest).toLocaleString());

    useEffect(() => {
        const controls = animate(mv, to, { duration, ease: "easeOut" });
        return controls.stop;
    }, [mv, to, duration]);

    return <motion.span className={className}>{text}</motion.span>;
}
