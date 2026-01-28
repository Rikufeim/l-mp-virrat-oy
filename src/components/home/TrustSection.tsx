import { Building2, Users, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "35+",
    label: "Vuotta kokemusta",
    description: "Toimintaa vuodesta 1989",
  },
  {
    icon: Users,
    value: "13",
    label: "Ammattitaitoista asentajaa",
    description: "Koulutetut LVI-ammattilaiset",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Toteutettua projektia",
    description: "Tyytyväisiä asiakkaita",
  },
  {
    icon: Award,
    value: "100%",
    label: "Laadulla",
    description: "Takuu töillemme",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Miksi valita meidät
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            Luotettava kumppani LVI-töihin
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pitkä kokemus ja ammattitaitoinen henkilöstö takaavat laadukkaan työn. 
            Palvelemme paikallisesti Tampereen seudulla.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center space-y-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
