<script lang='ts'>
  import LogoBubbles from '../LogoBubbles.svelte'
  import Section from '../Section.svelte'
  import type { IconList } from '../../global'

  const icons: IconList = [
    {
      src    : '/design-thinking-icon.svg',
      caption: 'Design Thinking'
    }, {
      src    : '/room-service-icon.svg',
      caption: 'Service Design'
    }, {
      src    : '/flowchart-icon.svg',
      caption: 'Systems Thinking'
    }, {
      src    : '/binoculars-icon.svg',
      caption: 'Strategic Foresight'
    }, {
      src    : '/march-icon.svg',
      caption: 'Design Facilitation'
    }, {
      src    : '/visual-thinking-icon.svg',
      caption: 'Visual Thinking'
    }, {
      src    : '/prototyping-icon.svg',
      caption: 'Rapid Prototyping'
    }, {
      src    : '/racing-icon.svg',
      caption: 'Design Sprints'
    }, {
      src    : '/map-icon.svg',
      caption: 'Design Instruction'
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
