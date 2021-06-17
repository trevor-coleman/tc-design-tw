<script lang='ts'>

  import SectionTitle from './SectionTitle.svelte'
  import LaptopIcon from '../icons/LaptopIcon.svelte'
  import TeamworkIcon from '../icons/TeamworkIcon.svelte'
  import ConversationIcon from '../icons/ConversationIcon.svelte'
  import type { IconList, ImageSource } from '../global'
  import Competency from './Competency.svelte'

</script>

<div
  class='container md:max-w-[80%] mx-auto flex flex-col p-0 mb-24'>
  <SectionTitle>Things I do</SectionTitle>
  <div
    class='flex-grow grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-3 auto-rows-min'>
    <Competency
      color='yellow'
      title='Software Development'
      heroIcon={LaptopIcon}
      slug='software-development'
      description='Solving problems with concise, maintainable code. ' />
    <Competency
      color='pink'
      title='Collaborative Design'
      slug='collaborative-design'
      heroIcon={TeamworkIcon}
      description='Solving problems by facilitating creative discussion.' />
    <Competency
      color='green'
      slug='advising-mentoring'
      title='Advising / Mentoring'
      heroIcon={ConversationIcon}
      description='Helping early stage founders solve problems through coaching.' />


  </div>

</div>

<style>

</style>
