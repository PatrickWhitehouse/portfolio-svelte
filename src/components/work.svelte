<script>
	export let title;
	export let link;
	export let desc;
</script>

<div
	class="flex flex-col justify-center items-center bg-blue-100 p-12 rounded-lg text-center hover:shadow-lg transition-shadow"
>
	<span class="block mb-auto text-3xl">{title ? title : 'No Title'}</span>
	<span class="block text-base my-3">{desc ? desc : 'No Description'}</span>
	<a href={link} target="_blank" class="block mt-auto text-xl underline">View Project</a>
</div>
