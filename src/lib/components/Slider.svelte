<script lang="ts">
    export let value: any;
    export let min: any;
    export let max: any;
    // export let category: Record<string, string>;
    export let name: string;
    export let unit: any = "";
</script>


<div>
    <div class="flex justify-start">
        <input class="input variant-form-material" type="text" name={name} bind:value={value} id="">
        {unit}</div>
    <input type="range" name={name} bind:value={value} min={min} max={max} step={(max-min)/100}/>
</div>
