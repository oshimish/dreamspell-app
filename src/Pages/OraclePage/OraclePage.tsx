// Vendor
import React from "react";
import * as g from "dreamspell-math";
import "./styles.scss";
import { Kin } from "graphics";
// Internal Setup

class OraclePage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    const kin = this.props.gdate.kin;
    const oracle = kin.getOracle();
    return (
      <div className="oracle-view ">
        <h2>Крест Оракула</h2>
        <table className="oracle-table mx-auto my-2">
          <tbody>
            <tr>
              <td />
              <td>
                <Kin kin={oracle.driver} />
                Управитель
              </td>
              <td />
            </tr>
            <tr>
              <td width="30%">
                <Kin kin={oracle.antipod} />
                Антипод
              </td>
              <td width="30%">
                <Kin kin={kin} />
              </td>
              <td width="30%">
                <Kin kin={oracle.analog} />
                Аналог
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <Kin kin={oracle.occult} />
                Магический учитель
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OraclePage;
