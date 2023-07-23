<script>
	import './styles.css';
</script>

<div class="app">
	<header>
		<nav>
			<a href="/">Culturalismo</a>
			<a href="/places/x">Sitio</a>
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
</style>
