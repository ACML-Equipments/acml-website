'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { boardMembers, BoardMember } from './boardData';

export default function BoardOfDirectorsSection() {
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);

  const openModal = (member: BoardMember) => {
    setSelectedMember(member);
  };

  const closeModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  // Keyboard and body scroll lock handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedMember) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMember, closeModal]);

  return (
    <section className="mb-24 pt-4 relative">
      {/* Section Header */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <FadeIn>
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Governance & Leadership
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-brand-navy tracking-tight mb-4">
            Board of Directors
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Our governing board provides strategic oversight, institutional accountability, and expert guidance to drive ACML&apos;s mission across West Africa.
          </p>
        </FadeIn>
      </div>

      {/* Directors Cards Track: Horizontal carousel on mobile, responsive grid on sm+ */}
      <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-6 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 px-1 sm:px-0 snap-x snap-mandatory sm:snap-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {boardMembers.map((member, idx) => (
          <div key={member.id} className="w-[170px] xs:w-[185px] sm:w-auto flex-shrink-0 sm:flex-shrink snap-start h-full">
            <FadeIn delay={0.05 * (idx + 1)} className="h-full">
              <div
                onClick={() => openModal(member)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(member);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View biography of ${member.name}`}
                className="group text-left h-full flex flex-col bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy select-none"
              >
                {/* Member Photo or Fallback Avatar */}
                <div className="relative w-full aspect-square sm:aspect-[4/5] bg-slate-100 overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 185px, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-brand-navy via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 sm:p-6 text-center relative group-hover:scale-105 transition-transform duration-500 ease-out">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg sm:text-2xl font-bold mb-2 sm:mb-3 shadow-inner">
                        {member.name
                          .split(' ')
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join('')}
                      </div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-medium">
                        ACML Director
                      </span>
                    </div>
                  )}
                  {/* Subtle gradient overlay at bottom of image for depth */}
                  <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Card Body */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-brand-red font-bold uppercase tracking-wider text-[10px] sm:text-xs mb-1 sm:mb-1.5 line-clamp-1">
                      {member.role}
                    </p>
                    <h3 className="text-sm sm:text-lg xl:text-base 2xl:text-lg font-bold text-brand-navy font-inter group-hover:text-brand-red transition-colors mb-1 sm:mb-2 leading-snug line-clamp-1 sm:line-clamp-none">
                      <span className="sm:hidden">{member.shortName || member.name}</span>
                      <span className="hidden sm:inline">{member.name}</span>
                    </h3>
                    <p className="text-slate-600 text-[11px] sm:text-sm leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {member.shortBio}
                    </p>
                  </div>

                  {/* Read Bio Button */}
                  <div className="mt-2.5 pt-2 sm:mt-4 sm:pt-3 border-t border-slate-100 flex items-center justify-between text-brand-navy group-hover:text-brand-red transition-colors">
                    <span className="text-[11px] sm:text-sm font-semibold flex items-center gap-1">
                      Read Bio
                      <svg
                        className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-[9px] sm:text-[11px] text-slate-400 font-medium">Profile</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>

      {/* Modal / Mobile Drawer for Member Bio */}
      <AnimatePresence>
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="board-member-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Dialog (Bottom sheet on mobile, centered modal on desktop) */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.96 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full sm:max-w-2xl bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[88vh] sm:max-h-[85vh] flex flex-col"
            >
              {/* Mobile Drawer Pull Indicator */}
              <div className="sm:hidden pt-3 pb-1 flex justify-center">
                <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
              </div>

              {/* Modal Header */}
              <div className="p-6 md:p-8 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Small Avatar in Modal Header */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 shadow-sm">
                    {selectedMember.image ? (
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy to-slate-800 flex items-center justify-center text-white font-bold text-lg">
                        {selectedMember.name
                          .split(' ')
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join('')}
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="inline-block text-brand-red font-bold uppercase tracking-wider text-xs mb-1">
                      {selectedMember.role}
                    </span>
                    <h3
                      id="board-member-modal-title"
                      className="text-2xl md:text-3xl font-bold text-brand-navy font-inter tracking-tight"
                    >
                      {selectedMember.name}
                    </h3>
                    {selectedMember.credentials && selectedMember.credentials.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedMember.credentials.map((cred, i) => (
                          <span
                            key={i}
                            className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700"
                          >
                            {cred}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  type="button"
                  aria-label="Close dialog"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-brand-navy flex items-center justify-center transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body (Scrollable bio) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-4 text-slate-700 text-base md:text-lg leading-relaxed font-sans">
                {selectedMember.fullBio.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  African-Caribbean Manufacturing Ltd &bull; Board of Directors
                </span>
                <button
                  onClick={closeModal}
                  type="button"
                  className="px-5 py-2 rounded-xl bg-brand-navy text-white text-sm font-semibold hover:bg-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red shadow-sm"
                >
                  Close Bio
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
