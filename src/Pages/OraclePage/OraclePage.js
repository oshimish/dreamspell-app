// Vendor
import React from 'react';
import {Kin} from 'Visuals/visuals';
import * as g from 'dreamspell-math';
import './styles.css';
// Internal

// Setup

/**
 * @class OraclePage
 * @description Brief description
 */
class OraclePage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);
  }

  // https://goo.gl/HBJp32
  render() {
    const kin = g.kin(this.props.kin);
    const oracle = kin.Oracle();
    return (
      <div className="oracle-view">
        <h2>Крест Оракула</h2>
        <table className="oracle-table">
          <tbody>
            <tr>
              <td></td>
              <td><Kin kin={oracle.Driver.Index} /></td>
              <td></td>
            </tr><tr>
              <td><Kin kin={oracle.Antipod.Index} /></td>
              <td><Kin kin={kin.Index} /></td>
              <td><Kin kin={oracle.Analog.Index} /></td>
            </tr><tr>
              <td></td>
              <td><Kin kin={oracle.Occult.Index} /></td>
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
