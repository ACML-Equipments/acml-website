import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';

export function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-2 pb-12 border-t border-slate-200">
      <StaggerContainer className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <FadeInStaggerItem direction="up" className="col-span-1 md:col-span-2">
          <div className="relative h-24 w-full max-w-[16rem] md:max-w-[24rem] -mb-2">
            <Image
              src="/ACML-footer.png"
              alt="ACML Logo"
              fill
              className="object-contain object-left-top"
            />
          </div>
          <p className="mb-4 max-w-md">
            African-Caribbean Manufacturing Ltd. Locally Made. Internationally Standard. Built for African Classrooms.
          </p>
          <p className="text-sm">
            Affiliated with Akpabey Group LLC, USA.
          </p>
        </FadeInStaggerItem>
        
        <FadeInStaggerItem direction="up" className="pt-12">
          <h3 className="font-semibold text-brand-navy mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products" className="hover:text-brand-red transition-colors">Products</Link></li>
            <li><Link href="/repair-maintenance" className="hover:text-brand-red transition-colors">Repair & Maintenance</Link></li>
            <li><Link href="/training" className="hover:text-brand-red transition-colors">Training</Link></li>
            <li><Link href="/partnerships" className="hover:text-brand-red transition-colors">Partnerships</Link></li>
            <li><Link href="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
            <li><Link href="/cookie-policy" className="hover:text-brand-red transition-colors">Cookie Policy</Link></li>
          </ul>
        </FadeInStaggerItem>

        <FadeInStaggerItem direction="up" className="pt-12">
          <h3 className="font-semibold text-brand-navy mb-4 uppercase text-sm tracking-wider">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Accra, Ghana</li>
            <li><a href="mailto:info@acmlghana.com" className="hover:text-brand-red transition-colors">info@acmlghana.com</a></li>
          </ul>
        </FadeInStaggerItem>
      </StaggerContainer>
      <FadeIn delay={0.3} direction="up" className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-200 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} African-Caribbean Manufacturing Ltd. All rights reserved.</p>
      </FadeIn>
    </footer>
  );
}
