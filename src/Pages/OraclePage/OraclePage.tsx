// Vendor
import React from 'react';
import { Kin } from '../../Visuals';
import * as g from 'dreamspell-math';
import './styles.css';
// Internal Setup


class OraclePage extends React.Component<{
  gdate: g.DreamDate
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
              <td></td>
              <td><Kin kin={oracle.driver} /></td>
              <td></td>
            </tr>
            <tr>
              <td><Kin kin={oracle.antipod} /></td>
              <td><Kin kin={kin} /></td>
              <td><Kin kin={oracle.analog} /></td>
            </tr>
            <tr>
              <td></td>
              <td><Kin kin={oracle.occult} /></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default OraclePage;
