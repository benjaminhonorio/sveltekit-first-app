<script lang="ts">
	import type { PageServerData } from './$types';
	import { toHTML } from '@portabletext/to-html';
	export let data: PageServerData;
	$: ({ place } = data);
</script>

<h1>{place.title}</h1>
<p>{place.location}</p>
<img src={`${place.images[0]?.url}`} alt={`${place.images[0]?.altText} photo`} />
<div>{@html toHTML(place.description)}</div>

<style>
	img {
		max-width: 100%;
	}
</style>
