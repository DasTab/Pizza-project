import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="245" rx="6" ry="6" width="244" height="26" />
      <rect x="0" y="285" rx="6" ry="6" width="244" height="84" />
      <rect x="0" y="388" rx="6" ry="6" width="84" height="42" />
      <rect x="121" y="382" rx="30" ry="30" width="122" height="54" />
      <circle cx="115" cy="115" r="115" />
    </ContentLoader>
  );
}

export default LoadingBlock;

// Здесь мы храним скелетон
