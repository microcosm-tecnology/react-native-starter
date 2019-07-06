// Here we merge all the contexts together as a tree of Context.Provider's.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { stores, contexts } from './init';

// This component is used to set a state (defined in our stores) as a
// value to provider, and to pass the setState function to modify that state
class ProviderWithState extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  };

  state = this.props.state;

  render() {
    const { Provider } = contexts[this.props.name];
    return (
      <Provider
        value={{
          ...this.state,
          setState: this.setState.bind(this)
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

// Here we create a tree of nested Providers, so we can import only a single StoreProvider
class StoreProvider extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  };

  render() {
    return stores.reduce((tree, store) => {
      return (
        <ProviderWithState name={store.name} state={store.state}>
          {tree}
        </ProviderWithState>
      );
    }, this.props.children);
  }
}

export { StoreProvider };
