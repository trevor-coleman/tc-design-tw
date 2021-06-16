<script lang='ts'>
  import type { PostItColor } from '../global'

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


</script>

<section
  class='{colorClass} relative mt-0 max-w-[90%] mx-auto min-w-min'
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
    class='relative px-12 pt-4 pb-12 top-0 left-0 mx-auto flex flex-col min-h-[150px] md:-mt-12'>
    <!--    TITLE    -->
    <div
      class='text-2xl font-bold {topSlope > 0 ? "text-right": "" } sm:pr-2'>
      {title}
    </div>
    <!--    DESCRIPTION    -->
    <div class='w-full flex flex-col {topSlope > 0 ? "items-end":""}'>
      <div
        class='{topSlope > 0 ? "text-right":""} max-w-[30ch] xs:max-w-[50ch] md:max-w-full lg:w-full'>
        {description}
      </div>
      <!--   SLOT   -->
      <slot />
    </div>
  </div>
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
