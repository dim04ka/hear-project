import styled from 'styled-components'

export const Icon = styled.img`
  margin-right: 5px;
`
export const Number = styled.span`
  font-family: 'IBM Plex Serif';
  color: #1b4669;
`
export const Phone = styled.a`
  transition: all 0.3s;
  display: flex;
  margin-right: 35px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  padding: 15px;

  &:hover {
    background: white;
    box-shadow: 10px 10px 30px 10px rgb(161 161 161 / 28%);
  }
`
