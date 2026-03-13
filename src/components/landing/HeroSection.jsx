import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "https://app.oryxpay.com.br/auth/register";
const SUPPORT_WHATSAPP_URL = "https://wa.me/5511916067095";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#101F43]">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#43BEEF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#1F4B8A]/30 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#43BEEF]/30 bg-[#43BEEF]/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#43BEEF] animate-pulse" />
            <span className="text-[#43BEEF] text-sm font-medium">🏛️ REGULADA pelo Banco Central do Brasil</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Pagamentos estáveis.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#43BEEF] to-[#D9CBB2]">
            Conciliação simples.
          </span>
          {" "}Escala sem dor.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          PIX com API de alta performance e painel para acompanhar tudo em tempo real — do checkout ao repasse.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#43BEEF] to-[#1F4B8A] hover:from-[#43BEEF]/90 hover:to-[#1F4B8A]/90 text-white font-bold px-8 py-6 rounded-full text-base group shadow-lg shadow-[#43BEEF]/20"
            onClick={() => {
              window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
            }}
          >
            COMECE AGORA
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#9A7B6B] text-[#9A7B6B] hover:bg-[#9A7B6B]/10 bg-transparent px-8 py-6 rounded-full text-base"
            onClick={() => {
              window.open(SUPPORT_WHATSAPP_URL, "_blank", "noopener,noreferrer");
            }}
          >
            FALE CONOSCO
          </Button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-6"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-[#9A7B6B]">⚡</span>
            <span>Liquidação programável</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-[#9A7B6B]">🔔</span>
            <span>Webhooks em tempo real</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="text-[#9A7B6B]">🎧</span>
            <span>Suporte humano 24/7</span>
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/b321acfb5_image.png"
              alt="Dashboard OryxPay"
              className="w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-400/10 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}