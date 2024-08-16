import React, { useState } from "react";

function UniversityDetails({ university }) {
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <div>
      <h2>{university.name}</h2>
      <p>{university.ownership}</p>

      <p>{university.domains.join(", ")}</p>
      <p>{university.web_pages.join(", ")}</p>
      {iframeError ? (
        <div>
          <p>Unable to display the website. Visit it directly:</p>
          <a
            href={university.web_pages[0]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {university.web_pages[0]}
          </a>
        </div>
      ) : (
        <iframe
          src={university.web_pages[0]}
          title={university.name}
          onError={handleIframeError}
          style={{ border: "none", width: "100%", height: "600px" }}
          allowFullScreen
        />
      )}
    </div>
  );
}

export default UniversityDetails;
