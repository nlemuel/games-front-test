import React from 'react';
import SearchBar from './styles'

const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  export default handleSearch