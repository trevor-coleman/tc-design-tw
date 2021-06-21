<script lang='ts'>
  export let post
  let image
  $: image = post.image ?? `https://loremflickr.com/320/240?lock=${post.index}`

  let borderColor = 'border-gray-200'
  let textColor = 'text-gray-200'
  let backgroundColor = 'bg-gray-200'

  $: switch (post.category) {
    case 'development':
      borderColor = 'border-postityellow'
      backgroundColor = 'bg-postityellow'
      textColor = 'text-postityellow'
      break
    case 'design':
      borderColor = 'border-postitpink'
      backgroundColor = 'bg-postitpink'
      textColor = 'text-postitpink'
      break
    case 'mentoring':
      borderColor = 'border-postitgreen'
      backgroundColor = 'bg-postitgreen'
      textColor = 'text-postitgreen'
      break
    case 'all':
    default:
      borderColor = 'border-gray-200'
      backgroundColor = 'bg-gray-200'
      textColor = 'text-gray-200'
      break
  }
</script>

<div>
  <!--Card 1-->

  <div
    class='bg-white rounded-md border-[12px] {borderColor} shadow-mdh-full'>

    <div class='shadow-sm flex flex-col '>
      <!--CATEGORY-->
      <div
        class='{backgroundColor} w-full pb-1'
      >
        <div class='{textColor} font-medium uppercase filter brightness-75'>
          {post.category}
        </div>
      </div>
      <div class='p-4'>
        <!--TITLE-->
        <div
          class='text-lg font-bold mb-2 min-h-min'>{post.title}
        </div>
        <!--IMG-->
        <div
          class='relative h-2/3  flex justify-center items-center'>
          <img
            class=' relative object-cover rounded-md m-2 lazy h-full w-full place-self-center'
            src='{image}'
            alt='Mountain'>
        </div>
        <!--DESCRIPTION-->
        <div class='px-2 py-4'>
          <p class='text-gray-700 text-sm'>
            {post.description}
          </p>
        </div>

      </div>

      <!--    <div class='px-2 pb-2'>-->
      <!--      {#each tags as tag}-->
      <!--        <span-->
      <!--          class='inline-block bg-contrast rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{tag}</span>-->
      <!--      {/each}-->
      <!--    </div>-->
    </div>
  </div>
</div>
