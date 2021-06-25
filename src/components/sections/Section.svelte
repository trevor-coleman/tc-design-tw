<script lang='ts'>
  import type { PostItColor } from '../../global'

  export let topSlope: number
  export let bottomSlope: number
  export let bgcolor: PostItColor
  export let title: string
  export let description: string

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
  console.log(e, location)
  if (e.currentTarget.location.hash.length !== 0) {
  window.scrollTo(window.scrollX, window.scrollY - 75);
}
}

  console.log("--->", topSlope, bottomSlope);

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
{Math.round(Math.abs(0.3 * topSlope))}vh;'></div>
  <div
    class='relative px-12 top-0 left-0 mx-auto flex flex-col sm:-mt-4 {topSlope === 0 ? "pt-5":""}'>
    <!--    TITLE    -->
    <div
      class='text-2xl font-bold {topSlope > 0 ? "sm:text-right": "" } sm:pr-2'>
      {title}
    </div>
    {#if description}
    <!--    DESCRIPTION    -->
      <div class='w-full flex flex-col {topSlope > 0 ? "sm:items-end":""}'>

        <div
        class='{topSlope > 0 ? "sm:text-right":""} max-w-[30ch] xs:max-w-[50ch] md:max-w-full lg:w-full py-4'>
        {description}
      </div>
      </div>
      <!--   SLOT   -->


    {/if}
    <slot />
  </div>
  <div class='mt-2'
       style='height: {Math.round(Math.abs(0.5 * bottomSlope))}vh;'></div>
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
