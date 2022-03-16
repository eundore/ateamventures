import styled from "styled-components";
import MainContent from "../../components/MainContent";
import Toggle from "../../components/Toggle";

export default function DashBoard() {
  return (
    <>
      <TopFrame>
        <Title>들어온 요청</Title>
        <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
      </TopFrame>
      <MainContent />
      <Toggle />
    </>
  );
}

const TopFrame = styled.div`
  position: absolute;
  width: 284px;
  height: 56px;
  left: 155px;
  top: 110px;
`;
const Title = styled.div`
  width: 97px;
  height: 32px;
  left: 155px;
  top: 110px;

  font-family: "Noto Sans KR Bold";
  font-size: 20px;
  line-height: 32px;

  color: #323d45;
`;
const SubTitle = styled.div`
  width: 284px;
  height: 24px;
  left: 155px;
  top: 142px;

  font-family: "Noto Sans KR Regular";
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
`;
