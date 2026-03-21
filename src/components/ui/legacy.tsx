'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, Mail, MapPin, ExternalLink, ArrowRight, Menu, X } from 'lucide-react';

const LegacyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const researchAreas = [
    { title: "Ageing of Solid Insulations", description: "Research and improvements in materials used for manufacturing power transformers, focusing on extending transformer life and reliability." },
    { title: "Fault Detection & Location", description: "Detection and location of faults, including impact analysis of winding deformation due to short-circuit, transportation, and ageing processes." },
    { title: "Partial Discharge Measurement", description: "Advanced applications of partial discharge measurement in fault diagnosis and predictive maintenance of power transformers." },
    { title: "Transformer Condition Monitoring", description: "Development and implementation of best practices for transformer condition monitoring at operational sites." },
    { title: "Steel Industry Applications", description: "Performance evaluation of transformers feeding steel industry, addressing unique operational challenges and requirements." },
    { title: "Insulation Oil-Paper Chemistry", description: "Comprehensive study of insulation oil and paper chemistry to understand degradation mechanisms and improve material performance." },
    { title: "Wireless Technologies", description: "Application of wireless-based technologies for prevention of catastrophic failures in power transformer systems." },
    { title: "Failure Analysis", description: "Comprehensive failure analysis of power transformers to understand root causes and develop prevention strategies." },
    { title: "RLA Studies", description: "Remaining Life Assessment (RLA) studies on power transformers to optimize maintenance schedules and asset management." },
  ];

  const facilities = [
    { title: "M 4100 Insulation Analyzer", description: "Measures capacitance, Power factor and Watt losses in the solid/liquid insulation of power transformer. Also measures leakage reactance turns ratio, excitation current etc." },
    { title: "M 5200 Sweep Frequency Response Analyzer", description: "Utilized to detect the mechanical failure or movement of windings and core during short circuits, transportation, Re-location of Transformers." },
    { title: "Dirana", description: "To analyze the moisture of whole power transformer insulation, Dielectric properties of insulation within a wide frequency band." },
    { title: "High Performance Liquid Chromatography", description: "To Measure the furans in the insulating oil." },
    { title: "Thermal Imaging Camera", description: "To capture the thermal images of power transformer while in operation." },
    { title: "Flash Point Analyzer", description: "To measure the flash point of insulating oil." },
    { title: "Vib Scanner", description: "To measure the vibration of power transformer." },
    { title: "FTIR Spectrophotometer", description: "To measure the oxidation inhibitors in the insulating oil." },
    { title: "ADTR-2K Tan Delta Test Set", description: "Measures the capacitance dielectric constant tan delta and resistivity of insulation oil." },
    { title: "Karl Fischer Titrator", description: "To measure the water contents in the insulating oil." },
    { title: "Breakdown Voltage Oil Test Set", description: "Measures the BDV of insulating oil." },
    { title: "Interfacial Tension Analyzer", description: "Measure the Interfacial Tension of insulation oil." },
    { title: "Sludge & Sediments Analyzer", description: "To measure the sludge and sediments in insulating oil." },
    { title: "Domino Moisture in Oil Analyzer", description: "Measures the water/moisture contents in the insulating oil." },
    { title: "Portable Dissolved Gas Analyzer", description: "Measures the dissolved gases in the insulating oil." },
    { title: "Acidity Titrator", description: "To measure the acid contents in the insulating oil." },
    { title: "Combined TGA, DTA, DSC", description: "Measures the chemical analysis, oxidation induction and identification of paper insulation degradation." },
    { title: "UV/VIS Spectrophotometer", description: "Measures the dissolved decay contents of insulating liquids." },
    { title: "Solid Breakdown Voltage Test Set", description: "Measures the BDV of insulating paper." },
  ];

  const futurePlans = [
    "To go in NABL accreditation in respect of TIFAC-CORE linked laboratories.",
    "To liaison world class Centres/Laboratories/Institutes for promoting R & D in emerging areas of condition assessment of power apparatus.",
    "To interact with other state utilities/Nigams for partnering with TIFAC-CORE.",
    "To explore opportunities for getting industry sponsored projects.",
    "To provide ample employment opportunities to students of PG program in leading industries.",
    "To offer more training programs on modules relevant to industry/electrical utilities for safer upkeep of electrical substation equipment.",
    "To develop learning material in area of R & D.",
    "To promote collaborations with leading High Voltage test labs/Institutes on mutual benefit basis.",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0f1a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/60 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <div className="hidden md:flex items-center space-x-12">
              <nav className="flex items-center space-x-8">
                <Link href="/#services" className="text-white/60 hover:text-white transition-colors text-sm">Solutions</Link>
                <Link href="/#services" className="text-white/60 hover:text-white transition-colors text-sm">Services</Link>
                <Link href="/#about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link>
              </nav>
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-white text-base sm:text-lg tracking-wider">TIFAC CORE</span>
            </Link>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link href="/#get-in-touch" className="hidden md:block text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
              <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 rounded transition-colors">
                Back to home
              </Link>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1a] border-t border-white/10">
            <nav className="container mx-auto px-4 py-4 space-y-1">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Solutions</Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Services</Link>
              <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">About</Link>
              <Link href="/#team" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm border-b border-white/5">Team</Link>
              <Link href="/#get-in-touch" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-white/70 hover:text-white transition-colors text-sm">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0a0f1a] overflow-hidden min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="absolute inset-0">
          <video
            src="/legacy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/70 to-[#0a0f1a]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex-1 flex flex-col">
          <div className="flex-1 flex items-center">
          <div className="max-w-3xl py-8">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Link href="/" className="text-white/40 hover:text-white/60 transition-colors text-xs sm:text-sm">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/70 text-xs sm:text-sm">Legacy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
              Exploring TIFAC&apos;s
              legacy of innovation
            </h1>
            <p className="text-white/50 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed">
              Discover the rich history and groundbreaking achievements that have shaped TIFAC Core into a leader in transformer diagnostics and power system innovation.
            </p>
          </div>
          </div>

          {/* Stats Row */}
          <div className="py-8 sm:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">2000</div>
                <div className="text-white/40 text-xs sm:text-sm">Year of inception under Mission REACH</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">149+</div>
                <div className="text-white/40 text-xs sm:text-sm">M.Tech graduates in condition monitoring</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">37</div>
                <div className="text-white/40 text-xs sm:text-sm">CORE centres created across India</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">530L</div>
                <div className="text-white/40 text-xs sm:text-sm">Budget allocated for TIFAC-CORE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission REACH */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Origins</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-6 sm:mb-8">Mission REACH</h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Mission REACH is an offshoot of &apos;Technology Vision 2020&apos; program initiated by Late Dr. A.P.J. Abdul Kalam &ndash; Former President of India through Technology Information Forecasting and Assessment Council (TIFAC), Department of Science & Technology, Govt. of India Delhi to make India a developed nation by the year 2020.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              The program envisages to create a constellation of world class Centres Of Relevance & Excellence (COREs) in diverse disciplines across the country by the upgradation of science and technical institutions, mandated to produce technical manpower of international standard in the area of targeted excellence and tailor made to the emerging needs of industry.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              As on today, about 37 Centres of Relevance and Excellence (CORE) have been created in various technical institutes throughout the country in diverse areas of science and technology. NIT Hamirpur has the privilege of having one such TIFAC-CORE in area of Power Transformer Diagnostics that is functional w.e.f 2004.
            </p>
          </div>
        </div>
      </section>

      {/* TIFAC-CORE History - Dark section */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">TIFAC-CORE in Power Transformer Diagnostics</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              The inception of TIFAC centre at NIT (Formerly Regional Engineering College, Hamirpur) is an outcome of relentless efforts by former Institute authorities, faculty of EED especially Prof M. N. Bandyopadhyay (Advisor), Prof. Y.R.Sood (Chief Coordinator) & Dr.R.K.Jarial (PI & Coordinator) who have worked sincerely under Visionary leadership and mentorship provided by Prof. Chandra Shakher, the former Chairman, BOG NITH & Former Director NIT Hamirpur.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Since Nov. 2000, the proposal envisaged a budget of Rs. 530 Lakhs to create TIFAC-CORE in &quot;Power Transformer Diagnostics&quot; that became functional w.e.f 1st Sept/2004 after formal signing of MOU between TIFAC through Dept. of Science & Technology, Govt. of India Delhi & NIT Hamirpur on 10th Feb 2004.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              This Centre has been working under mentorship of Apex Body having domain experts drawn from leading industries and academia. It has been seeking valuable suggestions through regular interaction with industry to make a mark in the area of on-line and off-line monitoring of electrical power apparatus especially power transformers, by creating infrastructure facilities of International Standards.
            </p>
          </div>
        </div>
      </section>

      {/* Relevance */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Relevance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-6 sm:mb-8">Relevance for Electrical Utilities</h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Power Transformer is known to be one of the most important and costliest equipment that is required in an Electric Power system. It plays a pivotal role in facilitating smooth supply of Electric Power through a challenging transmission network from a Generating Power House to Electrical Distribution Points.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Transformer failure statistics reported in literature indicate that most failures have occurred before reaching their expected designed life of 40 years. Transformer failures are mainly related to transformer health conditions. Problems related to dielectric are reported as high as 75 percent.
            </p>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              The cost, time involved to repair and replacement of a power transformer is very high. The prolonged shutdown periods after catastrophic failures can be minimized in case electrical utilities opt for condition based maintenance program and not periodic maintenance program in respect of all major equipment&apos;s especially power transformer.
            </p>
          </div>
        </div>
      </section>

      {/* PG & PhD - Dark */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Academics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Post Graduate & Ph.D. Programs</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              PG program on &quot;Condition Monitoring Control and Protection of Electrical Apparatus&quot; (first of its kind in the country) was launched in June, 2009 as a collaborative endeavor between the TIFAC CORE and EED of NIT Hamirpur. Admissions in the program are normally made through Centralized Counseling Procedure for M.Tech Admission called CCMT with valid GATE score on all India basis.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Research emphasis is given in industry need based identified topics for developing knowledge in thematic areas of power transformer diagnosis. Till July 2021, 149 Students of M Tech (CMEA) & 05 Ph.D. students have passed out in the emerging field of TIFAC CORE and serving in leading organizations.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Many alumni of M.Tech Program on Condition Monitoring are serving as Faculty in NITs, IITs, and many are pursuing Ph.D. in NITs/IITs. Some alumni are serving in Public & Private Sector Utilities as well as eminent organizations/institutes.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Research</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-8 sm:mb-12">Major Research Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white p-5 sm:p-6 rounded-xl border border-neutral-200 hover:border-blue-300 transition-colors group">
                  <div className="text-blue-500 text-xs font-bold mb-2 sm:mb-3">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0a0f1a] mb-2 group-hover:text-blue-600 transition-colors">{area.title}</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision - Dark CTA style */}
      <section className="relative py-16 sm:py-24 bg-[#0a0f1a] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554050546-c125a25df013?w=1400&q=80"
            alt="Electrical infrastructure"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Vision</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Future Vision & Innovation</h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              As we look toward the future, TIFAC Core remains committed to pushing the boundaries of transformer diagnostics and power system innovation. We&apos;re investing heavily in emerging technologies such as advanced materials science and next-generation sensor technologies.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
              Our vision extends beyond traditional transformer diagnostics to encompass the entire smart grid ecosystem. We&apos;re developing solutions for renewable energy integration, energy storage systems, and grid modernization that will shape the future of power systems.
            </p>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed">
              Sustainability and environmental responsibility are at the core of our future initiatives. We&apos;re working on technologies that will help reduce the environmental impact of power systems while improving efficiency and reliability for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Roadmap</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-8 sm:mb-10">Future Plans</h2>
            <div className="space-y-4 sm:space-y-5">
              {futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a0f1a] flex items-center justify-center mt-0.5">
                    <span className="text-blue-400 text-[10px] sm:text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed pt-0.5 sm:pt-1">{plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Facilities */}
      <section className="py-16 sm:py-24 bg-[#f7f7f7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a0f1a] mb-3 sm:mb-4">Major Facilities</h2>
            <p className="text-neutral-500 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl">Equipment and instruments available at TIFAC Centre, NIT Hamirpur for advanced transformer diagnostics.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 rounded-lg border border-neutral-200 hover:border-blue-300 transition-all hover:shadow-sm group">
                  <h3 className="text-xs sm:text-sm font-bold text-[#0a0f1a] mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">{facility.title}</h3>
                  <p className="text-neutral-400 text-[11px] sm:text-xs leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Excellence CTA */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 sm:mb-6">
              Our commitment to
              excellence continues
            </h2>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto">
              TIFAC Core&apos;s legacy is built on an unwavering commitment to excellence. From rigorous research methodologies to the highest standards of professionalism, we continue to push boundaries.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/#team" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded transition-colors flex items-center justify-center space-x-2">
                <span>Meet our team</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/#get-in-touch" className="border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-8 py-3.5 rounded transition-colors text-center">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#060a12] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xl font-bold mb-1 tracking-wider">TIFAC CORE</h3>
              <p className="text-blue-400 text-[10px] uppercase tracking-[0.25em] mb-5">Transformer Diagnostics</p>
              <p className="text-white/30 text-sm leading-relaxed">
                Advanced transformer diagnostics centre at the Department of Electrical Engineering, National Institute of Technology Hamirpur.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Quick Links</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><Link href="/#about" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>About Us</span></Link></li>
                <li><Link href="/#team" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Our Team</span></Link></li>
                <li><Link href="/#services" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Services</span></Link></li>
                <li><Link href="/legacy" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Legacy</span></Link></li>
                <li><a href="https://nith.ac.in" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>NIT Hamirpur</span></a></li>
                <li><a href="https://nith.ac.in/electrical-engineering" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>EE Department</span></a></li>
              </ul>
            </div>

            <div className="hidden md:block">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Explore Legacy</h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Mission REACH</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Research Areas</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>PG & PhD Programs</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Facilities</span></a></li>
                <li><a href="#" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Future Plans</span></a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 sm:mb-5">Contact Us</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">TIFAC Core, EE Dept., NIT Hamirpur, H.P. 177005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">+91 7400321092</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-xs sm:text-sm">tifac@nith.ac.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-white/20 text-[10px] sm:text-xs text-center sm:text-left">&copy; 2025 National Institute of Technology Hamirpur. All rights reserved.</p>
            <div className="flex items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors text-[10px] sm:text-xs">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyPage;
