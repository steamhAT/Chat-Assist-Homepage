
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
      <header className="text-center py-20 px-4">
        <h2 className="text-5xl text-indigo-600 font-bold mb-6">
          Master Every Support Chat.
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Empower your team with AI-driven tone adjustments. Professional,
          empathetic, or concise—all in one click.
        </p>
        <button
          onClick={() => window.open(chromeStoreUrl)}
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-blue-200 transition-all"
        >
          Add to Chrome — It's Free
        </button>
      </header>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
        <FeatureCard
          icon="✨"
          title="AI Refinement"
          desc="Instantly turn rough notes into polished, professional customer replies."
        />
        <FeatureCard
          icon="🎭"
          title="Tone Selection"
          desc="Switch between professional, empathetic, or fast modes on the fly."
        />
        <FeatureCard
          icon="🛡️"
          title="Secure & Private"
          desc="We don't store your chats. Data is processed in real-time and discarded."
        />
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600">{desc}</p>
  </div>
);

export default Home;
