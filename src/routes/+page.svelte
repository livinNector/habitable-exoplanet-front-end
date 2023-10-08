<script lang="ts">
  import Slider from "$lib/components/Slider.svelte";
  import {
    classifyStarType,
    equilibriumTemperature,
    esi,
    fromAU,
    fromJupiterRadius,
    fromSolarRadius,
    surafaceGravity,
  } from "$lib/ts/computations";
  //   import type { PageServerLoad } from "./$types";

  // export let data: PageServerLoad;

  const habitable_planet_parameters: {
    [index: string]: { [index: string]: any[] | string | number };
  } = {
    "Stellar Characteristics": {
      "Radius (Solar Radii)": [0.1, 20, "R☉"],
      "Temperature (Kelvin)": [600.0, 40000.0, "K"],
      "Star Type": "",
    },
    "Planetary Characteristics": {
      "Radius (Jupiter Radii)": [0.01, 3.0, "Rj"],
      "Mass (Jupiter Mass)": [1e-5, 15, "Mj"],
      "Orbital Radius": [0.1, 10, "AU"],
      "Albedo (Fraction of light reflected)": [0, 0.999],
      "Equilibrium Temperature (Kelvin)": 0,
      "Surface Gravity": 0,
      "Earth Similarity Index (ESI)": 0,
      "Planetary Age": [
        "Young",
        "Early Geological Activity",
        "Mature Geological Activity",
        "Old Geological Activity",
        "Ancient",
      ],
      "Day-Night Cycle": [
        "Short Day-Long Night",
        "Balanced Day-Night Cycle",
        "Long Day-Short Night",
        "Irregular or No Cycle",
      ],
    },
    Magnetosphere: {
      Strength: ["Weak", "Low", "Moderate", "Strong", "Very Strong"],
    },
    "Surface Features": {
      Topography: [
        "Flat",
        "Gentle Slopes",
        "Varied Terrain",
        "Rugged",
        "Extreme Peaks and Valleys",
      ],
      "Ocean Depth": [
        "Shallow",
        "Moderate Depths",
        "Deep",
        "Abyssal",
        "Ocean Trenches",
      ],
      "Soil Fertility": [
        "Poor",
        "Below Average",
        "Moderate",
        "Fertile",
        "Rich",
      ],
      "Water Bodies": ["Arid", "Lakes and Rivers", "Seas", "Oceans"],
      "Land Mass": [
        "Islands",
        "Small Continents",
        "Large Continents",
        "Archipelagos",
        "Supercontinent",
      ],
    },
    "External Factors": {
      "Asteroid and Comet Impact": [
        "Frequent Impacts",
        "Occasional Impacts",
        "Rare Impacts",
        "Infrequent Impacts",
        "Negligible Impacts",
      ],
    },
    Atmosphere: {
      Composition: [
        "Low Oxygen",
        "Balanced Mix",
        "Oxygen-Rich",
        "Gas-Rich",
        "Unique Mix",
      ],
      Pressure: ["Low", "Below Average", "Average", "Above Average", "High"],
      Stability: ["Stable", "Unstable"],
    },
    Climate: {
      Temperature: ["Cold", "Cool", "Moderate", "Warm", "Hot"],
      Precipitation: ["Arid", "Dry", "Moderate", "Wet", "Rainforest"],
    },
  };

  let selectedParameters: { [index: string]: { [index: string]: any } } = {};

  // Initialize the selectedParameters object with default values
  Object.keys(habitable_planet_parameters).forEach((category) => {
    selectedParameters[category] = {};
    Object.keys(habitable_planet_parameters[category]).forEach(
      (parameter: string) => {
        let param = habitable_planet_parameters[category][parameter];
        if (typeof param !== "number" && typeof param !== "string") {
          selectedParameters[category][parameter] = param[0];
        }
      }
    );
  });
  $: {
    let slChar = selectedParameters["Stellar Characteristics"];
    slChar["Star Type"] = classifyStarType(
      slChar["Temperature (Kelvin)"],
      slChar["Radius (Solar Radii)"]
    );
    let plChar = selectedParameters["Planetary Characteristics"];
    plChar["Surface Gravity"] = surafaceGravity(
      plChar["Mass (Jupiter Mass)"],
      plChar["Radius (Jupiter Radii)"]
    );
    plChar["Equilibrium Temperature (Kelvin)"] = equilibriumTemperature(
      slChar["Temperature (Kelvin)"],
      fromSolarRadius(slChar["Radius (Solar Radii)"]),
      fromAU(plChar["Orbital Radius"]),
      plChar["Albedo (Fraction of light reflected)"]
    );
    plChar["Earth Similarity Index (ESI)"] = esi(
      fromSolarRadius(slChar["Radius (Solar Radii)"]),
      slChar["Temperature (Kelvin)"],
      fromAU(plChar["Orbital Radius"]),
      fromJupiterRadius(plChar["Radius (Jupiter Radii)"])
    );
    selectedParameters = selectedParameters;
  }
  // $ :surGrav = selectedParameters["Planetary Characteristics"]["Mass"]
  function randomize() {
    Object.keys(habitable_planet_parameters).forEach((category) => {
      Object.keys(habitable_planet_parameters[category]).forEach(
        (parameter) => {
          let param = habitable_planet_parameters[category][parameter];
          if (typeof param !== "number" && typeof param !== "string") {
            if (typeof param[0] === "number") {
              let random =
                param[0] + Math.floor(Math.random() * (param[1] - param[0]));
              selectedParameters[category][parameter] = random;
            } else {
              let random = Math.floor(Math.random() * param.length);
              selectedParameters[category][parameter] = param[random];
            }
          }
        }
      );
    });
  }

</script>

<div class="container h-full mx-auto flex-col justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center m-4">
    <h2 class="h2 mt-4 pt-4">Habitable Exoplanet</h2>
    <figure>
      <section class="img-bg" />
      <img
        id="planet-image"
        class="rounded-xl opacity-100 mix-blend-hard-light"
        width="1024"
        alt="An exoplanet seen from its moon (artist&#039;s impression)"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg/512px-An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg"
      />
      <div class="mt-2 text-sm text-gray-300">
        <a
          href="https://commons.wikimedia.org/wiki/File:An_exoplanet_seen_from_its_moon_(artist%27s_impression).jpg"
          >IAU/L. Calçada</a
        >, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>,
        via Wikimedia Commons
      </div>
    </figure>
  </div>

  <hr class="my-5" />

  <div class="flex-col justify-center space-y-2 mx-5">
    <!-- <form method="POST" on:submit|preventDefault={sendData}> -->
    <form method="POST" action="/new-planet">
      {#each Object.entries(habitable_planet_parameters) as [category, parameters]}
        <div class="text-xl font-medium mb-3 mt-8">{category}</div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {#each Object.entries(parameters) as [parameter, values]}
            <div>
              <label for={parameter}>{parameter}</label>
              {#if typeof values === "number"}
                <div class="py-3 text-xl font-medium">
                  {selectedParameters[category][parameter] || ""}
                </div>
              {:else if typeof values === "string"}
                <div class="py-3 text-xl font-medium">
                  {selectedParameters[category][parameter] || ""}
                </div>
              {:else if typeof values[0] === "number"}
                <Slider
                  name={parameter.toLowerCase().replaceAll(' ', '-')}
                  bind:value={selectedParameters[category][parameter]}
                  min={values[0]}
                  max={values[1]}
                  unit={values[2]}
                />
              {:else}
                <select
                  bind:value={selectedParameters[category][parameter]}
                  name={parameter.toLowerCase().replaceAll(' ', '-')}
                  class="select"
                >
                  {#each values as value}
                    <option {value}>{value}</option>
                  {/each}
                </select>
              {/if}
            </div>
          {/each}
        </div>
      {/each}

      <div
        class="space-y-10 space-x-10 text-center flex-col items-center m-4 py-5"
      >
        <button
          type="button"
          class="btn btn-primary bg-gray-700"
          on:click={randomize}
        >
          Randomize
        </button>
        <input
          type="submit"
          value="Submit"
          class="btn btn-primary bg-gray-700"
        />
      </div>
    </form>
    <!-- {JSON.stringify(selectedParameters)} -->
    
  </div>
</div>

<style lang="postcss">
  figure {
    @apply flex relative flex-col;
  }

  .img-bg {
    @apply w-full h-full opacity-75;
  }
  .img-bg {
    @apply absolute z-[-1] rounded-full blur-[150px] transition-all;
    animation: pulse 5s cubic-bezier(1, 0.47, 0, 0.67) infinite,
      glow 15s cubic-bezier(0.36, 0.82, 0.84, 0.42) infinite;
  }
  @keyframes glow {
    0% {
      @apply bg-red-400/50;
    }
    33% {
      @apply bg-yellow-500/50;
    }
    66% {
      @apply bg-blue-500/50;
    }
    100% {
      @apply bg-red-400/50;
    }
  }
  @keyframes pulse {
    50% {
      transform: scale(1.5);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
</style>
