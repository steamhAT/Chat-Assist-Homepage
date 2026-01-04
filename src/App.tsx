import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Terms from "./Terms";
import Privacy from "./Privacy";
//Import Mixpanel SDK
import mixpanel from "mixpanel-browser";

// Create an instance of the Mixpanel object, your token is already added to this snippet
mixpanel.init('950b3f2b1514c95a3c3839d7b3789a8e', {
  autocapture: true,
  record_sessions_percent: 100,
})

export default function App() {
  const chromeStoreUrl = import.meta.env.VITE_CHROMELINK;

  return (
    <Router>
      <div className="min-h-screen bg-slate-100">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
          <Link to="/" className="text-4xl font-extrabold text-indigo-600">
            Chat Assist
          </Link>
          <div className="space-x-6 flex items-center">
            <Link to="/" className="hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/contact" className="hover:text-blue-600 font-medium">
              Contact
            </Link>
            <button
              onClick={() => window.open(chromeStoreUrl)}
              className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-blue-200 transition-all"
            >
              Install
            </button>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-10 text-center text-slate-500 text-sm">
          <div className="space-x-4 mb-4">
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </div>
          <p>
            ©{new Date().getFullYear()}{" "}
            <a href="/" className="mx-5">
              AI Chat Assist
            </a>{" "}
            <strong>
              <a href="https://mayekars.com">Mayekar Systems</a>
            </strong>
          </p>
        </footer>
      </div>
    </Router>
  );
}
