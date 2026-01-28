import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "LVI-asennukset", href: "/palvelut/lvi-asennukset" },
  { name: "Putkistosaneeraukset", href: "/palvelut/putkistosaneeraukset" },
  { name: "Lämmitys ja ilmanvaihto", href: "/palvelut/lammitys-ilmanvaihto" },
];

const company = [
  { name: "Yritys", href: "/yritys" },
  { name: "Referenssit", href: "/referenssit" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground text-primary font-bold text-xl">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Lämpövirrat</span>
                <span className="text-xs opacity-80 leading-tight">Oy</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Luotettavaa LVI-osaamista Tampereen seudulla jo vuodesta 1989. 
              Palvelemme taloyhtiöitä, yrityksiä ja yksityisasiakkaita ammattitaidolla.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Palvelut</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Yritys</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Yhteystiedot</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+358401234567" className="opacity-80 hover:opacity-100 transition-opacity">
                  040 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:info@lampovirrat.fi" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@lampovirrat.fi
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="opacity-80">
                  Teollisuuskatu 15<br />
                  33100 Tampere
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="opacity-80">
                  Ma-Pe 7:00-16:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>© {new Date().getFullYear()} Lämpövirrat Oy. Kaikki oikeudet pidätetään.</p>
            <p>Y-tunnus: 1234567-8</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
