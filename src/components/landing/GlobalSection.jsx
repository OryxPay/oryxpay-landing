import React from "react";
import { motion } from "framer-motion";
import { Globe, Languages, Banknote, CreditCard } from "lucide-react";

const globalStats = [
  { icon: Languages, value: "+10", label: "idiomas", color: "from-blue-400 to-cyan-400" },
  { icon: Globe, value: "+190", label: "países", color: "from-lime-400 to-green-400" },
  { icon: Banknote, value: "+130", label: "moedas", color: "from-purple-400 to-pink-400" },
  { icon: CreditCard, value: "+300", label: "métodos de pagamento", color: "from-orange-400 to-yellow-400" },
];

export default function GlobalSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 text-sm font-semibold tracking-widest uppercase">Alcance Global</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Venda{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
              mundialmente
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Checkout que converte automaticamente moeda e idioma, garantindo mais conversões e menos barreiras.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 text-center hover:border-lime-400/20 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7 text-lime-400" />
              </div>
              <div className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Map visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="rounded-2xl border border-white/5 bg-[#111111] p-8 md:p-12">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-lime-400/10 hover:bg-lime-400/30 transition-colors duration-300"
                  style={{ opacity: 0.3 + Math.random() * 0.7 }}
                />
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-6">Presença ativa em mais de 190 países ao redor do mundo</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}