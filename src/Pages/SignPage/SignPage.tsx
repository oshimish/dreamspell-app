// Vendor
import React from 'react';
import { Sign } from '../../Visuals';
import * as g from 'dreamspell-math';

// Internal Import a pre-configured instance of i18next
import i18n from '../../i18n';
import './styles.css';
// Setup

class SignPage extends React.Component<{
  gdate: g.DreamDate
}> {

  render() {
    let kin = this.props.gdate.kin;
    let num = kin.sign.number;
    const tt = (key: string, opt?: any) => i18n.t('signs:sign' + num + key, opt);

    return (
      <div className="sign-page">
        <Sign sign={kin.sign} />
        <h2 className="title">
          {num}. {tt('.title')}
          ({tt('.maya_name')})
        </h2>
        <p className="info">{tt('.info')}</p>
        <p className="about">
          {tt('.about', {
            joinArrays: '\n',
            interpolation: {
              escapeValue: false
            }
          })}
        </p>
        <p>{tt('.direction')} {tt('.direction_action')}</p>
        <p>{tt('.chakra')}</p>
        <p>{tt('.deviz')}</p>
      </div>
    );
  }
}

export default SignPage;
