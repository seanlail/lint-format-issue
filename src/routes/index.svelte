<script lang="ts">
	import { onMount } from 'svelte';

	import RelativeA from './_RelativeA.svelte';
	import RelativeB from './_RelativeB.svelte';

	import ComponentA from '$component/ComponentA.svelte';
	import ComponentB from '$component/ComponentB.svelte';
	import { exampleStore } from '$component/stores';

	onMount(() => {
		// do nothing
	});
</script>

{$exampleStore ? 'test' : 'test'}

<ComponentA />
<ComponentB />
<RelativeA />
<RelativeB />
