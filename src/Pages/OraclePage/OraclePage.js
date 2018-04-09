// Vendor
import React from 'react';
import {Kin} from 'Visuals/visuals';
import * as g from 'dreamspell-math';
import './styles.css';
// Internal Setup

/**
 * @class OraclePage
 * @description Brief description
 */
class OraclePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const kin = g.kin(this.props.kin);
    const oracle = kin.getOracle();
    return (
      <div className="oracle-view">
        <h2>Крест Оракула</h2>
        <table className="oracle-table">
          <tbody>
            <tr>
              <td></td>
              <td><Kin kin={oracle.driver.number}/></td>
              <td></td>
            </tr>
            <tr>
              <td><Kin kin={oracle.antipod.number}/></td>
              <td><Kin kin={kin.number}/></td>
              <td><Kin kin={oracle.analog.number}/></td>
            </tr>
            <tr>
              <td></td>
              <td><Kin kin={oracle.occult.number}/></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

// Enforce required properies or methods
OraclePage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default OraclePage;
