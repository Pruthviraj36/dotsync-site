"use client";

import { motion } from "framer-motion";
import { Unlock, Lock, Zap, GitFork } from "lucide-react";

const items = [
  { icon: Unlock, label: "Open source" },
  { icon: Lock, label: "AES-256-GCM encryption" },
  { icon: Zap, label: "One CLI command" },
  { icon: GitFork, label: "GitHub OAuth" },
];

export default function TrustStrip() {
  return (
    <div className="py-10 border-t border-b border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-[1180px] mx-auto px-6 flex items-center justify-center gap-12 flex-wrap"
      >
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="font-mono text-[13px] text-muted-2 flex items-center gap-2"
          >
            <Icon size={15} className="text-amber" />
            {label}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
