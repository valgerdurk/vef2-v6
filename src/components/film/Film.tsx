import Link from 'next/link';

import { IFilm } from '../../types';
import s from './Film.module.scss';

type Props = {

};

// TODO: Þetta er eitthvað off
export function Film({  }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode X
      </h2>
    </section>
  );
}
