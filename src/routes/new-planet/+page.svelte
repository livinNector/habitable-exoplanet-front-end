<script lang="ts">
  import type { PageServerLoad } from "./$types";

  export let data: PageServerLoad;
</script>

<div class="container h-full mx-auto flex-col justify-center items-center">
  <div class="space-y-10 text-center flex flex-col items-center m-4">
    <h2 class="h2 mt-4 pt-4">ExoCreator: Unveiling Worlds Beyond</h2>
    <figure>
      <section class="img-bg mix-blend-hard-light" />
      <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div>
          <img
            id="planet-image"
            class="h-auto max-w-full rounded-lg"
        
            alt="The Exoplanet seen from space"
            src={data.images["spaceViewUrl"]}
          />
        </div>
        <div>
          <img
            id="planet-image"
            class="h-auto max-w-full rounded-lg"
        
            alt="The Exoplanet seen from surface"
            src={data.images["groundViewUrl"]}
          />
        </div>
      </div>
    </figure>
    <!-- <p class="text-dark mt-4">{description}</p> -->
    <h2>About the planet</h2>
    {@html data.essay}
    <h2>Prompts to create space view image and ground view image</h2>
    <h3>Space View Prompt</h3>
    {data.prompts["spaceViewPrompt"]}
    <h3>Ground View Prompt</h3>
    {data.prompts["groundViewPrompt"]}
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
