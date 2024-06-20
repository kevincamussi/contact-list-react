import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addContact } from '../../store/reducers/contact'

import { ContactEditCard, InputContainer } from './styles'
import { ContactListContainer as RegisterContainerStyle } from '../ContactsList/styles'
import { Footer } from '../../components/Footer/styles'

import Title from '../../components/Title'
import Button from '../../components/Button'

import avatarIcon from '../../assets/avatar.png'

const RegisterContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [contact, setContact] = useState({
    contactName: '',
    phone: '',
    email: '',
    photo: '',
    id: 0
  })

  const updateContactList = (event: FormEvent) => {
    event.preventDefault()
    dispatch(addContact(contact))
    navigate('/')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setContact((prevContact) => ({
      ...prevContact,
      [id]: value
    }))
  }

  return (
    <>
      <RegisterContainerStyle as={'form'} onSubmit={updateContactList}>
        <Title fontSize="24px">Adicionar/Alterar Contato</Title>
        <hr />
        <ContactEditCard key={contact.id}>
          <img src={avatarIcon} alt="avatar" />
          <InputContainer>
            <div>
              <label htmlFor="contactName">Nome:</label>
              <input
                type="text"
                id="contactName"
                placeholder="Nome"
                value={contact.contactName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone:</label>
              <input
                type="number"
                id="phone"
                placeholder="Telefone"
                value={contact.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="photo">Foto:</label>
              <input
                type="text"
                id="photo"
                placeholder="Foto"
                value={contact.photo}
                onChange={handleChange}
              />
            </div>
          </InputContainer>
        </ContactEditCard>
        <Button type="submit" color="#08f26e">
          Salvar
        </Button>
      </RegisterContainerStyle>
      <Footer padding="50px" />
    </>
  )
}

export default RegisterContainer
