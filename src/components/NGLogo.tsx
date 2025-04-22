
import React from "react";

const NGLogo = ({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) => (
  <div
    className={`relative inline-block align-middle select-none mr-2 ${className}`}
    style={{ lineHeight: 0, width: size, height: size }}
  >
    {/* NG Buchstaben als SVG mit wie Überschrift */}
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="nexus-ng-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0AEFFF" />
          <stop offset="0.6" stopColor="#fff" />
          <stop offset="1" stopColor="#CCFF00" />
        </linearGradient>
        <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <text
        x="8"
        y="48"
        fontFamily="'Space Grotesk', sans-serif"
        fontWeight="bold"
        fontSize="40"
        fill="url(#nexus-ng-gradient)"
        filter="url(#glow)"
        letterSpacing="2"
      >
        NG
      </text>
    </svg>
    {/* Glow Effekt */}
    <div
      className="absolute inset-0 rounded pointer-events-none -z-10 animate-pulse-glow"
      style={{
        background:
          "radial-gradient(circle, rgba(10,239,255,0.35) 0%, rgba(255,255,255,0.08) 60%, rgba(204,255,0,0.13) 100%)",
        filter: "blur(14px)",
        opacity: 0.7,
      }}
    />
  </div>
);

export default NGLogo;
