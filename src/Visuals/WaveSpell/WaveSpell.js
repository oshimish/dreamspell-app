// Vendor
import React from 'react';

// Internal
import './styles.css';

// Setup

/**
 * @class WaveSpell
 * @description Brief description
 */
class WaveSpell extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

  }


  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="wave-spell">
        
      </div>
    );
  }
}

// Enforce required properies or methods
WaveSpell.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default WaveSpell;
