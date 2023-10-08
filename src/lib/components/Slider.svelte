<script lang="ts">
    export let value: number;
    export let min: number;
    export let max: number;
    export let category: Record<string, string>;
</script>

<input type="range" bind:value={value} min={min} max={max} />
