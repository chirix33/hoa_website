'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "John",
      position: "President",

      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Leading our community with dedication and vision, ensuring every resident feels at home.",
      email: "president@blythewoodhoa.com"
    },
    {
      name: "Aprill Pedigrew",
      position: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Supporting community initiatives and fostering strong relationships between neighbors.",
      email: "vicepresident@blythewoodhoa.com"
    },
    {
      name: "Someone Else",
      position: "Secretary",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Keeping our community informed and organized with clear communication and attention to detail.",
      email: "secretary@blythewoodhoa.com"
    },
    {
      name: "Another Person",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Managing our community's financial health with transparency and responsible stewardship.",
      email: "treasurer@blythewoodhoa.com"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#819067]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
                             <div className="flex-shrink-0">
                 <Link href="/" className="text-2xl font-bold text-[#1e1e1e]">
                   Blythewood HOA
                 </Link>
               </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                                 <Link href="/" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                   Home
                 </Link>
                                 {/* <a href="#about" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                   About
                 </a>
                 <a href="#amenities" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                   Amenities
                 </a> */}
                <Link href="/team" className="text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Team
                </Link>
                <Link href="/contact" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
                <button className="bg-[#819067] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6b7a4f] transition-colors duration-200 cursor-pointer">
                  Join Community
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1e1e1e] hover:text-[#819067] focus:outline-none focus:text-[#819067]"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-[#819067]/20">
                                 <Link href="/" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                   Home
                 </Link>
                                 {/* <a href="#about" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                   About
                 </a>
                 <a href="#amenities" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                   Amenities
                 </a> */}
                <Link href="/team" className="text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Team
                </Link>
                <Link href="/contact" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Contact
                </Link>
                <button className="w-full bg-[#819067] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#6b7a4f] transition-colors duration-200 mt-4 cursor-pointer">
                  Join Community
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-20 md:pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1e1e] leading-tight mb-6">
              Get to know{' '}
              <span className="text-[#819067]">us</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e1e1e]/80 leading-relaxed max-w-4xl mx-auto">
              Meet the dedicated team of volunteers who work tirelessly to maintain the beauty, 
              harmony, and quality of life in our Blythewood HOA community.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  {/* Member Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#1e1e1e] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#819067] font-semibold mb-4">
                      {member.position}
                    </p>
                    <p className="text-[#1e1e1e]/70 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="inline-block bg-[#819067] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6b7a4f] transition-colors duration-200 cursor-pointer"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e1e1e] mb-4">
              Want to Get Involved?
            </h2>
            <p className="text-lg text-[#1e1e1e]/70 mb-8 max-w-2xl mx-auto">
              Our community thrives on active participation. Join us in making Blythewood an even better place to live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#819067] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6b7a4f] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                Attend Next Meeting
              </button>
              <button className="border-2 border-[#819067] text-[#819067] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#819067] hover:text-white transition-all duration-300 cursor-pointer">
                Volunteer Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1e1e] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Blythewood HOA</h3>
              <p className="text-gray-300">
                Creating a beautiful and welcoming community in the heart of South Carolina.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                                 <li><Link href="/" className="hover:text-[#819067] transition-colors">Home</Link></li>
                <li><a href="#about" className="hover:text-[#819067] transition-colors">About</a></li>
                <li><a href="#amenities" className="hover:text-[#819067] transition-colors">Amenities</a></li>
                <li><Link href="/team" className="hover:text-[#819067] transition-colors">Team</Link></li>
                <li><Link href="/contact" className="hover:text-[#819067] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Blythewood, South Carolina</p>
                <p>Email: info@blythewoodhoa.com</p>
                <p>Phone: (803) 555-0123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Blythewood HOA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 