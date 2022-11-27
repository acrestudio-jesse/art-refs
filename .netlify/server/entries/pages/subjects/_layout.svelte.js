import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-between p-4 bg-emerald-700"}"><h1 class="${"text-2xl text-amber-100 "}"><a href="${"/subjects"}">Subjects</a></h1>
<ul class="${"flex gap-4"}"><li><a href="${"/subjects/perspective"}">Perspective</a></li>
    <li><a href="${"/subjects/composition"}">Composition</a></li></ul></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
