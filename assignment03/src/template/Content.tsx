import React from 'react';
import styled from 'styled-components';
import Card1 from '../component/Card1';
import Card2 from '../component/Card2';
import Card3 from '../component/Card3';
import Card4 from '../component/Card4';
import Card5 from '../component/Card5';

const BreakPoint = 1024;

interface Props {
  ElementArray: Array<{
    id: number;
    left: boolean;
    title: string;
    content: string;
    buttons: Array<string>;
  }>;
}
const Content: React.FC<Props> = Props => {
  return (
    <div>
      <Card1 />
      <Card2 />
      {Props.ElementArray.map((content, index) => (
        <Card3 contents={content} key={index} />
      ))}
      <Card4 />
      <Card5 />
    </div>
  );
};

export default Content;
