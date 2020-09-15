import React from 'react';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  align-items: center;
`;

const Textbox = styled.div`
  font-size: 34px;
  font-weight: 300;
  width: 820px;
`;

const Card2 = () => {
  return (
    <Card>
      <Textbox> 진행되었던 채용정보는 안전하게 저장 및 폐기 됩니다.</Textbox>
      <Textbox> 채용을 도와드리는 채용 솔루션입니다.</Textbox>
      <Textbox>나인하이어는 채용의 시작부터 끝까지</Textbox>
    </Card>
  );
};

export default Card2;
