"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Initialize",
    desc: "Connect your project and authenticate with GitHub OAuth.",
    code: "$ dotsync init",
  },
  {
    num: "02",
    title: "Push",
    desc: "Encrypt your local .env and sync it to your team instantly.",
    code: "$ dotsync push",
  },
  {
    num: "03",
    title: "Pull",
    desc: "Teammates pull and decrypt the latest secrets, automatically.",
    code: "$ dotsync pull",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 pb-24 md:pb-32" id="how">
      <div className="max-w-[600px] mb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-amber font-bold tracking-wide mb-4 flex items-center gap-2"
        >
          <span className="opacity-60">$</span> how it works
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[32px] md:text-[40px] font-extrabold tracking-[-1px]"
        >
          Three commands. That&apos;s it.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
          >
            <span className="font-mono text-[13px] text-amber font-bold mb-4 block">
              {s.num}
            </span>
            <h3 className="text-[19px] font-bold mb-2.5">{s.title}</h3>
            <p className="text-muted text-[14.5px]">{s.desc}</p>
            <code className="block mt-4 bg-bg-2 border border-border rounded-lg px-3.5 py-3 font-mono text-[13px] text-amber-light">
              {s.code}
            </code>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
