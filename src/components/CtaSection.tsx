import { MessageCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
          Transforme sua ideia em <span className="text-primary">realidade</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Entre em contato pelo WhatsApp e receba um orçamento personalizado. Atendemos todo o Brasil.
        </p>
        <a
          href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wide px-10 py-5 rounded-sm hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          Fale Conosco no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
