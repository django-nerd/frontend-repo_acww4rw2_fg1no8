import { motion } from "framer-motion";
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
  return (
    <section id="meals" className="relative bg-emerald-50">
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
          {meals.map(({ name, description, price, tags, icon: Icon }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
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
