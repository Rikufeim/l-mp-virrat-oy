import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Yli 35 vuoden kokemus LVI-alalta",
  "Paikallinen palvelu Pirkanmaalla",
  "Ammattitaitoiset ja koulutetut asentajat",
  "Nopea reagointi ja aikataulussa pysyminen",
  "Selkeä hinnoittelu ilman yllätyksiä",
  "Takuu kaikille töillemme",
];

export function AboutPreviewSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Tietoa meistä
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Lämpövirrat Oy – Luotettavaa LVI-osaamista vuodesta 1989
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lämpövirrat Oy on vuonna 1989 perustettu tamperelainen LVI-yritys, 
              joka palvelee taloyhtiöitä, yrityksiä ja yksityisasiakkaita koko 
              Pirkanmaan alueella. Ammattitaitoinen henkilöstömme takaa laadukkaan 
              työn ja asiakastyytyväisyyden.
            </p>
            
            {/* Benefits list */}
            <ul className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/yritys">
                Lue lisää yrityksestämme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
              <div className="space-y-6">
                <div className="text-6xl font-bold">1989</div>
                <h3 className="text-2xl font-semibold">Perustettu Tampereella</h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Jo yli 35 vuoden ajan olemme kasvaneet paikallisesta LVI-yrityksestä 
                  yhdeksi Pirkanmaan luotetuimmista toimijoista. Asiakkaidemme tyytyväisyys 
                  on ollut kasvumme perusta.
                </p>
                <div className="pt-4 border-t border-primary-foreground/20">
                  <div className="text-sm text-primary-foreground/80">Toimialue</div>
                  <div className="text-lg font-semibold mt-1">
                    Tampere • Pirkkala • Nokia • Kangasala • Lempäälä
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
