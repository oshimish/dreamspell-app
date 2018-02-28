// Vendor
import React from 'react';
import Kin from '../Kin/Kin';
import {kin} from 'dreamspell-math';
import './styles.css';
// Internal

// Setup

/**
 * @class OracleView
 * @description Brief description
 */
class OracleView extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    const k = kin(this.props.kin);
    this.state = {
      open: false,
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
OracleView.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default OracleView;
