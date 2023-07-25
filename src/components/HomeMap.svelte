<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Map from './Map.svelte';
	import MapMarker from './Marker.svelte';
	import type { Marker } from '../types/marker.type';
	import { selectedRoutes } from '../stores';

	export let markers: Marker[];

	const center: [number, number] = [-78.5790110564719, -9.061119497310544];
	const zoom = 11;
	const style = env.PUBLIC_MAP_STYLE;
	$: selectedMarkers = markers.filter((marker) => $selectedRoutes.has(marker.route._id));
</script>

<div>
	<Map {center} {style} {zoom}>
		{#each selectedMarkers as { coordinates, title, _id } (_id)}
			<MapMarker lat={coordinates.lat} lng={coordinates.lng} label={title} />
		{/each}
	</Map>
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
