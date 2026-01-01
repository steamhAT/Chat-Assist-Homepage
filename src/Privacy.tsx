
const Privacy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-4 italic">Last Updated: January 1, 2026</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">1. Information We Collect</h2>
            <p>
              Chat Assist collects your email address via Google OAuth to manage your subscription. 
              When you use the extension to improve text, the selected content is sent to our servers for processing.
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">2. AI Data Usage (Gemini AI)</h2>
            <p className="text-blue-900">
              We use Google’s Gemini API to provide text refinement services. **Your data is not stored on our servers.** We do not use your support chats to train our AI models. Text is processed in real-time and immediately discarded after the improved version is sent back to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">3. Third-Party Services</h2>
            <p>We use Stripe for payment processing. Your financial information is collected and processed solely by Stripe and never touches our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">4. Your Rights</h2>
            <p>You may request to view or delete your account data at any time by contacting our support team.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;