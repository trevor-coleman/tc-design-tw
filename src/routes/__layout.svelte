<script lang="ts">
  import '../global.postcss'
  import Header from '../components/Header.svelte'
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

<Header class='max-h-[4rem] min-h-[4rem]'/>
<main class='container min-w-min'>
  <slot />
</main>
