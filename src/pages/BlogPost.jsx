import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

export const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-start px-10">
        <ThemeToggle />
        <div className="text-left">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Artikel Tidak Ditemukan
          </h1>
          <Link
            to="/blog"
            className="text-primary hover:underline flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="relative pt-32 pb-20 px-6 max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Kembali ke Blog
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6 justify-start">
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary-foreground/20 flex items-center gap-2">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <User size={14} /> {post.author}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent text-left">
            {post.title}
          </h1>

          <div className="rounded-3xl overflow-hidden aspect-[21/9] border border-border shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-none space-y-6
            [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-border
            [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-primary
            [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:text-lg [&>p]:mb-4 text-left
            [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8 [&>ul]:text-muted-foreground [&>ul]:space-y-3 text-left
            [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-8 [&>ol]:text-muted-foreground [&>ol]:space-y-3 text-left
            [&>li]:pl-2 [&>li]:leading-relaxed text-left
            [&>strong]:text-primary [&>strong]:font-bold
            [&>p>a]:text-primary [&>p>a]:underline [&>p>a]:hover:text-primary/80
            [&>ul>li>a]:text-primary [&>ul>li>a]:underline [&>ul>li>a]:hover:text-primary/80
          "
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-border"
        >
          <div className="bg-card/40 rounded-3xl p-8 border border-border backdrop-blur-sm text-left">
            <h3 className="text-xl font-bold mb-4">Penafian (Disclaimer)</h3>
            <p className="text-muted-foreground text-sm leading-relaxed text-left">
              Artikel ini dibuat untuk tujuan edukasi dan kesadaran keamanan
              siber. Segala bentuk penyalahgunaan informasi di dalam artikel ini
              merupakan tanggung jawab penuh masing-masing individu. Gunakan
              pengetahuan untuk melindungi, bukan untuk merusak.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};
