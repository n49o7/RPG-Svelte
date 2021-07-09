<script>
	import { data } from './data.js'
	export let character, item, value
	function minus() {
		value -= 1
		passToStore()
	}
	function plus() {
		value += 1
		passToStore()
	}
	function passToStore() {
		data.update(obj => {
			if (obj.characters[character].stats[item]) {
				obj.characters[character].stats[item] = value
			} else if (obj.characters[character].spe[item]) {
				obj.characters[character].spe[item] = value
			} else {
				console.log('Path to ${character} ${item} not found.')
			}
			return obj
		})
	}
</script>

<style>
	.hidden:not(:hover) { opacity: 0 }
</style>

<div>
	{item}: {value}
	<span class="hidden">
		<span class="clickable" on:click={minus}>-</span>
		<span class="clickable" on:click={plus}>+</span>
	</span>
</div>