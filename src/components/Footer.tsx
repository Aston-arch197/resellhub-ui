import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Press", to: "/" },
    { label: "Blog", to: "/" },
  ],
  Support: [
    { label: "Help Center", to: "/" },
    { label: "Safety Tips", to: "/" },
    { label: "Contact Us", to: "/" },
    { label: "Report Issue", to: "/" },
  ],
  Legal: [
    { label: "Terms of Service", to: "/" },
    { label: "Privacy Policy", to: "/" },
    { label: "Cookie Policy", to: "/" },
    { label: "Sitemap", to: "/" },
  ],
};

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center text-sm font-bold">R</div>
              <span className="text-xl font-bold gradient-text">ReSellHub</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              The modern marketplace for buying and selling pre-owned items. Join millions of users making sustainable choices.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@resellhub.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> San Francisco, CA</div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">© 2026 ReSellHub. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
