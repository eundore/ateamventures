import styled from "styled-components";
import logo from "../assets/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import BusinessIcon from "@mui/icons-material/Business";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileHeaderMenu from "./MobileHeaderMenu";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 845px)");

  const [open, setOpen] = useState<boolean>(false);

  const target = useRef<HTMLDivElement>(null);

  const handleSideMenu = () => {
    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleOutsideClick);
    setOpen(true);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    if (!target.current?.childNodes[0].contains(event.target as Element)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [open]);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "#1565C0",
              minHeight: `${isMobile ? "44px" : "70px"}`,
              // eslint-disable-next-line no-useless-computed-key
              ["@media (min-width:600px)"]: {
                height: "70px",
              },
            }}
          >
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleSideMenu}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              ""
            )}

            <Logo src={logo} />
            {isMobile ? (
              ""
            ) : (
              <RightSideContatiner>
                <CompanyInfo>
                  <BusinessIcon sx={{ color: "#ffffff" }} />
                  <CompanyName>A 가공 업체</CompanyName>
                </CompanyInfo>
                <Divider />
                <Logout>로그아웃</Logout>
              </RightSideContatiner>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {isMobile && open ? (
        <>
          <Overlay />
          <div ref={target}>
            <MobileHeaderMenu checked={open} />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

const Logo = styled.img`
  height: 20px;
  width: 153px;

  @media only screen and (max-width: 845px) {
    height: 12px;
    width: 91.8px;
  }
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
  width: 93.67px;
  height: 20px;
  left: 0px;
  top: 0px;

  margin: 0px 16px;
  display: flex;
  align-items: flex-end;
`;

const CompanyName = styled.span`
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
  margin-left: 5px;
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

const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0px;
  top: 0px;
  z-index: 2;
  background: #323d45;
  opacity: 0.5;
`;
