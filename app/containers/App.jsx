/* jslint: disable */
import React from 'react';
import {
  TopNav, Footer
} from '../components';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className="container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
