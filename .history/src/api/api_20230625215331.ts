import axios, { AxiosResponse } from 'axios';

interface Game {
  id: number;
  title: string;
  genre: string;
  thumbnail: string;
  short_description: string;
}

const API_URL = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/';

const fetchGames = async (): Promise<Game[]> => {
  try {
    const config = {
      headers: {
        'dev-email-address': 'lemuelayres@gmail.com'
      },
      timeout: 5000
    };

    const response: AxiosResponse<Game[]> = await axios.get(API_URL, config);
    return response.data;
  } catch (error: any) {
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      throw new Error('O servidor demorou para responder, tente mais tarde');
    } else if (error.response && error.response.status >= 500 && error.response.status <= 509) {
      throw new Error('O servidor falhou em responder, tente recarregar a página');
    } else {
      throw new Error('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
    }
  }
};

export { fetchGames };
