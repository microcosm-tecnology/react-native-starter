import React from 'react'

import { StoreConsumer } from './consumer'

export const withStore = (stores: string[] | string) => (Component: any) =>
    class Wrapper extends React.Component {
        render() {
            return (
                <StoreConsumer stores={stores}>
                    {(store: any) => <Component {...this.props} {...store} />}
                </StoreConsumer>
            )
        }
    }
