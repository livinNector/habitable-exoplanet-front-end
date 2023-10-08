import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "$types";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});


// rename it to something more meaningful
async function getDescription(data:any) {

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
  You embody the skills and knowledge of a creative and innovative astronomer and writer.
  The user will provide you with specific details about an exoplanet.
  CAREFULLY CONSIDER EVERY PIECE OF INFORMATION THEY PROVIDE.
  Your task is to compose an imaginative and DETAILED essay about the exoplanet.
  Describe its characteristics, its position in its solar system, its potential history, and its notable features.
  If, based on the details provided, you believe that life could potentially exist on this exoplanet, mention that as well.
  `
      },
      {
        role: "user", content: `
This is the data of the exoplanet
${JSON.stringify(data)}
---
Consider these factors to jog your creative memory:
Higher gravity -> Shorter life height.
Older planet -> Higher possibility of life.
Frequent asteroid impacts -> Less suitable for survival.
Strong magnetosphere -> Easier access to electronics for intelligent life.
---
Write an essay of 800 words in html format (only the snippet not the boilerplate):
      ` }],
    model: "gpt-4",
  });

  return chatCompletion.choices[0].message
}

export const load: PageServerLoad = async (data:any) => {
  // const id = cookies.get("userid");
  //
  // if (!id) {
  //   cookies.set("userid", crypto.randomUUID(), { path: "/" });
  // }

  let some_data = await getDescription(data);

  return some_data;
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = Object.fromEntries(await request.formData());
    
    console.log(data);
  },
};
