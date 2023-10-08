<script lang="ts">
    export let value: number;
    export let min: number;
    export let max: number;
    export let unit: string = "";
</script>


<div>
    <div class="flex justify-end">{value} {unit}</div>
    <input type="range" bind:value={value} min={min} max={max} />
</div>
