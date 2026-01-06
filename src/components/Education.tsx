import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Design de Mídias Digitais",
    institution: "FATEC",
    description:
      "Base sólida em design, usabilidade e interfaces digitais, com projetos práticos aplicados a cenários reais.",
    status: "Concluído",
  },
  {
    icon: BookOpen,
    title: "Digital Business",
    institution: "USP",
    description:
      "Especialização focada em estratégias digitais, inovação e visão de negócio, conectando design aos objetivos estratégicos das empresas.",
    status: "Em andamento",
  },
  {
    icon: Award,
    title: "Especialização em UX/UI Design",
    institution: "SENAC",
    description:
      "Aprofundamento em experiência do usuário, usabilidade e design centrado no usuário, criando soluções digitais intuitivas, funcionais e orientadas à performance.",
    status: "Concluído",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formacao" className="py-24 lg:py-32">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-4">
              Formação Acadêmica
            </h2>
            <p className="text-muted-foreground text-lg">
              Aprendizado contínuo para entregar resultados excepcionais
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top hidden md:block"
            />

            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 ml-24 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <div className="card-elevated p-6">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {item.status}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item.institution}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-medium mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
