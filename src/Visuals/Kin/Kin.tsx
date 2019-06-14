// Vendor
import React, { useContext } from "react";
import Sign from "./Sign";
import SignTone from "./SignTone";
import * as g from "dreamspell-math";
import { AppContext } from "Context/AppContextProvider";

// Setup

/**
 * @class Kin
 * @description Brief description
 */
export const Kin = (props: { kin: g.Kin }) => {
  const context = useContext(AppContext);
  const isSel = context && context.gdate.kin.number == props.kin.number;
  let kin = props.kin;
  return (
    <div className={"kin" + (isSel && " selected")}>
      <SignTone tone={kin.tone} />
      <Sign sign={kin.sign} />
    </div>
  );
};

export default Kin;
