<script lang="ts">
	import { selectedRoutes } from '../stores';
	import { page } from '$app/stores';

	const routes = $page.data.routes;
	let ids: string[] = [];

	$: $selectedRoutes = new Set(ids);
</script>

<div>
	{#each routes as route (route._id)}
		<label>
			<input type="checkbox" value={route._id} bind:group={ids} />
			<img
				class="icon"
				alt={`Icono de la ruta ${route.name?.toLowerCase()}`}
				src={route.icon_url}
			/>
			{route.name}
		</label>
	{/each}
</div>

<style>
	.icon {
		width: 1rem;
	}
</style>
