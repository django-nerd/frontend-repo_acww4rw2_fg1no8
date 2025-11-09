import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Calendar, IndianRupee, Phone } from "lucide-react";

const plans = [
  {
    name: "Veg Thali - Weekly",
    price: 749,
    per: "per week",
    features: ["5 meals", "Free delivery in HSR", "Flexible pause"],
    highlight: true,
  },
  {
    name: "Veg Thali - Monthly",
    price: 2799,
    per: "per month",
    features: ["22 meals", "Priority support", "Best value"],
    highlight: false,
  },
];

export default function SubscriptionSection() {
  return (
    <section id="subscription" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-emerald-900"
          >
            Subscription Plans for Veg Thali
          </motion.h2>
          <p className="mt-2 text-emerald-700">
            Choose a plan that fits your routine. Pause or resume anytime with a message.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative rounded-2xl border p-6 shadow-sm transition ${
                p.highlight
                  ? "bg-emerald-50 border-emerald-200"
                  : "bg-white border-emerald-200"
              }`}
            >
              {/* hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 ring-2 ring-emerald-300/60" />

              <div className="relative flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-900">{p.name}</h3>
                  <div className="mt-2 flex items-end gap-1 text-emerald-800">
                    <IndianRupee className="h-5 w-5" />
                    <span className="text-3xl font-extrabold">{p.price}</span>
                    <span className="text-sm text-emerald-700">{p.per}</span>
                  </div>
                </div>
                <Calendar className="h-10 w-10 text-emerald-600" />
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-emerald-800">
                    <BadgeCheck className="h-5 w-5 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="tel:+918928727440"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700 transition"
                >
                  <Phone className="h-5 w-5" /> Call to Subscribe: 8928727440
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
