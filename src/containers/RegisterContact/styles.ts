import styled from 'styled-components'

import { ContactCard } from '../../components/Contact/styles'

export const ContactEditCard = styled(ContactCard)`
  // max-width: 60%;
  // height: 60%;
  margin: 0 auto;
  padding: 60px;

  img {
    width: 160px;
    height: 160px;
    margin-bottom: 48px;
  }

  h3 {
    margin: 24px;
  }

  @media (max-width: 500px) {
    max-width: 80%;
  }
`
