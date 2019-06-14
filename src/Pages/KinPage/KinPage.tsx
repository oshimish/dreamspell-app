// Vendor
import React from "react";
import { Kin, Plasma } from "../../Visuals/Kin";
import * as g from "dreamspell-math";
import { NavLink } from "react-router-dom";

class KinPage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    var dsdate = this.props.gdate;
    return (
      <div className="kin-view">
        <h2>{dsdate.moment.format("LL")}</h2>
        <div className="kin-view-plasma">
          <NavLink to={"plasma"}>
            <Plasma plasma={dsdate.plasma} />
          </NavLink>
        </div>
        <div
          className="kin-view-date"
          style={{
            fontSize: "x-large",
            padding: "23px"
          }}
        >
          <NavLink to={"year"}>
            {dsdate.day} день {dsdate.moon} луны{" "}
          </NavLink>
          {/* <SignTone tone={dsdate.kin.tone}/> */}
        </div>
        <div className="kin-view-kin">
          <NavLink to={"sign"}>
            <Kin kin={dsdate.kin} />
          </NavLink>
        </div>
        <div className="kin-view-number">
          <NavLink to={"zolkin"}>кин {dsdate.kin.number}</NavLink>
        </div>
      </div>
    );
  }
}

export default KinPage;
