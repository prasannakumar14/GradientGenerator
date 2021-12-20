import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
`

export const Paragraph = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 20px;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
`
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100px;
  height: 50px;
  margin-top: 5px;
  background-color: transparent;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`
export const ButtonElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GenerateButton = styled.button`
  border: none;
  outline: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: #00c9b7;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
`
