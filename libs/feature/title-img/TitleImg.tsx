import React, { FC } from "react";
import { useRandomDogImage } from "../../data-access/useRandomDogImage";

interface TitleImgProps {}

export const TitleImg: FC<TitleImgProps> = () => {
  const { dogImage = "" } = useRandomDogImage();

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      src={dogImage}
      width={250}
      height={250}
      className="fit-picture"
    />
  );
};
