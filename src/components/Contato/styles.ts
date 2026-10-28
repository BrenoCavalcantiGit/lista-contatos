import styled from 'styled-components'

import { cores } from '../../styles'

export const Card = styled.li`
  background-color: ${cores.branco};
  padding: 16px 24px;
  border-radius: 8px;
  margin-bottom: 16px;
  border-left: 6px solid ${cores.secundaria};
`

export const Nome = styled.h3`
  margin-bottom: 4px;
`

export const Info = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`

export const Campo = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`

export const Acoes = styled.div`
  margin-top: 12px;
`
