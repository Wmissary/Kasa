import { useState } from "react";
import open_icon from "../../assets/open_icon.svg";
import close_icon from "../../assets/close_icon.svg";

import "../../css/components/Collapse/style.css";

export default function Collapse({ title, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="collapse">
      <button className="collapse_button" onClick={() => setOpen(!open)}>
        <p className="collapse_title">{title}</p>
        <img src={open ? open_icon : close_icon} alt="collapse" />
      </button>
      {open && (
        <div className="collapse_text_container">
          <p className="collapse_text">{text}</p>
        </div>
      )}
    </div>
  );
}
