import { useEffect, ReactElement, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import getEstimateRequestCardList from "../api/getEstimateRequestCardList";
import { useAppSelector, useAppDispatch } from "../app/hook";
import { setcardList } from "../features/estimateRequestCardSlice";
import { EstimateRequestCard } from "../utils/CommonInterface";
import { useSnackbar } from "notistack";

export default function CardList() {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const cardList = useAppSelector((state) => state.estimateRequestCard.list);
  const [originCardList, setOriginCardList] = useState<
    Array<EstimateRequestCard>
  >([]);
  const checkedList = useAppSelector((state) => state.filtering.list);
  const toggle = useAppSelector((state) => state.filtering.toggle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getEstimateRequestCardList()
      .then((data) => {
        dispatch(setcardList([...data]));
        setOriginCardList((prev) => [...data]);
      })
      .catch((error) => {
        enqueueSnackbar("견적 요청 카드 목록 가져오기를 실패했습니다.", {
          variant: "error",
        });
      });
  }, []);

  useEffect(() => {
    //빈 화면 초기화
    setIsEmpty(false);

    //선택된 필터가 없고 토글 활성화가 안 되어 있을 때 기존 요청 카드 리스트로 값 설정.
    if (checkedList.length === 0 && !toggle) {
      dispatch(setcardList([...originCardList]));
      return;
    }

    //토글 활성화가 되어 있을 때 기존 요청 카드 리스트에서 상담중인 카드만 필터링.
    const cardList = toggle
      ? originCardList.filter((card) => card.status === "상담중")
      : originCardList;

    //상담중인 요청 카드 리스트에서 선택된 옵션을 모두 포함한 카드만 필터링.
    const newCardList = cardList.filter((card) => {
      let flag = true;

      //해당 카드의 필터링할 옵션들 합치기.
      const cardOptionList = [...card.method, ...card.material];

      checkedList.map((option) => {
        //카드가 체크된 옵션을 포함하지 않으면 false로 flag값 변경.
        if (!cardOptionList.includes(option)) {
          flag = false;
        }
      });
      return flag;
    });

    //필터링한 결과가 비어 있다면 빈 화면 설정.
    if (newCardList.length === 0) {
      setIsEmpty(true);
    }
    dispatch(setcardList([...newCardList]));
  }, [checkedList, toggle]);

  let li: Array<ReactElement> = [];

  cardList.map((data, idx) => {
    li.push(<Card key={idx} estimateRequestData={data}></Card>);
  });

  return (
    <>
      {isEmpty ? (
        <NoResultBox>조건에 맞는 견적 요청이 없습니다.</NoResultBox>
      ) : (
        <CardsWrapper>{li}</CardsWrapper>
      )}
    </>
  );
}

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  width: 1130.01px
  justify-content: center;

  @media only screen and (max-width: 1422px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 872px) {
    width: 320px;
    grid-template-columns: 1fr;
  }
`;

const NoResultBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100px;

  border: 1px solid #c2c2c2;
  box-sizing: border-box;
  border-radius: 4px;

  font-family: "Noto Sans KR Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #939fa5;
`;
