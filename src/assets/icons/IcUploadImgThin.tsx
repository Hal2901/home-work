import React from "react";
import { IconType } from "../../utils/common";
import colors from "../../common/colors";
const IcUploadImgThin = ({
  width = 24,
  height = 24,
  color = colors.color_0082C5,
}: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.00043 17.7505C8.59043 17.7505 8.25043 17.4105 8.25043 17.0005V12.8105L7.53043 13.5305C7.24043 13.8205 6.76043 13.8205 6.47043 13.5305C6.18043 13.2405 6.18043 12.7605 6.47043 12.4705L8.47043 10.4705C8.68043 10.2605 9.01043 10.1905 9.29043 10.3105C9.57043 10.4205 9.75043 10.7005 9.75043 11.0005V17.0005C9.75043 17.4105 9.41043 17.7505 9.00043 17.7505Z"
        fill={color}
      />
      <path
        d="M11.0004 13.7495C10.8104 13.7495 10.6204 13.6795 10.4704 13.5295L8.47043 11.5295C8.18043 11.2395 8.18043 10.7595 8.47043 10.4695C8.76043 10.1795 9.24043 10.1795 9.53043 10.4695L11.5304 12.4695C11.8204 12.7595 11.8204 13.2395 11.5304 13.5295C11.3804 13.6795 11.1904 13.7495 11.0004 13.7495Z"
        fill={color}
      />
      <path
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H14C14.41 1.25 14.75 1.59 14.75 2C14.75 2.41 14.41 2.75 14 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V10C21.25 9.59 21.59 9.25 22 9.25C22.41 9.25 22.75 9.59 22.75 10V15C22.75 20.43 20.43 22.75 15 22.75Z"
        fill={color}
      />
      <path
        d="M22 10.7505H18C14.58 10.7505 13.25 9.42048 13.25 6.00048V2.00048C13.25 1.70048 13.43 1.42048 13.71 1.31048C13.99 1.19048 14.31 1.26048 14.53 1.47048L22.53 9.47048C22.74 9.68048 22.81 10.0105 22.69 10.2905C22.57 10.5705 22.3 10.7505 22 10.7505ZM14.75 3.81048V6.00048C14.75 8.58048 15.42 9.25048 18 9.25048H20.19L14.75 3.81048Z"
        fill={color}
      />
    </svg>
  );
};

export default IcUploadImgThin;