// Vendor
import React from 'react';

// Internal

// Setup

/**
 * @class Sign
 * @description Brief description
 */
class Sign extends React.Component {
  // https://goo.gl/g1KBEL
  constructor() {
    super();

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  // https://goo.gl/JF9C1l
  componentWillMount() {}

  // https://goo.gl/cYkK3s
  componentDidMount() {}

  // https://goo.gl/5wgkZj
  componentWillReceiveProps(nextProps) {}

  // https://goo.gl/eIiU56
  shouldComponentUpdate(nextProps, nextState) {}

  // https://goo.gl/lLPyps
  componentWillUpdate(nextProps, nextState) {}

  // https://goo.gl/WgsPWE
  componentDidUpdate(prevProps, prevState) {}

  // https://goo.gl/cGM9sI
  componentWillUnmount() {}

  /**
   * Just a sample click event
   */
  onClick() {
    console.log(`- onClick event`, this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <section className="screen">
        <div className="center_block">
          <p className="huge">{this.props.kin}</p>
          <img src="assets/img/signs/17y.png" onClick={this.onClick}></img>
        </div>
        <div className="bottom_block vertical_pulsate">
          <p>Scroll!</p>
        </div>
      </section>    
    );
  }
};

// Enforce required properies or methods
Sign.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default Sign;
