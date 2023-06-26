import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #161716;
  padding: 20px;
`;

const Title = styled.h1`
  color: #f6a700;
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Ls -s Games</Title>
    </HeaderContainer>
  );
};

export default Header;
