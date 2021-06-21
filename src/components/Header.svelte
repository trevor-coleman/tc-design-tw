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
          <div
            class='text-link place-self-center text-4xl hidden xs:block sm:hidden'>XS</div>
          <div
            class='text-link place-self-center text-4xl hidden sm:block md:hidden'>
            SM</div>
          <div
            class='text-link place-self-center text-4xl hidden md:block lg:hidden'>
            MD</div>
          <div
            class='text-link place-self-center text-4xl hidden lg:block xl:hidden'>
            LG</div>
          <div
            class='text-link place-self-center text-4xl hidden xl:block 2xl:hidden'>
            XL
          </div>
          <div
            class='text-link place-self-center text-4xl hidden 2xl:block'>
            2XL
          </div>
        </a>
      </div>
      <div
        class='hidden sm:block flex border pt-2 content-center justify-between md:w-1/4 md:justify-end'>
        <ul class='list-reset flex justify-between flex-1 md:flex-none items-center'>
          <li class='mr-3'>
            <a
              class='inline-block py-2 px-4 no-underline font-medium'
              href='/'>Home</a>
          </li>
          <li class='mr-3'>
            <a
              class='inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'
              href='/work'>Work</a>
          </li>
          <li class='mr-3'>
            <a
              class='inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4'
              href='#collaborative-design'>Blog</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<style>

</style>
