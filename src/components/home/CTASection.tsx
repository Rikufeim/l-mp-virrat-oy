import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-3xl mx-auto text-balance">
          Varmista onnistunut LVI-projekti – ota yhteyttä asiantuntijoihin
        </h2>
        <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Olipa kyseessä pieni korjaus tai suuri saneeraus, autamme sinua. 
          Pyydä maksuton kartoitus ja tarjous.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            asChild 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8"
          >
            <Link to="/yhteystiedot">
              Pyydä tarjous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
          >
            <a href="tel:+358401234567">
              <Phone className="mr-2 h-5 w-5" />
              040 123 4567
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
