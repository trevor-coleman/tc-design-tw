<script lang='ts'>
  import LogoBubbles from '../LogoBubbles.svelte'
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
      caption: 'This'
    }
  ]


</script>

<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='green'
  title='Advising / Mentoring' description='I give back by sharing the experience I gained as a founder.'
>
  <LogoBubbles icons={icons} tilt='left' />
</Section>

<style>

</style>
