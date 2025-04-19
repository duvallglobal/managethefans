import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useIsLowEndDevice } from "./hooks/useIsLowEndDevice";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import FansManagement from "./pages/FansManagement";
import MasseurConcierge from "./pages/MasseurConcierge";
import SocialMediaGrowth from "./pages/SocialMediaGrowth";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { fixScrollContainers } from "./utils/scrollFix";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

// Admin imports
import AdminLayout from "./pages/admin/AdminLayout";
import Login from "./pages/admin/Login";
import BlogDashboard from "./pages/admin/BlogDashboard";
import BlogEditor from "./pages/admin/BlogEditor";

// Configure React Router future flags
import { UNSAFE_NavigationContext as NavigationContext } from "react-router-dom";
const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main app wrapper component
const AppContent = () => {
  const isLowEndDevice = useIsLowEndDevice();
  
  // Fix scroll containers on mount
  useEffect(() => {
    // Immediate fix for crucial containers
    fixScrollContainers();
    
    // Apply performance mode for low-end devices
    if (isLowEndDevice) {
      document.body.classList.add('low-end-device');
    }
    
    // Secondary fix after DOM has settled
    const timeoutId = setTimeout(() => {
      fixScrollContainers();
      
      // Add position relative to section elements where needed
      document.querySelectorAll('section').forEach(section => {
        const computedStyle = window.getComputedStyle(section);
        if (computedStyle.position === 'static') {
          section.setAttribute('style', 'position: relative;');
        }
      });
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, [isLowEndDevice]);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow relative">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fans" element={<FansManagement />} />
            <Route path="/masseur" element={<MasseurConcierge />} />
            <Route path="/social" element={<SocialMediaGrowth />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />

            {/* Admin routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="blog" element={<BlogDashboard />} />
              <Route path="blog/new" element={<BlogEditor />} />
              <Route path="blog/edit/:id" element={<BlogEditor />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter {...router}>
        <ErrorBoundary>
          <AppContent />
        </ErrorBoundary>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
