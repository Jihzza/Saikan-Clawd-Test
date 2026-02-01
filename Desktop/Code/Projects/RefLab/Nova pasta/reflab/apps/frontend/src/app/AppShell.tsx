import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import BottomNav from "@/components/layout/BottomNav";

/**
 * Main layout wrapper for the protected app area.
 * Contains Header, Sidebar, main content area, and BottomNav.
 * Phase 1: Minimal placeholder layout with working sidebar toggle.
 * TODO (Oliver): Improve styling and animations.
 */
export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content - Outlet renders the matched child route */}
      <main className="pb-16">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
