import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter } from '../../types';
import { IPeopleResponse } from '../../types';

type Props = {
  peopleResponse: IPeopleResponse;
};

/**
 * Hjálpar týpa ef við erum að filtera burt hugsanleg null gildi:
 *
 * const items: T = itemsWithPossiblyNull
 *  .map((item) => {
 *    if (!item) {
 *      return null;
 *    }
 *    return item;
 *  })
 *  .filter((Boolean as unknown) as ExcludesFalse);
 * items verður Array<T> en ekki Array<T | null>
 */
type ExcludesFalse = <T>(x: T | null | undefined | false) => x is T;

export function Characters({ peopleResponse }: Props): JSX.Element {

  const [loading, setLoading] = useState<boolean>(false);

  const [characters, setCharacters] = useState<Array<ICharacter>>(peopleResponse.people);
  const [hasNext, setNext] = useState<boolean>(peopleResponse.pageInfo.hasNextPage);
  const [nextPage, setNextPage] = useState<string | null>(peopleResponse.pageInfo.endCursor);

  useEffect(() => {
    async function showCharacterList() {
      const res = peopleResponse;

      setCharacters(res.people);
      setNextPage(res.pageInfo.endCursor);
    }
    showCharacterList();
  }, [peopleResponse]);

  const fetchMore = async (): Promise<void> => {
    setLoading(true);

    const res = await fetch(`/api/characters?after=${nextPage}`);
    const data = await res.json();

    setCharacters(characters.concat(data.allPeople.people));
    setNextPage(data.allPeople.pageInfo.endCursor);
    setNext(data.allPeople.pageInfo.hasNextPage);

    setLoading(false);
  };

  characters.map((character) => {
    if(!character) {
      return null;
    }
    return character;
  }).filter((Boolean as unknown) as ExcludesFalse);

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
      { loading && <p>Fetching....</p>}    
      { hasNext && <Button disabled={loading} onClick={fetchMore}>Fetch more</Button>}
    </section>
  );
}
