import styled from "styled-components";
import { alpha, styled as muiStyled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Toggle() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const CustomSwitch = muiStyled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#2196F3",
      "&:hover": {
        backgroundColor: alpha("#2196F3", theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#BBDEFB",
    },
  }));

  return (
    <Container>
      <FormControlLabel
        control={<CustomSwitch name="consultState" />}
        label={<Label>상담 중인 요청만 보기</Label>}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 185px;
  height: 20px;
  left: 1106px;
  top: 140px;

  @media only screen and (max-width: 600px) {
    left: 20px;
    top: 208px;
  }
`;

const Label = styled.span`
  font-weight: 500;
  font-family: "Noto Sans KR Medium";
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;