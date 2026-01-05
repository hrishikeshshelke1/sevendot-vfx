"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Film, Layers, Brush, Sparkles, X } from "lucide-react";

export default function VFXStudioSite() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.img
              src="/Sevendot.PNG"
              alt="Sevendot VFX Loading Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-24 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-black text-white font-sans scroll-smooth">
          {/* Navbar */}
          <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <img src="/Sevendot.PNG" alt="Sevendot VFX Logo" className="h-8 md:h-10" />
              <div className="space-x-6 text-sm text-gray-400">
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#about" className="hover:text-white">About</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>
          </nav>

          {/* Hero */}
          <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
            <motion.img
              src="/Sevendot.PNG"
              alt="Sevendot VFX Logo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h-24 md:h-32 mb-6"
            />
            <p className="text-gray-400 max-w-xl">Transforming Pixels to Emotions</p>
            <button
              onClick={() => setOpen(true)}
              className="mt-8 px-6 py-3 bg-white text-black rounded hover:bg-gray-200"
            >
              Watch Showreel
            </button>
          </section>

          {/* Services */}
          <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold mb-12 text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ServiceCard icon={<Film />} title="Matchmove" desc="Accurate camera & object tracking." />
              <ServiceCard icon={<Layers />} title="Roto" desc="Clean, production-ready mattes." />
              <ServiceCard icon={<Brush />} title="Paint" desc="Seamless cleanup & rig removal." />
              <ServiceCard icon={<Sparkles />} title="Compositing" desc="Final polish that sells the shot." />
            </div>
          </section>

          {/* About */}
          <section id="about" className="px-8 py-20 bg-neutral-900 text-center">
            <h2 className="text-3xl font-semibold mb-6">About Sevendot</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Sevendot VFX is a minimal, story-driven visual effects studio focused on invisible craftsmanship.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="px-8 py-20 text-center">
            <h2 className="text-3xl font-semibold mb-6">Start a Conversation</h2>
            <form className="max-w-md mx-auto space-y-4">
              <input placeholder="Name" className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded" />
              <input placeholder="Email" className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded" />
              <textarea placeholder="Project Details" className="w-full bg-neutral-900 border border-neutral-800 p-3 rounded" />
              <button className="w-full bg-white text-black py-3 rounded hover:bg-gray-200">Send Inquiry</button>
            </form>
          </section>

          {/* Showreel Modal */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
              >
                <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white">
                  <X />
                </button>
                <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/R-4BHdYNMIE?autoplay=1&rel=0"
                    title="Sevendot VFX Showreel"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-neutral-900 border border-neutral-800 p-6 text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </motion.div>
  );
}
