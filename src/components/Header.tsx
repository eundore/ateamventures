import logo from "../assets/logo.png";
import icon from "../assets/icon.png";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Logo src={logo} />
      <RightSideContatiner>
        <CompanyInfo>
          <CompanyIcon src={icon} />
          <CompanyName>A 가공 업체</CompanyName>
        </CompanyInfo>
        <Divider />
        <Logout>로그아웃</Logout>
      </RightSideContatiner>
    </Container>
  );
}

const Container = styled.header`
  position: absolute;
  height: 70px;

  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const Logo = styled.img`
  position: absolute;
  left: 2.78%;
  right: 86.6%;
  top: 35.71%;
  bottom: 35.71%;
`;

const RightSideContatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  right: 40px;
  top: 25px;
`;

const CompanyInfo = styled.div`
  position: static;
  width: 91.67px;
  height: 20px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;

const CompanyIcon = styled.img`
  height: 15px;
  width: 16.666667938232422px;

  position: absolute;
  left: 0%;
  right: 92.01%;
  top: 12.5%;
  bottom: 12.5%;
`;

const CompanyName = styled.div`
  position: absolute;
  left: 11.82%;
  right: 56.07%;
  top: 0%;
  bottom: 0%;

  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;
  color: #ffffff;
`;
const Divider = styled.hr`
  height: 16px;
  width: 1px;
  background: #ffffff;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 16px;
`;

const Logout = styled.div`
  position: static;
  left: 75.08%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-family: "Noto Sans KR Regular";
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #ffffff;

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 16px;
`;
