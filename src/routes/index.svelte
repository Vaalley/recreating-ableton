<script>
	import Header from '../components/Header.svelte';
	import HeaderText from '../components/HeaderText.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Shortcuts from '../components/Shortcuts.svelte';
	import HeaderImages from '../components/HeaderImages.svelte';
	import HeaderText2 from '../components/HeaderText2.svelte';
	import HeaderVideo from '../components/HeaderVideo.svelte';
	import HeaderImages2 from '../components/HeaderImages2.svelte';
	import HeaderImages3 from '../components/HeaderImages3.svelte';
	import HeaderLastComponent from '../components/HeaderLastComponent.svelte';
	import Footer from '../components/Footer.svelte';
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
		<HeaderImages2 />
		<HeaderText2
			header="We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great."
			paragraph="Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged."
		/>
		<img
			class="pl-24 pr-24 ml-auto mr-auto"
			src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?fit=crop&auto=format&fm=jpg"
			alt="Ableton software"
		/>
		<HeaderText2
			header="We’re passionate about what we do, but we’re equally passionate about improving who we are."
			paragraph="We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.

			Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices."
		/>
		<HeaderImages3 />
		<HeaderText2
			header="We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible."
			paragraph="If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities."
		/>
		<HeaderLastComponent />
		<Footer />
	</div>
</template>

<style>
	.ableton {
		background-color: white;
	}
</style>
