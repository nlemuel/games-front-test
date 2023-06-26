import styled from 'styled-components';

const Card = styled.div`
  flex: 0 0 30%;
  margin: 10px;
  padding: 10px;
  background-color: #161716;
  border-radius: 5px;
  margin-top: 7rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px #f6a700;
  }

  /* Responsividade para 2 colunas (768px a 1023px) */
  @media (max-width: 1023px) {
    flex: 0 0 50%;
  }

  /* Responsividade para 1 coluna (abaixo de 767px) */
  @media (max-width: 767px) {
    flex: 0 0 100%;
  }
`;

export default Card;
