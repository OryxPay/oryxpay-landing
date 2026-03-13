import React from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsStrip from "@/components/landing/StatsStrip";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WithdrawalsCarousel from "@/components/landing/WithdrawalsCarousel";
import ToolsSection from "@/components/landing/ToolsSection";
import PricingSection from "@/components/landing/PricingSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import MouseParticles from "@/components/MouseParticles";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ForDevsSection from "@/components/landing/ForDevsSection";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <MouseParticles />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <HowItWorksSection />
      <FeaturesSection />
      <WithdrawalsCarousel />
      <ToolsSection />
      <PricingSection />
      <ForDevsSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}