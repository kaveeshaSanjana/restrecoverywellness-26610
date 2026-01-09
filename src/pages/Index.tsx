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
      
      {/* SEO Content Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Discover Sri Lanka with Ceylon Tour Rides
            </h2>
            <p className="text-muted-foreground text-center mb-8 text-lg leading-relaxed">
              Welcome to <strong>Ceylon Tour Rides</strong>, your trusted partner for unforgettable <strong>Sri Lanka tours</strong>. 
              We specialize in <strong>private guided tours</strong>, <strong>wildlife safaris at Yala National Park</strong>, 
              <strong>cultural heritage visits to Sigiriya and Kandy</strong>, and scenic journeys through <strong>Ella's tea plantations</strong>. 
              Our experienced local drivers and guides ensure safe, comfortable, and authentic travel experiences across the Pearl of the Indian Ocean.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">🏛️ Cultural Tours</h3>
                <p className="text-sm text-muted-foreground">Sigiriya Rock Fortress, Temple of the Tooth Kandy, Dambulla Cave Temple, ancient cities of Polonnaruwa & Anuradhapura</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">🦁 Safari Adventures</h3>
                <p className="text-sm text-muted-foreground">Yala National Park leopard safari, Udawalawe elephants, Minneriya elephant gathering, Wilpattu wildlife tours</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">🏖️ Beach & Nature</h3>
                <p className="text-sm text-muted-foreground">Mirissa whale watching, Galle Fort, Unawatuna beach, Bentota water sports, Arugam Bay surfing</p>
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
