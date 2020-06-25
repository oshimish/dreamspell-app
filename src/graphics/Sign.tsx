// Vendor
import React from "react";
import * as g from "dreamspell-math";
import graphics from "graphics";

export const Sign = (props: {
  sign: g.Sign
}) => {
  var sign = props.sign;
  var num = sign.normilize();
  if (num === 20) {
    num = 0;
  }
  return (
    <div className="sign">
      <img src={graphics.signs[num + "y.png"]}
        alt={"Sign " + sign} />
    </div>
  );
};

export default Sign;
