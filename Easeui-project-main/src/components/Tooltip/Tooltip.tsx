import React, { useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({
  content,
  children,
  position = "top",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={`absolute z-50 whitespace-nowrap rounded-md bg-black px-3 py-2 text-sm text-white shadow-lg ${
            position === "top"
              ? "bottom-full left-1/2 mb-2 -translate-x-1/2"
              : position === "bottom"
              ? "left-1/2 top-full mt-2 -translate-x-1/2"
              : position === "left"
              ? "right-full top-1/2 mr-2 -translate-y-1/2"
              : "left-full top-1/2 ml-2 -translate-y-1/2"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;