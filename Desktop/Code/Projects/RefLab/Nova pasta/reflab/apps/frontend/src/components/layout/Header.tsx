interface HeaderProps {
  onMenuClick: () => void;
}

/**
 * Header component with hamburger menu and app title.
 * Phase 1: Minimal placeholder.
 * TODO (Oliver): Add proper styling, icons, and responsive design.
 */
export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b px-4 py-3 flex items-center">
      {/* Hamburger menu button */}
      <button
        onClick={onMenuClick}
        className="p-2 mr-3"
        aria-label="Open menu"
      >
        {/* Placeholder for hamburger icon */}
        <span className="text-xl">☰</span>
      </button>

      {/* App title */}
      <h1 className="font-bold text-lg">RefLab</h1>
    </header>
  );
}
