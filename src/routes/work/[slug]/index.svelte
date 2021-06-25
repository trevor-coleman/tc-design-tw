<script context='module'>
  export async function load({ fetch, page }) {
    const res = await fetch(`/work/${page.params.slug}.json`);
    return {
      props: {
        post: await res.json(),
      },
    };
  }
</script>

<script>

  import getCategoryValues from '../../../lib/getCategoryValues'
  import Section from '../../../components/sections/Section.svelte'

  export let post

  let {
    category,
    hero,
    images,
    tags
  } = post

  let categoryValues = getCategoryValues(category)

</script>
<div class='{categoryValues.bg} p-8'>
  <h1 class='text-2xl font-bold'>{post.title}</h1>
  <p class='text-lg font-thin'>{post.description}</p>
</div>
<div class='px-12 py-4'>
<img src={hero} class='object-cover'/>
</div>

<div class='px-8 prose-lg'>
{@html post.html}
</div>

{#if images}
  <div class='grid grid-cols-1'>
  {#each images as { url, description } (url)}
    <div
      class='m-4 p-2 border {categoryValues.border}'>
  <img src='{url}' alt={description} class='object-contain'>
      </div>
  {/each}
  </div>
  {/if}

<div class='mx-auto my-4 w-2/4 h-[1px] bg-[rgba(123,123,123,0.5)]'></div>
<div
  class='flex flex-row justify-center items-center flex-wrap max-h-min pb-2 pl-4'>
  {#each tags as tag}
    <div
      class='text-xs m-1 py-1 px-2 {categoryValues.bg} rounded-md'>
      #{tag}
    </div>
  {/each}
</div>
