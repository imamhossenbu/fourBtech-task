"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
    delay?: number;
    y?: number;
    once?: boolean;
    className?: string;
}>;

export default function Reveal({ children, delay = 0, y = 12, once = true, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once, amount: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
