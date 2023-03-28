import axios from "axios";
import { useQuery } from "react-query";

interface DogImage {
  message: string;
  status: string;
}

export interface RandomDogImageHook {
  dogImage: string;
  isLoading: boolean;
  error: unknown;
  isError: boolean;
  isSuccess: boolean;
  status: "error" | "idle" | "loading" | "success";
  isFetched: boolean;
}

const TEN_MINUTES = 10 * 60 * 1000;

const fetchRandomDogImage = async () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  const response = await axios.get<DogImage>(url);

  return response.data;
};

export function useRandomDogImage(): RandomDogImageHook {
  const options = {
    staleTime: TEN_MINUTES,
  };

  const { isLoading, isError, isSuccess, error, data, status, isFetched } =
    useQuery<DogImage>("dogImage", fetchRandomDogImage, options);

  return {
    dogImage: data?.message || "",
    isLoading,
    error,
    isError,
    isSuccess,
    status,
    isFetched,
  };
}
