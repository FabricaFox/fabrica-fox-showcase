import shelfImg from "@/assets/shelf.jpg";
import microwaveImg from "@/assets/microwave-rack.jpg";
import sideTableImg from "@/assets/side-table.jpg";
import customImg from "@/assets/custom-furniture.jpg";

const products = [
  { image: shelfImg, title: "Estantes Industriais", desc: "Organizadores robustos em aço e madeira para qualquer ambiente." },
  { image: microwaveImg, title: "Suportes para Micro-ondas", desc: "Praticidade e estilo para otimizar sua cozinha." },
  { image: sideTableImg, title: "Mesas Laterais", desc: "Design minimalista que combina com qualquer decoração." },
  { image: customImg, title: "Móveis Sob Medida", desc: "Projetos exclusivos feitos especialmente para você." },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Produtos</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4">
            Nossos <span className="text-primary">Trabalhos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-sm bg-card border border-border hover:border-primary/50 transition-all">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold uppercase">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
