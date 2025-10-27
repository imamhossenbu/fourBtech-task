"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

/**
 * A lightweight client-only motion wrapper.
 * Keeps the server component clean — just import and wrap what you want animated.
 */
export default function MotionWrapper({
    children,
    className,
    duration = 20,
    pauseOnHover = true,
}: PropsWithChildren<{
    className?: string;
    duration?: number;
    pauseOnHover?: boolean;
}>) {
    return (
        <motion.div
            className={className}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                duration,
                ease: "linear",
                repeat: Infinity,
            }}
            whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
            style={{ willChange: "transform" }}
        >
            {children}
        </motion.div>
    );
}
