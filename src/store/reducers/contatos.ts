import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    new Contato(1, 'Maria Silva', 'maria@email.com', '(11) 91234-5678'),
    new Contato(2, 'João Souza', 'joao@email.com', '(21) 99876-5432')
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ultimo = state.itens.reduce((max, c) => Math.max(max, c.id), 0)
      state.itens.push({ ...action.payload, id: ultimo + 1 })
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indice = state.itens.findIndex((c) => c.id === action.payload.id)

      if (indice >= 0) {
        state.itens[indice] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
