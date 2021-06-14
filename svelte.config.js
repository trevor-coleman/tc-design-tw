import preprocess from 'svelte-preprocess'
import ssr from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [
    mdsvex(),
    preprocess({
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
