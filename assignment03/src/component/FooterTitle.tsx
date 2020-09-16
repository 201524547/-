import React from 'react';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;
const LargeText = styled.div`
  font-size: 23px;
  font-weight: 900;
  color: #2c2c2c;
`;
const SmallText = styled(LargeText)`
  font-size: 16px;
  font-weight: normal;
`;

const FooterTitle = () => {
  return (
    <Card>
      <LargeText>NineHire</LargeText>
      <SmallText>make recruitment comfortable</SmallText>
      <SmallText>2019 hackit Inc.</SmallText>
    </Card>
  );
};

export default FooterTitle;
