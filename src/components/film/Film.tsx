import Link from 'next/link';

import { IFilm } from '../../types';
import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film  }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <p className={s.film__text}>
        {`${film.openingCrawl}`}
      </p>
      <h3>Characters</h3>
      <p className={s.film__characters}>
        {`${film.characters}`}
      </p>
    </section>
  );
}
