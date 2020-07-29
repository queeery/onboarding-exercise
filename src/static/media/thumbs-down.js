import React from "react";

const ThumbsDown = ({
  style = {},
  fill = "rgba(0,0,0,.2)",
  stroke = "#1d8cf8",
  width = "32",
  className = "feather feather-thumbs-down",
  viewBox = "0 0 24 24",
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height='32'
    viewBox={viewBox}
    fill={fill}
    stroke={stroke}
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
  </svg>
);

export default ThumbsDown;
