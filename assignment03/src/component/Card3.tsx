import React from 'react';
import styled from 'styled-components';
import Card3Detail from '../component/Card3Detail';
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

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
const GrayBox = styled.div`
  order: 1;
  width: 630px;
  height: 451px;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  background-color: #f3f3f3;
`;
const DetailWrapper = styled.div`
  height: 451px;
  margin-right: 64px;
  ${props =>
    props.primary &&
    ` 
    order:2;
  margin-left: 72px;
    margin-right:0;
    `}
`;

const Card3: React.FC<Props> = Props => {
  return (
    <Card>
      <GrayBox></GrayBox>
      <DetailWrapper primary={Props.contents.left}>
        <Card3Detail contents={Props.contents} />
      </DetailWrapper>
    </Card>
  );
};

export default Card3;
