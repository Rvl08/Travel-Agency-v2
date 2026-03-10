import { useLenis } from '@/hooks/useLenis';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PackagesSection from '@/components/PackagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function App() {
    useLenis();

    return (
        <>
            {/* Noise texture overlay for artsy feel */}
            <div className="noise-overlay" />

            <Navbar />

            <main>
                <HeroSection />
                <DestinationsSection />
                <FeaturesSection />
                <PackagesSection />
                <TestimonialsSection />
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
