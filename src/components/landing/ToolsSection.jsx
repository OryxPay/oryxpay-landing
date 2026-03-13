import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Landmark } from "lucide-react";

const tools = [
  {
    id: "teste-ab",
    icon: FlaskConical,
    label: "Teste A/B",
    title: "Teste A/B",
    description: "Compare diferentes versões do seu checkout e descubra qual converte mais. Tome decisões baseadas em dados reais e aumente suas vendas com inteligência.",
    highlight: "+32% conversão",
  },
  {
    id: "liquidante",
    icon: Landmark,
    label: "Escolha sua Liquidante",
    title: "Escolha sua Liquidante",
    description: "O nosso sistema analisa a melhor liquidante para você automaticamente. Maximizamos sua aprovação e seus ganhos escolhendo a rota certa para cada transação.",
    highlight: "Aprovação máxima",
  },
];

export default function ToolsSection() {
  const [active, setActive] = useState("teste-ab");
  const activeTool = tools.find((t) => t.id === active);

  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            Conversão e Aumento de Vendas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Ferramentas para impulsionar suas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Vendas
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActive(tool.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${
                active === tool.id
                  ? "bg-cyan-400/10 border-cyan-400/40 text-cyan-400"
                  : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
              }`}
            >
              <tool.icon className="w-4 h-4" />
              {tool.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl border border-white/10 bg-[#111111] overflow-hidden"
          >
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-semibold w-fit mb-6">
                  {activeTool.highlight}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeTool.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">{activeTool.description}</p>

                {active === "liquidante" && (
                  <div className="mt-6 p-5 rounded-xl bg-[#0d0d0d] border border-cyan-400/20">
                    <p className="text-white text-lg font-semibold mb-4">
                      O nosso sistema analisa a melhor liquidante para você:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-gray-300 font-medium">Simpay Conversão</span>
                          <span className="text-cyan-400 font-bold">85%</span>
                        </div>
                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1 }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-gray-300 font-medium">Blupay Conversão</span>
                          <span className="text-blue-400 font-bold">52%</span>
                        </div>
                        <div className="h-2.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "52%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-[#0d0d0d] p-8 md:p-12 flex items-center justify-center">
                <div className="w-full max-w-sm">
                  <div className="bg-[#1a1a1a] rounded-xl p-6 border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center">
                        <activeTool.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {active === "liquidante" ? "Liquidantes" : activeTool.title}
                        </p>
                        <p className="text-gray-500 text-xs">Ativo</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {active === "liquidante" ? (
                        <>
                          {[{ label: "Simpay", val: 85 }, { label: "Blupay", val: 52 }].map(({ label, val }, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>{label}</span>
                                <span>{val}%</span>
                              </div>
                              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${val}%` }}
                                  transition={{ duration: 1, delay: i * 0.2 }}
                                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        [85, 72, 90].map((val, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                              <span>Versão {["A", "B", "C"][i]}</span>
                              <span>{val}%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${val}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}