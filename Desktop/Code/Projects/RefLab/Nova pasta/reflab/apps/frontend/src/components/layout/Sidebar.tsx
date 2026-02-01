interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar navigation component.
 * Phase 1: Minimal placeholder with show/hide.
 * TODO (Oliver): Add navigation links, styling, animations.
 */
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white z-50 p-4">
        <button onClick={onClose} className="mb-4">
          ✕ Close
        </button>
        <nav>
          <p className="text-gray-500">Sidebar navigation placeholder</p>
        </nav>
      </aside>
    </>
  );
}
