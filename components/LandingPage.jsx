import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import ScreenshotSlider from "./ScreenshotSlider";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection id="features" />
      <AboutSection id="about" />
      <ScreenshotSlider id="screenshots" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
};

export default LandingPage;
