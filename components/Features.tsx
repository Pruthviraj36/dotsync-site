"use client";

import { motion } from "framer-motion";
import { Lock, Zap, GitFork, FileText, Puzzle, ShieldOff } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Client-side encryption",
    desc: "Secrets are encrypted with AES-256-GCM on your machine before they ever leave it. Plaintext never touches a server.",
  },
  {
    icon: Zap,
    title: "One command sync",
    desc: "Push and pull encrypted .env files across your whole team with a single CLI command. No setup ceremony.",
  },
  {
    icon: GitFork,
    title: "GitHub OAuth",
    desc: "No new accounts to manage. Sign in with the GitHub identity your team already uses.",
  },
  {
    icon: FileText,
    title: "Open source",
    desc: "The full source is public. Verify exactly what DotSync does with your secrets, no trust required.",
  },
  {
    icon: Puzzle,
    title: "Drop-in workflow",
    desc: "Works alongside your existing .env files and tooling. No migration, no new file formats to learn.",
  },
  {
    icon: ShieldOff,
    title: "Zero server exposure",
    desc: "Even if the sync server is compromised, attackers get ciphertext. Keys never leave your device.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Features() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 py-24 md:py-32" id="features">
      <div className="max-w-[600px] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-amber font-bold tracking-wide mb-4 flex items-center gap-2"
        >
          <span className="opacity-60">$</span> why dotsync
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[32px] md:text-[40px] font-extrabold tracking-[-1px] mb-4"
        >
          Secure by default,
          <br />
          simple in practice
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[17px] text-muted"
        >
          Every dev team shares secrets. Most do it badly. DotSync makes the
          secure path the easy path.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border rounded-2xl overflow-hidden">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            whileHover={{ backgroundColor: "#181E29" }}
            className="bg-bg-2 p-9 transition-colors"
          >
            <div className="w-11 h-11 rounded-[10px] bg-amber/10 flex items-center justify-center mb-5">
              <Icon size={20} className="text-amber" />
            </div>
            <h3 className="text-lg font-bold mb-2.5">{title}</h3>
            <p className="text-[14.5px] text-muted leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
