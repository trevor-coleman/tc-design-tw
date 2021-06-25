<script context='module'>
  export async function load({
                               fetch,
                               page
                             }) {
    const res = await fetch(`/work.json`)
    console.log(res)
    return {
      props: {
        posts: await res.json()
      }
    }
  }
</script>

<script>
  import WorkPreview from '../../components/work/WorkPreview.svelte'

  export let posts
</script>

<div class='flex flex-col'>
    <div class='px-4'><h1 class='text-4xl font-medium'>
      Projects
    </h1>
    <p class='text-disabled text-sm'>Tap to see more information</p>
    </div>
  <div
    class='mx-4 grid-cols-1 gap-4  '>

    {#each posts as post, index}
      <WorkPreview post={post} index={index}/>
    {/each}

  </div>
</div>
