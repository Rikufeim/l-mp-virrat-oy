import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const benefits = [
  "Vastaamme yhteydenottoihin nopeasti",
  "Maksuton kartoituskäynti",
  "Kilpailukykyinen hinnoittelu",
  "Selkeä tarjous ilman yllätyksiä",
];

const Yhteystiedot = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Yhteystiedot
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">
              Ota yhteyttä – vastaamme nopeasti
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Kerro meille tarpeestasi ja saat kilpailukykyisen tarjouksen. 
              Vastaamme yhteydenottoihin arkisin 1-2 työpäivän kuluessa.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Lähetä yhteydenottopyyntö
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-2">
                      Nimi *
                    </label>
                    <Input id="name" placeholder="Etunimi Sukunimi" required />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-foreground block mb-2">
                      Yritys / Taloyhtiö
                    </label>
                    <Input id="company" placeholder="Esim. As Oy Tampereen Talo" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-2">
                      Sähköposti *
                    </label>
                    <Input id="email" type="email" placeholder="esimerkki@email.fi" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-2">
                      Puhelin *
                    </label>
                    <Input id="phone" type="tel" placeholder="040 123 4567" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground block mb-2">
                    Palvelu
                  </label>
                  <select 
                    id="service" 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Valitse palvelu</option>
                    <option value="lvi-asennukset">LVI-asennukset</option>
                    <option value="putkistosaneeraus">Putkistosaneeraus</option>
                    <option value="lammitys">Lämmitysjärjestelmät</option>
                    <option value="ilmanvaihto">Ilmanvaihto</option>
                    <option value="muu">Muu asia</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-2">
                    Viesti *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Kerro tarkemmin tarpeestasi. Mitä kohde koskee? Mikä on aikataulu?"
                    rows={6}
                    required 
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Lähetä yhteydenotto
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div className="bg-secondary rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Yhteystietomme
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Puhelin</div>
                      <a href="tel:+358401234567" className="text-muted-foreground hover:text-primary transition-colors text-lg">
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
                      <div className="font-semibold text-foreground">Käyntiosoite</div>
                      <p className="text-muted-foreground">
                        Teollisuuskatu 15<br />
                        33100 Tampere
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Toimistoaika</div>
                      <p className="text-muted-foreground">
                        Ma-Pe 7:00-16:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">
                  Toimialueemme
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Palvelemme asiakkaita koko Pirkanmaan alueella:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Tampere</span>
                  <span>• Pirkkala</span>
                  <span>• Nokia</span>
                  <span>• Kangasala</span>
                  <span>• Lempäälä</span>
                  <span>• Ylöjärvi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-secondary py-12">
        <div className="container">
          <div className="bg-muted rounded-xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Teollisuuskatu 15, 33100 Tampere
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Yhteystiedot;
