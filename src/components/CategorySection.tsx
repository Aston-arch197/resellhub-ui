import { categories } from "@/data/mockData";

export default function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">Browse by Category</h2>
        <p className="text-muted-foreground mt-2">Find exactly what you're looking for</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="glass-card card-hover p-5 flex flex-col items-center gap-3 text-center group cursor-pointer"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
            <div>
              <p className="text-sm font-medium">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.count.toLocaleString()} ads</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
