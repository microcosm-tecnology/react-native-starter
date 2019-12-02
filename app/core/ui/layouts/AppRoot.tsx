import React, { PureComponent } from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'
import { theme } from '../styles'
import { StoreProvider } from '../../api/store/provider'
import AppLayout from './AppLayout'

class AppRoot extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StoreProvider>
                    <StatusBar
                        barStyle={'light-content'}
                    />
                    <AppLayout
                    />
                </StoreProvider>
            </ThemeProvider>
        )
    }
}

export default AppRoot
