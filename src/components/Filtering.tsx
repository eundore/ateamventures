import styled from "styled-components";
import CheckBoxList from "./CheckBoxList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect, useState } from "react";
import getFilterOptionList from "../api/getFilterOptionList";
import { filterOption } from "../utils/CommonInterface";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { resetCheckedList } from "../features/filteringSlice";
import { setToggleFlag } from "../features/filteringSlice";

export default function Filtering() {
  const [methodSelected, setMethodSelected] = useState<boolean>(false);
  const [materialSelected, setMaterialSelected] = useState<boolean>(false);
  const [filterOptions, setFilterOptions] = useState<filterOption>();
  const [originFilterOptions, setOriginFilterOptions] =
    useState<filterOption>();

  const checkedList = useAppSelector((state) => state.filtering.list);
  const dispatch = useAppDispatch();

  const setSelected = (
    event: React.MouseEvent<HTMLElement>,
    newState: boolean
  ) => {
    let el = document.querySelector(".selected");

    if (el !== null) {
      el.classList.remove("selected");
    }
    if (newState) {
      event.currentTarget.classList.add("selected");
    } else {
      event.currentTarget.classList.remove("selected");
    }
  };

  const handleMethodSelectBox = (event: React.MouseEvent<HTMLElement>) => {
    setMaterialSelected(false);
    const newState = !methodSelected;
    setSelected(event, newState);
    setMethodSelected(newState);
  };

  const handleMaterialSelectBox = (event: React.MouseEvent<HTMLElement>) => {
    setMethodSelected(false);
    const newState = !materialSelected;
    setSelected(event, newState);
    setMaterialSelected(newState);
  };

  useEffect(() => {
    getFilterOptionList()
      .then((res) => res.json())
      .then((data) => {
        setFilterOptions((prev) => data);
        setOriginFilterOptions((prev) => data);
      });
  }, []);

  useEffect(() => {
    if (filterOptions === undefined) {
      // 초기화된 filtering option list에 원래 값 설정.
      setFilterOptions((prev) => originFilterOptions);
    }
  }, [filterOptions]);

  const handleRefresh = () => {
    //checked filtering list 초기화.
    dispatch(resetCheckedList());

    //toggle 초기화
    dispatch(setToggleFlag(false));

    //SelectBox 초기화.
    setMaterialSelected(false);
    setMethodSelected(false);

    // filtering option list 초기화.
    setFilterOptions((prev) => undefined);
    document.querySelectorAll(".selected").forEach((item) => {
      item.classList.remove("selected");
    });
  };

  return (
    <Container>
      <FilterContainer>
        <SelectBox onClick={handleMethodSelectBox}>
          <span>가공방식</span>
          <ArrowDropDownIcon
            sx={{ color: `${methodSelected ? "#FFFFFF" : "#939FA5"}` }}
          />
        </SelectBox>
        <CheckBoxContainer
          style={{
            display: `${methodSelected ? "block" : "none"}`,
          }}
        >
          <CheckBoxList
            optionList={
              filterOptions !== undefined ? filterOptions.processMethod : []
            }
          />
        </CheckBoxContainer>
      </FilterContainer>

      <FilterContainer>
        <SelectBox onClick={handleMaterialSelectBox}>
          <span>
            재료 {checkedList.length > 0 ? ` (${checkedList.length})` : ""}
          </span>
          <ArrowDropDownIcon
            sx={{ color: `${materialSelected ? "#FFFFFF" : "#939FA5"}` }}
          />
        </SelectBox>
        <CheckBoxContainer
          style={{
            display: `${materialSelected ? "block" : "none"}`,
          }}
        >
          <CheckBoxList
            optionList={
              filterOptions !== undefined ? filterOptions.material : []
            }
          />
        </CheckBoxContainer>
      </FilterContainer>

      <RefreshContainer onClick={handleRefresh}>
        <RefreshIcon sx={{ color: "#2196F3" }} />
        <RefreshText>필터링 리셋</RefreshText>
      </RefreshContainer>
    </Container>
  );
}

const Container = styled.div`
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

const FilterContainer = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;

  width: 98px;
  height: 32px;

  background: "#FFFFFF";

  border: 1px solid #939fa5;
  box-sizing: border-box;
  border-radius: 4px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: "#323d45";

  &:hover {
    border: 1px solid rgba(33, 150, 243, 1);
  }

  &.selected {
    background: #1565c0;
    color: #ffffff;
  }

  cursor: pointer;
`;

const CheckBoxContainer = styled.div`
  display: none;
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
  cursor: pointer;
`;

const RefreshText = styled.div`
  font-family: "Noto Sans KR Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  color: #2196f3;
`;
