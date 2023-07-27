<script lang="ts">
	import Marker from './Marker.svelte';
	import type { Marker as MarkerType } from '../types/marker.type';
	export let marker: MarkerType;
	const { coordinates, route, title } = marker;
</script>

<Marker lat={coordinates.lat} lng={coordinates.lng}>
	<img width="30px" height="30px" src={route.icon_url} alt="{title} marker icon" />
	<slot slot="popup" />
</Marker>
