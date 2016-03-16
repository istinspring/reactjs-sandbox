import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer styleName="footer">
        <strong>Enterprise moto</strong> &copy; Copyright 2016
      </footer>
    );
  }
}

export default CSSModules(Footer, styles);
