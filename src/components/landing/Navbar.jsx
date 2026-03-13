import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "https://app.oryxpay.com.br/auth/register";
const LOGIN_URL = "https://app.oryxpay.com.br/auth/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Sobre nós", href: "#sobre" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Preços", href: "#precos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#101F43]/90 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/ea1553b4d_logo-oryx.png" 
            alt="OryxPay" 
            className="w-10 h-10 object-contain"
          />
          <span className="text-white font-bold text-xl tracking-widest uppercase">ORYXPAY</span>
        </div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-gray-300 hover:text-white hover:bg-white/5"
            onClick={() => {
              window.open(LOGIN_URL, "_blank", "noopener,noreferrer");
            }}
          >
            ENTRAR
          </Button>
          <Button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold px-6 rounded-full shadow-lg shadow-cyan-500/20"
            onClick={() => {
              window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
            }}
          >
            COMECE AGORA
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#101F43] border-t border-white/5 px-6 pb-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-gray-400 hover:text-white transition-colors border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full mt-4 bg-gradient-to-r from-[#43BEEF] to-[#1F4B8A] hover:from-[#43BEEF]/90 hover:to-[#1F4B8A]/90 text-white font-semibold rounded-full shadow-lg shadow-[#43BEEF]/20"
            onClick={() => {
              window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
            }}
          >
            COMECE AGORA
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}