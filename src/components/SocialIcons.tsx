type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15 8.5h2V5.4c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.83-4.92 5.2v2.8H6.5v3.5h2.63V21h3.6v-4.25h2.52l.4-3.5h-2.92v-2.4c0-1.01.27-1.7 1.77-1.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ size = 18, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14 4c.4 2 1.9 3.4 4 3.7v2.6c-1.5 0-2.9-.45-4-1.25v5.6a4.9 4.9 0 1 1-4.1-4.83v2.7a2.2 2.2 0 1 0 1.6 2.13V4h2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
