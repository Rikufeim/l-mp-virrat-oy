import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Etusivu", href: "/" },
  {
    name: "Palvelut",
    href: "/palvelut",
    children: [
      { name: "LVI-asennukset", href: "/palvelut/lvi-asennukset" },
      { name: "Putkistosaneeraukset", href: "/palvelut/putkistosaneeraukset" },
      { name: "Lämmitys ja ilmanvaihto", href: "/palvelut/lammitys-ilmanvaihto" },
    ],
  },
  { name: "Referenssit", href: "/referenssit" },
  { name: "Yritys", href: "/yritys" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex h-10 items-center justify-between text-sm">
          <p className="hidden sm:block">Luotettavaa LVI-osaamista vuodesta 1989</p>
          <a 
            href="tel:+358401234567" 
            className="flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
          >
            <Phone className="h-4 w-4" />
            040 123 4567
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">Lämpövirrat</span>
              <span className="text-xs text-muted-foreground leading-tight">Oy</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                        isActive(item.href) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link to={item.href} className="w-full cursor-pointer">
                        Kaikki palvelut
                      </Link>
                    </DropdownMenuItem>
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link to={child.href} className="w-full cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-secondary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/yhteystiedot">Pyydä tarjous</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 text-base font-medium rounded-md transition-colors hover:bg-secondary ${
                      isActive(item.href) ? "text-primary bg-secondary" : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 px-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/yhteystiedot" onClick={() => setMobileMenuOpen(false)}>
                    Pyydä tarjous
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
