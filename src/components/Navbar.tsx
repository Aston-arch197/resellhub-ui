import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search, Home, PlusCircle, MessageCircle, Heart, Bell, User,
  Menu, X, ChevronDown, LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Electronics", "Furniture", "Fashion", "Books", "Vehicles", "Home Appliances", "Gaming", "Others"];

const navLinks = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/sell", icon: PlusCircle, label: "Sell" },
  { to: "/chat", icon: MessageCircle, label: "Messages" },
  { to: "/wishlist", icon: Heart, label: "Wishlist" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center text-sm font-bold">R</div>
            <span className="text-xl font-bold gradient-text hidden sm:block">ReSellHub</span>
          </Link>

          {/* Search Bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-l-xl border border-border bg-card text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
              >
                Category <ChevronDown className="w-3 h-3" />
              </button>
              {catOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-xl shadow-lg py-1 z-50 animate-scale-in">
                  {categories.map((cat) => (
                    <button key={cat} onClick={() => setCatOpen(false)} className="w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors">
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-r-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(to) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-card border border-border rounded-xl shadow-xl z-50 animate-scale-in">
                  <div className="p-4 border-b border-border">
                    <h3 className="font-semibold text-sm">Notifications</h3>
                  </div>
                  <div className="p-3 space-y-2">
                    {["New offer on iPhone 13", "Your listing was viewed 50 times", "Message from Sarah"].map((n, i) => (
                      <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Bell className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm">{n}</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile / Login */}
            <Link to="/dashboard">
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
                <User className="w-4 h-4" /> Profile
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="sm" className="gradient-btn px-4 py-2 text-sm">
                <PlusCircle className="w-4 h-4 mr-1" /> Sell Now
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(to) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            ))}
            <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary">
              <User className="w-5 h-5" /> Profile
            </Link>
            <div className="pt-2">
              <Link to="/sell" onClick={() => setMobileOpen(false)}>
                <Button className="w-full gradient-btn py-2.5">
                  <PlusCircle className="w-4 h-4 mr-2" /> Sell Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
