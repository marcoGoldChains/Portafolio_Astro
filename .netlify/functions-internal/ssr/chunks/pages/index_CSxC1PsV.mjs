/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, j as renderHead, f as renderComponent } from '../astro_CZGdeUNh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Menu } from './contact_CJeMgqK0.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Card = "div";
  const Content = "div";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Portfolio</title>${renderHead()}</head> <body> ${renderComponent($$result, "Menu", $$Menu, {})} <div class="absolute w-full min-h-screen"> <div class="absolute z-0 top-0 w-full h-1/2 bg-cover
						bg-bottom pt-20 px-12
						bg-gradient-to-r from-purple-500 to-pink-500"></div> </div> ${renderComponent($$result, "Card", Card, { "class": "relative z-10 flex min-h-screen h-auto justify-center items-center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, { "class": "relative z-20 bg-white md:flex p-12 shadow-lg rounded-lg w-full max-w-4xl" }, { "default": ($$result3) => renderTemplate` <div class="sm:flex flex-col py-1 md:pr-10"> <h2 class="text-lg mb-3">Hello, I'am</h2> <h1 class="text-5xl font-bold text-gray-800 mb-6">Marcos</h1> <p class="text-xl">FullStack Web Developer who crafts greats websites and awesome apps</p> </div> <img src="/images/user.jpg" alt="user_image" class="flex-shrink-0 w-80 rounded-full border-6 border-white shadow-md"> ` })} ` })} </body></html>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
