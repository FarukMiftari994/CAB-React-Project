export interface FetchResultOK {
  success: number;
  result: Leagues[];
}

export interface FetchResultNotOK {
  error: string;
}

export interface Leagues {
  league_key: number;
  league_name: string;
  country_key: number;
  country_name: string;
  league_logo: null | string;
  country_logo: null | string;
}
