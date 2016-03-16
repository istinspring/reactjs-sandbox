/* jslint: enable */
import React from 'react';
import Helmet from 'react-helmet';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import {
  TopNav, Footer, Header
} from '../components';

class App extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        {/* Describe page meta information */}
        <Helmet
            title="My Application"
            titleTemplate="%s | site.com"
            base={{"target": "_blank", "href": "http://mysite.com/"}}
            meta={[
              {"name": "description", "content": "My application"},
            ]}
            onChangeClientState={(newState) => console.log(newState)}
        />
        {/* Basic Page layout */}
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
