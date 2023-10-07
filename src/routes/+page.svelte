<script>
const habitable_planet_parameters = {
  "Physical Characteristics": {
    "Size": ["Small", "Compact", "Earth-sized", "Large", "Massive"],
    "Density": ["Low", "Below Average", "Average", "Above Average", "High"]
  },
  "Atmosphere": {
    "Composition": ["Low Oxygen", "Balanced Mix", "Oxygen-Rich", "Gas-Rich", "Unique Mix"],
    "Pressure": ["Low", "Below Average", "Average", "Above Average", "High"],
    "Stability": ["Stable", "Unstable"]
  },
  "Climate": {
    "Temperature": ["Cold", "Cool", "Moderate", "Warm", "Hot"],
    "Precipitation": ["Arid", "Dry", "Moderate", "Wet", "Rainforest"]
  },
  "Geological Factors": {
    "Plate Tectonics": ["Dormant", "Low", "Moderate", "Active", "Violent"],
    "Volcanic Activity": ["Dormant", "Low", "Moderate", "Active", "Violent"]
  },
  "Star and Stellar Environment": {
    "Star Type": ["Red Dwarf", "K-type Main Sequence", "G-type Main Sequence", "F-type Main Sequence", "Massive Star"],
    "Orbit Position": ["Inner Habitable Zone", "Closer to Star", "Mid-Habitable Zone", "Farther from Star", "Outer Habitable Zone"],
    "Stellar Age": ["Young", "Early Main Sequence", "Middle-Aged", "Mature", "Old"],
    "Planetary Age": ["Young", "Early Geological Activity", "Mature Geological Activity", "Old Geological Activity", "Ancient"],
    "Stellar Radiation": ["Low Radiation", "Mild Radiation", "Moderate Radiation", "High Radiation", "Intense Radiation"]
  },
  "Magnetosphere": {
    "Strength": ["Weak", "Low", "Moderate", "Strong", "Very Strong"]
  },
  "Surface Features": {
    "Topography": ["Flat", "Gentle Slopes", "Varied Terrain", "Rugged", "Extreme Peaks and Valleys"],
    "Ocean Depth": ["Shallow", "Moderate Depths", "Deep", "Abyssal", "Ocean Trenches"],
    "Soil Fertility": ["Poor", "Below Average", "Moderate", "Fertile", "Rich"],
    "Water Bodies": ["Arid", "Lakes and Rivers", "Seas", "Oceans"],
    "Land Mass": ["Islands", "Small Continents", "Large Continents", "Archipelagos", "Supercontinent"]
  },
  "External Factors": {
    "Asteroid and Comet Impact": ["Frequent Impacts", "Occasional Impacts", "Rare Impacts", "Infrequent Impacts", "Negligible Impacts"],
    "Radiation": ["Low", "Moderate", "High"],
    "Day-Night Cycle": ["Short Day-Long Night", "Balanced Day-Night Cycle", "Long Day-Short Night", "Irregular or No Cycle"],
    "Wind Patterns": ["Calm", "Light Breezes", "Moderate Winds", "Strong Winds", "Violent Storms"]
  },
  "Climate Stability and Ecosystem": {
    "Climate Stability": ["Unpredictable", "Variable", "Stable", "Extremely Stable", "Perfectly Stable"],
    "Ecosystem Balance": ["Unbalanced", "Tenuous Balance", "Balanced", "Robust Balance", "Perfect Balance"]
  }
}
</script>


<div class="container h-full mx-auto flex-col justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center m-4">
		<h2 class="h2 mt-4 pt-4">Habitable Exoplanet</h2>
		<figure>
			<section class="img-bg" />
            <img
                id="planet-image"
                class="rounded-xl opacity-100 hover:mix-blend-plus-color-dodge"
                width="1024"
                alt="An exoplanet seen from its moon (artist&#039;s impression)"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg/512px-An_exoplanet_seen_from_its_moon_%28artist%27s_impression%29.jpg"
            >
            <div class="mt-2 text-sm text-gray-300">
                <a href="https://commons.wikimedia.org/wiki/File:An_exoplanet_seen_from_its_moon_(artist%27s_impression).jpg">IAU/L. Calçada</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons
            </div>
		</figure>
	</div>

    <hr class="my-5">

    <div class="flex-col justify-center space-y-2 mx-5">
            <form
                method="POST"
            >
            <div class="text-xl font-medium mb-3 mt-8">Physical Characteristics</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-size">Planet Size</label>
                    <select
                        id="planet-size"
                        name="planet-size"
                        class="select"
                        >
                        <option value="small">Small</option>
                        <option value="compact">Compact</option>
                        <option value="earth-sized">Earth-sized</option>
                        <option value="large">Large</option>
                        <option value="massive">Massive</option>
                    </select>
                </div>
                <div>
                    <label for="planet-density">Planet Density</label>
                    <select
                        id="planet-density"
                        name="planet-density"
                        class="select"
                        >
                        <option value="low">Low</option>
                        <option value="below-average">Below Average</option>
                        <option value="average">Average</option>
                        <option value="above-average">Above Average</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Atmosphere</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-composition">Planet Composition</label>
                    <select
                        id="planet-composition"
                        name="planet-composition"
                        class="select"
                        >
                        <option value="low-oxygen">Low Oxygen</option>
                        <option value="balanced-mix">Balanced Mix</option>
                        <option value="oxygen-rich">Oxygen-Rich</option>
                        <option value="gas-rich">Gas-Rich</option>
                        <option value="unique-mix">Unique Mix</option>
                    </select>
                </div>
                <div>
                    <label for="planet-pressure">Planet Pressure</label>
                    <select
                        id="planet-pressure"
                        name="planet-pressure"
                        class="select"
                        >
                        <option value="low">Low</option>
                        <option value="below-average">Below Average</option>
                        <option value="average">Average</option>
                        <option value="above-average">Above Average</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <label for="planet-stability">Planet Stability</label>
                    <select
                        id="planet-stability"
                        name="planet-stability"
                        class="select"
                        >
                        <option value="stable">Stable</option>
                        <option value="unstable">Unstable</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Climate</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-temperature">Planet Temperature</label>
                    <select
                        id="planet-temperature"
                        name="planet-temperature"
                        class="select"
                        >
                        <option value="cold">Cold</option>
                        <option value="cool">Cool</option>
                        <option value="moderate">Moderate</option>
                        <option value="warm">Warm</option>
                        <option value="hot">Hot</option>
                    </select>
                </div>
                <div>
                    <label for="planet-precipitation">Planet Precipitation</label>
                    <select
                        id="planet-precipitation"
                        name="planet-precipitation"
                        class="select"
                        >
                        <option value="arid">Arid</option>
                        <option value="dry">Dry</option>
                        <option value="moderate">Moderate</option>
                        <option value="wet">Wet</option>
                        <option value="rainforest">Rainforest</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Geological Factors</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-plate-tectonics">Planet Plate Tectonics</label>
                    <select
                        id="planet-plate-tectonics"
                        name="planet-plate-tectonics"
                        class="select"
                        >
                        <option value="dormant">Dormant</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="active">Active</option>
                        <option value="violent">Violent</option>
                    </select>
                </div>
                <div>
                    <label for="planet-volcanic-activity">Planet Volcanic Activity</label>
                    <select
                        id="planet-volcanic-activity"
                        name="planet-volcanic-activity"
                        class="select"
                        >
                        <option value="dormant">Dormant</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="active">Active</option>
                        <option value="violent">Violent</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Star and Stellar Environment</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="star-type">Star Type</label>
                    <select
                        id="star-type"
                        name="star-type"
                        class="select"
                        >
                        <option value="red-dwarf">Red Dwarf</option>
                        <option value="k-type-main-sequence">K-type Main Sequence</option>
                        <option value="g-type-main-sequence">G-type Main Sequence</option>
                        <option value="f-type-main-sequence">F-type Main Sequence</option>
                        <option value="massive-star">Massive Star</option>
                    </select>
                </div>
                <div>
                    <label for="orbit-position">Orbit Position</label>
                    <select
                        id="orbit-position"
                        name="orbit-position"
                        class="select"
                        >
                        <option value="inner-habitable-zone">Inner Habitable Zone</option>
                        <option value="closer-to-star">Closer to Star</option>
                        <option value="mid-habitable-zone">Mid-Habitable Zone</option>
                        <option value="farther-from-star">Farther from Star</option>
                        <option value="outer-habitable-zone">Outer Habitable Zone</option>
                    </select>
                </div>
                <div>
                    <label for="stellar-age">Stellar Age</label>
                    <select
                        id="stellar-age"
                        name="stellar-age"
                        class="select"
                        >
                        <option value="young">Young</option>
                        <option value="early-main-sequence">Early Main Sequence</option>
                        <option value="middle-aged">Middle-Aged</option>
                        <option value="mature">Mature</option>
                        <option value="old">Old</option>
                    </select>
                </div>
                <div>
                    <label for="planetary-age">Planetary Age</label>
                    <select
                        id="planetary-age"
                        name="planetary-age"
                        class="select"
                        >
                        <option value="young">Young</option>
                        <option value="early-geological-activity">Early Geological Activity</option>
                        <option value="mature-geological-activity">Mature Geological Activity</option>
                        <option value="old-geological-activity">Old Geological Activity</option>
                        <option value="ancient">Ancient</option>
                    </select>
                </div>
                <div>
                    <label for="stellar-radiation">Stellar Radiation</label>
                    <select
                        id="stellar-radiation"
                        name="stellar-radiation"
                        class="select"
                        >
                        <option value="low-radiation">Low Radiation</option>
                        <option value="mild-radiation">Mild Radiation</option>
                        <option value="moderate-radiation">Moderate Radiation</option>
                        <option value="high-radiation">High Radiation</option>
                        <option value="intense-radiation">Intense Radiation</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Magnetosphere</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="magnetosphere-strength">Magnetosphere Strength</label>
                    <select
                        id="magnetosphere-strength"
                        name="magnetosphere-strength"
                        class="select"
                        >
                        <option value="weak">Weak</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="strong">Strong</option>
                        <option value="very-strong">Very Strong</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">Surface Features</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-topography">Planet Topography</label>
                    <select
                        id="planet-topography"
                        name="planet-topography"
                        class="select"
                        >
                        <option value="flat">Flat</option>
                        <option value="gentle-slopes">Gentle Slopes</option>
                        <option value="varied-terrain">Varied Terrain</option>
                        <option value="rugged">Rugged</option>
                        <option value="extreme-peaks-and-valleys">Extreme Peaks and Valleys</option>
                    </select>
                </div>
                <div>
                    <label for="planet-ocean-depth">Planet Ocean Depth</label>
                    <select
                        id="planet-ocean-depth"
                        name="planet-ocean-depth"
                        class="select"
                        >
                        <option value="shallow">Shallow</option>
                        <option value="moderate-depths">Moderate Depths</option>
                        <option value="deep">Deep</option>
                        <option value="abyssal">Abyssal</option>
                        <option value="ocean-trenches">Ocean Trenches</option>
                    </select>
                </div>
                <div>
                    <label for="planet-soil-fertility">Planet Soil Fertility</label>
                    <select
                        id="planet-soil-fertility"
                        name="planet-soil-fertility"
                        class="select"
                        >
                        <option value="poor">Poor</option>
                        <option value="below-average">Below Average</option>
                        <option value="moderate">Moderate</option>
                        <option value="fertile">Fertile</option>
                        <option value="rich">Rich</option>
                    </select>
                </div>
                <div>
                    <label for="planet-water-bodies">Planet Water Bodies</label>
                    <select
                        id="planet-water-bodies"
                        name="planet-water-bodies"
                        class="select"
                        >
                        <option value="arid">Arid</option>
                        <option value="lakes-and-rivers">Lakes and Rivers</option>
                        <option value="seas">Seas</option>
                        <option value="oceans">Oceans</option>
                    </select>
                </div>
                <div>
                    <label for="planet-land-mass">Planet Land Mass</label>
                    <select
                        id="planet-land-mass"
                        name="planet-land-mass"
                        class="select"
                        >
                        <option value="islands">Islands</option>
                        <option value="small-continents">Small Continents</option>
                        <option value="large-continents">Large Continents</option>
                        <option value="archipelagos">Archipelagos</option>
                        <option value="supercontinent">Supercontinent</option>
                    </select>
                </div>
            </div>
            <div class="text-xl font-medium mb-3 mt-8">External Factors</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                <div>
                    <label for="planet-asteroid-and-comet-impact">Planet Asteroid and Comet Impact</label>
                    <select
                        id="planet-asteroid-and-comet-impact"
                        name="planet-asteroid-and-comet-impact"
                        class="select"
                        >
                        <option value="frequent-impacts">Frequent Impacts</option>
                        <option value="occasional-impacts">Occasional Impacts</option>
                        <option value="rare-impacts">Rare Impacts</option>
                        <option value="infrequent-impacts">Infrequent Impacts</option>
                        <option value="negligible-impacts">Negligible Impacts</option>
                    </select>
                </div>
                <div>
                    <label for="planet-radiation">Planet Radiation</label>
                    <select
                        id="planet-radiation"
                        name="planet-radiation"
                        class="select"
                        >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div>
                    <label for="planet-day-night-cycle">Planet Day-Night Cycle</label>
                    <select
                        id="planet-day-night-cycle"
                        name="planet-day-night-cycle"
                        class="select"
                        >
                        <option value="short-day-long-night">Short Day-Long Night</option>
                        <option value="balanced-day-night-cycle">Balanced Day-Night Cycle</option>
                        <option value="long-day-short-night">Long Day-Short Night</option>
                        <option value="irregular-or-no-cycle">Irregular or No Cycle</option>
                    </select>
                </div>
                <div>
                    <label for="planet-wind-patterns">Planet Wind Patterns</label>
                    <select
                        id="planet-wind-patterns"
                        name="planet-wind-patterns"
                        class="select"
                        >
                        <option value="calm">Calm</option>
                        <option value="light-breezes">Light Breezes</option>
                        <option value="moderate-winds">Moderate Winds</option>
                        <option value="strong-winds">Strong Winds</option>
                        <option value="violent-storms">Violent Storms</option>
                    </select>
                </div>
                <div>
                    <label for="planet-climate-stability">Planet Climate Stability</label>
                    <select
                        id="planet-climate-stability"
                        name="planet-climate-stability"
                        class="select"
                        >
                        <option value="unpredictable">Unpredictable</option>
                        <option value="variable">Variable</option>
                        <option value="stable">Stable</option>
                        <option value="extremely-stable">Extremely Stable</option>
                        <option value="perfectly-stable">Perfectly Stable</option>
                    </select>
                </div>
                <div>
                    <label for="planet-ecosystem-balance">Planet Ecosystem Balance</label>
                    <select
                        id="planet-ecosystem-balance"
                        name="planet-ecosystem-balance"
                        class="select"
                        >
                        <option value="unbalanced">Unbalanced</option>
                        <option value="tenuous-balance">Tenuous Balance</option>
                        <option value="balanced">Balanced</option>
                        <option value="robust-balance">Robust Balance</option>
                        <option value="perfect-balance">Perfect Balance</option>
                    </select>
                </div>
            </div>
        <div class="space-y-10 text-center flex flex-col items-center m-4 py-5">
            <input
                type="submit"
                value="Submit"
                class="btn btn-primary bg-gray-700"
            >
        </div>
    </form>
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
		animation: pulse 5s cubic-bezier(1,.47,0,.67) infinite,
			glow 15s cubic-bezier(.36,.82,.84,.42) infinite;
	}
    #planet-image:hover #planet-image:mix-blend-plus-lighter {
        
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
            opacity: .5;
        }
        100% {
            opacity: 1;
    }
}

</style>
