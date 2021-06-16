<script lang='ts'>
  import LogoBubbles from '../LogoBubbles.svelte'
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
  <LogoBubbles icons={icons} tilt='right' />
</Section>

<style>

</style>
