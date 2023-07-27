<script lang="ts">
	import { mapboxgl, key } from '$lib/mapbox/config';
	import { onMount, setContext } from 'svelte';

	export let center: [number, number];
	export let zoom: number;
	export let style: string;
	let map: mapboxgl.Map;

	let container: HTMLDivElement;

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

	export function fitBounds(bbox: mapboxgl.LngLatBoundsLike) {
		map.fitBounds(bbox, {
			padding: 100,
			duration: 1700,
			maxZoom: 13
		});
	}
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
