import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const REGISTER_URL = "https://app.oryxpay.com.br/auth/register";
const SUPPORT_WHATSAPP_URL = "https://wa.me/5511916067095";

export default function PricingSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 80;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.3)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="precos" className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Preços</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4">
            Só pague quando{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">vender</span>
          </h2>
          <p className="text-gray-400 text-lg">Sem mensalidade, sem taxas ocultas</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-10 md:p-12 bg-gradient-to-b from-cyan-400/10 to-transparent border-2 border-cyan-400/30 backdrop-blur-sm"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/20">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-bold tracking-wide">MELHOR TAXA DO MERCADO</span>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-white font-bold text-2xl mb-2">PIX Instantâneo</h3>
            <p className="text-gray-400 text-sm">Receba na hora, sem complicação</p>
          </div>

          <div className="mb-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-6xl md:text-7xl font-black text-white">R$ 0,50</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/20">
              <span className="text-cyan-400 font-bold text-sm">D+0</span>
              <span className="text-gray-400 text-sm">• Recebimento imediato</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10 max-w-md mx-auto">
            {[
              "Sem taxa percentual",
              "Receba no mesmo instante",
              "Sem limite de transações",
              "Dashboard completo",
              "API robusta",
              "Suporte 24/7",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-gray-200 text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            className="w-full rounded-full py-7 font-bold text-base bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/20"
            onClick={() => {
              window.open(REGISTER_URL, "_blank", "noopener,noreferrer");
            }}
          >
            Comece agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Volume alto de transações?{" "}
          <a
            href={SUPPORT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline font-medium"
          >
            Fale conosco para condições especiais
          </a>
        </motion.p>
      </div>
    </section>
  );
}