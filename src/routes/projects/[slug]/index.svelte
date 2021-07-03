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
  import { Images } from 'svelte-images'
  import getCategoryValues from '../../../lib/getCategoryValues'
  import nonBreakingText from '../../../lib/nonBreakingText'
  import PageHeader from '../../../components/PageHeader.svelte'
  import YouTubeEmbed from '../../../components/YouTubeEmbed.svelte'

  export let post

  let {
    category,
    hero,
    images,
    tags,
    video
  } = post

  let categoryValues = getCategoryValues(category)

  let nonBreakingTitle = nonBreakingText(post.title)
  let nonBreakingDescription = nonBreakingText(post.description)


</script>
  <PageHeader color={categoryValues.color} bg={categoryValues.bg}
              title={post.title} description={post.description}/>

{#if !video}
<div class='px-12 py-4'>
<img src={hero} class='object-cover'/>
</div>
{/if}
{#if video}
  <div class='mx-4 mt-4 mb-8'>
  <YouTubeEmbed video='{video}' />
  </div>
{/if}

<div class='px-8 prose'>
{@html post.html}
</div>


{#if images}
  <div class='grid grid-cols-1 pt-4'>
  {#each images as { src, alt }, index (src+index)}
    <figure
      class='m-2 p-2'>
  <img src='{src}' alt={alt}
       class='object-contain border {categoryValues.border}'>
      <figcaption
        class='text-xs text-gray-500 py-2'>{alt}</figcaption>
      </figure>
  {/each}
  </div>
  {/if}

