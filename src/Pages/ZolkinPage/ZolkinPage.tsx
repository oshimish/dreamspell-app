// Vendor
import React from "react";
import * as g from "dreamspell-math";

// Internal
import { Sign, SignTone, Kin } from "graphics";
import "./styles.scss";
import { useAppContext } from "Context";
// Setup

let kins = new Array<g.Kin>(260);
for (let index = 0; index < 260; index++) {
  let k = g.kin(index + 1);
  kins[index] = k;
}

var selStyle = (props: { kin: g.Kin; selected?: boolean }) =>
  props.selected ? " selected" : "";
var portalStyle = (props: { kin: g.Kin }) =>
  props.kin.isGalacticPortal ? " portal" : "";
var mysticStyle = (props: { kin: g.Kin }) =>
  props.kin.isMysticColumn ? " mystic" : "";

const KinCell = (props: { kin: g.Kin; selected?: boolean }) => (
  <div
    className={
      "kin-cell chromatic" +
      props.kin.color +
      selStyle(props) +
      portalStyle(props) +
      mysticStyle(props)
    }
    style={{ gridRow: props.kin.zolkinRow, gridColumn: props.kin.zolkinColumn }}
  >
    <Kin kin={props.kin} opt={{
      active: props.selected,
      inactive: !props.selected
    }} />
  </div>
);

const ZGrid = (props: { selKin: g.Kin }) => (
  <div className="zolkin-grid-container mx-auto my-4">
    {kins.map(kin => (
      <KinCell
        kin={kin}
        key={kin.number}
        selected={kin.number === props.selKin.number}
      />
    ))}
  </div>
);

const ZolkinPage = () => {
  const context = useAppContext()
  let kin = context.gdate.kin;
  return (
    <div className="zolkin-page">
      <ZGrid selKin={kin} />
    </div>
  );
}


export default ZolkinPage;
