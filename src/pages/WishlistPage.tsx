import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";
import { Heart } from "lucide-react";

export default function WishlistPage() {
  const wishlistItems = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-6 h-6 text-destructive" />
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <span className="text-muted-foreground">({wishlistItems.length} items)</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((p, i) => (
            <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
