<script lang="ts">
	import type { Marker } from '../types/marker.type';

	export let marker: Marker;

	const { title, featured_image, description, slug } = marker;
</script>

<a href={slug}>
	<figure>
		<img src={featured_image.url} alt={featured_image.altText} />
	</figure>
	<h2>{title}</h2>
	<p>{description}</p>
</a>

<style>
	a {
		display: block;
		color: initial;
		text-decoration: none;
	}
	img {
		width: 100%;
	}

	figure {
		margin: 0;
	}

	p {
		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
