'use client'

import React from 'react';
import { ChevronRight, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

const EnergySteel = () => {

  const router = useRouter();

  const directors = [
    {
      name: "Dr. Raj Kumar Jariyal",
      bio: "Chairman of TIFAC Core since 2000. Assistant professor at Electrical Engineering Department at the National Institute of Technology Hamirpur, Himachal Pradesh.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Sarah Mitchell",
      bio: "Senior Transformer Diagnostics Specialist with 15+ years of experience in power system analysis and predictive maintenance technologies.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Michael Chen",
      bio: "Expert in dissolved gas analysis and thermal imaging diagnostics. PhD in Electrical Engineering from Stanford University.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Priya Sharma",
      bio: "Lead Engineer specializing in partial discharge detection and transformer life cycle management. 12 years in the industry.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. James Rodriguez",
      bio: "Senior Research Scientist focusing on advanced diagnostic algorithms and machine learning applications in transformer monitoring.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Lisa Thompson",
      bio: "Principal Engineer with expertise in grid modernization and smart transformer technologies. IEEE Senior Member.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Ahmed Hassan",
      bio: "Specialist in high-voltage transformer diagnostics and failure analysis. 18 years of field experience across multiple continents.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Emily Watson",
      bio: "Expert in transformer oil analysis and condition assessment. PhD in Chemical Engineering with focus on electrical insulation.",
      image: "/api/placeholder/300/350"
    },
    {
      name: "Dr. Robert Kim",
      bio: "Senior Consultant in transformer asset management and reliability engineering. Former utility executive with 20+ years experience.",
      image: "/api/placeholder/300/350"
    }
  ];

  const businessSegments = [
    {
      title: "Aerospace Bar",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Pipe",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Line Pipe",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Sales",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Procurement",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Logistic",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute font-oxanium top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-white text-3xl">
                TIFAC CORE
              </span>
              <span className="text-white text-sm opacity-80">Transformer Diagnostics</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 text-white">
              <a href="#" className="hover:text-blue-300 transition-colors">Team</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Services</a>
              <a href="#" className="hover:text-blue-300 transition-colors">About Us</a>
              <a href="/legacy" className="hover:text-blue-300 transition-colors">Legacy</a>
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

      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <video
            src="/background.mp4" // <-- replace with your actual video filename
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white font-oxanium">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Reliable<br />
              <span className="text-nowrap">Transformer Diagnostics</span><br />
              To Power Your Future
            </h1>
            <p className="text-lg mb-8 opacity-90 max-w-md">
            At TIFAC Core, we specialize in advanced transformer diagnostics that keep your critical infrastructure running at peak performance. With cutting-edge technology, deep industry expertise, and real-time insights, we help you detect issues before they become costly failures.
            </p>
            <button className="bg-transparent px-8 py-3 rounded-lg border border-white text-white font-semibold hover:border-2 transition-colors flex items-center space-x-2" onClick={() => router.push("/legacy")}>
              <span>Explore Legacy</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900 text-white font-oxanium">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-blue-400 mb-4">02</div>
              <div className="text-sm text-blue-400 mb-2">ABOUT US</div>
              <h2 className="text-4xl font-bold mb-6">
                WE EXPLORE<br />
                TO EMPOWER
              </h2>
              <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2">
                <span>READ MORE</span>
                <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              At TIFAC Core, we specialize in advanced transformer diagnostics designed to improve reliability, extend asset life, and prevent unexpected failures. Using state-of-the-art tools and techniques including dissolved gas analysis (DGA), partial discharge detection, and thermal imaging we deliver precise, data-driven insights into transformer health. Our team of experts helps utilities, industrial plants, and energy providers make informed decisions that reduce downtime and optimize performance.
              </p>
              <p className="text-gray-300 leading-relaxed">
              With decades of research-backed expertise and a focus on predictive maintenance, TIFAC Core is your trusted partner in transformer life cycle management. Whether you’re dealing with aging infrastructure or planning for grid modernization, we offer scalable solutions that align with your operational goals. Power your systems with confidence because when your transformers perform better, everything runs better.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Business Segments */}
      <section className="py-20 bg-gray-50 font-oxanium">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-blue-600 mb-2">03</div>
            <div className="text-sm text-gray-500 mb-4">BUSINESS SEGMENTS</div>
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-gray-900">
                OUR<br />
                CLASS SERVICES
              </h2>
              <button className="text-blue-600 hover:text-blue-700 transition-colors flex items-center space-x-2">
                <span>READ MORE</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessSegments.map((segment, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img 
                    src={segment.image} 
                    alt={segment.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{segment.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="text-sm text-blue-300 mb-2">04</div>
            <div className="text-sm text-blue-300 mb-4">MANAGEMENT</div>
            <h2 className="text-4xl font-bold font-oxanium">
              OUR<br />
              DIAGNOSTICS EXPERTS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-oxanium mb-12">
            {directors.map((director, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img 
                    src={director.image} 
                    alt={director.name}
                    className="w-64 h-80 object-cover rounded-lg mx-auto bg-gray-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{director.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{director.bio}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-transparent border border-white/30 px-8 py-3 rounded-lg text-white font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2 mx-auto">
              <span>View More Members</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

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

export default EnergySteel;
