"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";

export default function Hero() {
  const copyInstall = async () => {
    await navigator.clipboard.writeText("go install github.com/Pruthviraj36/dotsync@latest");
  };

  return (
    <header className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-12 md:gap-16 items-center pt-12 pb-16 md:pt-20 md:pb-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-amber font-bold tracking-wide mb-6 flex items-center gap-2.5"
        >
          <span className="opacity-60">$</span> dotsync init
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[42px] md:text-[60px] font-black leading-[1.04] tracking-[-2px] mb-6"
        >
          Stop committing
          <br />
          secrets. <span className="text-amber">Start syncing</span>
          <br />
          them.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[19px] text-muted max-w-[480px] mb-9"
        >
          DotSync encrypts your .env secrets client-side and syncs them across
          your team in seconds. No plaintext, no Slack messages, no leaked API
          keys.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3.5 flex-wrap mb-10"
        >
          <a
            href="#install"
            className="bg-amber text-bg px-[26px] py-[15px] rounded-[9px] font-bold text-base inline-flex items-center gap-2 hover:bg-amber-light hover:-translate-y-0.5 transition-all"
          >
            Get started free →
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-text px-6 py-[15px] rounded-[9px] font-semibold text-base border border-border hover:border-amber hover:bg-amber/[0.06] transition-all"
          >
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-mono text-sm bg-bg-2 border border-border rounded-lg px-[18px] py-3.5 flex items-center justify-between max-w-[420px] text-muted"
        >
          <span>
            $ <span className="text-amber-light">go install github.com/Pruthviraj36/dotsync@latest</span>
          </span>
          <button
            onClick={copyInstall}
            className="bg-transparent border-none text-muted-2 cursor-pointer text-[13px] font-mono px-2 py-1 rounded hover:text-text hover:bg-panel transition-colors"
          >
            copy
          </button>
        </motion.div>
      </div>

      <Terminal />
    </header>
  );
}
