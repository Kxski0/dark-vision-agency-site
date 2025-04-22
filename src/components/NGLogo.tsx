
import React from "react";

// Wichtig: Font Playfair Display einbinden! (siehe tailwind.config)

const NGLogo = ({
  className = "",
  size = 64,
}: {
  className?: string;
  size?: number;
}) => (
  <div
    className={`relative inline-block align-middle select-none mr-2 ${className}`}
    style={{ lineHeight: 0, width: size, height: size }}
  >
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
          <stop offset="1" stopColor="#FF00D6" />
        </linearGradient>
      </defs>
      {/* Dominantes N */}
      <text
        x="7"
        y="39"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="38"
        fill="url(#nexus-ng-gradient)"
        letterSpacing="1"
        style={{
          fontStyle: "normal",
        }}
      >
        N
      </text>
      {/* Kleineres G, weiter nach rechts/unten, kleiner als vorher */}
      <text
        x="27"
        y="54"
        fontFamily="'Playfair Display', serif"
        fontWeight="700"
        fontSize="22"
        fill="url(#nexus-ng-gradient)"
        letterSpacing="0.5"
        style={{
          fontStyle: "normal",
        }}
      >
        G
      </text>
    </svg>
  </div>
);

export default NGLogo;
