import { ContactCard, EditButton } from './styles'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()

  return (
    <>
      <ContactCard>
        <EditButton onClick={() => navigate('Register')} type="button">
          <img src="src\assets\pencil.png" alt="" />
        </EditButton>
        <img src="https://placehold.co/80X80" alt="Contact Image" />
        <div>
          <h3>Nome:</h3>
          <h3>Kevin</h3>
        </div>
        <div>
          <h3>Telefone:</h3>
          <h3>1998998384</h3>
        </div>
        <div>
          <h3>E-mail:</h3>
          <h3>kevincamussi@gmail.com</h3>
        </div>
      </ContactCard>
    </>
  )
}

export default Contact
