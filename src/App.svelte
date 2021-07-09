<script>
	import { data } from './data.js'
	import ActionsList from './ActionsList.svelte'
	import Character from './Character.svelte'
	import Debug from './Debug.svelte'
	import Random from './Random.svelte'
</script>

<style>
	:global(.clickable):hover { cursor: pointer }
	:global(div) { user-select: none }
	:global(p) { user-select: none }
</style>

<Debug/>

<Random wordlists={$data.wordlists}/>

{#each Object.keys($data.characters) as name}
	<Character name={name} data={$data.characters[name]}/>
{/each}

<ActionsList actions={$data.actions}/>