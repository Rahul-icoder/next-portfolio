import React, { useEffect } from 'react';
import { AiOutlineWhatsApp } from "react-icons/ai";

// Sections / components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import { contactInfo } from '../data/data';

// Optimized custom CSS for animations and styling
const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
  }

  html {
    scroll-behavior: smooth;
    /* Optimize for scrolling performance */
    -webkit-overflow-scrolling: touch;
  }

  /* Performance optimizations */
  * {
    transform-style: preserve-3d;
    backface-visibility: hidden;
    perspective: 1000px;
  }

  /* Optimize animations for performance */
  .will-change-transform {
    will-change: transform;
  }

  .will-change-contents {
    will-change: contents;
  }

  /* GPU acceleration for smooth animations */
  .gpu-accelerated {
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f1f1f1; }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }

  /* Optimized Animations */
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) translateZ(0); }
    50% { transform: translateY(-20px) translateZ(0); }
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateZ(0); }
    100% { transform: translateX(100%) translateZ(0); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px) translateZ(0); }
    to { opacity: 1; transform: translateY(0) translateZ(0); }
  }

  @keyframes slideInFromLeft {
    from { opacity: 0; transform: translateX(-50px) translateZ(0); }
    to { opacity: 1; transform: translateX(0) translateZ(0); }
  }

  @keyframes slideInFromRight {
    from { opacity: 0; transform: translateX(50px) translateZ(0); }
    to { opacity: 1; transform: translateX(0) translateZ(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0);
    }
    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0);
    }
    90% { transform: translate3d(0, -4px, 0); }
  }

  /* Utilities with performance optimizations */
  .animate-blob {
    animation: blob 7s infinite;
    will-change: transform;
  }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  .animate-float {
    animation: float 6s ease-in-out infinite;
    will-change: transform;
  }
  .animate-float-delayed {
    animation: float 8s ease-in-out infinite;
    animation-delay: 2s;
    will-change: transform;
  }
  .animate-float-slow {
    animation: float 10s ease-in-out infinite;
    animation-delay: 4s;
    will-change: transform;
  }
  .animate-shimmer {
    animation: shimmer 2s infinite;
    will-change: transform;
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out;
    will-change: opacity, transform;
  }
  .animate-slideInLeft {
    animation: slideInFromLeft 0.6s ease-out;
    will-change: opacity, transform;
  }
  .animate-slideInRight {
    animation: slideInFromRight 0.6s ease-out;
    will-change: opacity, transform;
  }

  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .hover-scale {
    transition: transform 0.3s ease;
    will-change: transform;
  }
  .hover-scale:hover { transform: scale(1.05) translateZ(0); }

  .focus-ring:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }

  .loading-dots { display: inline-block; }
  .loading-dots::after { content: ''; animation: pulse 1.5s infinite; }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none; color: white; padding: 12px 24px; border-radius: 8px;
    font-weight: 600; transition: all 0.3s ease; cursor: pointer;
    will-change: transform;
  }
  .btn-primary:hover {
    transform: translateY(-2px) translateZ(0);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
  }

  .btn-secondary {
    background: transparent; border: 2px solid #667eea; color: #667eea;
    padding: 10px 22px; border-radius: 8px; font-weight: 600;
    transition: all 0.3s ease; cursor: pointer;
    will-change: transform, background-color;
  }
  .btn-secondary:hover {
    background: #667eea; color: white; transform: translateY(-2px) translateZ(0);
  }

  /* Smooth scrolling for all browsers */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container { padding: 0 16px; }
    .text-responsive { font-size: clamp(1.5rem, 4vw, 3rem); }

    /* Reduce animations on mobile for better performance */
    .animate-blob,
    .animate-float,
    .animate-float-delayed,
    .animate-float-slow {
      animation: none;
    }
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    .auto-dark { background-color: #1a202c; color: #e2e8f0; }
  }

  /* Print */
  @media print { .no-print { display: none; } }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Selection */
  ::selection { background: #667eea; color: white; }
  ::-moz-selection { background: #667eea; color: white; }

  /* Performance optimizations for images */
  img {
    max-width: 100%;
    height: auto;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: optimize-contrast;
  }

  /* Optimize text rendering */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Optimize layout shifts */
  .aspect-square {
    aspect-ratio: 1;
  }

  .aspect-video {
    aspect-ratio: 16 / 9;
  }
`;

export default function Home() {
  useEffect(() => {
    // Inject custom styles
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);

    // Title
    document.title = 'Rahul Kushwaha - Software & Cloud Engineer';

    // Ensure meta description exists, then set content
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Software Engineer with 4.5+ years experience in full-stack development, cloud technologies, and industrial IoT solutions. Specialized in MERN stack, Python, and AWS.'
    );

    // Add viewport meta for mobile optimization
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
      document.head.appendChild(viewportMeta);
    }

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Rahul Kushwaha",
      "jobTitle": "Software & Cloud Engineer",
      "description": "Software Engineer with 4.5+ years experience in full-stack development",
      "url": "https://findrahul.netlify.app",
      "email": "rahulkerma12345@gmail.com",
      "telephone": "+91-82100-78058",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Faridabad",
        "addressRegion": "New Delhi",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://github.com/Rahul-icoder",
        "https://linkedin.com/in/rahul-kushwaha-5002981b6",
        "https://instagram.com/rahulkushwaha_001"
      ],
      "knowsAbout": [
        "JavaScript", "React", "Node.js", "Python", "AWS", "MongoDB",
        "TypeScript", "Next.js", "Express.js", "Docker", "Linux"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Performance optimization: Preload critical resources
    const preloadFont = document.createElement('link');
    preloadFont.rel = 'preload';
    preloadFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    preloadFont.as = 'style';
    document.head.appendChild(preloadFont);

    return () => {
      // Cleanup on unmount
      if (styleSheet.parentNode) document.head.removeChild(styleSheet);
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main id="home">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <a
          href={contactInfo?.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label="Contact via WhatsApp"
        >
          <div className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 will-change-transform">
            <AiOutlineWhatsApp className="text-2xl group-hover:animate-pulse" />
          </div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
          </div>
        </a>
      </div>

      {/* Skip to Content (Accessibility) */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
      >
        Skip to main content
      </a>
    </div>
  );
}
