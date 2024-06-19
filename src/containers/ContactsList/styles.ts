import styled from 'styled-components'

export const ContactListContainer = styled.div`
  padding: 24px;
  position: sticky;
  height: 80vh;
  overflow-y: auto;
  text-align: center;

  @media (max-width: 500px) {
    display: block;
    padding: 8px;
  }
`

export const ContactListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 500px) {
    display: block;
  }
`
