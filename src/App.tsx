import { Provider } from 'react-redux'

import Formulario from './components/Formulario'
import ListaDeContatos from './containers/ListaDeContatos'
import { store } from './store'
import { Container, GlobalStyle, Titulo } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Titulo>Lista de Contatos</Titulo>
      <Container>
        <Formulario />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
