import {Component} from 'react'

import GradientDirectionItem from './GradientDirectionItem'

import {
  MainContainer,
  Heading,
  Paragraph,
  UnorderedList,
  Input,
  ButtonContainer,
  ButtonElement,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    valueOne: '#8ae323',
    valueTwo: '#014f7b',
    color: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeValue1 = event => {
    this.setState({valueOne: event.target.value})
  }

  onChangeValue2 = event => {
    this.setState({valueTwo: event.target.value})
  }

  onChangeButtonValue = id => {
    this.setState({direction: id})
  }

  onClickGenerate = () => {
    const {direction, valueOne, valueTwo} = this.state
    this.setState({color: `to ${direction}, ${valueOne}, ${valueTwo}`})
  }

  render() {
    const {color, direction, valueOne, valueTwo} = this.state

    return (
      <MainContainer data-testid="gradientGenerator" gradientValue={color}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directions={each}
              onChangeButtonValue={this.onChangeButtonValue}
              isActive={direction === each.value}
            />
          ))}
        </UnorderedList>
        <Paragraph>Pick the Colors</Paragraph>
        <ButtonContainer>
          <ButtonElement>
            <Paragraph>{valueOne}</Paragraph>
            <Input
              type="color"
              value={valueOne}
              onChange={this.onChangeValue1}
            />
          </ButtonElement>
          <ButtonElement>
            <Paragraph>{valueTwo}</Paragraph>
            <Input
              type="color"
              value={valueTwo}
              onChange={this.onChangeValue2}
            />
          </ButtonElement>
        </ButtonContainer>
        <GenerateButton type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
