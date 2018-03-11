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

    const k = g.kin(this.props.kin);
    this.state = {      open: false,
      kin: k,
      oracle: k.Oracle()
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Just a sample click event
   */
  onClick() {
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="oracle-view"
        onClick={ this.onClick }>
        <h2>Крест Оракула</h2>
        <table className="oracle-table">
          <tbody>
            <tr>
              <td></td>
              <td><Kin kin={this.state.oracle.Driver.Index} /></td>
              <td></td>
            </tr><tr>
              <td><Kin kin={this.state.oracle.Antipod.Index} /></td>
              <td><Kin kin={this.state.kin.Index} /></td>
              <td><Kin kin={this.state.oracle.Analog.Index} /></td>
            </tr><tr>
              <td></td>
              <td><Kin kin={this.state.oracle.Occult.Index} /></td>
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
