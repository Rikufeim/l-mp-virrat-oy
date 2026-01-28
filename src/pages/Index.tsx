import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { AboutPreviewSection } from "@/components/home/AboutPreviewSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <AboutPreviewSection />
      <CTASection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
