<script context='module'>
	export const prerender = true;
</script>

<script>
	import { fly, fade, scale, blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let windowScrollY, loading, mainContainer, floatingImage;

	let hero1;
	let hero2;
	let hero3;
	let heroText1;
	let heroText2;
	let heroText3;
	let heroText4;
	let isHero1Intersecting;
	let isHero2Intersecting;
	let isHero3Intersecting;
	let windowWidth;
	let windowHeight;
	let rotateImage;

	const checkPosition = (e) => {
		let x1 = -20 + (e.clientX / innerWidth) * 40;
		let x2 = -15 + (e.clientX / innerWidth) * 30;
		let x3 = -10 + (e.clientX / innerWidth) * 20;
		let x4 = -5 + (e.clientX / innerWidth) * 10;

		// heroText1.style.transform = `translateX(${-x1}px) `;
		// heroText2.style.transform = `translateX(${-x2}px) `;
		// heroText3.style.transform = `translateX(${-x3}px) `;
		// heroText4.style.transform = `translateX(${-x4}px)  `;
	};
</script>

<svele:head>
	<title>Abie G</title>
</svele:head>
<svelte:window
	bind:innerWidth={windowWidth}
	bind:innerHeight={windowHeight}
	bind:scrollY={windowScrollY}
	on:mousemove={checkPosition}
/>
<!-- <svelte:body bind:offsetHeight={documentHeight} /> -->

<div class="loading" bind:this={loading}>
	<div class="loadingBar" />
</div>

<!-- <div class="background" /> -->
<main
	bind:this={mainContainer}
	in:fly={{ y: 20, duration: 500 }}
	out:fly={{ y: 20, duration: 500 }}
	class="hero"
>
	<div
		class="floatingImage"
		style="
				clip-path: polygon({(windowScrollY / 100) * 10}% 0, 100% 0, 100% {100 -
			windowScrollY / 10}%, {(windowScrollY / 100) * 10}% {100 - windowScrollY / 10}%);
			"
	>
		<img bind:this={floatingImage} src="./hero.jpg" alt="" />
	</div>

	<div class="brand-container">
		<div class="brand" style="bottom: 60%; opacity: 0.1;">
			<p>ABIEG</p>
		</div>
		<div class="brand" style="bottom: 45%; opacity: 0.1;">
			<p>ABIEG</p>
		</div>
		<div class="brand" style="bottom: 15%; opacity: 0.1;">
			<p>ABIEG</p>
		</div>
		<div class="brand" style="bottom: 0%; opacity: 0.1;">
			<p>ABIEG</p>
		</div>
		<div class="brand" style="bottom: 30%;">
			<p style="color: #F7749C;">ABIEG</p>
		</div>
	</div>

	<div class="content">
		<div class="mouse" style="margin-top: {(windowScrollY / 100) * 15}px;" />
		<!-- <p>{height}</p> -->
		<h3 style="max-width: 450px; width: 100%;" class="display-4">Join us with Abie G to VIRTUALIZE the world</h3>
		<p class="lead">
			Register and get the best out of it
		</p>
		<a href="/account" class="btn btn-lg btn-primary mt-5 joinButton" style="background: #F7749C; border-color:#F7749C; min-width: 200px; width: 30vw;">
			Register Now
		</a>
	</div>
	<!-- <div bind:this={rec1} class="brand__candy_rec1" />
		<div bind:this={rec2} class="brand__candy_rec2" /> -->
</main>

<IntersectionObserver threshold={0.2} element={hero1} bind:intersecting={isHero1Intersecting}>
	<main
		bind:this={hero1}
		style={isHero1Intersecting
			? 'transform: translateX(0); opacity: 1'
			: 'transform: translateX(-10%); opacity: 0;'}
		class="d-flex align-items-center text-white my-5"
	>
		<div class="dot-bg" />
		<div class="container">
			<div class="row row-cols-1 row-cols-lg-2">
				<div class="col justify-content-center mt-5 d-flex d-lg-none">
					<img
						bind:this={rotateImage}
						on:mouseenter={checkPosition}
						class="mb-5 img-fluid"
						style="max-height: 350px;"
						src="./illustrations/undraw_handcrafts_welcome.svg"
						alt=""
					/>
				</div>
				<div class="col d-flex flex-column justify-content-center text-center text-lg-end">
					<h1 class="display-3">ABIE G WEBSITE IS NOW LIVE!!!</h1>
					<p>
						In celebration for hitting the two-million [!!!] follower mark on each of her social
						media accounts, AbieG formally welcomes you (yes, you!) to her namesake website’s
						ribbon-cutting ceremony. Fancy.
					</p>
					<a href="/account" class="mt-5 btn btn-outline-light " style="background: #F7749C; border-color:#F7749C;">Register Now</a>
				</div>
				<div class="col justify-content-center mt-5 d-none d-lg-flex">
					<img
						bind:this={rotateImage}
						on:mousemove={checkPosition}
						on:focus={checkPosition}
						class="mb-5"
						src="./illustrations/undraw_handcrafts_welcome.svg"
						style="max-width: 400px;"
						alt=""
					/>
				</div>
			</div>
		</div>
	</main>
</IntersectionObserver>
<IntersectionObserver threshold={0.2} element={hero2} bind:intersecting={isHero2Intersecting}>
	<main
		bind:this={hero2}
		style={isHero2Intersecting
			? 'transform: translateX(0); opacity: 1'
			: 'transform: translateX(10%); opacity: 0;'}
		class="d-flex align-items-center text-white my-5"
	>
		<div class="container">
			<div class="dot-bg dot-bg1" />
			<div class="row row-cols-1 row-cols-lg-2">
				<div class="col justify-content-center mt-5 d-none d-lg-flex">
					<img
						class="mb-5"
						src="./illustrations/undraw_handcrafts_add_files.svg"
						style="max-height: 350px;"
						alt=""
					/>
				</div>
				<div class="col justify-content-center mt-5 d-flex d-lg-none">
					<img
						class="mb-5"
						src="./illustrations/undraw_handcrafts_add_files.svg"
						style="max-height: 350px;"
						alt=""
					/>
				</div>
				<div class="col d-flex flex-column justify-content-center text-center text-lg-start">
					<h1 class="display-3">Abie G Community Moderators</h1>
					<p>
						To ensure a safe space for the community members, this site is regularly kept in check
						by the moderators. Inappropriate conducts are strictly discouraged and violation to
						community rules may result to account suspension and/or removal.
					</p>
					<p>Just be active and you might be our next moderator</p>
				</div>
			</div>
		</div>
	</main>
</IntersectionObserver>
<IntersectionObserver threshold={0.2} element={hero3} bind:intersecting={isHero3Intersecting}>
	<main
		bind:this={hero3}
		style={isHero3Intersecting
			? 'transform: translateX(0); opacity: 1'
			: 'transform: translateX(-10%); opacity: 0;'}
		class="d-flex align-items-center text-white my-5"
	>
		<div class="container">
			<div class="row row-cols-1 row-cols-lg-2">
				<div class="dot-bg dot-bg2" />
				<div class="col justify-content-center mt-5 d-flex d-lg-none">
					<img
						class="mb-5"
						src="./illustrations/undraw_handcrafts_say_hello.svg"
						style="max-height: 350px;"
						alt=""
					/>
				</div>
				<div class="col d-flex flex-column justify-content-center text-center text-lg-end">
					<h1 class="display-3">Connect with Abie G with exclusive content</h1>
					<p>
						This site takes BabieGs to a much more intimate interaction with AbieG herself as she
						shares with them glimpses of her everyday life, ambitions, and aspirations as well as
						site-exclusive giveaways and surprises.
					</p>
				</div>
				<div class="col justify-content-center mt-5 d-none d-lg-flex">
					<img
						class="mb-5"
						src="./illustrations/undraw_handcrafts_say_hello.svg"
						style="max-height: 350px;"
						alt=""
					/>
				</div>
			</div>
		</div>
	</main>
</IntersectionObserver>

<!-- for maintenance -->

<!-- <main style="display: flex; align-items:center;">
		<div class="container white-text">
			<h1>Sorry, we are fixing or updating something</h1>
			<p>Please come back in some time</p>
		</div>
	</main> -->
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
	.loading {
		position: fixed;
	}
	.floatingImage {
		position: fixed;
		width: 50vw;
		height: 100vh;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 2;
		img {
			width: 100%;
			height: 100%;

			opacity: 0.7;
			object-fit: cover;
		}
	}

	.hero {
		/* margin: 0; */
		position: relative;
		min-height: 100vh;
		z-index: 3;
		&:first-child {
			bottom: 10%;
		}
	}
	.joinButton{
		transition: all 0.2s ease;
	}
	.joinButton:hover{
		transform: scale(1.05);
	}
	.joinButton:active{
		transition: all 0s ease;
		transform: scale(1);
	}
	main {
		transition: 500ms ease all;
		min-height: 70vh;
		perspective: 2000px;
		user-select: none;
		background: transparent;
	}
	.brand-container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.brand {
		position: absolute;
		bottom: 35%;
		left: 25px;
		width: 100%;
		overflow: hidden;
		p {
			color: transparent;
			font-weight: 600;
			font-family: 'Righteous', cursive;
			font-size: 10em;
			-webkit-text-stroke-width: 0.5px;
			-webkit-text-stroke-color: rgba(255, 255, 255, 1);
			transition: opacity 200ms ease;
			letter-spacing: 0.2em;
		}
	}

	.content {
		position: absolute;
		right: 5%;
		bottom: 20%;
		color: white;
		z-index: 2;
		text-align: right;
	}

	.mouse {
		position: fixed;
		left: calc(50% - 20px);
		top: 90vh;
		width: 40px;
		height: 65px;
		border-radius: 100px;
		border: solid white 3px;
		z-index: 9;
		&::before {
			content: '';
			position: absolute;
			width: 5px;
			height: 5px;
			top: 0;
			left: 50%;
			background: white;
			border-radius: 100px;
			transform: translateX(-50%);
			animation: scrolldown 2s infinite;
			@keyframes scrolldown {
				0% {
					transform: translateX(-50%) translateY(10px);
					opacity: 0;
				}
				50% {
					opacity: 1;
				}
				100% {
					transform: translateX(-50%) translateY(30px);
					opacity: 0;
				}
			}
		}
	}
	@media screen and (max-width: 800px) {
		.floatingImage {
			width: 100vw;
		}
		.content {
			right: 5%;
			max-width: 75%;
		}
		.brand-container {
			bottom: 15%;
			left: 5%;
		}
		.brand {
			font-weight: 900;
			width: 100%;
			bottom: 35%;
			left: -2px;
			font-size: 0.7em;
			p {
				-webkit-text-stroke-width: 0.2px;
				letter-spacing: 0em;
			}
		}
	}
	.dot-bg {
		position: absolute;
		top: 40%;
		right: 0;
		width: 400px;
		height: 150px;
		background: url('./dot.png');
		background-size: 20px;
		z-index: -1;
	}
	.dot-bg1 {
		top: 20%;
		left: 10%;
		width: 200px;
		height: 380px;
	}
	.dot-bg2 {
		top: 20%;
		right: 15%;
		width: 200px;
		height: 300px;
	}
</style>
