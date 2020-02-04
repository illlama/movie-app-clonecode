import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

type Props = {
  id?: number;
  key?: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: Array<string>;
};

const Detail = (props: Props) => {
  const location = useLocation<{ title: string } | null>();
  const history = useHistory();
  console.log(props);
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, []);

  const title = location.state ? <span>{location.state.title}</span> : null;

  return <div>{title}</div>;
};

export default Detail;
