<script lang='ts'>
  import SocialButtons from './SocialButtons.svelte'
  import Section from './sections/Section.svelte'

</script>
<div class='bg-postitblue'><Section
  bgcolor='blue'
  title='Get In Touch'
  description="I'd love to hear from you!"
  bottomSlope={0}>
  <div class='flex flex-row w-full items-end justify-end'>
    <SocialButtons />
  </div>
</Section>
<footer
  class='flex flex-col justify-end bg-postitblue py-4' >
  <div class='font-xs place-self-center text-[rgba(0,0,0,0.2)]'>
  ©2021 - Trevor Coleman
</div>
</footer>
</div>

<style>

</style>
