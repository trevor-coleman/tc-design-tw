<script lang='ts'>
  import LogoBubbles from '../LogoBubbles.svelte'
  import type { IconList } from '../../global'
  import Section from './Section.svelte'

  const icons: IconList = [
    {
      src    : '/stars-icon.svg',
      caption: 'Value Proposition Design'
    }, {
      src    : '/pitch-deck-icon.svg',
      caption: 'Pitch Deck Development'
    }, {
      src    : '/business-icon.svg',
      caption: 'Business Models'
    }, {
      src    : '/patent-icon.svg',
      caption: 'Intellectual Property'
    }, {
      src    : '/cash-icon.svg',
      caption: 'Fundraising'
    }, {
      src    : '/conversation-icon.svg',
      caption: 'Founder Issues'
    }, {
      src    : '/meeting-icon.svg',
      caption: 'Governance'
    }, {
      src    : '/market-icon.svg',
      caption: 'Market Sizing'
    }, {
      src    : '/spreadsheet-icon.svg',
      caption: 'Financial Modelling'
    }

  ]


</script>
<a id='advising-mentoring' />
<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='green'
  title='Advising / Mentoring' description='I give back by sharing the experience I gained as a founder.'
>
  <LogoBubbles icons={icons} tilt='left' bubbleClass='' />
</Section>

<style>

</style>
