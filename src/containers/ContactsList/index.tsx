import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { ContactListStyle, ContactListContainer } from './styles'

import Title from '../../components/Title'
import ContactCard from '../../components/Contact/index'

const ContactsList = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)

  const message = <h3>Você ainda não possui contatos na sua lista.</h3>

  return (
    <ContactListContainer>
      <Title fontSize="24px">Contatos</Title>
      <hr />
      <ContactListStyle>
        {contacts.length === 0
          ? message
          : contacts.map((contact) => (
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
