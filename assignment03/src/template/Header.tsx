import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderContent from '../component/HeaderContent';

const HeaderWrapper = styled.div`
  position: fixed;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 33px;
  background-color: #ffffff;
  width: 100%;
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent />
    </HeaderWrapper>
  );
};

export default Header;
