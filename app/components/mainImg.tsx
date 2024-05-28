"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MainImgProps {
    src: string;
    alt: string;
    className?: string;
    variants?: {};
    transition?: {};
}

export default function MainImg({src, alt, className = "", variants, transition}: MainImgProps) {
    return (
        <motion.div 
            className={className}
            variants={variants}
            initial="initial"
            animate="animate"
            transition={transition}
        >
            <Image src={src} alt={alt} fill={true} />
        </motion.div>
    )
}