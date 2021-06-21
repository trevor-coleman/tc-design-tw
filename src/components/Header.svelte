<script lang='ts'>
  export let tw;

</script>

<header
  class='fixed w-full border-2 h-18 z-10 top-0 {tw??""}'>
  <!--Nav-->
  <nav
    class='mt-0 mx-auto items-center md:mb-0'>
    <!-- Add this to make the nav fixed: "fixed z-10 top-0" -->
    <div
      class='bg-white shadow-md mx-auto flex flex-wrap items-center p-2'>
      <div
        class='flex w-full md:w-1/2 justify-center md:justify-start font-bold'>
        <a
          class='no-underline hover:no-underline flex flex-row'
          href='#'>
          <img src="/headshot-profile.png"
               class='rounded-full object-cover h-12 w-12' >
          <div class='text-2xl flex-grow pl-2 place-self-center'>Trevor Coleman
          </div>
        </a>
      </div>
    </div>
  </nav>
</header>

<style>

</style>
