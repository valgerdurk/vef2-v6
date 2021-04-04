// Hér eru þær týpur sem við skilgreinum á móti GraphQL endapunkti

export interface ICharacter {
  id: string;
  name?: string;
  // TODO fleiri týpur
}

export interface IFilm {
  title: string;
  episodeID: number;
  openingCrawl: string;
  characters: ICharacter[];
}

// Hvað á þetta að vera??
export interface IPeopleResponse {
  name: string;
}

// TODO hér ættum við að útbúa interface fyrir öll gögn sem við vinnum með (t.d. IFilm, IPaging)
// og svör sem við fáum frá GraphQL endapunkti
