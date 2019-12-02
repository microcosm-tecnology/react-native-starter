// Merges stores, which names are passed as 'stores' prop.
// If no names provided, merges all contexts.
// Basically works as a regular Context.Consumer,
// except for passes merged (namespaced) stores as a prop

import React, { Component } from 'react'
import { contexts } from 'app/core/api/store/init'

const getChild = (children: any) => (Array.isArray(children) ? children[0] : children)

interface Props {
    stores: string[] | string
}

export class StoreConsumer extends Component<Props> {
    render() {
        const stores = [this.props.stores].flat()
        return Object.entries(contexts)
            .filter(([key]) => {
                if (this.props.stores) {
                    return stores.includes(key)
                }
                return true
            })
            .reduce(
                (tree: any, [key, { Consumer }]: any) => (values: any[]) => (
                    <Consumer>
                        {(consumerValue: any) =>
                            tree({
                                ...values,
                                [key]: consumerValue,
                            })
                        }
                    </Consumer>
                ),
                (value: any) => getChild(this.props.children)(value)
            )()
    }
}
