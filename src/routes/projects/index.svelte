<script context='module'>
  export async function load({
                               fetch,
                               page
                             }) {
    const res = await fetch(`/projects.json`)
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
  import PageHeader from '../../components/PageHeader.svelte'

  export let posts
</script>

  <PageHeader
    color='blue'
    bg='bg-postitblue'
    title={'Projects'}
    description={"Tap for more information"}
    large
  />
  <div
    class='mx-8 grid-cols-1 gap-4  '>

    {#each posts as post, index}
      <WorkPreview post={post} index={index}/>
    {/each}

  </div>
