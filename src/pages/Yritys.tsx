import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Users, Award, MapPin } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

const milestones = [
  { year: "1989", event: "Lämpövirrat Oy perustetaan Tampereella" },
  { year: "1995", event: "Ensimmäiset suuret taloyhtiöprojektit" },
  { year: "2005", event: "Henkilöstö kasvaa 10 asentajaan" },
  { year: "2010", event: "Maalämpöasennukset aloitetaan" },
  { year: "2015", event: "Laajentuminen koko Pirkanmaalle" },
  { year: "2020", event: "500+ toteutettua projektia saavutettu" },
  { year: "2024", event: "35 vuotta laadukasta LVI-osaamista" },
];

const values = [
  {
    icon: Award,
    title: "Laatu",
    description: "Teemme jokaisen työn huolellisesti ja laadukkaasti. Emme tingi materiaaleista tai työn jäljestä.",
  },
  {
    icon: Users,
    title: "Luotettavuus",
    description: "Pidämme kiinni sovituista aikatauluista ja lupauksista. Asiakkaan luottamus on meille kunnia-asia.",
  },
  {
    icon: MapPin,
    title: "Paikallisuus",
    description: "Palvelemme paikallisesti Pirkanmaalla. Tunnemme alueen kiinteistökannan ja asiakkaidemme tarpeet.",
  },
];

const Yritys = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Yritys
            </span>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">
              Lämpövirrat Oy – Luotettava LVI-kumppani
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80">
              Yli 35 vuoden kokemuksella palvelemme taloyhtiöitä, yrityksiä ja 
              yksityisasiakkaita Tampereen seudulla.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Tarina alusta asti
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Lämpövirrat Oy perustettiin vuonna 1989 Tampereella yhden miehen 
                putkiliikkeenä. Perustaja Matti Virtasen tavoitteena oli tarjota 
                laadukasta LVI-työtä reiluun hintaan – periaate, joka ohjaa 
                toimintaamme edelleen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vuosien varrella olemme kasvaneet yhdeksi Pirkanmaan luotetuimmista 
                LVI-urakoitsijoista. Tänään työllistämme 13 ammattitaitoista 
                asentajaa ja palvelemme asiakkaita Tampereelta, Pirkkalasta, 
                Nokialta, Kangasalta ja Lempäälästä.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Meille tärkeintä on asiakastyytyväisyys. Siksi panostamme 
                henkilöstömme ammattitaitoon, nykyaikaisiin menetelmiin ja 
                selkeään viestintään. Kun valitset Lämpövirrat Oy:n, voit 
                luottaa siihen, että työ tehdään hyvin.
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-secondary rounded-xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Historiamme
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {milestone.year.slice(2)}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-px h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="font-semibold text-foreground">
                        {milestone.year}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Arvomme
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Nämä arvot ohjaavat kaikkea toimintaamme ja ovat perusta 
              pitkäaikaisille asiakassuhteille.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ammattitaitoinen tiimi
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Lämpövirrat Oy:n tiimiin kuuluu 13 kokenutta LVI-ammattilaista. 
                Jokainen asentajamme on käynyt alan koulutuksen ja useimmilla 
                on vuosien kokemus erilaisista projekteista.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">Koulutetut LVI-asentajat</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">Säännöllinen jatkokoulutus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">Keskimäärin 10+ vuoden kokemus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">Asiakaspalveluhenkisyys</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
              <div className="text-6xl font-bold mb-4">13</div>
              <h3 className="text-2xl font-semibold mb-4">
                Ammattitaitoista asentajaa
              </h3>
              <p className="text-primary-foreground/80">
                Henkilöstömme on yrityksen tärkein voimavara. Panostamme 
                työhyvinvointiin ja ammattitaidon kehittämiseen, jotta 
                voimme tarjota asiakkaillemme parasta mahdollista palvelua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Yritys;
