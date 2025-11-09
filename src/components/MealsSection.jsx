import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Salad, Utensils, Sparkles } from "lucide-react";

const meals = [
  {
    name: "Veg Thali",
    description:
      "Balanced platter with 2 sabzis, dal, rice, chapati, salad & sweet. Freshly cooked everyday.",
    price: 159,
    tags: ["Vegetarian", "Balanced", "Home-style"],
    icon: Salad,
  },
  {
    name: "Non-Veg Thali",
    description: "Homestyle chicken curry, dal, rice, chapati & salad.",
    price: 199,
    tags: ["Protein-rich", "Comfort"],
    icon: Utensils,
  },
];

export default function MealsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax ranges for each card (subtle)
  const offsets = [
    useTransform(scrollYProgress, [0, 1], [12, -12]),
    useTransform(scrollYProgress, [0, 1], [18, -18]),
  ];

  return (
    <section id="meals" ref={sectionRef} className="relative bg-emerald-50">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-emerald-100/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-emerald-900"
          >
            Our Meals
          </motion.h2>
          <p className="mt-2 text-emerald-700">
            Simple, tasty and nourishing tiffins made with care.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {meals.map(({ name, description, price, tags, icon: Icon }, idx) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              style={{ y: offsets[idx] }}
              whileHover={{ y: -6, rotate: 0.15, scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              className="group relative rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm transition will-change-transform"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-emerald-100/40 via-transparent to-emerald-200/30" />
              <div className="relative flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-emerald-900">{name}</h3>
                    <span className="text-lg font-bold text-emerald-800">₹{price}</span>
                  </div>
                  <p className="mt-1 text-emerald-700">{description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#subscription"
                    className="mt-4 inline-flex items-center gap-2 text-emerald-800 font-semibold hover:text-emerald-900"
                  >
                    <Sparkles className="h-4 w-4" /> Subscribe for daily delivery
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
