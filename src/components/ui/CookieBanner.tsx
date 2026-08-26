'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-slate-600 text-sm md:text-base flex-1">
              <p>
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. 
                Read our <Link href="/cookie-policy" className="text-brand-red hover:underline font-medium">Cookie Policy</Link> to learn more.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={declineCookies}
                className="px-6 py-2.5 rounded-full text-sm font-medium border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors w-full sm:w-auto text-center"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2.5 rounded-full text-sm font-medium bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors w-full sm:w-auto text-center shadow-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
