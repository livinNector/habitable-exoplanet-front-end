<script lang="ts">
    export let value: any;
    export let min: any;
    export let max: any;
    // export let category: Record<string, string>;
    export let unit: any = "";
</script>


<div>
    <div class="flex justify-end">{value} {unit}</div>
    <input type="range" bind:value={value} min={min} max={max} />
</div>
