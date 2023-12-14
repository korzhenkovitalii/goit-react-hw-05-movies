import { useEffect, useState } from 'react';
import { getMovieByQuery } from '../../API';

import { InputWrapper, Input, SearchButton,Link } from './Movies.styled';

export const Movie = () => {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const SubmitForm = e => {
    e.preventDefault();
    setQuery(e.target[0].value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(data => setMoviesByQuery(data));
  }, [query]);

  return (
    <>
      <InputWrapper onSubmit={SubmitForm}>
        <Input type="text" placeholder="Search" />
        <SearchButton type="submit">Go</SearchButton>
      </InputWrapper>
      {moviesByQuery.length > 0
        ? moviesByQuery.map(el => (
            <Link to={`${el.id}`} key={el.id}>{el.title || el.name}</Link>
          ))
        : null}
    </>
  );
};
