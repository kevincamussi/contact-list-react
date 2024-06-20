import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/contact'

import Contact from '../../models/Contact'

import * as S from './styles'

import avatarIcon from '../../assets/avatar.png'
import darkPencil from '../../assets/darkPencil.png'

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
      setUpdatedContact(updatedData)
    }
    setIsEditing(!isEditing)
  }

  return (
    <>
      <S.ContactCardStyle>
        <S.EditButton
          onClick={() => handleEdit()}
          type="button"
          color={isEditing ? '#08f26e' : '#fff'}
        >
          {isEditing ? 'Salvar' : <img src={darkPencil} alt="Pencil icon" />}
        </S.EditButton>
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
        <S.RemoveButton
          type="button"
          color="#ff2c2c"
          onClick={() => dispatch(remove(id))}
        >
          Remover
        </S.RemoveButton>
      </S.ContactCardStyle>
    </>
  )
}

export default ContactData
