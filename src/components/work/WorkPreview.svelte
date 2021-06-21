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

<article class=''>
  <div>
    <div
      class='p-4 bg-white m-4'>
      <!-- TAGS  -->
      <div class='flex flex-row flex-wrap space-x-1 '>
        {#each tags as tag}
          <div
            class='text-xs font-light uppercase'>
            {tag}
          </div>
          {#if tags && tags.indexOf(tag) < tags?.length - 1}
            <div class='text-xs rounded-md text-link font-light uppercase'>
              •
            </div>
          {/if}

        {/each}
      </div>
      <!-- TITLE  -->
      <h3
        class='text-2xl font-medium pb-2'>
        {title}
      </h3>
      <!-- DESCRIPTION  -->
      <p class='text-postitblue'>
        {description}
      </p>
    <img
      class='object-cover lazy p-2 w-full aspect-w-16 aspect-h-9 z-1'
      src={image}
      alt={title}>
    </div>
  </div>
</article>
