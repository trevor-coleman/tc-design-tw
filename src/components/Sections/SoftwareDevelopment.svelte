<script lang='ts'>
  import LogoThumb from '../LogoThumb.svelte'
  import Section from '../Section.svelte'
  import type { IconList } from '../../global'

  const icons: IconList = [
    {
      src    : '/ReactLogo.svg',
      caption: 'React'
    }, {
      src    : '/typescript-logo.svg',
      caption: 'TypeScript'
    }, {
      src    : '/mongodb-icon.jpeg',
      caption: 'MongoDb'
    }, {
      src    : '/firebase-logo.png',
      caption: 'Firebase'
    }, {
      src    : '/express-logo.png',
      caption: 'ExpressJS'
    }, {
      src    : '/apollo-logo.svg',
      caption: 'Apollo'
    }, {
      src    : '/graphql-logo.png',
      caption: 'GraphQL'
    }, {
      src    : '/mysql-logo.png',
      caption: 'MySQL'
    }
  ]


</script>

<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='yellow'
  title='Software Development'
  icons={icons}>
<div class='mx-auto my-8 flex flex-wrap flex-row w-full'>
  {#each icons as icon}
  <LogoThumb
    src='{icon.src}'
    caption='{icon.caption}' />
  {/each}
</div>
</Section>

<style>

</style>
