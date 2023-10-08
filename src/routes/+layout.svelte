<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
                <a href="/">
                    <strong class="text-xl uppercase">Siriusly Lost in Space</strong>
                </a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a -->
				<!-- 	class="btn btn-sm variant-ghost-surface" -->
				<!-- 	href="https://discord.gg/EXqV7W8MtY" -->
				<!-- 	target="_blank" -->
				<!-- 	rel="noreferrer" -->
				<!-- > -->
				<!-- 	Discord -->
				<!-- </a> -->
				<!-- <a -->
				<!-- 	class="btn btn-sm variant-ghost-surface" -->
				<!-- 	href="https://twitter.com/SkeletonUI" -->
				<!-- 	target="_blank" -->
				<!-- 	rel="noreferrer" -->
				<!-- > -->
				<!-- 	Twitter -->
				<!-- </a> -->
				<button
					class="btn btn-sm variant-ghost-surface"
				>
					About
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
