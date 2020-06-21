import React, {PureComponent} from 'react';
import {ViewPropTypes, NativeModules} from 'react-native';

import PropTypes from 'prop-types';

const { RNRichText } = NativeModules;

class RichText extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,
  };

  static defaultProps = {
  };

  static Show(props) {
    RNRichText.Show(
      props,
      (...args) => {
        props.onDone && props.onDone(...args);
      }
    );
  }
}

export { RichText as RNRichText };
