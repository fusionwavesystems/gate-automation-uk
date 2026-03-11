import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutUs from '@/components/AboutUs';
import ModelsPreview from '@/components/ModelsPreview';
import Features from '@/components/Features';
import GoogleReviews from '@/components/GoogleReviews';
import GalleryPreview from '@/components/GalleryPreview';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Home",
  description: "Secure, modern and intelligent gate systems for homes and businesses. We provide high-quality automated gate solutions designed for reliability and security.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <ModelsPreview />
      <Features />
      <GoogleReviews />
      <GalleryPreview />
      <Footer />
    </main>
  );
}
