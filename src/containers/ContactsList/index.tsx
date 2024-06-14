import Title from '../../components/Title'
import ContactCard from '../../components/Contact/index'

import { ContactListStyle, ContactListContainer } from './styles'

const ContactsList = () => (
  <ContactListContainer>
    <Title fontSize="24px">Contatos</Title>
    <hr />
    <ContactListStyle>
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
      <ContactCard />
    </ContactListStyle>
  </ContactListContainer>
)

export default ContactsList
