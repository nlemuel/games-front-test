import styled from 'styled-components';

export const HeaderContainer = styled.header`
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

export const Title = styled.h1`
  color: #f6a700;
  margin: 0;
`;

export const SearchBar = styled.input`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
  margin-right: 10px;
`;

export const GenreFilter = styled.select`
  padding: 5px;
  background-color: #161716;
  color: #f6a700;
  margin-right: 3rem;
`;
