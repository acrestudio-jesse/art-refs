import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const buttonClass = "bg-emerald-300 inline p-1 rounded-md transition transform hover:bg-amber-300";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"grid grid-cols-3 gap-3 m-4"}"><a href="${"subjects/perspective"}"><div class="${"bg-[url('images/2point/step9-4.webp')] bg-cover h-40 box-border p-2 rounded-2xl transition transform hover:bg-[url('images/1point/step8-2.webp')]"}"><h2${add_attribute("class", buttonClass, 0)}>Perspective
			</h2></div></a>
	<a href="${"subjects/composition"}"><div class="${"bg-emerald-300 h-40 box-border p-2 rounded-2xl"}"><h2>Composition</h2></div></a>
	</main>`;
});
export {
  Page as default
};
