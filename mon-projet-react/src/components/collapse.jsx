import { useState } from "react";
import logo from "../assets/images/right-arrow.svg";
import "../pages-css/Collaps.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>
        <img
          src={logo}
          alt="flèche"
          className="collapse-arrow"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(90deg)",
            transition: "transform 0.3s ease",
            width: "20px",
            height: "20px"
          }}
        />
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;