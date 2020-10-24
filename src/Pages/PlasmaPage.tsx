// Vendor
import React from "react";
import { Plasma } from "graphics";
import * as g from "dreamspell-math";

// Internal
import i18n from "../i18n";
import "./styles.scss";
import { useAppContext } from "Context";

// Setup
const PlasmaPage = () => {
  const context = useAppContext()
  let date = context.gdate;
  const tt = (key: string, opt?: any) =>
    i18n.t("plasmas:plasma" + date.plasma + key, opt);
  return (
    <div className="plasma-page">
      <div className="kin-view-plasma m-4">
        <Plasma plasma={date.plasma} />
      </div>
      <h2>
        {i18n.t("plasmas:name")} {tt(".title")}
      </h2>
      <p className="about">
        {tt(".about", {
          joinArrays: "\n",
          interpolation: { escapeValue: false }
        })}
      </p>
    </div>
  );
}

export default PlasmaPage;
