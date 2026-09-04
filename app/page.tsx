import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterStats from "./components/FooterStats";
import HowItWorks from "./components/HowItWorks";
import IntegrateWidget from "./components/IntegrateWidget";
import AvailablePlatforms from "./components/AvailablePlatforms";
import MailboxIntegration from "./components/MailboxIntegration";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full font-sans text-gray-900">
      {/* First Screen / Hero Section */}
      <div className="relative min-h-screen w-full flex flex-col">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://www.pexels.com/download/video/33352808/" type="video/mp4" />
          </video>
          {/* Optional Overlay for better readability */}
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
        </div>

        <div className="relative z-10 flex flex-col flex-grow">
          <Navbar />
          
          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-center">
            <Hero />
          </div>

          <FooterStats />
        </div>
      </div>

      {/* Second Screen / How It Works */}
      <HowItWorks />

      {/* Third Screen / Integrate Widget */}
      <IntegrateWidget />

      {/* Fourth Screen / Available Platforms */}
      <AvailablePlatforms />

      {/* Fifth Screen / Mailbox Integration */}
      <MailboxIntegration />

      {/* Sixth Screen / Pricing */}
      <Pricing />

      {/* Seventh Screen / FAQ */}
      <FAQ />

      {/* Eighth Screen / CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
