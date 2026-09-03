import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FooterStats from "./components/FooterStats";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden font-sans flex flex-col">
      {/* Background Gradient similar to the 3D sky aesthetic */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#5D6BDE] via-[#7B8BF0] to-[#9FA8EE]" />
      
      {/* Add some simple background shapes to mimic 3D depth */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay overflow-hidden pointer-events-none">
         <div className="absolute top-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
         <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#4F5BDB]/40 rounded-full blur-3xl" />
         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FDE047]/10 rounded-full blur-2xl" />
      </div>

      <Navbar />
      
      {/* Main Content Area */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <Hero />
      </div>

      <FooterStats />
    </main>
  );
}
