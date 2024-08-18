import React, { useState } from "react";

function UniversityDetails({ university }) {
  const [iframeError, setIframeError] = useState(false);

  if (!university) {
    return <p>No university details available.</p>;
  }

  const webPage = university.web_pages && university.web_pages[0];

  return (
    <div>
      <h2>{university.name}</h2>
      <p>{university.country}</p>
      <p>{university.alpha_two_code}</p>
      <p>{university.domains?.join(", ")}</p>
      <p>{university.web_pages?.join(", ")}</p>
      {iframeError || !webPage ? (
        <div>
          <p>Unable to display the website. Visit it directly:</p>
          {webPage ? (
            <a href={webPage} target="_blank" rel="noopener noreferrer">
              {webPage}
            </a>
          ) : (
            <p>Otherwise check on your connection!.</p>
          )}
        </div>
      ) : (
        <iframe
          src={webPage}
          title={university.name}
          onError={() => setIframeError(true)}
          style={{ border: "none", width: "100%", height: "600px" }}
          allowFullScreen
        />
      )}
    </div>
  );
}

export default UniversityDetails;
