"use client";

import { motion } from "framer-motion";

export default function CtaFooter() {
  return (
    <>
      <section className="max-w-[1180px] mx-auto px-6 pb-28 md:pb-36" id="install">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden bg-gradient-to-br from-panel to-bg-2 border border-border rounded-[20px] px-8 py-14 md:px-16 md:py-[72px] text-center"
        >
          <div
            className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
            style={{
              background:
                "radial-gradient(circle, rgba(245,166,35,0.12), transparent 70%)",
            }}
          />
          <h2 className="relative text-[28px] md:text-[38px] font-extrabold tracking-[-1px] mb-4">
            Your .env files, encrypted and
            <br />
            always in sync
          </h2>
          <p className="relative text-muted text-[17px] mb-8">
            Free, open source, and ready in under a minute.
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 bg-amber text-bg px-[26px] py-[15px] rounded-[9px] font-bold text-base hover:bg-amber-light transition-colors"
          >
            Get started on GitHub →
          </motion.a>
        </motion.div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
          <div className="font-mono font-extrabold text-base">
            Dot<span className="text-amber">Sync</span>
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-sm hover:text-text transition-colors"
            >
              GitHub
            </a>
            <a href="#features" className="text-muted text-sm hover:text-text transition-colors">
              Features
            </a>
            <a href="#how" className="text-muted text-sm hover:text-text transition-colors">
              Docs
            </a>
          </div>
          <p className="text-muted-2 text-[13.5px]">
            © 2026 DotSync. Open source under MIT.
          </p>
        </div>
      </footer>
    </>
  );
}
