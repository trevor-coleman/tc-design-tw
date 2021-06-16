<script lang='ts'>

  import LogoThumb from './LogoThumb.svelte'
  import type { IconList } from '../global'
  export let icons: IconList

  export let tilt:"left"|"right"|undefined;

</script>



  <div class='w-full flex flex-col items-center'>
    <div
    class='w-[16rem] sm:w-full mt-2 flex flex-wrap {tilt==="right" ?
    "sm:justify-end":"sm:justify-start"}'>
    {#each icons as icon}
      <div
        class='flex max-w-[8rem] w-1/2 sm:w-1/4 md:w-1/5 flex-grow relative {tilt===
        "right" ?"odd:top-12":"even:top-12"} sm:even:top-0 sm:odd:top-0 justify-center'>
        <LogoThumb
          src='{icon.src}'
          caption='{icon.caption}' />
      </div>
    {/each}
  </div>
  </div>

<style>

</style>
