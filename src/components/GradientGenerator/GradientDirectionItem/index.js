import {List, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directions, onChangeButtonValue, isActive} = props
  const {value, displayText} = directions

  const onChangeButtonDirection = () => {
    onChangeButtonValue(value)
  }

  return (
    <List>
      <Button
        type="button"
        isActive={isActive}
        onClick={onChangeButtonDirection}
      >
        {displayText}
      </Button>
    </List>
  )
}

export default GradientDirectionItem
