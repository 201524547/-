import React, { useState } from 'react';
import styled from 'styled-components';
import Card1 from '../component/Card1';
import Card2 from '../component/Card2';
import ViewCard from '../style/ViewCard';

const Content = () => {
  return (
    <div>
      <Card1 />
      <Card2 />
      <ViewCard />
    </div>
  );
};

export default Content;
