import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-lemon-green">CHAINFLUENCE</h1>
          <p className="mt-4 text-lg text-gray-300">Growth Engine for Web3 Startups</p>
          <Button className="mt-6 bg-lemon-green text-black font-semibold rounded-xl px-6 py-3 hover:bg-lime-400">Book Strategy Call</Button>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="space-y-2 text-gray-300">
            <li>- Community(Discord, Telegram etc) Setup & Growth</li>
            <li>- 24/7 Moderation & Chat Engagers</li>
            <li>- Airdrop & Hype Campaign Strategy</li>
            <li>- Community management </li>
            <li>- Influencer Seeding (Optional)</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Chainfluence?</h2>
          <ul className="space-y-2 text-gray-300">
            <li>- 4+ Years Web3 Experience</li>
            <li>- 30+ Projects Scaled</li>
            <li>- 80% Community Retention Rate</li>
            <li>- Premium Yet Flexible Pricing</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Client Results</h2>
          <p className="text-gray-400 italic">“We scaled from 500 to 30K in 1 month with Chainfluence. Incredible work.” – Founder, XYZ DAO</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Packages</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-[#12182a] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Starter - $2K/mo</h3>
              <p>2 Mods + Setup</p>
            </div>
            <div className="bg-[#12182a] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Pro - $5K/mo</h3>
              <p>Strategy + 24/7 Ops</p>
            </div>
            <div className="bg-[#12182a] p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Custom - $7K+</h3>
              <p>Full Growth + Influencer Layer</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300">Telegram: @CalllMeKhen</p>
          <p className="text-gray-300">Email: talkwithkhen@gmail.com</p>
          <Button className="mt-4 bg-lemon-green text-black font-semibold rounded-xl px-6 py-3 hover:bg-lime-400">Book a Call</Button>
        </section>
      </div>
    </div>
  );
}