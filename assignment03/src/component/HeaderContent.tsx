import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ButtonWrapper from '../style/ButtonWrapper';
import DropdownMenu from './DropdownMenu';

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
      </BtnWrapper>
      <DropdownMenu />
    </div>
  );
};

export default HeaderContent;
