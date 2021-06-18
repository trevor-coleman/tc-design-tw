<script lang='ts'>
  export let post
  const {
    image = 'https://loremflickr.com/640/360',
    slug,
    title,
    description,
    tags = []
  } = post
</script>

<article class='relative top-0 left-0'>
  <div>
    <img
      class='relative object-cover lazy p-2 w-full aspect-w-16 aspect-h-9 z-1'
      src={image}
      alt={title}>
<!-- TAGS  -->
    <div
      class='relative z-5 bottom-40 left-10 block bg-[rgba(0,0,0,0.5)] w-3/4 max-w-prose p-4 rounded-md'>
      <div class='flex flex-row flex-wrap space-x-1 '>
        {#each tags as tag}
          <div
            class='text-xs rounded-md text-postitblue font-light uppercase'>
            {tag}
          </div>
          {#if tags && tags.indexOf(tag) < tags?.length - 1}
            <div class='text-xs rounded-md text-postitblue font-light uppercase'>•</div>
          {/if}

        {/each}
      </div>
      <!-- TITLE  -->
      <h3
      class='text-2xl text-white pb-2'>
      {title}
    </h3>
      <!-- DESCRIPTION  -->
    <p class='text-postitblue'>
      {description}
    </p>

    </div>
  </div>
</article>
