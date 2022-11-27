import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-between p-4 bg-emerald-600"}"><h1><a href="${"/"}" class="${"text-3xl text-amber-100 "}">Studiref</a></h1>
	<ul class="${"flex gap-4"}"><li><a href="${"/"}">Home</a></li>
		
        <li><a href="${"/subjects"}">Subjects</a></li></ul></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
