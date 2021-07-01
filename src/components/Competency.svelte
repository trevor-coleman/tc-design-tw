<script lang='ts'>
  import { SvelteComponent } from 'svelte'
  import type { PostItColor } from '../global'
  import LogoThumb from './LogoThumb.svelte'

  export type IconList = { caption: string, src: string }[]

  export let slug: string | undefined
  export let color: PostItColor
  export let title: string
  export let description: string
  export let heroIcon: SvelteComponent;
  let colorClass = 'border-postityellow'
  // noinspection JSUnusedAssignment
  switch (color) {
    case 'blue':
      colorClass = 'border-postitblue'
      break
    case 'pink':
      colorClass = 'border-postitpink'
      break
    case 'green':
      colorClass = 'border-postitgreen'
      break
    case 'yellow':
    default:
      break
  }

</script>
<div
  class='w-full h-full flex flex-col  align-middle justify-center'>
  <div
    class='border-[12px] p-4 lg:p-3 xl:p-4 flex flex-col {colorClass} flex-grow max-w-xs place-self-center'>
    <h3
      class='place-self-center md:text-lg text-center lg:text-xl font-medium'>{title}</h3>
    {#if heroIcon}
      <div
        class='w-1/4 sm:w-1/3 md:w-1/4 place-self-center fill-current text-secondary mt-4'>
        <svelte:component this={heroIcon}/>
      </div>
      {/if}
    {#if description}
      <div class='my-4 flex-1 flex align-middle'><div
        class='place-self-center my-auto text-center text-secondary font-light'>{description}</div>
      </div>
    {/if}
    </div>

</div>


<style>

</style>
