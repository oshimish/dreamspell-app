// Vendor
import React from "react";
import { SignTone } from "graphics";
import * as g from "dreamspell-math";
// Internal

// Import a pre-configured instance of i18next
import i18n from "../i18n";

import "./styles.scss";
import { useAppContext } from "Context";
import { TOptionsBase } from "i18next";
// Setup

const TonePage = () => {
  const context = useAppContext()
  let kin = context.gdate.kin;
  let num = kin.tone.number;
  const tt = (key: string, opt?: TOptionsBase & object) =>
    i18n.t("tones:tone" + num + key, opt ?? {});
  return (
    <div className="tone-page">
      <SignTone kin={kin} />
      <p className="tone-head">
        {i18n.t("tones:name")} {tt(".num_plural")}{" "}
      </p>
      <h2>
        {tt(".title")} {i18n.t("tones:name")} {tt(".title2")}
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

export default TonePage;
