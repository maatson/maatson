import React, { useRef } from "react";
import "./RippleButton.css";

interface RippleButtonProps {
  children: React.ReactNode;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    // console.log({
    //   size,
    //   x,
    //   y,
    //   clientX: event.clientX,
    //   clientY: event.clientY,
    //   left: rect.left,
    //   top: rect.top,
    //   offsetX: button.offsetWidth,
    //   offsetY: button.offsetHeight,
    // });

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");
    button.appendChild(ripple);

    // Remove the ripple element after animation ends
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <button ref={buttonRef} className="ripple-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default RippleButton;
