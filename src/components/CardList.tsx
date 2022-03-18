import { useEffect, ReactElement, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import getEstimateRequestCardList from "../api/getEstimateRequestCardList";
import { useAppSelector, useAppDispatch } from "../app/hook";
import { setcardList } from "../features/estimateRequestCardSlice";
import { EstimateRequestCard } from "../utils/CommonInterface";

export default function CardList() {
  const cardList = useAppSelector((state) => state.estimateRequestCard.list);
  const [originCardList, setOriginCardList] = useState<
    Array<EstimateRequestCard>
  >([]);
  const checkedList = useAppSelector((state) => state.filtering.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getEstimateRequestCardList()
      .then((res) => res.json())
      .then((data) => {
        dispatch(setcardList([...data]));
        setOriginCardList((prev) => [...data]);
      });
  }, []);

  useEffect(() => {
    if (checkedList.length === 0) {
      dispatch(setcardList([...originCardList]));
      return;
    }

    const newCardList = originCardList.filter((card) => {
      let flag = true;
      const cardOptionList = [...card.method, ...card.material];

      checkedList.map((option) => {
        if (flag && cardOptionList.includes(option)) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    });

    dispatch(setcardList([...newCardList]));
  }, [checkedList]);

  let li: Array<ReactElement> = [];

  cardList.map((data, idx) => {
    li.push(<Card key={idx} estimateRequestData={data}></Card>);
  });

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
