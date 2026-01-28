import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-lvi.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground border border-accent/30 backdrop-blur-sm">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">Yli 35 vuoden kokemus</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
            Luotettavaa LVI-osaamista Tampereen seudulla
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            Vuodesta 1989 olemme palvelleet taloyhtiöitä, yrityksiä ja yksityisasiakkaita 
            laadukkailla LVI-töillä. Ammattitaitoiset asentajamme takaavat työn laadun.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8">
              <Link to="/yhteystiedot">
                Pyydä tarjous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white/50 bg-transparent text-white hover:bg-white/10 text-base px-8"
            >
              <Link to="/palvelut">Tutustu palveluihin</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 pt-6 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Tampere & Pirkanmaa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>13 ammattitaitoista asentajaa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Nopea palvelu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
