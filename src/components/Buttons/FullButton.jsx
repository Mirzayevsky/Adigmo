import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: ${(props) => (props.border ? "#49CB86" : "#0080ff")};
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  padding: 15px 12px;
  outline: none;
  color: #fff;
  border:0;
  &:hover {
    background-color: #49CB86;
  }
`;

