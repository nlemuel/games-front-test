import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios, { AxiosResponse } from 'axios';

interface Game {
  id: number;
  title: string;
  genre: string;
  thumbnail: string;
  short_description: string;
}

const API_URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Card = styled.div`
  flex: 0 0 30%;
  margin: 10px;
  padding: 10px;
  background-color: #161716;
  border-radius: 5px;
`;

const Title = styled.h3`
  color: #f6a700;
  margin: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 24px;
`;

const SearchBar = styled.input`
  display: flex;
  justify-content: center;
  width: 30%;
  margin-bottom: 10px;
  padding: 5px;

  background-color: #161716;
`;

const GenreFilter = styled.select`
  display: flex;
  justify-content: center;
  width: 30%;
  margin-bottom: 10px;
  padding: 5px;

  background-color: #161716;
`;

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        setError('');

        const config = {
          headers: {
            'dev-email-address': 'lemuelayres@gmail.com'
          },
        };

        const response: AxiosResponse<Game[]> = await axios.get(API_URL, config);
        setGames(response.data);
      } catch (error: any) {
        if (error.response && error.response.status >= 500 && error.response.status <= 509) {
          setError('O servidor falhou em responder, tente recarregar a página');
        } else {
          setError('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
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
      <SearchBar type="text" placeholder="Buscar jogo por título" onChange={handleSearch} />

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
              <p>{game.short_description}</p>
            </Card>
          ))}
        </Container>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default App;
