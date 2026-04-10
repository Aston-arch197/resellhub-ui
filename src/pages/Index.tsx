import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedListings from "@/components/FeaturedListings";
import TrendingCarousel from "@/components/TrendingCarousel";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <CategorySection />
    <FeaturedListings />
    <TrendingCarousel />
    <Footer />
  </div>
);

export default Index;
