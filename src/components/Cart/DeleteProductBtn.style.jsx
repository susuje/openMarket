import styled from 'styled-components'

export const Button = styled.button`
  font-size: 15px;
  color: #767676;
  padding: 10px;
  border: 1px solid var(--grey-border);
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 5px;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #000000;
    color: #000000;
  }
`
