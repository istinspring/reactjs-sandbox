import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Header extends React.Component {
  render() {
    return (
      <div styleName='header'>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(Header, styles);
