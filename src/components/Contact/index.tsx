import Contact from '../../models/Contact'
import { ContactCardStyle, EditButton, RemoveButton } from './styles'

import { remove, edit } from '../../store/reducers/contact'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import avatarIcon from '../../assets/avatar.png'

const ContactData = ({ contactName, email, phone, photo, id }: Contact) => {
  const dispatch = useDispatch()

  const [updatedContact, setUpdatedContact] = useState({
    contactName: contactName || '',
    email: email || '',
    phone: phone || '',
    photo: photo || ''
  })

  useEffect(() => {
    setUpdatedContact({
      contactName,
      phone,
      email,
      photo
    })
  }, [contactName, phone, email, photo])

  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    if (isEditing) {
      const updatedData = { id, ...updatedContact }
      dispatch(edit(updatedData))
      // updateLocalStorage(updatedData)
      setUpdatedContact(updatedData)
    }
    setIsEditing(!isEditing)
  }

  return (
    <>
      <ContactCardStyle>
        <EditButton
          onClick={() => handleEdit()}
          type="button"
          color={isEditing ? '#ff2c2c' : 'transparent'}
        >
          {isEditing ? 'Salvar' : <img src="src/assets/pencil.png" alt="" />}
        </EditButton>
        <img src={photo || avatarIcon} alt="Contact Image" />
        <div>
          <h3>Nome:</h3>
          <input
            type="text"
            value={updatedContact.contactName}
            disabled={!isEditing}
            onChange={(e) =>
              setUpdatedContact({
                ...updatedContact,
                contactName: e.target.value
              })
            }
          />
        </div>
        <div>
          <h3>Telefone:</h3>
          <input
            type="number"
            value={updatedContact.phone}
            disabled={!isEditing}
            onChange={(e) =>
              setUpdatedContact({
                ...updatedContact,
                phone: e.target.value
              })
            }
          />
        </div>
        <div>
          <h3>E-mail:</h3>
          <input
            type="text"
            value={updatedContact.email}
            disabled={!isEditing}
            onChange={(e) =>
              setUpdatedContact({
                ...updatedContact,
                email: e.target.value
              })
            }
          />
        </div>
        <RemoveButton
          type="button"
          color="#ff2c2c"
          onClick={() => dispatch(remove(id))}
        >
          Remover
        </RemoveButton>
      </ContactCardStyle>
    </>
  )
}

export default ContactData
