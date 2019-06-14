// Vendor
import React from "react";
import { Plasma } from "../../Visuals";
import * as g from "dreamspell-math";

// Internal
import i18n from "../../i18n";
import "./styles.scss";

// Setup
class PlasmaPage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    let date = this.props.gdate;
    const tt = (key: string, opt?: any) =>
      i18n.t("plasmas:plasma" + date.plasma + key, opt);
    return (
      <div className="plasma-page">
        <div className="kin-view-plasma">
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
}

export default PlasmaPage;
