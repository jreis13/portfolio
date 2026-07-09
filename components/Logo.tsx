type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="18" fill="currentColor" />

      <circle cx="32" cy="32" r="18" fill="var(--background)" />

      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="
          M44.25 23.25
          C36.6 25.4 29.6 32.8 27.75 45
          L33.9 45
          C35.2 36.45 40.05 30.9 45.75 29.15
          Z
        "
      />
    </svg>
  );
}