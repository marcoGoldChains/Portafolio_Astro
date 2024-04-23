/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_CZGdeUNh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Menu, a as $$TitlePage } from './contact_CJeMgqK0.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CardService = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardService;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="absolute z-10 inset-0 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-lg"></div> <div class="relative z-20 bg-white h-full rounded-md shadow-md px-10 py-12"> <h2 class="pt-3 font-bold text-2xl">${title}</h2> <p class="pt-3">${description}</p> </div> </div>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/components/CardService.astro", void 0);

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      titulo: "Service 1 / Web Development",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint quasierror et, ex corporis. Ipsa sint, mollitia nostrum itaque saepe optio repellat esse, quaerat molestias blanditiis ipsam, illo iste?"
    },
    {
      titulo: "Service 2 / Coding Development",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint quasierror et, ex corporis. Ipsa sint, mollitia nostrum itaque saepe optio repellat esse, quaerat molestias blanditiis ipsam, illo iste?"
    },
    {
      titulo: "Service 3 / Consultation",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sint quasierror et, ex corporis. Ipsa sint, mollitia nostrum itaque saepe optio repellat esse, quaerat molestias blanditiis ipsam, illo iste?"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Menu", $$Menu, {})} ${maybeRenderHead()}<section class="bg-gray-200 pt-20 pb-28 px-8"> <div class="max-w-6xl mx-auto"> ${renderComponent($$result, "TitlePage", $$TitlePage, { "title": "Services", "subtitle": "My services" })} <div class="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20"> ${services.map((item) => renderTemplate`${renderComponent($$result, "CardService", $$CardService, { "title": item.titulo, "description": item.description })}`)} </div> </div> </section>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/services.astro", void 0);

const $$file = "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
