import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { supabase } from "@/lib/supabase/client";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return <Outlet />;
};

export default AdminLayout;