import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export interface SearchResultsHook {
  searchResults: any;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
  isSuccess: boolean;
  status: "error" | "idle" | "loading" | "success";
  isFetched: boolean;
}

const TEN_MINUTES = 10 * 60 * 1000;

const fetchSearchResults = async (searchQuery: string, language: string) => {
  //   const url = `/api/search/movie?query=${searchQuery}&language=${language}`;

  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await axios.get<any[]>(url);

  return response.data;
};

type CreateSearchResultQueryKeyParameters = {
  searchQuery: string;
  locale: string | undefined;
};

export const createSearchResultQueryKey = ({
  searchQuery,
  locale,
}: CreateSearchResultQueryKeyParameters) => {
  return ["searchResults", searchQuery, locale];
};

export function useSearchResults(searchQuery: string): SearchResultsHook {
  const options = {
    staleTime: TEN_MINUTES,
  };

  const { locale } = useRouter();

  const { isLoading, isError, isSuccess, error, data, status, isFetched } =
    useQuery<any[]>(
      createSearchResultQueryKey({ searchQuery, locale }),
      ({ queryKey }) => {
        const [, searchQueryKey, localeKey] = queryKey;
        return fetchSearchResults(
          searchQueryKey as string,
          localeKey as string
        );
      },
      options
    );

  return {
    searchResults: data,
    isLoading,
    error,
    isError,
    isSuccess,
    status,
    isFetched,
  };
}
