// Here you import all the stores and put them to the stores array

import React from 'react'
// Import stores from various modules
import coreStore from '../coreStore'
import signUpStore from 'app/core/api/signUpStore'
import historyStore from 'app/history/api/historyStore'
import todayStore from 'app/today/api/todayStore'

const stores = [coreStore, signUpStore, historyStore, todayStore]

const contexts = stores.reduce((res, store) => {
    res[store.name] = React.createContext(store.state)
    return res
}, {})

export { stores, contexts }
