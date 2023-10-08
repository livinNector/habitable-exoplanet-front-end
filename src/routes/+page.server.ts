import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

// rename it to something more meaningful
async function fetch_call() {
  // do the serverside fetch call using OPENAI_API_KEY
  return "data from fetch call";
}

export const load: PageServerLoad = async () => {
  // const id = cookies.get("userid");
  //
  // if (!id) {
  //   cookies.set("userid", crypto.randomUUID(), { path: "/" });
  // }

  let some_data = await fetch_call();

  return { some_data };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    console.log(data);
  },
};
