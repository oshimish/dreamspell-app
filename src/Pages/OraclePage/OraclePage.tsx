// Vendor
import React from "react";
import { Kin } from "../../Visuals";
import * as g from "dreamspell-math";
import "./styles.css";
// Internal Setup

class OraclePage extends React.Component<{
  gdate: g.DreamDate;
}> {
  render() {
    const kin = this.props.gdate.kin;
    const oracle = kin.getOracle();
    return (
      <div className="oracle-view">
        <h2>Крест Оракула</h2>
        <table className="oracle-table">
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
              <td>
                <Kin kin={oracle.antipod} />
                Вызов
              </td>
              <td>
                <Kin kin={kin} />
              </td>
              <td>
                <Kin kin={oracle.analog} />
                Аналог
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <Kin kin={oracle.occult} />
                Скрытая сила
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
