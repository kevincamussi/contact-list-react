import Title from '../../components/Title'
import Button from '../../components/Button'

import { ContactEditCard } from './styles'
import { ContactListContainer as RegisterContainerStyle } from '../ContactsList/styles'
import { Footer } from '../../components/Footer/styles'

const RegisterContainer = () => (
  <>
    <RegisterContainerStyle>
      <Title fontSize="24px">Adicionar/Alterar Contato</Title>
      <hr />
      <ContactEditCard>
        <img src="https://placehold.co/160X160" alt="" />
        <h3>Nome: Kevin</h3>
        <h3>Telefone: 19989998384</h3>
        <h3>E-mail: kevincamussi@gmail.com</h3>
      </ContactEditCard>
    </RegisterContainerStyle>
    <Footer>
      <Button buttonText="Cancelar" page="/" color="#ff2c2c" />
      <Button buttonText="Salvar" page="/" color="#08f26e" />
    </Footer>
  </>
)

export default RegisterContainer
