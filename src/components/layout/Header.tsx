'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const menuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: { 
    height: "auto", 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.1
    } 
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const linkVariants: Variants = {
  hidden: { y: -15, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white text-black shadow-md sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 h-[76px] flex items-center justify-between bg-white relative z-20">
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <Image
            src="/nav barlogo.png"
            alt="A-CML Logo"
            width={190}
            height={72}
            className="h-[72px] w-auto"
            priority
          />
          <div className="flex flex-col text-xs md:text-sm font-bold leading-tight tracking-tight text-brand-navy font-inter">
            <span>AFRICAN-CARIBBEAN</span>
            <span>MANUFACTURING LTD</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 font-medium text-base uppercase tracking-wide">
          <Link href="/about" className="hover:text-brand-red transition-colors">About</Link>
          <Link href="/products" className="hover:text-brand-red transition-colors">Products</Link>
          <Link href="/repair-maintenance" className="hover:text-brand-red transition-colors">Repair & Maintenance</Link>
          <Link href="/training" className="hover:text-brand-red transition-colors">Training</Link>
          <Link href="/partnerships" className="hover:text-brand-red transition-colors">Partnerships</Link>
          <Link href="/contact" className="bg-brand-red text-white font-inter px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button 
            className="text-black focus:outline-none p-2 -mr-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 overflow-hidden z-10 origin-top"
          >
            <nav className="flex flex-col font-medium text-sm uppercase tracking-wide p-4 gap-2 text-center pb-6">
              <motion.div variants={linkVariants}>
                <Link href="/about" className="block w-full py-1.5 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>About</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/products" className="block w-full py-1.5 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>Products</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/repair-maintenance" className="block w-full py-1.5 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>Repair & Maintenance</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/training" className="block w-full py-1.5 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>Training</Link>
              </motion.div>
              <motion.div variants={linkVariants}>
                <Link href="/partnerships" className="block w-full py-1.5 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>Partnerships</Link>
              </motion.div>
              <motion.div variants={linkVariants} className="pt-2">
                <Link href="/contact" className="inline-block mx-auto px-10 py-2 mt-2 bg-brand-red text-white font-inter rounded-full hover:bg-red-700 transition-colors" onClick={closeMobileMenu}>Contact</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
