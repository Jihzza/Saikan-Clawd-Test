export function Footer() {
  return (
    <footer className="border-t border-zinc-900/70">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-400">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Saikan. All rights reserved.</p>
          <p className="text-zinc-500">Quietly serious.</p>
        </div>
      </div>
    </footer>
  );
}
