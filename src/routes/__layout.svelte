<script>
    import "../app.postcss";
    import Navigation from '../components/navigation.svelte';
</script>
<div class="bg-blue-50 text-grey-900 min-h-screen p-7">
    <div class="container mx-auto">
        <Navigation />
        <slot></slot>
    </div>
</div>