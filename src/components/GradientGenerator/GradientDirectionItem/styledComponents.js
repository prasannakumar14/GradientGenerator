import styled from 'styled-components'

export const List = styled.li`
  margin-right: 10px;
`

export const Button = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 18px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
