import { Link } from "react-router-dom";
import { Wrench, Droplets, Thermometer, Wind, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "LVI-asennukset",
    description: "Ammattitaitoista LVI-asennusta uudisrakentamiseen ja saneerauskohteisiin. Toimimme aliurakoitsijana ja pääurakoitsijana.",
    href: "/palvelut/lvi-asennukset",
  },
  {
    icon: Droplets,
    title: "Putkistosaneeraukset",
    description: "Linjasaneeraukset ja putkistoremontit taloyhtiöille. Käytössä nykyaikaiset menetelmät ja materiaalit.",
    href: "/palvelut/putkistosaneeraukset",
  },
  {
    icon: Thermometer,
    title: "Lämmitysjärjestelmät",
    description: "Maalämpö, kaukolämpö ja muut lämmitysratkaisut. Suunnittelemme ja toteutamme energiatehokkaat järjestelmät.",
    href: "/palvelut/lammitys-ilmanvaihto",
  },
  {
    icon: Wind,
    title: "Ilmanvaihto",
    description: "Ilmanvaihtojärjestelmien asennus ja huolto. Taataan terveellinen sisäilma kotiin ja työpaikalle.",
    href: "/palvelut/lammitys-ilmanvaihto",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Palvelumme
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Kattavat LVI-palvelut
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tarjoamme monipuoliset LVI-palvelut uudisrakentamisesta saneerauksiin. 
            Kokeneet ammattilaisemme varmistavat laadukkaan lopputuloksen.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.title} to={service.href} className="group">
              <Card className="h-full card-shadow hover:card-shadow-hover transition-all duration-300 border-0 group-hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm pt-2">
                    Lue lisää
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
