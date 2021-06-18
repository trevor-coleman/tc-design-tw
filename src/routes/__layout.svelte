<script lang="ts">
  import '../global.postcss'
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
<Header tw='max-h-[4rem] min-h-[4rem]'/>
<div class='h-[6rem]'></div>
<main class='container min-w-min'>
  <slot />
</main>
