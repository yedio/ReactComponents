import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return <NavWrapper>React Hook</NavWrapper>;
}

const NavWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 30px;
  background-color: lightgray;
`;
