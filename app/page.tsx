'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FEFAE0]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#819067]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#1e1e1e]">
                  Stonington HOA
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Home
                </a>
                {/* <a href="#about" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#amenities" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Amenities
                </a> */}
                <a href="/team" className="text-[#1e1e1e] hover:text-[#819067] px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Team
                </a>
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
                <a href="#home" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Home
                </a>
                {/* <a href="#about" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  About
                </a>
                <a href="#amenities" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Amenities
                </a> */}
                <a href="/team" className="text-[#1e1e1e] hover:text-[#819067] block px-3 py-2 text-base font-medium transition-colors duration-200">
                  Team
                </a>
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
      <section id="home" className="pt-24 sm:pt-20 md:pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e1e1e] leading-tight">
                  Welcome to{' '}
                  <span className="text-[#819067]">Stonington</span>
                </h1>
                <p className="text-xl sm:text-2xl text-[#1e1e1e]/80 leading-relaxed">
                  A premier HOA community in the heart of South Carolina, where neighbors become family and every day feels like home.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-[#1e1e1e]/70 leading-relaxed">
                  Discover our beautiful neighborhood featuring meticulously maintained landscapes, 
                  modern amenities, and a vibrant community spirit. Experience the perfect blend 
                  of suburban tranquility and urban convenience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#819067] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6b7a4f] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                    Explore Our Community
                  </button>
                  <button className="border-2 border-[#819067] text-[#819067] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#819067] hover:text-white transition-all duration-300 cursor-pointer">
                    View Amenities
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#819067]/20 to-[#819067]/40 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#FEFAE0] to-[#819067]/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-[#819067] rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e1e1e]">Community Living</h3>
                    <p className="text-[#1e1e1e]/70 max-w-sm mx-auto">
                      Experience the perfect blend of comfort, convenience, and community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e] mb-4">
              Why Choose Stonington HOA?
            </h2>
            <p className="text-xl text-[#1e1e1e]/70 max-w-3xl mx-auto">
              Our community offers exceptional amenities and a welcoming environment for families of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#819067] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">Professional Management</h3>
              <p className="text-[#1e1e1e]/70">
                Expert HOA management ensuring your community remains beautiful and well-maintained year-round.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#819067] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">Quality Amenities</h3>
              <p className="text-[#1e1e1e]/70">
                Enjoy premium amenities including parks, walking trails, and community spaces designed for your lifestyle.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#819067] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">Active Community</h3>
              <p className="text-[#1e1e1e]/70">
                Participate in regular community events, social gatherings, and activities that bring neighbors together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e1e1e] mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-[#1e1e1e]/70 mb-8">
            Discover why families choose Stonington HOA for their perfect home. Contact us today to learn more about available properties and community benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <button className="bg-[#819067] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6b7a4f] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
              Contact Us Today
            </button>
                         <button className="border-2 border-[#819067] text-[#819067] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#819067] hover:text-white transition-all duration-300 cursor-pointer">
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1e1e1e] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stonington HOA</h3>
              <p className="text-gray-300">
                Creating a beautiful and welcoming community in the heart of South Carolina.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-[#819067] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#819067] transition-colors">About</a></li>
                <li><a href="#amenities" className="hover:text-[#819067] transition-colors">Amenities</a></li>
                <li><Link href="/contact" className="hover:text-[#819067] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Blythewood, South Carolina</p>
                <p>Email: info@stoningtonhoa.com</p>
                <p>Phone: (803) 555-0123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                            <p>&copy; 2025 Stonington HOA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
