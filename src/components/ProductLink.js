import React from "react";

function ProductLink({ name, slug, className }) {
  return (
    <a
      className={className || ""}
      href={`${process.env.REACT_APP_BASE_URL_USER}product/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}

export default ProductLink;
