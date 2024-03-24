import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// created by Sohel Rahaman (MERN Stack Developer)

// Define a type for the props
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties; // This type is provided by React for inline styles
  onClick?: () => void;
}

export const SampleNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

export const SamplePrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};
