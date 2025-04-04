<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { auth } from '@/lib/firebase';
import { onAuthChange } from '@/lib/firebase';
=======
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { supabase } from "@/lib/supabase/client";
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e

export default function AdminLayout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
    const unsubscribe = onAuthChange((user) => {
      if (!user) {
        navigate('/admin/login');
=======
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login");
      }
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/admin/login");
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
      }
      setIsLoading(false);
    });

<<<<<<< HEAD
    return () => unsubscribe();
=======
    return () => subscription.unsubscribe();
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#cc0000] border-t-transparent"></div>
      </div>
    );
  }

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
}
=======
export default AdminLayout;
>>>>>>> db5dfb256ee0813110ffa4c6d9b0a9902e5af32e
