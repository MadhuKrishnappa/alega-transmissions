'use client'

import { motion } from 'framer-motion'

export default function CareersPage() {
    const whyWorkWithUs = [
        { title: "Growth-Oriented Environment", desc: "Structured pathways designed to expand your professional scope and leadership capability." },
        { title: "Manufacturing Excellence", desc: "Gain hands-on exposure to world-class machinery, raw execution, and heavy industrial engineering." },
        { title: "Custom Engineered Solutions", desc: "Work on unique architectures tailored to complex, real-world mechanical problems." },
        { title: "Collaborative Culture", desc: "A performance-driven, supportive team framework where engineering merit takes priority." },
        { title: "Continuous Development", desc: "Sponsored professional learning tracks to keep your technical skills sharp and relevant." }
    ]

    const operationalSectors = [
        "Engineering & Design",
        "Manufacturing & Production",
        "Quality Assurance",
        "Supply Chain & Procurement",
        "Sales & Business Development"
    ]

    return (
        <section
            id="careers"
            className="relative  bg-gray-50"
        >
            <div className="bg-white text-gray-900 min-h-screen relative selection:bg-[#F8A900]/30 antialiased pt-24 pb-20">

                {/* Subtle Structural Design Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-screen bg-gray-50/60 pointer-events-none border-l border-gray-100 hidden lg:block" />

                {/* ================= HERO SECTION ================= */}
                <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-16 md:mb-24 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-8 space-y-4"
                        >
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F8A900]">
                                <span>Join Our Journey</span>
                                <span className="w-4 h-[1px] bg-gray-300" />
                            </div>
                            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-none">
                                Careers at <br />
                                <span className="text-[#F8A900]">Alega Transmissions.</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl pt-2">
                                Build the future of industrial motion. Join a team driven by engineering excellence, innovation, and a shared passion for delivering reliable power transmission solutions worldwide.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-4 lg:text-right font-mono text-[11px] text-gray-400 self-start lg:pt-4"
                        >
                            ALEGA_HUMAN_RESOURCES // UPDATE_2026
                        </motion.div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200 mt-12" />
                </header>

                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* ================= SECTION 1: WHY WORK WITH US ================= */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
                        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-28">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">01 / Culture</h2>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Why Work <br />With Us?
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                At Alega Transmissions, we believe that our people are our greatest strength. We provide transparent opportunities to learn, grow, and contribute to challenging engineering projects across diverse industrial landscapes.
                            </p>
                        </div>

                        <div className="lg:col-span-8 border-t lg:border-t-0 border-gray-100 pt-8 lg:pt-0 space-y-6">
                            {whyWorkWithUs.map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex gap-4 md:gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-100"
                                >
                                    <div className="text-sm font-mono font-bold text-[#F8A900] pt-0.5">
                                        (0{index + 1})
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-extrabold uppercase tracking-wide text-gray-900">
                                            {item.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ================= SECTION 2: WHO WE LOOK FOR ================= */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center bg-gray-50 p-6 md:p-12 rounded-2xl border border-gray-100">
                        <div className="lg:col-span-5 space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">02 / Talent</h2>
                            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                                Who We <br />Look For
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                We welcome passionate professionals who are eager to contribute to engineering excellence and industrial innovation. If you are driven, skilled, and ready to grow with a dynamic manufacturer, we would love to connect.
                            </p>
                            <div className="pt-2">
                                <span className="text-xs text-gray-400 font-medium">Direct Inquiries:</span>
                                <a href="mailto:careers@alegatransmissions.com" className="block text-sm font-black text-gray-900 hover:text-[#F8A900] transition-colors underline mt-0.5">
                                    careers@alegatransmissions.com
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-7 w-full space-y-2">
                            <div className="text-[11px] font-mono font-bold text-gray-400 uppercase px-2 mb-2">
                                Core Core Growth Opportunities:
                            </div>
                            <div className="bg-white rounded-xl border border-gray-200/60 divide-y divide-gray-100 overflow-hidden shadow-sm">
                                {operationalSectors.map((sector, idx) => (
                                    <div key={idx} className="p-4 flex items-center justify-between text-xs font-extrabold uppercase tracking-wide text-gray-800 hover:bg-gray-50/50 transition-colors">
                                        <span>{sector}</span>
                                        <span className="text-[10px] text-gray-400 font-mono font-normal">Active Pool</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ================= SECTION 3: CURRENT OPENINGS ================= */}
                    <section className="space-y-6 pt-4">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">03 / Availability</h2>
                            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Current Openings</h3>

                            <div className="bg-amber-50/60 border border-[#F8A900]/20 rounded-2xl p-8 md:p-12 space-y-6 mt-4">
                                <p className="text-sm text-gray-700 font-medium leading-relaxed max-w-xl mx-auto">
                                    There are no open positions at present. However, we are always interested in connecting with talented professionals who share our passion for engineering and manufacturing.
                                </p>

                                <p className="text-xs text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
                                    All future job openings will be published on the official Alega Transmissions LinkedIn page. You may also share your profile with us for future consideration.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                    <a
                                        href="https://www.linkedin.com/company/alega-transmissions-private-limited/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-5 py-2.5 bg-gray-900 text-white hover:bg-gray-800 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm"
                                    >
                                        Follow Us On LinkedIn
                                    </a>
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=careers@alegatransmissions.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full sm:w-auto px-5 py-2.5 bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-sm text-center"
                                    >
                                        Email Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ================= FOOTER BANNER ================= */}
                    <footer className="pt-8 border-t border-gray-100 text-center max-w-2xl mx-auto space-y-2">
                        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed italic">
                            "We are building a team of skilled professionals committed to engineering excellence, manufacturing quality, and customer success."
                        </p>
                        <div className="text-[10px] font-mono text-gray-400 tracking-wider uppercase pt-2">
                            Alega Transmissions Manufacturing Group
                        </div>
                    </footer>

                </main>
            </div>
        </section>
    )
}