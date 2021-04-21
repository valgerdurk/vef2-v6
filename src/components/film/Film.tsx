import Link from 'next/link';

import { IFilm } from '../../types';
import s from './Film.module.scss';

type Props = {
  film: IFilm;
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        {`Episode ${film.episodeID}: ${film.title}`}
      </h2>
      <div className={s.film__information}>
        <pre className={s.film__text}>
          {`${film.openingCrawl}`}
        </pre>
        <div className={s.film__characters}>
          <h3>Characters</h3>
          <div className={s.film__names}>
            {film.characterConnection.characters.map((character, i) => (
              <div className={s.film__name}>
                <Link key={i} href={`/characters/${character.id}`}>
                  {character.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
