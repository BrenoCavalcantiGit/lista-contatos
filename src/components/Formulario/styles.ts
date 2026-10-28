import styled from 'styled-components'

import { cores } from '../../styles'

export const Form = styled.form`
  background-color: ${cores.branco};
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 32px;
  display: grid;
  gap: 12px;

  h2 {
    margin-bottom: 4px;
  }
`

export const Campo = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  width: 100%;
`
