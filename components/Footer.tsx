export function Footer() {
  return (
    <footer className="container border-t border-[var(--border)] py-8 text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} João Francisco Reis
    </footer>
  );
}