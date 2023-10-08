<script>
    import Slider from "$lib/components/Slider.svelte";

  const habitable_planet_parameters = {
    "Stellar Characteristics": {
      "Radius": [0,10],
      "Temperature": [0,10],
      "Stellar Age": ["Young", "Early Main Sequence", "Middle-Aged", "Mature"],
    },
    "Planetary Characteristics": {
      "Radius": [0,10],
      "Mass": [0,10],
      "Orbital Radius": [0,10],
      "Temperature": ["Cold", "Cool", "Moderate", "Warm", "Hot"],
      "Planetary Age": [
        "Young",
        "Early Geological Activity",
        "Mature Geological Activity",
        "Old Geological Activity",
        "Ancient",
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
    "Geological Factors": {
      "Plate Tectonics": ["Dormant", "Low", "Moderate", "Active", "Violent"],
      "Volcanic Activity": ["Dormant", "Low", "Moderate", "Active", "Violent"],
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
      Radiation: ["Low", "Moderate", "High"],
      "Day-Night Cycle": [
        "Short Day-Long Night",
        "Balanced Day-Night Cycle",
        "Long Day-Short Night",
        "Irregular or No Cycle",
      ],
      "Wind Patterns": [
        "Calm",
        "Light Breezes",
        "Moderate Winds",
        "Strong Winds",
        "Violent Storms",
      ],
    },
    "Climate Stability and Ecosystem": {
      "Climate Stability": [
        "Unpredictable",
        "Variable",
        "Stable",
        "Extremely Stable",
        "Perfectly Stable",
      ],
      "Ecosystem Balance": [
        "Unbalanced",
        "Tenuous Balance",
        "Balanced",
        "Robust Balance",
        "Perfect Balance",
      ],
    },
  };

  let selectedParameters = {};

  // Initialize the selectedParameters object with default values
  Object.keys(habitable_planet_parameters).forEach((category) => {
    selectedParameters[category] = {};
    Object.keys(habitable_planet_parameters[category]).forEach((parameter) => {
      selectedParameters[category][parameter] =
        habitable_planet_parameters[category][parameter][0];
    });
  });

  function randomize() {
    Object.keys(habitable_planet_parameters).forEach((category) => {
      Object.keys(habitable_planet_parameters[category]).forEach(
        (parameter) => {
          const random = Math.floor(
            Math.random() *
              habitable_planet_parameters[category][parameter].length
          );
          selectedParameters[category][parameter] =
            habitable_planet_parameters[category][parameter][random];
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
    <form method="POST">
      <input type="range" name="" id="" />
      {#each Object.entries(habitable_planet_parameters) as [category, parameters]}
        <div class="text-xl font-medium mb-3 mt-8">{category}</div>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {#each Object.entries(parameters) as [parameter, values]}
            <div>
              <label for={parameter}>{parameter}</label>
              {#if typeof values[0] === "number"}
                <!-- <input type="range" bind:value={selectedParameters[category][parameter]} min={values[0]} max={values[1]}> -->
                <Slider
                  value={selectedParameters[category][parameter]}
                min={values[0]}
                max={values[1]}
                />
              {:else}
                <select
                  bind:value={selectedParameters[category][parameter]}
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
  figure svg,
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
