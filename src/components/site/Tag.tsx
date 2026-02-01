export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-800/70 bg-zinc-950/40 px-3 py-1 text-xs font-semibold text-zinc-300">
      {children}
    </span>
  );
}
