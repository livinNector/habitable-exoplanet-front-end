<script lang="ts">
  import Slider from "$lib/components/Slider.svelte";
  import { surafaceGravity } from "$lib/ts/computations";

  export let data: PageServerLoad;
  let description: string = "description";

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
    </figure>
    <p class="text-dark mt-4">{description}</p>
    <figure>
      <section class="img-bg" />
      <img
        id="planet-image"
        class="rounded-xl opacity-100 mix-blend-hard-light"
        width="1024"
        alt="An exoplanet seen from its moon (artist&#039;s impression)"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg/512px-An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg"
      />
    </figure>
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
