import React from "react";
import styled from "styled-components";
import PageSkeleton from "../Skeleton/PageSkeleton";

export default function Main() {
  return (
    <Wrapper>
      <PageSkeleton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
