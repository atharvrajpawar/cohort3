import React, { useState, useRef, useEffect } from "react";
import "./Tooltip.css";

type TooltipPosition = "top" | "bottom" | "left" | "right";
type TooltipTrigger = "hover" | "click" | "focus";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  trigger?: TooltipTrigger;
  delay?: number;
  className?: string;
  contentClassName?: string;
  arrow?: boolean;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  trigger = "hover",
  delay = 200,
  className = "",
  contentClassName = "",
  arrow = true,
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (trigger !== "hover" || disabled) return;
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (trigger !== "hover" || disabled) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  const handleClick = () => {
    if (trigger !== "click" || disabled) return;
    setIsVisible(!isVisible);
  };

  const handleFocus = () => {
    if (trigger !== "focus" || disabled) return;
    setIsVisible(true);
  };

  const handleBlur = () => {
    if (trigger !== "focus" || disabled) return;
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    if (isVisible && trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isVisible, trigger]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      className={`tooltip-wrapper ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        ref={triggerRef}
        className="tooltip-trigger"
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={trigger === "focus" ? 0 : -1}
      >
        {children}
      </div>

      {isVisible && !disabled && (
        <div
          className={`tooltip-content tooltip-${position} ${contentClassName} ${
            arrow ? "tooltip-arrow" : ""
          }`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
