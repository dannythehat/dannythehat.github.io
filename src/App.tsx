import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import Holidays from "./pages/Holidays";
import HolidayDetail from "./pages/HolidayDetail";
import Wishlist from "./pages/Wishlist";
import TravelCalendar from "./pages/TravelCalendar";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import UKStays from "./pages/UKStays";
import UKStayDetail from "./pages/UKStayDetail";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Festivals from "./pages/Festivals";
import SevenWonders from "./pages/SevenWonders";
import WildlifeEncounters from "./pages/WildlifeEncounters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/beyond-ordinary-adventures">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/holidays/:slug" element={<HolidayDetail />} />
              <Route path="/festivals" element={<Festivals />} />
              <Route path="/seven-wonders" element={<SevenWonders />} />
              <Route path="/wildlife" element={<WildlifeEncounters />} />
              <Route path="/uk-stays" element={<UKStays />} />
              <Route path="/uk-stays/:slug" element={<UKStayDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/calendar" element={<TravelCalendar />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/stories/:slug" element={<StoryDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;