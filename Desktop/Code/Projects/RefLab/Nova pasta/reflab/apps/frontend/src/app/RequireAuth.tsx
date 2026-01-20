import type { ReactNode } from "react";

interface RequireAuthProps {
  children: ReactNode;
}

/**
 * Auth guard for protected routes.
 * Phase 1: Always allows access (auth comes in Phase 2).
 * Phase 2: Will check Supabase session and redirect to /login if not authenticated.
 */
export default function RequireAuth({ children }: RequireAuthProps) {
  // TODO: Phase 2 - Add actual auth check here
  // const { session } = useAuth();
  // if (!session) return <Navigate to="/login" />;

  return <>{children}</>;
}
