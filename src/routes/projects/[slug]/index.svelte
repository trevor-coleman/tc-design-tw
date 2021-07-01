<script context='module'>
  export async function load({ fetch, page }) {
    const res = await fetch(`/projects/${page.params.slug}.json`);
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
  import Breadcrumbs from '../../../components/utility/Breadcrumbs.svelte'
  import PageHeader from '../../../components/PageHeader.svelte'

  export let post

  let {
    category,
    hero,
    images,
    tags
  } = post

  let categoryValues = getCategoryValues(category)

  let nonBreakingTitle = nonBreakingText(post.title)
  let nonBreakingDescription = nonBreakingText(post.description)

</script>
  <PageHeader color={categoryValues.color} bg={categoryValues.bg}
              title={post.title} description={post.description}/>

<div class='px-12 py-4'>
<img src={hero} class='object-cover'/>
</div>

<div class='px-8 prose-lg'>
{@html post.html}
</div>

{#if images}
  <div class='mx-auto my-8 w-2/4 h-[1px] bg-[rgba(123,123,123,0.5)]'></div>
  <div class='grid grid-cols-1'>
  {#each images as { url, description }, index (url+index)}
    <div
      class='m-4 p-2 shadow-sm {categoryValues.border} border-[12px] ='>
  <img src='{url}' alt={description} class='object-contain'>
      </div>
  {/each}
  </div>
  {/if}

