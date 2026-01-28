import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Droplets, Thermometer, Wind, ArrowRight, CheckCircle } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const services = [
  {
    icon: Wrench,
    title: "LVI-asennukset",
    description: "Toteutamme LVI-asennukset uudisrakentamiseen ja saneerauskohteisiin. Toimimme sekä aliurakoitsijana rakennusliikkeille että suoraan asiakkaiden kanssa.",
    features: [
      "Uudisrakentamisen LVI-asennukset",
      "Saneerauskohteiden LVI-työt",
      "Käyttövesi- ja viemärijärjestelmät",
      "Lämmitysjärjestelmät",
    ],
    href: "/palvelut/lvi-asennukset",
  },
  {
    icon: Droplets,
    title: "Putkistosaneeraukset",
    description: "Linjasaneeraukset ja putkistoremontit taloyhtiöille nykyaikaisilla menetelmillä. Minimoimme asumishaitat huolellisella suunnittelulla.",
    features: [
      "Linjasaneeraukset",
      "Käyttövesiputkistojen uusiminen",
      "Viemäreiden saneeraus",
      "Sukitus ja pinnoitusmenetelmät",
    ],
    href: "/palvelut/putkistosaneeraukset",
  },
  {
    icon: Thermometer,
    title: "Lämmitysjärjestelmät",
    description: "Suunnittelemme ja toteutamme energiatehokkaat lämmitysratkaisut. Maalämpö, kaukolämpö ja hybridijärjestelmät.",
    features: [
      "Maalämpöjärjestelmät",
      "Kaukolämpöliittymät",
      "Öljylämmityksen muutokset",
      "Lattialämmitykset",
    ],
    href: "/palvelut/lammitys-ilmanvaihto",
  },
  {
    icon: Wind,
    title: "Ilmanvaihto",
    description: "Ilmanvaihtojärjestelmien asennus, huolto ja puhdistus. Taataan terveellinen ja raikas sisäilma.",
    features: [
      "IV-järjestelmien asennus",
      "LTO-laitteiden asennus",
      "Ilmanvaihdon säätö ja tasapainotus",
      "Huolto ja puhdistus",
    ],
    href: "/palvelut/lammitys-ilmanvaihto",
  },
];

const Palvelut = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Palvelumme
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">
              Kattavat LVI-palvelut ammattitaidolla
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Tarjoamme monipuoliset LVI-palvelut uudisrakentamisesta putkiremontteihin. 
              Yli 35 vuoden kokemuksella takaamme laadukkaan työn ja tyytyväiset asiakkaat.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="card-shadow border-0">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link to={service.href}>
                          Lue lisää
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Palvelut;
