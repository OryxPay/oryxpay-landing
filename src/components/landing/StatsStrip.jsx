import React from "react";
import { TrendingUp, Users, Globe } from "lucide-react";

const stats = [
  { icon: TrendingUp, label: "+300 mil vendas por ano", color: "text-[#43BEEF]" },
  { icon: Users, label: "+30 mil usuários", color: "text-[#43BEEF]" },
  { icon: Globe, label: "Aceito em +190 países", color: "text-[#43BEEF]" },
];

const items = [...stats, ...stats, ...stats, ...stats];

export default function StatsStrip() {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/5 overflow-hidden py-6">
      <div
        className="flex"
        style={{
          animation: "stats-scroll 20s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-[#43BEEF]" />
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
            <span className="text-gray-300 font-medium text-sm">{stat.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes stats-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}