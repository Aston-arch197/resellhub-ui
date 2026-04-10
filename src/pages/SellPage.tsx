import { useState } from "react";
import { Upload, X, Image, DollarSign, MapPin, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const conditionOptions = ["Like New", "Good", "Fair", "For Parts"];
const categoryOptions = ["Electronics", "Furniture", "Fashion", "Books", "Vehicles", "Home Appliances", "Gaming", "Others"];

export default function SellPage() {
  const [images, setImages] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [preview, setPreview] = useState(false);
  const handlePublish = () => {
  const newListing = {
    id: Date.now(),
    title,
    description,
    price,
    category,
    condition,
    location,
    image: images[0]
  };

  const existingListings =
    JSON.parse(localStorage.getItem("customListings") || "[]");

  localStorage.setItem(
    "customListings",
    JSON.stringify([...existingListings, newListing])
  );

  alert("Listing Published Successfully!");
};

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => setImages((prev) => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => setImages((prev) => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Sell Your Item</h1>
          <p className="text-muted-foreground mb-8">Create a listing and reach thousands of buyers</p>

          {!preview ? (
            <div className="space-y-6 animate-fade-in">
              {/* Image Upload */}
              <div>
                <label className="text-sm font-medium mb-2 block">Product Photos</label>
                <div
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="glass-card border-2 border-dashed border-border hover:border-primary/50 transition-colors p-8 text-center cursor-pointer"
                >
                  <input type="file" multiple accept="image/*" onChange={handleFileSelect} className="hidden" id="file-upload" />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                    <p className="text-sm font-medium">Drag & drop photos or click to upload</p>
                    <p className="text-xs text-muted-foreground mt-1">Up to 10 photos, max 5MB each</p>
                  </label>
                </div>
                {images.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {images.map((img, i) => (
                      <div key={i} className="relative w-24 h-24 rounded-xl overflow-hidden border border-border">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                        <button
                          onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                          className="absolute top-1 right-1 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <input
                  type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                  placeholder="What are you selling?"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <textarea
                  value={description} onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your item, including condition, brand, and any defects..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* Price & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="number" value={price} onChange={(e) => setPrice(e.target.value)}
                      placeholder="0.00"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    value={category} onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select category</option>
                    {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              {/* Condition & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Condition</label>
                  <select
                    value={condition} onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">Select condition</option>
                    {conditionOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text" value={location} onChange={(e) => setLocation(e.target.value)}
                      placeholder="City, State"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={() => setPreview(true)} variant="outline" className="rounded-xl gap-2 flex-1">
                  <Eye className="w-4 h-4" /> Preview
                </Button>
                  <Button onClick={handlePublish} className="gradient-btn flex-1 py-3">
                  Publish Listing
                  </Button>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="glass-card p-6 space-y-4">
                <h2 className="text-xl font-bold">Preview</h2>
                {images.length > 0 && <img src={images[0]} alt="" className="w-full h-64 object-cover rounded-xl" />}
                <h3 className="text-lg font-semibold">{title || "Untitled"}</h3>
                <p className="text-2xl font-bold text-primary">${price || "0"}</p>
                <div className="flex gap-2">
                  {condition && <Badge className="bg-success/10 text-success border-0">{condition}</Badge>}
                  {category && <Badge variant="secondary">{category}</Badge>}
                  {location && <Badge variant="secondary" className="gap-1"><MapPin className="w-3 h-3" />{location}</Badge>}
                </div>
                <p className="text-sm text-muted-foreground">{description || "No description provided."}</p>
              </div>
              <div className="flex gap-3 mt-6">
                <Button onClick={() => setPreview(false)} variant="outline" className="rounded-xl flex-1">Edit</Button>
                <Button onClick={handlePublish} className="gradient-btn flex-1 py-3">
  Publish Listing
</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
