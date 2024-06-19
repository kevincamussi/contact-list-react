import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { Footer as FooterStyle } from './styles'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <FooterStyle>
      <Button type="button" onClick={() => navigate('/Register')}>
        Adicionar contato +
      </Button>
    </FooterStyle>
  )
}

export default Footer
