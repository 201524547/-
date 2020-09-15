import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ButtonWrapper from '../style/ButtonWrapper';

const BreakPoint = 1024;

const HeaderTitle = styled.div`
  font-size: 25px;
  font-weight: 900;
  font-family: NotoSansKR;
  color: #2c2c2c;
  text-align: center;
  display: inline;
`;
const HeaderTitleBlue = styled(HeaderTitle)`
  color: #1968fc;
`;
const HeaderMenu = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: #373737;
  margin-left: 45px;
  display: inline;

  @media only screen and (max-width: ${BreakPoint}px) {
    display: none;
  }
`;
const CustomButton = styled(Button)`
  display: inline-block;
  width: 103px;
  height: 35px;
  margin-left: 20px;
`;
const BtnWrapper = styled(ButtonWrapper)`
  float: right;

  @media only screen and (max-width: ${BreakPoint}px) {
    display: none;
  }
`;

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

const HeaderContent = () => {
  return (
    <div>
      <HeaderTitleBlue>Nine</HeaderTitleBlue>
      <HeaderTitle>Hire</HeaderTitle>
      <HeaderMenu>기능 소개</HeaderMenu>
      <HeaderMenu>요금 안내</HeaderMenu>
      <HeaderMenu>도입 문의</HeaderMenu>
      <BtnWrapper>
        <CustomButton>로그인</CustomButton>
        <CustomButton type="primary">회원가입</CustomButton>
      </BtnWrapper>{' '}
      <NavbarDropdown>
        <Mydiv>Menu</Mydiv>
        <NavbarDropdownContent>
          <MyButton>기능 소개</MyButton>
          <MyButton>요금 안내</MyButton>
          <MyButton>도입 문의</MyButton>
        </NavbarDropdownContent>
      </NavbarDropdown>
    </div>
  );
};

export default HeaderContent;
