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
`;

const Title = styled.h1`
  color: #f6a700;
  margin: 0;
`;

const SearchBar = styled.input`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
  margin-right: 10px;
`;

const GenreFilter = styled.select`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
`;

interface HeaderProps {
  setSearchTerm: (value: React.ChangeEvent<HTMLInputElement>['target']['value']) => void;
  selectedGenre: string;
  handleGenreChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  genres: string[];
}

const Header: React.FC<HeaderProps> = ({
  setSearchTerm,
  selectedGenre,
  handleGenreChange,
  genres,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <HeaderContainer>
      <Title>Ls -s Games</Title>
      <SearchBar
        type="text"
        placeholder="Buscar jogo por título"
        onChange={handleSearch}
      />
      <GenreFilter value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Todos os gêneros</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </GenreFilter>
    </HeaderContainer>
  );
};

export default Header;
