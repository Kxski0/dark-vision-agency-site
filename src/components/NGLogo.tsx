
import React from "react";

/**
 * Neues NG-Logo mit Leucht-Effekt, passend zur Nexus Generation Farbpalette
 */
const NGLogo = ({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) => (
  <div className="relative inline-block align-middle mr-2 select-none" style={{lineHeight:0}}>
    {/* Logo-Bild mit Nexus Generation Farbschema */}
    <img
      src="/lovable-uploads/5d98238b-5cc2-460e-8846-07bfdf8d7d1c.png"
      alt="Nexus Generation Logo"
      width={size}
      height={size}
      className={`inline-block align-middle ${className}`}
      draggable={false}
      style={{
        filter:
          "drop-shadow(0 0 12px #0AEFFF) drop-shadow(0 0 24px #FF00D6) brightness(1.2) sepia(0.4)",
        background: "transparent",
        objectFit: "contain",
      }}
    />
    {/* Glow-Effekt mit Turquoise und Magenta */}
    <div
      className="absolute inset-0 rounded-sm pointer-events-none -z-10 animate-pulse-glow"
      style={{
        background:
          "radial-gradient(circle, rgba(10,239,255,0.5) 0%, rgba(255,0,214,0.3) 60%, transparent 100%)",
        filter: "blur(12px)",
        transform: "scale(1.3)",
        opacity: 1,
        zIndex: -1,
      }}
    />
  </div>
);

export default NGLogo;
