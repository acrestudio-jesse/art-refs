import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><h1 class="${"text-3xl flex justify-center items-center m-3 p-2 bg-emerald-600 rounded-full text-amber-100"}">Welcome Mr. Hickey&#39;s Art Class</h1></header>

<main class="${"mx-20 my-10"}"><post class="${"flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg"}"><h2 class="${"text-2xl"}">Perspective Added!</h2>
        <h5 class="${"text-xs"}">Nov. 27, 2022</h5>

        <p>Hey everyone! Today, I got around to posting examples and walkthroughs for simple linear perspective. It is my hope that you will be able to refer to this resource in order to improve your own understanding of linear perspective!

           Good luck!
        </p></post>
    <post class="${"flex flex-col gap-3 p-3 bg-emerald-100 rounded-lg"}"><h2 class="${"text-2xl"}">Welcome the learning archive.</h2>
        <h5 class="${"text-xs"}">Nov. 24, 2022</h5>

        <p>Good day, students. After much consideration, I decided that it would be a good idea to archive some of the concepts we are learning in class on this website for your viewing. 

            Hopefully, this will be a useful resource for you as I continue to develop it&#39;s mechanisms. 
        </p></post></main>`;
});
export {
  Page as default
};
