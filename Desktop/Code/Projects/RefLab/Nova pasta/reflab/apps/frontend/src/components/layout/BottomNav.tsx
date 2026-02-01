/**
 * Bottom navigation bar for mobile.
 * Phase 1: Minimal placeholder with 5 items.
 * TODO (Oliver): Add proper icons, active states, and navigation.
 */
export default function BottomNav() {
  const navItems = [
    { label: "Home", icon: "🏠" },
    { label: "Tests", icon: "📝" },
    { label: "Videos", icon: "🎬" },
    { label: "Chat", icon: "💬" },
    { label: "Profile", icon: "👤" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center p-2 text-gray-600"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
