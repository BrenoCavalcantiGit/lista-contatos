import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#f5f6fa',
  texto: '#2f3640',
  principal: '#182c61',
  secundaria: '#4a69bd',
  sucesso: '#44bd32',
  perigo: '#e84118',
  neutro: '#718093',
  branco: '#fff'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color: ${cores.texto};
  }
`

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (max-width: 768px) {
    max-width: 92%;
  }
`

export const Titulo = styled.h1`
  background-color: ${cores.principal};
  color: ${cores.branco};
  text-align: center;
  padding: 24px 0;
  margin-bottom: 32px;
`

export const Botao = styled.button<{ $variante?: 'sucesso' | 'perigo' | 'neutro' }>`
  background-color: ${(props) => cores[props.$variante || 'secundaria']};
  color: ${cores.branco};
  font-weight: bold;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    opacity: 0.85;
  }
`
