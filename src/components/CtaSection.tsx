import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

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
        <button
          type="button"
          onClick={() => openWhatsApp()}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-display text-lg uppercase tracking-wide px-10 py-5 rounded-sm hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-6 h-6" />
          Fale Conosco no WhatsApp
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
