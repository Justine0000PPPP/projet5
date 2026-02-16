import { useState } from "react";
import logo from "../../assets/images/right-arrow.svg";
import "./colaps.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="collapse-title">{title}</h3>

        <img
          src={logo}
          alt="flèche"
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
        />
      </div>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
