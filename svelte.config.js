import preprocess from "svelte-preprocess";
/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-netlify"
const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        adapter: adapter()
    },

    preprocess: [preprocess({
        "postcss": true
    })]
};

export default config;
