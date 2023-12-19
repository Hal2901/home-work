import clsx from "clsx";
import React, { InputHTMLAttributes, memo } from "react";
import { useTranslation } from "react-i18next";
import IcMagnifyingGlass from "../assets/icons/IcMagnifyingGlass";
import colors from "../common/colors";
type Props = {
  icon?: React.ReactElement;
  iconLeft?: React.ReactElement;
  placeholder?: string;
  reSearch?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputElement = memo(
  React.forwardRef(
    (
      {
        placeholder = "",
        icon,
        iconLeft,
        className,
        reSearch = false,
        ...props
      }: Props,
      ref: React.LegacyRef<HTMLInputElement>
    ) => {
      const { t } = useTranslation();
      return (
        <div
          className={clsx(
            "h-12 placeholder:text-disabled placeholder:text-sm text-defaultText w-full bg-whiteFAFAFA rounded-10 flex items-center py-3 px-4 border border-solid border-border relative " +
              className,
            {
              "!pl-14": reSearch,
            }
          )}
        >
          {reSearch && (
            <div className="absolute left-0 w-12 h-full flex items-center justify-center rounded-r-10">
              <IcMagnifyingGlass color={colors.disable_color} />
            </div>
          )}
          <input
            ref={ref}
            autoComplete="off"
            {...props}
            className="flex-1 h-full outline-none bg-inherit max-w-full"
            placeholder={t(placeholder) || ""}
          />
        </div>
      );
    }
  )
);
