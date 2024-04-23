/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_CZGdeUNh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$3 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Menu;
  const menu = "absolute z-20 bottom-10 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide text-gray-600";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(menu, "class")}> <a href="/" class="hover:text-pink-600">home</a> <a href="/works" class="hover:text-pink-600">works</a> <a href="/services" class="hover:text-pink-600">services</a> <a href="/contact" class="hover:text-pink-600">contact</a> </div>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/components/Menu.astro", void 0);

const $$Astro$2 = createAstro();
const $$TitlePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TitlePage;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <h1 class="text-6xl font-bold text-gray-600">${title}</h1> <p class="pt-2">${subtitle}</p> </div>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/components/TitlePage.astro", void 0);

const $$Astro$1 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#" class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-md text-sm font-bold text-white"> ${title}</a>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/components/Button.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const styleInput = "border border-purple-300 px-4 py-2 rounded-md hover:border-pink-400";
  const styleTextArea = "border border-purple-300 px-4 py-2 rounded-md hover:border-pink-400 md:col-span-3";
  return renderTemplate`${renderComponent($$result, "Menu", $$Menu, {})} ${maybeRenderHead()}<section class="bg-gray-200 pt-20 pb-28 px-8"> <div class="max-w-6xl mx-auto"> ${renderComponent($$result, "TitlePage", $$TitlePage, { "title": "Contact", "subtitle": "Contact me!" })} </div> <div class="mt-16 relative max-w-4xl mx-auto"> <div class="relative z-20 bg-white rounded-md p-12 shadow-lg"> <form action=""> <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 gap-10"> <input type="text" placeholder="Name"${addAttribute(styleInput, "class")}> <input type="text" placeholder="Email"${addAttribute(styleInput, "class")}> <input type="text" placeholder="Subject"${addAttribute(styleInput, "class")}> <textarea rows="5" placeholder="Message"${addAttribute(styleTextArea, "class")}></textarea> </div> ${renderComponent($$result, "Button", $$Button, { "title": "Send Message" })} </form> </div> </div> </section>`;
}, "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/marco/Desktop/Workspace/Portafolio_Astro/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Menu as $, $$TitlePage as a, $$Button as b, contact as c };
