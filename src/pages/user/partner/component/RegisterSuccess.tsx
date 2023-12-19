import React, { useContext } from "react";
import { RegisterSuccessImg } from "../../../../assets/images";
import { useTranslation } from "react-i18next";
import { Button } from "../../../../components/Button";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../../../context";
import IcCloseModal from "../../../../assets/icons/IcCloseModal";

const RegisterSuccess = () => {
  const { t } = useTranslation();
  const { closeModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
    closeModal();
  };
  return (
    <div className="flex flex-col items-center gap-6 py-14 bg-white w-[50vw] h-600 rounded-[4px] relative">
      <button className="absolute top-6 right-6" onClick={() => closeModal()}>
        <IcCloseModal />
      </button>
      <img
        src={RegisterSuccessImg}
        alt=""
        className="max-w-[400px] max-h-[200px] object-contain mb-2"
      />
      <p className="text-2xl font-semibold text-center">
        {t("register_partner_sc")}
      </p>
      <p className="text-center max-w-[480px]">
        {t("register_partner_sc_sub")}
      </p>

      <Button
        color="primary"
        text="go_to_home"
        className="px-6 py-3 !w-fit !font-medium !min-w-[200px]"
        onClick={gotoHome}
      />
    </div>
  );
};

export default RegisterSuccess;
