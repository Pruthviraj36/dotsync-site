"use client";

import { motion } from "framer-motion";

export default function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="bg-bg-2 border border-border rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="h-[38px] bg-[#10141C] border-b border-border flex items-center px-4 gap-2 relative">
        <span className="w-[11px] h-[11px] rounded-full bg-red" />
        <span className="w-[11px] h-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="w-[11px] h-[11px] rounded-full bg-green" />
        <span className="absolute left-0 right-0 text-center font-mono text-xs text-muted-2">
          .env — dotsync
        </span>
      </div>

      <div className="p-6 font-mono text-[15px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-muted line-through decoration-red mb-3"
        >
          DB_PASSWORD=hunter2
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="text-muted line-through decoration-red mb-3"
        >
          STRIPE_KEY=sk_live_x9...
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="flex items-center gap-2 text-amber text-[13px] my-[18px] pl-[2px]"
        >
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ delay: 1.6, duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
          >
            ↓
          </motion.span>
          encrypt
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="bg-panel border border-amber/30 rounded-lg p-4 text-amber-light text-[13px] leading-[1.7] mb-4"
        >
          7f3a:e91c:b04d:2f88:
          <br />
          a61e:9d02:c4f7:1b3a:
          <br />
          55d8:0ae3:f12c:88e0
          <div className="text-muted-2 text-xs mt-1.5">AES-256-GCM · synced ✓</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          className="bg-green-bg rounded-lg px-4 py-3.5 flex items-center gap-2.5 text-green-text text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green inline-block" />
          3 team members synced — 0 leaks
        </motion.div>

        <div className="text-muted-2 mt-[18px]">
          ${" "}
          <span className="text-text cursor-blink">_</span>
        </div>
      </div>
    </motion.div>
  );
}
