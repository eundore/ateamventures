import styled from "styled-components";
import { alpha, styled as muiStyled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

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

export default function Toggle() {
  return (
    <FormControlLabel
      control={<CustomSwitch name="consultState" />}
      label={<Label>상담 중인 요청만 보기</Label>}
      sx={{
        position: "absolute",
        right: "148px",
        top: "204px",
      }}
    />
  );
}

const Label = styled.span`
  font-family: "Noto Sans KR Medium";
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
