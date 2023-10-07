<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Habitable Exoplanet</h2>
		<!-- Animated Logo -->
		<figure>
			<section class="img-bg" />
            <a
                title="IAU/L. Calçada, CC BY 4.0 &lt;https://creativecommons.org/licenses/by/4.0&gt;, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:An_exoplanet_seen_from_its_moon_(artist%27s_impression).jpg"
            >
                <img
                    class="rounded-2xl"
                    width="512"
                    alt="An exoplanet seen from its moon (artist&#039;s impression)"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg/512px-An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg"
                >
            </a>
		</figure>
		<!-- / -->
		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="https://skeleton.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Launch Documentation
			</a>
		</div>
		<div class="space-y-2">
			<p>Try editing the following:</p>
		</div>
	</div>
</div>

<style lang="postcss">
	figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
