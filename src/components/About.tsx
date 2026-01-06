import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Palette, Search, TrendingUp } from "lucide-react";

const areas = [
  { icon: TrendingUp, label: "Estratégia Digital" },
  { icon: Lightbulb, label: "UX Design" },
  { icon: Palette, label: "UI Design" },
  { icon: Search, label: "User Research" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-4">
              Quem sou eu
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full" />
          </motion.div>

          {/* About text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12"
          >
            <p>
              Oi, sou <span className="text-foreground font-medium">Letícia Maria</span>.
            </p>
            <p>
              Minha jornada em UX Design começou com a pesquisa das necessidades dos usuários, 
              utilizando <span className="text-foreground">entrevistas e questionários</span> para 
              coletar insights. Desenvolvi personas e jornadas do usuário, identificando pontos 
              de dor e oportunidades de melhoria.
            </p>
            <p>
              Em UI Design, crio <span className="text-foreground">interfaces visuais atraentes</span> utilizando 
              ferramentas como Figma e Adobe XD, com foco na identidade da marca, acessibilidade 
              e usabilidade. Acredito na integração entre UX e UI, colaborando com desenvolvedores 
              e realizando testes de usabilidade para garantir experiências digitais fluidas, 
              eficazes e <span className="text-foreground">orientadas a resultados</span>.
            </p>
          </motion.div>

          {/* Areas of expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Áreas de atuação
            </p>
            <div className="flex flex-wrap gap-3">
              {areas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border/50 shadow-sm"
                >
                  <area.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{area.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
