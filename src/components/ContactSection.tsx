import { MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

const ContactSection = () => {
  return (
    <footer id="contato" className="py-16 px-6 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <img src={logo} alt="Fabrica Fox" className="w-24 h-24 object-contain mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Móveis industriais sob medida em metal e madeira. Qualidade artesanal com design moderno.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-secondary-foreground">
                <MessageCircle className="w-5 h-5 text-primary shrink-0" />
                <button type="button" onClick={() => openWhatsApp()} className="hover:text-primary transition-colors text-left">
                  WhatsApp: (41) 99229-3719
                </button>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(41) 99229-3719</span>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold uppercase mb-4">Navegação</h3>
            <ul className="space-y-3">
              {[{ label: "Início", href: "#" }, { label: "Sobre", href: "#sobre" }, { label: "Produtos", href: "#produtos" }, { label: "Contato", href: "#contato" }].map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-secondary-foreground hover:text-primary transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Fabrica Fox — Móveis Industriais. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
