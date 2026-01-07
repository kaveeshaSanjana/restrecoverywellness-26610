import { useState, useEffect, createContext, useContext } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import GalleryPage from "./pages/GalleryPage";
import ReviewsPage from "./pages/ReviewsPage";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

// Loading context to control loading state from Hero
export const LoadingContext = createContext<{
  setHeroLoaded: (loaded: boolean) => void;
}>({
  setHeroLoaded: () => {},
});

export const useLoading = () => useContext(LoadingContext);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Hide loading screen when hero is loaded
  useEffect(() => {
    if (heroLoaded) {
      // Small delay for smooth transition
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [heroLoaded]);

  // Fallback timeout to hide loading after 5 seconds max
  useEffect(() => {
    const fallbackTimer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingContext.Provider value={{ setHeroLoaded }}>
        <TooltipProvider>
          <AnimatePresence mode="wait">
            {isLoading && <LoadingScreen />}
          </AnimatePresence>
          
          <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:name" element={<DestinationDetail />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </LoadingContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
