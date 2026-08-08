const Logo = ({ variant = "light" }) => {
  const iconColor = variant === "light" ? "#c9982f" : "#14213d";

  return (
    <span className="site-navbar-logo-inner">
      <svg
        className="site-navbar-logo-mark"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="3" width="19" height="26" rx="2.5" fill={iconColor} fillOpacity="0.12" />
        <rect x="5" y="3" width="19" height="26" rx="2.5" stroke={iconColor} strokeWidth="1.6" />
        <circle cx="12.5" cy="10.5" r="2.3" stroke={iconColor} strokeWidth="1.4" />
        <path d="M8.7 17.5c0.7-2.1 2.3-3.2 3.8-3.2s3.1 1.1 3.8 3.2" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="8.7" y1="21.3" x2="20.3" y2="21.3" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="8.7" y1="24.2" x2="17" y2="24.2" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="19" y1="9" x2="24.5" y2="9" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" />
        <line x1="19" y1="12" x2="24.5" y2="12" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <span className="site-navbar-logo-text">
        Resume<span>Pro</span>
      </span>
    </span>
  );
};

export default Logo;
