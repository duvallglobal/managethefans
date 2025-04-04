<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { Suspense } from 'react';
import { ErrorFallback } from '@/components/ErrorFallback';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#cc0000] border-t-transparent"></div>
    </div>
=======
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
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

const queryClient = new QueryClient();

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter {...router}>
        <div className="flex flex-col min-h-screen bg-black text-white">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
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
          </main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
  );
}

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingFallback />}>
        <RouterProvider router={router} />
        <Toaster />
      </Suspense>
    </ErrorBoundary>
  );
}
