import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Droplets } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const features = [
  "Linjasaneeraukset",
  "Käyttövesiputkistojen uusiminen",
  "Viemäreiden saneeraus",
  "Sukitus ja pinnoitusmenetelmät",
  "Vesikiertolämmityksen uusiminen",
  "Kylpyhuoneremonttien putkityöt",
];

const benefits = [
  {
    title: "Minimoidut asumishaitat",
    description: "Suunnittelemme työt niin, että asukkaille aiheutuu mahdollisimman vähän haittaa remontin aikana.",
  },
  {
    title: "Nykyaikaiset menetelmät",
    description: "Käytämme sekä perinteisiä että uudempia sukitus- ja pinnoitusmenetelmiä kohteen mukaan.",
  },
  {
    title: "Kokemus taloyhtiöistä",
    description: "Olemme toteuttaneet satoja linjasaneerauksia taloyhtiöille ympäri Pirkanmaata.",
  },
  {
    title: "Selkeä viestintä",
    description: "Pidämme isännöitsijän ja asukkaat ajan tasalla projektin etenemisestä.",
  },
];

const Putkistosaneeraukset = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/10">
              <Droplets className="h-7 w-7" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Palvelut
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl">
            Putkistosaneeraukset
          </h1>
          <p className="mt-6 text-xl text-primary-foreground/80 max-w-2xl">
            Linjasaneeraukset ja putkistoremontit taloyhtiöille kokemuksella ja 
            ammattitaidolla. Minimoimme asumishaitat huolellisella suunnittelulla.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Luotettava kumppani putkiremonttiin
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Putkistosaneeraus on taloyhtiön suurimpia investointeja, ja siksi 
                  on tärkeää valita luotettava ja kokenut urakoitsija. Lämpövirrat Oy 
                  on toteuttanut satoja linjasaneerauksia Pirkanmaalla vuodesta 1989.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tarjoamme kattavat putkistosaneerauspalvelut perinteisestä 
                  linjasaneerauksesta kevyempiin sukitus- ja pinnoitusmenetelmiin. 
                  Autamme löytämään kohteellesi sopivimman ratkaisun.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Palveluihimme kuuluu
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="bg-secondary rounded-lg p-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Pyydä tarjous
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kerro taloyhtiöstänne ja saat kilpailukykyisen tarjouksen.
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
                    <Link to="/palvelut/lammitys-ilmanvaihto" className="text-sm hover:underline opacity-80 hover:opacity-100">
                      → Lämmitys ja ilmanvaihto
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

export default Putkistosaneeraukset;
