import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

let receivedFormData = {};

// rename it to something more meaningful
async function getDescription(data) {
  const prompt: string = `
    Stellar Characteristics:
    `;

  // let response = await fetch(
  //   "https://api.openai.com/v1/engines/davinci/completions",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${OPENAI_API_KEY}`,
  //     },
  //     body: JSON.stringify({
  //       prompt: "This is a test",
  //       max_tokens: 5,
  //       temperature: 0.5,
  //       top_p: 1,
  //       n: 1,
  //       stream: false,
  //       logprobs: null,
  //       stop: ["\n"],
  //     }),
  //   },
  // );
  // let chatgpt_data = await response.json();

  return "data from fetch call";
}

export const load: PageServerLoad = async () => {
  let some_data = await getDescription({});

  return { some_data, receivedFormData };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = Object.fromEntries(await request.formData());
    receivedFormData = data;
    console.log(data);
  },
  // POST: async ({ cookies, request }) => {
  //   const data = await request.formData();
  //   console.log(data);
  //   return "OK";
  // },
};
