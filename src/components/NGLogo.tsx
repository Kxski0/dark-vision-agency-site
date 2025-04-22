
import React from "react";

/**
 * NG-Logo als SVG über das gelbe PNG gelegt, mit Farbanpassung via CSS-Filter.
 * Alternativ könnte man ein SVG idealerweise nehmen, hier aber als <img> mit Filter.
 */
const NGLogo = ({ className = "", size = 40 }: { className?: string; size?: number }) => (
  <img
    src="/lovable-uploads/91725411-9cba-4a15-911f-4a9a18600e5e.png"
    alt="Nexus Generation Logo"
    width={size}
    height={size}
    className={`inline-block align-middle mr-2 rounded-sm 
      ${className}
      `}
    style={{
      filter:
        "brightness(2) saturate(1.2) drop-shadow(0 0 6px #0AEFFF) sepia(1) hue-rotate(140deg)",
      background: "transparent",
      objectFit: "contain",
    }}
    draggable={false}
  />
);

export default NGLogo;
