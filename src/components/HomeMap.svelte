<script lang="ts">
	import { fly } from 'svelte/transition';
	import { env } from '$env/dynamic/public';
	import Map from './Map.svelte';
	import MapMarker from './Marker.svelte';
	import PopUp from './PopUp.svelte';
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
		{#each selectedMarkers as marker (marker._id)}
			<MapMarker lat={marker.coordinates.lat} lng={marker.coordinates.lng}>
				<img
					transition:fly={{ y: -30, duration: 300 }}
					width="30px"
					height="30px"
					src={marker.route.icon_url}
					alt="{marker.title} marker icon"
				/>
				<svelte:fragment slot="popup">
					<PopUp {marker} />
				</svelte:fragment>
			</MapMarker>
		{/each}
	</Map>
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
	}
</style>
