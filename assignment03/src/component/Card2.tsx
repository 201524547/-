import React, { useState } from 'react';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

const Card = styled(ViewCard)`
  flex-direction: column;
  flex-wrap: noswrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const Textbox = styled.div`
  padding-top: 450px;
  font-size: 34px;
  font-weight: 300;
`;
const Card2 = () => {
  return (
    <Card>
      <Textbox>
        나인하이어는 채용의 시작부터 끝까지
        <br />
        채용을 도와드리는 채용 솔루션입니다.
        <br />
        진행되었던 채용정보는 안전하게 저장 및 폐기 됩니다.
      </Textbox>
    </Card>
  );
};

export default Card2;
