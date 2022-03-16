import styled from "styled-components";

export default function Card() {
  return <Root></Root>;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 16px;

  position: static;
  width: 366px;
  height: 356px;
  left: 0px;
  top: 0px;

  /* Gray / 000 (white default) */

  background: #ffffff;
  /* Background / Base */

  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 16px;
`;
