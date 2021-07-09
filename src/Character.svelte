<script>
	import Manager from './Manager.svelte'
	export let name, data
	let selected
	function toggle() {selected = selected ? false : true}
</script>

<style>
	.flex { display: flex; padding: 0 .5em }
	.flex > div { margin: 0 .5em }
	.toggle { display: none }
</style>

<p class="clickable" on:click={toggle}>
	¤ {name} <i>- {data.info.custodian}</i>
</p>

<div class="flex" class:toggle={!selected}>
	<div>
		{#each Object.entries(data.stats) as [item, value]}
			<Manager character={name} item={item} value={value}/>
		{/each}
	</div>
	<div>
		{#each Object.entries(data.spe) as [item, value]}
			<Manager character={name} item={item} value={value}/>
		{/each}
	</div>
</div>