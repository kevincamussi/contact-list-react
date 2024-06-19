import Title from '../../components/Title'
import ContactCard from '../../components/Contact/index'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { ContactListStyle, ContactListContainer } from './styles'

const ContactsList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)

  return (
    <ContactListContainer>
      <Title fontSize="24px">Contatos</Title>
      <hr />
      <ContactListStyle>
        {contacts.map((contact) => (
          <ContactCard
            contactName={contact.contactName}
            phone={contact.phone}
            email={contact.email}
            photo={contact.photo}
            id={contact.id}
            key={contact.id}
          ></ContactCard>
        ))}
      </ContactListStyle>
    </ContactListContainer>
  )
}

export default ContactsList
