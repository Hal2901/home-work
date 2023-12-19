import React from "react";
import { IconType } from "../../utils/common";
import colors from "../../common/colors";
const IcHouse = ({
  width = 24,
  height = 24,
  color = colors.gray01,
}: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_666_1202)">
        <path
          d="M19 14V12H21L12 3L3 12H5V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H9.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 21V15C9 14.4696 9.21071 13.9609 9.58579 13.5858C9.96086 13.2107 10.4696 13 11 13H13C13.3573 13 13.708 13.0958 14.0158 13.2772C14.3236 13.4587 14.5771 13.7194 14.75 14.032"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.536 17.586C15.1412 17.2098 14.6168 17 14.0715 17C13.5262 17 13.0018 17.2098 12.607 17.586C12.4153 17.7683 12.2626 17.9876 12.1583 18.2307C12.054 18.4737 12.0002 18.7355 12.0002 19C12.0002 19.2645 12.054 19.5263 12.1583 19.7693C12.2626 20.0124 12.4153 20.2317 12.607 20.414C13.416 21.195 14.727 21.195 15.536 20.414M15.536 20.414C14.731 21.192 16.345 19.633 15.536 20.414ZM15.536 20.414L16.996 19.004L18.456 17.585"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.54 17.582L17 19.002L18.46 20.412M18.46 20.412C17.655 19.633 19.269 21.192 18.46 20.412ZM18.46 20.412C19.265 21.191 20.58 21.193 21.389 20.412C21.5807 20.2298 21.7334 20.0105 21.8377 19.7674C21.942 19.5243 21.9958 19.2626 21.9958 18.998C21.9958 18.7335 21.942 18.4718 21.8377 18.2287C21.7334 17.9856 21.5807 17.7663 21.389 17.584C20.9942 17.2079 20.4698 16.998 19.9245 16.998C19.3792 16.998 18.8548 17.2079 18.46 17.584"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_666_1202">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IcHouse;
