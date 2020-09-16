import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

interface Props {
  contents: {
    title: string;
    subtitle: Array<string>;
  };
}

const BreakPoint = 1300;

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TitleBox = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2c2c2c;
`;
const ContentsBox = styled.div`
  font-size: 17px;
  font-weight: normal;
  color: #2c2c2c;
  margin-top: 12px;
`;

const column: React.FC<Props> = Props => {
  return (
    <Card>
      <TitleBox>{Props.contents.title}</TitleBox>
      {Props.contents.subtitle.map((subject, index) => (
        <ContentsBox key={index}>{subject}</ContentsBox>
      ))}
    </Card>
  );
};

export default column;
