<script>
	import Work from '../components/work.svelte';
</script>

<svelte:head>
	<title>Work - Patrick Whitehouse</title>
</svelte:head>

<main>
	<h1 class="text-4xl mb-6 underline">My Work</h1>
	<div class="text-2xl leading-normal">
		<p class="my-6">
			Take a look at my most recent bits of work. I'm always looking to expand my knowledge and
			experience with the latest tech stack so give me a shout if you want a blazing fast website
			building!
		</p>
		<div class="grid grid-cols-2 gap-6">
			<Work title="Maid About Town" />
			<Work title="Maid About Town" />
			<Work title="Maid About Town" />
			<Work title="Maid About Town" />
		</div>
	</div>
</main>
