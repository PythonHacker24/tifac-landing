'use client'

import React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, ExternalLink, Zap, Shield, BarChart3, Leaf, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const EnergySteel = () => {

  const router = useRouter();
  const [activeService, setActiveService] = useState(0);
  const [showAllClients, setShowAllClients] = useState(false);

  const clientCategories = [
    {
      category: "Energy & Power Sector",
      clients: [
        "M/s Himachal State Electricity Board Ltd., Shimla (H.P.)",
        "M/s Larji Power House, Kullu (H.P.)",
        "M/s Voith Hydro Pvt Ltd., NOIDA (U.P.)",
        "M/s Everest Power Pvt. Ltd., Hydro Electric Project, Kullu (H.P.)",
        "M/s Crest Steel & Power Pvt. Ltd., Una (H.P.)",
        "M/s Ganvi House Division, Jeori (H.P.)",
        "M/s Baner Power House Division, Jia (H.P.)",
        "M/s Peer Panchal Pvt. Ltd., J & K",
        "M/s Himachal Pradesh Power Corporation Ltd., Shimla",
        "M/s NTPC Koldam, (H.P.)",
        "M/s Masli Small Hydro Project (5 MW), Rohru Area, Shimla",
        "Himachal Power Transmission Corporation Limited, Phojal, Distt. Kullu",
        "M/s BVPCL, Jogindernagar (H.P.)",
      ],
    },
    {
      category: "Industrial & Manufacturing",
      clients: [
        "M/s JP Enterprises, Samirpur, Hamirpur (H.P.)",
        "M/s Faiveley Transport India Ltd., Baddi (H.P.)",
        "M/s Winsome Textile Industries Ltd., Baddi (H.P.)",
        "M/s IP Enterprises, Shimla",
        "M/s Luminous Industries, Una",
        "M/s Goodwill Pvt. Ltd., Rampur Shimla (H.P.)",
        "M/s Associated Electrical Pvt. Ltd., Haridwar",
      ],
    },
    {
      category: "Educational Institutions",
      clients: [
        "Akal College of Basic Science, Distt. Sirmour (H.P.)",
        "M/s Jaypee University of Information Technology, Waknaghat (H.P.)",
        "M/s Dumchar Bani, Kandaghat, Distt. Solan (H.P.)",
        "M/s Jaiprakash Sewa Sansthan WKG, Information Technology, Waknaghat (H.P.)",
      ],
    },
  ];

  const facultyCategories = [
    {
      title: "Professors",
      members: [
        { name: "Prof. H.M. Suryawanshi", bio: "Power Electronics & Drives and Power System", image: "https://vnit.ac.in/engineering/electrical/wp-content/uploads/2022/12/hmsuryawanshi.jpg" },
        { name: "Prof. Sushil Chauhan", bio: "AI Applications in Power System Analysis", image: "https://portfolios.nith.ac.in/uploads/member_details/88.jpg" },
        { name: "Prof. Ram Naresh Sharma", bio: "Power System Operation and Control", image: "https://portfolios.nith.ac.in/uploads/member_details/89.jpg" },
        { name: "Prof. Ashwani Chandel", bio: "Power System", image: "https://portfolios.nith.ac.in/uploads/member_details/90.jpg" },
      ],
    },
    {
      title: "Associate Professors",
      members: [
        { name: "Dr. Ravinder Nath", bio: "Signal Processing & Control", image: "https://portfolios.nith.ac.in/uploads/member_details/92.jpg" },
        { name: "Dr. (Mrs.) Veena Sharma", bio: "Instrumentation and Control Engineering, Power System Operation and Control", image: "https://portfolios.nith.ac.in/uploads/member_details/93.jpg" },
        { name: "Dr. Raj Kumar Jarial", bio: "Power Electronics, Electrical Machines & Drives, Condition Monitoring, High Voltage Systems", image: "https://portfolios.nith.ac.in/uploads/member_details/94.jpg" },
        { name: "Dr. Bharat Bhushan Sharma", bio: "Nonlinear Dynamics and Control", image: "https://portfolios.nith.ac.in/uploads/member_details/95.jpg" },
        { name: "Dr. O. P. Rahi", bio: "Power System, Hydro Power, Renewable Energy", image: "https://portfolios.nith.ac.in/uploads/member_details/96.jpg" },
        { name: "Dr. Amit Kaul", bio: "Signal Processing & Control", image: "https://portfolios.nith.ac.in/uploads/member_details/98.jpg" },
      ],
    },
    {
      title: "Assistant Professors Grade-I",
      members: [
        { name: "Dr. Himesh Handa", bio: "Control Systems", image: "https://portfolios.nith.ac.in/uploads/member_details/97.jpg" },
        { name: "Dr. Rajesh Kumar", bio: "Power System, Renewable Energy, Optimisation, Scheduling", image: "https://portfolios.nith.ac.in/uploads/member_details/161.jpg" },
        { name: "Dr. Bharti Bakshi Koul", bio: "Power System", image: "https://portfolios.nith.ac.in/uploads/member_details/100.jpg" },
        { name: "Dr. Ram Niwash Mahia", bio: "Networked Control Systems, Complex Networks, Power Networks and Multi-Agent Systems", image: "https://portfolios.nith.ac.in/uploads/member_details/348.jpg" },
        { name: "Dr. Chandrasekaran S", bio: "Grid Synchronization Techniques, Cyber Security of Power Electronic and Power Systems", image: "/chand.jpg" },
        { name: "Dr. Vivek Sharma", bio: "Instrumentation and Control Engineering", image: "/vivek.jpg" },
        { name: "Dr. Jiwanjot Singh", bio: "Power Electronics, Power Quality and Renewable Energy Systems", image: "https://portfolios.nith.ac.in/uploads/member_details/407.jpg" },
      ],
    },
    {
      title: "Assistant Professors Grade-II",
      members: [
        { name: "Dr. Supriya Jaiswal", bio: "Power Quality (Power System)", image: "https://portfolios.nith.ac.in/uploads/member_details/373.jpg" },
        { name: "Dr. Pankaj Kumar Mishra", bio: "Control System, Nonlinear Control, Mathematical Control Theory, Machine Learning", image: "https://portfolios.nith.ac.in/uploads/member_details/406.jpg" },
        { name: "Dr. Sreeram TS", bio: "Power System", image: "/sreeram.jpeg" },
        { name: "Dr. Katam Nishanth", bio: "Non-Thermal Plasma, AI and ML Applications", image: "https://portfolios.nith.ac.in/uploads/member_details/391.jpg" },
        { name: "Dr. Upasana Sarma", bio: "Power System and Power Electronics", image: "https://portfolios.nith.ac.in/uploads/member_details/408.jpg" },
      ],
    },
  ];

  const services = [
    {
      title: "Dissolved Gas Analysis",
      description: "Advanced oil-dissolved gas analysis to detect incipient faults and assess transformer health with precision. Our DGA services help identify potential issues before they escalate into costly failures.",
      image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=800&q=80",
    },
    {
      title: "Thermal Imaging & Diagnostics",
      description: "Infrared thermography to identify hotspots, loose connections, and thermal anomalies in transformers. Non-invasive testing that provides immediate visual insights into equipment condition.",
      image: "https://images.unsplash.com/photo-1708974978638-f75639ea63d8?w=800&q=80",
    },
    {
      title: "Partial Discharge Detection",
      description: "High-sensitivity PD measurement and analysis for insulation condition assessment and failure prevention. Early detection of partial discharge activity prevents catastrophic failures.",
      image: "https://images.unsplash.com/photo-1554050546-c125a25df013?w=800&q=80",
    },
    {
      title: "Transformer Oil Testing",
      description: "Comprehensive oil quality testing including moisture content, acidity, and dielectric strength analysis. Complete oil diagnostics for informed maintenance decisions.",
      image: "https://images.unsplash.com/photo-1654883861330-1b4fc2f40327?w=800&q=80",
    },
    {
      title: "Condition Monitoring",
      description: "Real-time monitoring systems with data-driven analytics for predictive maintenance and life cycle management. Continuous surveillance of transformer health parameters.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Renewable Energy Integration",
      description: "Transformer diagnostics tailored for renewable energy systems including wind and solar power infrastructure. Ensuring grid reliability as energy sources evolve.",
      image: "https://images.unsplash.com/photo-1762381157076-4872b31961e0?w=800&q=80",
    },
  ];

  const pillars = [
    { icon: Zap, title: "Precise", description: "Data-driven diagnostics with laboratory-grade accuracy and repeatable results." },
    { icon: BarChart3, title: "Scalable", description: "Solutions designed for single units to entire fleet-wide transformer networks." },
    { icon: Leaf, title: "Sustainable", description: "Extending transformer life reduces waste and supports environmental goals." },
    { icon: Shield, title: "Reliable", description: "25+ years of proven methodology trusted by utilities and industrial plants." },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-[#0a0f1a]">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-12">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Solutions</a>
                <a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Services</a>
                <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</a>
              </nav>
            </div>

            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-white text-lg font-bold tracking-wider">TIFAC CORE</span>
            </Link>

            <div className="flex items-center space-x-6">
              <a href="#get-in-touch" className="hidden md:block text-white/60 hover:text-white transition-colors text-sm">Contact</a>
              <a href="/legacy" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded transition-colors">
                Explore legacy
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0a0f1a] overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="absolute inset-0">
          <video
            src="/background.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/70 to-[#0a0f1a]/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 flex-1 flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="max-w-3xl">
            <h1 className="text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Engineered solutions<br />
              for transformer<br />
              diagnostics and reliability
            </h1>
            <p className="text-white/50 text-lg mb-10 max-w-xl leading-relaxed">
              As a trusted research centre, we guide utilities and industries in their transition to reliable, data-driven transformer management.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/legacy')}
                className="bg-white text-[#0a0f1a] text-sm font-semibold px-7 py-3.5 rounded hover:bg-white/90 transition-colors flex items-center space-x-2"
              >
                <span>Explore legacy</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('get-in-touch');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-white/25 text-white text-sm font-semibold px-7 py-3.5 rounded hover:border-white/50 transition-colors"
              >
                Schedule a call
              </button>
            </div>
            </div>
          </div>

          {/* Clients */}
          <div className="py-8">
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em]">Trusted by</span>
              <button
                onClick={() => setShowAllClients(!showAllClients)}
                className="text-blue-400 hover:text-blue-300 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center space-x-1"
              >
                <span>{showAllClients ? 'Close' : 'View all'}</span>
                <ChevronRight size={12} className={`transition-transform ${showAllClients ? 'rotate-90' : ''}`} />
              </button>
            </div>

            {!showAllClients ? (
              <div className="relative overflow-hidden">
                <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
                  {[
                    "HPSEBL, Shimla",
                    "Larji Power House, Kullu",
                    "Voith Hydro Pvt Ltd, NOIDA",
                    "NTPC Koldam",
                    "HP Power Corporation Ltd",
                    "HP Transmission Corp Ltd",
                    "BVPCL, Jogindernagar",
                    "Everest Power Pvt Ltd",
                    "Crest Steel & Power, Una",
                    "Faiveley Transport, Baddi",
                    "Winsome Textile, Baddi",
                    "Luminous Industries, Una",
                    "JP Enterprises, Hamirpur",
                    "Jaypee University, Waknaghat",
                    "HPSEBL, Shimla",
                    "Larji Power House, Kullu",
                    "Voith Hydro Pvt Ltd, NOIDA",
                    "NTPC Koldam",
                    "HP Power Corporation Ltd",
                    "HP Transmission Corp Ltd",
                    "BVPCL, Jogindernagar",
                    "Everest Power Pvt Ltd",
                    "Crest Steel & Power, Una",
                    "Faiveley Transport, Baddi",
                    "Winsome Textile, Baddi",
                    "Luminous Industries, Una",
                    "JP Enterprises, Hamirpur",
                    "Jaypee University, Waknaghat",
                  ].map((client, index) => (
                    <span key={index} className="inline-flex items-center mx-6 text-white text-base font-medium shrink-0">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clientCategories.map((cat, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">{cat.category}</h4>
                    <ul className="space-y-2.5">
                      {cat.clients.map((client, index) => (
                        <li key={index} className="text-white/70 text-sm leading-relaxed">{client}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section - Sidebar Layout */}
      <section id="services" className="bg-[#f7f7f7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            {/* Left Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 py-16 lg:pr-8 lg:border-r border-neutral-200">
              <h2 className="text-3xl font-bold text-[#0a0f1a] mb-2 leading-tight">
                Engineered<br />
                to industry<br />
                standards
              </h2>
              <p className="text-neutral-500 text-sm mb-10 max-w-xs">
                From energy generation to grid reliability, our solutions enhance every aspect of transformer performance.
              </p>

              <nav className="space-y-0">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left py-4 border-b border-neutral-200 flex items-center justify-between group transition-colors ${
                      activeService === index ? 'text-[#0a0f1a]' : 'text-neutral-400 hover:text-neutral-600'
                    }`}
                  >
                    <span className={`text-sm font-medium ${activeService === index ? 'font-semibold' : ''}`}>
                      {service.title}
                    </span>
                    <ArrowRight size={14} className={`transition-all ${activeService === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                  </button>
                ))}
              </nav>

              <button className="mt-8 text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-1 transition-colors">
                <span>Learn more</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 xl:col-span-9 relative">
              <div className="lg:pl-12 py-16 h-full flex flex-col justify-center">
                <div className="relative rounded-xl overflow-hidden mb-8 aspect-[16/9] max-h-[400px]">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <h3 className="text-2xl font-bold text-[#0a0f1a] mb-3">{services[activeService].title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed max-w-2xl">{services[activeService].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial CTA Section - Dark with photo */}
      <section className="relative bg-[#0a0f1a] py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=1400&q=80"
            alt="Industrial transformer"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/80 to-[#0a0f1a]/60" />
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">What We Deliver</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl mx-auto">
            Industrial energy,<br />
            engineered to last
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Technical audits and system improvements to increase efficiency and system reliability across your transformer fleet.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('get-in-touch');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded transition-colors"
          >
            Request audit
          </button>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-white py-20 border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="px-8 py-8 lg:first:pl-0 lg:last:pr-0 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0f1a] mb-5">
                    <Icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0f1a] mb-2">{pillar.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">About TIFAC Core</span>
              </div>
              <h2 className="text-4xl font-bold text-[#0a0f1a] mb-6 leading-tight">
                Pioneering transformer<br />
                diagnostics since 2000
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-5">
                At TIFAC Core, we specialize in advanced transformer diagnostics designed to improve reliability, extend asset life, and prevent unexpected failures. Using state-of-the-art tools and techniques including dissolved gas analysis, partial discharge detection, and thermal imaging we deliver precise, data-driven insights into transformer health.
              </p>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Our team of experts helps utilities, industrial plants, and energy providers make informed decisions that reduce downtime and optimize performance.
              </p>
              <button
                onClick={() => router.push("/legacy")}
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center space-x-2 transition-colors"
              >
                <span>View our legacy</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554050546-c125a25df013?w=800&q=80"
                  alt="Electrical substation"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0a0f1a] text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-white/50 text-sm">Years of<br />excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-[#0a0f1a] text-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our diagnostics experts
            </h2>
          </div>

          {facultyCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-white/10">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <h3 className="text-lg font-semibold text-white/80">{category.title}</h3>
                <div className="flex-1" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
                {category.members.map((member, index) => (
                  <div key={index} className="group text-center">
                    <div className="relative mx-auto w-40 mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-52 object-cover rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-all duration-300 bg-white/5"
                      />
                    </div>
                    <h4 className="text-sm font-semibold mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h4>
                    <p className="text-white/30 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section id="get-in-touch" className="relative bg-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-[0.2em]">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a0f1a] leading-tight mb-5">
              Ready to optimize your<br />transformer performance?
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed max-w-xl mx-auto">
              Whether you need a one-time diagnostic audit or an ongoing monitoring partnership, reach out to our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Director */}
            <div className="bg-[#0a0f1a] rounded-xl p-8 text-white">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Director</span>
              <h3 className="text-xl font-bold mt-2 mb-1">Prof. H. M. Suryawanshi</h3>
              <p className="text-white/40 text-sm mb-6">National Institute of Technology Hamirpur (H.P.) - 177005</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span className="text-white/60 text-sm">+91-1972-254001 / 222308</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span className="text-white/60 text-sm">+91-94236-82753 / +91-95610-49352</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  <a href="mailto:director@nith.ac.in" className="text-white/60 text-sm hover:text-white transition-colors">director@nith.ac.in</a>
                </div>
              </div>
            </div>

            {/* Co-ordinator */}
            <div className="bg-[#0a0f1a] rounded-xl p-8 text-white">
              <span className="text-blue-400 text-xs font-semibold uppercase tracking-[0.2em]">Co-ordinator</span>
              <h3 className="text-xl font-bold mt-2 mb-1">Dr. Raj Kumar Jarial</h3>
              <p className="text-white/40 text-sm mb-6">Associate Professor, Department of Electrical Engineering<br />NIT Hamirpur (H.P.) - 177005</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span className="text-white/60 text-sm">+91-1972-254338 / 254512</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={14} className="text-blue-400 shrink-0" />
                  <span className="text-white/60 text-sm">+91-94188-47240</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={14} className="text-blue-400 shrink-0" />
                  <a href="mailto:jarial0@gmail.com" className="text-white/60 text-sm hover:text-white transition-colors">jarial0@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#060a12] text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-1 tracking-wider">TIFAC CORE</h3>
              <p className="text-blue-400 text-[10px] uppercase tracking-[0.25em] mb-5">Transformer Diagnostics</p>
              <p className="text-white/30 text-sm leading-relaxed">
                Advanced transformer diagnostics centre at the Department of Electrical Engineering, National Institute of Technology Hamirpur.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>About Us</span></a></li>
                <li><a href="#team" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Our Team</span></a></li>
                <li><a href="#services" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Services</span></a></li>
                <li><a href="/legacy" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>Legacy</span></a></li>
                <li><a href="https://nith.ac.in" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>NIT Hamirpur</span></a></li>
                <li><a href="https://nith.ac.in/electrical-engineering" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ExternalLink size={12} /><span>EE Department</span></a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}><a href="#services" className="text-white/30 hover:text-white transition-colors text-sm flex items-center space-x-2"><ChevronRight size={12} /><span>{service.title}</span></a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white/30 text-sm">TIFAC Core, EE Department, NIT Hamirpur, Himachal Pradesh 177005</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-sm">+91 7400321092</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={13} className="text-blue-400 shrink-0" />
                  <span className="text-white/30 text-sm">tifac@nith.ac.in</span>
                </li>
              </ul>
              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded transition-colors w-full">
                Request audit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/20 text-xs">&copy; 2025 National Institute of Technology Hamirpur. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-3 md:mt-0">
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors text-xs">Privacy Policy</a>
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors text-xs">Terms of Use</a>
              <a href="#" className="text-white/20 hover:text-white/50 transition-colors text-xs">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnergySteel;
