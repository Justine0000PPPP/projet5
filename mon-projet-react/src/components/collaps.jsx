import { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">

      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{title}</h3>

        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div> 

    </div>
  );
};

export default Collapse;