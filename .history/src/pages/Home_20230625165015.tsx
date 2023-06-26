import React, { useState, useEffect } from 'react';
import Container from '../components/Container/styles';
import Card from '../components/Card/styles';
import Title from '../components/Title/styles';
import Image from '../components/Image/styles';
import ErrorMessage from '../components/ErrorMessage/styles';
import Loader from '../components/Loader/styles';
// import SearchBar from '../components/SearchBar/styles';
import GenreFilter from '../components/GenreFilter/styles';
import Header from '../components/Header';

import { fetchGames } from '../api/api';
import DescriptionText from '../components/Description/styles';

interface Game {
  id: number;
  title: string;
  genre: string;
  thumbnail: string;
  short_description: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');

        const fetchedGames = await fetchGames();
        setGames(fetchedGames);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredGamesByGenre = selectedGenre
    ? filteredGames.filter((game) => game.genre === selectedGenre)
    : filteredGames;

  return (
    <div>
     <Header setSearchTerm={handleSearch} />
      {/* <SearchBar type="text" placeholder="Buscar jogo por título" onChange={handleSearch} /> */}

      <GenreFilter value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Todos os gêneros</option>
        {[...new Set(games.map((game) => game.genre))].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </GenreFilter>

      {loading ? (
        <Loader>Carregando...</Loader>
      ) : (
        <Container>
          {filteredGamesByGenre.map((game) => (
            <Card key={game.id}>
              <Title>{game.title}</Title>
              <Image src={game.thumbnail} alt={game.title} />
              <DescriptionText>{game.short_description}</DescriptionText>
            </Card>
          ))}
        </Container>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default App;
