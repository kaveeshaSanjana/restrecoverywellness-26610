import { useState } from "react";
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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading && (
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>
        
        {!isLoading && (
          <>
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
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
