<script>
	export let actions
	import Action from './Action.svelte';
</script>

{#each Object.entries(actions) as [name, index]}
	<Action action={actions[name]}/>
{/each}