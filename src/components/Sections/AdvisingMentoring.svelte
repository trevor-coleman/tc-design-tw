<script lang='ts'>
  import type { IconList } from '../../global'
  import LogoThumb from '../LogoThumb.svelte'
  import Section from '../Section.svelte'

  const icons: IconList = [
    {
      src    : 'https://via.placeholder.com/150',
      caption: 'Value Proposition Design'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Pitch Deck Development'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Business Strategy'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Intellectual Property'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: ''
    }
  ]


</script>

<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='green'
  title='Advising / Mentoring' description='I give back by sharing the experience I gained as a founder.'>
  <div class='flex flex-wrap'>
    <div>
      <div class='mx-auto my-8 flex flex-wrap flex-row w-full'>
        {#each icons as icon}
          <div class='relative even:top-12 even:sm:top-0'>
            <LogoThumb
            src='{icon.src}'
            caption='{icon.caption}' /></div>
        {/each}
      </div>
    </div>
  </div>
</Section>

<style>

</style>
