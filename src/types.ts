// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  birthYear?: string;
  eyeColor?: string;
  hairColor?: string;
  height?: number;
  mass?: number;
}

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  characterConnection: ICharacterConnection;
}

interface ICharacterConnection {
  characters: ICharacter[];
}

export interface IPeopleResponse {
  people: ICharacter[];
  pageInfo: IPaging;
}

interface IPaging {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface IAllFilms {
  films: Array<IFilm>;
}

export interface IFetchFilms {
  allFilms: IAllFilms;
}

export interface IFetchCharacter {
  person: ICharacter;
}
