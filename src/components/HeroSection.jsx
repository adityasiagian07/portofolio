import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background text-foreground"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-foreground/90"> Hi, I'm</span>
            <span className="text-primary"> Aditya</span>
            <span className="text-gradient ml-2">Siagian </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate software engineer with a knack for creating
            innovative solutions. I specialize in web development, and I'm
            always eager to learn and grow in this ever-evolving field.
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
