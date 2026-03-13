import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Copy } from "lucide-react";

const tabs = ["CURL", "NODE", "PHP"];
const DOCS_URL = "https://app.oryxpay.com.br/docs";

const codeSnippets = {
  CURL: `curl -X POST https://api.oryxpay.com.br/v1/charges \\
  -H "Authorization: Bearer SUA_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 15000,
    "customer": {
      "name": "João Silva",
      "email": "joao@exemplo.com",
      "document": "12345678900"
    },
    "items": [
      {
        "name": "Produto Digital",
        "quantity": 1,
        "unit_price": 15000
      }
    ],
    "pix": {
      "expiration": 3600
    }
  }'`,
  NODE: `const oryxpay = require('oryxpay-node');
const client = new oryxpay.Client('SUA_API_KEY');

const charge = await client.charges.create({
  amount: 15000,
  customer: {
    name: 'João Silva',
    email: 'joao@exemplo.com',
    document: '12345678900'
  },
  items: [{
    name: 'Produto Digital',
    quantity: 1,
    unit_price: 15000
  }],
  pix: { expiration: 3600 }
});

console.log(charge.pix_qr_code);`,
  PHP: `<?php
$client = new OryxPay\\Client('SUA_API_KEY');

$charge = $client->charges->create([
  'amount' => 15000,
  'customer' => [
    'name' => 'João Silva',
    'email' => 'joao@exemplo.com',
    'document' => '12345678900',
  ],
  'items' => [[
    'name' => 'Produto Digital',
    'quantity' => 1,
    'unit_price' => 15000,
  ]],
  'pix' => ['expiration' => 3600],
]);

echo $charge->pix_qr_code;`,
};

const features = [
  "Autenticação via Bearer token",
  "Webhooks com retry automático",
  "Ambientes de sandbox e produção",
  "Logs detalhados de todas as requisições",
  "Rate limiting transparente",
];

export default function ForDevsSection() {
  const [activeTab, setActiveTab] = useState("CURL");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-[#0a0a0a] py-20 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#43BEEF]/30 bg-[#43BEEF]/10 mb-6">
            <span className="text-[#43BEEF] text-xs font-semibold">&lt;/&gt; API-first</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Para Devs</h2>
          <p className="text-gray-400 text-base mb-8 leading-relaxed">
            API REST simples e completa. Integre em minutos e escale sem limites.
            Documentação clara, SDKs prontos e webhooks confiáveis.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#43BEEF] flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#43BEEF] text-sm font-semibold hover:underline"
          >
            Ver documentação completa →
          </a>
        </motion.div>

        {/* Right - Code block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-[#111111]"
        >
          {/* Tab bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0d0d0d]">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                    activeTab === tab
                      ? "bg-[#43BEEF] text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className="text-gray-500 hover:text-gray-300 transition-colors"
              title="Copiar"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          {/* Code */}
          <pre className="p-5 text-xs text-gray-300 leading-relaxed overflow-x-auto whitespace-pre font-mono max-h-80">
            {codeSnippets[activeTab]}
          </pre>
        </motion.div>
      </div>
    </section>
  );
}