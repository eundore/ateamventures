import styled from "styled-components";
import { EstimateRequestCard } from "../utils/CommonInterface";

export default function Card(props: {
  estimateRequestData: EstimateRequestCard;
}) {
  const { estimateRequestData } = props;

  return (
    <Container key={estimateRequestData.id}>
      <TitleContainer>
        <MainTitle>{estimateRequestData.title}</MainTitle>
        <SubTitle>{estimateRequestData.client}</SubTitle>
        <DateContainer>{estimateRequestData.due}까지 납기</DateContainer>
        <Divider />
      </TitleContainer>
      <ListContainer>
        <ListRow>
          <ListTitle>도면 개수</ListTitle>
          <ListContent>{estimateRequestData.count}</ListContent>
        </ListRow>
        <ListRow>
          <ListTitle>총 수량</ListTitle>
          <ListContent>{estimateRequestData.amount}</ListContent>
        </ListRow>
        <ListRow>
          <ListTitle>가공방식</ListTitle>
          <ListContent>{estimateRequestData.method.join()}</ListContent>
        </ListRow>
        <ListRow>
          <ListTitle>재료</ListTitle>
          <ListContent>{estimateRequestData.material.join()}</ListContent>
        </ListRow>
      </ListContainer>
      <ButtonsContainer>
        <ViewButton>요청 내역 보기</ViewButton>
        <ChatButton>채팅하기</ChatButton>
      </ButtonsContainer>
      {estimateRequestData.status === "상담중" ? (
        <StatusBadge>상담중</StatusBadge>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: flex-start;
  padding: 24px 16px;

  position: relative;
  width: 366px;
  height: 356px;

  background: #ffffff;

  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border: 2px solid rgba(33, 150, 243, 1);
  }

  @media only screen and (max-width: 600px) {
    width: 320px;
    height: 344px;
    row-gap: 16px;
  }
`;

const TitleContainer = styled.div``;

const MainTitle = styled.div`
  font-family: "Noto Sans KR Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Gray / 900 (default) */

  color: #323d45;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: flex-end;
  flex-grow: 0;
  margin: 0px 0px;
`;

const SubTitle = styled.div`
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Gray / 900 (default) */

  color: #323d45;
`;

const DateContainer = styled.div`
  margin-top: 24px;
  font-family: "Noto Sans KR Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;

  /* Gray / 600 (sub) */

  color: #939fa5;
`;

const Divider = styled.div`
  width: 334px;
  border: 1px solid #e5e5e5;
  margin-top: 16px;

  @media only screen and (max-width: 600px) {
    width: 288px;
  }
`;

const ListContainer = styled.div`
  position: static;
  width: 334px;
  height: 104px;
  left: 16px;
  top: 164px;

  display: flex;
  flex-direction: column;
  row-gap: 8px;
}
`;

const ListRow = styled.div`
  display: flex;
`;

const ListTitle = styled.div`
  width: 70px;
  height: 20px;

  font-family: "Noto Sans KR Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #323d45;
`;

const ListContent = styled.div`
  width: 232px;
  height: 20px;

  font-family: "Noto Sans KR Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #323d45;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;

  @media only screen and (max-width: 600px) {
    margin-top: 16px;
  }
`;

const ViewButton = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  background: #2196f3;
  border-radius: 4px;

  text-align: center;
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const ChatButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 12px;
  border: 1px solid #2196f3;
  box-sizing: border-box;
  border-radius: 4px;

  text-align: center;
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #2196f3;
`;

const StatusBadge = styled.div`
  position: absolute;
  right: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px 8px;

  background: #ffffff;
  border: 1px solid #ffa000;
  box-sizing: border-box;
  border-radius: 12px;

  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ffa000;
`;
