import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

let receivedFormData = {};

// rename it to something more meaningful
async function getDescription(data) {
  //   {
  //   "Stellar Characteristics": {
  //     "Radius (Solar Radii)": [ 0.1, 100, "R☉"],
  //     "Temperature (Kelvin)": [ 600.0, 40000.0, "K"],
  //   },
  //   "Planetary Characteristics": {
  //     "Radius (Jupiter Radii)": [ 0.01, 3.0, "Rj"],
  //     "Mass (Jupiter Mass)": [ 1e-05, 300.0, "Mj"],
  //     "Orbital Radius": [ 0, 10, "AU"],
  //     "Albedo (Fraction of light reflected)": [ 0, 1],
  //     Temperature: ["Cold", "Cool", "Moderate", "Warm", "Hot"],
  //     "Planetary Age": [
  //       "Young",
  //       "Early Geological Activity",
  //       "Mature Geological Activity",
  //       "Old Geological Activity",
  //       "Ancient",
  //     ],
  //     "Day-Night Cycle": [
  //       "Short Day-Long Night",
  //       "Balanced Day-Night Cycle",
  //       "Long Day-Short Night",
  //       "Irregular or No Cycle",
  //     ],
  //   },
  //   Magnetosphere: {
  //     Strength: ["Weak", "Low", "Moderate", "Strong", "Very Strong"],
  //   },
  //   "Surface Features": {
  //     Topography: [
  //       "Flat",
  //       "Gentle Slopes",
  //       "Varied Terrain",
  //       "Rugged",
  //       "Extreme Peaks and Valleys",
  //     ],
  //     "Ocean Depth": [
  //       "Shallow",
  //       "Moderate Depths",
  //       "Deep",
  //       "Abyssal",
  //       "Ocean Trenches",
  //     ],
  //     "Soil Fertility": [
  //       "Poor",
  //       "Below Average",
  //       "Moderate",
  //       "Fertile",
  //       "Rich",
  //     ],
  //     "Water Bodies": ["Arid", "Lakes and Rivers", "Seas", "Oceans"],
  //     "Land Mass": [
  //       "Islands",
  //       "Small Continents",
  //       "Large Continents",
  //       "Archipelagos",
  //       "Supercontinent",
  //     ],
  //   },
  //   "External Factors": {
  //     "Asteroid and Comet Impact": [
  //       "Frequent Impacts",
  //       "Occasional Impacts",
  //       "Rare Impacts",
  //       "Infrequent Impacts",
  //       "Negligible Impacts",
  //     ],
  //   },
  //   Atmosphere: {
  //     Composition: [
  //       "Low Oxygen",
  //       "Balanced Mix",
  //       "Oxygen-Rich",
  //       "Gas-Rich",
  //       "Unique Mix",
  //     ],
  //     Pressure: ["Low", "Below Average", "Average", "Above Average", "High"],
  //     Stability: ["Stable", "Unstable"],
  //   },
  //   Climate: {
  //     Temperature: ["Cold", "Cool", "Moderate", "Warm", "Hot"],
  //     Precipitation: ["Arid", "Dry", "Moderate", "Wet", "Rainforest"],
  //   },
  // }

  const prompt: string = `
    Stellar Characteristics:
    `;

  let response = await fetch(
    "https://api.openai.com/v1/engines/davinci/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: "This is a test",
        max_tokens: 5,
        temperature: 0.5,
        top_p: 1,
        n: 1,
        stream: false,
        logprobs: null,
        stop: ["\n"],
      }),
    },
  );
  let chatgpt_data = await response.json();

  return "data from fetch call";
}

export const load: PageServerLoad = async () => {
  // const id = cookies.get("userid");
  //
  // if (!id) {
  //   cookies.set("userid", crypto.randomUUID(), { path: "/" });
  // }

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
