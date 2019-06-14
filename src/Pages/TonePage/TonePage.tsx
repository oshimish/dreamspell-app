// Vendor
import React from "react";
import { SignTone } from "../../Visuals";
import * as g from "dreamspell-math";
// Internal

// Import a pre-configured instance of i18next
import i18n from "../../i18n";

import "./styles.scss";
// Setup

class TonePage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    let kin = this.props.gdate.kin;
    let num = kin.tone.number;
    const tt = (key: string, opt?: any) =>
      i18n.t("tones:tone" + num + key, opt);
    return (
      <div className="tone-page">
        <SignTone tone={kin.tone} />
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
}

export default TonePage;
