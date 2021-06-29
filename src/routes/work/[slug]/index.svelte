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
  import nonBreakingText from '../../../lib/nonBreakingText'

  export let post

  let {
    category,
    hero,
    images,
    tags
  } = post

  let categoryValues = getCategoryValues(category)

  let nonBreakingTitle = nonBreakingText(post.title);
  let nonBreakingDescription = nonBreakingText(post.description);

</script>
<div class='block text-sm pt-4 pb-2 px-4 text-[rgba(0,0,0,0.5)]'>
  <a href='/'>Home</a> /
  <a href='/work/'>Projects</a> /
  <span class='font-medium'>Canadian
                                                         Forces College</span>
</div>
<div class='bg-gray-200 w-full h-[2px] mx-4 mb-8' ></div>
  <Section topSlope={-2} bottomSlope={-2} title={post.title}
           bgcolor='{categoryValues.color}'
           description={post.description}>
  </Section>

<div class='px-12 py-4'>
<img src={hero} class='object-cover'/>
</div>

<div class='px-8 prose-lg'>
{@html post.html}
</div>

{#if images}
  <div class='grid grid-cols-1'>
  {#each images as { url, description }, index (url+index)}
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
