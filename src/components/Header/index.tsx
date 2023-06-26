import React from 'react';
import { HeaderContainer, Title, SearchBar, GenreFilter } from './styles';

interface HeaderProps {
  setSearchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    setSearchTerm(event);
  };

  return (
    <HeaderContainer>
      <Title>Ls -s Games</Title>
      <div>
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
      </div>
    </HeaderContainer>
  );
};

export default Header;
