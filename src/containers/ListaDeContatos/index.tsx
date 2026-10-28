import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <>
      <h2 style={{ marginBottom: 16 }}>Contatos ({itens.length})</h2>
      <ul>
        {itens.map((c) => (
          <Contato
            key={c.id}
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          />
        ))}
      </ul>
      {itens.length === 0 && <p>Nenhum contato cadastrado.</p>}
    </>
  )
}

export default ListaDeContatos
