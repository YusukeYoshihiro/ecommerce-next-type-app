export type Variables = { [key: string]: string | undefined };

export type ApiFetcherOptions = {
  url: string;
  query: string;
  variables?: Variables;
};

export type ApiFetcherResult<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch: ApiFetcher;
}

export interface ApiHooks {
  cart: {
    useAddItem: any;
  };
}

export type ApiFetcher<T = any> = (
  options: ApiFetcherOptions
) => Promise<ApiFetcherResult<T>>;

export interface ApiProviderContext {
  hooks: ApiHooks;
  fetcher: ApiFetcher;
}
