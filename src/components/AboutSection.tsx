import { Shield, Paintbrush, Ruler } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Durabilidade",
    description: "Estruturas em aço carbono com acabamento resistente, feitas para aguentar o uso diário por décadas.",
  },
  {
    icon: Paintbrush,
    title: "Design Autêntico",
    description: "Cada peça combina a força do metal com a beleza natural da madeira, criando um estilo industrial único.",
  },
  {
    icon: Ruler,
    title: "Sob Medida",
    description: "Projetos personalizados para o seu espaço. Dimensões, cores e acabamentos do jeito que você precisa.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display uppercase tracking-[0.3em] text-sm">Sobre Nós</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-4">
            Força, Design e <span className="text-primary">Personalização</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            A Fabrica Fox nasceu da paixão por criar móveis que combinam a robustez do aço com a elegância da madeira. Cada peça é pensada e construída à mão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card border border-border p-8 rounded-sm text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-sm flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
