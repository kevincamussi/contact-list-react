import { Button as ButtonStyle } from './styles'

export type Props = {
  buttonText: string
  page: string
  color?: string
}

const Button = ({ buttonText, page, color }: Props) => (
  <ButtonStyle to={page}>
    <button style={{ backgroundColor: color }}>{buttonText}</button>
  </ButtonStyle>
)

export default Button
