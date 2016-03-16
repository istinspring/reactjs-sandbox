/* jslint: enable */
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import {
  TopNav, Footer, Header
} from '../components';

class App extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <Header>
              <TopNav />
            </Header>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <h3>Left</h3>
          </Col>
          <Col xs={6}>
            <div className="container">
              {this.props.children}
            </div>
          </Col>
          <Col xs={3}>
            <h3>Right</h3>
          </Col>
        </Row>
        <Footer />
      </Grid>
    );
  }
}

export default App;
