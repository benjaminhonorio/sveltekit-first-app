<script lang="ts">
	import { mapboxgl, key } from '$lib/mapbox/config';
	import { onMount, setContext } from 'svelte';

	export let center: [number, number];
	export let zoom: number;
	export let style: string;

	let container: HTMLDivElement;
	let map: mapboxgl.Map;

	setContext(key, {
		getMap: () => map
	});

	onMount(() => {
		map = new mapboxgl.Map({
			container,
			style,
			center,
			zoom
		});
		return () => {
			map.remove();
		};
	});
</script>

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<div bind:this={container}>
	{#if map}
		<slot />
	{/if}
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
