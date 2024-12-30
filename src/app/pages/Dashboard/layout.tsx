import { Outlet } from "react-router-dom";
import AuthProvider from "../../providers/AuthProvider";

export default function DashboardLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
