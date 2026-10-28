import { configureStore } from '@reduxjs/toolkit'

import contatosReducer from './reducers/contatos'

export const store = configureStore({
  reducer: {
    contatos: contatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
