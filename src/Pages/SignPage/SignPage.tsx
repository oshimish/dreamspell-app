// Vendor
import React from "react";
import { Sign } from "graphics";
import * as g from "dreamspell-math";

// Internal Import a pre-configured instance of i18next
import i18n from "../../i18n";
import "./styles.scss";
import { useAppContext } from "Context";
// Setup

const SignPage = () => {
  const context = useAppContext()
  let kin = context.gdate.kin;
  let num = kin.sign.number;
  const tt = (key: string, opt?: any) =>
    i18n.t("signs:sign" + num + key, opt);

  return (
    <div className="sign-page">
      <Sign kin={kin} />
      <h2 className="title ">
        {num}. {tt(".title")} ({tt(".maya_name")})
        </h2>
      <p className="info lead">{tt(".info")}</p>
      <p className="about">
        {tt(".about", {
          joinArrays: "\n",
          interpolation: {
            escapeValue: false
          }
        })}
      </p>
      <p className="direction">
        <em>
          {tt(".direction")} {tt(".direction_action")}
        </em>
      </p>
      <p className="chakra"><em>{tt(".chakra")}</em></p>
      <p className="deviz lead">{tt(".deviz")}</p>
    </div>
  );
}


export default SignPage;
