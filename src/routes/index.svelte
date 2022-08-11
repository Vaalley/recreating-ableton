<script>
	import Header from '../components/Header.svelte';
	import HeaderText from '../components/HeaderText.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Shortcuts from '../components/Shortcuts.svelte';
	import HeaderImages from '../components/HeaderImages.svelte';
	import HeaderText2 from '../components/HeaderText2.svelte';
	import HeaderVideo from '../components/HeaderVideo.svelte';
</script>

<svelte:head>
	<title>Learn more about Ableton - maker of Live and Push | Ableton</title>
</svelte:head>

<template>
	<div class="ableton max-w-[1600px] ml-auto mr-auto">
		<Navbar />
		<Shortcuts />
		<Header />
		<HeaderText />
		<HeaderImages />
		<HeaderText2
			header="Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding."
			paragraph="We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for."
		/>
		<HeaderVideo />
		<HeaderText2
			header="We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo."
			paragraph="Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture."
		/>
	</div>
</template>

<style>
	.ableton {
		background-color: white;
	}
</style>
