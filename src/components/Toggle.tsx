import styled from "styled-components";
import arrow from "../assets/arrow.png";

export default function Toggle() {
  return (
    <Frame>
      <SelectBoxWrapper>
        <SelectText>가공방식</SelectText>
        <SelectIcon src={arrow} />
      </SelectBoxWrapper>
      <SelectBoxWrapper>
        <SelectText>재료</SelectText>
        <SelectIcon src={arrow} />
      </SelectBoxWrapper>
    </Frame>
  );
}

const Frame = styled.div`
  position: absolute;
  width: 193px;
  height: 32px;
  left: 155px;
  top: 198px;

  display: flex;
  column-gap: 11px;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 12px;

  width: 98px;
  height: 32px;
  left: 155px;
  top: 198px;

  background: #ffffff;

  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;
`;

const SelectText = styled.text`
  position: static;
  height: 14px;
  left: 12.24%;
  right: 41.84%;
  top: calc(50% - 14px / 2);

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */

  display: flex;
  align-items: center;

  /* Gray / 900 (default) */

  color: #323d45;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 5px;
`;

const SelectIcon = styled.img`
  position: static;
  width: 24px;
  height: 24px;
  left: 62px;
  top: 4px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 5px;
`;
