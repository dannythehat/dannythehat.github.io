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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/holidays" element={<Holidays />} />
              <Route path="/holidays/:slug" element={<HolidayDetail />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/calendar" element={<TravelCalendar />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/stories/:slug" element={<StoryDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WishlistProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
