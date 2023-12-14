import { useParams } from 'react-router-dom';
import { PiCameraSlashFill } from 'react-icons/pi';

import { getMovieCast } from '../../API';
import { useEffect, useState } from 'react';

import { CastBox, ActorPhoto, ActorName, CastItem } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getMovieCast(id).then(data => setCast(data));
  }, [id]);
  return (
    <CastBox>
      {cast.length > 1
        ? cast.map(el => (
            <CastItem key={el.id}>
              {el.profile_path ? (
                <ActorPhoto
                  src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
                  alt={el.name}
                />
              ) : (
                <PiCameraSlashFill size={100} />
              )}
              <ActorName>{el.name}</ActorName>
            </CastItem>
          ))
        : null}
    </CastBox>
  );
};
