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
    }, {
      src    : '/c-sharp-logo.png',
      caption: 'C#'
    }, {
      src    : '/unity-logo.png',
      caption: 'Unity3D'
    }
  ]


</script>

<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='yellow'
  title='Software Development'
  description="I'm passionate about writing clean, performant, maintainable code."
>
<div
  class='my-8 flex flex-wrap content-around border min-w-[16rem]'>
  {#each icons as icon}
    <div
      class='flex flex-grow justify-center relative even:top-12 sm:even:top-0 border'>
    <LogoThumb
    src='{icon.src}'
    caption='{icon.caption}' />
    </div>
  {/each}
</div>
</Section>

<style>

</style>
