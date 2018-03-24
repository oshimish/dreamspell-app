// Vendor
import React from 'react';
import PropTypes from 'prop-types';
//import * as g from 'dreamspell-math';

// Internal
//import i18n from 'i18n';

// Setup

const MoonDay = (props) => (
  <div className='day'></div>
);

const MoonWeek = (params) => (<div>
  <MoonDay />
  <MoonDay />
  <MoonDay />
  <MoonDay />
  <MoonDay />
  <MoonDay />
  <MoonDay />
</div>);

const Moon = (props) => (
  <div> 
    <MoonWeek />
    <MoonWeek />
    <MoonWeek />
    <MoonWeek />
  </div>
);
  
class MoonPage extends React.Component {
  // https://goo.gl/g1KBEL
  // eslint-disable-next-line
  constructor(props) {
    super(props);

    //let sel_day = this.props.date;
  }

  // https://goo.gl/HBJp32
  render() {

    return (
      <div className="moon-page">
        <h2>Луна</h2>
        <Moon/>
      </div>
    );
  }
}

// Enforce required properies or methods
MoonPage.propTypes = {
  active: PropTypes.bool.isRequired
};

export default MoonPage;
