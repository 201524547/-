import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const BreakPoint = 1024;

const NavbarDropdownContent = styled.div`
  display: none;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 15px 20px;
  z-index: 1;
`;
const NavbarDropdown = styled.div`
  display: inline;

  &:hover ${NavbarDropdownContent} {
    display: block;
    flex-direction: column;
    width: 100%;
  }
  @media only screen and (min-width: ${BreakPoint}px) {
    display: none;
  }
`;
const MyButton = styled(Button)`
  display: block;
  width: 830px;
  margin-top: 10px;
`;
const Mydiv = styled.div`
  float: right;
`;

const DropdownMenu = () => {
  return (
    <NavbarDropdown>
      <Mydiv>Menu</Mydiv>
      <NavbarDropdownContent>
        <MyButton>기능 소개</MyButton>
        <MyButton>요금 안내</MyButton>
        <MyButton>도입 문의</MyButton>
      </NavbarDropdownContent>
    </NavbarDropdown>
  );
};

export default DropdownMenu;
