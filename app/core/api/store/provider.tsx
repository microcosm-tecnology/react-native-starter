// Here we merge all the contexts together as a tree of Context.Provider's.

import React, { Component } from 'react'
import { contexts, stores } from './init'

// This component is used to set a state (defined in our stores) as a
// value to provider, and to pass the setState function to modify that state

interface ProviderWithStateProps {
    state: any
    name: string
}

class ProviderWithState extends Component<ProviderWithStateProps> {
    state = this.props.state

    render() {
        const { Provider } = contexts[this.props.name]
        return (
            <Provider
                value={{
                    ...this.state,
                    setState: this.setState.bind(this),
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

// Here we create a tree of nested Providers, so we can import only a single StoreProvider
export class StoreProvider extends Component {
    render() {
        return stores.reduce((tree, store) => {
            return (
                <ProviderWithState name={store.name} state={store.state}>
                    {tree}
                </ProviderWithState>
            )
        }, this.props.children)
    }
}
