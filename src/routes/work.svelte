<script>
	import Work from '../components/work.svelte';
	import projectsData from '../../static/project.json';
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
		<div class="grid md:grid-cols-2 gap-6">
			{#await projectsData}
				<p>Loading my work, hang tight...</p>
			{:then projects}
				{#each projects as project}
					<Work title={project.name} desc={project.desc} link={project.url} />
				{/each}
			{/await}
		</div>
	</div>
</main>
