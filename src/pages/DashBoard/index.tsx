import styled from "styled-components";
import Filtering from "../../components/Filtering";
import CardList from "../../components/CardList";
import Toggle from "../../components/Toggle";

export default function DashBoard() {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>들어온 요청</Title>
          <SubTitle>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitle>
        </TitleContainer>
        <FilterContainer>
          <Filtering />
          <Toggle />
        </FilterContainer>
        <CardList />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 400px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1130.01px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin: 40px;

  @media only screen and (max-width: 1422px) {
    width: 742px;
  }

  @media only screen and (max-width: 872px) {
    width: 320px;
  }
`;

const TitleContainer = styled.div`
  // position: absolute;
  // width: 284px;
  // height: 56px;
  // left: 155px;
  // top: 46px;

  @media only screen and (max-width: 1422px) {
    left: 65px;
  }

  @media only screen and (max-width: 872px) {
    left: 20px;
    top: 68px;
  }
`;
const Title = styled.div`
  width: 97px;
  height: 32px;

  font-family: "Noto Sans KR Bold";
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;

  color: #323d45;
`;
const SubTitle = styled.div`
  width: 284px;
  height: 24px;

  font-family: "Noto Sans KR Regular";
  font-size: 16px;
  line-height: 24px;
  color: #323d45;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 872px) {
    flex-direction: column;
    row-gap: 20px;
`;
