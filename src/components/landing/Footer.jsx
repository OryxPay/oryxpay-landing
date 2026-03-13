import React from "react";
import { FileText, Shield, Activity, BookOpen, Mail, MessageCircle } from "lucide-react";

const DOCS_URL = "https://app.oryxpay.com.br/docs";
const SUPPORT_WHATSAPP_URL = "https://wa.me/5511916067095";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/6554be151_baaf874f-52a9-419d-a181-07c2a5de2184.png"
                alt="OryxPay"
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-bold text-lg tracking-wide">
                ORYX<span className="text-[#43BEEF]">PAY</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Infraestrutura de pagamentos PIX para negócios digitais que querem crescer com previsibilidade e escala.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  <FileText className="w-4 h-4" /> Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  <Shield className="w-4 h-4" /> Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  <Activity className="w-4 h-4" /> Status
                </a>
              </li>
              <li>
                <a
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  <BookOpen className="w-4 h-4" /> Documentação
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@oryxpay.com.br" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  <Mail className="w-4 h-4" /> contato@oryxpay.com.br
                </a>
              </li>
              <li>
                <a
                  href={SUPPORT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> (11) 91606-7095 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} ORYXPAY. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 rounded-full bg-[#9A7B6B] inline-block" />
            Todos os sistemas operacionais
          </div>
        </div>
      </div>
    </footer>
  );
}