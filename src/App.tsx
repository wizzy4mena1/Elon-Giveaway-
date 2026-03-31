import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Ticket, Rocket, Trophy, Car, Shield, Bolt, Gift, Users, CheckCircle2, ChevronDown } from 'lucide-react';

const TELEGRAM_LINK = "https://t.me/Spacex_elon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-x-3">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl font-display">E</div>
            <h1 className="font-display text-2xl tracking-tighter">ELON GIVEAWAYS</h1>
          </div>

          <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
            <a href="#tesla" className="hover:text-red-500 transition-colors">Tesla Giveaway</a>
            <a href="#cybertruck" className="hover:text-red-500 transition-colors">Cybertruck</a>
            <a href="#more" className="hover:text-red-500 transition-colors">More Prizes</a>
            <a href="#how" className="hover:text-red-500 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="hidden sm:flex bg-white/10 text-white text-xs px-4 py-1.5 rounded-3xl items-center gap-x-1.5 border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              14,872 entrants today
            </div>
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tesla-red hover:bg-red-700 px-6 py-2 rounded-3xl text-sm font-semibold flex items-center gap-x-2 transition-all"
            >
              <Ticket size={16} />
              ENTER NOW
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black border-t border-white/10 px-6 py-4 overflow-hidden"
          >
            <a href="#tesla" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg">Tesla Giveaway</a>
            <a href="#cybertruck" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg">Cybertruck Giveaway</a>
            <a href="#more" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg">More Prizes</a>
            <a href="#how" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg">How It Works</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-3 text-lg">FAQ</a>
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-tesla-red hover:bg-red-700 py-4 rounded-2xl text-center font-bold mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              ENTER GIVEAWAY NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 12, minutes: 47 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero-bg pt-16 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-x-2 bg-white/10 text-white text-sm font-medium px-6 py-2 rounded-3xl border border-white/30">
            <Rocket size={16} />
            OFFICIAL GIVEAWAY HUB
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl leading-none tracking-tighter neon-text">
            WIN A TESLA.<br />
            WIN A CYBERTRUCK.<br />
            <span className="text-red-500">FOR FREE.</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-md">
            The premier giveaway platform for the Tesla community. 
            Multiple active giveaways. Real winners. 100% free to enter.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tesla-red hover:bg-red-700 text-white px-8 py-4 rounded-3xl text-lg font-semibold flex items-center gap-x-3 shadow-lg shadow-red-500/50 transition-transform hover:scale-105"
            >
              <Gift size={20} />
              ENTER ALL GIVEAWAYS
            </a>
            
            <a 
               href={TELEGRAM_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="border border-white/30 hover:border-white/70 px-8 py-4 rounded-3xl text-lg font-medium flex items-center gap-x-2 transition-colors">
              <Trophy size={20} />
              See recent winners
            </a>
          </div>

          <div className="flex items-center gap-x-8 text-sm">
            <div className="flex -space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-2xl flex items-center justify-center text-xs ring-2 ring-black">🇺🇸</div>
              <div className="w-8 h-8 bg-white/10 rounded-2xl flex items-center justify-center text-xs ring-2 ring-black">🇬🇧</div>
              <div className="w-8 h-8 bg-white/10 rounded-2xl flex items-center justify-center text-xs ring-2 ring-black">🇧🇷</div>
            </div>
            <p className="text-white/60">Winners from 47 countries • Trusted by 184k+ participants</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-white/10 text-xs uppercase tracking-widest text-white/50">
            <div className="flex items-center gap-x-2">
              <CheckCircle2 size={14} />
              VERIFIED ENTRIES
            </div>
            <div className="flex items-center gap-x-2">
              <CheckCircle2 size={14} />
              NO CREDIT CARD REQUIRED
            </div>
            <div className="flex items-center gap-x-2">
              <CheckCircle2 size={14} />
              TRANSPARENT DRAWINGS
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl p-2 border border-red-500/20">
            <div className="bg-black rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop" 
                   alt="Tesla Model 3" 
                   className="w-full h-auto object-cover"
                   referrerPolicy="no-referrer" />
              <div className="absolute bottom-8 left-8 bg-black/80 text-white text-sm px-5 py-3 rounded-2xl flex items-center gap-x-3 backdrop-blur">
                <Car className="text-red-500" size={24} />
                <div>
                  <div className="font-semibold">Next Tesla drawing in</div>
                  <div className="text-3xl font-mono font-bold text-red-400">
                    {String(timeLeft.days).padStart(2, '0')}d {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-white text-black text-xs font-bold px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-x-2 rotate-12">
            <Trophy size={14} className="text-yellow-500" />
            142 WINNERS THIS MONTH
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const TeslaSection = () => {
  return (
    <section id="tesla" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-y-4">
        <div>
          <span className="text-red-500 font-semibold tracking-widest">CURRENT GIVEAWAY</span>
          <h2 className="font-display text-5xl tracking-tighter">Win a Brand New Tesla Model Y</h2>
          <p className="text-white/70">Long Range • 2026 Model • Valued at $49,990</p>
        </div>
        <div className="flex items-center gap-x-2 text-sm bg-white/10 px-6 py-3 rounded-3xl self-start">
          <Users size={16} />
          <span>8,394 entries</span>
          <span className="bg-green-400 text-black text-xs px-3 py-1 rounded-3xl font-bold">LIVE</span>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7 bg-white/5 rounded-3xl p-8">
          <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop" 
               alt="Tesla Model Y White" 
               className="w-full rounded-2xl"
               referrerPolicy="no-referrer" />
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-x-6">
              <div className="text-center">
                <div className="text-xs text-white/50">DRAW DATE</div>
                <div className="text-2xl font-semibold">April 25, 2026</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="text-center">
                <div className="text-xs text-white/50">ENTRIES LEFT</div>
                <div className="text-2xl font-semibold text-red-400">Unlimited</div>
              </div>
            </div>
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tesla-red hover:bg-red-700 px-10 py-4 rounded-3xl text-lg font-semibold transition-transform hover:scale-105 inline-block"
            >
              ENTER FOR FREE
            </a>
          </div>
        </div>
        
        <div className="md:col-span-5 space-y-6">
          <div className="bg-white/5 rounded-3xl p-6">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-red-500" />
              How to win:
            </h4>
            <ol className="space-y-4 text-sm">
              <li>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex gap-x-3 hover:text-red-400 transition-colors">
                  <span className="font-mono text-red-400">01</span> Create free account
                </a>
              </li>
              <li>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex gap-x-3 hover:text-red-400 transition-colors">
                  <span className="font-mono text-red-400">02</span> Complete daily tasks (optional boost)
                </a>
              </li>
              <li>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex gap-x-3 hover:text-red-400 transition-colors">
                  <span className="font-mono text-red-400">03</span> Public live draw on X
                </a>
              </li>
            </ol>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Every entry is verified. One winner will be announced live on X @ElonGiveaways. 
            Tesla delivered anywhere in the world (duties paid by sponsor).
          </p>
        </div>
      </div>
    </section>
  );
};

const CybertruckSection = () => {
  return (
    <section id="cybertruck" className="bg-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <span className="text-red-500 font-semibold tracking-widest">LIMITED EDITION</span>
          <h2 className="font-display text-5xl tracking-tighter">Win the All-New Cybertruck Foundation Series</h2>
          <p className="text-white/70">AWD • Tri-Motor • Valued at $99,990</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1691443255908-1649f826353d?q=80&w=2070&auto=format&fit=crop" 
                 alt="Tesla Cybertruck" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex gap-x-4">
                <div className="flex-1 bg-black rounded-3xl p-6 border border-white/10">
                  <Bolt className="text-red-500 mb-4" size={32} />
                  <p className="font-semibold">0-60 in 2.6s</p>
                  <p className="text-xs text-white/60">Insane performance</p>
                </div>
                <div className="flex-1 bg-black rounded-3xl p-6 border border-white/10">
                  <Shield className="text-red-500 mb-4" size={32} />
                  <p className="font-semibold">Bulletproof exoskeleton</p>
                  <p className="text-xs text-white/60">Cyber durability</p>
                </div>
              </div>
              
              <a 
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-6 text-2xl font-semibold bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl hover:scale-105 transition shadow-xl shadow-red-500/20 text-center block"
              >
                CLAIM YOUR FREE CYBERTRUCK ENTRY →
              </a>
            </div>
            
            <div className="text-xs text-white/40 pt-8">
              Only 500 entries allowed this month. Drawing April 18th live on X.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MorePrizes = () => {
  const prizes = [
    {
      title: "Tesla Model 3 Performance",
      desc: "High-performance sedan • $54,990 value",
      color: "bg-red-500",
      entries: "2,341"
    },
    {
      title: "Starlink Mini Kit + 12 Months",
      desc: "Portable high-speed internet • $2,400 value",
      color: "bg-blue-500",
      entries: "1,892"
    }
  ];

  return (
    <section id="more" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-display text-5xl tracking-tighter text-center mb-4">More Free Prizes</h2>
      <p className="text-center text-white/60 mb-12">New giveaways added every week</p>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {prizes.map((prize, idx) => (
          <a 
            key={idx}
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 rounded-3xl p-6 cursor-pointer border border-white/5 hover:border-red-500/30 transition-all group block"
          >
            <div className={`h-2 w-12 ${prize.color} rounded mb-6`}></div>
            <h3 className="font-semibold text-2xl mb-2 group-hover:text-red-400 transition-colors">{prize.title}</h3>
            <p className="text-white/60 mb-6">{prize.desc}</p>
            <div className="flex justify-between items-end">
              <span className="text-xs uppercase text-white/40">{prize.entries} entered</span>
              <span className="text-red-400 text-sm font-medium">ENTER FREE →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="how" className="max-w-7xl mx-auto px-6 py-20 bg-black border-t border-b border-white/10">
      <div className="text-center mb-16">
        <h2 className="font-display text-5xl tracking-tighter">3 Simple Steps to Win</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          { icon: "1️⃣", title: "Sign Up Free", desc: "Takes 15 seconds. No payment ever required." },
          { icon: "2️⃣", title: "Enter Daily", desc: "One click per giveaway. Share on X for bonus entries." },
          { icon: "3️⃣", title: "Live Draw", desc: "Winners announced live on X every Friday at 8PM UTC." }
        ].map((step, idx) => (
          <a 
            key={idx} 
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group cursor-pointer block"
          >
            <div className="mx-auto w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h4 className="font-semibold text-xl mb-2">{step.title}</h4>
            <p className="text-white/60">{step.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Is this really free?", a: "Yes. 100% free forever. No hidden fees. Sponsored by community partners who love the vision." },
    { q: "Are the giveaways legitimate?", a: "Every draw is recorded on video and posted publicly on X. Past winners have received their prizes." },
    { q: "Can I enter from any country?", a: "Yes! Winners from every country are welcome. We cover international shipping + duties for major prizes." }
  ];

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="font-display text-5xl tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white/5 rounded-2xl overflow-hidden border border-white/5">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold hover:bg-white/5 transition-colors"
            >
              {faq.q}
              <ChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-white/70">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-white/60 mb-4">Still have questions?</p>
        <a 
          href={TELEGRAM_LINK} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-red-400 underline font-semibold"
        >
          Contact Support on Telegram
        </a>
      </div>
    </section>
  );
};

const Winners = () => {
  const winners = [
    { date: "March 28, 2026", name: "Alex O.", prize: "Tesla Model Y", country: "🇺🇸" },
    { date: "March 21, 2026", name: "Sarah J.", prize: "Starlink Kit", country: "🇬🇧" },
    { date: "March 14, 2026", name: "Ricardo S.", prize: "Model 3", country: "🇧🇷" },
    { date: "March 07, 2026", name: "Yuki T.", prize: "Cybertruck", country: "🇯🇵" }
  ];

  return (
    <section id="winners" className="bg-white/5 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-4xl text-center mb-12">Recent Lucky Winners 🎉</h2>
        
        <div className="max-w-3xl mx-auto mb-16 bg-black/40 rounded-3xl border border-white/10 overflow-hidden">
          <div className="divide-y divide-white/10">
            {winners.map((winner, idx) => (
              <a 
                key={idx}
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-2xl">
                    {winner.country}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{winner.name}</p>
                    <p className="text-white/50 text-sm">{winner.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-red-400 font-medium">{winner.prize}</p>
                  <p className="text-xs text-white/30 group-hover:text-red-400 transition-colors">ENTER GIVEAWAY →</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-tesla-red/10 border border-tesla-red/20 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to be our next winner?</h3>
          <p className="text-white/70 mb-6">
            Join the official giveaway community on Telegram to enter all active draws for free! 
            <br />
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-red-400 underline font-semibold mt-2 inline-block">
              {TELEGRAM_LINK}
            </a>
          </p>
          <a 
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tesla-red hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-x-2 mx-auto w-fit"
          >
            JOIN GIVEAWAY ON TELEGRAM
            <Rocket size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-red-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        <TeslaSection />
        <CybertruckSection />
        <MorePrizes />
        <HowItWorks />
        <FAQ />
        <Winners />
      </main>

      <footer className="bg-black border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="flex items-center justify-center gap-x-3">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm font-display">E</div>
            <h1 className="font-display text-lg tracking-tighter">ELON GIVEAWAYS</h1>
          </div>
          <p className="text-white/40 text-xs max-w-2xl mx-auto">
            © 2026 Elon Giveaways. All rights reserved. 
            Tesla, Model Y, Model 3, and Cybertruck are trademarks of Tesla, Inc. 
            SpaceX and Starlink are trademarks of Space Exploration Technologies Corp.
          </p>
          <div className="flex justify-center gap-x-6 text-xs text-white/60">
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
