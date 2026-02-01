import { Routes, Route } from "react-router-dom";
import LandingPage from "@/features/landing/components/LandingPage";
import DashboardPage from "@/features/dashboard/components/DashboardPage";
import TestsList from "@/features/tests/components/TestsList";
import RequireAuth from "./RequireAuth";
import AppShell from "./AppShell";

export default function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />

      {/* Protected routes - wrapped in auth check and app layout */}
      <Route
        path="/app"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        {/* /app shows dashboard by default */}
        <Route index element={<DashboardPage />} />
        {/* /app/dashboard also shows dashboard */}
        <Route path="dashboard" element={<DashboardPage />} />
        {/* /app/tests shows tests list */}
        <Route path="tests" element={<TestsList />} />
      </Route>
    </Routes>
  );
}
