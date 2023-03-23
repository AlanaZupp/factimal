import React, { FC } from "react";

interface LogoIconProps {}

export const LogoIcon: FC<LogoIconProps> = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    className="fit-picture"
    src="images/PawLogo.png"
    alt=""
    width={30}
    height={30}
  />
);
