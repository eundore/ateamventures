import styled from "styled-components";
import CheckBoxGroup from "./CheckBoxGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Filtering() {
  return (
    <Contatiner>
      <SelectBoxWrapper>
        <SelectText>가공방식</SelectText>
        <ArrowDropDownIcon sx={{ color: "#939FA5" }} />
        {/* <CheckBoxContainer>
          <CheckBoxGroup />
        </CheckBoxContainer> */}
      </SelectBoxWrapper>

      <SelectBoxWrapper>
        <SelectText>재료</SelectText>
        <ArrowDropDownIcon sx={{ color: "#939FA5" }} />
        {/* <CheckBoxContainer>
          <CheckBoxGroup />
        </CheckBoxContainer> */}
      </SelectBoxWrapper>

      <RefreshContainer>
        <RefreshIcon sx={{ color: "#2196F3" }} />
        <RefreshText>필터링 리셋</RefreshText>
      </RefreshContainer>
    </Contatiner>
  );
}

const Contatiner = styled.div`
  position: absolute;
  width: 311px;
  height: 32px;
  left: 155px;
  top: 134px;

  display: flex;
  column-gap: 11px;

  @media only screen and (max-width: 600px) {
    left: 20px;
    top: 156px;
  }
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;

  width: 98px;
  height: 32px;

  background: #ffffff;

  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    border: 1px solid rgba(33, 150, 243, 1);
    cusor: pointer;
  }

  position: relative;
`;

const SelectText = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #323d45;
`;

const CheckBoxContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 1;

  background: #ffffff;

  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 10px;
  width: 130px;
`;

const RefreshContainer = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  margin-left: 8px;
`;

const RefreshText = styled.div`
  font-family: "Noto Sans KR Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #2196f3;
`;
