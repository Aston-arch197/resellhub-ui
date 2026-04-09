import type { Product } from "@/components/ProductCard";

export const products: Product[] = [
  { id: 1, title: "iPhone 14 Pro Max - 256GB Space Black", price: 749, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=450&fit=crop", condition: "Like New", location: "San Francisco", timePosted: "2h ago", seller: "Alex M." },
  { id: 2, title: "Mid-Century Modern Sofa - Gray Fabric", price: 420, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop", condition: "Good", location: "Los Angeles", timePosted: "5h ago", seller: "Sarah K." },
  { id: 3, title: "Nike Air Jordan 1 Retro High OG", price: 180, image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=450&fit=crop", condition: "Like New", location: "New York", timePosted: "1d ago", seller: "Mike R." },
  { id: 4, title: "MacBook Pro 16\" M2 - 512GB", price: 1850, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=450&fit=crop", condition: "Like New", location: "Seattle", timePosted: "3h ago", seller: "Emma L." },
  { id: 5, title: "Canon EOS R6 Mark II Camera", price: 1200, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=450&fit=crop", condition: "Good", location: "Chicago", timePosted: "6h ago", seller: "David P." },
  { id: 6, title: "Herman Miller Aeron Chair", price: 650, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=450&fit=crop", condition: "Good", location: "Austin", timePosted: "1d ago", seller: "Lisa T." },
  { id: 7, title: "PlayStation 5 + 2 Controllers", price: 380, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=450&fit=crop", condition: "Like New", location: "Denver", timePosted: "4h ago", seller: "Chris W." },
  { id: 8, title: "Vintage Vinyl Record Collection", price: 95, image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600&h=450&fit=crop", condition: "Fair", location: "Portland", timePosted: "2d ago", seller: "Nina S." },
  { id: 9, title: "DJI Mavic 3 Pro Drone", price: 1100, image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=450&fit=crop", condition: "Like New", location: "Miami", timePosted: "7h ago", seller: "Jake B." },
  { id: 10, title: "Samsung 65\" OLED 4K Smart TV", price: 890, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=450&fit=crop", condition: "Good", location: "Boston", timePosted: "12h ago", seller: "Amy C." },
  { id: 11, title: "Dyson V15 Detect Vacuum", price: 320, image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=450&fit=crop", condition: "Like New", location: "Dallas", timePosted: "1d ago", seller: "Tom H." },
  { id: 12, title: "Patagonia Down Jacket - Medium", price: 120, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=450&fit=crop", condition: "Good", location: "Denver", timePosted: "3d ago", seller: "Rachel G." },
];

export const categories = [
  { name: "Electronics", icon: "💻", count: 2340 },
  { name: "Furniture", icon: "🪑", count: 1250 },
  { name: "Fashion", icon: "👗", count: 3100 },
  { name: "Books", icon: "📚", count: 890 },
  { name: "Vehicles", icon: "🚗", count: 560 },
  { name: "Home Appliances", icon: "🏠", count: 780 },
  { name: "Gaming", icon: "🎮", count: 1450 },
  { name: "Others", icon: "📦", count: 2100 },
];
