import React, { FC } from "react";
import { LogoIcon } from "../../ui/logo-icon/LogoIcon";
import { LogoText } from "../../ui/logo-text/LogoText";

interface NavBarProps {}

//add clicking to home support
export const NavBar: FC<NavBarProps> = () => (
  <div className="navbar bg-base-100">
    <div className="flex-none">
      <LogoIcon />
    </div>
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">
        <LogoText />
      </a>
    </div>
  </div>
);
