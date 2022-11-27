import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index.js";
const hovered = "transition transform hover:bg-amber-300  mx-10 rounded-lg p-1 bg-white  flex flex-col gap-2 px-4";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"mx-20 my-10 flex flex-col gap-3"}"><post class="${"flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg"}"><h2 class="${"text-2xl"}">1. What is perspective?</h2>

		<p>Perspective is how we create 3-D space in a piece of art. We basically do this by using
			different methods to imitate human visual perception.
			<br>
			<br>
			There are several types of perspective, but the two main ones we implement are
			<strong>Linear Perspective</strong>
			and <strong>Atmospheric Perspective.</strong></p></post>
	<post class="${"flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg"}"><h2 class="${"text-2xl"}">2. Linear Perspective</h2>

		<p><strong>Linear Perspective</strong> is implemented by measuring out a precise geomentrical
			grid into which we can map shapes in a way which makes them appear 3-D. This grid is
			implemented by declaring a horizon line and 1 or several points to be the reference locations
			for the lines in the grid.
			<br>
			<br>
			In this post, I would like to explore linear perspective using the 1-point and 2-points.
		</p>
		<br>
		<br>
		<div${add_attribute("class", hovered, 0)}>
			<div><h3>A. 1-Point Perspective</h3></div>
			${``}</div>
		<br>
		<br>
		<p>Next, let&#39;s try to construct another cube, this time in 2-point perspective. For this, I would
			start on a fresh piece of paper.
		</p>
		<br>
		<br>
		<div${add_attribute("class", hovered, 0)}>
			<div><h3>B. 2-Point Perspective</h3></div>
			${``}</div></post></main>`;
});
export {
  Page as default
};
