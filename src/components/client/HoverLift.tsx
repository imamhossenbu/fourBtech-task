"use client";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function HoverLift({ children }: PropsWithChildren) {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            {children}
        </motion.div>
    );
}
