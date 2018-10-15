// Vendor
import React from 'react';
//import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';

// Internal import i18n from 'i18n';
import './styles.css';
import { Moon } from 'Visuals/Moon/Moon';
import { subscribe } from 'react-contextual';

// Setup
@subscribe()
class MoonPage extends React.Component {

  render() {
    let sel_day = new g.DreamDate(this.props.gdate.moment);
    let firstDay = new g.DreamDate(sel_day.moment.subtract(sel_day.day - 1, 'days'));
    return (
      <div className="moon-page">
        <h2>Луна</h2>
        <Moon firstDay={firstDay} selDay={sel_day} />
      </div>
    );
  }
}

// Enforce required properies or methods MoonPage.propTypes = {   active:
// PropTypes.bool.isRequired };

export default MoonPage;
