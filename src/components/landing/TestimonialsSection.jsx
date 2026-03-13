import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Matheus Wanzeller",
    role: "Especialista em Trackeamento",
    handle: "@matheus.track",
    text: "A Oryxpay revolucionou a forma como gerencio meus pagamentos. O checkout é absurdamente rápido e minhas taxas de conversão subiram muito.",
    rating: 5,
  },
  {
    name: "Filipe Santana",
    role: "Infoprodutor 8D",
    handle: "@soufili",
    text: "Migrei para a Oryxpay e meu faturamento cresceu 40% só com o Upsell 1-Click e o Secret Order Bump. Ferramenta indispensável.",
    rating: 5,
  },
  {
    name: "Carolina Mendes",
    role: "Criadora de Cursos",
    handle: "@carolmendes",
    text: "Finalmente uma plataforma que me permite vender globalmente sem complicação. O suporte é excepcional e as ferramentas são de outro nível.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase" style={{color:"#9A7B6B"}}>Depoimentos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            O que nossos clientes{" "}
            <span className="text-transparent bg-clip-text" style={{backgroundImage:"linear-gradient(to right, #9A7B6B, #D9CBB2)"}}>
              estão dizendo
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-[#9A7B6B]/20 transition-all duration-500 group"
            >
              <Quote className="w-8 h-8 mb-4" style={{color:"rgba(154,123,107,0.2)"}} />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4" style={{color:"#9A7B6B", fill:"#9A7B6B"}} />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background:"linear-gradient(to bottom right, #9A7B6B, #D9CBB2)"}}>
                  <span className="text-black font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}