<script lang='ts'>
  import getCategoryValues from '../../lib/getCategoryValues.js'

  export let post
  export let index
  const {
    hero = `https://loremflickr.com/640/360?${index}`,
    slug,
    title,
    html,
    description,
    category,
    tags = []
  } = post

  let url = `/work/${slug}`

  const categoryValues = getCategoryValues(category)

  let nonBreakingTitle = title.replace(/ (?=[^ ]*$)/i, '&nbsp;')

</script>

<a href={url}>
  <article class='relative h-full my-6 rounded-md shadow-md'>
    <!--  <div-->
    <!--    class='{getCategoryValues.bg} text-right w-full h-[1.23rem] px-2 text-[rgba(0,0,0,0.1)]'>{getCategoryValues.title}-->
    <!--  </div>-->
    <div
      class='h-full w-full rounded-md flex flex-row'>
      <div class='flex flex-row'>
      <div
        class='flex flex-grow rounded-tl-md rounded-bl-md h-full w-[1rem] {categoryValues.bg}'/>
      <div
        class='relative flex flex-col justify-center w-full'>
        <!--   IMAGE   -->
        <div>
        <img
            class='relative object-cover lazy rounded-tr-md'
            src={hero}
            alt={title} />
        </div>
        <!--CONTENT-->
        <div class='px-2 py-3 pl-4'>
          <!-- TITLE  -->
          <h2
            class='text-base w-full font-bold'>
            {@html nonBreakingTitle}
          </h2>
          <!-- DESCRIPTION  -->
          <p
            class='text-sm font-light w-[90%]'>{@html
            post.description ?? ""}</p>
        </div>
        <!-- TAGS  -->
        <div
          class='flex flex-row justify-end items-center flex-wrap max-h-min pb-2 pl-4'>
          {#each tags as tag}
            <div
              class='text-xs m-1 py-1 px-2 {categoryValues.bg} rounded-md'>
              #{tag}
            </div>
          {/each}
        </div>
      </div>
      </div>
    </div>
  </article>
</a>
