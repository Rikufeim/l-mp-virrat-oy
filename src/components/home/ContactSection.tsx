import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                Ota yhteyttä
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Tarvitsetko LVI-ammattilaisia?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Ota meihin yhteyttä ja kerro tarpeestasi. Vastaamme yhteydenottoihin 
                nopeasti ja annamme kilpailukykyisen tarjouksen.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Puhelin</div>
                  <a href="tel:+358401234567" className="text-muted-foreground hover:text-primary transition-colors">
                    040 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sähköposti</div>
                  <a href="mailto:info@lampovirrat.fi" className="text-muted-foreground hover:text-primary transition-colors">
                    info@lampovirrat.fi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Osoite</div>
                  <p className="text-muted-foreground">
                    Teollisuuskatu 15<br />
                    33100 Tampere
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Pyydä tarjous
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                    Nimi *
                  </label>
                  <Input id="name" placeholder="Etunimi Sukunimi" required />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                    Puhelin
                  </label>
                  <Input id="phone" type="tel" placeholder="040 123 4567" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                  Sähköposti *
                </label>
                <Input id="email" type="email" placeholder="esimerkki@email.fi" required />
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground block mb-2">
                  Aihe
                </label>
                <Input id="subject" placeholder="Esim. Putkistosaneeraus" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                  Viesti *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Kerro tarkemmin tarpeestasi..." 
                  rows={4}
                  required 
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Lähetä viesti
                <Send className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Vastaamme yhteydenottoihin arkisin 1-2 työpäivän kuluessa.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
