<script lang='ts'>
  import IconButton from './IconButton.svelte'

</script>
<!--Hero-->
<div
  class='border-[12px] border-postitblue md:max-w-[80%] p-4 mx-auto flex flex-col-reverse md:flex-row items-center mb-12 md:mb-24 shadow-lg'>
  <!--Left Col-->

  <div
    class='flex flex-col w-full lg:w-1/2 justify-center items-center sm:items-start py-6 px-6 sm:pl-16'>
    <p
      class='uppercase text-center tracking-loose text-disabled text-xs sm:text-md'>FOUNDER • DESIGNER •
                                               DEVELOPER</p>
    <h1 class='my-4 text-3xl sm:text-4xl font-bold'>Hi I'm Trevor.</h1>
    <p class='leading-normal mb-4'>I'm a systems thinker who uses my
                                   understanding of technology and the human
                                   brain to help people make better decisions
                                   faster and get more done.</p>
    <div class='flex flex-row flex-wrap w-full justify-start'>
      <IconButton
        icon='/twitter-icon.svg'
        alt='Twitter' />
      <IconButton
        icon='/github-icon.svg'
        alt='GitHub' />
      <IconButton
        icon='/linkedin-icon.svg'
        alt='LinkedIn' />
    </div>
<!--    <button class='bg-transparent hover:bg-black text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent'>-->
<!--      Super Button-->
<!--    </button>-->
  </div>
  <div class='w-full lg:w-1/2 lg:py-6 text-center'>
    <!--Add your product image here-->
    <img
      src='headshot-profile.png'
      class='rounded-full object-cover h-48 w-48 sm:h-56 sm:w-56 mx-auto'>
  </div>
</div>

<style>

</style>
