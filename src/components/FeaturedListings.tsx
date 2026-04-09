import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

export default function FeaturedListings() {
  return (
    <section id="listings" className="container mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Listings</h2>
          <p className="text-muted-foreground mt-1">Hand-picked items just for you</p>
        </div>
        <button className="text-sm font-medium text-primary hover:underline">View all →</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, 8).map((p, i) => (
          <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
