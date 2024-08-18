import React, { useRef, useEffect } from "react";

function Sidebar({ universities, onUniversitySelect }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when a new university is added
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = sidebarRef.current.scrollHeight;
    }
  }, [universities]);

  return (
    <div ref={sidebarRef} style={{ overflowY: "auto", maxHeight: "500px" }}>
      {universities.map((university, index) => (
        <button key={index} onClick={() => onUniversitySelect(university)}>
          {university.name}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
