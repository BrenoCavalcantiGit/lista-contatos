import { useState } from 'react'
import { useDispatch } from 'react-redux'

import ContatoClass from '../../models/Contato'
import { editar, remover } from '../../store/reducers/contatos'
import { Botao } from '../../styles'
import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [editando, setEditando] = useState(false)
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)

  const cancelar = () => {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  const salvar = () => {
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert('Preencha todos os campos')
      return
    }

    dispatch(editar({ id, nome, email, telefone }))
    setEditando(false)
  }

  return (
    <S.Card>
      {editando ? (
        <>
          <S.Campo value={nome} onChange={(e) => setNome(e.target.value)} />
          <S.Campo
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Campo
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <S.Acoes>
            <Botao $variante="sucesso" onClick={salvar}>
              Salvar
            </Botao>
            <Botao $variante="neutro" onClick={cancelar}>
              Cancelar
            </Botao>
          </S.Acoes>
        </>
      ) : (
        <>
          <S.Nome>{nomeOriginal}</S.Nome>
          <S.Info>{emailOriginal}</S.Info>
          <S.Info>{telefoneOriginal}</S.Info>
          <S.Acoes>
            <Botao onClick={() => setEditando(true)}>Editar</Botao>
            <Botao $variante="perigo" onClick={() => dispatch(remover(id))}>
              Remover
            </Botao>
          </S.Acoes>
        </>
      )}
    </S.Card>
  )
}

export default Contato
