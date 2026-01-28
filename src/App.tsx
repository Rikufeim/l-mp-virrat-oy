import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Palvelut from "./pages/Palvelut";
import LVIAsennukset from "./pages/LVIAsennukset";
import Putkistosaneeraukset from "./pages/Putkistosaneeraukset";
import LammitysIlmanvaihto from "./pages/LammitysIlmanvaihto";
import Referenssit from "./pages/Referenssit";
import Yritys from "./pages/Yritys";
import Yhteystiedot from "./pages/Yhteystiedot";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/palvelut" element={<Palvelut />} />
          <Route path="/palvelut/lvi-asennukset" element={<LVIAsennukset />} />
          <Route path="/palvelut/putkistosaneeraukset" element={<Putkistosaneeraukset />} />
          <Route path="/palvelut/lammitys-ilmanvaihto" element={<LammitysIlmanvaihto />} />
          <Route path="/referenssit" element={<Referenssit />} />
          <Route path="/yritys" element={<Yritys />} />
          <Route path="/yhteystiedot" element={<Yhteystiedot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
