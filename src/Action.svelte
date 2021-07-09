<script>
	export let action
	function toggle() {action.visible = action.visible ? false : true}
</script>

<style>
	.grey { color: #AAA }
</style>

<p class:grey={!action.visible}>
	<span class="clickable" on:click={toggle}>{#if action.visible}+{:else}-{/if}</span>
	{action.name} : <i>{action.desc}</i>
</p>