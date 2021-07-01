<script lang='ts'>
  import { onMount } from 'svelte'
  import NavLinks from '../utility/NavLinks.svelte'
  import type { PostItColor } from '../../global'
  import nonBreakingText from '../../lib/nonBreakingText'


  export let topSlope: number
  export let bottomSlope: number
  export let bgcolor: PostItColor
  export let title: string
  export let description: string
  export let footer: boolean | undefined
  export let header: boolean | undefined
  export let slug:string|undefined;

  let nonBreakingTitle = nonBreakingText(title)
  let nonBreakingDescription = nonBreakingText(description)

  topSlope = topSlope ?? 10
  bottomSlope = bottomSlope ?? 10

  let colorClass
  switch (bgcolor) {
    case 'blue':
      colorClass = 'bg-postitblue'

      break
    case 'yellow':
      colorClass = 'bg-postityellow'
      break
    case 'pink':
      colorClass = 'bg-postitpink'
      break
    case 'green':
      colorClass = 'bg-postitgreen'
      break
    default:
      colorClass = 'bg-postityellow'
      break
  }

  function offsetAnchor(e) {
    console.log("ANCHOR", e, location)
    if (e.currentTarget.location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY + 20)
    }
  }

  onMount(() => {
    console.log(window.location.hash.length);
    if (slug && window.location.hash.length > 0 && window.location.hash ===
        slug) {
      console.log("scroll to -75")
      window.scrollTo(window.scrollX, window.scrollY - 75)
    }
    else {
      console.log("scroll to zero")
      window.scrollTo(0, 0);
    }
  });


</script>

<svelte:window
  on:hashchange={offsetAnchor}
/>


<section
  class='{colorClass} relative mt-0 max-w-[100%] mx-auto'
  style='padding-top: {Math.abs(topSlope)}vh'>
  {#if topSlope > 0}
    <svg
      class='absolute top-[0vh] w-full'
      style='height: {topSlope}vh;'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'>
      <polygon
        fill='white'
        stroke='white'
        stroke-linejoin='round'
        points='0,0 0,100 100,0 ' />
    </svg>
  {/if}
  {#if topSlope < 0}
    <svg
      class='absolute top-[0vh] w-full'
      style='height: {-topSlope}vh;'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'>
      <polygon
        fill='white'
        points='0,0 100,100 100,0 ' />
    </svg>
  {/if}
  <div
    style='height:
{Math.round(Math.abs(1 * topSlope))}vh;'></div>
  {#if footer}
    <nav
    class='flex flex-row justify-start w-full gap-4 mx-8 '>
    <NavLinks/>
  </nav>
    <div class='ml-8 my-4 w-2/4 h-[1px] bg-[rgba(123,123,123,0.5)]'></div>
  {/if}
  <div
    class='relative px-8 top-0 left-0 mx-auto flex flex-col sm:-mt-4 {topSlope === 0 ? "pt-5":""}'>
    <!--    TITLE    -->
    {#if title}<h2
      class=' {header ? "text-4xl font-bold":"text-2xl font-bold"} {topSlope
      > 0 ?
      "sm:text-right": ""
       } sm:pr-2'>
      {@html nonBreakingTitle}
    </h2>
    {/if}
    {#if description}
    <!--    DESCRIPTION    -->
      <div
        class='w-full flex flex-col {topSlope > 0 ? "sm:items-end":""}'>
        <div
        class='{topSlope > 0 ? "sm:text-right":""} max-w-[30ch] xs:max-w-[50ch] md:max-w-full lg:w-full py-4'>
        {@html nonBreakingDescription}
      </div>
      </div>
    {/if}
    <!--   SLOT   -->
    <slot />
  </div>
  <div class='mt-2'
       style='height: {Math.round(Math.abs(1 * bottomSlope))}vh;'></div>
  {#if bottomSlope > 0}
    <svg
      class='absolute bottom-[0vh] w-full'
      style='height: {bottomSlope}vh;'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'>
      <polygon
        fill='white'
        points='0,0 100,100 0,100' />
    </svg>
  {/if}
  {#if bottomSlope < 0}
    <svg
      class='absolute bottom-[0vh] w-full'
      style='height: {-bottomSlope}vh;'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'>
      <polygon
        fill='white'
        points='0,100 100,0 100,100' />
    </svg>
  {/if}


</section>

<style>

</style>
