<script lang='ts'>
  import LogoBubbles from '../LogoBubbles.svelte'
  import LogoThumb from '../LogoThumb.svelte'
  import Section from './Section.svelte'
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
<a id='software-development'/>
<Section
  topSlope={-10}
  bottomSlope={-10}
  bgcolor='yellow'
  title='Software Development'
  description="I'm passionate about writing clean, performant, maintainable code."
>
<LogoBubbles icons={icons} tilt='"left'/>
</Section>

<style>

</style>
