import Immutable from 'immutable';

const config = Immutable.fromJS({
  __DEVELOPMENT__: true,
  __CLIENT__: true,
  __DEVTOOLS__: true,
  API: {
    prefix: '/api'
  }
});

export default config;
