import React from "react";

const row1 = [
  { time: "08:29", amount: "R$ 8.500,00" },
  { time: "15:47", amount: "R$ 50.238,11" },
  { time: "21:15", amount: "R$ 9.238,11" },
  { time: "17:48", amount: "R$ 13.281,54" },
  { time: "11:59", amount: "R$ 1.291,45" },
  { time: "02:43", amount: "R$ 1.597,45" },
  { time: "23:04", amount: "R$ 7.000,00" },
  { time: "10:02", amount: "R$ 4.238,91" },
];

const row2 = [
  { time: "12:31", amount: "R$ 4.238,92" },
  { time: "09:25", amount: "R$ 575,38" },
  { time: "07:14", amount: "R$ 22.100,00" },
  { time: "18:33", amount: "R$ 3.450,00" },
  { time: "14:20", amount: "R$ 98.750,00" },
  { time: "06:55", amount: "R$ 650,00" },
  { time: "22:11", amount: "R$ 15.300,00" },
  { time: "19:40", amount: "R$ 6.720,00" },
];

function WithdrawalCard({ time, amount }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 min-w-[220px]">
      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699e511f0f004a83c19334c2/fbd3bee87_logo-oryx.png"
          alt="OryxPay"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col min-w-0 flex-1">
        <span className="text-white text-xs font-semibold">Saque realizado!</span>
        <span className="text-gray-400 text-xs">Valor: {amount}</span>
      </div>
      <span className="text-gray-600 text-xs ml-auto pl-2 flex-shrink-0">{time}</span>
    </div>
  );
}

export default function WithdrawalsCarousel() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <div className="bg-[#0a0a0a] py-6 overflow-hidden border-y border-white/5 flex flex-col gap-3">
      <div
        className="flex gap-3"
        style={{ animation: "withdraw-left 25s linear infinite", width: "max-content" }}
      >
        {doubled1.map((item, i) => (
          <WithdrawalCard key={i} time={item.time} amount={item.amount} />
        ))}
      </div>

      <div
        className="flex gap-3"
        style={{ animation: "withdraw-right 20s linear infinite", width: "max-content" }}
      >
        {doubled2.map((item, i) => (
          <WithdrawalCard key={i} time={item.time} amount={item.amount} />
        ))}
      </div>

      <style>{`
        @keyframes withdraw-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes withdraw-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}