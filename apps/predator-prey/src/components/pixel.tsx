import cx from "classnames";
import React from "react";

type PixelProps = {
  map: string[][];
  row: number;
  col: number;
};

export const Pixel = (props: PixelProps) => {
  const cellValue = props.map[props.row][props.col];

  return (
    <div className="w-[10px] h-[10px] sm:w-[18px] sm:h-[18px] md:w-[25px] md:h-[25px] outline outline-1 outline-blue-300 content-none">
      <div
        className={cx(
          {
            "bg-yellow-500": cellValue === "prey",
            "bg-orange-500": cellValue === "predator",
            "border-2 border-solid border-yellow-500":
              cellValue === "possible-prey",
            "border-2 border-solid border-orange-500":
              cellValue === "possible-predator",
          },
          "w-full h-full rounded-full"
        )}
      ></div>
    </div>
  );
};
