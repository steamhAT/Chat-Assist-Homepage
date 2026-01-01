
const Terms = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">1. Agreement to Terms</h2>
            <p>By using Chat Assist, you agree to be bound by these terms. If you disagree with any part, you may not use the extension.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">2. Use License</h2>
            <p>We grant you a personal, non-exclusive license to use the extension for professional support communication. You may not attempt to reverse-engineer or abuse our API endpoints.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">3. Subscriptions</h2>
            <p>Payments are handled via Razorpay. Subscriptions renew automatically unless cancelled 24 hours before the billing date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-2">4. Limitation of Liability</h2>
            <p>Chat Assist is an AI tool. While we strive for accuracy, we are not responsible for any miscommunications or business losses resulting from AI-generated text.</p>
          </section>

          <footer className="pt-10 border-t border-slate-100 text-sm text-slate-500">
            Governing Law: These terms are governed by the laws of India.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Terms;