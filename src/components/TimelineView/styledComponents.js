// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
`
export const CustomHeading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.course ? 38 : 26)}px;
  color: ${props => (props.course ? '#2b237c' : '#171f46')};
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: ${props => (props.course ? 32 : 22)}px;
  }
`
export const ChronoContainer = styled.div`
  width: 90%;
  height: 95vh;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
