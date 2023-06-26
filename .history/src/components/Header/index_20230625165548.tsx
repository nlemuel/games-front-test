import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #161716;
  padding: 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #f6a700;
  margin: 0;
`;

const SearchBar = styled.input`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
  margin-left: 3rem;
`;

interface HeaderProps {
  setSearchTerm: React.ChangeEventHandler<HTMLInputElement>;
}

const Header: React.FC<HeaderProps> = ({ setSearchTerm }) => {
  return (
    <HeaderContainer>
      <Title>Ls -s Games</Title>
      <SearchBar type="text" placeholder="Buscar jogo por título" onChange={setSearchTerm} />
    </HeaderContainer>
  );
};

export default Header;
