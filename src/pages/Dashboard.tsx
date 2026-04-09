import { useState } from "react";
import { Settings, Star, MapPin, Calendar, Package, ShoppingBag, Heart, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

const tabs = ["Active Listings", "Sold Items", "Purchases", "Wishlist"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = [products.slice(0, 4), products.slice(4, 6), products.slice(6, 8), products.slice(8, 10)];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        {/* Profile Header */}
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl gradient-btn flex items-center justify-center text-3xl font-bold">A</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl font-bold">Alex Morrison</h1>
                <Badge className="bg-success/10 text-success border-0">Verified Seller</Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-1">Passionate about sustainable living and great deals. Member since 2024.</p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-warning text-warning" />4.8 (42 reviews)</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />San Francisco, CA</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />Joined Mar 2024</span>
                <span className="flex items-center gap-1"><Package className="w-4 h-4" />28 items sold</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-xl gap-1"><Edit className="w-4 h-4" />Edit</Button>
              <Button variant="outline" size="sm" className="rounded-xl gap-1"><Settings className="w-4 h-4" />Settings</Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Listings", value: "12", icon: Package, color: "text-primary" },
            { label: "Items Sold", value: "28", icon: ShoppingBag, color: "text-success" },
            { label: "Total Earned", value: "$4,250", icon: Star, color: "text-warning" },
            { label: "Wishlist", value: "8", icon: Heart, color: "text-destructive" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="glass-card p-5">
              <Icon className={`w-5 h-5 ${color} mb-2`} />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                i === activeTab ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {tabItems[activeTab].map((p) => <ProductCard key={p.id} product={p} />)}
        </div>

        {tabItems[activeTab].length === 0 && (
          <div className="text-center py-20">
            <Package className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground">No items yet</h3>
            <p className="text-sm text-muted-foreground mt-1">Items will appear here when available</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
