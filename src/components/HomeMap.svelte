<script lang="ts">
	import { env } from '$env/dynamic/public';
	import Map from './Map.svelte';
	import { selectedRoutes } from '../stores';
	import { page } from '$app/stores';
	import PlaceMarker from './PlaceMarker.svelte';
	import PopUp from './PopUp.svelte';
	import type mapboxgl from 'mapbox-gl';
	import * as turf from '@turf/turf';

	const markers = $page.data.markers;
	const center: [number, number] = [-78.5790110564719, -9.061119497310544];
	const zoom = 11;
	let mapComponent: Map;
	const style = env.PUBLIC_MAP_STYLE;
	$: selectedMarkers = markers.filter((marker) => $selectedRoutes.has(marker.route._id));
	$: {
		const activeMarkersCoords = selectedMarkers.map(({ coordinates: { lng, lat } }) => [lng, lat]);
		if (activeMarkersCoords.length) {
			console.log(activeMarkersCoords);
			const points = turf.points(activeMarkersCoords);
			const bbox = turf.bbox(points);
			mapComponent.fitBounds(bbox as mapboxgl.LngLatBoundsLike);
		}
	}
</script>

<div>
	<Map bind:this={mapComponent} {center} {style} {zoom}>
		{#each selectedMarkers as marker (marker._id)}
			<PlaceMarker {marker}>
				<PopUp {marker} />
			</PlaceMarker>
		{/each}
	</Map>
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
