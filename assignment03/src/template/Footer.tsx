import React from 'react';
import styled from 'styled-components';
import ViewCard from '../style/ViewCard';
import FooterTitle from '../component/FooterTitle';
import Column from '../component/Column';

const Card = styled(ViewCard)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding-top: 200px;
`;

interface Props {
  FooterArray: Array<{
    title: string;
    subtitle: Array<string>;
  }>;
}

const Footer: React.FC<Props> = Props => {
  return (
    <Card>
      <FooterTitle />
      {Props.FooterArray.map((column, index) => (
        <Column key={index} contents={column} />
      ))}
    </Card>
  );
};

export default Footer;
