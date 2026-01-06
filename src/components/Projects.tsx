import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Opus Medical",
    url: "https://opusmedical.com.br/",
    description:
      "Site para empresa especializada em soluções para equipamentos médico-hospitalares, com atuação nacional. Foco em UX/UI, navegação intuitiva, hierarquia visual e otimização para SEO.",
    tags: ["UX/UI", "SEO", "Healthcare"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "ZIG Medical",
    url: "https://www.zigmedical.com.br/",
    description:
      "Site para empresa especializada em equipamentos médicos-veterinários. Projeto com foco em navegação intuitiva, experiência do usuário e apresentação clara dos produtos.",
    tags: ["UX/UI", "E-commerce", "Veterinário"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Mercadão Médico",
    url: "https://mercadaomedico.com.br/",
    description:
      "Portal de soluções para o setor de saúde com foco em acessibilidade, hierarquia visual eficiente e experiência fluida em todos os dispositivos. Otimizado para SEO.",
    tags: ["Acessibilidade", "SEO", "Responsivo"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Agência Pé na Tábua Marketing",
    url: "https://agenciapenatabua.com.br/",
    description:
      "Site para agência focada em estratégias digitais e crescimento de marcas. Navegação dinâmica, comunicação clara e identidade visual estratégica.",
    tags: ["Marketing", "UX/UI", "Branding"],
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div ref={ref}>
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Cases reais de design que transformaram negócios através de experiências digitais memoráveis
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                className="group relative block overflow-hidden rounded-2xl bg-card border border-border/50"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-heading font-medium group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
