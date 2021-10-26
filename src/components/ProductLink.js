import React from "react";

function ProductLink({ name, slug }) {
  return (
    <a
      href={`${process.env.REACT_APP_BASE_URL_USER}product/${slug}`}
      target="_blank"
    >
      {name}
    </a>
  );
}

export default ProductLink;
