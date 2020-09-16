import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ButtonWrapper from '../style/ButtonWrapper';
import ViewCard from '../style/ViewCard';

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #f8f6f6;
  justify-content: center;
  align-items: center;
  z-index: -3;
`;
const LargeTextbox = styled.div`
  font-size: 41px;
  font-weight: bold;
`;
const MediumTextBox = styled.div`
  font-size: 24px;
  font-weight: normal;
  margin-top: 40px;
  color: #343434;
`;
const BtnWrapper = styled(ButtonWrapper)`
  padding-top: 56px;
  z-index: 0;
`;
const MyButton = styled(Button)`
  width: 209px;
  height: 70px;
  margin-left: 17px;
  margin-right: 17px;
  font-size: 20px;
  z-index: -1;
`;

const Card5 = () => {
  return (
    <Card>
      <LargeTextbox> 나인하이어와 함께</LargeTextbox>
      <LargeTextbox> 혁신적인 채용을 경험하세요</LargeTextbox>
      <MediumTextBox>30일동안 체험하시고 결정하세요</MediumTextBox>
      <BtnWrapper>
        <MyButton type="primary"> 30일 무료사용</MyButton>
        <MyButton> 도입 문의 받기</MyButton>
      </BtnWrapper>
    </Card>
  );
};

export default Card5;
