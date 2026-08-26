import { Metadata } from 'next';
import { FadeIn, StaggerContainer, FadeInStaggerItem } from '@/components/ui/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for African-Caribbean Manufacturing Ltd',
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Cookie Policy</h1>
          <p className="text-lg text-slate-600 mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </FadeIn>

        <StaggerContainer className="max-w-none text-slate-700 space-y-8">
          <FadeInStaggerItem direction="up">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">1. What Are Cookies</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
            </p>
          </FadeInStaggerItem>

          <FadeInStaggerItem direction="up">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">2. How We Use Cookies</h2>
            <p className="leading-relaxed mb-4">
              African-Caribbean Manufacturing Ltd (A-CML) uses cookies to improve your experience on our website. We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li><strong>Essential Cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or use a shopping cart.</li>
              <li><strong>Analytical/Performance Cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works.</li>
              <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
            </ul>
          </FadeInStaggerItem>

          <FadeInStaggerItem direction="up">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Managing Cookies</h2>
            <p className="leading-relaxed mb-4">
              You can set your browser not to accept cookies. However, in a few cases, some of our website features may not function as a result. You can choose to accept or decline cookies through our cookie banner when you first visit our site.
            </p>
            <p className="leading-relaxed">
              To learn more about how to manage cookies, you can visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:text-red-700 underline">aboutcookies.org</a>.
            </p>
          </FadeInStaggerItem>

          <FadeInStaggerItem direction="up">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
            </p>
          </FadeInStaggerItem>

          <FadeInStaggerItem direction="up">
            <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Contact Us</h2>
            <p className="leading-relaxed mb-4">
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>By email: <a href="mailto:info@acmlghana.com" className="text-brand-red hover:text-red-700 underline">info@acmlghana.com</a></li>
              <li>Visit our <Link href="/contact" className="text-brand-red hover:text-red-700 underline">Contact Page</Link></li>
            </ul>
          </FadeInStaggerItem>
        </StaggerContainer>
      </div>
    </div>
  );
}
