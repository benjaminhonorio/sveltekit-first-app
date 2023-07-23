<script lang="ts">
	import type { PageData } from './$types';
	import Routes from '../components/Routes.svelte';
	import Map from '../components/Map.svelte';
	export let data: PageData;
	const { markers, routes } = data;
</script>

<svelte:head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />
</svelte:head>

<h1>Culturalismo</h1>
<Routes {routes} />
<Map {markers} />
