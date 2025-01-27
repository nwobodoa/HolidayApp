import {styled} from "styled-components";

export const EventCards = styled.div`
  justify-items: center;
  width: 90%;
  max-width: 1100px;
  margin: 1px auto;
  text-align: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`
export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #CCD5AE;
  border-radius: 5px;
  max-width: 300px
`
export const MoreBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
`
export const EventImage = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 5px 5px 0 0;`

export const GoodDealLabelWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;`


// display: "flex", flexDirection: "column", alignItems: "center"}

export const EventPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SearchWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  gap: 10px;
`
export const SearchLinkWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const SearchSpan = styled.span`
    cursor: pointer;
    `