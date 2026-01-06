import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/ltcmg/Porfolio_Leticia_Maria",
    description: "Veja meus projetos",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ltcmaria/",
    description: "Conecte-se comigo",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    url: "https://wa.me/+5511958015863",
    description: "Vamos conversar",
    isPrimary: true,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/30">
      <div className="section-container">
        <div ref={ref} className="max-w-3xl mx-auto text-center">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-medium mb-4">
              Vamos criar algo incrível?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Estou sempre aberta a novos projetos e oportunidades de colaboração.
              Entre em contato e vamos transformar ideias em realidade.
            </p>
          </motion.div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 w-full sm:w-auto ${
                  contact.isPrimary
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                    : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                    contact.isPrimary
                      ? "bg-primary-foreground/10"
                      : "bg-secondary"
                  }`}
                >
                  <contact.icon
                    className={`w-5 h-5 ${
                      contact.isPrimary
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <div className="text-left">
                  <p
                    className={`font-medium ${
                      contact.isPrimary ? "text-primary-foreground" : ""
                    }`}
                  >
                    {contact.label}
                  </p>
                  <p
                    className={`text-sm ${
                      contact.isPrimary
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {contact.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA with pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <a
              href="https://wa.me/+5511958015863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary text-lg animate-pulse hover:animate-none"
            >
              <MessageCircle className="w-6 h-6" />
              Iniciar conversa no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
