<script lang='ts'>
  export let post
  const {
    image = 'https://via.placeholder.com/640',
    imageAlt = post.title,
    slug,
    title = "",
    description = "",
    tags = []
  } = post
</script>

<div class='p-4'>
  <!--Card 1-->
  <div class='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
    <div class='aspect-h-10 aspect-w-16'>
    <img
      class='object-cover lazy p-2'
      src={image}
      alt='Mountain'>
    </div>
    <div class='px-6 py-4'>
      <div class='font-bold text-xl mb-2'>{title}</div>
      <p class='text-gray-700 text-base'>
        {description}
      </p>
    </div>
    <div class='px-6 pt-4 pb-2'>
      {#each tags as tag}
        <span
          class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{tag}</span>
      {/each}
    </div>
  </div>
</div>
