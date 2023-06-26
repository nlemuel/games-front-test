import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {
        font-family: 'Inter', sans-serif;
  }
  /* Estilos globais aqui */

  /* Estilos para dispositivos menores, como tablets e celulares */
  @media only screen and (max-width: 768px) {
    /* Exemplos de estilos para dispositivos menores */
  }

  /* Estilos para dispositivos móveis, como celulares */
  @media only screen and (max-width: 480px) {
    /* Exemplos de estilos para dispositivos móveis */
  }
  
  /* Estilos para dispositivos maiores, como desktops e notebooks */
  @media only screen and (min-width: 1024px) {
    /* Exemplos de estilos para dispositivos maiores */
  }
`;

export default GlobalStyles;
