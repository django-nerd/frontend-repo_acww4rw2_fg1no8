import { motion } from "framer-motion";
import { Users, ChefHat, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-sm">
              <ChefHat className="h-4 w-4" /> TrueBits Kitchen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
              About Us
            </h2>
            <p className="text-emerald-800">
              We are a small, passionate team serving home-made meals across HSR Layout, Bangalore. Our food is cooked fresh daily with seasonal ingredients and zero shortcuts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-200 bg-white p-4">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Users className="h-5 w-5 text-emerald-600" /> Founder
                </div>
                <p className="mt-1 text-emerald-700">Manju</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-white p-4">
                <div className="flex items-center gap-2 font-semibold text-emerald-900">
                  <Users className="h-5 w-5 text-emerald-600" /> Co‑Founder
                </div>
                <p className="mt-1 text-emerald-700">Ankit Jaisal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-white border border-emerald-200 p-6 shadow-sm">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-100 via-white to-emerald-100 flex items-center justify-center">
                <Heart className="h-14 w-14 text-emerald-600" />
              </div>
              <p className="mt-4 text-sm text-emerald-700">
                Made with love and care — just like home. Your support helps local cooks and fresh food culture thrive.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
