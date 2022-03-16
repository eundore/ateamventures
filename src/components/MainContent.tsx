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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 1130.01px;
  height: 728px;
  left: 155px;
  top: 262px;
`;
