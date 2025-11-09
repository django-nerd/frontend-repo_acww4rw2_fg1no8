import HeroSection from "./components/HeroSection";
import MealsSection from "./components/MealsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import AboutSection from "./components/AboutSection";
import { Rocket } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-emerald-900 font-extrabold">
          <Rocket className="h-5 w-5 text-emerald-600" /> TrueBits
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-emerald-800 font-medium">
          <a href="#meals" className="hover:text-emerald-900">Meals</a>
          <a href="#subscription" className="hover:text-emerald-900">Subscription</a>
          <a href="#about" className="hover:text-emerald-900">About</a>
          <a href="tel:+918928727440" className="rounded-full bg-emerald-600 text-white px-4 py-2 font-semibold hover:bg-emerald-700">Call 8928727440</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <MealsSection />
      <SubscriptionSection />
      <AboutSection />
      <footer className="bg-emerald-900 text-emerald-100">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} TrueBits — Home-made Food in HSR, Bangalore</p>
          <a href="tel:+918928727440" className="font-semibold hover:text-white">Contact: 8928727440</a>
        </div>
      </footer>
    </div>
  );
}
