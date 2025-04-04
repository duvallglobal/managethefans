import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '@/lib/firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/admin/login');
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#cc0000] border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
}