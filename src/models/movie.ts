export interface Movie {
  id: number;
  title: string;
}

export interface MovieApiResult {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
