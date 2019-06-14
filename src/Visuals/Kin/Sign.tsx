// Vendor
import React from "react";
import * as g from "dreamspell-math";
import requireContext from "require-context.macro";

// Internal
import "./styles.css";

function importAll(r: __WebpackModuleApi.RequireContext) {
  let images = {};
  r.keys().map(
    (item, index) => ((images as any)[item.replace("./", "")] = r(item))
  );
  return images;
}

const signs = importAll(
  requireContext("./signs", false, /\.(png|jpe?g|svg)$/)
) as any;

// Setup

/**
 * @class Sign
 * @description Brief description
 */
export const Sign = (props: { sign: g.Sign }) => {
  var sign = props.sign;
  var num = sign.number;
  if (num === 20) {
    num = 0;
  }
  return (
    <div className="sign">
      <img src={signs[num + "y.png"]} alt={"Sign " + sign} />
    </div>
  );
};

export default Sign;
