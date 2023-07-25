<script lang="ts">
	import RouteFilters from '../components/RouteFilters.svelte';
	import HomeMap from '../components/HomeMap.svelte';
	import { page } from '$app/stores';

	const { routes, markers } = $page.data;
</script>

<h1>Culturalismo</h1>
<RouteFilters {routes} />
<HomeMap {markers} />
