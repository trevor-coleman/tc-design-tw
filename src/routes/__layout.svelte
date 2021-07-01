<script lang="ts">
  import '../global.postcss'
  import Footer from '../components/Footer.svelte'
  import Header from '../components/Header.svelte'
  import Head from '../components/Head.svelte'
  import { theme } from './store'
  import { onMount } from 'svelte'

  onMount(() => {
    if ($theme === 'dark') {
      document.querySelector('html')
              .classList
              .add('dark')
    }
  })
</script>

<Head/>
<Header />
<main
  class='container min-w-min'>
    <slot />
</main>
<Footer />
