import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center text-defaultText">
      <div>
        <p className="text-xl text-center font-bold ">404 Đã xảy ra lỗi</p>
        <p className="text-base text-center ">
          Không tìm thấy url được yêu cầu trên máy chủ này
        </p>
      </div>
    </div>
  );
};

export default NotFound;
