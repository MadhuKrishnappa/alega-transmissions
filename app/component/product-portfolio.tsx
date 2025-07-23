'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductPortfolio() {
  const products = [
    { name: "Gear Couplings", description: "High-performance gear solutions designed for heavy-duty operations.", image: "/prod-coming-soon.png" },
    { name: "Pin Bush Couplings", description: "Reliable and durable couplings ensuring smooth power transmission.", image: "/prod-coming-soon.png" },
    { name: "Disc Couplings", description: "Premium bearings for a wide range of industrial applications.", image: "/prod-coming-soon.png" },
    { name: "Rigid Couplings", description: "High-performance gear solutions designed for heavy-duty operations.", image: "/prod-coming-soon.png" },
    { name: "Jaw Couplings", description: "Reliable and durable couplings ensuring smooth power transmission.", image: "/prod-coming-soon.png" },
    { name: "Customized Coupling Solutions", description: "Premium bearings for a wide range of industrial applications.", image: "/prod-coming-soon.png" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section id="products" className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Our <span className="text-[#F8A900]">Product Portfolio</span>
        </h3>

        {/* Product Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <AnimatePresence>
            {visibleProducts.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-white transition-transform transform hover:-translate-y-2"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#676767] mb-2 group-hover:text-[#F8A900] transition">
                    {p.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block px-8 py-3 bg-orange-600 text-white font-medium rounded-lg shadow hover:bg-orange-500 transition"
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
}
