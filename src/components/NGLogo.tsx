
import React from "react";

/**
 * NG-Logo als SVG mit Glüheffekt
 */
const NGLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <div className="relative inline-block align-middle mr-2">
    <img
      src="/lovable-uploads/91725411-9cba-4a15-911f-4a9a18600e5e.png"
      alt="Nexus Generation Logo"
      width={size}
      height={size}
      className={`inline-block align-middle rounded-sm 
        ${className}
        `}
      style={{
        filter:
          "brightness(2) saturate(1.2) drop-shadow(0 0 12px #0AEFFF) sepia(1) hue-rotate(140deg)",
        background: "transparent",
        objectFit: "contain",
      }}
      draggable={false}
    />
    {/* Glow-Effekt als Hintergrund */}
    <div 
      className="absolute inset-0 rounded-sm -z-10 animate-pulse-glow"
      style={{
        background: "radial-gradient(circle, rgba(10, 239, 255, 0.4) 0%, rgba(10, 239, 255, 0) 70%)",
        filter: "blur(8px)",
        transform: "scale(1.2)",
      }}
    ></div>
  </div>
);

export default NGLogo;
