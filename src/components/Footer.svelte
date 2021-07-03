<script lang='ts'>
  import SocialButtons from './SocialButtons.svelte'
  import Section from './sections/Section.svelte'

</script>
<footer class='bg-postitblue'>
  <Section
    bgcolor='blue'
    title='Get In Touch'
    description="I'd love to hear from you!"
    bottomSlope={0}
    topSlope={5}
    footer>
    <div class='flex flex-row w-full justify-start'>
      <SocialButtons />
    </div>
  </Section>
  <div
    class='flex flex-col justify-end bg-postitblue py-4' >
    <div class='font-xs place-self-center text-[rgba(0,0,0,0.2)]'>
      ©2021 - Trevor Coleman
    </div>
  </div>
</footer>

<style>

</style>
