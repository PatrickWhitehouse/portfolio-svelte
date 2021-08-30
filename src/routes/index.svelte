<script>
	import Portrait from '../../static/portrait.jpg';
	import Bmw from '../../static/140.jpg';
	import Cupra from '../../static/cupra.jpg';
	import Abarth from '../../static/abarth.jpg';
</script>

<svelte:head>
	<title>Patrick Whitehouse</title>
</svelte:head>
<main>
	<div class="lg:grid lg:grid-cols-2">
		<img src={Portrait} alt="Patrick Whitehouse" class="mb-7 mx-auto rounded-full" />
		<div class="lg:self-center">
			<h1 class="text-4xl sm:text-7xl mb-6">Hi I'm Patrick!</h1>
			<h2 class="text-3xl sm:text-5xl sm:leading-tight">
				I'm a front end developer based in Derbyshire, UK.
			</h2>
		</div>
	</div>
	<div class="mt-20 text-2xl leading-normal">
		<p class="my-6">Hey, I'm Patrick.</p>
		<p class="my-6">
			I'm currently a front end developer for a Magento agency based in Manchester. I tend to spend
			my day developing large scale ecommerce sites that sometimes have the occasional WordPress
			integration.
		</p>
		<p class="my-6">
			I've <strong>always</strong> had a strong interest in technology and how things work, especially
			the web. This led me to undertake a web development degree at university, where I achieved a first
			class honours in BSc Web Development.
		</p>
		<p class="my-6">
			As well as being a typical computer 'nerd', I have a keen interests in cars (this is where
			most of my wages go ha!). Below is a little showcase of some of the cars I've been lucky
			enough to own.
		</p>
		<div class="grid grid-cols-2 lg:grid-cols-3 gap-2">
			<img src={Bmw} alt="BMW 140i" class="w-auto" />
			<img src={Cupra} alt="Cupra 290" class="w-auto" />
			<img src={Abarth} alt="Abarth 500" class="w-auto" />
		</div>
	</div>
</main>
