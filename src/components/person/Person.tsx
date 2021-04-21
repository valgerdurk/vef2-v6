import Link from 'next/link';
import { ICharacter } from '../../types';
import s from './Person.module.scss';

type Props = {
  person: ICharacter;
};

export function Person({ person }: Props): JSX.Element {
  return (
    <div className={s.person}>
      <h1>{person.name}</h1>
      <h4>Birth year:</h4>
      <p>{person.birthYear}</p>
      <h4>Eye color:</h4>
      <p>{person.eyeColor}</p>
      <h4>Hair color:</h4>
      <p>{person.hairColor}</p>
      <h4>Height:</h4>
      <p>{person.height}</p>
      <h4>Mass:</h4>
      <p>{person.mass}</p>
      <div className={s.person__link}>
        <Link href="/characters">Back to characters</Link>
      </div>
    </div>
  );
}
