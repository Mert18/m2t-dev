import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { Data } from "../lib/types";

export default function Graph() {
  const { data } = useSWR<Data>("/api/data", fetcher);

  if (!data) {
    return null;
  }
  return <></>;
}
