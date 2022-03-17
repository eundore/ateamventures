import { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";
import Card from "./Card";
import { EstimateRequestCard } from "../utils/CommonInterface";
import getEstimateRequestCardList from "../api/getEstimateRequestCardList";

export default function MainContent() {
  const [cardList, setCardList] = useState<Array<EstimateRequestCard>>([]);
  let li: Array<ReactElement> = [];

  cardList.map((data) => {
    li.push(<Card estimateRequestData={data}></Card>);
  });

  useEffect(() => {
    getEstimateRequestCardList()
      .then((res) => res.json())
      .then((data) => {
        setCardList((arr) => [...data]);
      });
  }, []);

  return <CardsWrapper>{li}</CardsWrapper>;
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
