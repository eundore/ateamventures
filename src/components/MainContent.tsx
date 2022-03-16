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

  position: absolute;
  width: 1130.01px;
  height: 728px;
  left: 155px;
  top: 262px;
`;
