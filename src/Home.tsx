
interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const Home = () => {
  const chromeStoreUrl = import.meta.env.VITE_CHROMELINK;
  const youtubeStoreUrl = import.meta.env.VITE_YOUTUBE_TUTORIAL;

  return (
    <>
      {/* Hero Section - Optimized for Hindi/Marathi & English Conversation Keywords */}
      <header className="text-center py-24 px-4 bg-gradient-to-b from-indigo-50 to-white">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-100 rounded-full">
          The #1 Language Reactor Alternative for Professionals
        </div>
        <h1 className="text-5xl md:text-6xl text-slate-900 font-extrabold mb-6 leading-tight">
          Best Google Translate Alternative for <br/>
          <span className="text-indigo-600">English to Hindi & Marathi</span> on Chrome
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Struggling with **improving English conversation** at work? Chat Assist uses AI to 
          refine your tone and provide instant translation. Perfect for chat support 
          professionals and global community leaders.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => window.open(chromeStoreUrl)}
            className="bg-blue-600 text-white text-lg px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-700 transition-all hover:scale-105"
          >
            Add to Chrome — It's Free
          </button>
          <button onClick={() => window.open(youtubeStoreUrl)} className="bg-white text-slate-200 text-lg px-10 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all hover:scale-105">
            View Live Demo
          </button>
        </div>
      </header>

      {/* Trust Bar - Targeting the high-volume 'Language Reactor' cluster */}
      <section className="py-10 border-y border-slate-100 bg-white text-center">
        <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Optimized for Professional Workflows and CRM like</p>
        <div className="flex justify-center items-center gap-12 opacity-60 grayscale">
          <span className="font-bold text-2xl text-slate-800">Zoho</span>
          <span className="font-bold text-2xl text-slate-800">Salesforce</span>
          <span className="font-bold text-2xl text-slate-800">Zendesk</span>
        </div>
      </section>

      {/* Comparison Section - Strategic Traffic Capture */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <div className="bg-indigo-900 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Better than Language Reactor for Business?</h2>
            <p className="text-indigo-100 mb-6">
              While tools like Language Reactor are great for movies, **Chat Assist** is built specifically 
              for **improving professional English conversation**. We focus on grammar, tone, and 
              CRM integration rather than entertainment.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✅ Real-time Salesforce Shadow DOM support</li>
              <li className="flex items-center gap-2">✅ Specialized Marathi & Hindi business terms</li>
              <li className="flex items-center gap-2">✅ AI-powered "Professional Tone" one-click swap</li>
            </ul>
          </div>
          <div className="bg-indigo-800 p-8 rounded-2xl border border-indigo-700">
             <div className="text-5xl font-bold text-yellow-400">99%</div>
             <p className="text-sm text-indigo-200 uppercase mt-2">Accuracy in Professional Tone</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        <FeatureCard
          icon="🚀"
          title="Improve Conversation"
          desc="The best English grammar chrome extension for real-time chats. Turn broken sentences into fluent, professional replies."
        />
        <FeatureCard
          icon="🌍"
          title="Hindi & Marathi HUD"
          desc="Low-latency translation banner that floats over Salesforce. No need to switch tabs to Google Translate."
        />
        <FeatureCard
          icon="🛡️"
          title="Enterprise Privacy"
          desc="Secure JWT authentication and auto-logout features protect your CRM data and Minecraft server admin credentials."
        />
      </section>


      {/* Shortcuts Guide */}
      <section className="bg-slate-900 text-white py-20 px-6 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Master Your Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex justify-center gap-2 mb-4">
                <kbd className="bg-slate-600 px-3 py-1.5 rounded-lg shadow-inner">Ctrl</kbd>
                <span className="text-2xl">+</span>
                <kbd className="bg-slate-600 px-3 py-1.5 rounded-lg shadow-inner">Space</kbd>
              </div>
              <h4 className="font-bold text-lg">AI Text Refinement</h4>
              <p className="text-slate-400 text-sm mt-2">Instantly improve English conversation tone</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex justify-center gap-2 mb-4">
                <kbd className="bg-slate-600 px-3 py-1.5 rounded-lg shadow-inner">Ctrl</kbd>
                <kbd className="bg-slate-600 px-3 py-1.5 rounded-lg shadow-inner">Shift</kbd>
                <kbd className="bg-slate-600 px-3 py-1.5 rounded-lg shadow-inner">Alt</kbd>
              </div>
              <h4 className="font-bold text-lg">Translation HUD</h4>
              <p className="text-slate-400 text-sm mt-2">English to Hindi/Marathi instant view</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default Home;