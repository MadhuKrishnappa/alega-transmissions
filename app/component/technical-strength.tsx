  

  'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

export default function TechnicalStrength() {
  const stories = [
    {
      title: "CAD/CAE-based Design & Simulation",
    },
    {
      title: "Rapid Prototyping & Functional Testing",
    },
    {
      title: "ISO-standard Quality Assurance Systems",
    },
    {
      title: "Precision CNC Machining, Hobbing, and Balancing",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-300 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl md:text-3xl font-bold text-center text-[#676767] mb-12">
          Technical <span className="text-[#F8A900]">Strength</span>
        </h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {stories.map((s, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto text-orange-600 text-2xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#676767] text-center">{s.title}</h3>
                {/* <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p> */}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
