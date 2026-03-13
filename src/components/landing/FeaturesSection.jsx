import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, HeadphonesIcon, CreditCard, ArrowDownToLine, Code } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Conta aprovada em minutos",
    description: "Time de análise e aprovação mais rápido do mercado. Liberamos sua conta em minutos, para você começar a vender agora mesmo.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: CheckCircle,
    title: "Aprovação Instantânea de Produtos",
    description: "Aprove seus produtos de forma rápida e simplificada, garantindo uma aprovação imediata e sem complicações.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Único Gateway com suporte dedicado 24 horas por dia, 7 dias por semana pelo WhatsApp.",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: CreditCard,
    title: "Cartão D+1 e PIX instantâneo",
    description: "Disponibilizamos o valor das suas vendas por cartão de crédito a partir de 1º dia útil, boleto D+2 e PIX na HORA.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: ArrowDownToLine,
    title: "Saque para múltiplos PIX",
    description: "Efetue seus saques automáticos para a chave PIX e banco de sua preferência.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Code,
    title: "Venda por API ou Checkout",
    description: "Integre nossa api facilmente para cash in e cash out, ou venda conectando a diversos checkouts parceiros.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeaturesSection() {
  return (
    <section id="solucoes" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Soluções</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Por que escolher a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              OryxPay?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluções completas para você vender mais, receber na hora e crescer sem limites.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative rounded-2xl border border-white/5 bg-[#111111] p-8 hover:border-cyan-400/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}