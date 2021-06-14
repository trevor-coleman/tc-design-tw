<script lang='ts'>

  import SectionTitle from './SectionTitle.svelte'
  import LaptopIcon from '../icons/LaptopIcon.svelte'
  import TeamworkIcon from '../icons/TeamworkIcon.svelte'
  import ConversationIcon from '../icons/ConversationIcon.svelte'
  import type { IconList, ImageSource } from '../global'
  import Competency from './Competency.svelte'

  const devHero: ImageSource = {
    src    : '',
    caption: ''
  }
  const devIcons: IconList = [
    {
      src    : 'https://via.placeholder.com/150',
      caption: 'React'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'React Native'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'TypeScript'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'MongoDb'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'Firebase'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'ExpressJS'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'ApolloServer'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'GraphQL'
    }, {
      src    : 'https://via.placeholder.com/150',
      caption: 'MySQL'
    }
  ]

  const designIcons: IconList = [
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
    }
  ]

  const mentorIcons: IconList = [
    {
      src    : 'https://via.placeholder.com/150',
      caption: 'React Native'
    }
  ]

</script>

<div
  class='container md:max-w-[80%] mx-auto flex flex-col p-0 mb-24'>
  <SectionTitle>Things I do</SectionTitle>
  <div
    class='flex-grow grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 auto-rows-max'>
    <Competency
      color='yellow'
      title='Software Development'
      heroIcon={LaptopIcon}
      description='Solving problems with concise, maintainable code. ' />
    <Competency
      color='pink'
      title='Collaborative Design'
      heroIcon={TeamworkIcon}
      description='Solving problems by facilitating creative discussion.' />
    <Competency
      color='green'
      title='Advising / Mentoring'
      heroIcon={ConversationIcon}
      description='Helping early stage founders solve problems through coaching.' />


  </div>

</div>

<style>

</style>
