import React from "react";
import { IconType } from "../../utils/common";
import colors from "../../common/colors";
const IcFile = ({ width = 24, height = 24, color = colors.main }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_586_29112)">
        <path
          d="M9 15L15 9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 5.99982L11.463 5.46382C12.4008 4.52614 13.6727 3.99942 14.9989 3.99951C16.325 3.99961 17.5968 4.52651 18.5345 5.46432C19.4722 6.40212 19.9989 7.67401 19.9988 9.00017C19.9987 10.3263 19.4718 11.5981 18.534 12.5358L18 12.9998"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0001 18L12.6031 18.534C11.6544 19.4722 10.3739 19.9984 9.03964 19.9984C7.70535 19.9984 6.42489 19.4722 5.47614 18.534C5.0085 18.0716 4.63724 17.521 4.38385 16.9141C4.13047 16.3073 4 15.6561 4 14.9985C4 14.3408 4.13047 13.6897 4.38385 13.0829C4.63724 12.476 5.0085 11.9254 5.47614 11.463L6.00014 11"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_586_29112">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcFile;
