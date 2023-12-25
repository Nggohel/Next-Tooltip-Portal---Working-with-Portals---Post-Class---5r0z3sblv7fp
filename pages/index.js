import React, { useState } from "react";
import DynamicTooltip from "../components/DynamicTooltip";

export default function Home() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div>
      <span onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        Hover over this text to see the dynamic tooltip.
      </span>
      {showTooltip && <DynamicTooltip />}
    </div>
  );
}
