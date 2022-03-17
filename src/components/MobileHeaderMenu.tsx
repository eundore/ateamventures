import styled from "styled-components";
import logoMobileMenu from "../assets/logoMobileMenu.png";

export default function MobileHeaderMenu() {
  return (
    <Container>
      <Title>
        <Logo src={logoMobileMenu} />
      </Title>
    </Container>
  );
}

const Container = styled.div`
  z-index: 2;
  position: absolute;
  width: 280px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: #ffffff;
`;

const Title = styled.div`
  width: 280px;
  height: 44px;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.img`
  position: absolute;
  width: 91.52px;
  height: 12px;
  left: 20px;
  top: 16px;
`;
