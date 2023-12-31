import React from "react";
import colors from "../../common/colors";
import { IconType } from "../../utils/common";

const IcThor = ({
  width = 24,
  height = 24,
  color = colors.text_main,
}: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_604_6160)">
        <path
          d="M11.414 10L4.03097 17.418C3.83532 17.6123 3.68004 17.8435 3.57408 18.0981C3.46812 18.3527 3.41357 18.6257 3.41357 18.9015C3.41357 19.1773 3.46812 19.4503 3.57408 19.7049C3.68004 19.9595 3.83532 20.1907 4.03097 20.385C4.42634 20.7783 4.96132 20.999 5.51897 20.999C6.07662 20.999 6.6116 20.7783 7.00697 20.385L14.414 13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1209 15.2928L20.7069 12.7068C20.8944 12.5193 20.9997 12.265 20.9997 11.9998C20.9997 11.7347 20.8944 11.4804 20.7069 11.2928L13.1209 3.70685C12.9334 3.51938 12.6791 3.41406 12.4139 3.41406C12.1487 3.41406 11.8944 3.51938 11.7069 3.70685L9.12091 6.29285C8.93344 6.48038 8.82812 6.73468 8.82812 6.99985C8.82812 7.26501 8.93344 7.51932 9.12091 7.70685L16.7069 15.2928C16.8944 15.4803 17.1487 15.5856 17.4139 15.5856C17.6791 15.5856 17.9334 15.4803 18.1209 15.2928Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_604_6160">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcThor;
