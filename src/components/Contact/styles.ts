import styled from 'styled-components'

export type Props = {
  cardWidth?: string
}

export const ContactCard = styled.div<Props>`
  font-size: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.color4};
  max-width: 300px;
  // width: ${(props) => (props.cardWidth ? props.cardWidth : 'auto')};
  padding: 24px;
  margin: 8px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto 24px auto;
    border-radius: 8px;
  }

  h3 {
    font-weight: 900;
    margin: 4px 2px;
    color: ${(props) => props.theme.secondaryColor};
  }

  div {
    display: flex;
    margin: 4px 0;
  }

  @media (max-width: 500px) {
    margin: 8px auto;
  }
`

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 4px;

  :hover {
    transform: scale(1.2);
  }

  :active {
    transform: scale(1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`
