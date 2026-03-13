import React from "react";
import { motion } from "framer-motion";
import { Plug, CreditCard, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Plug className="w-6 h-6 text-white" />,
    title: "Conecte",
    description: "Integre via API REST ou use nossos plugins prontos para as principais plataformas",
  },
  {
    number: "02",
    icon: <CreditCard className="w-6 h-6 text-white" />,
    title: "Cobre",
    description: "Gere links de pagamento, QR codes PIX ou checkout embarcado em minutos",
  },
  {
    number: "03",
    icon: <BarChart2 className="w-6 h-6 text-white" />,
    title: "Concilie e repasse",
    description: "Acompanhe tudo em tempo real, programe saques e exporte relatórios completos",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">Como funciona</h2>
          <p className="text-gray-400 mt-3 text-base">Do setup à primeira transação em menos de uma hora</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#131313] border border-white/10 rounded-2xl p-6"
            >
              <div className="absolute top-4 right-4 bg-[#43BEEF] text-white text-xs font-bold px-2 py-1 rounded-md">
                {step.number}
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#1e1e3a] flex items-center justify-center mb-5">
                {step.icon}
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}