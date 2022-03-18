import { makeStyles, createStyles } from "@mui/styles";
import {
  Slide,
  Divider,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import styled from "styled-components";
import logoMobileMenu from "../assets/logoMobileMenu.png";
import { useEffect, useRef } from "react";

const menuItemStyles = makeStyles(() =>
  createStyles({
    text: {
      fontFamily: "Noto Sans KR Medium",
      fontSize: "14px",
      lineHeight: "20px",
      color: "#323D45",
    },
  })
);

export default function MobileHeaderMenu(props: { checked: boolean }) {
  const { checked } = props;
  const classes = menuItemStyles();

  const target = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
  ) => {
    if (event.target === target.current) {
    }
    // if (!target.current || target.current.contains(event.target)) {
    //   return;
    // }
  };

  useEffect(() => {
    if (checked) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
  }, [checked]);

  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
      <Container ref={target}>
        <Title>
          <Logo src={logoMobileMenu} />
        </Title>
        <Divider />
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <BusinessIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText className={classes.text}>파트너정밀가공</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText className={classes.text}>로그아웃</ListItemText>
          </MenuItem>
        </MenuList>
      </Container>
    </Slide>
  );
}

const Container = styled.div`
  z-index: 3;
  position: absolute;
  width: 280px;
  height: 100vh;
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
