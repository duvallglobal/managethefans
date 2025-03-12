import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return <Outlet />;
};

export default AdminLayout; 