import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  text-decoration: none;

  button {
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    cursor: pointer;
    background-color: ${(props) =>
      props.color ? props.color : props.theme.thirdColor};
    border: none;
    border-radius: 8px;
    margin-left: 16px;
  }

  :hover {
    transform: scale(1.1);
    border-radius: 8px;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  :active {
    transform: scale(1);
  }
`
