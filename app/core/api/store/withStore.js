// This is a simple HOC for the StoreConsumer

import React from 'react';

import { StoreConsumer } from './consumer';

export const withStore = stores => Component =>
  class Wrapper extends React.Component {
    render() {
      return (
        <StoreConsumer stores={stores}>
          {store => <Component {...this.props} {...store} />}
        </StoreConsumer>
      );
    }
  };
