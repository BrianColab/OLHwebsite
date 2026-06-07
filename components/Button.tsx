"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  // min-h-[44px] ensures WCAG 2.5.5 minimum tap-target size (44×44px)
  const base =
    "inline-flex items-center justify-center min-h-[44px] font-semibold rounded-lg px-6 py-3.5 text-sm leading-none transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olh-red";

  const variants = {
    primary: "bg-olh-red text-white hover:bg-olh-red-hover",
    secondary:
      "bg-white text-olh-red border border-olh-red hover:bg-olh-red-tint",
    ghost: "bg-transparent text-olh-red hover:underline",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
