import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { adicionar } from '../../store/reducers/contatos'
import { Botao } from '../../styles'
import * as S from './styles'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrar = (evento: FormEvent) => {
    evento.preventDefault()

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert('Preencha todos os campos')
      return
    }

    dispatch(adicionar({ nome, email, telefone }))
    setNome('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.Form onSubmit={cadastrar}>
      <h2>Novo contato</h2>
      <S.Campo
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <S.Campo
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Campo
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <div>
        <Botao type="submit" $variante="sucesso">
          Adicionar
        </Botao>
      </div>
    </S.Form>
  )
}

export default Formulario
