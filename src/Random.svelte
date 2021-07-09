<script>
	import { randomFrom } from './utils.js';
	export let wordlists
	let out = "&nbsp;"
	function spitRandom(dict) {
		out = randomFrom(wordlists[dict])
	}
</script>

<div>
	{#each Object.keys(wordlists) as list}
		<button on:click={spitRandom(list)}>{list}</button>
	{/each}
</div>
<div>{@html out}</div>