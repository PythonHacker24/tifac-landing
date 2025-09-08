'use client'

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Phone } from 'lucide-react';

const LegacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute font-oxanium top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <Link href="/" className="text-white text-3xl hover:text-blue-300 transition-colors">
                TIFAC CORE
              </Link>
              <span className="text-white text-sm opacity-80">Transformer Diagnostics</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 text-white">
              <Link href="/" className="hover:text-blue-300 transition-colors">Team</Link>
              <a href="#" className="hover:text-blue-300 transition-colors">Services</a>
              <a href="#" className="hover:text-blue-300 transition-colors">About Us</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Legacy</a>
              <a href="#" className="hover:text-blue-300 transition-colors">News</a>
            </nav>

            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+91 7400321092</span>
              </div>
              <button className="bg-transparent border px-4 py-2 font-bold rounded text-sm hover:border-2 transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Video Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <video
            src="/legacy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-4xl text-white font-oxanium">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Exploring<br />
              <span className="text">TIFAC&apos;s Legacy</span><br />
              of Innovation
            </h1>
            <p className="text-lg mb-8 opacity-90 max-w-2xl">
              Discover the rich history and groundbreaking achievements that have shaped TIFAC Core into a leader in transformer diagnostics and power system innovation.
            </p>
            <button className="bg-transparent px-8 py-3 rounded-lg border border-white text-white font-semibold hover:border-2 transition-colors flex items-center space-x-2">
              <span>Learn More</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Legacy Content Sections */}
      <div className="bg-white">
        {/* Section 1 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Mission REACH
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                              Mission REACH is an offshoot of &apos;Technology Vision 2020&apos; program initiated by Late Dr. A.P.J. Abdul Kalam – Former President of India through Technology Information Forecasting and Assessment Council (TIFAC), Department of Science & Technology, Govt. of India Delhi to make India a developed nation by the year 2020. The program envisages to create a constellation of world class Centres Of Relevance & Excellence (COREs) in diverse disciplines across the country by the upgradation of science and technical institutions, mandated to produce technical manpower of international standard in the area of targeted excellence and tailor made to the emerging needs of industry. It is the befitting combination of the three most powerful pillars of economic growth i.e. industry, academic institutions and the government that provides the said mission, much needed strength and success. As on today, about 37 Centres of Relevance and Excellence (CORE) have been created in various technical institutes throughout the country in diverse areas of science and technology. NIT Hamirpur has the privilege of having one such TIFAC- CORE in area of Power Transformer Diagnostics that is functional w.e.f 2004.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
              TIFAC-CORE in Power Transformer Diagnostics
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The inception of TIFAC centre at NIT (Formerly Regional Engineering College, Hamirpur) is an outcome of relentless efforts by former Institute authorities, faculty of EED especially Prof M. N. Bandyopadhyay (Advisor), Prof. Y.R.Sood (Chief Coordinator) & Dr.R.K.Jarial (PI & Coordinator) who have worked sincerely under Visionary leadership and mentorship provided by Prof. Chandra Shakher, the former Chairman, BOG NITH & Former Director NIT Hamirpur, Dr R L Chauhan, former Chairman BOG, NIT Society and Principal, REC Hamirpur and other authorities of institute from time to time. For achieving coveted goal of self sustenance, the timely key support provided by Prof. Lalit K Awasthi, Former Director, NIT Hamirpur and Prof. H. M. Suryawanshi – the present Director, NITH would go a long way in rejuvenating further growth of TIFAC Centre in near future.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Since Nov. 2000, the proposal envisaged a budget of Rs. 530 Lakhs to create TIFAC-CORE in “Power Transformer Diagnostics” that became functional w.e.f 1st Sept/2004 after formal signing of MOU between TIFAC through Dept. of Science & Technology, Govt. of India Delhi & NIT Hamirpur on 10th Feb 2004 by Prof. Chandra shakker- the then Director, NITH. Since then, this Centre has been making every stride to enable its presence felt among leading Electric Power Utilities, ITIs and similar reputed organizations in the country & abroad.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              This Centre has been working under mentorship of Apex Body having domain experts drawn from leading industries and academia. It has been seeking valuable suggestions through regular interaction with industry to make a mark in the area of on-line and off-line monitoring of electrical power apparatus especially power transformers, by creating infrastructure facilities of International Standards at TIFAC-CORE, NIT Hamirpur. To meet major objectives set under Mission REACH Program of Govt. of India, consistent & continuous efforts are being made through kind support from its industrial partners including Himachal Pradesh State Electricity Board Limited, Shimla. An MOU to this effect was also signed between HPSEBL, Shimla and NIT Hamirpur in January 2006 by Prof. I K Bhat- former Director, NITH. To achieve set objectives, all possible efforts have been made by all faculty, EED and past Heads, EED, Prof. Y R Sood, Prof. Sushil Chouhan, Prof. R.N. Sharma, Dr. R. Nath Sharma and as Co-ordinator, TIFAC CORE respectively. Every one has made nice effort to develop the TIFAC centre at NITH to present level of relevance and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
              Relevance OF TIFAC-CORE for Electrical Utilities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Power Transformer is known to be one of the most important and costliest equipment that is required in an Electric Power system. It plays a pivotal role in facilitating smooth supply of Electric Power through a challenging transmission network from a Generating Power House to Electrical Distribution Points. Their continuous loading operation & in service conditions may sometime cause outages and catastrophic failures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Transformer failure statistics reported in literature indicate that most failures have occurred before reaching their expected designed life of 40 years. Transformer failures are mainly related to transformer health conditions. Problems related to dielectric are reported as high as 75 percent. As per 2001 survey report submitted by a CIGRE (PARIS) working group on Failures Trends in large power transformers, about 41 % of failures were due to on-load tap changers (O.L.T.C) & about 19 % were attributed to the windings. The failure origins were 53% mechanical and 31% dielectric.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              Some power transformers without having on-load tap changers have 26.6 % of failures that were due to the windings, 6.4 % were due to the magnetic circuit, 33.3 % were due to terminals, 17.4 % were due to the tank and dielectric fluid, 11 % were due to other accessories and 4.6 % were due to misc reasons. The cost, time involved to repair and replacement of a power transformer is very high. The prolonged shutdown periods after catastrophic failures can be minimized in case electrical utilities opt for condition based maintenance program and not periodic maintenance program in respect of all major equipment’s especially power transformer.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
              Post Graduate & Ph.D. Programs at TIFAC-CORE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PG program on “Condition Monitoring Control and Protection of Electrical Apparatus” (first of its kind in the country) was launched in June, 2009 as a collaborative endeavor between the TIFAC CORE and EED of NIT Hamirpur. Admissions in the program are normally made through Centralized Counseling Procedure for M.Tech Admission called CCMT with valid GATE score on all India basis. Some Ph.D. research scholars are also pursuing their research in the nodal themes related with TIFAC CORE.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Research emphasis is given in industry need based identified topics for developing knowledge in thematic areas of power transformer diagnosis. Till July 2021, 149 Students of M Tech (CMEA) & 05 Ph.D. students have passed out in the emerging field of TIFAC CORE and serving in leading organizations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              One of our passed out Ph D scholar, Dr. Mohan is presently doing Post Doctoral Research at UQAC Canada in areas relevant to TIFAC- CORE NIT Hamirpur under the guidance of eminent Prof. Fofona & another passed out student Dr. Hasmat M. is pursuing Post Doctoral in Singapore. Similarly, many other alumnii of M tech Program on Condition Monitoring are serving as Faculty in NITs, IITs, and many are pursuing Phd in NITs/IITs. Some alumnii are serving in Public & Pvt. Sector Utilities as well eminent organization/institutes as well.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Future Vision & Innovation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As we look toward the future, TIFAC Core remains committed to pushing the boundaries of transformer diagnostics and power system innovation. We&apos;re investing heavily in emerging technologies such as quantum computing, advanced materials science, and next-generation sensor technologies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our vision extends beyond traditional transformer diagnostics to encompass the entire smart grid ecosystem. We&apos;re developing solutions for renewable energy integration, energy storage systems, and grid modernization that will shape the future of power systems.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sustainability and environmental responsibility are at the core of our future initiatives. We&apos;re working on technologies that will help reduce the environmental impact of power systems while improving efficiency and reliability for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Our Commitment to Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TIFAC Core&apos;s legacy is built on an unwavering commitment to excellence in everything we do. From our rigorous research methodologies to our customer service standards, we maintain the highest levels of quality and professionalism.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe that our success is measured not just by our technological achievements, but by the positive impact we have on our clients, the industry, and society as a whole. Every project we undertake is approached with the same dedication to excellence that has defined our organization since its founding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As we continue to build on our legacy, we remain focused on our core values of innovation, integrity, and excellence. These principles guide us as we work to solve the complex challenges facing the power industry and contribute to a more reliable and sustainable energy future.
              </p>
            </div>
          </div>
        </section>

        {/* Major Research Areas */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Major Research Areas
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ageing of Solid Insulations</h3>
                  <p className="text-gray-700">Research and improvements in materials used for manufacturing power transformers, focusing on extending transformer life and reliability.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Fault Detection & Location</h3>
                  <p className="text-gray-700">Detection and location of faults, including impact analysis of winding deformation due to short-circuit, transportation, and ageing processes.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Partial Discharge Measurement</h3>
                  <p className="text-gray-700">Advanced applications of partial discharge measurement in fault diagnosis and predictive maintenance of power transformers.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Transformer Condition Monitoring</h3>
                  <p className="text-gray-700">Development and implementation of best practices for transformer condition monitoring at operational sites.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Steel Industry Applications</h3>
                  <p className="text-gray-700">Performance evaluation of transformers feeding steel industry, addressing unique operational challenges and requirements.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Insulation Oil-Paper Chemistry</h3>
                  <p className="text-gray-700">Comprehensive study of insulation oil and paper chemistry to understand degradation mechanisms and improve material performance.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wireless Technologies</h3>
                  <p className="text-gray-700">Application of wireless-based technologies for prevention of catastrophic failures in power transformer systems.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Failure Analysis</h3>
                  <p className="text-gray-700">Comprehensive failure analysis of power transformers to understand root causes and develop prevention strategies.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">RLA Studies</h3>
                  <p className="text-gray-700">Remaining Life Assessment (RLA) studies on power transformers to optimize maintenance schedules and asset management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Future Plans
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To go in NABL accreditation in respect of TIFAC – CORE linked laboratories.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To liaison world class Centres/ Laboratories/ Institutes for promoting R & D in emerging areas of condition assessment of power apparatus.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To interact with other state utilities/Nigams for partnering with TIFAC– CORE.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To explore opportunities for getting industry sponsored projects.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To provide ample employment opportunities to students of PG program &quot;Condition Monitoring Control and Protection of Electrical Apparatus&quot; in leading industries.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To offer more and more training programs on modules relevant to industry/ electrical utilities for safer/ upkeep of electrical substation equipment&apos;s especially transformers.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To develop learning material in area of R & D.</p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                  <p className="text-lg text-gray-700">To promote collaborations with leading High Voltage test labs/ Institutes on mutual benefit basis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Facilities */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 font-oxanium">
                Major Facilities at TIFAC Centre NIT Hamirpur
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">M 4100 Insulation Analyzer</h3>
                  <p className="text-gray-700 text-sm">Measures capacitance, Power factor and Watt losses in the solid/liquid insulation of power transformer. Also measures leakage reactance turns ratio, excitation current etc in service power transformers and power generator analysis.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">M 5200 Sweep Frequency Response Analyzer</h3>
                  <p className="text-gray-700 text-sm">Utilized to detect the mechanical failure or movement of windings and core during short circuits, transportation, Re- location of Transformers.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirana</h3>
                  <p className="text-gray-700 text-sm">To analyze the moisture of whole power transformer insulation, Dielectric properties of insulation within a wide frequency band.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High Performance Liquid Chromatography</h3>
                  <p className="text-gray-700 text-sm">To Measure the furans in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Thermal Imaging Camera</h3>
                  <p className="text-gray-700 text-sm">To capture the thermal images of power transformer while in operation.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flash Point</h3>
                  <p className="text-gray-700 text-sm">To measure the flash point of insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Vib Scanner</h3>
                  <p className="text-gray-700 text-sm">To measure the vibration of power transformer.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fourier Transform Infrared Spectrophotometer</h3>
                  <p className="text-gray-700 text-sm">To measure the oxidation inhibitors in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ADTR-2K, Automatic Capacitance and Tan Delta Test Set</h3>
                  <p className="text-gray-700 text-sm">Measures the capacitance dielectric constant tan delta and resistivity of insulation oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Columetric Karl Fischer Titrator</h3>
                  <p className="text-gray-700 text-sm">To measure the water contents in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Breakdown Voltage Oil Test Set</h3>
                  <p className="text-gray-700 text-sm">Measures the BDV of insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interfacial Tension Analyzer</h3>
                  <p className="text-gray-700 text-sm">Measure the Interfacial Tension of insulation oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sludge and Sediments</h3>
                  <p className="text-gray-700 text-sm">To measure the sludge and sediments in insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Domino Moisture in Oil Analyzer</h3>
                  <p className="text-gray-700 text-sm">Measures the water/moisture contents in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Portable Dissolved Gas Analyzer</h3>
                  <p className="text-gray-700 text-sm">Measures the dissolved gases in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Acidity Titrator</h3>
                  <p className="text-gray-700 text-sm">To measure the acid contents in the insulating oil.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Combined TGA, DTA, DSC</h3>
                  <p className="text-gray-700 text-sm">Measures the chemical analysis, oxidation induction and identification of paper insulation degradation.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">UV/VIS Spectrophotometer</h3>
                  <p className="text-gray-700 text-sm">Measures the dissolved decay contents of insulating liquids.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solid Breakdown Voltage Test Set</h3>
                  <p className="text-gray-700 text-sm">Measures the BDV of insulating paper.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 font-oxanium">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <span className="text-white font-bold text-xl">TIFAC Core</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 National Institute of Technology Hamirpur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LegacyPage;
