<script>
	import './styles.css';
</script>

<div class="app">
	<header>
		<nav>
			<a href="/"><h1>Culturalismo</h1></a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		width: 100%;
		height: 100%;
	}
	a {
		text-decoration: none;
	}
</style>
