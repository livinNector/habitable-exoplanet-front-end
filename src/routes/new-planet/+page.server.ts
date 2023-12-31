import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "$types";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});


// rename it to something more meaningful
async function getEssay(data:any) {

  let chatCompletion = await openai.chat.completions.create({
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

  return chatCompletion.choices[0].message.content
}

async function getDallEPrompts(essay: any) {

  let chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
  You are a DALL-E Prompt engineer.
For the given essay about a planet.
create the required prompts.
  `
      },
      {
        role: "user", content: `
Essay:
${essay}
---
1. Generate a short, visually descriptive prompt for DALL-E to create an image of a planet viewed from space, using commas to separate descriptive terms."
2. Generate a short, visually descriptive prompt for DALL-E to create an image of a planet's surface viewed from the ground, using commas to separate descriptive terms."

Output format:
{
  "spaceViewPrompt":<space view prompt>,
  "groundViewPrompt":<ground view prompt>
}
` }],
    model: "gpt-4",
  });

  return JSON.parse(chatCompletion.choices[0].message.content)
}

async function generateImages(prompts:{[index:string]:string}){
  console.log(prompts)
  let spaceViewGeneration = await openai.images.generate({
    prompt: prompts["spaceViewPrompt"],
    size: "512x512",
    n:1
  })
  let groundViewGeneration = await openai.images.generate({
    prompt: prompts["groundViewPrompt"],
    size: "512x512",
    n: 1
  })
  console.log(spaceViewGeneration)
  console.log(groundViewGeneration)
  return {spaceViewUrl: spaceViewGeneration["data"][0]["url"],groundViewUrl: groundViewGeneration["data"][0]["url"]}
}
export const load: PageServerLoad = async (data:any) => {
  // const id = cookies.get("userid");
  //
  // if (!id) {
  //   cookies.set("userid", crypto.randomUUID(), { path: "/" });
  // }

  let essay = await getEssay(data);
  let prompts = await getDallEPrompts(essay);
  let imageURLs = await generateImages(prompts)
  return {essay:essay, prompts:prompts, images:imageURLs};
};

export const actions = {
  default: async ({ cookies, request }) => {
    const data = Object.fromEntries(await request.formData());
    
    console.log(data);
  },
};
