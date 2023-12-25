import React from "react";
import ReactDOM from "react-dom";

const portalRoot =
  typeof document !== "undefined"
    ? document.getElementById("tooltip-portal")
    : null;

function TooltipPortal({ children }) {
  const portalElement = React.useRef(null);

  if (!portalElement.current) {
    portalElement.current = document.createElement("div");
    portalRoot.appendChild(portalElement.current);
  }

  React.useEffect(() => {
    return () => {
      portalRoot.removeChild(portalElement.current);
    };
  }, []);

  return ReactDOM.createPortal(children, portalElement.current);
}

export default TooltipPortal;
