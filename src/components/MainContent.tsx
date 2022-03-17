import styled from "styled-components";
import Card from "./Card";

export default function MainContent() {
  return (
    <CardsWrapper>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;
  position: absolute;
  width: 1130.01px;
  height: 728px;
  left: 155px;
  top: 198px;

  @media only screen and (max-width: 600px) {
    width: 320px;
    left: 20px;
    top: 260px;
    grid-template-columns: 1fr;
  }
`;
