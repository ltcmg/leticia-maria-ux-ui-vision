import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Letícia Maria | UX/UI Designer - Estratégia Digital & Research</title>
        <meta
          name="description"
          content="Portfólio de Letícia Maria, UX/UI Designer especializada em estratégia digital, user research e criação de experiências digitais centradas no usuário."
        />
        <meta
          name="keywords"
          content="UX Designer, UI Designer, Estratégia Digital, User Research, Figma, Design de Interfaces, São Paulo"
        />
        <meta name="author" content="Letícia Maria" />
        <meta property="og:title" content="Letícia Maria | UX/UI Designer" />
        <meta
          property="og:description"
          content="Design inteligente e abordagem centrada no usuário. Transformando ideias em experiências digitais memoráveis."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://leticamaria.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
