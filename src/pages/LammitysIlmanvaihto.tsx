import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Thermometer, Wind } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const heatingFeatures = [
  "Maalämpöjärjestelmät",
  "Kaukolämpöliittymät",
  "Öljylämmityksen muutokset",
  "Lattialämmitykset",
  "Vesikiertoinen lämmitys",
  "Hybridijärjestelmät",
];

const ventilationFeatures = [
  "IV-järjestelmien asennus",
  "LTO-laitteiden asennus",
  "Ilmanvaihdon säätö ja tasapainotus",
  "Huolto ja puhdistus",
  "Ilmanvaihtokoneiden uusiminen",
  "Korvausilmaventtiilien asennus",
];

const LammitysIlmanvaihto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
              <Thermometer className="h-7 w-7" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Palvelut
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl">
            Lämmitys ja ilmanvaihto
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl">
            Energiatehokkaat lämmitysratkaisut ja toimiva ilmanvaihto. 
            Suunnittelemme ja toteutamme järjestelmät, jotka säästävät energiaa ja rahaa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Heating */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Lämmitysjärjestelmät
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Autamme valitsemaan kiinteistöösi sopivan lämmitysratkaisun. 
                  Toteutamme maalämpöjärjestelmät, kaukolämpöliittymät ja 
                  lämmitysmuutokset ammattitaidolla. Nykyaikaiset järjestelmät 
                  säästävät merkittävästi energiakustannuksissa.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {heatingFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ventilation */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Wind className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Ilmanvaihto
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Toimiva ilmanvaihto on perusta terveelliselle sisäilmalle. 
                  Asennamme ja huollamme ilmanvaihtojärjestelmiä koteihin ja 
                  yrityksiin. LTO-laitteet (lämmön talteenotto) vähentävät 
                  energiankulutusta merkittävästi.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {ventilationFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Energy efficiency note */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Energiatehokkuus säästää rahaa
                </h3>
                <p className="text-muted-foreground text-sm">
                  Nykyaikaiset lämmitys- ja ilmanvaihtojärjestelmät voivat säästää 
                  merkittävästi energiakustannuksissa. Autamme kartoittamaan 
                  kiinteistösi energiansäästömahdollisuudet ja valitsemaan 
                  kustannustehokkaimman ratkaisun.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Pyydä tarjous
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kerro tarpeestasi ja saat kilpailukykyisen tarjouksen.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/yhteystiedot">
                    Ota yhteyttä
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-4">
                  Muut palvelumme
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/palvelut/lvi-asennukset" className="text-sm hover:underline opacity-80 hover:opacity-100">
                      → LVI-asennukset
                    </Link>
                  </li>
                  <li>
                    <Link to="/palvelut/putkistosaneeraukset" className="text-sm hover:underline opacity-80 hover:opacity-100">
                      → Putkistosaneeraukset
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default LammitysIlmanvaihto;
