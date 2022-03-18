import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React, { ReactElement } from "react";

import { useAppDispatch } from "../app/hook";
import { addCheckedOption, delCheckedOption } from "../features/filteringSlice";

export default function CheckBoxList(props: { optionList: Array<string> }) {
  const { optionList } = props;
  const dispatch = useAppDispatch();

  let li: Array<ReactElement> = [];

  const handleCheck = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const option = event.currentTarget.id;

    if (checked) {
      dispatch(addCheckedOption(option));
    } else {
      dispatch(delCheckedOption(option));
    }
  };

  optionList.map((data, idx) =>
    li.push(
      <FormControlLabel
        key={idx}
        control={
          <Checkbox
            size="small"
            sx={{
              "&.Mui-checked": {
                color: "#2196F3",
              },
            }}
            id={data}
          />
        }
        label={<Label>{data}</Label>}
        onChange={handleCheck}
      />
    )
  );

  return <FormGroup>{li}</FormGroup>;
}

const Label = styled.span`
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
