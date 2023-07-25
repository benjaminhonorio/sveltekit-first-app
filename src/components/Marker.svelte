<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import { mapboxgl, key } from '$lib/mapbox/config';

	const { getMap } = getContext<{ getMap: () => mapboxgl.Map }>(key);
	const map = getMap();

	export let lat: number;
	export let lng: number;
	export let label;

	const popup = new mapboxgl.Popup({ offset: 25 }).setText(label);

	let marker: mapboxgl.Marker;

	onMount(() => {
		marker = new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
		return () => marker.remove();
	});
</script>
