import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Fabrica Fox - Móveis Industriais"
          className="w-40 h-40 mx-auto mb-8 object-contain animate-fade-in-up"
        />
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
          Móveis Industriais{" "}
          <span className="text-primary">Sob Medida</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Projetos exclusivos em metal e madeira, feitos para durar.
        </p>
        <a
          href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wide px-8 py-4 rounded-sm hover:brightness-110 transition-all animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Solicitar Orçamento
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
