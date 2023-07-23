<script lang="ts">
	import mapboxgl from 'mapbox-gl';
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { selectedRoutes } from '$lib/stores';
	import type { Marker } from '../types/marker.type';
	import { derived, readable } from 'svelte/store';

	export let markers: Marker[];

	let map;
	onMount(() => {
		mapboxgl.accessToken = env.PUBLIC_MAPBOX_ACCESS_TOKEN;
		map = new mapboxgl.Map({
			container: 'map',
			style: env.PUBLIC_MAP_STYLE,
			center: [-78.5790110564719, -9.061119497310544],
			zoom: 13
		});
	});

	const data = readable(markers);

	const filtered = derived([selectedRoutes, data], ([$selectedRoutes, $data]) => {
		return $data.filter((marker) => $selectedRoutes.has(marker.route._id));
	});

	$: {
		console.log($filtered); // filter to console for now
	}
</script>

<div id="map" />

<style>
	#map {
		width: 100vw;
		height: 100vh;
	}
</style>
