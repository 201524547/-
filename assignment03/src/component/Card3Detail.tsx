import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

interface Props {
  contents: {
    id: number;
    left: boolean;
    title: string;
    content: string;
    buttons: Array<string>;
  };
}

const BreakPoint = 1300;

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
const Rectangle = styled.div`
  width: 91px;
  height: 28px;
  border-radius: 2px;
  background-color: #000000;
  text-align: center;
  color: #ffffff;
`;
const TitleBox = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #000000;

  @media only screen and (max-width: ${BreakPoint}px) {
    font-size: 30px;
  }
`;
const ContentsBox = styled.div`
  width: 360px;
  height: 56px;
  font-size: 18px;
  font-weight: normal;
  color: #373737;
`;
const Learn = styled.div`
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  color: #525dfc;
  margin-top: 10px;
  margin-bottom: 29px;
`;
const GrayButton = styled(Button)`
  width: 356px;
  height: 56px;
  border-radius: 2px;
  background-color: #f5f5f5;
  font-weight: bold;
  font-size: 18px;
  color: #373737;
  margin-top: 10px;
  text-align: left;
  z-index: -1;
`;

const Card3Detail: React.FC<Props> = Props => {
  return (
    <Card>
      <Rectangle>주요기능 {Props.contents.id}</Rectangle>
      <TitleBox>{Props.contents.title}</TitleBox>
      <ContentsBox>{Props.contents.content}</ContentsBox>
      <Learn>자세히 알아보기 →</Learn>
      {Props.contents.buttons.map((subject, index) => (
        <GrayButton key={index}>{subject}</GrayButton>
      ))}
    </Card>
  );
};

export default Card3Detail;
