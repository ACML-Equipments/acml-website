import { Metadata } from 'next';
import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { FadeIn } from '@/components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Products Catalog',
  description: 'Browse our range of locally manufactured, internationally standard science laboratory equipment.',
};

// Fallback data in case database is not yet connected
const mockProducts = [
  {
    id: '1',
    name: 'Standard Light Microscope',
    category: 'physics',
    description: 'High-quality binocular microscope for educational use. Up to 1000x magnification.',
    price: 1500,
    image: { url: 'https://placehold.co/600x400/eeeeee/999999?text=[PRODUCT+PHOTO]' }
  },
  {
    id: '2',
    name: 'Analytical Balance',
    category: 'tools',
    description: 'Precision digital balance, 0.001g readability. Built for durability in student labs.',
    price: 850,
    image: { url: 'https://placehold.co/600x400/eeeeee/999999?text=[PRODUCT+PHOTO]' }
  },
  {
    id: '3',
    name: 'Complete Titration Kit',
    category: 'chemistry',
    description: 'Includes burette, stand, clamps, and Erlenmeyer flasks. Borosilicate glass.',
    price: 320,
    image: { url: 'https://placehold.co/600x400/eeeeee/999999?text=[PRODUCT+PHOTO]' }
  },
  {
    id: '4',
    name: 'Wave Motion Demonstrator',
    category: 'physics',
    description: 'Visualizes transverse and longitudinal waves clearly for classroom demonstrations.',
    price: null,
    image: { url: 'https://placehold.co/600x400/eeeeee/999999?text=[PRODUCT+PHOTO]' }
  }
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category: activeCategory = 'all' } = await searchParams;
  
  let products = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: 'products',
      where: activeCategory !== 'all' ? {
        category: {
          equals: activeCategory
        }
      } : undefined,
    });
    products = result.docs;
  } catch (error) {
    console.warn("Payload database not connected, using mock data for Products.");
    products = mockProducts.filter(p => activeCategory === 'all' || p.category === activeCategory);
  }

  return (
    <div className="py-12 md:py-20 bg-brand-gray min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-navy tracking-tight">Equipment Catalog</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Browse our range of apparatus manufactured to international standards right here in Ghana. 
              All products are designed for durability in African classrooms.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="up" className="bg-white rounded-2xl p-6 md:p-16 text-center max-w-4xl mx-auto shadow-sm border border-slate-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">Full Digital Catalog Coming Soon</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We are currently updating our online product directory with our latest manufactured equipment and detailed specifications. In the meantime, you can request our full catalog directly from our sales team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="w-full sm:w-auto bg-brand-navy text-white font-semibold font-inter py-3 px-8 text-sm sm:text-base rounded-full hover:bg-blue-900 transition-colors inline-block text-center"
            >
              Contact Sales Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
