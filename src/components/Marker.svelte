<script lang="ts">
	import { getContext } from 'svelte';
	import { mapboxgl, key } from '$lib/mapbox/config';

	const { getMap } = getContext<{ getMap: () => mapboxgl.Map }>(key);
	const map = getMap();

	export let lat;
	export let lng;
	export let label;

	const popup = new mapboxgl.Popup({ offset: 25 }).setText(label);
	new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map);
</script>
