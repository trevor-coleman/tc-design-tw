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

<div class='flex flex-row'>
  <div class='bg-postitblue p-8 m-4'>
    <h1 class='text-4xl font-medium underline mb-4'>
      Projects
    </h1>
  </div>
  <div
    class='bg-postityellow m-4 flex-grow flex flex-col'>

    {#each posts as post}
      <WorkPreview post={post}/>
    {/each}

  </div>
</div>
