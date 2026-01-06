import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Figma",
    description: "Design & Prototipagem",
    icon: (
      <svg viewBox="0 0 38 57" className="w-8 h-8" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="currentColor"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="currentColor" opacity="0.8"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="currentColor" opacity="0.6"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="currentColor" opacity="0.9"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    description: "UX/UI & Prototipagem",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v15.5A2.25 2.25 0 0 0 4.25 22h15.5A2.25 2.25 0 0 0 22 19.75V4.25A2.25 2.25 0 0 0 19.75 2H4.25zm4.03 5.28L12 14.14l3.72-6.86h2.06l-4.72 8.44h-2.12L6.22 7.28h2.06zm7.47 7.44h1.5V9.28h-1.5v5.44z" opacity="0.9"/>
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    description: "Análise de Dados",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.84 2.998a2.151 2.151 0 0 0-2.16 2.16v13.68a2.16 2.16 0 1 0 4.32 0V5.158a2.152 2.152 0 0 0-2.16-2.16zM12 9.238a2.151 2.151 0 0 0-2.16 2.16v7.44a2.16 2.16 0 1 0 4.32 0v-7.44A2.152 2.152 0 0 0 12 9.238zM1.16 15.318A1.16 1.16 0 1 0 1.16 17.638 1.16 1.16 0 0 0 1.16 15.318z"/>
      </svg>
    ),
  },
  {
    name: "Photoshop",
    description: "Edição de Imagens",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2H7.2v3.63h1.35c.41 0 .82-.07 1.19-.22.3-.12.55-.32.72-.59.16-.27.24-.58.24-.93 0-.35-.08-.66-.24-.93-.17-.27-.42-.47-.71-.59-.2-.07-.4-.12-.7-.17zM19.75 3H4.25C3.01 3 2 4.01 2 5.25v13.5C2 19.99 3.01 21 4.25 21h15.5c1.24 0 2.25-1.01 2.25-2.25V5.25C22 4.01 20.99 3 19.75 3zM12.8 12.38c-.4.49-.98.8-1.6.89-.35.05-.71.07-1.07.06H7.2v3.64H5.25V6.26h4.73c.48 0 .95.06 1.41.19.41.11.78.31 1.1.58.31.26.56.59.73.96.17.4.26.83.26 1.26 0 .6-.14 1.18-.42 1.69-.26.48-.67.88-1.16 1.14-.04.02-.07.04-.1.06zm4.37 2.15c-.34.42-.74.73-1.17.93-.43.2-.91.31-1.39.3-.15 0-.3 0-.45-.02v1.29h-1.64V9.04c.53-.07 1.07-.11 1.6-.1.86 0 1.48.16 2.03.47.52.29.92.75 1.13 1.3.11.28.17.58.17.88 0 .62-.16 1.2-.48 1.7l.2.24z"/>
      </svg>
    ),
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-24 lg:py-32">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-4">
              Habilidades
            </h2>
            <p className="text-muted-foreground text-lg">
              Ferramentas que domino para criar experiências excepcionais
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="card-elevated p-6 text-center group cursor-default"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-secondary mb-4 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {skill.icon}
                </div>
                <h3 className="font-body font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
