import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FansManagement from "./pages/FansManagement";
import SocialMediaGrowth from "./pages/SocialMediaGrowth";
import RentMenConcierge from "./pages/MasseurConcierge";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import GetStartedForm from "./pages/GetStartedForm";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

// Admin imports
import AdminLayout from "./pages/admin/AdminLayout";
import Login from "./pages/admin/Login";
import BlogDashboard from "./pages/admin/BlogDashboard";
import BlogEditor from "./pages/admin/BlogEditor";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-white">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fans" element={<FansManagement />} />
              <Route path="/social" element={<SocialMediaGrowth />} />
              <Route path="/masseur" element={<RentMenConcierge />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/get-started" element={<GetStartedForm />} />
              <Route path="*" element={<NotFound />} />

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="blog" element={<BlogDashboard />} />
                <Route path="blog/new" element={<BlogEditor />} />
                <Route path="blog/edit/:id" element={<BlogEditor />} />
              </Route>
            </Routes>
          </main>
          <Footer />
          <Toaster />
          <Sonner />
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>
    </QueryClientProvider>
  );
}
