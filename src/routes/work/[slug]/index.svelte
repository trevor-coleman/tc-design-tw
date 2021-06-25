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
    images,
    tags
  } = post

  let postImages = [...images]

  let firstImage = postImages.shift()


  let categoryValues = getCategoryValues(category)

</script>
<Section topSlope={-4} bottomSlope={-4} bgcolor={categoryValues.color}
         title={post.title}>
</Section>

<div>
<img src={firstImage}/>
</div>

<div class='p-4 prose-lg'>
{@html post.html}
</div>
{#each postImages as image, index (index)}
  <img src={image} />
  {/each}
