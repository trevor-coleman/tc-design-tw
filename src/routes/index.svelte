<script lang="ts">
  import SectionTitle from '../components/SectionTitle.svelte'
  import SocialButtons from '../components/SocialButtons.svelte'
  import IconButton from '../components/IconButton.svelte'
  import LogoBubbles from '../components/LogoBubbles.svelte'
  import AdvisingMentoring
    from '../components/sections/AdvisingMentoring.svelte'
  import CollaborativeDesign
    from '../components/sections/CollaborativeDesign.svelte'
  import SoftwareDevelopment
    from '../components/sections/SoftwareDevelopment.svelte'
  import LogoThumb from '../components/LogoThumb.svelte'
  import Section from '../components/sections/Section.svelte'
  import Footer from '../components/Footer.svelte'
  import LaptopIcon from '../icons/LaptopIcon.svelte'
  import Competencies from '../components/Competencies.svelte'
  import Hero from '../components/Hero.svelte'
  import { theme } from './store'
  import ToggleTheme from '../components/ToggleTheme.svelte'

</script>

<div/>
<Hero/>
<Competencies/>
  <SoftwareDevelopment/>
  <CollaborativeDesign/>
  <AdvisingMentoring/>

  <Section bgcolor='blue' title='Get In Touch'
           description="I'd love to hear from you!" bottomSlope={0}>
    <div class='flex flex-row w-full items-end justify-end'>
      <SocialButtons/>
    </div>

  </Section>
<Footer/>

<style lang="postcss">

</style>
