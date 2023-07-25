import { useFetch } from "#imports";

// This doesn't work
export default () => {
  return useFetch("/api/applications");
};

// This works but I would like to avoid having to re-type the return type since it's already inferred and extracted by nuxt/nitro-pack
// import type { FetchError } from "ofetch";
// import { AsyncData } from "nuxt/app";
// export default (): AsyncData<string[] | null, FetchError<any> | null> => {
//   return useFetch("/api/applications");
// };
