/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, k as renderSlot, f as renderComponent } from '../astro_CZGdeUNh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Menu, a as $$TitlePage, b as $$Button } from './contact_CJeMgqK0.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardWorks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardWorks;
  const { image, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-md shadow-md"> <img${addAttribute(image, "src")} alt="imagen" class="object-cover w-full h-80"> <div class="p-8"> <h3 class="font-bold text-2xl">${title}</h3> <p class="pt-3">${description}</p> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/components/CardWorks.astro", void 0);

const $$Astro = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate`${renderComponent($$result, "Menu", $$Menu, {})} ${maybeRenderHead()}<section class="bg-gray-200 pt-20 pb-28 px-8"> <div class="max-w-6xl mx-auto"> ${renderComponent($$result, "TitlePage", $$TitlePage, { "title": "Works", "subtitle": "Some of my projects" })} <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-14"> ${renderComponent($$result, "CardWorks", $$CardWorks, { "image": "images/work1.jpg", "title": "Work1", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint quasierror et, ex corporis. Ipsa sint, mollitia nostrum itaque saepe optio repellat esse, quaerat molestias blanditiis ipsam, illo iste?" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "View Project" })} ` })} ${renderComponent($$result, "CardWorks", $$CardWorks, { "image": "images/work2.jpg", "title": "Work2", "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint quasierror et, ex corporis. Ipsa sint, mollitia nostrum itaque saepe optio repellat esse, quaerat molestias blanditiis ipsam, illo iste?" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "View Project" })} ` })} </div> </div> </section>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/works.astro", void 0);

const $$file = "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/works.astro";
const $$url = "/works";

export { $$Works as default, $$file as file, $$url as url };
