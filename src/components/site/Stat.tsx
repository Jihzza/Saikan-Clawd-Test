export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/40 p-6">
      <div className="text-xs font-semibold tracking-widest text-zinc-500">{label}</div>
      <div className="mt-3 text-2xl font-semibold tracking-tight text-zinc-50">{value}</div>
    </div>
  );
}
