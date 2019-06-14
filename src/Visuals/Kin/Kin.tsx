// Vendor
import React from "react";
import Sign from "./Sign";
import SignTone from "./SignTone";
import * as g from "dreamspell-math";

// Setup

/**
 * @class Kin
 * @description Brief description
 */
export const Kin = (props: { kin: g.Kin }) => {
  let kin = props.kin;
  return (
    <div className="kin">
      <SignTone tone={kin.tone} />
      <Sign sign={kin.sign} />
    </div>
  );
};

export default Kin;
