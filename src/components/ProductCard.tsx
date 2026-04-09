import { Heart, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  condition: "Like New" | "Good" | "Fair";
  location: string;
  timePosted: string;
  seller: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  const conditionColor = {
    "Like New": "bg-success/10 text-success",
    Good: "bg-primary/10 text-primary",
    Fair: "bg-warning/10 text-warning",
  }[product.condition];

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="glass-card card-hover overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center transition-all hover:scale-110"
          >
            <Heart className={`w-4 h-4 transition-colors ${liked ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
          </button>
          <Badge className={`absolute bottom-3 left-3 ${conditionColor} border-0 text-xs font-medium`}>
            {product.condition}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">{product.title}</h3>
          <p className="text-lg font-bold text-primary mt-1">${product.price.toLocaleString()}</p>
          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{product.location}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{product.timePosted}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
