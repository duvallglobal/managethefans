import { createBrowserRouter, Outlet } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import FansManagement from '@/pages/FansManagement';
import MasseurConcierge from '@/pages/MasseurConcierge';
import SocialMediaGrowth from '@/pages/SocialMediaGrowth';
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
        ],
      },
    ],
 
);
