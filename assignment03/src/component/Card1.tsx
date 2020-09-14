import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import ViewCard from '../style/ViewCard';
import ButtonWrapper from '../style/ButtonWrapper';

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 144px;

  margin-left: 250px;
  margin-right: 250px;
`;
const LargeText = styled.div`
  font-size: 55px;
  font-weight: bold;
  flex: 1 10 2;
  ${props =>
    props.color &&
    `
      border-bottom: 14px solid rgba(25, 104, 252, 0.5);
    `}
  border-bottom: props && 14px solid ${props => props.color};
`;
const SmallText = styled(LargeText)`
  font-size: 19px;
  font-weight: normal;
  flex: 1 10 1;
`;
const StyledButton = styled(Button)`
  margin-top: 44px;
  margin-right: 38px;
  width: 187px;
`;

const Card1 = () => {
  return (
    <Card>
      <LargeText>복잡했던 채용을</LargeText>
      <LargeText color="rgba(25, 104, 252, 0.5)">간단하게</LargeText>
      <p></p>
      <p></p>
      <SmallText>채용공고, 지원자 관리, 채용절차법 등 </SmallText>
      <SmallText>복잡한 채용을 나인하이어와 </SmallText>
      <SmallText>간단하게 진행하세요</SmallText>
      <ButtonWrapper>
        <StyledButton type="primary">30일 무료사용</StyledButton>
        <StyledButton>소개서 다운받기</StyledButton>
      </ButtonWrapper>
    </Card>
  );
};

export default Card1;
