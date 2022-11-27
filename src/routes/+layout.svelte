<script>
	import '../app.css';
	export const prerender = true;
</script>

<nav class="flex justify-between p-4 bg-emerald-600">
	<h1><a href="/" class="text-3xl text-amber-100 ">Studiref</a></h1>
	<ul class="flex gap-4">
		<li><a href="/">Home</a></li>
		<!-- <li><a href="/lessons">Lessons</a></li>
		<li><a href="/examples">Examples</a></li> -->
        <li><a href="/subjects">Subjects</a></li>
	</ul>
</nav>

<slot />
