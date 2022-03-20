import styled from "styled-components";
import { alpha, styled as muiStyled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { setToggleFlag } from "../features/filteringSlice";

export default function Toggle() {
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
        sx={{
          height: "20px",
          marginRight: "0px",
        }}
      />
    </Container>
  );
}

const Container = styled.div``;

const Label = styled.span`
  font-weight: 500;
  font-family: "Noto Sans KR Medium";
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
