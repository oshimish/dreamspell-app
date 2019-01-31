// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import * as g from 'dreamspell-math';
import styled from 'styled-components'

function importAll(r) {
  let images = {};
  r
    .keys()
    .map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const tones = importAll(require.context('./tones', false, /\.(png|jpe?g|svg)$/));

const ToneBox = styled.div`
`;
const ToneImage = styled.img`
  display: flex;
  margin: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
  border-radius: 3px;
`;

// Setup
export class SignTone extends React.Component {

  render() {
    let tone = g.tone(this.props.tone);
    let num = tone.number;
    return (
      <ToneBox>
        <ToneImage
          src={tones['tone' + num + '.png']}
          alt={'Tone ' + num}></ToneImage>
      </ToneBox>
    );
  }
}

// Enforce required properies or methods
SignTone.propTypes = {
  tone: PropTypes
    .oneOfType([
      PropTypes.number, PropTypes.instanceOf(g.Tone)
    ])
    .isRequired
};

export default SignTone;
