import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckBoxGroup() {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              sx={{
                "&.Mui-checked": {
                  color: "#2196F3",
                },
              }}
            />
          }
          label={<Label>알루미늄</Label>}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              sx={{
                "&.Mui-checked": {
                  color: "#2196F3",
                },
              }}
            />
          }
          label={<Label>알루미늄</Label>}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              size="small"
              sx={{
                "&.Mui-checked": {
                  color: "#2196F3",
                },
              }}
            />
          }
          label={<Label>알루미늄</Label>}
        />
      </FormGroup>
    </>
  );
}

const Label = styled.span`
  font-family: "Noto Sans KR Medium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #323d45;
`;
