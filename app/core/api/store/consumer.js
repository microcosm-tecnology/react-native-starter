// Merges stores, which names are passed as 'stores' prop.
// If no names provided, merges all contexts.
// Basically works as a regular Context.Consumer,
// except for passes merged (namespaced) stores as a prop

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { contexts } from 'app/core/api/store/init';

const getChild = children => (Array.isArray(children) ? children[0] : children);

export class StoreConsumer extends Component {
  static propTypes = {
    stores: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.func
    ])
  };

  render() {
    const stores = [this.props.stores].flat();
    return Object.entries(contexts)
      .filter(([key]) => {
        if (this.props.stores) return stores.includes(key);
        return true;
      })
      .reduce(
        (tree, [key, { Consumer }]) => values => (
          <Consumer>
            {consumerValue =>
              tree({
                ...values,
                [key]: consumerValue
              })
            }
          </Consumer>
        ),
        value => getChild(this.props.children)(value)
      )();
  }
}

export default StoreConsumer;
