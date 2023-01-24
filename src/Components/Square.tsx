import React, { FC } from "react";
import "../App.css";

type SquareProps = { val: String; chooseSquare: any };

const Square: FC<SquareProps> = ({ val, chooseSquare }) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
