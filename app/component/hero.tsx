import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[90vh] flex flex-col justify-end items-start px-8 md:px-16 pb-12 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-white to-gray-100"></div>

      {/* Image Layer */}
      <div
        className="absolute inset-0 bg-center bg-[length:50%_auto] bg-no-repeat opacity-70"
        style={{ backgroundImage: "url('/alega-logo.png')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#676767] mb-4 leading-tight">
          Powering <span className="text-orange-600">Precision.</span>
        </h1>
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#676767] mb-4 leading-tight">
          Driving <span className="text-orange-600">Innovation.</span>
        </h1>
        <p className="max-w-xl text-md sm:text-xl md:text-2xl text-[#676767] mb-8 italic">
          “Driving Industrial Motion with Confidence.”
        </p>
        <div className="flex space-x-4">
          <Link
            href="#products"
            className="flex items-center gap-2 px-6 py-3 bg-[#F8A900] text-white rounded hover:bg-gray-200 hover:text-[#676767]"
          >
            Start Exploring <ChevronRightIcon height={20} width={20} />
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-gray-300/60 backdrop-blur-md text-[#676767] rounded hover:bg-gray-300 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
