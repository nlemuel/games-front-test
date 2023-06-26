import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #161716;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
  
  backdrop-filter: blur(1.875rem);

    position: absolute;
    z-index: 1;
    width: 100%;

    height: 5.5rem;
`;

const Title = styled.h1`
  color: #f6a700;
  margin: 0;
`;

const SearchBar = styled.input`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Ls -s Games</Title>
      <SearchBar type="text" placeholder="Buscar jogo por título" />
    </HeaderContainer>
  );
};

export default Header;
