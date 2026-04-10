import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            Buy & Sell Pre-Owned Items <span className="opacity-90">Easily</span>
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-lg">
            Join millions making sustainable choices. Find amazing deals or turn your unused items into cash.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/#listings">
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 rounded-xl font-semibold px-6 gap-2 shadow-lg">
                <ShoppingBag className="w-5 h-5" /> Browse Listings <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sell">

              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-black hover:bg-primary-foreground/10 rounded-xl font-semibold px-6 gap-2">

                Sell an Item {"->"}
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-6 mt-10 text-primary-foreground/70 text-sm">
            <span><strong className="text-primary-foreground">50K+</strong> Active listings</span>
            <span><strong className="text-primary-foreground">12K+</strong> Happy sellers</span>
            <span><strong className="text-primary-foreground">98%</strong> Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
