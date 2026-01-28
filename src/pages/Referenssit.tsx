import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Factory, ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const projects = [
  {
    icon: Building2,
    title: "As Oy Tampereen Keskusta",
    type: "Linjasaneeraus",
    description: "Täydellinen linjasaneeraus 1970-luvun kerrostaloon. Käyttövesi- ja viemäriputkien uusiminen sekä kylpyhuoneiden vesieristykset.",
    details: "48 asuntoa • 2023",
  },
  {
    icon: Building2,
    title: "As Oy Pirkkalan Puisto",
    type: "Putkistosaneeraus",
    description: "Käyttövesiputkiston uusiminen sukitusmenetelmällä. Minimoidut asumishaitat ja nopea aikataulu.",
    details: "36 asuntoa • 2023",
  },
  {
    icon: Factory,
    title: "Tampereen Teollisuuskiinteistö Oy",
    type: "LVI-urakka",
    description: "Uuden tuotantotilan täydellinen LVI-asennus. Teollisuusilmanvaihto, lämmitys ja käyttövesijärjestelmät.",
    details: "2500 m² • 2022",
  },
  {
    icon: Building2,
    title: "As Oy Nokian Ranta",
    type: "Lämmitysjärjestelmä",
    description: "Öljylämmityksen muutos kaukolämpöön. Vanhan lämmönjakokeskuksen purkaminen ja uuden asennus.",
    details: "24 asuntoa • 2022",
  },
  {
    icon: Home,
    title: "Omakotitalojen maalämpöprojektit",
    type: "Maalämpö",
    description: "Useiden omakotitalojen maalämpöjärjestelmien asennus Kangasalan alueella. Energiasäästöt jopa 60%.",
    details: "8 kohdetta • 2022",
  },
  {
    icon: Building2,
    title: "As Oy Lempäälän Lehto",
    type: "Ilmanvaihto",
    description: "Ilmanvaihtojärjestelmän täydellinen uusiminen. LTO-laitteiden asennus kaikille koneille.",
    details: "32 asuntoa • 2021",
  },
];

const Referenssit = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Referenssit
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">
              Toteutettuja projekteja
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Olemme toteuttaneet satoja LVI-projekteja Pirkanmaalla vuodesta 1989. 
              Tässä muutamia esimerkkejä viimeaikaisista töistämme.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="card-shadow border-0 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-accent">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    {project.details}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Haluatko kuulla lisää vastaavista projekteista?
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/yhteystiedot">
                Kysy lisää projekteistamme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Referenssit;
