import React from 'react';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

const Card = styled(ViewCard)`
  padding-top: 150px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;
const Contentbox = styled.div`
  display: flex;
  flex-direction: column;
`;
const LargeTextbox = styled.div`
  font-size: 41px;
  font-weight: bold;
`;
const SmallTextBox = styled.div`
  font-size: 21px;
  font-weight: normal;
`;
const MediumTextBox = styled.div`
  font-size: 29px;
  font-weight: bold;
  border-bottom: 14px solid #6dffcb;
`;

const Card4 = () => {
  return (
    <Card>
      <Contentbox>
        <LargeTextbox>원하는 인재를</LargeTextbox>
        <LargeTextbox>놓치고 있지 않으신가요?</LargeTextbox>
        <p />
        <p />
        <p />
        <SmallTextBox>홈페이지 및 광고 제작, 면접, 과제준비</SmallTextBox>
        <SmallTextBox>지원서, 동의서 제작, 데이터 보관 폐기 등</SmallTextBox>
        <p />
        <p />
        <p />
        <MediumTextBox>이런 복잡한 업무들은 가장 중요한</MediumTextBox>
        <MediumTextBox>지원자에게 집중할 수 없게 합니다.</MediumTextBox>
      </Contentbox>
    </Card>
  );
};

export default Card4;
