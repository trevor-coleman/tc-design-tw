import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import ssr from '@sveltejs/adapter-static'
/** @type {import('@sveltejs/kit').Config} */
import node from '@sveltejs/adapter-vercel';
export default {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [
    mdsvex({
      extensions: ['.svelte', '.svx', '.md'],
    smartypants: true,
    }),
    preprocess({
      extensions: ['.svelte', '.svx', '.md'],
      defaults: {
        style: 'postcss'
      },
      postcss: true
    })
  ],
  kit: {
    adapter: ssr(),
    target: '#svelte'
  }
}
