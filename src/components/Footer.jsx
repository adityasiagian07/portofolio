import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm flex-1/2 text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Aditya Siagian. All rights reserved.
      </p>
      <a
        href="/#hero"
        onClick={(e) => {
          if (window.location.pathname === "/") {
            e.preventDefault();
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
