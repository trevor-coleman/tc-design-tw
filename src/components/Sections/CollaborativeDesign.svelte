<script lang='ts'>
  import LogoThumb from '../LogoThumb.svelte'
  import Section from '../Section.svelte'
  import type { IconList } from '../../global'

  const icons: IconList = [
    {
      src    : 'https://via.placeholder.com/150',
      caption: 'Design Thinking'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Service Design'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Systems Thinking'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Strategic Foresight'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Design Facilitation'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Visual Thinking'
    }
  ]


</script>

<Section
  topSlope={10}
  bottomSlope={10}
  bgcolor='pink'
  title='Collaborative Design'
  description="I'm an expert facilitator, and I bring that skill to all the work I do.">
<div class='mx-auto my-8 flex flex-wrap flex-row-reverse w-full pt-12'>
  {#each icons as icon}
    <div class='relative even:-top-12 even:sm:top-0'>
  <LogoThumb
    src='{icon.src}'
    caption='{icon.caption}' />
    </div>
  {/each}
</div>
</Section>

<style>

</style>
