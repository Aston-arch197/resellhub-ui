import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, MessageCircle, ShoppingCart, MapPin, Calendar, Star, ChevronLeft, Share2, Flag, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/mockData";
import ProductCard from "@/components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [mainImage, setMainImage] = useState(product.image);
  const [liked, setLiked] = useState(false);

  const thumbs = [
    product.image,
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=150&fit=crop",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=150&fit=crop",
  ];

  const similar = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" /> Back to listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-fade-in">
          {/* Images */}
          <div>
            <div className="glass-card overflow-hidden rounded-2xl aspect-square">
              <img src={mainImage} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3 mt-4">
              {thumbs.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(t)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${mainImage === t ? "border-primary" : "border-border hover:border-primary/50"}`}
                >
                  <img src={t} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => setLiked(!liked)} className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                    <Heart className={`w-5 h-5 ${liked ? "fill-destructive text-destructive" : ""}`} />
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-3xl font-extrabold text-primary mt-2">${product.price.toLocaleString()}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge className="bg-success/10 text-success border-0">{product.condition}</Badge>
              <Badge variant="secondary" className="gap-1"><MapPin className="w-3 h-3" />{product.location}</Badge>
              <Badge variant="secondary" className="gap-1"><Calendar className="w-3 h-3" />Posted {product.timePosted}</Badge>
            </div>

            {/* Seller card */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-btn flex items-center justify-center text-lg font-bold">
                  {product.seller[0]}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{product.seller}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < 4 ? "fill-warning text-warning" : "text-border"}`} />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.0 (24 reviews)</span>
                  </div>
                </div>
                <Badge variant="secondary" className="gap-1"><Shield className="w-3 h-3" />Verified</Badge>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                This item is in excellent {product.condition.toLowerCase()} condition. Well-maintained and carefully used. 
                Includes all original accessories and packaging. No scratches or defects. 
                Selling because upgrading to a newer model. Price is slightly negotiable for serious buyers.
                Feel free to message me for more details or to arrange a viewing.
              </p>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button size="lg" className="gradient-btn py-3 text-base gap-2">
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl py-3 text-base gap-2">
                Make Offer
              </Button>
              <Link to="/chat" className="col-span-2">
                <Button size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground rounded-xl py-3 text-base gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat with Owner
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="col-span-2 text-muted-foreground gap-2">
                <Heart className="w-4 h-4" /> Save to Wishlist
              </Button>
            </div>

            <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-destructive transition-colors">
              <Flag className="w-3 h-3" /> Report this listing
            </button>
          </div>
        </div>

        {/* Similar */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Similar Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similar.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
