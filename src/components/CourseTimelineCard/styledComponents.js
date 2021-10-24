// Style your elements here
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ItemTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 32px;
  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
  color: #171f46;
  margin-bottom: 0px;
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
export const UnorderedListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`
export const TagListItem = styled.p`
  background-color: #cad6de;
  border-radius: 5px;
  height: 35px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
  color: #1e293b;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
`
