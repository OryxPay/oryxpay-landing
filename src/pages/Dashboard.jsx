import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import {
  LayoutDashboard, TrendingUp, Wallet, FileText, Percent,
  ArrowLeftRight, User, Key, Webhook, ChevronLeft, RefreshCw,
  Eye, EyeOff, TrendingDown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const chartData = [
  { date: "26/02", vendas: 120 },
  { date: "27/02", vendas: 310 },
  { date: "28/02", vendas: 680 },
  { date: "29/02", vendas: 720 },
  { date: "01/03", vendas: 540 },
  { date: "02/03", vendas: 139 },
  { date: "03/03", vendas: 480 },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: TrendingUp, label: "Vendas" },
  { icon: Wallet, label: "Saldo" },
  { icon: FileText, label: "Extratos" },
  { icon: Percent, label: "Taxas" },
  { icon: ArrowLeftRight, label: "Movimentações" },
  { icon: User, label: "Minha Conta" },
  { icon: Key, label: "Credenciais de API" },
  { icon: Webhook, label: "Webhooks" },
];

const periods = ["Hoje", "7 dias", "14 dias", "30 dias"];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [hideValues, setHideValues] = useState(false);
  const [activePeriod, setActivePeriod] = useState("30 dias");

  const fmt = (v) => hideValues ? "R$ ••••" : v;

  return (
    <div className="flex h-screen bg-[#0f1117] text-white overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${sidebarOpen ? "w-56" : "w-14"} transition-all duration-300 bg-[#0a0c12] border-r border-white/5 flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-5 border-b border-white/5">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/6554be151_baaf874f-52a9-419d-a181-07c2a5de2184.png"
            alt="Oryxpay"
            className="w-7 h-7 object-contain flex-shrink-0"
          />
          {sidebarOpen && <span className="font-bold text-base tracking-tight">OryxPay</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 space-y-0.5 px-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 ${
                active
                  ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-3 p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors flex items-center justify-center"
        >
          <ChevronLeft className={`w-4 h-4 transition-transform ${!sidebarOpen ? "rotate-180" : ""}`} />
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-end px-6 py-3 border-b border-white/5 bg-[#0a0c12]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xs font-bold">
            IG
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400 text-sm mt-0.5">Olá, IGOR GABRIEL DE SOUSA SILVA. Bem-vindo ao seu painel de controle.</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white gap-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Atualizar
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setHideValues(!hideValues)}
                className="border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white gap-2"
              >
                {hideValues ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                {hideValues ? "Mostrar valores" : "Esconder valores"}
              </Button>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-green-600 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/80 text-xs font-medium">Entradas hoje</span>
                <TrendingUp className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-2xl font-black text-white">{fmt("R$ 569,73")}</p>
              <p className="text-white/60 text-xs mt-1">Hoje</p>
            </div>

            <div className="bg-green-500 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/80 text-xs font-medium">Entradas do mês</span>
                <TrendingUp className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-2xl font-black text-white">{fmt("R$ 2.166,74")}</p>
              <p className="text-white/60 text-xs mt-1">Este mês</p>
            </div>

            <div className="bg-blue-600 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/80 text-xs font-medium">Saldo disponível</span>
                <Wallet className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-2xl font-black text-white">{fmt("R$ 950,09")}</p>
              <span className="text-white/70 text-xs underline cursor-pointer">Detalhes</span>
            </div>

            <div className="bg-red-500 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/80 text-xs font-medium">Saídas hoje</span>
                <TrendingDown className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-2xl font-black text-white">{fmt("R$ 387,42")}</p>
              <p className="text-white/60 text-xs mt-1">Hoje</p>
            </div>

            <div className="bg-red-600 rounded-xl p-4">
              <div className="flex justify-between items-start mb-3">
                <span className="text-white/80 text-xs font-medium">Saídas do mês</span>
                <TrendingDown className="w-4 h-4 text-white/60" />
              </div>
              <p className="text-2xl font-black text-white">{fmt("R$ 1.216,65")}</p>
              <p className="text-white/60 text-xs mt-1">Este mês</p>
            </div>
          </div>

          {/* Chart */}
          <div className="bg-[#0a0c12] border border-white/5 rounded-xl p-6">
            <div className="flex items-start justify-between mb-1">
              <div>
                <h2 className="text-white font-bold text-base">Análise de vendas</h2>
                <p className="text-gray-400 text-xs mt-0.5">Entradas e saídas no período selecionado.</p>
              </div>
              <div className="flex gap-1.5">
                {periods.map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePeriod(p)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                      activePeriod === p
                        ? "bg-cyan-500 text-white"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6" style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#1a1d2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                    labelStyle={{ color: "#e5e7eb" }}
                    formatter={(v) => [`R$ ${v.toFixed(2).replace(".", ",")}`, "Vendas"]}
                  />
                  <Area type="monotone" dataKey="vendas" stroke="#818cf8" strokeWidth={2.5} fill="url(#colorVendas)" dot={false} activeDot={{ r: 6, fill: "#818cf8" }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="px-6 py-3 border-t border-white/5 text-gray-500 text-xs">
          © 2026. OryxPay. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}