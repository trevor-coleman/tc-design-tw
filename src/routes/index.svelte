<script lang="ts">
  import AdvisingMentoring
    from '../components/Sections/AdvisingMentoring.svelte'
  import CollaborativeDesign
    from '../components/Sections/CollaborativeDesign.svelte'
  import SoftwareDevelopment
    from '../components/Sections/SoftwareDevelopment.svelte'
  import LogoThumb from '../components/LogoThumb.svelte'
  import Section from '../components/Section.svelte'
  import Footer from '../components/Footer.svelte'
  import LaptopIcon from '../icons/LaptopIcon.svelte'
  import Competencies from '../components/Competencies.svelte'
  import Hero from '../components/Hero.svelte'
  import { theme } from './store'
  import ToggleTheme from '../components/ToggleTheme.svelte'

</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Trevor Coleman</title>
  <meta
    name='title'
    content='Trevor Coleman'>
  <meta
    name='description'
    content='Successful Founder • Facilitative Leader • Full-Stack Developer

'>

  <!-- Open Graph / Facebook -->
  <meta
    property='og:type'
    content='website'>
  <meta
    property='og:url'
    content='https://trevorcoleman.design/'>
  <meta
    property='og:title'
    content='Trevor Coleman'>
  <meta
    property='og:description'
    content='Successful Founder • Facilitative Leader • Full-Stack Developer

'>
  <meta
    property='og:image'
    content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'>

  <!-- Twitter -->
  <meta
    property='twitter:card'
    content='summary_large_image'>
  <meta
    property='twitter:url'
    content='https://trevorcoleman.design/'>
  <meta
    property='twitter:title'
    content='Trevor Coleman'>
  <meta
    property='twitter:description'
    content='Successful Founder • Facilitative Leader • Full-Stack Developer

'>
  <meta
    property='twitter:image'
    content='https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png'>
</svelte:head>

<main class='container p-4'>
<Hero/>
<Competencies/>
  <SoftwareDevelopment/>
  <CollaborativeDesign/>
  <AdvisingMentoring/>
</main>
<Footer/>

<style lang="postcss">

</style>
