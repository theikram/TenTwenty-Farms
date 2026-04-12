import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

const TextReveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 p-4 md:p-8">
      <nav className="w-full h-[70px] md:h-[101px] px-5 md:px-12 flex justify-between items-center bg-[#EEF4F9] shadow-sm">
        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 md:gap-12 items-center text-[#1A1A1A]">
          <a href="#" className="font-['Work_Sans'] text-[14px] leading-[140%] font-normal hover:opacity-70 transition-opacity">About</a>
          <a href="#" className="font-['Work_Sans'] text-[14px] leading-[140%] font-normal hover:opacity-70 transition-opacity">News</a>
          <a href="#" className="font-['Work_Sans'] text-[14px] leading-[140%] font-normal hover:opacity-70 transition-opacity">Services</a>
          <a href="#" className="font-['Work_Sans'] text-[14px] leading-[140%] font-normal hover:opacity-70 transition-opacity">Our Team</a>
          <a href="#" className="font-['Work_Sans'] text-[14px] leading-[140%] font-normal hover:opacity-70 transition-opacity">Make Enquiry</a>
        </div>

        {/* Mobile: Contact us on left */}
        <div className="flex md:hidden items-center">
          <button className="flex items-center gap-3 px-4 py-2.5 border border-[#1A1A1A] font-['Work_Sans'] text-[13px] leading-[140%] font-normal text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all group">
            Contact us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Desktop: Contact us on right */}
        <div className="hidden md:flex items-center">
          <button className="flex items-center gap-4 px-6 py-3 border border-[#1A1A1A] font-['Work_Sans'] text-[14px] leading-[140%] font-normal text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all group">
            Contact us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Mobile hamburger - far right */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 text-[#1A1A1A]">
          <Menu size={24} />
        </button>
      </nav>
    </div>
  );
};

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "From Our Farms\nTo Your Hands",
      subtitle: "Welcome To TenTwenty Farms",
      image: "/images/Hero Image.jpg"
    },
    {
      id: 2,
      title: "Freshly Harvested\nEvery Day",
      subtitle: "Welcome To TenTwenty Farms",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 3,
      title: "Sustainable Farming\nFor A Better Future",
      subtitle: "Welcome To TenTwenty Farms",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 4,
      title: "Organic Excellence\nIn Every Bite",
      subtitle: "Welcome To TenTwenty Farms",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const duration = 5000;

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((curr) => (curr + 1) % slides.length);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        nextSlide();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [current, nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ clipPath: "inset(50% 0% 50% 0%)", zIndex: 20 }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", zIndex: 20 }}
          exit={{ opacity: 0, zIndex: 10 }}
          transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="Farm"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-[10%] z-30 pointer-events-none">
        <div className="overflow-hidden mb-4">
          <motion.p
            key={`subtitle-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-[13px] md:text-[16px] leading-[150%] font-normal font-['Work_Sans']"
          >
            {slides[current].subtitle}
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            key={`title-${current}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#EEF4F9] text-[36px] md:text-[64px] leading-[110%] md:leading-[100%] font-normal font-['Work_Sans'] whitespace-pre-line"
          >
            {slides[current].title}
          </motion.h1>
        </div>
      </div>

      <div className="absolute bottom-12 md:bottom-24 left-4 md:left-[10%] z-20 flex items-center gap-4 md:gap-8">
        {/* Next Slide Thumbnail Trigger */}
        <div
          className="relative w-[110px] h-[110px] md:w-[150px] md:h-[150px] cursor-pointer flex items-center justify-center p-[15px] md:p-[20px]"
          onClick={nextSlide}
        >
          {/* Main Thumbnail Container */}
          <div className="relative w-full h-full overflow-hidden bg-black/20">
            <img
              src={slides[(current + 1) % slides.length].image}
              alt="Next"
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-[14px] font-normal tracking-wide">Next</span>
            </div>
          </div>

          {/* Animated Progress Border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 150 150">
            {/* Background Border */}
            <rect
              x="2"
              y="2"
              width="146"
              height="146"
              fill="none"
              stroke="white"
              strokeWidth="1"
              className="opacity-30"
            />
            {/* Progress Stroke */}
            <rect
              x="2"
              y="2"
              width="146"
              height="146"
              fill="none"
              stroke="white"
              strokeWidth="4"
              strokeDasharray="584"
              strokeDashoffset={584 - (584 * progress) / 100}
              className="transition-all duration-50 ease-linear"
            />
          </svg>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-4 md:gap-6 text-white text-[13px] md:text-[16px] font-normal tracking-widest pl-2 md:pl-4">
          <span>0{current + 1}</span>
          <div className="w-[70px] md:w-[100px] h-[1px] bg-white opacity-40 mx-1 md:mx-2 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-50 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>0{slides.length}</span>
        </div>
      </div>
    </section>
  );
};

const QualityProducts = () => {
  const products = [
    {
      id: 1,
      name: "Client 1",
      location: "Dubai, United Arab Emirates",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/carousel/00ce5eb0832ccca6bc55a736a60b7421d25e94f5.png"
    },
    {
      id: 2,
      name: "Client 2",
      location: "Nairobi, Kenya",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: "/images/carousel/01460c6e899d062ab9fc4aa4f0b2b4553f88db55.png"
    },
    {
      id: 3,
      name: "Client 3",
      location: "Amsterdam, Netherlands",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/images/carousel/032d752cf92e0cabf39dfb617a139fdd963501a8.png"
    },
    {
      id: 4,
      name: "Client 4",
      location: "Cape Town, South Africa",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/07910f7f188a8f483ded59346fe0fd6d10d14b9a.png"
    },
    {
      id: 5,
      name: "Client 5",
      location: "New York, USA",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/1692c5be6a32e029287770f0185921902a344e4f.png"
    },
    {
      id: 6,
      name: "Client 6",
      location: "London, UK",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/28c6580a929200249a80a2c9958e1c3898048618.png"
    },
    {
      id: 7,
      name: "Client 7",
      location: "Tokyo, Japan",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/340fac90fd6dfbaeba51d1e63c2f7abcbe67478b.png"
    },
    {
      id: 8,
      name: "Client 8",
      location: "Sydney, Australia",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/8f78f5452c06cf20973a3a45f5be4b527cd28d57.png"
    },
    {
      id: 9,
      name: "Client 9",
      location: "Paris, France",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/images/carousel/f83dd14e8c68b40c5d3c7be77be84879d8d69064.png"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 md:py-44 bg-[#F9F7F3] overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl text-center mb-10 md:mb-24 px-6">
        <TextReveal className="mb-4 md:mb-6 flex justify-center">
          <h2 className="font-['Work_Sans'] font-normal text-[32px] md:text-[56px] leading-[40px] md:leading-[72px] tracking-[-1px] text-center text-[#1A1A1A]">
            Quality Products
          </h2>
        </TextReveal>
        <TextReveal delay={0.2} className="flex justify-center">
          <p className="font-['Work_Sans'] font-normal text-[15px] md:text-[24px] leading-[140%] md:leading-[100%] tracking-[0px] text-center text-[#666666] max-w-5xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </TextReveal>
      </div>

      <div className="relative w-full h-[400px] md:h-[800px] flex items-center justify-center">
        <motion.div
          className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence initial={false}>
            {products.map((product, index) => {
              let offset = index - activeIndex;

              // Infinite loop logic: wrap around offsets
              if (offset < -2) offset += products.length;
              if (offset > 2) offset -= products.length;

              const isVisible = Math.abs(offset) <= 1;

              return (
                <motion.div
                  key={product.id}
                  initial={{
                    opacity: 0,
                    x: offset * 1000,
                    y: 80,
                    rotate: offset * 15,
                    scale: 1
                  }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: offset * (window.innerWidth > 768 ? 780 : 260),
                    y: Math.abs(offset) * 50,
                    rotate: offset * 8,
                    scale: 1,
                    zIndex: offset === 0 ? 30 : 10
                  }}
                  exit={{
                    opacity: 0,
                    x: offset * 1200,
                    y: 80,
                    rotate: offset * 15,
                    scale: 1
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-[230px] md:w-[550px] aspect-[3/4] pointer-events-none"
                >
                  <div className="w-full h-full overflow-hidden relative shadow-2xl bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-10 md:mt-16 text-center h-[100px] md:h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="font-['Work_Sans'] font-normal text-[24px] md:text-[36px] leading-[36px] md:leading-[60px] tracking-[-1px] text-center text-[#1A1A1A] mb-1 md:mb-2">
              {products[activeIndex].name}
            </h3>
            <p className="font-['Work_Sans'] font-normal text-[16px] md:text-[24px] leading-[100%] tracking-[0px] text-center text-[#666666]">
              {products[activeIndex].location}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QualityProducts />

      {/* <footer className="py-20 px-20 border-t border-gray-100 flex justify-between items-center bg-white">
        <p className="text-sm text-secondary">© 2026 TenTwenty Farms. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-secondary hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </footer> */}
    </main>
  );
}
