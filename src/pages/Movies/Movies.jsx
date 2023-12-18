import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieByQuery } from '../../API';

import { InputWrapper, Input, SearchButton, Link } from './Movies.styled';

export const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get('query') ?? '';
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  const SubmitForm = e => {
    e.preventDefault();
    const query = e.target[0].value;

    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    e.target.reset();
  };

  useEffect(() => {
    if (!urlSearch) {
      setMoviesByQuery([]);
      return;
    }
    getMovieByQuery(urlSearch).then(data => setMoviesByQuery(data));
  }, [urlSearch]);

  return (
    <>
      <InputWrapper onSubmit={SubmitForm}>
        <Input type="text" placeholder="Search" />
        <SearchButton type="submit">Go</SearchButton>
      </InputWrapper>
      {moviesByQuery.length > 0
        ? moviesByQuery.map(el => (
            <Link
              to={`${el.id}`}
              key={el.id}
              state={{ from: `/movies?query=${urlSearch}` }}
            >
              {el.title || el.name}
            </Link>
          ))
        : null}
    </>
  );
};
