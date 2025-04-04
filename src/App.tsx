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
