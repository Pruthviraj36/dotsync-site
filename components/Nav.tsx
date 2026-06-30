"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[1180px] mx-auto px-6 flex items-center justify-between py-6"
    >
      <div className="font-mono font-extrabold text-xl tracking-tight">
        Dot<span className="text-amber">Sync</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-muted text-[15px] font-medium hover:text-text transition-colors">
          Features
        </a>
        <a href="#how" className="text-muted text-[15px] font-medium hover:text-text transition-colors">
          How it works
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted text-[15px] font-medium hover:text-text transition-colors"
        >
          GitHub
        </a>
        <a
          href="#install"
          className="bg-amber text-bg px-[18px] py-[10px] rounded-lg font-bold text-[15px] hover:bg-amber-light transition-colors"
        >
          Get started
        </a>
      </div>
    </motion.nav>
  );
}
