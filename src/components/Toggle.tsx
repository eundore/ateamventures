import styled from "styled-components";
import { alpha, styled as muiStyled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setToggleFlag } from "../features/filteringSlice";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const toggleStyles = makeStyles({
  default: {
    position: "absolute",
    marginRight: "0px",
    width: "179.844px",
    height: "20px",
    left: "1106px",
    top: "140px",
  },
  mobile: {
    position: "absolute",
    marginRight: "0px",
    width: "179.844px",
    height: "20px",
    left: "20px",
    top: "208px",
  },
});

export default function Toggle() {
  //const classes = toggleStyles();
  //const isMobile = useMediaQuery("(max-width: 872px)");
  const toggle = useAppSelector((state) => state.filtering.toggle);
  const dispatch = useAppDispatch();

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setToggleFlag(event.target.checked));
  };

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
        control={
          <CustomSwitch
            name="consultState"
            checked={toggle}
            onChange={handleToggle}
          />
        }
        label={<Label>상담 중인 요청만 보기</Label>}
        //className={isMobile ? classes.mobile : classes.default}
        sx={{
          height: "20px",
          marginRight: "0px",
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 180px;
  height: 20px;
  left: 1106px;
  top: 140px;

  @media only screen and (max-width: 1422px) {
    left: 638px;
  }

  @media only screen and (max-width: 872px) {
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
