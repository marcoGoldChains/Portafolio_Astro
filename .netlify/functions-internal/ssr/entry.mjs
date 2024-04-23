import { renderers } from './renderers.mjs';
import { manifest } from './manifest_8Uxes_k7.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CJszJJ13.mjs');
const _page1 = () => import('./chunks/contact_C_NEv9Xp.mjs');
const _page2 = () => import('./chunks/services_Xg8i5pm_.mjs');
const _page3 = () => import('./chunks/works_D2BNZidD.mjs');
const _page4 = () => import('./chunks/index_tyq92uK3.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/services.astro", _page2],
    ["src/pages/works.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "33b448dd-b64d-43b2-a073-51d706d1cc09"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
