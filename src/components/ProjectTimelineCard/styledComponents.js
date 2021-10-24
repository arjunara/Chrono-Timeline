// Style your elements here
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ProjectImage = styled.img`
  height: 300px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 220px;
    max-width: 320px;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`
export const ItemTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
  color: #171f46;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`
export const DurationContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  color: #1e293b;
  margin-left: 8px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  color: #1e293b;
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  margin-top: 0px;
`
export const VisitButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
  color: #0967d2;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
`
