import { createBrowserRouter, Outlet } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import FansManagement from '@/pages/FansManagement';
import MasseurConcierge from '@/pages/MasseurConcierge';
import SocialMediaGrowth from '@/pages/SocialMediaGrowth';
import AdminLayout from '@/pages/admin/AdminLayout';
import BlogDashboard from '@/pages/admin/BlogDashboard';
import BlogEditor from '@/pages/admin/BlogEditor';
import BlogGenerator from '@/pages/admin/BlogGenerator';
import { ErrorFallback } from '@/components/ErrorFallback';

// Root layout component
function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorFallback error={new Error('Page not found')} />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'fans-management',
        element: <FansManagement />,
      },
      {
        path: 'masseur-concierge',
        element: <MasseurConcierge />,
      },
      {
        path: 'social-media-growth',
        element: <SocialMediaGrowth />,
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          {
            path: 'blog',
            element: <BlogDashboard />,
          },
          {
            path: 'blog/editor/:id?',
            element: <BlogEditor />,
          },
          {
            path: 'blog/generator',
            element: <BlogGenerator />,
          },
        ],
      },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});
