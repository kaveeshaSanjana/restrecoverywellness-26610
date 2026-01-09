import { useRef, useCallback, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpecialVisits from '@/components/SpecialVisits';
import Reviews from '@/components/Reviews';
import ReviewForm from '@/components/ReviewForm';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import SocialMedia from '@/components/SocialMedia';
import Footer from '@/components/Footer';
import ScrollToContact from '@/components/ScrollToContact';

const Index = () => {
  const refetchReviewsRef = useRef<(() => void) | null>(null);

  const handleRefetchRef = useCallback((refetch: () => void) => {
    refetchReviewsRef.current = refetch;
  }, []);

  const handleReviewSubmitted = useCallback(() => {
    if (refetchReviewsRef.current) {
      refetchReviewsRef.current();
    }
  }, []);

  // Update document title for SEO
  useEffect(() => {
    document.title = "Ceylon Tour Rides | Best Sri Lanka Tours, Private Driver & Safari 2025";
  }, []);

  return (
    <main className="min-h-screen">
      {/* SEO-optimized hidden content for search engines */}
      <h1 className="sr-only">Ceylon Tour Rides - Sri Lanka's Premier Tour Operator for Private Tours, Safaris & Cultural Experiences</h1>
      
      <Navbar />
      <Hero />
      
      {/* SEO Content Section - Discover Sri Lanka */}
      <section className="relative py-24 overflow-hidden">
        {/* Beautiful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px]" />
        
        <div className="container relative mx-auto px-4 max-w-6xl">
          <article className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Trusted by 5000+ Travelers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Discover <span className="text-primary">Sri Lanka</span> with
              <br />
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Ceylon Tour Rides</span>
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
              Welcome to <strong className="text-foreground">Ceylon Tour Rides</strong>, your trusted partner for unforgettable <strong className="text-foreground">Sri Lanka tours</strong>. 
              We specialize in <strong className="text-foreground">private guided tours</strong>, <strong className="text-foreground">wildlife safaris at Yala National Park</strong>, 
              <strong className="text-foreground">cultural heritage visits to Sigiriya and Kandy</strong>, and scenic journeys through <strong className="text-foreground">Ella's tea plantations</strong>.
            </p>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cultural Tours */}
              <div className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/30">
                    🏛️
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cultural Heritage Tours</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Explore <strong>Sigiriya Rock Fortress</strong>, <strong>Temple of the Tooth Kandy</strong>, <strong>Dambulla Cave Temple</strong>, and ancient cities of <strong>Polonnaruwa & Anuradhapura</strong>
                  </p>
                </div>
              </div>
              
              {/* Safari Adventures */}
              <div className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-3xl shadow-lg shadow-emerald-500/30">
                    🦁
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Safari Adventures</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience <strong>Yala National Park leopard safari</strong>, <strong>Udawalawe elephants</strong>, <strong>Minneriya elephant gathering</strong>, and <strong>Wilpattu wildlife tours</strong>
                  </p>
                </div>
              </div>
              
              {/* Beach & Nature */}
              <div className="group relative p-8 rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/30">
                    🏖️
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Beach & Nature</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Discover <strong>Mirissa whale watching</strong>, <strong>Galle Fort</strong>, <strong>Unawatuna beach</strong>, <strong>Bentota water sports</strong>, and <strong>Arugam Bay surfing</strong>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Stats */}
            <div className="mt-16 pt-16 border-t border-border/50">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      
      <SpecialVisits />
      <Gallery />
      <Reviews onRefetchRef={handleRefetchRef} />
      <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
      <ContactForm />
      <SocialMedia />
      <Footer />
      <ScrollToContact />
    </main>
  );
};

export default Index;
