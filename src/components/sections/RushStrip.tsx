"use client";

const phrases = [
  "⚡ 30-MIN SESSIONS AVAILABLE TODAY",
  "🏄 ALL SKILL LEVELS WELCOME",
  "🌊 NO WETSUIT NEEDED",
  "⚡ ELECTRIC HYDROFOIL RENTALS",
  "🌊 OPEN 7 DAYS A WEEK",
  "🏄 EXPERT INSTRUCTORS ON SITE",
  "⚡ GEAR FOR SALE YEAR-ROUND",
  "🌊 FEEL THE LIFT TODAY",
];

const strip = [...phrases, ...phrases];

export default function RushStrip() {
  return (
    <div className="bg-secondary overflow-hidden py-4 border-y-2 border-dark/20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {strip.map((phrase, i) => (
          <span
            key={i}
            className="font-heading font-bold uppercase text-sm md:text-base tracking-widest text-dark flex-shrink-0"
          >
            {phrase}
            <span className="ml-10 text-dark/40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
