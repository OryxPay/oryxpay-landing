import React from "react";
import { motion } from "framer-motion";

const integrations = [
  { name: "Luna Checkout", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/352c096ee_luna_checkout_logo_transparent.png" },
  { name: "Vega Checkout", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/c598a623d_vega_logo_transparent.png" },
  { name: "GG Checkout", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/475ea65ab_logo_transparent_clean.png" },
  { name: "Astrofy", img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/bff7b591e_logo_purple_transparent.png" },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#9A7B6B] text-sm font-semibold tracking-widest uppercase">Integrações</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            Integre com seus{" "}
            <span className="text-[#9A7B6B]">
              parceiros favoritos
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {integrations.map(({ name, img }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#111111] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-lime-400/20 hover:bg-lime-400/5 transition-all duration-300"
            >
              <div className="w-32 h-32 flex items-center justify-center">
                <img src={img} alt={name} className="w-full h-full object-contain mix-blend-luminosity" />
              </div>
              <span className="text-gray-400 text-xs font-medium text-center group-hover:text-white transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}