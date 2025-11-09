import { motion } from "framer-motion";
import { Phone, Leaf, Truck, Star } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-900 text-white">
      {/* Decorative gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-pink-400/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm backdrop-blur">
              <Leaf className="h-4 w-4 text-pink-300" />
              TrueBits • Homemade meals in HSR, Bangalore
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
              We deliver home-made food in HSR Layout
            </h1>
            <p className="mt-4 text-lg md:text-xl text-emerald-100 max-w-2xl md:max-w-none">
              Fresh, hygienic and delicious tiffins crafted in our kitchen and delivered hot to your door.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
              <a
                href="tel:+918928727440"
                className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
              >
                <Phone className="h-5 w-5" /> Call: 8928727440
              </a>
              <a
                href="#subscription"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700/40 px-6 py-3 font-semibold border border-white/10 hover:bg-emerald-700/60 transition"
              >
                Explore Subscription
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl md:max-w-none">
              {[
                { icon: Truck, label: "Fast Delivery" },
                { icon: Leaf, label: "Fresh & Hygienic" },
                { icon: Star, label: "Chef-made Taste" },
                { icon: Phone, label: "Easy Ordering" },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur flex items-center gap-3"
                >
                  <Icon className="h-5 w-5 text-pink-300" />
                  <span className="text-sm text-emerald-100">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Spline animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[380px] sm:h-[440px] md:h-[520px]"
          >
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/4lyTnLJyQd-43uh0/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            {/* Subtle overlay to blend with background without blocking interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-emerald-900/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
