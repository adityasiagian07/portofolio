import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-6 relative bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Blog & Artikel Terbaru
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagi pengetahuan dan analisis terbaru mengenai tren teknologi dan
            keamanan siber.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/40 border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all backdrop-blur-sm"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-semibold mb-2 block uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary text-sm font-semibold">
                    Baca Selengkapnya{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all hover:scale-105"
          >
            Lihat Semua Artikel
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
