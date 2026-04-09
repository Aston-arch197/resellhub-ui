import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

export default function TrendingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Trending Now 🔥</h2>
          <p className="text-muted-foreground mt-1">Most popular items this week</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
        {products.map((p) => (
          <div key={p.id} className="min-w-[280px] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
