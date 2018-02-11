// Vendor
import React from 'react';
import Kin from '../Kin/Kin';

// Internal

// Setup

/**
 * @class OracleView
 * @description Brief description
 */
class OracleView extends React.Component {
  // https://goo.gl/g1KBEL
  constructor() {
    super();

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log(`- onClick event`, this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="oracle-view"
        onClick={ this.onClick }>
        <h2>Крест Оракула</h2>
        <table>
          <tr>
            <td></td>
            <td><Kin kin='0' /></td>
            <td></td>
          </tr><tr>
            <td><Kin kin='15' /></td>
            <td><Kin kin='4' /></td>
            <td><Kin kin='14' /></td>
          </tr><tr>
            <td></td>
            <td><Kin kin='17' /></td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
};

// Enforce required properies or methods
OracleView.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default OracleView;
