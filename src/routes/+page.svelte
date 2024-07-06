<script>
	import { base } from "$app/paths";
	import Header from "./Header.svelte";
	import Publications from "./Publications.svelte";
	import Projects from "./Projects.svelte";
</script>

<!-- content column -->
<div class="max-w-4xl w-full px-2 pt-8 flex flex-col items-start mx-auto">
	<Header />
	<Publications />
	<Projects />
</div>
