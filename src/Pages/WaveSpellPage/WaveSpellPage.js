// Vendor
import React from 'react';

// Internal
import './styles.css';

// Setup

/**
 * @class WaveSpellPage
 * @description Brief description
 */
class WaveSpellPage extends React.Component {
  // https://goo.gl/g1KBEL
  constructor(props) {
    super(props);

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
    console.log('- onClick event', this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="wave-spell-page"
        onClick={ this.onClick }>
        <h2>Волновой Модуль</h2>
      </div>
    );
  }
}

// Enforce required properies or methods
WaveSpellPage.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default WaveSpellPage;
