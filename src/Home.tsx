import React from 'react';

// 1. Define the shape of your props
interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const Home = () => {
  const chromeStoreUrl = import.meta.env.VITE_CHROMELINK;

  return (
    <>
      {/* Hero Section */}
      <header className="text-center py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <h2 className="text-5xl text-indigo-600 font-bold mb-6">
          Master Every Support Chat & CRM Task.
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Empower your team with AI-driven tone adjustments and real-time translation. 
          The perfect companion for Salesforce and professional communication.
        </p>
        <button
          onClick={() => window.open(chromeStoreUrl)}
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-blue-200 transition-all hover:scale-105 active:scale-95"
        >
          Add to Chrome — It's Free
        </button>
      </header>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        {/* New Feature: AI Refinement with Replace */}
        <FeatureCard
          icon="🚀"
          title="Smart Refinement"
          desc="Improve notes instantly with Ctrl+Space. Review the AI suggestion in our HUD and hit 'Replace' to update text fields automatically."
        />
        
        {/* New Feature: Translation HUD */}
        <FeatureCard
          icon="🌍"
          title="CRM Translation"
          desc="Translate selected text into Marathi or Hindi using Ctrl+Shift+Alt. Works seamlessly inside Shadow DOM components."
        />

        {/* Existing Feature: Tone Selection */}
        <FeatureCard
          icon="🎭"
          title="Custom Tones"
          desc="Switch between professional, empathetic, or concise modes. Tailor your voice to match the customer's needs perfectly."
        />

        {/* New Feature: Security/Auto-Logout */}
        <FeatureCard
          icon="🛡️"
          title="Enterprise Security"
          desc="Featuring Auto-Logout and session versioning. Your security token is cleared automatically if unauthorized access is detected."
        />

        {/* New Feature: Non-Intrusive UI */}
        <FeatureCard
          icon="🖥️"
          title="Heads-Up Display"
          desc="Our translation and improvement banner floats at the top, allowing you to interact with your tabs without interruption."
        />

        {/* Existing Feature: Privacy */}
        <FeatureCard
          icon="🔒"
          title="Privacy First"
          desc="Powered by Gemini AI. We prioritize your data integrity chats are processed via secure JWT and never stored on our servers."
        />
      </section>

      {/* Quick Setup Guide for Players/Users */}
      <section className="bg-slate-900 text-white py-16 px-6 rounded-3xl mx-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Shortcuts to Success</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <kbd className="bg-slate-600 px-2 py-1 rounded text-sm">Ctrl</kbd> + <kbd className="bg-slate-600 px-2 py-1 rounded text-sm">Space</kbd>
              <p className="mt-2 text-slate-400 text-sm">Improve Selected Text</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <kbd className="bg-slate-600 px-2 py-1 rounded text-sm">Ctrl</kbd> + <kbd className="bg-slate-600 px-2 py-1 rounded text-sm">Shift</kbd> + <kbd className="bg-slate-600 px-2 py-1 rounded text-sm">Alt</kbd>
              <p className="mt-2 text-slate-400 text-sm">Instant Translation HUD</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md transition-all">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
);

export default Home;