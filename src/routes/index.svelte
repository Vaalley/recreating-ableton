<script>
	import Navbar from '../components/Navbar.svelte';
	import Shortcuts from '../components/Shortcuts.svelte';
</script>

<svelte:head>
	<title>Learn more about Ableton - maker of Live and Push | Ableton</title>
</svelte:head>

<template>
	<div class="ableton max-w-[1600px] ml-auto mr-auto">
		<Navbar />
		<Shortcuts />
	</div>
</template>

<style>
	.ableton {
		background-color: white;
	}
</style>
