import React, { FC } from "react";
import { LogoIcon } from "../../ui/logo-icon/LogoIcon";
import { LogoText } from "../../ui/logo-text/LogoText";

interface AppLogoProps {}

//add clicking to home support
export const AppLogo: FC<AppLogoProps> = () => (
  <>
    <LogoIcon />
    <LogoText />
  </>
);
