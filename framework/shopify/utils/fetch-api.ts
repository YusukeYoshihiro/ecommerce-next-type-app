import { ApiFetcherOptions, ApiFetcherResult } from "@common/types/api";

const fetchApi = async <T>({
  url,
  query,
  variables,
}: ApiFetcherOptions): Promise<ApiFetcherResult<T>> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    // ?? is checking if left hand expression is null or undefined -> if it is go with right expression
    // || is checking if left hand expression is null, undefined, "", 0, false
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchApi;
