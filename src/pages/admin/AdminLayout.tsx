import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { onAuthChange } from "@/lib/firebase/auth";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated with Firebase
    const unsubscribe = onAuthChange((user) => {
      if (!user) {
        navigate("/admin/login");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return <Outlet />;
};

export default AdminLayout;